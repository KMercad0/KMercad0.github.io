# kmercad0.github.io

Personal portfolio of Karl Mercado — software developer, Philippines.
Live at **https://kmercad0.github.io**

## Stack

Next.js 15 (App Router, static export) · React 19 · TypeScript · Tailwind CSS 3.4 · motion 11

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Running it

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Layout

```
app/                    App Router entry, metadata, global styles
components/             One file per page section
public/showcase/        Standalone case-study pages for private client work
public/videos/          Section background loops (desktop + mobile cuts)
```

Project and experience data are plain arrays at the top of their section
components — `components/Projects.tsx`, `components/Automations.tsx`,
`components/Experience.tsx`. Edit those to change content.
