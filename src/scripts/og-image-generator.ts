import type { AstroIntegration } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import matter from 'gray-matter';

export default function ogImageGenerator(): AstroIntegration {
  return {
    name: 'og-image-generator',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        logger.info('Checking for missing Open Graph images...');

        const templatePath = path.resolve('./src/scripts/og-template.html');
        const templateHtml = fs.readFileSync(templatePath, 'utf-8');

        const outputDir = path.resolve('./public/generated_OG_images');
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        // Also ensure images are in the build output directory for immediate deployment
        const buildDir = fileURLToPath(dir);
        const buildOutputDir = path.join(buildDir, 'generated_OG_images');
        if (!fs.existsSync(buildOutputDir)) {
          fs.mkdirSync(buildOutputDir, { recursive: true });
        }

        const postsDir = path.resolve('./src/content/posts');
        const files = fs
          .readdirSync(postsDir)
          .filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

        const totalPosts = files.length;
        let generatedCount = 0;

        // Read favicon once and prepare base64 URI for inlining
        const faviconPath = path.resolve('./public/favicon.svg');
        let siteLogoBase64Uri = '';
        if (fs.existsSync(faviconPath)) {
          const faviconBase64 = fs.readFileSync(faviconPath).toString('base64');
          siteLogoBase64Uri = `data:image/svg+xml;base64,${faviconBase64}`;
        }

        const browser = await puppeteer.launch({
          headless: 'new',
          args: [
            '--allow-file-access-from-files',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
          ],
        });

        // Function to process a single file and generate its OG image
        const processPost = async (file: string) => {
          let page;
          try {
            const filePath = path.join(postsDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            // Use the slug from frontmatter, or fallback to filename without extension
            const slug = data.slug || path.parse(file).name;
            const outputPath = path.join(outputDir, `${slug}.png`);

            // Skip if image already exists
            if (fs.existsSync(outputPath)) {
              generatedCount++;
              return;
            }

            page = await browser.newPage();
            await page.setViewport({ width: 1200, height: 630 });
            page.setDefaultNavigationTimeout(60000);

            const title = data.title;
            // We use the raw path from the data for the background image
            const postImageSrc = data.postImage?.src;

            let postImageBase64Uri = '';
            if (postImageSrc) {
              const fullImagePath = path.join(postsDir, postImageSrc);
              if (fs.existsSync(fullImagePath)) {
                const imageBuffer = fs.readFileSync(fullImagePath);
                const ext = path
                  .extname(fullImagePath)
                  .toLowerCase()
                  .replace('.', '');
                const mimeType =
                  ext === 'svg'
                    ? 'image/svg+xml'
                    : `image/${ext === 'jpg' ? 'jpeg' : ext}`;
                postImageBase64Uri = `data:${mimeType};base64,${imageBuffer.toString(
                  'base64',
                )}`;
              }
            }

            // Use global regex to replace all occurrences of placeholders
            let html = templateHtml
              .replace(/{{title}}/g, title || '')
              .replace(/{{siteLogoPath}}/g, siteLogoBase64Uri)
              .replace(
                /{{postImageHtml}}/g,
                postImageBase64Uri
                  ? `<img src="${postImageBase64Uri}" class="bg-image" />`
                  : '',
              );

            logger.info(
              `Generating OG image for ${slug} (${++generatedCount}/${totalPosts})...`,
            );

            // Use networkidle2 to wait for images and webfonts; it's more resilient than networkidle0
            await page.setContent(html, {
              waitUntil: 'networkidle2',
              timeout: 45000,
            });

            // Wait for specific font families to be loaded
            // This is more reliable than just checking 'ready'
            await page.waitForFunction(
              () => {
                return (
                  document.fonts.check('1em Inter') &&
                  document.fonts.check('1em "Gochi Hand"') &&
                  document.fonts.ready
                );
              },
              { timeout: 15000 },
            );

            // Force a quick layout reflow and wait for rendering stability
            await page.evaluate(() => document.body.offsetHeight);
            await new Promise(r => setTimeout(r, 500));
            const buffer = await page.screenshot();

            // Write to both public (for your repo) and dist (for the current deploy)
            fs.writeFileSync(outputPath, buffer);
            fs.writeFileSync(path.join(buildOutputDir, `${slug}.png`), buffer);
          } catch (error) {
            logger.error(
              `Error generating OG image for ${file}: ${error.message}`,
            );
          } finally {
            if (page) await page.close(); // Close the page after processing
          }
        };

        // Process posts in small batches to prevent resource exhaustion and crashes
        // A limit of 2-3 is usually stable for most systems and CI environments
        const BATCH_SIZE = 2;
        for (let i = 0; i < files.length; i += BATCH_SIZE) {
          const batch = files.slice(i, i + BATCH_SIZE);
          await Promise.all(batch.map(file => processPost(file)));
        }

        await browser.close(); // Close the browser once all pages are done
        logger.info('OG image generation complete.');
      },
    },
  };
}
