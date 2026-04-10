# Copilot Workspace Instructions for hellostu.xyz

## Purpose

This file provides essential guidance for AI agents and developers working in the hellostu.xyz Astro project. It summarizes build commands, architecture, conventions, and key patterns. For detailed documentation, see the [README.md](../README.md).

---

## Build & Development

- **Start dev server:** `npm run dev` (or `npm start`)
- **Build for production:** `npm run build`
- **Preview build:** `npm run preview`
- **Astro CLI:** `npm run astro`
- **No automated tests**: Testing is manual; no test scripts/framework present.

---

## Architecture & Patterns

- **Framework:** Astro (static site generator)
- **Content:** Markdown/MDX in `src/content/posts/`, schema in `src/content/config.ts`
- **Components:** Modular Astro components in `src/components/`
- **Layouts:** Shared layouts in `src/layouts/`
- **Pages:** Route-based in `src/pages/`
- **Images:** Use `public/` or `src/assets/`
- **CMS:** SveltiaCMS (admin at `/admin/`, config in `public/admin/config.yml`, see [SveltiaCMS docs](https://sveltia.com/docs/))
- **Integrations:** MDX, image tools, icons, sitemap, OG image generator, social sharing, comments

---

## Project Conventions

- **Content schema:** All posts require `title`, `pubDate`, `description`, `postImage`, `tags`, and optional `draft` (see `src/content/config.ts` and SveltiaCMS `config.yml`)
- **Date formatting:** Use `toLocaleDateString` with UK locale
- **Tags:** For categorization/navigation; see tag mapping in components
- **Global styles:** Centralized in `src/styles/global.css`
- **Frontmatter:** Used in Markdown/MDX for metadata
- **Image usage:** Use Astro's `<Image />` for optimization
- **Content management:** Use SveltiaCMS UI at `/admin/` for editing/creating posts; configuration in `public/admin/config.yml`

---

## Pitfalls & Issues

- **MDX support:** May cause build errors; see README for notes
- **No automated tests:** Manual QA required
- **SveltiaCMS:** Ensure `public/admin/config.yml` is up to date with content schema; see SveltiaCMS docs for advanced config
- **Manual content migration:** No automated migration tools
- **Environment:** Ensure correct Node version and dependencies
- **Global CSS:** Use of `!important` may cause specificity issues

---

## Key Files & References

- `src/content/config.ts`: Content schema
- `public/admin/config.yml`: SveltiaCMS config and content model
- `src/pages/admin/index.astro`: SveltiaCMS admin UI
- `src/components/PostPreview.astro`: Post card pattern
- `src/layouts/MarkdownPostLayout.astro`: Post layout, social sharing, comments
- `src/pages/index.astro`: Home page composition
- `src/styles/global.css`: Centralized styling
- `astro.config.mjs`: Integrations and site config
- `docs/og-image-generator.md`: OG image generator script notes
- `README.md`: Project goals, to-do, and migration notes

---

## Link, Don't Embed

For detailed explanations, always link to the relevant file or documentation (e.g., [README.md](../README.md)), rather than duplicating content here.

---

## Example Prompts

- "Add a new blog post using the content schema."
- "Update the global styles for all pages."
- "Fix MDX build errors."
- "Add a new Astro component for social sharing."

---

## Next Steps

- Consider adding automated tests or a test framework.
- If the workspace grows, use `applyTo` patterns for area-specific instructions (e.g., frontend, content, scripts).
- For further customization, create agent, hook, instruction, prompt, or skill files as needed.
