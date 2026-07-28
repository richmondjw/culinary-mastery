import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { DifficultyDots, Meter, Pill, SectionTitle, TrackBadge } from '../components/ui'
import { modules, stages } from '../data'
import { hours } from '../lib/format'
import { moduleComplete, modulePct, moduleUnlocked, stageModules, trackForStage } from '../lib/progress'
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
          <SectionTitle right={<TrackBadge track={trackForStage(st.id)} size={32} />}>
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
                      <div className="flex items-center gap-2 text-2xs font-mono font-medium uppercase tracking-[0.14em] text-ink-500">
                        Module {m.number}
                      </div>
                      <h3 className="mt-0.5 font-display text-lg font-semibold leading-snug group-hover:text-copper-700">
                        {m.title}
                      </h3>
                      <p className="mt-0.5 text-sm italic text-ink-500">{m.subtitle}</p>
                    </div>
                    {complete ? (
                      <Pill tone="pass">complete</Pill>
                    ) : !unlocked ? (
                      <Pill tone="locked">locked</Pill>
                    ) : pct > 0 ? (
                      <Pill tone="neutral">{pct}%</Pill>
                    ) : null}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-500">{m.description}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm text-ink-500">
                    <DifficultyDots level={m.difficulty} />
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {hours(m.estimatedHours)}
                    </span>
                    <span>{m.lessons.length} lessons</span>
                  </div>
                  <div className="mt-3">
                    <Meter
                      pct={pct}
                      caption={`${m.lessons.filter((l) => data.lessonsCompleted[l.id]).length} of ${m.lessons.length} lessons`}
                      right={`${pct}%`}
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
      <p className="text-center text-sm text-ink-500">
        Total: {modules.length} modules · {modules.reduce((s, m) => s + m.estimatedHours, 0)} hours of guided practice
      </p>
    </div>
  )
}
