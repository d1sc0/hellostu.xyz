// Preview Image Generator: creates 600x315px preview images for posts using postImage.src or a default image
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import puppeteer from 'puppeteer';

const templatePath = path.resolve('./src/scripts/preview-template.html');
const outputDir = path.resolve('./public/generated_preview_images');
const defaultImage = path.resolve(
  './src/assets/page_images/default-social-image.jpg',
);
const postsDir = path.resolve('./src/content/posts');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function generatePreviewImages() {
  const files = fs.readdirSync(postsDir);
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  });

  let createdImages = [];
  for (const file of files) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    const filePath = path.join(postsDir, file);
    const { data } = matter(fs.readFileSync(filePath, 'utf-8'));
    const slug = data.slug || path.parse(file).name;
    const outputPath = path.join(outputDir, `${slug}.png`);
    if (fs.existsSync(outputPath)) {
      continue;
    }
    let postImageSrc = data.postImage?.src;
    let fullImagePath = '';
    if (postImageSrc) {
      fullImagePath = postImageSrc.startsWith('/src')
        ? path.resolve('.' + postImageSrc)
        : path.isAbsolute(postImageSrc)
          ? postImageSrc
          : path.resolve(path.dirname(filePath), postImageSrc);
      if (!fs.existsSync(fullImagePath)) fullImagePath = defaultImage;
    } else {
      fullImagePath = defaultImage;
    }
    const imageBuffer = fs.readFileSync(fullImagePath);
    const ext = path.extname(fullImagePath).toLowerCase().replace('.', '');
    const mimeType =
      ext === 'svg' ? 'image/svg+xml' : `image/${ext === 'jpg' ? 'jpeg' : ext}`;
    const postImageBase64Uri = `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
    const html = templateHtml.replace(
      /{{postImageHtml}}/g,
      `<img src="${postImageBase64Uri}" class="bg-image" />`,
    );
    const page = await browser.newPage();
    await page.setViewport({ width: 600, height: 315 });
    await page.setContent(html, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: outputPath, type: 'png' });
    await page.close();
    createdImages.push(`${slug}.png`);
  }
  await browser.close();
  createdImages.forEach(name => console.log(`Created: ${name}`));
  console.log(
    `Preview image generation complete. ${createdImages.length} new images created.`,
  );
}

generatePreviewImages();
