# SIZZLE — Public / Free / Paid URL map (decision doc)

**Status:** RECOMMENDED — awaiting James's lock (Asana: "Define the public / free / paid URL map")
**Drafted:** 2026-08-01 by Remy (dispatch 1217084429287725)
**Depends on:** domain-goes-public decision (see §0)

This page says exactly what is reachable without paying. Everything downstream —
Worker rules, landing page, SEO, the funnel — hangs off this being decided once.

---

## 0. Prerequisite: the domain decision

`cook.optiflows.com.au` currently returns **401 (Cloudflare Access)** and the whole
funnel plan is public-facing. Recommendation: **go public.**

James's 3 actions in Cloudflare (≈5 min, no code):

1. DNS: `CNAME cook → richmondjw.github.io` — switch to **DNS only (grey cloud)**.
   Proxying breaks GitHub's HTTP-01 cert challenge.
2. Cloudflare Access: remove or scope the `*.optiflows.com.au` policy so `cook` is not gated.
3. Once GitHub's cert issues (check `gh api repos/richmondjw/culinary-mastery/pages --jq .https_enforced`
   and the Pages settings page): tick **Enforce HTTPS**.

`public/CNAME` is now pinned in version control (2026-08-01) — the domain cannot be
lost by a bad settings click. If the private-gate decision is ever revisited, the
Access policy can be re-added without touching the repo.

---

## 1. The map

| Tier | Path | What lives there |
|---|---|---|
| PUBLIC | `/` | Landing page (app moves to `/app`) |
| PUBLIC | `/app` | App shell, dashboard, settings, journal, lists |
| PUBLIC | `/tools/food-cost` | Standalone free food-cost calculator (lead magnet) |
| FREE | Modules 1–2 | Full content: lessons, recipes, assessments |
| PAID (Home Cook) | Modules 3–12 | Full content |
| PAID (Full Kitchen) | Modules 13–19 | Plus costing, menu designer, prep planner, portfolio save |

**Techniques library:** metadata public; technique detail bodies follow their module's tier.

**HashRouter note:** the app uses HashRouter (`/#/...`), so "paths" inside `/app` are
hash fragments and cannot be gated at the edge by path. Gating is enforced by the
Worker on the *content/asset level* and by the in-app unlock UX. The Worker rules
below are therefore about which deploys/routes the edge serves, not hash routes.

## 2. Worker rule implications

- `/`, `/tools/food-cost`, marketing/SEO pages → served to everyone, no cookie check.
- `/app*` → served to everyone (shell is free); **locked content is gated in-app**
  by entitlement state, with the Worker's signed cookie as the source of truth.
- `POST /api/unlock` → Lemon Squeezy licence validation → signed entitlement cookie
  (tier encoded: `homecook` | `fullkitchen`).
- Gated asset paths (if lesson bodies are later split out of the bundle — the
  KEYSTONE bundle-split card) → 402 without a valid cookie.

## 3. Why this shape

- **Free tier is Modules 1–2, not a trial.** Trials expire and create refund/anger
  surface; a permanent free tier is an SEO asset and a trust asset. Knife skills and
  seasoning are the highest-search-volume modules — they are the top of funnel.
- **The paywall lands at Module 3** (eggs — the first "craft" module), exactly where
  the conversion-wall card already puts it.
- **Home Cook vs Full Kitchen splits at Stage 3/4** (theory + business of food).
  Home cooks never need the costing engine; aspiring pros will pay for it. Upgrade
  intent shows up inside locked Stage 3/4 modules — that's where the nudge lives.
- **`/tools/food-cost` stays free forever** as a standalone lead magnet. It
  demonstrates the costing maths (the Full Kitchen value prop) better than any copy.

## 4. What this unblocks (in order)

1. Retire the blanket password gate; free tier goes public
2. Landing page at `/`, app moves to `/app`
3. Locked-module teaser UI
4. Worker: signed entitlement cookie + gated asset paths
5. SEO: meta, OG images, sitemap, structured data
6. Publish Module 1 lessons as static SEO pages
