# SIZZLE — handover for Codex

> To have Codex pick this up automatically, copy or symlink this file to `AGENTS.md` at the
> repo root. It is written as a set of hard invariants rather than prose, because most of the
> ways to break this codebase are mechanical sweeps that look correct in isolation.

**Repo** `richmondjw/culinary-mastery` · **branch** `main` · **HEAD at handover** `8009b8f`
**Deploy** GitHub Actions → GitHub Pages, on every push to `main`
**No backend, no database, no API keys.** Nothing in this repo needs a secret.

---

## Commands

```bash
npm ci                              # install (lockfile committed)
npm run typecheck                   # tsc --noEmit   — must be 0 errors
npm run build                       # typecheck + vite build → dist/
npm run dev                         # vite dev server
npm run preview -- --port 5178      # serve dist/
```

`npm run build` runs the typechecker first and fails the build on any error. That is the
gate. There is no test suite and no linter config — `tsc` in strict mode with
`noUnusedLocals` and `noUncheckedIndexedAccess` is doing that job. An unused import is a
build failure, not a warning.

**Do not run `playwright install`.** If a browser is needed it is pre-installed at
`/opt/pw-browsers/chromium`.

---

## Stack

React 18 · Vite 6 · TypeScript strict · Tailwind 3.4 · zustand (`persist`) · idb-keyval ·
react-router-dom with **HashRouter**.

```
index.html                 fonts + meta; title is "SIZZLE — cook louder"
tailwind.config.js         all colour/type/shadow tokens
src/index.css              component layer: .card .btn-* .input .pill-* .node-* .meter .quiet
src/components/ui.tsx      design system: Pill Node Meter TrackBadge ProgressRing StatCard
                           Field SectionTitle EmptyState Callout CelebrationToast PhotoSlot
                           DifficultyDots
src/components/Layout.tsx  app shell, sidebar, mobile drawer, PageHeader, BackLink
src/components/VideoEmbed.tsx  click-to-load YouTube embed + VideoPanel alternates switcher
src/data/                  19 module files, recipes, 78 techniques, capstone, achievements,
                           stages, videos
src/lib/costing.ts         all money maths
src/lib/progress.ts        unlocking, weighted completion, trackForStage
src/screens/               17 route components
src/store/useUserStore.ts  the single store
src/types/                 state.ts (persisted shapes), content.ts (curriculum shapes)
```

---

## Invariants — violating any of these is a regression

### I1. Two strings are frozen

| string | file | why |
|---|---|---|
| `'culinary-mastery-state'` | `store/useUserStore.ts` | localStorage key. Renaming it silently orphans all existing user progress — no error, just an empty app. |
| `app: 'culinary-mastery'` | `lib/exportImport.ts` | backup file discriminator. Renaming it rejects every backup taken before the SIZZLE rename. |

The product is called SIZZLE. These two identifiers are not, deliberately. Do **not**
include them in a find-and-replace of "culinary-mastery" → "sizzle". `exportImport.ts`
carries a comment stating this; keep it.

### I2. No white text, no white backgrounds

`grep -rn "text-white\|bg-white" src/` must return **nothing**. Currently does.

Flame `#FF4B12`, teal `#0F9B8E`, fluoro `#FF48B0` and butter `#FFC93D` are *fill* colours.
Text on any of them is `text-ink-900`. White on flame is 3.2:1 and fails WCAG AA.
For paper white use `bg-surface` (`#FFFDF8`), not `bg-white`.

When an accent needs to be the text colour, use the deep variant that exists for it:
`text-copper-700` · `text-sage-700` · `text-wine-600`. Never `-500`/`-600` as text.

### I3. No Tailwind default palette

Only the tokens in `tailwind.config.js` are in scope: `copper sage wine star parchment ink
surface`. Check with the anchored form — a naive `grep "slate-\|amber-"` false-positives on
`translate-x-`, `translate-y-` and the word "amber-brown" in recipe prose, which is how a
real `bg-red-50` survived three earlier sweeps:

```bash
grep -rnE '\b(bg|text|border|ring|fill|stroke|accent|divide)-(amber|slate|zinc|gray|grey|neutral|stone|red|orange|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' src/
```

Must return nothing.

### I4. Every state carries a glyph, not just a colour

`Pill` takes semantic states, not colour names:

```ts
tone: 'pass' | 'best' | 'retake' | 'streak' | 'locked' | 'neutral'
//     ✓       ★        ↺         🔥        🔒        —
```

There is no `tone="copper"` / `"sage"` / `"gold"` — that was the pre-brand API and all 24
call sites were migrated. `TrackBadge` also varies shape (circle / rounded square /
diamond) so tracks survive greyscale. `Node` covers `done|current|todo|locked`.

Adding a state means adding a glyph. Test by desaturating a screenshot: if two states
become indistinguishable, it's wrong.

### I5. Type floors

18px body · 14px meta · 12px only for uppercase DM Mono eyebrow labels.

`base` is redefined to 18px and `2xs` to 12px in `tailwind.config.js`. Consequences:
- `grep -rn "text-xs" src/screens` must return nothing (12px is below the meta floor)
- `text-2xs` is allowed **only** on an element that is also `uppercase` and `font-mono`
- text grey never lighter than `#6B655C`; `ink-300` is for non-text only

### I6. Quiet mode belongs to four screens

`Costing.tsx` `MenuDesigner.tsx` `Planner.tsx` `Portfolio.tsx` put `quiet` on their
outermost element. On those screens:

- use semantic `<table><thead><tbody><tfoot>`; `.quiet` styles them directly
- `className="total"` on a computed `tfoot` cell inks it flame
- editable grids get `class="grid-dense"` on the `<table>` (halves cell padding)
- fields inside cells use `.input-compact`, not bare `.input`
- free-text columns need `min-w-[...]` or the table algorithm collapses them to one glyph

`body:has(.quiet)` in `index.css` suppresses the halftone. The halftone is painted on
`<body>`, so a wrapper class alone cannot remove it — that selector is the mechanism, not
decoration.

### I7. HashRouter and relative base stay

`HashRouter` + `base: './'` in `vite.config.ts` are what let the build run on any static
host, including a Pages subpath, with no rewrite rules. Changing either breaks deployment
and invalidates saved URLs. If you have a reason, solve 404 rewrites first.

### I8. Never invent a YouTube id

`src/data/videos.ts` header states the rule: every `youtubeId` was taken verbatim from a
web-search result, none from memory. A fabricated 11-character id is indistinguishable from
a real one by inspection and is worthless. If you cannot reach a search result, add nothing.

All 24 current rows are `status: 'candidate'` — real ids whose titles match, but unwatched
and unconfirmed. Only a human (or a network-enabled verification pass) may promote a row to
`'verified'`.

---

## Costing maths — `src/lib/costing.ts`

The one place correctness matters more than style. Do not refactor without reading it.

- **AP → EP yield**: `EP cost = AP cost ÷ yield%`. Chain per line: pack price → unit cost →
  used quantity → ÷ yield.
- **Q-factor**: flat % uplift for oil/salt/garnish.
- **GST**: prices entered *inclusive*; revenue must be reduced to ex-GST before food-cost %
  or GP% is computed. `taxPct` default 10.
- **Target-price solver**: inverts a target food-cost % into a sell price.
- **Menu engineering**: `classifyDish` → star / plowhorse / puzzle / dog, measured against
  the menu's own averages, not fixed thresholds.

Unit handling normalises mass→g, volume→ml, each→each in one conversion table. Add units
there, not at call sites.

`MenuDesigner` renders the four mix classes as mono **glyph + label** (★ ▲ ◆ ○), not four
coloured pills — see the comment above `MIX_META`. Four competing brand fills in a dense
table fight each other and are indistinguishable in greyscale. Don't "simplify" it back
to pills.

---

## Verification expectations

Before claiming done:

1. `npm run build` → 0 errors
2. the six greps in I1–I5 → expected results
3. if UI changed: check 390px for horizontal overflow (`document.documentElement.scrollWidth
   > window.innerWidth`). This has regressed twice, both times from responsive grids missing
   an explicit `grid-cols-1` base — a grid with only `md:grid-cols-2` sizes its implicit
   columns to max-content and overflows on phones.
4. if colours changed: compute real contrast ratios against the *resolved* background
   (walk up the DOM for the first opaque ancestor, composite any alpha). Do not trust the
   token table — two real AA failures were found that way at 1.82:1 and 1.86:1.

Last audited state at `8009b8f`: 0 contrast failures, 0 type-floor failures, no 390px
overflow, no animation under `prefers-reduced-motion`, no page errors across 17 routes ×
2 viewports. Re-measure rather than restating it.

---

## Open work, in priority order

1. **Video verification.** 8 of 78 techniques have clips; all 24 are unwatched candidates.
   `VIDEO-RESEARCH-BRIEF.md` is a complete 500-line spec for the remaining 70 — technique
   specs, selection/rejection criteria, four verification tiers, exact JSON output schema.
   Requires network access to YouTube; if you don't have it, don't start.

2. **Custom domain `cook.optiflows.com.au`.** Not wired up. Needs a Cloudflare `CNAME
   cook → richmondjw.github.io` set to **DNS only** (proxied breaks GitHub's HTTP-01 cert
   challenge), then Settings → Pages → Custom domain, then Enforce HTTPS. Infrastructure,
   not code — but adding `public/CNAME` afterwards would pin it in version control, and
   should only be done once DNS is confirmed.

3. **Code splitting.** 963 kB in one chunk (312 kB gzipped) because all 19 modules' content
   imports eagerly. Route-level `React.lazy` plus splitting `src/data/modules` is the win.
   Largest remaining technical debt.

4. **Ignore the vault copy.** `richmondjw/jwr_pkm_2026` contains a stale copy of this app at
   `07-projects/2026/cooking-course/app/`, predating the video layer and the brand. This repo
   is the source of truth. Do not sync back.

---

## Repo etiquette

- Branch off `main`; every push to `main` deploys to production immediately.
- Conventional-commit prefixes (`feat:`, `fix:`) with a body explaining *why*, not what —
  the diff already says what.
- Comments in this codebase exist to record decisions that look arbitrary but aren't
  (why a glyph instead of a pill, why a string is frozen, why HashRouter). Match that
  density: explain the non-obvious, skip the obvious.
- Never commit credentials, tokens or `.env` content. Nothing here requires any.
