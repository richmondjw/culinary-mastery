import { Link } from 'react-router-dom'
import { ArrowRight, Award, BookOpen, ChefHat, ClipboardCheck, Crown, UtensilsCrossed } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { Node, Pill, ProgressRing, SectionTitle, StatCard, TrackBadge } from '../components/ui'
import { achievements, modules, stages } from '../data'
import { capstoneSteps } from '../data/capstone'
import {
  currentModule,
  moduleComplete,
  modulePct,
  moduleUnlocked,
  nextLesson,
  overallPct,
  stagePct,
  totalLessons,
  totalRecipes,
  trackForStage,
} from '../lib/progress'
import { useUserStore } from '../store/useUserStore'
import { shortDate } from '../lib/format'

export default function Dashboard() {
  const data = useUserStore()
  const pct = overallPct(data)
  const current = currentModule(data)
  const next = nextLesson(data)
  const lessonsDoneCount = Object.keys(data.lessonsCompleted).length
  const recipesCookedCount = Object.keys(data.recipesCooked).length
  const passedCount = new Set(data.assessmentAttempts.filter((a) => a.passed).map((a) => a.moduleId)).size
  const capstoneDone = capstoneSteps.filter((s) => data.capstone.steps[s.id] === 'done').length
  const recentAchievements = Object.entries(data.achievementsUnlocked)
    .sort((a, b) => b[1].localeCompare(a[1]))
    .slice(0, 3)

  return (
    <div>
      <PageHeader
        title="Your kitchen, your course"
        subtitle="From knife skills to a costed, profitable menu — one module at a time."
      />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={<BookOpen size={18} />} label="Lessons" value={`${lessonsDoneCount}/${totalLessons()}`} sub="completed" />
        <StatCard icon={<UtensilsCrossed size={18} />} label="Recipes" value={`${recipesCookedCount}/${totalRecipes()}`} sub="cooked" />
        <StatCard icon={<ClipboardCheck size={18} />} label="Assessments" value={`${passedCount}/${modules.length}`} sub="passed" />
        <StatCard icon={<Crown size={18} />} label="Capstone" value={`${capstoneDone}/${capstoneSteps.length}`} sub="deliverables done" />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="card flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:gap-6 lg:col-span-2">
          <ProgressRing pct={pct} size={110} stroke={10} className="shrink-0" />
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg font-semibold">
              {current ? `Continue: Module ${current.number} — ${current.title}` : pct >= 100 ? 'Course complete. Chef.' : 'Start the course'}
            </h3>
            {next ? (
              <p className="mt-1 text-sm text-ink-500">Next lesson: {next.title}</p>
            ) : current ? (
              <p className="mt-1 text-sm text-ink-500">All lessons done — take the assessment to complete the module.</p>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {next && (
                <Link to={`/modules/${next.moduleId}/lessons/${next.lessonId}`} className="btn-primary">
                  Continue lesson <ArrowRight size={16} />
                </Link>
              )}
              {current && !next && (
                <Link to={`/modules/${current.id}/assessment`} className="btn-primary">
                  Take assessment <ArrowRight size={16} />
                </Link>
              )}
              {current && (
                <Link to={`/modules/${current.id}`} className="btn-secondary">
                  Module overview
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="card p-5">
          <h3 className="mb-3 font-display text-base font-semibold">Recent achievements</h3>
          {recentAchievements.length === 0 ? (
            <p className="text-sm text-ink-500">Complete your first lesson to start earning.</p>
          ) : (
            <ul className="space-y-2.5">
              {recentAchievements.map(([id, date]) => {
                const a = achievements.find((x) => x.id === id)
                if (!a) return null
                return (
                  <li key={id} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-ink-900 bg-star-400 text-ink-900">
                      <Award size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{a.title}</div>
                      <div className="text-sm text-ink-500">{shortDate(date)}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
          <Link to="/achievements" className="mt-3 inline-block text-sm font-semibold text-copper-700 hover:text-copper-700">
            All achievements →
          </Link>
        </div>
      </div>

      <SectionTitle>The four stages</SectionTitle>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((st) => (
          <div key={st.id} className="card p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <TrackBadge track={trackForStage(st.id)} size={30} />
                <div className="text-2xs font-mono font-medium uppercase tracking-[0.14em] text-ink-500">Stage {st.id}</div>
              </div>
              <ProgressRing pct={stagePct(data, st.id)} size={44} stroke={4} />
            </div>
            <h3 className="mt-1 font-display text-base font-semibold">{st.name}</h3>
            <p className="mt-1 text-sm text-ink-500">{st.tagline}</p>
          </div>
        ))}
      </div>

      <SectionTitle
        right={
          <Link to="/modules" className="text-sm font-semibold text-copper-700 hover:text-copper-700">
            Full curriculum →
          </Link>
        }
      >
        Module map
      </SectionTitle>
      <div className="card overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-parchment-100">
          {modules.map((m) => {
            const unlocked = moduleUnlocked(data, m)
            const complete = moduleComplete(data, m)
            return (
              <Link
                key={m.id}
                to={`/modules/${m.id}`}
                className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-parchment-50"
              >
                <Node state={complete ? 'done' : !unlocked ? 'locked' : m.id === current?.id ? 'current' : 'todo'}>
                  {m.number}
                </Node>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`truncate text-sm font-semibold ${unlocked ? '' : 'text-ink-500'}`}>{m.title}</span>
                    {complete && <Pill tone="pass">complete</Pill>}
                    {!unlocked && <Pill tone="locked">locked</Pill>}
                    {m.id === 'm19' && <ChefHat size={14} className="text-copper-700" />}
                  </div>
                  <div className="truncate text-sm text-ink-500">
                    <span className="font-mono">M{m.number}</span> · {m.subtitle}
                  </div>
                </div>
                <div className="hidden w-28 shrink-0 sm:block">
                  <div className="meter" title={`${modulePct(data, m)}% complete`}>
                    {complete ? (
                      <div className="meter-fill-done">✓ DONE</div>
                    ) : (
                      <div className="meter-fill" style={{ width: `${modulePct(data, m)}%` }} />
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
