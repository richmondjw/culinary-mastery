import { Link } from 'react-router-dom'
import { Clock, Lock } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { DifficultyDots, Pill, SectionTitle } from '../components/ui'
import { modules, stages } from '../data'
import { hours } from '../lib/format'
import { moduleComplete, modulePct, moduleUnlocked, stageModules } from '../lib/progress'
import { useUserStore } from '../store/useUserStore'

export default function Modules() {
  const data = useUserStore()

  return (
    <div>
      <PageHeader
        title="Curriculum"
        subtitle="Nineteen modules across four stages. Each module unlocks when its prerequisites are complete — lessons done and assessment passed."
      />
      {stages.map((st) => (
        <section key={st.id} className="mb-8">
          <SectionTitle>
            Stage {st.id} — {st.name}
          </SectionTitle>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {stageModules(st.id).map((m) => {
              const unlocked = moduleUnlocked(data, m)
              const complete = moduleComplete(data, m)
              const pct = modulePct(data, m)
              return (
                <Link
                  key={m.id}
                  to={`/modules/${m.id}`}
                  className={`card group p-5 transition-shadow hover:shadow-lift ${unlocked ? '' : 'opacity-70'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-wider text-ink-400">
                        Module {m.number}
                        {!unlocked && <Lock size={11} />}
                      </div>
                      <h3 className="mt-0.5 font-display text-lg font-semibold leading-snug group-hover:text-copper-700">
                        {m.title}
                      </h3>
                      <p className="mt-0.5 text-xs italic text-ink-400">{m.subtitle}</p>
                    </div>
                    {complete ? <Pill tone="sage">complete</Pill> : pct > 0 ? <Pill tone="copper">{pct}%</Pill> : null}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-500">{m.description}</p>
                  <div className="mt-3 flex items-center gap-4 text-2xs text-ink-400">
                    <DifficultyDots level={m.difficulty} />
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {hours(m.estimatedHours)}
                    </span>
                    <span>{m.lessons.length} lessons</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-parchment-100">
                    <div className={`h-full rounded-full ${complete ? 'bg-sage-500' : 'bg-copper-500'}`} style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
      <p className="text-center text-xs text-ink-400">
        Total: {modules.length} modules · {modules.reduce((s, m) => s + m.estimatedHours, 0)} hours of guided practice
      </p>
    </div>
  )
}
