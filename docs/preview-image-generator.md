# Preview Image Generator Script Notes

## Purpose

This script (`src/scripts/preview-image-generator.ts`) automatically generates preview images for blog post cards during the Astro build process. These images are optimized for use in post previews and are visually consistent across the site.

## How It Works

- Runs as part of the build process (see `package.json` build script).
- Scans all Markdown/MDX posts for a `postImage.src` in frontmatter.
- Uses Puppeteer to render a simple HTML template (`src/scripts/preview-template.html`) and capture a screenshot as a PNG.
- Outputs images to `public/generated_preview_images/`.
- Falls back to a default image if no post image is found or the path is invalid.
- Skips generating images if they already exist, for faster builds.

## Key Files

- `src/scripts/preview-image-generator.ts`: Main script logic
- `src/scripts/preview-template.html`: HTML template for preview images
- `public/generated_preview_images/`: Output directory for generated images
- `src/assets/page_images/default-social-image.jpg`: Default fallback image

## Customization

- Update the HTML template for layout or style changes.
- Adjust image size or aspect ratio in the script/template as needed.
- Change the fallback image by updating the default image path.

## Troubleshooting

- Ensure Puppeteer dependencies are installed (`npm install puppeteer`).
- If images are missing, check for errors in the build logs.
- Make sure all referenced images exist and paths are correct.

## See Also

- [astro.config.mjs](../astro.config.mjs): Astro configuration
- [README.md](../README.md): Project overview and build instructions
- [og-image-generator.md](og-image-generator.md): OG image generator documentation
