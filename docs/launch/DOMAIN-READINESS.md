# Domain readiness — 2026-10-01

Requested outcome: a dedicated app domain and a reviewable campaign library.

Candidate `cookwithsizzle.com`: Verisign .com RDAP404 at23:11UTC. Alternative `learnwithsizzle.com`: RDAP404. `sizzlekitchen.com`: RDAP200, registered. No registrar price, purchase availability guarantee or trademark clearance obtained; none purchased. A registry404 is a shortlist signal only.

Existing app address: `cook.optiflows.com.au`. Current client probe returned403; previous2026-09-29 review saw private access401. Clean-browser and source configuration verification still required. Preserve current Worker/DNS until exported and rollback recorded.

User typed `optiflow.com.au/campaigns`; existing source is `richmondjw/Optiflows`, whose campaign library is `optiflows.com.au/campaigns`. The singular spelling resolves to a different server and returned404 for that path. Clarification requested; working pack uses the existing repository and relative URLs, not a claimed migration to the singular domain.

Before securing a new domain: confirm exact name and registrant, check current registrar availability and initial/renewal cost, registration term and authorised payment source; retain actual registration receipt. Configure DNS/HTTPS only after the chosen hosting architecture protects paid content and supports APIs. Verify apex/www redirect policy, canonical URLs and old app redirects, certificate, public free paths and gated paid resources from a clean client. Update CNAME only after target deployment works.

Current access evidence: protected credential metadata contained no matching Cloudflare/Lemon/Higgsfield entries; gateway environment-name check showed a Cloudflare tunnel token only. 1Password status tool read was rejected and not retried; no inference that other stored credentials do not exist. Existing browser profile was stopped. No domain purchase/DNS/Worker mutation performed.
