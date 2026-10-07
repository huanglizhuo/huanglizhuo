# blog.clothpath.com

Huang's personal site, built with [Astro](https://astro.build) and the
[AstroPaper](https://github.com/satnaing/astro-paper) theme, deployed to Cloudflare Pages.

- `/` — projects (EchoPod, OctoCounts, FuseBar, Ketsuin, QwenASR) + recent posts
- `/posts` — blog posts (Markdown in `src/content/posts/`)
- `/about` — about page (`src/content/pages/about.md`)

Site-wide settings (title, socials, features) live in `astro-paper.config.ts`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Type-check, build to `./dist/`, and index with Pagefind |
| `npm run preview` | Preview the build locally |
