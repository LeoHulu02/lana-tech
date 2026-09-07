# lana-tech

React + Next.js + Tailwind CSS project for the Lana Tech website.

## Development Server

```bash
pnpm dev
```

The Next.js development server runs on port 3000 by default.

## Project Structure

- `src/app/layout.tsx` — Root layout, metadata, and font wiring
- `src/app/page.tsx` — Home route
- `src/app/globals.css` — Global CSS and Tailwind CSS v4 import
- `src/components/HomePage.tsx` — Primary landing page UI
- `package.json` — Project dependencies and Next.js scripts
- `next.config.ts` — Next.js configuration
- `postcss.config.mjs` — Tailwind CSS v4 PostCSS plugin
- `.mise.toml` — Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: Next.js 15, React 19, and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/postcss` plugin
- Build tooling: TypeScript 5.7
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through `@tailwindcss/postcss` in `postcss.config.mjs`. `src/app/globals.css` imports Tailwind with `@import "tailwindcss";`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/app/globals.css`. This scaffold does not need a Tailwind config file.

Font wiring uses `next/font/google` in `src/app/layout.tsx`. Keep CSS `@import` statements first in `src/app/globals.css`.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
