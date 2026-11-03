# SIZZLE staging and app release plan — 2026-11-03

Status: source review and fresh cloud typecheck, six unit tests and production build passed. Remote staging NOT deployed; fresh visual/mobile/browser smoke testing remains pending. See [verification report](VERIFICATION-2026-11-03.md).

## Source and constraints

Continue draft PR #1, launch/sizzle-market-readiness-20261001 at d63f7083d42749de8719fed63a1b8c0aef6732e8. This isolated staging branch preserves that exact ancestry. Do not merge or push main: its GitHub Actions workflow deploys production Pages. The same workflow has workflow_dispatch and a single pages concurrency group; do not use manual dispatch as a staging shortcut.

Reviewed README, HANDOVER-CODEX, launch STATUS/COMMERCE-CONTRACT/DOMAIN-READINESS, package scripts, deployment workflow and importBackup. Recursive repository tree contains no AGENTS.md, .agents/skills, staging workflow, web manifest or service worker. Only main and the existing launch branch were returned before creating this branch. No authenticated hosting inventory was available; absence in source is not proof that an external staging service does not exist.

A clean browser verified cook.optiflows.com.au today as a SIZZLE private-access password gate. Project history records cookwithsizzle.com registration on October 4; this browser returned an upstream connection failure, which does not establish ownership or DNS state. The October 1 domain-readiness note is historical, not evidence that a new registration is needed. Preserve both domains and DNS. public/CNAME and worker/wrangler.toml are deployment clues, not proof of staging ownership or current live Worker code. Never deploy worker/src/index.ts: it is a deliberate 503 stub.

Fresh cloud verification on November 3 passed dependency installation, typecheck, all six unit tests and production build for d63f7083d42749de8719fed63a1b8c0aef6732e8. All 101 fetched files were checked against GitHub blob SHAs before and after testing. The October 1 mobile/desktop checks remain historical only. A cloud loopback preview started, but the separate browser could not connect; fresh visual and route smoke checks remain pending.

## Stages and acceptance gates

| Stage | Work | Exit evidence |
|---|---|---|
| 1. Protected staging | Inventory existing hosting/project, deployment source, intended staging URL, audience and access controls through authorised access. Capture current deployed version and rollback. Reuse an isolated non-production environment. Keep checkout unavailable and use synthetic data. | Verified target distinct from production; private gate covers HTML and assets including alternate origin; exact source SHA; clean-client denied/authorised checks; successful build/tests and 390px/1440px route checks; recorded rollback. |
| 2. Data reliability | Validate complete backup schema and nested values, version and bounded photos before mutations. Design restoration so failed photo writes cannot leave partially replaced progress; document merge/replace semantics. Preserve localStorage culinary-mastery-state and backup app culinary-mastery. | Legacy backup round-trip for progress, journal, tools and photos; malformed/unsupported/oversized inputs rejected without data mutation; simulated storage failure; export-before-migration guidance. |
| 3. Installable app foundation | Add branded manifest/icons and standalone launch using existing HashRouter and relative Vite base. Decide bounded offline scope and upgrade/cache policy before adding a service worker. Do not cache licence/session APIs or claim secure paid offline access. | Android/desktop install and iOS add-to-home-screen checks; deep-link reload; update/recovery; storage persistence; accurate online/offline messaging. Installability is not an app-store release. |
| 4. Launch service readiness | Capture the live Worker before replacement; settle accounts versus existing anonymous learning/licence model. Implement authoritative session/entitlement and private paid resources only with merchant prerequisites. Follow COMMERCE-CONTRACT in full. | Provider test receipts, refund/revocation/webhook/device/security checks, origin-bypass tests, approved identity/support/legal content, reviewed culinary material and resolved upgrade pricing. |
| 5. Controlled launch | Human review of staging, canonical domain decision using existing registered domains, explicit production approval, deployment/rollback runbook. | Approved release SHA and destination; authorised production deployment; smoke checks, support ownership and rollback record. |

Stage 1 comes first. Do not delay its verification for speculative payment or platform rewrites. Stages 2–3 are the next app-quality increments; Stage 4 gates paid release, not private staging.

## Exact staging verification checklist

- Cloud dependency installation, npm run typecheck, npm test and npm run build passed for the exact source SHA; see the verification report for runtime and scope. Repeat on any app-code change.
- Confirm checkout remains disabled for missing, HTML, error and invalid readiness responses; no real purchase or live licence data.
- Use a fresh test browser origin. Test landing, free modules/lessons, cost tool, settings, export/import and navigation on desktop and 390px mobile; inspect page errors and horizontal overflow.
- Verify access denial from a clean unauthenticated client for HTML, JS/data assets and any direct origin; robots/noindex alone is not privacy.
- Confirm no changes to production main, Pages environment, live Worker, DNS, security permissions or credentials.
- Record prior staging deployment/version before deployment. Roll back staging only to that version, then repeat privacy and smoke checks. No rollback command can be responsibly supplied until the host is identified.

## Current blockers and next action

The remaining remote-staging blocker is authenticated hosting inventory and verification of an isolated protected non-production target. Cloudflare dashboard is signed out and no Cloudflare connector was found. Confirm the existing hosting project, intended audience, protection of HTML/assets/alternate origins and prior deployment rollback before publishing. No remote staging URL is claimed.

Local Windows execution remains unavailable, but an authorised cloud workspace completed dependency installation, typecheck, tests and build. Fresh browser/mobile/desktop visual QA is still pending because the separate browser could not connect to the cloud loopback preview. Do not request secrets in chat or publish an unprotected public copy. Production, DNS, Worker and payment constraints remain in force.

Source inspection found importBackup replaces store data before awaiting photo import and trusts nested data after a top-level discriminator check. This is a concrete Stage 2 risk, not a tested fix.
