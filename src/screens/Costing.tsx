import { useState } from 'react'
import { Calculator, Plus, Trash2 } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { EmptyState, Field, StatCard } from '../components/ui'
import {
  foodCostPct,
  grossProfitPct,
  grossProfitPerPortion,
  lineCost,
  portionCost,
  sheetIngredientCost,
  sheetTotalCost,
  targetSellPrice,
} from '../lib/costing'
import { money, pct } from '../lib/format'
import { uid } from '../lib/id'
import { useUserStore } from '../store/useUserStore'
import type { CostingSheet, Unit } from '../types/state'

const UNITS: Unit[] = ['g', 'kg', 'ml', 'L', 'each']

function newSheet(): CostingSheet {
  return {
    id: uid('cs'),
    name: 'New dish costing',
    portions: 4,
    lines: [],
    qFactorPct: 4,
    sellPrice: null,
    taxPct: 10,
    notes: '',
  }
}

export default function Costing() {
  const sheets = useUserStore((s) => s.costingSheets)
  const upsert = useUserStore((s) => s.upsertCostingSheet)
  const remove = useUserStore((s) => s.deleteCostingSheet)
  const [selectedId, setSelectedId] = useState<string | null>(sheets[0]?.id ?? null)
  const [targetFc, setTargetFc] = useState(30)

  const sheet = sheets.find((s) => s.id === selectedId) ?? null

  function create() {
    const s = newSheet()
    upsert(s)
    setSelectedId(s.id)
  }

  function patch(p: Partial<CostingSheet>) {
    if (sheet) upsert({ ...sheet, ...p })
  }

  return (
    <div>
      <PageHeader
        title="Costing & margins"
        subtitle="From supplier pack price to yield-adjusted portion cost, food-cost % and gross profit. GST-aware (prices entered inc. tax)."
        right={
          <button type="button" className="btn-primary" onClick={create}>
            <Plus size={16} /> New costing sheet
          </button>
        }
      />

      {sheets.length === 0 ? (
        <EmptyState icon={<Calculator size={22} />} title="No costing sheets yet">
          Start with a dish you know — cost it honestly and see what it really earns.
        </EmptyState>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="card h-fit overflow-hidden">
            {sheets.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                className={`block w-full border-b border-parchment-100 px-4 py-3 text-left text-sm transition-colors last:border-0 ${
                  s.id === selectedId ? 'bg-copper-50 font-semibold text-copper-800' : 'hover:bg-parchment-50'
                }`}
              >
                <div className="truncate">{s.name}</div>
                <div className="text-2xs font-normal text-ink-400">
                  {money(portionCost(s))} / portion · GP {pct(grossProfitPct(s))}
                </div>
              </button>
            ))}
          </aside>

          {sheet && (
            <div className="min-w-0 space-y-5">
              <div className="card grid grid-cols-1 gap-3 p-5 sm:grid-cols-4">
                <Field label="Dish name" className="sm:col-span-2">
                  <input className="input" value={sheet.name} onChange={(e) => patch({ name: e.target.value })} />
                </Field>
                <Field label="Portions">
                  <input
                    type="number"
                    min={1}
                    className="input"
                    value={sheet.portions}
                    onChange={(e) => patch({ portions: Math.max(1, Number(e.target.value)) })}
                  />
                </Field>
                <Field label="Q-factor % (oil, salt, garnish)">
                  <input
                    type="number"
                    min={0}
                    step={0.5}
                    className="input"
                    value={sheet.qFactorPct}
                    onChange={(e) => patch({ qFactorPct: Number(e.target.value) })}
                  />
                </Field>
              </div>

              <div className="card overflow-x-auto p-5">
                <table className="w-full min-w-[640px] text-sm">
                  <thead>
                    <tr className="text-left text-2xs uppercase tracking-wider text-ink-400">
                      <th className="pb-2 pr-2">Ingredient</th>
                      <th className="pb-2 pr-2">Pack price</th>
                      <th className="pb-2 pr-2">Pack size</th>
                      <th className="pb-2 pr-2">Used (AP)</th>
                      <th className="pb-2 pr-2" title="Edible-portion yield">Yield %</th>
                      <th className="pb-2 pr-2 text-right">EP cost</th>
                      <th className="pb-2" />
                    </tr>
                  </thead>
                  <tbody>
                    {sheet.lines.map((line) => (
                      <tr key={line.id} className="border-t border-parchment-100">
                        <td className="py-1.5 pr-2">
                          <input
                            className="input !py-1"
                            value={line.ingredient}
                            placeholder="e.g. Chicken thigh"
                            onChange={(e) =>
                              patch({ lines: sheet.lines.map((l) => (l.id === line.id ? { ...l, ingredient: e.target.value } : l)) })
                            }
                          />
                        </td>
                        <td className="py-1.5 pr-2">
                          <div className="flex items-center gap-1">
                            <span className="text-ink-400">$</span>
                            <input
                              type="number"
                              min={0}
                              step={0.01}
                              className="input !w-20 !py-1"
                              value={line.packPrice}
                              onChange={(e) =>
                                patch({ lines: sheet.lines.map((l) => (l.id === line.id ? { ...l, packPrice: Number(e.target.value) } : l)) })
                              }
                            />
                          </div>
                        </td>
                        <td className="py-1.5 pr-2">
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              min={0}
                              step={0.01}
                              className="input !w-16 !py-1"
                              value={line.packQty}
                              onChange={(e) =>
                                patch({ lines: sheet.lines.map((l) => (l.id === line.id ? { ...l, packQty: Number(e.target.value) } : l)) })
                              }
                            />
                            <select
                              className="input !w-16 !px-1 !py-1"
                              value={line.packUnit}
                              onChange={(e) =>
                                patch({ lines: sheet.lines.map((l) => (l.id === line.id ? { ...l, packUnit: e.target.value as Unit } : l)) })
                              }
                            >
                              {UNITS.map((u) => (
                                <option key={u}>{u}</option>
                              ))}
                            </select>
                          </div>
                        </td>
                        <td className="py-1.5 pr-2">
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              min={0}
                              step={0.01}
                              className="input !w-16 !py-1"
                              value={line.usedQty}
                              onChange={(e) =>
                                patch({ lines: sheet.lines.map((l) => (l.id === line.id ? { ...l, usedQty: Number(e.target.value) } : l)) })
                              }
                            />
                            <select
                              className="input !w-16 !px-1 !py-1"
                              value={line.usedUnit}
                              onChange={(e) =>
                                patch({ lines: sheet.lines.map((l) => (l.id === line.id ? { ...l, usedUnit: e.target.value as Unit } : l)) })
                              }
                            >
                              {UNITS.map((u) => (
                                <option key={u}>{u}</option>
                              ))}
                            </select>
                          </div>
                        </td>
                        <td className="py-1.5 pr-2">
                          <input
                            type="number"
                            min={1}
                            max={100}
                            className="input !w-16 !py-1"
                            value={line.yieldPct}
                            onChange={(e) =>
                              patch({ lines: sheet.lines.map((l) => (l.id === line.id ? { ...l, yieldPct: Number(e.target.value) } : l)) })
                            }
                          />
                        </td>
                        <td className="py-1.5 pr-2 text-right font-semibold">{money(lineCost(line))}</td>
                        <td className="py-1.5 text-right">
                          <button
                            type="button"
                            className="text-ink-300 hover:text-wine-600"
                            onClick={() => patch({ lines: sheet.lines.filter((l) => l.id !== line.id) })}
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  className="btn-secondary mt-3"
                  onClick={() =>
                    patch({
                      lines: [
                        ...sheet.lines,
                        { id: uid('cl'), ingredient: '', packPrice: 0, packQty: 1, packUnit: 'kg', usedQty: 0, usedUnit: 'g', yieldPct: 100 },
                      ],
                    })
                  }
                >
                  <Plus size={15} /> Add ingredient
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <StatCard label="Ingredients" value={money(sheetIngredientCost(sheet))} sub={`+ ${sheet.qFactorPct}% Q-factor`} />
                <StatCard label="Total recipe cost" value={money(sheetTotalCost(sheet))} sub={`${sheet.portions} portions`} />
                <StatCard label="Portion cost" value={money(portionCost(sheet))} />
                <StatCard
                  label="GP / portion"
                  value={money(grossProfitPerPortion(sheet))}
                  sub={sheet.sellPrice ? `at ${money(sheet.sellPrice)} inc. GST` : 'set a price →'}
                />
              </div>

              <div className="card grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
                <div>
                  <div className="mb-2 font-display text-base font-semibold">Price it</div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Menu price (inc. GST)">
                      <input
                        type="number"
                        min={0}
                        step={0.5}
                        className="input"
                        value={sheet.sellPrice ?? ''}
                        placeholder="—"
                        onChange={(e) => patch({ sellPrice: e.target.value === '' ? null : Number(e.target.value) })}
                      />
                    </Field>
                    <Field label="GST %">
                      <input
                        type="number"
                        min={0}
                        className="input"
                        value={sheet.taxPct}
                        onChange={(e) => patch({ taxPct: Number(e.target.value) })}
                      />
                    </Field>
                  </div>
                  <div className="mt-3 flex gap-6 text-sm">
                    <div>
                      <div className="label">Food cost</div>
                      <div className={`font-display text-xl font-semibold ${(foodCostPct(sheet) ?? 0) > 35 ? 'text-wine-600' : 'text-sage-600'}`}>
                        {pct(foodCostPct(sheet))}
                      </div>
                    </div>
                    <div>
                      <div className="label">Gross profit</div>
                      <div className="font-display text-xl font-semibold">{pct(grossProfitPct(sheet))}</div>
                    </div>
                  </div>
                </div>
                <div className="border-l border-parchment-100 pl-4 sm:pl-6">
                  <div className="mb-2 font-display text-base font-semibold">Target-margin solver</div>
                  <Field label={`Target food-cost % (${targetFc}%)`}>
                    <input
                      type="range"
                      min={15}
                      max={45}
                      value={targetFc}
                      onChange={(e) => setTargetFc(Number(e.target.value))}
                      className="w-full accent-copper-600"
                    />
                  </Field>
                  <p className="mt-2 text-sm text-ink-500">
                    To run this dish at <strong>{targetFc}% food cost</strong> ({100 - targetFc}% GP), charge{' '}
                    <strong className="text-copper-700">{money(targetSellPrice(sheet, targetFc))}</strong> inc. GST.
                  </p>
                  <button
                    type="button"
                    className="btn-secondary mt-2"
                    onClick={() => patch({ sellPrice: Math.round(targetSellPrice(sheet, targetFc) * 2) / 2 })}
                  >
                    Use this price (rounded to 50c)
                  </button>
                </div>
              </div>

              <div className="card flex items-center justify-between p-4">
                <Field label="Notes" className="mr-4 flex-1">
                  <input
                    className="input"
                    value={sheet.notes}
                    placeholder="Supplier, seasonality, re-cost date…"
                    onChange={(e) => patch({ notes: e.target.value })}
                  />
                </Field>
                <button
                  type="button"
                  className="btn-ghost text-wine-600"
                  onClick={() => {
                    remove(sheet.id)
                    setSelectedId(sheets.find((s) => s.id !== sheet.id)?.id ?? null)
                  }}
                >
                  <Trash2 size={15} /> Delete sheet
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
