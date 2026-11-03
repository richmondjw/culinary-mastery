# SIZZLE staging and app release plan — 2026-11-03

Status: source review complete; remote staging NOT deployed. This document does not certify a new build or test run.

## Source and constraints

Continue draft PR #1, launch/sizzle-market-readiness-20261001 at d63f7083d42749de8719fed63a1b8c0aef6732e8. This isolated staging branch preserves that exact ancestry. Do not merge or push main: its GitHub Actions workflow deploys production Pages. The same workflow has workflow_dispatch and a single pages concurrency group; do not use manual dispatch as a staging shortcut.

Reviewed README, HANDOVER-CODEX, launch STATUS/COMMERCE-CONTRACT/DOMAIN-READINESS, package scripts, deployment workflow and importBackup. Recursive repository tree contains no AGENTS.md, .agents/skills, staging workflow, web manifest or service worker. Only main and the existing launch branch were returned before creating this branch. No authenticated hosting inventory was available; absence in source is not proof that an external staging service does not exist.

Parent verified cook.optiflows.com.au today as a SIZZLE password gate. Parent also reports cookwithsizzle.com was registered October 4. The October 1 domain-readiness note is historical, not evidence that a new registration is needed. Preserve both domains and DNS. public/CNAME and worker/wrangler.toml are deployment clues, not proof of staging ownership or current live Worker code. Never deploy worker/src/index.ts: it is a deliberate 503 stub.

The October 1 STATUS records a passing production build/typecheck, six unit tests and mobile/desktop checks. Those are historical results only. Current scripts provide typecheck, build and test. Runtime verification remains pending.

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

- Restore authorised build execution; npm ci, npm run typecheck, npm test, npm run build. Record timestamp, Node version, SHA and output.
- Confirm checkout remains disabled for missing, HTML, error and invalid readiness responses; no real purchase or live licence data.
- Use a fresh test browser origin. Test landing, free modules/lessons, cost tool, settings, export/import and navigation on desktop and 390px mobile; inspect page errors and horizontal overflow.
- Verify access denial from a clean unauthenticated client for HTML, JS/data assets and any direct origin; robots/noindex alone is not privacy.
- Confirm no changes to production main, Pages environment, live Worker, DNS, security permissions or credentials.
- Record prior staging deployment/version before deployment. Roll back staging only to that version, then repeat privacy and smoke checks. No rollback command can be responsibly supplied until the host is identified.

## Current blockers and next action

The local workspace was empty. Initial git clone failed to connect to github.com:443. Subsequently the parent supplied a restriction that this Windows execution account had previously failed CreateProcessWithLogonW with error 1909 and must not be retried without recovery evidence. No further shell execution was attempted after that instruction. GitHub connector reads/writes work independently.

Build/typecheck/tests/browser smoke checks therefore have not been rerun, and no local preview or remote staging URL is claimed. No Cloudflare management connector is available in this task; source does not identify an isolated protected deployment. Next required evidence is restored authorised execution and the existing non-production hosting target/access configuration (or narrowly approved setup of one). Do not request secrets in chat and do not publish an unprotected public copy.

Source inspection found importBackup replaces store data before awaiting photo import and trusts nested data after a top-level discriminator check. This is a concrete Stage 2 risk, not a tested fix.
