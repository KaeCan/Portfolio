# Portfolio

Personal portfolio site built as a **content-driven Astro** project: static output, typed Content Collections, feature-driven React UI with **Pigment CSS**, and selective island hydration for interactive sections.

Architecture standards: [.cursor/skills/portfolio-architecture/SKILL.md](.cursor/skills/portfolio-architecture/SKILL.md).

## Tech Stack

- **Astro 7** (static output, `base: /Portfolio` for GitHub Pages)
- **Bun** (package manager / scripts)
- **Content Collections** (JSON + Markdown + Zod)
- **TypeScript**
- **React** (SSR feature components; islands where hooks are used)
- **Pigment CSS** (`*.styles.ts`, build-time style extraction)

## Development

```bash
bun install
bun run dev
bun run build
bun run preview   # http://localhost:4321/Portfolio/
bun run lint
bun run type-check
```

## Routes

| Route         | Feature      | Hydration        |
| ------------- | ------------ | ---------------- |
| `/`           | `hero`       | None (static)    |
| `/experience` | `experience` | `client:visible` |

Global chrome: `command-palette` in `BaseLayout.astro` with `client:load`.

## Project Structure

```
src/
├── content.config.ts           # Collection schemas + loaders
├── content/                    # experience.json, site.json, projects.json, detailed-experience/
├── pages/                      # Thin route wrappers (fetch content, compose features, set client:*)
├── layouts/
│   └── BaseLayout.astro        # Shell, SEO, global CSS, command palette island
├── components/
│   ├── ui/shared/              # Design system — Glass, Kbd, TechChip, Icon
│   └── seo/                    # SEO.astro meta component
├── features/                   # hero, experience, command-palette (+ projects scaffold)
│   └── <name>/
│       ├── index.tsx           # Main feature component (not a barrel)
│       ├── <Name>.styles.ts    # Feature-level layout styles (optional)
│       ├── types.ts            # Re-exports or domain-only types (optional)
│       ├── hooks/              # Logic shared across subcomponents (optional)
│       ├── utils/              # Pure helpers shared across subcomponents (optional)
│       └── components/<Name>/  # Subcomponents — mirror feature structure
│           ├── <Name>.tsx
│           ├── <Name>.styles.ts
│           ├── hooks/          # Logic private to this subcomponent (optional)
│           └── utils/          # Pure helpers private to this subcomponent (optional)
├── types/                      # Cross-feature types (content.ts, icons.ts)
├── utils/                      # Cross-cutting pure helpers (e.g. platform.ts)
└── styles/
    ├── tokens.css              # Semantic CSS custom properties (runtime source of truth)
    ├── global.css              # Imports tokens, resets, app-shell
    └── pigment-theme.ts        # Pigment theme bridge → var(--token)
```

Import the feature component from `@/features/<name>`. Import types, utils, and hooks directly from their defining files — not through feature `index.tsx`.

Adding a job or site stat means editing a file under `src/content/` — not a page component.

## Content Collections

| Collection           | Status   | Notes                                          |
| -------------------- | -------- | ---------------------------------------------- |
| `experience`         | Active   | Work history on `/experience`                  |
| `site`               | Active   | Name, role, nav, social, stats                 |
| `projects`           | Scaffold | JSON + `features/projects/` — no route yet     |
| `detailedExperience` | Reserved | Markdown for future AI-curated resume variants |

## Hydration

| UI                    | Directive        | Location                   |
| --------------------- | ---------------- | -------------------------- |
| Command palette       | `client:load`    | `layouts/BaseLayout.astro` |
| Live experience hours | `client:visible` | `pages/experience.astro`   |

Static features (`hero`, cards, grids) ship without `client:*`. The hero page uses a tiny inline `<script>` only to swap the ⌘/Ctrl key label — see portfolio-architecture skill for when that exception applies.

## License

MIT

## Acknowledgements

Icons from [Simple Icons](https://simpleicons.org) and [SVG Repo](https://svgrepo.com).
