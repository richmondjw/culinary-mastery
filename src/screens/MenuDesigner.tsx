import { useState } from 'react'
import { Plus, ScrollText, Trash2 } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { EmptyState, Field, SectionTitle, StatCard } from '../components/ui'
import { analyseMenu, classifyDish, portionCost, type MenuMixClass } from '../lib/costing'
import { money, pct } from '../lib/format'
import { uid } from '../lib/id'
import { useUserStore } from '../store/useUserStore'
import { recipes } from '../data'
import type { MenuCourse, MenuDish, MenuPlan } from '../types/state'

// SIZZLE quiet mode: this is a dense data table, so the menu-mix classification is carried by
// glyph + label rather than four competing brand fills. Each glyph is distinct in greyscale,
// which four coloured pills would not be.
const MIX_META: Record<MenuMixClass, { label: string; glyph: string; advice: string }> = {
  star: { label: 'Star', glyph: '★', advice: 'High profit, high popularity — protect it, feature it.' },
  plowhorse: { label: 'Plowhorse', glyph: '▲', advice: 'Popular but low profit — nudge price up or trim cost.' },
  puzzle: { label: 'Puzzle', glyph: '◆', advice: 'Profitable but unloved — rename, reposition, or let servers sell it.' },
  dog: { label: 'Dog', glyph: '○', advice: 'Low profit, low popularity — replace it.' },
}

function newMenu(): MenuPlan {
  return {
    id: uid('menu'),
    name: 'New menu',
    concept: '',
    covers: 6,
    taxPct: 10,
    courses: [
      { id: uid('crs'), name: 'Entrée', dishes: [] },
      { id: uid('crs'), name: 'Main', dishes: [] },
      { id: uid('crs'), name: 'Dessert', dishes: [] },
    ],
  }
}

export default function MenuDesigner() {
  const menus = useUserStore((s) => s.menus)
  const costingSheets = useUserStore((s) => s.costingSheets)
  const upsert = useUserStore((s) => s.upsertMenu)
  const remove = useUserStore((s) => s.deleteMenu)
  const [selectedId, setSelectedId] = useState<string | null>(menus[0]?.id ?? null)

  const menu = menus.find((m) => m.id === selectedId) ?? null

  const costOf = (dish: { costingSheetId?: string; manualCost?: number }): number => {
    if (dish.costingSheetId) {
      const sheet = costingSheets.find((s) => s.id === dish.costingSheetId)
      if (sheet) return portionCost(sheet)
    }
    return dish.manualCost ?? 0
  }

  function create() {
    const m = newMenu()
    upsert(m)
    setSelectedId(m.id)
  }

  function patch(p: Partial<MenuPlan>) {
    if (menu) upsert({ ...menu, ...p })
  }

  function patchCourse(courseId: string, p: Partial<MenuCourse>) {
    if (!menu) return
    patch({ courses: menu.courses.map((c) => (c.id === courseId ? { ...c, ...p } : c)) })
  }

  function patchDish(courseId: string, dishId: string, p: Partial<MenuDish>) {
    if (!menu) return
    patch({
      courses: menu.courses.map((c) =>
        c.id === courseId ? { ...c, dishes: c.dishes.map((d) => (d.id === dishId ? { ...d, ...p } : d)) } : c,
      ),
    })
  }

  const analysis = menu ? analyseMenu(menu, costOf) : null

  return (
    // SIZZLE quiet mode: dense numeric screen — no halftone, no offset shadows,
    // and .quiet styles the semantic table directly.
    <div className="quiet">
      <PageHeader
        title="Menu designer"
        subtitle="Build the menu, link each dish to its costing sheet, and watch blended GP and the menu-mix matrix update live."
        right={
          <button type="button" className="btn-primary" onClick={create}>
            <Plus size={16} /> New menu
          </button>
        }
      />

      {menus.length === 0 ? (
        <EmptyState icon={<ScrollText size={22} />} title="No menus yet">
          Your capstone menu starts here — but a practice menu of dishes you already cook is the better first step.
        </EmptyState>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="card h-fit overflow-hidden">
            {menus.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedId(m.id)}
                className={`block w-full border-b border-parchment-100 px-4 py-3 text-left text-sm last:border-0 ${
                  m.id === selectedId ? 'bg-copper-50 font-semibold text-copper-800' : 'hover:bg-parchment-50'
                }`}
              >
                <div className="truncate">{m.name}</div>
                <div className="text-sm font-normal text-ink-500">
                  {m.courses.reduce((s, c) => s + c.dishes.length, 0)} dishes
                </div>
              </button>
            ))}
          </aside>

          {menu && analysis && (
            <div className="min-w-0 space-y-5">
              <div className="card grid grid-cols-1 gap-3 p-5 sm:grid-cols-4">
                <Field label="Menu name" className="sm:col-span-2">
                  <input className="input" value={menu.name} onChange={(e) => patch({ name: e.target.value })} />
                </Field>
                <Field label="Covers (forecast)">
                  <input
                    type="number"
                    min={1}
                    className="input"
                    value={menu.covers}
                    onChange={(e) => patch({ covers: Math.max(1, Number(e.target.value)) })}
                  />
                </Field>
                <Field label="GST %">
                  <input type="number" min={0} className="input" value={menu.taxPct} onChange={(e) => patch({ taxPct: Number(e.target.value) })} />
                </Field>
                <Field label="Concept — one sentence you can defend" className="sm:col-span-4">
                  <input
                    className="input"
                    value={menu.concept}
                    placeholder="e.g. Peninsula bistro: local fish, one great braise, desserts from the pastry section"
                    onChange={(e) => patch({ concept: e.target.value })}
                  />
                </Field>
              </div>

              {menu.courses.map((course) => (
                <div key={course.id} className="card p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <input
                      className="input !w-48 font-display !text-base font-semibold"
                      value={course.name}
                      onChange={(e) => patchCourse(course.id, { name: e.target.value })}
                    />
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() =>
                        patchCourse(course.id, {
                          dishes: [
                            ...course.dishes,
                            { id: uid('dish'), name: '', sellPrice: 0, forecastSold: Math.ceil(menu.covers / 2) },
                          ],
                        })
                      }
                    >
                      <Plus size={14} /> Dish
                    </button>
                  </div>
                  {course.dishes.length === 0 ? (
                    <p className="text-sm text-ink-500">No dishes yet.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="grid-dense min-w-[900px]">
                        <thead>
                          <tr>
                            <th>Dish</th>
                            <th>From recipe</th>
                            <th>Costing</th>
                            <th>Price inc. GST</th>
                            <th>Forecast sold</th>
                            <th>GP$</th>
                            <th>Mix</th>
                            <th><span className="sr-only">Remove</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {course.dishes.map((dish) => {
                            const eco = analysis.dishes.find((d) => d.dishId === dish.id)
                            const cls = eco ? classifyDish(eco, analysis) : null
                            return (
                              <tr key={dish.id}>
                                <td>
                                  <input
                                    className="input !py-1"
                                    value={dish.name}
                                    placeholder="Dish name"
                                    onChange={(e) => patchDish(course.id, dish.id, { name: e.target.value })}
                                  />
                                </td>
                                <td>
                                  <select
                                    className="input !w-44 !py-1"
                                    value={dish.recipeId ?? ''}
                                    onChange={(e) => {
                                      const r = recipes.find((x) => x.id === e.target.value)
                                      patchDish(course.id, dish.id, {
                                        recipeId: e.target.value || undefined,
                                        name: dish.name || r?.title || '',
                                      })
                                    }}
                                  >
                                    <option value="">custom</option>
                                    {recipes.map((r) => (
                                      <option key={r.id} value={r.id}>
                                        {r.title}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                                <td>
                                  <select
                                    className="input !w-40 !py-1"
                                    value={dish.costingSheetId ?? ''}
                                    onChange={(e) => patchDish(course.id, dish.id, { costingSheetId: e.target.value || undefined })}
                                  >
                                    <option value="">manual $</option>
                                    {costingSheets.map((s) => (
                                      <option key={s.id} value={s.id}>
                                        {s.name}
                                      </option>
                                    ))}
                                  </select>
                                  {!dish.costingSheetId && (
                                    <input
                                      type="number"
                                      min={0}
                                      step={0.1}
                                      className="input mt-1 !w-40 !py-1"
                                      placeholder="portion cost $"
                                      value={dish.manualCost ?? ''}
                                      onChange={(e) =>
                                        patchDish(course.id, dish.id, { manualCost: e.target.value === '' ? undefined : Number(e.target.value) })
                                      }
                                    />
                                  )}
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    min={0}
                                    step={0.5}
                                    className="input !w-28 !py-1"
                                    value={dish.sellPrice}
                                    onChange={(e) => patchDish(course.id, dish.id, { sellPrice: Number(e.target.value) })}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    min={0}
                                    className="input !w-24 !py-1"
                                    value={dish.forecastSold}
                                    onChange={(e) => patchDish(course.id, dish.id, { forecastSold: Number(e.target.value) })}
                                  />
                                </td>
                                <td className="font-semibold">{eco ? money(eco.gpDollars) : '—'}</td>
                                <td>
                                  {cls && (
                                    <span
                                      className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-sm text-ink-900"
                                      title={MIX_META[cls].advice}
                                    >
                                      <span aria-hidden="true">{MIX_META[cls].glyph}</span>
                                      {MIX_META[cls].label}
                                    </span>
                                  )}
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="text-ink-300 hover:text-wine-600"
                                    onClick={() => patchCourse(course.id, { dishes: course.dishes.filter((d) => d.id !== dish.id) })}
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan={5}>{course.name} — forecast gross profit</td>
                            <td className="total">
                              {money(
                                course.dishes.reduce(
                                  (sum, d) => sum + (analysis.dishes.find((x) => x.dishId === d.id)?.gpDollars ?? 0),
                                  0,
                                ),
                              )}
                            </td>
                            <td colSpan={2} />
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              <SectionTitle>Menu economics (per forecast service)</SectionTitle>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <StatCard label="Revenue ex. GST" value={money(analysis.totalRevenueExTax)} />
                <StatCard label="Food cost" value={money(analysis.totalCost)} sub={pct(analysis.blendedFoodCostPct)} />
                <StatCard label="Gross profit" value={money(analysis.totalGpDollars)} />
                <StatCard
                  label="Blended GP"
                  value={pct(analysis.blendedGpPct)}
                  sub={analysis.blendedGpPct != null && analysis.blendedGpPct >= 65 ? 'on target (≥65%)' : 'target ≥65%'}
                />
              </div>

              <div className="card p-4 text-right">
                <button
                  type="button"
                  className="btn-ghost text-wine-600"
                  onClick={() => {
                    remove(menu.id)
                    setSelectedId(menus.find((m) => m.id !== menu.id)?.id ?? null)
                  }}
                >
                  <Trash2 size={15} /> Delete menu
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
