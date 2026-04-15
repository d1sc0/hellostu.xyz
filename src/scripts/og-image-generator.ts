import type { AstroIntegration } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import matter from 'gray-matter';

/** Recursive helper to find all markdown and astro files */
function getFilesRecursive(dir: string, allFiles: string[] = []) {
  if (!fs.existsSync(dir)) return allFiles;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFilesRecursive(name, allFiles);
    } else if (
      file.endsWith('.md') ||
      file.endsWith('.mdx') ||
      file.endsWith('.astro')
    ) {
      allFiles.push(name);
    }
  });
  return allFiles;
}

// Title mapping for static Astro pages
const PAGE_TITLES: Record<string, string> = {
  index: 'Hello Stu',
  about: 'About Me',
  posts: 'Blog Posts',
  podcasts: 'Podcasts',
  '404': 'Page Not Found',
};

// CLI entrypoint for OG image generation
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    console.log('Generating Open Graph images...');
    const templatePath = path.resolve('./src/scripts/og-template.html');
    const templateHtml = fs.readFileSync(templatePath, 'utf-8');
    const outputDir = path.resolve('./public/generated_OG_images');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const postsDir = path.resolve('./src/content/posts');
    const pagesDir = path.resolve('./src/pages');
    const allFiles = [
      ...getFilesRecursive(postsDir),
      ...getFilesRecursive(pagesDir),
    ];
    const faviconPath = path.resolve('./public/favicon.svg');
    let siteLogoBase64Uri = '';
    if (fs.existsSync(faviconPath)) {
      const faviconBase64 = fs.readFileSync(faviconPath).toString('base64');
      siteLogoBase64Uri = `data:image/svg+xml;base64,${faviconBase64}`;
    }
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--allow-file-access-from-files',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    });
    let createdImages = [];
    for (const filePath of allFiles) {
      let page;
      try {
        const isMarkdown =
          filePath.endsWith('.md') || filePath.endsWith('.mdx');
        let title = '';
        let slug = '';
        let postImageSrc = '';
        let postImageBase64Uri = '';
        if (isMarkdown) {
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const { data } = matter(fileContent);
          title = data.title;
          slug = data.slug || path.parse(filePath).name;
          postImageSrc = data.postImage?.src;
        } else {
          const parsedPath = path.parse(filePath);
          const fileName = parsedPath.name;
          const parentDirName = path.basename(parsedPath.dir);
          if (fileName === 'index') {
            slug = parentDirName === 'pages' ? 'index' : parentDirName;
          } else if (fileName.includes('[') && fileName.includes(']')) {
            slug = parentDirName;
          } else {
            slug = fileName;
          }
          if (!slug && parentDirName === 'pages') slug = 'index';
          title =
            PAGE_TITLES[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
          postImageSrc = path.resolve(
            './src/assets/page_images/default-social-image.jpg',
          );
        }
        const outputPath = path.join(outputDir, `${slug}.png`);
        if (fs.existsSync(outputPath)) {
          continue;
        }
        page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 630 });
        page.setDefaultNavigationTimeout(60000);
        if (postImageSrc) {
          const fullImagePath = postImageSrc.startsWith('/src')
            ? path.resolve('.' + postImageSrc)
            : path.isAbsolute(postImageSrc)
              ? postImageSrc
              : path.resolve(path.dirname(filePath), postImageSrc);
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
            postImageBase64Uri = `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
          }
        }
        let html = templateHtml
          .replace(/{{title}}/g, title || '')
          .replace(/{{siteLogoPath}}/g, siteLogoBase64Uri)
          .replace(
            /{{postImageHtml}}/g,
            postImageBase64Uri
              ? `<img src=\"${postImageBase64Uri}\" class=\"bg-image\" />`
              : '',
          );
        await page.setContent(html, {
          waitUntil: 'networkidle2',
          timeout: 45000,
        });
        await page.waitForFunction(
          () =>
            document.fonts.check('1em Inter') &&
            document.fonts.check('1em "Gochi Hand"') &&
            document.fonts.ready,
          { timeout: 15000 },
        );
        await page.evaluate(() => document.body.offsetHeight);
        await new Promise(r => setTimeout(r, 500));
        const buffer = await page.screenshot();
        fs.writeFileSync(outputPath, buffer);
        createdImages.push(`${slug}.png`);
      } catch (error: any) {
        console.error(
          `Error generating OG image for ${filePath}: ${error.message}`,
        );
      } finally {
        if (page) await page.close();
      }
    }
    await browser.close();
    createdImages.forEach(name =>
      console.log(`social-image: ${name} - created`),
    );
  })();
}
