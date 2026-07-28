# SIZZLE — cook louder

A 19-module cooking course — from knife skills to designing, costing and executing a profitable restaurant menu — delivered as a local-first web app with progress tracking.

Built for a serious home cook working toward professional-level competence: 77 lessons, 73 recipes, a 70-technique library, rubric-scored practical assessments, and a capstone where you design, cost and cook a complete menu for real guests.

## The curriculum

**Stage 1 — Foundations**
Mise en place & knife skills · Seasoning & the palate · Eggs · Stocks, broths & soups · Sauces · Vegetables & legumes · Grains, rice & potatoes · Pasta & noodles

**Stage 2 — Proteins & Pastry**
Fish & shellfish · Poultry · Meat · Pastry & baking fundamentals

**Stage 3 — The Craft**
Flavour development & recipe creation · Plating & presentation · Menu design theory

**Stage 4 — The Business of Food**
Food safety & kitchen operations · Sourcing, inventory & yield · Costing, pricing & profitability · **Capstone: the profitable menu**

Every module carries learning objectives, theory with real numbers, demonstrations, practice drills with deliberate repetition, reinforcing recipes, common mistakes and troubleshooting, a rubric-scored assessment, completion criteria, equipment and ingredient lists, and prerequisite-gated skill unlocks.

## The app

- **Dashboard** — overall and per-stage progress, continue-where-you-left-off, module map
- **Lessons & assessments** — prerequisite locking, self-scored rubrics, photo evidence, retake history
- **Recipe library** — filters, serving scaling, cook-mode checklist; **technique library** cross-linked throughout
- **Journal** — notes and photos from every cook
- **Lists** — shopping list generated from any recipe or module, plus an equipment checklist
- **Costing calculator** — supplier pack price → unit cost → AP→EP yield adjustment → portion cost, Q-factor, GST-aware food-cost % and GP %, target-margin price solver
- **Menu designer** — dishes linked to costing sheets, blended GP, menu-engineering matrix (stars / plowhorses / puzzles / dogs)
- **Planner** — multi-day prep schedule with stations and hold notes, plus a minute-by-minute service timeline
- **Capstone workflow** — nine guided deliverables, from concept through post-service review
- **Portfolio** — printable record of dishes cooked, assessments passed, and your costed menu

## Run locally

```bash
npm install
npm run dev        # http://localhost:5174
npm run build      # typecheck + production build → dist/
```

## Deployment

Pushes to `main` build and publish to GitHub Pages automatically via `.github/workflows/deploy.yml`. Enable it once under **Settings → Pages → Source: GitHub Actions**.

## Data & privacy

Local-first by design: progress lives in your browser (localStorage, with photos in IndexedDB). No accounts, no server, nothing uploaded. Use **Settings → Export backup** to move data between devices or safeguard it.

Currency is AUD and GST defaults to 10%; menu prices are entered inclusive of tax. Metric units and °C throughout.

## Stack

React 18 · Vite · TypeScript · Tailwind CSS · zustand · lucide-react · idb-keyval
