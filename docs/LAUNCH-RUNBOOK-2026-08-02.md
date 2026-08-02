# SIZZLE launch-critical-path runbook

**Verified:** 2026-08-02 UTC  
**Purpose:** complete the smallest safe path from the current private deployment to a public, measurable launch.

## Current verified state

- `cook.optiflows.com.au` resolves to Cloudflare proxy IPs and returns HTTP 401.
- `https://richmondjw.github.io/culinary-mastery/` redirects to that custom domain, so it is also unreachable to the public.
- GitHub Pages is correctly deployed from GitHub Actions; the custom domain is set, `public/CNAME` is version-controlled, and HTTPS enforcement is currently off because GitHub has not issued a certificate.
- The URL-map recommendation is present in `docs/URL-MAP.md`; its public-domain prerequisite is not yet approved/complete.
- `worker/` is only a deployment scaffold. The live Worker remains dashboard-only and must be exported before it is altered or extended.
- Local release build passed on 2026-08-02: `npm run typecheck` and `npm run build` both succeeded. Cold-load visual QA passed at 1440px and 390px widths with no page-load failure or horizontal overflow observed.

## Fastest safe sequence

### James-explicit Cloudflare action (one batch, about five minutes)

1. Change `cook` CNAME to `richmondjw.github.io` with **DNS only** (grey cloud).
2. Remove or narrowly scope the Cloudflare Access policy so `cook.optiflows.com.au` is public.
3. Export the current Worker script and bindings from the dashboard before deleting or replacing the private gate. Place the script at `worker/src/index.ts`; do not include secrets.
4. Wait for GitHub Pages to issue its certificate, then enable **Enforce HTTPS** in Pages. If Cloudflare proxying is reintroduced later, use **Full (strict)** SSL.

### Autonomous follow-on, immediately after the domain is public

1. Commit the exported Worker and deploy from `worker/`; dashboard edits cease to be the source of truth.
2. Apply the URL map: public `/`, `/app`, and `/tools/food-cost`; free Modules 1–2; paid content from Module 3 onward. Because the app uses HashRouter, keep entitlement enforcement in-app/content-level rather than trying to edge-gate hash fragments.
3. Run cold-path browser QA against the live domain at desktop and mobile widths, including the public landing route, app shell, free content, and locked-content boundary.
4. Add conversion instrumentation to the Worker using Workers Analytics Engine: unlock attempts, successes, failures by reason, and gated-content denials. Browser analytics should only be added after James selects a provider and supplies its site/measurement ID.

## Parallelisation

| Can proceed now | Starts after Cloudflare batch | Requires a separate James decision or credential |
| --- | --- | --- |
| Build/typecheck and local browser QA; Worker deployment plan; entitlement test cases | Live Worker capture/commit; live QA; Worker conversion counters; URL-map implementation | Cloudflare dashboard/API access and production DNS/Access changes; Lemon Squeezy store/API credentials; browser analytics provider and identifier |

## Verification gates

```bash
gh api repos/richmondjw/culinary-mastery/pages --jq '{build_type,cname,https_enforced}'
curl -sSIL https://cook.optiflows.com.au/ | head
curl -sSIL https://richmondjw.github.io/culinary-mastery/ | head
```

Pass condition: `cook` is publicly reachable over HTTPS without Cloudflare Access, Pages reports `https_enforced: true`, the Worker source is committed, and the live public/free/locked route QA passes.
