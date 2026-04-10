# OG Image Generator Script Notes

## Purpose

This script (`src/scripts/og-image-generator.ts`) automatically generates Open Graph (OG) images for blog posts and pages during the Astro build process. It ensures every post/page has a visually consistent OG image for social sharing.

## How It Works

- Runs as an Astro integration after build (`astro:build:done` hook).
- Scans all Markdown/MDX posts and Astro pages for metadata (title, image, etc.).
- Uses Puppeteer to render an HTML template (`src/scripts/og-template.html`) and capture a screenshot as a PNG.
- Outputs images to `public/generated_OG_images/` and the build output directory.
- Inlines the favicon as a logo if present.
- Handles batching to avoid resource exhaustion.

## Key Files

- `src/scripts/og-image-generator.ts`: Main script logic
- `src/scripts/og-template.html`: HTML template for OG images
- `public/generated_OG_images/`: Output directory for generated images
- `public/favicon.svg`: Used as the site logo in OG images (if present)

## Customization

- Update the HTML template for branding or layout changes.
- Adjust image size, fonts, or logo in the template as needed.
- Add new metadata fields by updating the script and template.

## Troubleshooting

- Ensure Puppeteer dependencies are installed (`npm install puppeteer`).
- If images are missing, check for errors in the Astro build logs.
- Make sure all referenced images exist and paths are correct.

## See Also

- [astro.config.mjs](../astro.config.mjs): Integration registration
- [README.md](../README.md): Project overview and build instructions
