import { Link, useParams } from 'react-router-dom'
import { AlertTriangle, Check, ChefHat, Dumbbell, Eye, Repeat, UtensilsCrossed } from 'lucide-react'
import { BackLink, PageHeader } from '../components/Layout'
import { Pill, SectionTitle } from '../components/ui'
import { moduleById, recipeById, techniques } from '../data'
import { videosFor } from '../data/videos'
import { VideoPanel } from '../components/VideoEmbed'
import { useUserStore } from '../store/useUserStore'
import { shortDate } from '../lib/format'

export default function LessonPage() {
  const { id, lessonId } = useParams()
  const data = useUserStore()
  const toggleLesson = useUserStore((s) => s.toggleLesson)
  const m = id ? moduleById.get(id) : undefined
  const lesson = m?.lessons.find((l) => l.id === lessonId)
  if (!m || !lesson) return <p className="text-ink-500">Lesson not found.</p>

  const idx = m.lessons.findIndex((l) => l.id === lesson.id)
  const nextLesson = m.lessons[idx + 1]
  const doneAt = data.lessonsCompleted[lesson.id]
  const lessonTechniques = techniques.filter((t) => lesson.techniqueIds.includes(t.id))
  // One clip per technique this lesson teaches — the "show me" companion to the written steps.
  const lessonClips = lessonTechniques
    .map((t) => ({ technique: t, clips: videosFor(t.id) }))
    .filter((x) => x.clips.length > 0)

  return (
    <div className="mx-auto max-w-3xl">
      <BackLink to={`/modules/${m.id}`} label={`Module ${m.number}: ${m.title}`} />
      <PageHeader title={lesson.title} subtitle={lesson.summary} />

      {lessonTechniques.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-1.5">
          {lessonTechniques.map((t) => (
            <Link key={t.id} to={`/techniques#${t.id}`}>
              <Pill tone="neutral">
                <ChefHat size={11} /> {t.name}
              </Pill>
            </Link>
          ))}
        </div>
      )}

      <div className="space-y-6">
        {lesson.theory.map((t, i) => (
          <section key={i} className="card p-6">
            <h2 className="mb-2 font-display text-lg font-semibold">{t.heading}</h2>
            {t.body.split('\n\n').map((p, j) => (
              <p key={j} className="mb-3 text-sm leading-relaxed text-ink-700 last:mb-0">
                {p}
              </p>
            ))}
          </section>
        ))}

        {lessonClips.length > 0 && (
          <section className="card p-6">
            <h2 className="mb-1 flex items-center gap-2 font-display text-lg font-semibold">
              <Eye size={18} className="text-copper-700" /> Watch first
            </h2>
            <p className="mb-3 text-sm text-ink-500">
              See the technique, then read the steps, then do it. Video is a companion to the method below — not a
              replacement for it.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {lessonClips.map(({ technique, clips }) => (
                <div key={technique.id}>
                  <div className="mb-1.5 text-2xs font-mono font-medium uppercase tracking-[0.14em] text-copper-700">
                    {technique.name}
                  </div>
                  <VideoPanel videos={clips} compact />
                </div>
              ))}
            </div>
          </section>
        )}

        {lesson.demonstrations.map((d, i) => (
          <section key={i} className="card p-6">
            <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
              <Eye size={18} className="text-copper-700" /> Demonstration: {d.title}
            </h2>
            <ol className="space-y-2">
              {d.steps.map((s, j) => (
                <li key={j} className="flex gap-3 text-sm text-ink-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper-50 text-sm font-bold text-copper-700">
                    {j + 1}
                  </span>
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}

        {lesson.exercises.map((e, i) => (
          <section key={i} className="card border-l-4 border-l-copper-500 p-6">
            <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold">
              <Dumbbell size={18} className="text-copper-700" /> Practice: {e.title}
            </h2>
            <p className="text-sm leading-relaxed text-ink-700">{e.instructions}</p>
            {e.repeatPractice && (
              <p className="mt-2 flex gap-2 rounded-xl bg-copper-50 p-3 text-sm text-copper-800">
                <Repeat size={14} className="mt-0.5 shrink-0" />
                <span>
                  <strong>Deliberate repetition:</strong> {e.repeatPractice}
                </span>
              </p>
            )}
          </section>
        ))}

        {lesson.recipeIds.length > 0 && (
          <section className="card p-6">
            <SectionTitle>
              <span className="inline-flex items-center gap-2">
                <UtensilsCrossed size={18} className="text-copper-700" /> Cook it in
              </span>
            </SectionTitle>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {lesson.recipeIds.map((rid) => {
                const r = recipeById.get(rid)
                if (!r) return null
                const cooked = !!data.recipesCooked[rid]
                return (
                  <Link
                    key={rid}
                    to={`/recipes/${rid}`}
                    className="flex items-center gap-3 rounded-xl border border-parchment-200 px-3 py-2.5 hover:border-copper-300"
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
                        {cooked ? 'cooked' : 'not cooked yet'} · {r.timeMins} min · serves {r.serves}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {lesson.troubleshooting.length > 0 && (
          <section className="card p-6">
            <SectionTitle>
              <span className="inline-flex items-center gap-2">
                <AlertTriangle size={18} className="text-copper-700" /> Troubleshooting
              </span>
            </SectionTitle>
            <div className="space-y-3">
              {lesson.troubleshooting.map((t, i) => (
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
        )}

        <div className="flex items-center justify-between rounded-2xl border border-parchment-200 bg-surface p-4">
          <button
            type="button"
            onClick={() => toggleLesson(lesson.id)}
            className={doneAt ? 'btn-secondary' : 'btn-primary'}
          >
            <Check size={16} />
            {doneAt ? `Completed ${shortDate(doneAt)} — undo` : 'Mark lesson complete'}
          </button>
          {nextLesson ? (
            <Link to={`/modules/${m.id}/lessons/${nextLesson.id}`} className="btn-ghost">
              Next: {nextLesson.title} →
            </Link>
          ) : (
            <Link to={`/modules/${m.id}/assessment`} className="btn-ghost">
              Module assessment →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
