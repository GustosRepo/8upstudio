# 8UP Studio — Progress Checklist

Source of truth for build status against `8UP-Studio-Codex-Brief.md`.

## Done

- [x] Next.js 16 (App Router) + TypeScript + Tailwind v4 scaffolded
- [x] Framer Motion (`motion` package) installed and used for reveals/hero/nav
- [x] Brand fonts wired: Fraunces (serif) + Inter (sans), ivory/ink/mauve/burgundy palette in `globals.css`
- [x] Data architecture: `src/data/{types,site,navigation,services,projects,caseStudies,leadOptions}.ts`
- [x] Shared layout: `Header`, `Footer`, SEO metadata, JSON-LD (ProfessionalService), `robots.ts`, `sitemap.ts`
- [x] `MediaPlaceholder` component for clearly labeled, correctly-aspect-ratio placeholders (see `public/media/README.md` for expected filenames)
- [x] Homepage: Hero, Editorial Statement, Featured Work, Services Showcase, Differentiator, Case Study (702Market sample), Monthly Content, About Preview, Final CTA
- [x] `/work` — filterable portfolio grid
- [x] `/services` — three service families (Photo / Motion / Social)
- [x] `/about` — creator-led positioning
- [x] `/work-with-us` — 4-step inquiry funnel (services → about you → goals → project) with "YOU'RE IN." confirmation
- [x] `POST /api/leads` — zod-validated, inserts into Supabase (`leads` table) when env vars are set, sends studio + client emails via Resend when `RESEND_API_KEY` is set
- [x] `supabase/migrations/0001_create_leads.sql` — leads table schema
- [x] `.env.example` documenting required env vars
- [x] `npx tsc --noEmit`, `npm run build`, `npx eslint .` all pass clean
- [x] `/admin` — protected dashboard: Supabase Auth login, middleware/proxy-gated routes, lead list with status filter + search, lead detail view with status change + internal notes

## Not started yet (next steps)

- [ ] Supabase project provisioning + running both migrations + adding real env vars
- [ ] Create at least one Supabase Auth user (email/password) for admin login — no self-signup flow exists by design
- [ ] Resend account + verified sending domain + env vars
- [ ] Replace placeholder media in `public/media/` with real A6700 exports (filenames documented in `public/media/README.md`)
- [ ] Project/case-study detail pages (optional, brief marks as future)
- [ ] Deeper accessibility + performance pass (image/video real-asset optimization can only be finished once real media is in place)
- [ ] Deploy to Vercel + connect domain

## Notes

- Budget/services/goals option lists live in `src/data/leadOptions.ts` — easy to edit without touching the form component.
- Metrics for 702Market are the brief's sample figures; swap in `src/data/{projects,caseStudies}.ts` once verified real numbers are supplied.
- Admin auth: `src/proxy.ts` (Next.js 16 renamed `middleware.ts` → `proxy.ts`) protects `/admin/:path*` using a Supabase session check; unauthenticated users or missing Supabase env vars redirect to `/admin/login`.
- Admin RLS: run `supabase/migrations/0001_create_leads.sql` then `0002_leads_rls.sql` — the dashboard reads/writes leads as the signed-in user, gated by RLS policies for the `authenticated` role.
