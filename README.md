# H3nry 2.0

Ground-up rebuild of H3nry around the Value Frontier, with a block-built exploration theme.

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
```

The application uses native Next.js so local development, GitHub builds, and Vercel production share the same runtime and build command.
