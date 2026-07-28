import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check, ChefHat, Clock, Minus, NotebookPen, Plus, Repeat, Users } from 'lucide-react'
import { BackLink, PageHeader } from '../components/Layout'
import { DifficultyDots, Pill, SectionTitle } from '../components/ui'
import { moduleById, recipeById, techniques } from '../data'
import { mins, scaleQty, shortDate } from '../lib/format'
import { useUserStore } from '../store/useUserStore'

export default function RecipeDetail() {
  const { id } = useParams()
  const data = useUserStore()
  const toggleRecipeCooked = useUserStore((s) => s.toggleRecipeCooked)
  const r = id ? recipeById.get(id) : undefined
  const [servings, setServings] = useState<number | null>(null)
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  if (!r) return <p className="text-ink-500">Recipe not found.</p>
  const m = moduleById.get(r.moduleId)
  const cookedAt = data.recipesCooked[r.id]
  const targetServes = servings ?? r.serves
  const factor = targetServes / r.serves
  const recipeTechniques = techniques.filter((t) => r.techniqueIds.includes(t.id))
  const relatedNotes = data.notes.filter((n) => n.linkType === 'recipe' && n.linkId === r.id)

  return (
    <div className="mx-auto max-w-3xl">
      <BackLink to="/recipes" label="Recipe library" />
      <PageHeader title={r.title} subtitle={r.description} />

      <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-ink-500">
        <DifficultyDots level={r.difficulty} />
        <span className="inline-flex items-center gap-1">
          <Clock size={14} /> {mins(r.timeMins)}
        </span>
        <span className="inline-flex items-center gap-1">
          <Users size={14} /> serves {r.serves}
        </span>
        {m && (
          <Link to={`/modules/${m.id}`}>
            <Pill tone="neutral">Module {m.number}: {m.title}</Pill>
          </Link>
        )}
      </div>

      {recipeTechniques.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-1.5">
          {recipeTechniques.map((t) => (
            <Link key={t.id} to={`/techniques#${t.id}`}>
              <Pill tone="neutral">
                <ChefHat size={11} /> {t.name}
              </Pill>
            </Link>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
        <section className="card h-fit p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-base font-semibold">Ingredients</h2>
            <div className="flex items-center gap-1.5">
              <button type="button" className="btn-ghost h-11 w-11 !p-0" onClick={() => setServings(Math.max(1, targetServes - 1))}>
                <Minus size={14} />
              </button>
              <span className="w-14 text-center text-sm font-semibold">serves {targetServes}</span>
              <button type="button" className="btn-ghost h-11 w-11 !p-0" onClick={() => setServings(targetServes + 1)}>
                <Plus size={14} />
              </button>
            </div>
          </div>
          <ul className="space-y-2 text-sm">
            {r.ingredients.map((ing, i) => (
              <li key={i} className="flex justify-between gap-2 border-b border-parchment-100 pb-1.5 last:border-0">
                <span className="text-ink-700">
                  {ing.item}
                  {ing.prep && <span className="block text-sm text-ink-500">{ing.prep}</span>}
                </span>
                <span className="shrink-0 font-semibold text-ink-900">
                  {ing.qty == null ? ing.unit : `${scaleQty(ing.qty, factor)} ${ing.unit}`}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-6">
          <section className="card p-6">
            <SectionTitle>Method — cook mode</SectionTitle>
            <ol className="space-y-3">
              {r.method.map((s, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
                    className={`flex w-full gap-3 rounded-xl p-2 text-left transition-colors ${
                      checked[i] ? 'bg-sage-100/60 text-ink-500 line-through' : 'hover:bg-parchment-50'
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        checked[i] ? 'bg-sage-600 text-ink-900' : 'bg-copper-50 text-copper-700'
                      }`}
                    >
                      {checked[i] ? <Check size={13} /> : i + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{s}</span>
                  </button>
                </li>
              ))}
            </ol>
          </section>

          {r.chefNotes.length > 0 && (
            <section className="card border-l-4 border-l-sage-500 p-5">
              <h3 className="mb-2 font-display text-base font-semibold">Chef&rsquo;s notes</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-ink-700">
                {r.chefNotes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="card p-5">
            <h3 className="mb-1 flex items-center gap-2 font-display text-base font-semibold">
              <Repeat size={16} className="text-copper-700" /> What this re-drills
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {r.reinforces.map((s) => (
                <Pill key={s} tone="neutral">
                  {s}
                </Pill>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-parchment-200 bg-surface p-4">
            <button type="button" className={cookedAt ? 'btn-secondary' : 'btn-primary'} onClick={() => toggleRecipeCooked(r.id)}>
              <Check size={16} />
              {cookedAt ? `Cooked ${shortDate(cookedAt)} — undo` : 'Mark as cooked'}
            </button>
            <Link to={`/notes?recipe=${r.id}`} className="btn-secondary">
              <NotebookPen size={16} /> Note & photos
            </Link>
          </div>

          {relatedNotes.length > 0 && (
            <section className="card p-5">
              <h3 className="mb-2 font-display text-base font-semibold">Your notes on this recipe</h3>
              <ul className="space-y-2 text-sm text-ink-700">
                {relatedNotes.map((n) => (
                  <li key={n.id} className="rounded-xl bg-parchment-50 p-3">
                    <div className="text-sm text-ink-500">{shortDate(n.date)}</div>
                    {n.text}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
