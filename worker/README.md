# Edge Worker — cook.optiflows.com.au

The Cloudflare Worker in front of `cook.optiflows.com.au` is becoming the paywall —
the single most business-critical piece of code in this project. As of 2026-08-01 it
exists **only in the Cloudflare dashboard**. This directory is its version-controlled home.

## Status

- [ ] **Capture step (needs Cloudflare dashboard access):** copy the current live
      Worker script (the one serving the "SIZZLE — Private access" page and handling
      `POST /__auth`) into `worker/src/index.ts`, then commit.
- [ ] Deploy from here with `wrangler deploy`; retire dashboard edits as the change path.

No Cloudflare API token was available in the build environment, so the live script
could not be exported automatically. The capture step is a 5-minute manual copy-paste
by anyone logged into the Cloudflare dashboard.

## Planned shape (per docs/URL-MAP.md)

- `POST /api/unlock` → validate Lemon Squeezy licence key server-side → set signed
  entitlement cookie (`homecook` | `fullkitchen`). LS API key is a Worker secret,
  never reaches the browser. Fail closed on LS outage but never evict a valid cookie.
- Signed entitlement cookie + gated asset paths → `402` without a valid cookie.
- Conversion counters (Worker-side, analytics can't see these): unlock attempts,
  unlock successes, unlock failures by reason, gated-asset 402s.
- IP rate-limit on `/api/unlock` against key brute-forcing.
- `/__auth` (the current private-access gate) is retired when the domain goes public
  — see docs/URL-MAP.md §0.

## Commands

```bash
cd worker
npx wrangler deploy          # deploys to the route in wrangler.toml
npx wrangler tail            # live logs
npx wrangler secret put LEMONSQUEEZY_API_KEY
```
