# Bitcoin Units

An informational web app promoting the use of the ₿ symbol and bitcoin units, with educational content for developers and AI agents.

## Run & Operate
- **Dev**: `npm run dev` (serves on port 5000)
- **Build**: `npm run build`
- **Start (prod)**: `npm run start`
- **Typecheck**: `npm run check`
- **DB push**: `npm run db:push`
- **Required env**: `DATABASE_URL` (PostgreSQL connection string — provided by Replit)

## Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS v3, Radix UI (shadcn/ui), Wouter, TanStack Query, Framer Motion
- **Backend**: Express 5, Node.js 20, tsx
- **ORM**: Drizzle ORM + drizzle-kit, `pg` driver
- **DB**: PostgreSQL (Replit managed)
- **Build**: esbuild (server bundle → `dist/index.cjs`), Vite (client bundle → `dist/public`)

## Where things live
- `client/src/` — React frontend
- `client/src/pages/Desktop.tsx` — primary landing page
- `client/public/figmaAssets/` — static design assets from Figma
- `server/` — Express backend (routes, storage, vite middleware)
- `shared/schema.ts` — Drizzle DB schema + Zod types (source of truth)
- `drizzle.config.ts` — Drizzle config

## Architecture decisions
- Single Express process serves both API (`/api/*`) and Vite-compiled frontend in dev; serves static `dist/public` in prod.
- `server/storage.ts` uses a repository pattern; defaults to `MemStorage` but is wired for PostgreSQL.
- Passport + passport-local packages are installed but auth is not yet implemented in routes.
- Figma assets are stored as static files in `client/public/figmaAssets/`.
- `POST /api/edit-image` (multer memory upload) → OpenAI `images.edit` (model `gpt-image-2`) for the "TRY IT OUT" screenshot feature. Requires `OPENAI_API_KEY`.

## Product
- Informational site advocating for consistent use of the ₿ symbol and bitcoin denomination standards.
- Includes educational content for developers and AI agent training material.

## User preferences
_Populate as you build_

## Gotchas
- Tailwind config uses `.ts` extension — causes a harmless Replit cartographer warning in dev; can be ignored.
- Run `npm run db:push` after schema changes to sync with the database.

## Pointers
- DB schema: `shared/schema.ts`
- API routes: `server/routes.ts`
- Vite config: `vite.config.ts`
