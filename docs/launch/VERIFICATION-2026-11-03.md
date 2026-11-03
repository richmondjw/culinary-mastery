# SIZZLE verification — 2026-11-03

## Source and method

Tested source: draft PR #1 head `d63f7083d42749de8719fed63a1b8c0aef6732e8`, branch `launch/sizzle-market-readiness-20261001`.

An authorised cloud workspace fetched 101 repository files, including the hero asset. Each local file was verified against its GitHub blob SHA before and after tests. The development example secrets template was not needed or copied. No app edits were made. This report records the independent cloud execution results; the documentation-only staging branch adds no app-code changes.

Runtime: Node v24.22.1, npm 11.9.0. Dependency installation passed with 228 packages; install lifecycle scripts were disabled. This runtime differs from the existing production workflow's Node 22, which has not been freshly verified here.

## Results

| Check | Result |
|---|---|
| Dependency installation | Passed; lifecycle scripts disabled |
| npm run typecheck | Passed |
| npm test | Passed, all 6 tests |
| npm run build | Passed; Vite 6.4.3, 1,652 modules transformed, 2.92 seconds |
| Landing entry | 201.36 kB; 66.38 kB gzip |
| Deferred course chunk | 631.11 kB; 213.15 kB gzip; existing greater-than-500-kB warning |
| Brand static checks | No text-white/bg-white, text-xs in screens or default Tailwind colour class matches |
| Fresh visual/mobile/desktop route QA | Not run |
| Remote staging deployment | Not performed |

The six commerce tests cover configured prices, strict boolean readiness, checkout address validation, HTML fallback rejection, rate-limit messaging and same-origin/no-store request behaviour. They are not provider, entitlement-security or live-payment tests. Code splitting is not access control; paid course content remains publicly bundled in the reviewed source.

## Preview, domains and hosting

A loopback preview started successfully inside the cloud workspace. The separate browser could not connect, so it supplies no fresh visual QA evidence and is not remotely accessible staging.

The live cook.optiflows.com.au browser still shows the private-access password gate. That establishes the visible gate, not protection of every asset or alternate origin. cookwithsizzle.com produced an upstream connection failure from this browser; this does not prove ownership, registration or DNS state. Preserve the existing domains.

Cloudflare dashboard is signed out and no Cloudflare connector was found. The remote-staging blocker is authenticated hosting inventory and verification of an isolated protected target, audience and rollback. Do not use the production Pages workflow's manual dispatch for staging.

## Release limits and next gate

No production deployment, main push, PR merge, DNS change, Worker deployment, credential change or payment activation was performed. Never deploy the repository's deliberate 503 Worker stub. Keep checkout disabled and use synthetic data in staging.

Next: verify the existing non-production host and its protection of HTML, bundled assets and alternate origins; capture rollback; deploy the exact approved source there; complete fresh 390px/1440px browser route and data smoke checks. Follow [the staged plan](STAGING-PLAN-2026-11-03.md) and COMMERCE-CONTRACT.md before any paid launch.
