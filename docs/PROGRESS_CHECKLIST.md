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
- [x] Supabase project provisioned (real project, `.env.local` populated with URL + anon/publishable + service role key)
- [x] Both migrations run against the live project (`leads` table + RLS policies confirmed live)
- [x] Live end-to-end test: `POST /api/leads` → row verified in Supabase via service-role query → test row deleted
- [x] Admin login tested with a real Supabase Auth user — signed in successfully at `/admin/login`
- [x] Full click-through QA: submitted a real inquiry via `/work-with-us` UI → appeared instantly in `/admin` → opened detail page → changed status (new → contacted) → saved internal notes → confirmed persistence after reload → test lead cleaned up
- [x] Accessibility + motion polish pass: global `prefers-reduced-motion` respected via `MotionConfig` (all Motion animations) + CSS fallback, skip-to-content link, visible `:focus-visible` rings site-wide, `aria-pressed`/`aria-current` on all toggle-style buttons (inquiry funnel, work filters, admin status/filters), `<main>` landmark added to admin layout, bumped low-opacity label text (`/40`–`/50` → `/55`–`/70`) for better contrast, larger mobile menu tap target, `overflow-x: hidden` safety on `html`/`body`

## Not started yet (next steps)

- [ ] **Resend — paused, waiting on user.** Code is ready (`src/lib/email.ts` defaults to Resend's shared `onboarding@resend.dev` sender so no domain is required to start). Still needs: a Resend account + `RESEND_API_KEY` + `LEAD_EMAIL_TO` in `.env.local`. User doesn't have the `8upstudio.com` domain yet — that's fine, domain is only needed later to switch `LEAD_EMAIL_FROM` off the shared sender. Currently a safe no-op (logs a console warning, doesn't block lead saving).
- [ ] Replace placeholder media in `public/media/` with real A6700 exports (filenames documented in `public/media/README.md`)
- [ ] Project/case-study detail pages (optional, brief marks as future)
- [ ] Deeper accessibility + performance pass (image/video real-asset optimization can only be finished once real media is in place)
- [ ] Deploy to Vercel + connect domain

## Notes

- Budget/services/goals option lists live in `src/data/leadOptions.ts` — easy to edit without touching the form component.
- Metrics for 702Market are the brief's sample figures; swap in `src/data/{projects,caseStudies}.ts` once verified real numbers are supplied.
- Admin auth: `src/proxy.ts` (Next.js 16 renamed `middleware.ts` → `proxy.ts`) protects `/admin/:path*` using a Supabase session check; unauthenticated users or missing Supabase env vars redirect to `/admin/login`.
- Admin RLS: `supabase/migrations/0001_create_leads.sql` then `0002_leads_rls.sql` have been run on the live project — the dashboard reads/writes leads as the signed-in user, gated by RLS policies for the `authenticated` role.
- Installed optional Supabase agent skills at `.agents/skills/supabase*` for more accurate future Supabase work.
