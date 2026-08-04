# SIZZLE launch push — repository readiness

**Date:** 2026-08-04 UTC  
**Scope:** repository-only launch preparation; no Cloudflare, DNS, API, or external-service changes.

## Verification

- `git pull --ff-only`: already current at `a27203f` before this work.
- `npm run typecheck`: passed.
- `npm run build`: passed.
- A second build with `VITE_SIZZLE_PAYWALL_ENABLED=true` and a `free` entitlement: passed.
- `git diff --check`: passed.

Vite reports its existing non-blocking warning: the production JavaScript bundle is over
500 kB after minification (about 966–968 kB / 312–313 kB gzip). The release build is
successful; bundle splitting remains a post-launch performance improvement.

## Implemented

Commit `c37e4b0` — `feat(launch): add public tier routing and launch scaffolds`

- Public URL map in `src/App.tsx`:
  - `/#/` is the marketing landing page (`src/screens/Landing.tsx`).
  - `/#/app` is the application shell; legacy app hash links redirect there.
  - `/#/tools/food-cost` is free.
- Entitlement policy and in-app gates in `src/lib/access.ts` and
  `src/components/AccessGate.tsx`:
  - Modules 1–2 are free.
  - Modules 3–12 require `homecook` or `fullkitchen`.
  - Modules 13–19 and costing/menu/planner/capstone/portfolio require
    `fullkitchen`.
  - Gates are disabled unless `VITE_SIZZLE_PAYWALL_ENABLED=true`, preserving the
    present public path. `VITE_SIZZLE_ENTITLEMENT` is a temporary rollout/test hook;
    the future Worker-issued signed entitlement remains the authority.
- Provider-neutral, no-network analytics adapter in `src/lib/analytics.ts`. It is
  inert until both a measurement ID and a host integration are deliberately supplied.
- Worker capture scaffold completed in `worker/`:
  `worker/src/index.ts` is an intentional 503 safety stub, `worker/.dev.vars.example`
  documents local secret names, and README/wrangler notes document capture, secrets,
  route intent and privacy-safe Analytics Engine counter placeholders. **Do not deploy
  the stub**; replace it with the exported live Worker first.

## Remaining blockers

1. Cloudflare Access/DNS/Pages certificate work is still required to make
   `cook.optiflows.com.au` public. This was intentionally out of scope.
2. The live Worker must be exported from Cloudflare and replace
   `worker/src/index.ts` before any Worker deployment. Its live bindings need review.
3. Lemon Squeezy products, licence validation and signed-cookie issuance are not
   configured; the app uses a safe feature-flag stub until then.
4. Browser analytics needs a provider decision and measurement ID. Worker Analytics
   Engine counters should be enabled only after the captured Worker is reviewed.
5. Live desktop/mobile cold-path QA can only happen after the public edge is open.
