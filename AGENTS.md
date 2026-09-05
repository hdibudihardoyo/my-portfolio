# AGENTS.md

## Stack
- Vite 8 + React 19 + TypeScript 6 (App Router? no — single-page app).
- Tailwind CSS v4 via `@tailwindcss/vite` plugin.
- shadcn/ui components (`master-ui` style `base-nova`, library base-ui) in `src/ui/`.
- Icons: `lucide-react` for UI icons; brand/tech logos via `react-icons/si` (Simple Icons) wrapped in `StackIcon` (`src/components/stack-icon.tsx`).
- Routing: `react-router-dom` (BrowserRouter) in `src/App.tsx`.
- i18n: `react-i18next` + `i18next-browser-languagedetector`; locales in `src/i18n/locales/{id,en}.json`; setup in `src/lib/i18n.ts`.
- Theme: custom `ThemeProvider` (`src/components/theme-provider.tsx`), class `.dark` on `<html>`, stored in localStorage `theme`.
- Auth: Google Identity Services via `AuthProvider` (`src/lib/auth.tsx`), reads `VITE_GOOGLE_CLIENT_ID` (see `.env.example`). Stores signed-in user in localStorage `portfolio.auth.user` until a backend/database exists; guestbook form is gated behind sign-in.

## Commands
- `npm install`
- `npm run dev` (Vite dev server)
- `npm run build` (`tsc -b && vite build`)
- `npm run lint` (oxlint)

## Important npm 12 note
- The global `.npmrc` restricts lifecycle scripts (`allow-scripts=opencode-ai`), so `package.json` sets `"allowScripts": true`.
- npm 12 forbids the `--allow-scripts` CLI flag, which breaks the shadcn CLI's internal `npm install`. Do NOT try to run `npx shadcn init/add`.

## Adding shadcn components
Use `node scripts/fetch-shadcn.mjs <component> [...]` — it downloads sources from the public `base-nova` registry, rewrites `@/registry/base-nova/*` imports to project aliases, and prints npm deps to install manually.

## Path aliases
`@/*` maps to `./src/*` (see `tsconfig.app.json` and `vite.config.ts`).

## Structure
- `src/pages/` — route pages (dashboard, about, projects, achievements, creations, guestbook, links, contact).
- `src/components/layout/` — `AppSidebar`, `AppHeader` shell.
- `src/components/` — shared bits (theme-toggle, language-toggle, page-header, icon-placeholder).
- `src/data/portfolio.ts` — sample content (replace with real data).
- `src/ui/` — shadcn components.

## Design language
Brutalism: sharp corners (`--radius-*: 0px`), thick `border-2 border-foreground`, hard offset shadows (`shadow-brutal`, `shadow-brutal-lg`, defined as `@utility` in `src/index.css`), mono accents (Space Mono) + heavy headings (Archivo). Theme tokens live in `src/index.css` (`:root` and `.dark`).