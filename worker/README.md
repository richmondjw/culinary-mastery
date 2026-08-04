# Edge Worker — cook.optiflows.com.au

The Cloudflare Worker in front of `cook.optiflows.com.au` is becoming the paywall —
the single most business-critical piece of code in this project. As of 2026-08-01 it
exists **only in the Cloudflare dashboard**. This directory is its version-controlled home.

## Status

- [ ] **Capture step (needs Cloudflare dashboard access):** replace the deliberate
      503 safety stub at `worker/src/index.ts` with the current live Worker script
      (the one serving the "SIZZLE — Private access" page and handling `POST /__auth`),
      then commit. Preserve its bindings, but never paste secrets into source.
- [ ] Deploy from here with `wrangler deploy`; retire dashboard edits as the change path.

No Cloudflare API token was available in the build environment, so the live script
could not be exported automatically. **Do not deploy this scaffold:** the stub returns
503 intentionally and exists solely to make the capture target, contract and source
layout explicit. The capture step is a 5-minute manual copy-paste by anyone logged
into the Cloudflare dashboard.

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
npx wrangler secret put ENTITLEMENT_SECRET
```

## Analytics Engine (after capture only)

`wrangler.toml` contains a commented `CONVERSIONS` binding. After the captured Worker
has been reviewed, enable it and write one data point for each unlock attempt, unlock
success, unlock failure (with a bounded reason code), and gated-content denial. Do not
log licence keys, IP addresses, emails, or raw request URLs. Browser analytics is
separate and remains inactive until a provider and measurement ID are selected.
