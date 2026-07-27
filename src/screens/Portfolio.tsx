import { Camera, Printer } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { EmptyState, Pill, SectionTitle } from '../components/ui'
import { PhotoImg } from '../components/photos'
import { moduleById, modules, recipeById } from '../data'
import { capstoneSteps } from '../data/capstone'
import { analyseMenu, portionCost } from '../lib/costing'
import { money, pct, shortDate } from '../lib/format'
import { moduleComplete, overallPct } from '../lib/progress'
import { useUserStore } from '../store/useUserStore'

export default function Portfolio() {
  const data = useUserStore()

  const cooked = Object.entries(data.recipesCooked)
    .map(([id, date]) => ({ recipe: recipeById.get(id), date }))
    .filter((x) => x.recipe)
    .sort((a, b) => b.date.localeCompare(a.date))

  const photosWithCaption = data.photos
  const passedAttempts = data.assessmentAttempts.filter((a) => a.passed)
  const completedModules = modules.filter((m) => moduleComplete(data, m))
  const capstoneMenu = data.menus.find((m) => m.id === data.capstone.menuId) ?? data.menus[0]
  const costOf = (dish: { costingSheetId?: string; manualCost?: number }): number => {
    if (dish.costingSheetId) {
      const sheet = data.costingSheets.find((s) => s.id === dish.costingSheetId)
      if (sheet) return portionCost(sheet)
    }
    return dish.manualCost ?? 0
  }
  const analysis = capstoneMenu ? analyseMenu(capstoneMenu, costOf) : null
  const capstoneDone = capstoneSteps.every((s) => data.capstone.steps[s.id] === 'done')

  return (
    <div>
      <PageHeader
        title="Portfolio"
        subtitle="The record of what you can do: dishes cooked, assessments passed, and the menu you designed, costed and served."
        right={
          <button type="button" className="btn-secondary no-print" onClick={() => window.print()}>
            <Printer size={16} /> Print / PDF
          </button>
        }
      />

      <div className="mb-6 card flex flex-wrap items-center justify-between gap-4 p-5">
        <div>
          <div className="font-display text-xl font-semibold">James Richmond</div>
          <div className="text-sm text-ink-500">
            Culinary Mastery — {overallPct(data)}% complete · {completedModules.length}/{modules.length} modules ·{' '}
            {cooked.length} course recipes cooked
          </div>
        </div>
        {capstoneDone && <Pill tone="gold">Capstone completed</Pill>}
      </div>

      {capstoneMenu && analysis && (
        <>
          <SectionTitle>The menu</SectionTitle>
          <section className="card mb-6 p-6">
            <div className="mb-1 text-center font-display text-2xl font-bold">{capstoneMenu.name}</div>
            {capstoneMenu.concept && <p className="mb-4 text-center text-sm italic text-ink-500">{capstoneMenu.concept}</p>}
            <div className="mx-auto max-w-xl space-y-5">
              {capstoneMenu.courses.map((c) => (
                <div key={c.id}>
                  <div className="mb-1 text-center text-2xs font-bold uppercase tracking-[0.2em] text-copper-600">{c.name}</div>
                  {c.dishes.map((d) => (
                    <div key={d.id} className="flex items-baseline justify-between gap-4 py-1">
                      <span className="text-sm font-medium">{d.name || 'Untitled dish'}</span>
                      <span className="text-sm text-ink-500">{money(d.sellPrice)}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-parchment-100 pt-3 text-center text-xs text-ink-400">
              Blended GP {pct(analysis.blendedGpPct)} · forecast gross profit {money(analysis.totalGpDollars)} per service of{' '}
              {capstoneMenu.covers}
            </div>
          </section>
        </>
      )}

      <SectionTitle>Dish gallery</SectionTitle>
      {photosWithCaption.length === 0 ? (
        <EmptyState icon={<Camera size={22} />} title="No photos yet">
          Photograph every plate before it leaves the pass — the gallery builds itself.
        </EmptyState>
      ) : (
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photosWithCaption.map((p) => (
            <figure key={p.id} className="card overflow-hidden">
              <PhotoImg id={p.id} className="aspect-square w-full" />
              <figcaption className="p-2 text-2xs text-ink-500">
                {p.caption || shortDate(p.date)}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <section>
          <SectionTitle>Assessments passed</SectionTitle>
          <div className="card divide-y divide-parchment-100">
            {passedAttempts.length === 0 ? (
              <p className="p-5 text-sm text-ink-400">None yet — Module 1&rsquo;s cut card awaits.</p>
            ) : (
              passedAttempts.map((a) => {
                const m = moduleById.get(a.moduleId)
                return (
                  <div key={a.id} className="flex items-center justify-between gap-3 px-5 py-3">
                    <div>
                      <div className="text-sm font-semibold">{m ? `${m.number}. ${m.title}` : a.moduleId}</div>
                      <div className="text-2xs text-ink-400">{shortDate(a.date)}</div>
                    </div>
                    <Pill tone="sage">
                      {a.total}/{a.maxTotal}
                    </Pill>
                  </div>
                )
              })
            )}
          </div>
        </section>

        <section>
          <SectionTitle>Recently cooked</SectionTitle>
          <div className="card divide-y divide-parchment-100">
            {cooked.length === 0 ? (
              <p className="p-5 text-sm text-ink-400">Nothing yet — the soffritto is calling.</p>
            ) : (
              cooked.slice(0, 12).map(({ recipe, date }) => (
                <div key={recipe!.id} className="flex items-center justify-between gap-3 px-5 py-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{recipe!.title}</div>
                    <div className="text-2xs text-ink-400">{shortDate(date)}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      {data.capstone.review.lessons && (
        <section className="mt-6">
          <SectionTitle>From the post-service review</SectionTitle>
          <div className="card p-5 text-sm leading-relaxed text-ink-700">
            <p className="whitespace-pre-wrap">{data.capstone.review.lessons}</p>
          </div>
        </section>
      )}
    </div>
  )
}
