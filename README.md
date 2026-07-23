# Portfolio

Personal portfolio site — static Astro app with React islands, Pigment CSS, and content from Sanity.

## Stack

- [Astro](https://astro.build) 7 (static, GitHub Pages)
- [React](https://react.dev) (feature UI / islands)
- [Pigment CSS](https://github.com/mui/pigment-css)
- [Sanity](https://www.sanity.io) (headless CMS, fetched at build time)
- [Bun](https://bun.sh) (package manager)
- TypeScript

## Setup

```bash
bun install
cp .env.example .env   # SANITY_PROJECT_ID, SANITY_DATASET
bun run dev
```

```bash
bun run build
bun run preview        # http://localhost:4321/Portfolio/
bun run lint
bun run type-check
```

Sanity Studio lives in `studio/` (`bun install` / `bun run dev` there).

## License

MIT

## Acknowledgements

Icons from [Simple Icons](https://simpleicons.org) and [SVG Repo](https://svgrepo.com).
