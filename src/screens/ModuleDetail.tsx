import { Link, useParams } from 'react-router-dom'
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  ShoppingBasket,
  Sparkles,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react'
import { BackLink, PageHeader } from '../components/Layout'
import { DifficultyDots, Meter, Node, Pill, ProgressRing, SectionTitle } from '../components/ui'
import { moduleById, recipes } from '../data'
import { hours } from '../lib/format'
import { assessmentPassed, moduleComplete, modulePct, moduleUnlocked } from '../lib/progress'
import { useUserStore } from '../store/useUserStore'

export default function ModuleDetail() {
  const { id } = useParams()
  const data = useUserStore()
  const m = id ? moduleById.get(id) : undefined
  if (!m) return <p className="text-ink-500">Module not found.</p>

  const unlocked = moduleUnlocked(data, m)
  const complete = moduleComplete(data, m)
  const passed = assessmentPassed(data, m.id)
  const moduleRecipes = recipes.filter((r) => r.moduleId === m.id)
  const lessonsDone = m.lessons.filter((l) => data.lessonsCompleted[l.id]).length
  const rubricMax = m.assessment.rubric.reduce((s, r) => s + r.maxScore, 0)

  return (
    <div>
      <BackLink to="/modules" label="Curriculum" />
      <PageHeader
        title={`Module ${m.number}: ${m.title}`}
        subtitle={m.description}
        right={<ProgressRing pct={modulePct(data, m)} size={72} stroke={7} />}
      />

      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-ink-500">
        <DifficultyDots level={m.difficulty} />
        <span className="inline-flex items-center gap-1">
          <Clock size={14} /> {hours(m.estimatedHours)}
        </span>
        {complete && <Pill tone="pass">complete</Pill>}
        {!unlocked && (
          <Pill tone="locked">
            Needs{' '}
            {m.prerequisites
              .map((p) => moduleById.get(p)?.title ?? p)
              .join(', ')}
          </Pill>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="card p-5">
            <SectionTitle>Learning objectives</SectionTitle>
            <ul className="space-y-1.5 text-sm text-ink-700">
              {m.objectives.map((o, i) => (
                <li key={i} className="flex gap-2">
                  <Check size={15} className="mt-0.5 shrink-0 text-copper-700" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          <section className="card overflow-hidden">
            <div className="px-5 pt-5">
              <SectionTitle>Lessons</SectionTitle>
              <Meter
                pct={m.lessons.length ? (lessonsDone / m.lessons.length) * 100 : 0}
                caption={`${lessonsDone} of ${m.lessons.length} lessons`}
                right={hours(m.estimatedHours)}
              />
            </div>
            <div className="divide-y divide-parchment-100">
              {m.lessons.map((l, i) => {
                const done = !!data.lessonsCompleted[l.id]
                return (
                  <Link
                    key={l.id}
                    to={`/modules/${m.id}/lessons/${l.id}`}
                    className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-parchment-50"
                  >
                    <Node state={done ? 'done' : 'todo'}>{i + 1}</Node>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold">{l.title}</div>
                      <div className="truncate text-sm text-ink-500">{l.summary}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          <section className="card p-5">
            <SectionTitle>
              <span className="inline-flex items-center gap-2">
                <UtensilsCrossed size={18} className="text-copper-700" /> Module recipes
              </span>
            </SectionTitle>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {moduleRecipes.map((r) => {
                const cooked = !!data.recipesCooked[r.id]
                return (
                  <Link
                    key={r.id}
                    to={`/recipes/${r.id}`}
                    className="flex items-center gap-3 rounded-xl border border-parchment-200 px-3 py-2.5 transition-colors hover:border-copper-300"
                  >
                    <span
                      aria-hidden="true"
                      className={`w-4 shrink-0 text-center font-mono text-sm ${cooked ? 'text-sage-700' : 'text-ink-500'}`}
                    >
                      {cooked ? '✓' : '·'}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{r.title}</div>
                      <div className="text-sm text-ink-500">
                        {cooked ? 'cooked' : 'not cooked yet'} · {r.timeMins} min
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          <section className="card p-5">
            <SectionTitle>
              <span className="inline-flex items-center gap-2">
                <AlertTriangle size={18} className="text-copper-700" /> Common mistakes
              </span>
            </SectionTitle>
            <div className="space-y-3">
              {m.commonMistakes.map((t, i) => (
                <div key={i} className="rounded-xl bg-parchment-50 p-3">
                  <div className="text-sm font-semibold">{t.problem}</div>
                  <div className="mt-0.5 text-sm text-ink-500">
                    <span className="font-semibold text-ink-700">Why:</span> {t.cause}
                  </div>
                  <div className="mt-0.5 text-sm text-ink-500">
                    <span className="font-semibold text-sage-700">Fix:</span> {t.fix}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="card p-5">
            <h3 className="mb-2 flex items-center gap-2 font-display text-base font-semibold">
              <ClipboardCheck size={17} className="text-copper-700" /> Assessment
            </h3>
            <div className="text-sm font-semibold">{m.assessment.title}</div>
            <p className="mt-1 text-sm text-ink-500">{m.assessment.brief}</p>
            <div className="mt-2 text-sm text-ink-500">
              Pass mark {m.assessment.passScore}/{rubricMax}
              {passed && (
                <span className="ml-2 inline-flex items-center gap-1 font-semibold text-sage-700">
                  <CheckCircle2 size={12} /> passed
                </span>
              )}
            </div>
            <Link to={`/modules/${m.id}/assessment`} className={`mt-3 w-full ${unlocked ? 'btn-primary' : 'btn-secondary pointer-events-none opacity-50'}`}>
              {passed ? 'Review / retake' : 'Take assessment'}
            </Link>
          </section>

          <section className="card p-5">
            <h3 className="mb-2 flex items-center gap-2 font-display text-base font-semibold">
              <Sparkles size={17} className="text-copper-700" /> Skills unlocked
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {m.skillsUnlocked.map((s) => (
                <Pill key={s} tone="neutral">
                  {s}
                </Pill>
              ))}
            </div>
            {m.prerequisites.length > 0 && (
              <>
                <h4 className="mb-1 mt-4 text-2xs font-mono font-medium uppercase tracking-[0.14em] text-ink-500">Prerequisites</h4>
                <div className="flex flex-wrap gap-1.5">
                  {m.prerequisites.map((p) => {
                    const pm = moduleById.get(p)
                    return (
                      <Link key={p} to={`/modules/${p}`}>
                        <Pill tone={pm && moduleComplete(data, pm) ? 'pass' : 'locked'}>{pm?.title ?? p}</Pill>
                      </Link>
                    )
                  })}
                </div>
              </>
            )}
          </section>

          <section className="card p-5">
            <h3 className="mb-2 flex items-center gap-2 font-display text-base font-semibold">
              <Wrench size={17} className="text-copper-700" /> Equipment
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-ink-500">
              {m.equipment.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
            <h3 className="mb-2 mt-4 flex items-center gap-2 font-display text-base font-semibold">
              <ShoppingBasket size={17} className="text-copper-700" /> Ingredients to have in
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-ink-500">
              {m.ingredients.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </section>

          <section className="card p-5">
            <h3 className="mb-2 font-display text-base font-semibold">Completion criteria</h3>
            <ul className="space-y-1.5 text-sm text-ink-500">
              {m.completionCriteria.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <Check size={13} className="mt-0.5 shrink-0 text-sage-700" />
                  {c}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
