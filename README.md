# Oscar Assaf — Portfolio

Personal site rebuilt with Vite, React, TypeScript, and Tailwind.

## Develop

```bash
npm install
npm run dev
```

## Add a project

Edit `src/data/projects.ts`. Drop screenshots in `src/assets/` and add them to `image` plus the `gallery` array.

Featured work uses `featured: true`. One project can be `spotlight: true` for the large home card. Everything else shows in the horizontal gallery and on `/projects`.

## Build

```bash
npm run build
npm run preview
```

Production builds use the `/Portfolio/` base path for GitHub Pages.
