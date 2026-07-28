import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Search, Users } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { DifficultyDots, Pill } from '../components/ui'
import { modules, recipes } from '../data'
import { mins } from '../lib/format'
import { useUserStore } from '../store/useUserStore'

export default function Recipes() {
  const data = useUserStore()
  const [q, setQ] = useState('')
  const [moduleFilter, setModuleFilter] = useState('')
  const [difficulty, setDifficulty] = useState(0)
  const [cookedFilter, setCookedFilter] = useState<'all' | 'cooked' | 'not'>('all')

  const filtered = useMemo(() => {
    const ql = q.toLowerCase()
    return recipes.filter((r) => {
      if (moduleFilter && r.moduleId !== moduleFilter) return false
      if (difficulty && r.difficulty !== difficulty) return false
      const cooked = !!data.recipesCooked[r.id]
      if (cookedFilter === 'cooked' && !cooked) return false
      if (cookedFilter === 'not' && cooked) return false
      if (ql && !r.title.toLowerCase().includes(ql) && !r.description.toLowerCase().includes(ql)) return false
      return true
    })
  }, [q, moduleFilter, difficulty, cookedFilter, data.recipesCooked])

  const cookedCount = Object.keys(data.recipesCooked).length

  return (
    <div>
      <PageHeader
        title="Recipe library"
        subtitle={`${recipes.length} recipes that carry the curriculum — every one re-drills a foundation. You've cooked ${cookedCount}.`}
      />

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative w-full sm:w-64">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500" />
          <input className="input pl-9" placeholder="Search recipes…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <select className="input w-full sm:w-56" value={moduleFilter} onChange={(e) => setModuleFilter(e.target.value)}>
          <option value="">All modules</option>
          {modules.map((m) => (
            <option key={m.id} value={m.id}>
              {m.number}. {m.title}
            </option>
          ))}
        </select>
        <select className="input w-[47%] sm:w-40" value={difficulty} onChange={(e) => setDifficulty(Number(e.target.value))}>
          <option value={0}>Any difficulty</option>
          {[1, 2, 3, 4, 5].map((d) => (
            <option key={d} value={d}>
              Difficulty {d}
            </option>
          ))}
        </select>
        <select className="input w-[47%] sm:w-40" value={cookedFilter} onChange={(e) => setCookedFilter(e.target.value as 'all' | 'cooked' | 'not')}>
          <option value="all">Cooked + not</option>
          <option value="cooked">Cooked</option>
          <option value="not">Not cooked yet</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => {
          const m = modules.find((x) => x.id === r.moduleId)
          const cooked = !!data.recipesCooked[r.id]
          return (
            <Link key={r.id} to={`/recipes/${r.id}`} className="card group flex flex-col p-5 transition-shadow hover:shadow-lift">
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-2xs font-mono font-medium uppercase tracking-[0.14em] text-ink-500">
                  Module {m?.number ?? '—'}
                </span>
                {cooked && <Pill tone="pass">cooked</Pill>}
              </div>
              <h3 className="font-display text-base font-semibold leading-snug group-hover:text-copper-700">{r.title}</h3>
              <p className="mt-1 line-clamp-2 flex-1 text-sm text-ink-500">{r.description}</p>
              <div className="mt-3 flex items-center gap-3 text-sm text-ink-500">
                <DifficultyDots level={r.difficulty} />
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} /> {mins(r.timeMins)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users size={12} /> {r.serves}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
      {filtered.length === 0 && <p className="py-10 text-center text-sm text-ink-500">No recipes match those filters.</p>}
    </div>
  )
}
