import { useState } from 'react'
import { Plus, ShoppingBasket, Trash2, Wrench } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { Field, Pill, SectionTitle } from '../components/ui'
import { equipmentList, modules, recipes } from '../data'
import { uid } from '../lib/id'
import { useUserStore } from '../store/useUserStore'
import type { ShoppingItem } from '../types/state'

export default function Lists() {
  const data = useUserStore()
  const setShopping = useUserStore((s) => s.setShopping)
  const toggleEquipment = useUserStore((s) => s.toggleEquipment)
  const [manual, setManual] = useState('')
  const [recipePick, setRecipePick] = useState('')
  const [modulePick, setModulePick] = useState('')

  function addItems(items: ShoppingItem[]) {
    const existing = new Set(data.shopping.map((i) => i.label.toLowerCase()))
    const fresh = items.filter((i) => !existing.has(i.label.toLowerCase()))
    setShopping([...data.shopping, ...fresh])
  }

  function addManual() {
    if (!manual.trim()) return
    addItems([{ id: uid('sh'), label: manual.trim(), category: 'Manual', done: false }])
    setManual('')
  }

  function addFromRecipe(recipeId: string) {
    const r = recipes.find((x) => x.id === recipeId)
    if (!r) return
    addItems(
      r.ingredients.map((ing) => ({
        id: uid('sh'),
        label: ing.item,
        detail: ing.qty == null ? ing.unit : `${ing.qty} ${ing.unit}${ing.prep ? ` — ${ing.prep}` : ''}`,
        category: r.title,
        done: false,
      })),
    )
  }

  function addFromModule(moduleId: string) {
    const m = modules.find((x) => x.id === moduleId)
    if (!m) return
    addItems(
      m.ingredients.map((label) => ({
        id: uid('sh'),
        label,
        category: `Module ${m.number}`,
        done: false,
      })),
    )
  }

  const grouped = data.shopping.reduce<Record<string, ShoppingItem[]>>((acc, i) => {
    ;(acc[i.category] ??= []).push(i)
    return acc
  }, {})

  const equipmentGroups = equipmentList.reduce<Record<string, typeof equipmentList>>((acc, e) => {
    ;(acc[e.category] ??= []).push(e)
    return acc
  }, {})
  const ownedCount = equipmentList.filter((e) => data.equipmentOwned[e.id]).length

  return (
    <div>
      <PageHeader title="Lists" subtitle="Shopping for the next cook, and the equipment that carries you through the course." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section>
          <SectionTitle
            right={
              data.shopping.some((i) => i.done) && (
                <button type="button" className="text-sm font-semibold text-wine-600" onClick={() => setShopping(data.shopping.filter((i) => !i.done))}>
                  Clear ticked
                </button>
              )
            }
          >
            <span className="inline-flex items-center gap-2">
              <ShoppingBasket size={18} className="text-copper-700" /> Shopping list
            </span>
          </SectionTitle>

          <div className="card space-y-3 p-5">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Field label="Add every ingredient from a recipe">
                <select
                  className="input"
                  value={recipePick}
                  onChange={(e) => {
                    setRecipePick(e.target.value)
                    if (e.target.value) addFromRecipe(e.target.value)
                    setRecipePick('')
                  }}
                >
                  <option value="">Choose recipe…</option>
                  {recipes.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Add a module's staples">
                <select
                  className="input"
                  value={modulePick}
                  onChange={(e) => {
                    setModulePick(e.target.value)
                    if (e.target.value) addFromModule(e.target.value)
                    setModulePick('')
                  }}
                >
                  <option value="">Choose module…</option>
                  {modules.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.number}. {m.title}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="flex gap-2">
              <input
                className="input"
                placeholder="Add item manually…"
                value={manual}
                onChange={(e) => setManual(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addManual()}
              />
              <button type="button" className="btn-primary shrink-0" onClick={addManual}>
                <Plus size={16} />
              </button>
            </div>

            {data.shopping.length === 0 ? (
              <p className="py-6 text-center text-sm text-ink-500">List is empty — pull in a recipe above.</p>
            ) : (
              Object.entries(grouped).map(([cat, items]) => (
                <div key={cat}>
                  <div className="mb-1 mt-2 text-2xs font-mono font-medium uppercase tracking-[0.14em] text-ink-500">{cat}</div>
                  <ul className="space-y-1">
                    {items.map((i) => (
                      <li key={i.id} className="group flex items-center gap-2">
                        <label className="flex flex-1 cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-parchment-50">
                          <input
                            type="checkbox"
                            checked={i.done}
                            onChange={() => setShopping(data.shopping.map((x) => (x.id === i.id ? { ...x, done: !x.done } : x)))}
                            className="h-6 w-6 shrink-0 accent-copper-600"
                          />
                          <span className={`text-sm ${i.done ? 'text-ink-500 line-through' : 'text-ink-700'}`}>
                            {i.label}
                            {i.detail && <span className="ml-1.5 text-sm text-ink-500">{i.detail}</span>}
                          </span>
                        </label>
                        <button
                          type="button"
                          className="hidden text-ink-300 hover:text-wine-600 group-hover:block"
                          onClick={() => setShopping(data.shopping.filter((x) => x.id !== i.id))}
                        >
                          <Trash2 size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </section>

        <section>
          <SectionTitle right={<Pill tone="neutral">{ownedCount}/{equipmentList.length} owned</Pill>}>
            <span className="inline-flex items-center gap-2">
              <Wrench size={18} className="text-copper-700" /> Equipment
            </span>
          </SectionTitle>
          <div className="card p-5">
            {Object.entries(equipmentGroups).map(([cat, items]) => (
              <div key={cat} className="mb-4 last:mb-0">
                <div className="mb-1 text-2xs font-mono font-medium uppercase tracking-[0.14em] text-ink-500">{cat}</div>
                <ul className="space-y-1">
                  {items.map((e) => (
                    <li key={e.id}>
                      <label className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2 py-1.5 hover:bg-parchment-50">
                        <input
                          type="checkbox"
                          checked={!!data.equipmentOwned[e.id]}
                          onChange={() => toggleEquipment(e.id)}
                          className="mt-0.5 h-6 w-6 shrink-0 accent-copper-600"
                        />
                        <span className="min-w-0 text-sm text-ink-700">
                          {e.name}
                          {e.essential && (
                            <span className="ml-1.5 align-middle">
                              <Pill tone="neutral">essential</Pill>
                            </span>
                          )}
                          <span className="block text-sm text-ink-500">
                            {e.neededFrom}
                            {e.note ? ` · ${e.note}` : ''}
                          </span>
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
