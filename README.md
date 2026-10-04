# H3nry 2.0

Ground-up rebuild of H3nry around the Value Frontier, with an original block-built exploration theme.

## Current product

- Interactive quality-versus-price Value Frontier
- Category, price ceiling, and owned-watch filters
- Selectable watch signals with synchronized field notes
- Accessible data-table alternative
- Responsive discovery shortlist and scoring methodology

## Source of truth

- Canonical repository: `https://github.com/drap7-coder/h3nry-2`
- Production branch: `main`
- Production: `https://h3nry-2.vercel.app`
- Vercel deploys automatically from GitHub `main`.
- Cursor Origin is a working mirror only; feature work must begin from the current mirrored `main` and approved commits are promoted to GitHub.

## Local development

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
npm test
```

The application uses native Next.js so local development, GitHub builds, and Vercel production share the same runtime and build command.
