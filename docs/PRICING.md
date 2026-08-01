# SIZZLE — Pricing & tiers (decision doc)

**Status:** RECOMMENDED — awaiting James's lock (Asana: "DECISION: lock pricing and tiers")
**Drafted:** 2026-08-01 by Remy (dispatch 1217084429287725)
**Sources:** Asana backlog cards "Launch pricing…", "Home Cook -> Full Kitchen upgrade path",
"Set up Lemon Squeezy store…" — the substance was already decided; this doc locks it in one place.

---

## Tiers

| | **Home Cook** | **Full Kitchen** |
|---|---|---|
| Content | Modules 1–12 (Stages 1–2 + Flavour/Plating theory) | Everything: Modules 1–19 |
| Tools | Journal, lists, progress | + Costing calculator, menu designer, prep planner, portfolio |
| Launch price (first 100 buyers **or** 14 days, whichever first) | **A$59** | **A$119** |
| Standard price (after launch, permanently) | **A$79** | **A$149** |
| Licence | 1 key, 3 device activations | 1 key, 3 device activations |
| Upgrade | — | Pays the **A$70 difference**; existing key upgraded in place via Lemon Squeezy. No second key. |

Both tiers are **lifetime, one-time purchase**. No subscription. That is part of the
product's pitch ("local-first, yours forever") and keeps support surface near zero.

## Rules that are part of the decision (not details)

1. **The launch deadline is honoured exactly.** When the 100th buyer or day 14 hits,
   prices move to A$79/A$149 and stay there. A deadline that quietly slips teaches
   the audience that prices are fiction. Show the remaining count honestly or show
   nothing — never a fake counter.
2. **GST:** prices are AUD, GST-inclusive. Lemon Squeezy is merchant of record and
   remits AU GST / EU VAT — no global tax compliance on a side project.
3. **Upgrade path:** Worker re-reads tier on next validation after an in-place
   upgrade. In-app, the Full Kitchen pitch is shown from inside locked Stage 3/4
   modules, where intent actually exists.
4. **Fallback:** if Lemon Squeezy account approval stalls, Gumroad (same licence
   primitive, 10% flat fee vs LS 5% + 50c, faster approval).

## Why two tiers and not one

- A$149 is the honest price for the full curriculum + costing engine, but it is a
  real commitment for someone who just wants to cook better at home.
- Home Cook at A$79 captures the much larger "serious home cook" segment without
  discounting the pro tier.
- The A$70 upgrade delta means nobody is punished for starting small — upgrades are
  pure margin and require zero support (key upgraded in place).

## Unblocked by this lock

- Set up Lemon Squeezy store, products and licence keys
- Worker: POST /api/unlock → LS licence validation
- Post-purchase flow: receipt → key → activation
- End-to-end purchase test
- Launch pricing card (move to Done once LS products are created at these prices)
