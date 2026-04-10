# Hello Stu: Astro

This is the codebase for [hellostu.xyz](https://hellostu.xyz), a personal website and blog built with Astro, Markdown/MDX, and SveltiaCMS.

---

## Features

- **Astro** static site generator
- **Markdown/MDX** content in `src/content/posts/`
- **SveltiaCMS** for content management (admin at `/admin/`)
- **Modular Astro components** for posts, layouts, and UI
- **Open Graph image generator** for social sharing
- **Optimized images** with Astro's `<Image />`
- **Social sharing, comments, and more**

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the dev server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview the build:**
   ```sh
   npm run preview
   ```

---

## Content Management

- **SveltiaCMS** is configured at `/admin/` (see `src/pages/admin/index.astro` and `public/admin/config.yml`).
- Posts are stored as Markdown or MDX in `src/content/posts/`.
- Content schema is defined in `src/content/config.ts` and mirrored in the CMS config.
- Images for posts are stored in `src/assets/post_images/`.

---

## OG Image Generator

- Automatically generates Open Graph images for posts and pages during build.
- See [`docs/og-image-generator.md`](docs/og-image-generator.md) for details.

---

## Project Structure

- `src/content/` — Content schema and posts
- `src/components/` — Astro components
- `src/layouts/` — Shared layouts
- `src/pages/` — Route-based pages
- `src/assets/` — Images and static assets
- `public/` — Static files, admin config, generated OG images
- `docs/` — Project and script documentation

---

## Pitfalls & Notes

- **MDX support:** May cause build errors; see notes in workspace instructions.
- **No automated tests:** Manual QA required.
- **SveltiaCMS:** Keep `public/admin/config.yml` in sync with content schema.
- **Manual content migration:** No automated migration tools.
- **Node version:** Use a compatible Node.js version as per Astro requirements.

---

## References

- [Astro documentation](https://docs.astro.build/)
- [SveltiaCMS documentation](https://sveltia.com/docs/)
- [Workspace instructions](.github/copilot-instructions.md)

---

## To Do / Ideas

- Add automated tests or a test framework
- Expand component library
- Improve accessibility and performance
- Add more documentation for custom scripts and integrations
  +- Re-implement and style JamComments (comment system)

---

## License

Content is shared under [CC-BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) by Stuart Mackenzie.
