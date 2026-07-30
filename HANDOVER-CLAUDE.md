# SIZZLE — handover for Claude Code

You are picking up a finished, deployed app. Read this before touching anything: several
of the conventions below look like arbitrary style choices and are actually load-bearing.

**Repo** `richmondjw/culinary-mastery` (public) · **branch** `main` · **HEAD at handover** `8009b8f`
**Live** GitHub Pages via Actions → `https://richmondjw.github.io/culinary-mastery/`
**Intended** `cook.optiflows.com.au` — DNS record does not exist yet (see Open item 2)
**Owner** James Richmond (`james.richmondau@gmail.com`)

---

## 1. What this is

A 19-module practical cooking course that takes a serious home cook from knife skills to
designing, costing and executing a profitable restaurant menu — delivered as a local-first
web app with progress tracking, costing tools and a capstone.

Content scale: 19 modules across 4 stages, 77 lessons, 73 recipes, 78 techniques,
rubric-scored assessments, 9-deliverable capstone.

**It is not a CMS and has no backend.** All progress lives in the user's browser. That is
a deliberate product decision, not a stage on the way to a server — see §3.

---

## 2. Stack and layout

React 18 · Vite 6 · TypeScript (strict, `noUnusedLocals`, `noUncheckedIndexedAccess`) ·
Tailwind 3.4 · zustand + `persist` · idb-keyval · react-router-dom (**HashRouter**)

```
src/
  components/    ui.tsx (design system), Layout.tsx (shell), VideoEmbed.tsx, photos.tsx
  data/          modules/module-01..19.ts, recipes, techniques.ts, capstone.ts,
                 achievements.ts, stages.ts, videos.ts
  lib/           costing.ts (all the money maths), progress.ts, format.ts,
                 exportImport.ts, photos.ts, id.ts
  screens/       17 route components
  store/         useUserStore.ts — the single zustand store
  types/         state.ts, content.ts
```

**HashRouter is not a mistake.** It is what lets the build sit on any static host —
including a Pages subpath — with no server rewrite rules. Do not "modernise" it to
BrowserRouter without also solving 404 rewrites on Pages, and note that it changes every
saved bookmark.

`vite.config.ts` sets `base: './'` so the same artifact works at a domain root and at
`/culinary-mastery/`. Don't hardcode an absolute base.

---

## 3. Data model and the two frozen strings

One zustand store, persisted whole to `localStorage`. Photos are the exception: blobs go
to IndexedDB via idb-keyval, and only their metadata lives in the store.

```ts
UserData = {
  lessonsCompleted, recipesCooked   // Record<id, isoDate>
  assessmentAttempts[]              // rubric scores, pass flag, reflection
  notes[], photos[], shopping[], equipmentOwned
  costingSheets[], menus[], prepPlans[]
  capstone { menuId, steps, stepNotes, review }
  achievementsUnlocked              // Record<id, isoDate>
}
```

**Two strings you must not change:**

1. `'culinary-mastery-state'` — the localStorage key (`store/useUserStore.ts`)
2. `app: 'culinary-mastery'` in the backup file format (`lib/exportImport.ts`)

Both kept their pre-rename values *on purpose*. Changing (1) silently orphans every bit
of progress already in James's browser — no error, just an empty app. Changing (2) makes
the importer reject backups taken before the rename. The user-facing copy, the download
filename and `package.json` all say SIZZLE; these two do not. There is a comment in
`exportImport.ts` saying so — leave it there.

If you ever *do* need to migrate the key, write a real migration (read old key, write new,
keep the old for a release) rather than a rename.

---

## 4. The SIZZLE brand — the rules that are actually rules

The previous theme derived its palette from Nintendo's colours and could not be used
commercially. SIZZLE replaced it. Direction: **risograph comic** — warm paper, spot inks,
3px ink outlines, hard offset shadows, no blur.

Everything routes through `tailwind.config.js` and `src/index.css`. Token *names* were
kept from the old theme so screens restyle centrally; the values behind them changed:

| token | is | note |
|---|---|---|
| `copper` | flame `#FF4B12` | primary fill · Cook track |
| `sage` | teal `#0F9B8E` | pass / complete · Business track |
| `wine` | fluoro `#FF48B0` | celebration · Craft track |
| `star` | butter `#FFC93D` | highlight, XP, focus ring, selection |
| `parchment` / `ink` | paper and outline ramp | `ink-400` is aliased to `ink-500`'s hex |

### Rule 1 — flame, teal, fluoro and butter are FILLS. Text on them is `ink-900`.

White on flame measures 3.2:1 and fails AA. There is **zero** `text-white` and zero
`bg-white` in `src/` — verified by grep. Also zero Tailwind-default palette classes, but
check that one with an anchored pattern:

```bash
grep -rnE '\b(bg|text|border|ring|fill|stroke|accent|divide)-(amber|slate|zinc|gray|grey|neutral|stone|red|orange|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' src/
```

A naive `grep "slate-\|amber-"` matches `translate-x-` and the words "amber-brown" in a
recipe, which is how one real `bg-red-50` survived three sweeps before being caught.

When an accent must *be* the text, use the deep variant: `copper-700`, `sage-700`,
`wine-600`. Those exist for exactly this.

### Rule 2 — colour is the second signal, never the only one.

Every state pairs a fill with a glyph, so it survives greyscale and colour blindness.
This is why `Pill` takes semantic states rather than colour names:

```ts
Pill tone: 'pass' | 'best' | 'retake' | 'streak' | 'locked' | 'neutral'
//           ✓       ★        ↺         🔥        🔒        (none)
```

`TrackBadge` goes further and varies **shape** too — cook is a circle, craft a rounded
square, business a rotated diamond. `Node` (`done|current|todo|locked`) does the same for
lesson and module state.

If you add a state, give it a glyph. The greyscale screenshot test in §6 will catch you.

### Rule 3 — type floors.

18px body · 14px meta · 12px reserved for uppercase DM Mono eyebrow labels **only**.
Tailwind's `base` is redefined to 18px and `2xs` to 12px in the config, so `text-sm` (14px)
is the meta floor. There is no `text-xs` anywhere in `src/screens` — every one was lifted.

Grey no lighter than `#6B655C` for text. `ink-300` is for non-text only (rules, locked
outlines).

### Rule 4 — quiet mode on dense-data screens.

`Costing`, `MenuDesigner`, `Planner` and `Portfolio` each put `quiet` on their outermost
element. `.quiet` flattens borders, kills offset shadows, and styles semantic
`<table>/<thead>/<tbody>/<tfoot>` directly — so use real table markup on those screens,
not grid divs. `className="total"` on a computed `tfoot` cell inks it flame.

Two subtleties you will otherwise rediscover painfully:

- The halftone is painted on `<body>`, so a wrapper class cannot suppress it.
  `body:has(.quiet)` in `index.css` does. That selector is the mechanism — don't delete it.
- `.input` carries 18px type and 16px side padding, which is right for a form and wrong
  for a data grid. Use `.input-compact` (8px padding, 17px, still a 44px target) inside
  table cells and inline task rows. `table.grid-dense` halves cell padding. Free-text
  columns need an explicit `min-w-[...]` or the table algorithm collapses them to a
  single glyph.

### Rule 5 — touch targets.

Aim 48px; 44px is the working minimum for controls. Two documented shortfalls, both
deliberate: checkboxes are 24px (a 48px checkbox in a dense shopping list is absurd; 24px
clears WCAG 2.2 AA), and pill-shaped links are 36px because that is the height of the
kit's own `.pill`. Don't "fix" these without a reason better than the audit number.

`prefers-reduced-motion` kills `sizzle-pop`. Keep it that way.

---

## 5. Costing maths — the part that must be right

`src/lib/costing.ts`. Get this wrong and the app teaches bad business.

- **AP → EP yield.** EP cost = AP cost ÷ yield%. A carrot bought at $3/kg with 80% yield
  costs $3.75/kg on the plate. Every ingredient line goes: pack price → unit cost → used
  quantity → ÷ yield.
- **Q-factor** — a flat % uplift for oil, salt, garnish that nobody costs individually.
- **GST-aware.** Prices are entered *inclusive*. Revenue must be ex-GST before food-cost %
  or GP% means anything. `taxPct` defaults to 10 (Australia).
- **Target-price solver** — inverts food-cost % to a sell price.
- **Menu engineering** — `classifyDish` splits dishes into star / plowhorse / puzzle / dog
  against the menu's own averages.

Base-unit conversion normalises mass→g, volume→ml, each→each. Adding a unit means
touching that table, not the call sites.

`MenuDesigner` renders the four menu-mix classes as **glyph + label in mono** (★ ▲ ◆ ○),
not as four coloured pills. That was a considered call: four competing brand fills in a
dense table fight each other, and the glyphs stay distinct in greyscale where the colours
would not. The reasoning is in a comment above `MIX_META` — read it before changing it.

---

## 6. How to verify — scripts exist, use them

```bash
npm ci
npm run typecheck        # tsc --noEmit
npm run build            # typecheck + vite build
npm run preview -- --port 5178
```

Chromium is pre-installed at `/opt/pw-browsers/chromium` in Claude Code environments.
`PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` is set. **Never run `playwright install`.**

Three harness scripts were used for the last audit. They are not in the repo (they live in
the session scratchpad) — recreate them if you need them, or ask James for the zip:

- `gate.mjs` — in-browser audit over 17 routes × 2 viewports. Computes real contrast
  ratios from resolved colours (walking up for an opaque background, compositing alpha),
  checks type floors, touch targets, horizontal overflow, `prefers-reduced-motion`.
  Also writes desaturated screenshots.
- `shots-runner.mjs` — screenshots every route at 1440 and 390.
- `seeded-shots.mjs` — same, but seeds `localStorage` first so tables actually have rows.

**The trap in the seeded script:** with HashRouter, `page.goto()` between hash routes never
reloads the document, so the store never rehydrates and you screenshot an empty app. Seed
with `addInitScript` *before* the first load, and `reload()` after each `goto`.

Last full gate result at `8009b8f`: **0 contrast failures, 0 type-floor failures, no
horizontal overflow at 390px, no animation under reduced-motion, no page errors.**
Don't claim that state — re-run it.

---

## 7. Deployment

`.github/workflows/deploy.yml` — push to `main` → build → `upload-pages-artifact` →
`deploy-pages`. Nothing else to do; there is no gh-pages branch.

One historical landmine, since it nearly leaked the owner's private notes: Pages was once
configured as **"Deploy from a branch"** pointing at the PKM vault repo's `master`, which
would have published the entire private vault. If you ever touch Pages settings, the
Source must be **GitHub Actions**, not a branch.

---

## 8. Open items

1. **All 24 video candidates are unverified.** `src/data/videos.ts` covers 8 of 78
   techniques (the Module 1 knife set) with 24 candidate clips. Every `youtubeId` was taken
   verbatim from a web-search result — the file's header states this as a provenance rule.
   **Never add an id from memory.** A fabricated YouTube id looks completely plausible and
   is worthless; you cannot tell the difference by inspection. YouTube was unreachable from
   the authoring sandbox, so nothing was watched, embed-checked or confirmed live. Every
   row ships `status: 'candidate'` and the UI shows an explicit "unwatched suggestion"
   warning. Promotion to `'verified'` requires a human watching it or an API-enabled pass.
   `VIDEO-RESEARCH-BRIEF.md` (in the repo) is the 500-line brief for outsourcing the
   remaining 70 techniques: all technique specs, selection and rejection criteria, four
   verification tiers, and the exact JSON output schema.

2. **`cook.optiflows.com.au` is not wired up.** Confirmed by DNS: `optiflows.com.au`
   resolves to Cloudflare, `richmondjw.github.io` resolves to Pages, `cook.optiflows.com.au`
   returns nothing. Needs a Cloudflare `CNAME cook → richmondjw.github.io` set to **DNS only
   (grey cloud)** — proxied breaks GitHub's HTTP-01 certificate challenge — then the custom
   domain entered in Settings → Pages, then Enforce HTTPS once the cert issues. If Cloudflare
   proxying is later turned on, SSL/TLS mode must be Full (strict); Flexible causes a
   redirect loop.

3. **No `public/CNAME`.** Because Pages deploys from Actions rather than a branch, the
   custom domain lives only in the settings field. Adding `public/CNAME` would pin it in
   version control. Deliberately not done yet — creating that file *sets* the custom domain
   on the next push, which shouldn't happen mid-DNS-setup. Do it after item 2 is confirmed.

4. **Bundle is 963 kB (312 kB gzipped), one chunk.** All 19 modules' content is imported
   eagerly. The obvious win is route-level `React.lazy` plus splitting `data/modules` — the
   dashboard doesn't need Module 17's troubleshooting prose. Not urgent for a local-first
   app the owner installs once, but it's the biggest remaining technical debt.

5. **A stale copy of the app exists in the PKM vault** at
   `07-projects/2026/cooking-course/app/` in `richmondjw/jwr_pkm_2026`. It predates the
   video layer and the whole brand rollout. James explicitly asked for the app to live in
   its own repo, so **this repo is the source of truth** — don't sync back to the vault, and
   don't treat the vault copy as current.

---

## 9. Working with James

From the vault's `CLAUDE.md` (the PKM repo, `richmondjw/jwr_pkm_2026`), the standing
preferences that bear on code work:

- **One recommendation, not a menu of options.** Make the call, state the tradeoff, move on.
- **Edit before expanding.** Improve an existing file rather than adding a new one.
- **Read before writing.** Check what exists first.
- **Never write credentials, tokens or secrets into any file.**
- Surface consequential actions for approval rather than just doing them.

He reads carefully and pushes back on hand-waving. Report what you actually verified and
what you didn't — if a check couldn't run, say so plainly rather than implying it passed.

---

## 10. Honest state of things

Done and verified: the full course content, all 17 screens, the costing and menu tooling,
mobile optimisation at 390px, the SIZZLE brand rollout with a measured accessibility gate,
and a green Pages deployment at `8009b8f`.

Not done: video verification (24 unwatched candidates, 70 techniques with no clip at all),
the custom domain, and code splitting.

Never verified from the authoring environment: the live site itself. The sandbox network
policy blocked `github.io` and the custom domain, so deployment success is inferred from a
green Actions run and the published `index.html` — not from loading the page. Worth a look
in a real browser.
