# SIZZLE commerce integration contract

Status: implementation handoff, not a deployed service. Owner: Remy. Existing task: 1217068037225619.

## Browser integration prepared

- GET `/api/commerce` returns JSON `{ready:boolean, launchOfferActive:boolean}`. Missing service, HTML fallback, timeout or invalid readiness leaves purchase buttons disabled. `ready` must remain false until all launch gates pass. Readiness is not an access-control mechanism.
- POST `/api/checkout` accepts only a known tier (`homecook` or `fullkitchen`). The **server** selects the approved product, variant, price and active offer; no amount is accepted from the browser. Return `{url}` on a verified HTTPS `*.lemonsqueezy.com/checkout/…` checkout. Custom checkout domains need an explicit exact-host extension and tests.
- POST `/api/unlock` accepts `{license_key}` with bounded input. Never log or persist it in browser storage or analytics. Server validates/activates it with Lemon Squeezy, checks our store/product/variant IDs, active/non-refunded status, expiry, instance ownership and three-device limit. A key for another store/product must never grant SIZZLE access.
- GET `/api/session` returns only the effective tier and expiry, authenticated by a secure session. No licence key, customer email or signing secret in this response. The prepared activation UI requires a paid session read after POST success.
- The backend MUST use Secure/HttpOnly/SameSite cookies, same-origin POST/CSRF controls, rate limits, bounded request size, provider timeout, no-store responses and privacy-safe logs.
- Signed, replay-safe Lemon Squeezy webhooks reconcile purchases, upgrades, refunds and revoked licences. Invalid signatures/replays cannot change entitlements. A successful browser return URL is never proof of payment.

## Production work still required

1. Export and back up the exact live Cloudflare Worker and bindings. The current `worker/src/index.ts` is a deliberate503 stub. Do not deploy it.
2. Verify the approved merchant account, store, products, variants, checkout URLs, activation limit, AUD/GST-inclusive display and live/test mode. Card completion alone is not evidence. Confirm published provider fees from the account, not historic backlog text.
3. Implement the API/session/webhook service above, with authoritative persisted payment/entitlement state and refund/revocation behaviour. Define provider-outage grace without destroying valid customer access.
4. Remove the build-time `VITE_SIZZLE_ENTITLEMENT` placeholder. Hydrate browser access from authenticated session state and update it after activation/sign-out/expiry; the browser is a UX gate only.
5. Move paid lesson bodies and paid-only resources out of the public bundle and public GitHub Pages origin. Serve through an authenticated private origin/API. Test direct asset URLs and origin bypass. Hash routes cannot be secured at the edge by URL path.
6. Decide registration from James's current request: the approved baseline is anonymous free learning plus purchase-email/licence activation; a separate email/password profile system is not yet built. Do not promise account sync. Preserve existing local data and backup exports in either migration.
7. Finalise actual merchant identity, support address, privacy notice, terms and refund policy before accepting payment. Check Australian consumer guarantees; do not publish a blanket no-refund waiver.
8. Enforce launch price for first100 eligible initial buyers across both tiers OR14days from real launch, whichever first, using authoritative transactions and UTC launch timestamp. No client counter. Decide refunded-order counting explicitly. No launch clock before checkout is live.
9. Approved upgrade is A$70. Initial launch prices differ by A$60; this is an unresolved fairness/commercial edge case. Keep upgrade checkout disabled until it is deliberately resolved; do not silently change the approved amount.

## Release evidence required

Test-mode purchase success, cancel/failure, duplicate/out-of-order webhooks, wrong store/product, invalid/expired/refunded key, fourth-device attempt, returning-customer restore, key recovery, upgrade, signed-cookie tamper, CSRF, brute-force limits, service outage, direct paid-asset URL and origin bypass. Verify free modules remain accessible. Test offline/backup claims exactly as implemented.

Then complete one authorised real low-value purchase and refund, retain redacted provider order/webhook/access/revocation receipts. A mock browser test is not a live integration test.

Stop acquisition and new checkout if release acceptance fails. Preserve valid existing customer sessions, support and backups; do not roll back unrelated production configuration. No credential values belong in this repository.

Sources: docs/PRICING.md; docs/URL-MAP.md; Asana1217047529434654; https://docs.lemonsqueezy.com/api/license-api/activate-license-key (read2026-10-01).
