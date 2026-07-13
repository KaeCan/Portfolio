# Portfolio

Personal portfolio site built as a **content-driven Astro** project: static pages, typed content collections, and one small React island for the command palette.

## Tech Stack

- **Astro** (static output)
- **Content Collections** (JSON + Zod)
- **TypeScript**
- **React** (command palette island only)

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run type-check
```

## Project Structure

```
src/
├── content.config.ts      # Collection schemas + loaders
├── content/               # Experience, site data (+ projects data, page disabled)
├── components/
│   ├── ui/                # Static .astro sections
│   ├── islands/           # Client islands (command palette)
│   └── seo/
├── layouts/
│   └── BaseLayout.astro
├── lib/                   # Shared pure helpers
├── pages/                 # Routes (thin view controllers)
└── styles/
```

Adding a job, project, or skill means editing a file under `src/content/` — not a page component.

## License

MIT

## Acknowledgements

Icons from [Simple Icons](https://simpleicons.org) and [SVG Repo](https://svgrepo.com).
