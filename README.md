# Hello Stu: Astro

## Site build To-do list

- [x] Blog collection
- [x] Pagination for blog collections
- [x] adding drafts
- [x] SEO - done basic config
- [x] imageTools (test Mdx again)
- [x] Add in MDX support - done (needs further testing errors on build)
- [x] Content migration (for MD)
- [x] Added Tag counts
- [x] Layout and Global Styling
- [x] Content Styling & improve hamburger
- [x] image resizing
- [x] add dates to cards
- [x] tag list component
- [x] about page content
- [x] check RSS feed
- [x] check SEO and social links
- [x] markdown and image style checks
- [x] footer links and styling
- [x] Podcast micro copy page
- [x] Sitemap
- [x] 404
- [x] Backup old site
- [x] Check Github Action, deploy, test
- [x] Sort out cover images and component
- [x] jcc page migration
- [x] Simple analytics
- [x] Properly revisit 404
- [x] consolidate styles and tidy into global
- [x] bugger around with MDX posts and react components I'll be missing.
- [x] Maybe look at setting up a headless CMS - have tried - Decap CMS, Tina, VSCode Front Matter and they all suck. Stick to Bear and the code editor for the time being
- [x] post some content
- [x] and then maybe some more
- [x] add next and previous post buttons?

- maybe add some sharing buttons or at least a prompt
- improve pagination component?

# Bulit on top of the Minimal starter below

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
