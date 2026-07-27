import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Camera, CheckCircle2, XCircle } from 'lucide-react'
import { BackLink, PageHeader } from '../components/Layout'
import { Field, Pill, SectionTitle } from '../components/ui'
import { PhotoStrip, PhotoUploader } from '../components/photos'
import { moduleById } from '../data'
import { shortDate, todayIso } from '../lib/format'
import { uid } from '../lib/id'
import { useUserStore } from '../store/useUserStore'

export default function AssessmentPage() {
  const { id } = useParams()
  const data = useUserStore()
  const addAttempt = useUserStore((s) => s.addAssessmentAttempt)
  const m = id ? moduleById.get(id) : undefined
  const [scores, setScores] = useState<Record<string, number>>({})
  const [reflection, setReflection] = useState('')
  const [photoIds, setPhotoIds] = useState<string[]>([])
  const [submitted, setSubmitted] = useState<null | boolean>(null)

  if (!m) return <p className="text-ink-500">Module not found.</p>
  const a = m.assessment
  const maxTotal = a.rubric.reduce((s, r) => s + r.maxScore, 0)
  const total = a.rubric.reduce((s, r) => s + (scores[r.criterion] ?? 0), 0)
  const attempts = data.assessmentAttempts.filter((x) => x.moduleId === m.id)

  function submit() {
    if (!m) return
    const passed = total >= a.passScore
    addAttempt({
      id: uid('att'),
      moduleId: m.id,
      date: todayIso(),
      scores,
      total,
      maxTotal,
      passed,
      reflection,
      photoIds,
    })
    setSubmitted(passed)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <BackLink to={`/modules/${m.id}`} label={`Module ${m.number}: ${m.title}`} />
      <PageHeader title={`Assessment: ${a.title}`} subtitle={a.brief} />

      <div className="mb-6 card p-5">
        <div className="text-sm text-ink-700">
          <strong>Evidence required:</strong> {a.evidence}
        </div>
        <div className="mt-1 text-xs text-ink-400">
          Score yourself honestly against each criterion once the session is done. Pass mark: {a.passScore}/{maxTotal}.
        </div>
      </div>

      {submitted !== null && (
        <div
          className={`mb-6 flex items-center gap-3 rounded-2xl p-4 ${
            submitted ? 'bg-sage-100 text-sage-700' : 'bg-red-50 text-wine-600'
          }`}
        >
          {submitted ? <CheckCircle2 size={22} /> : <XCircle size={22} />}
          <div>
            <div className="font-semibold">
              {submitted ? `Passed — ${total}/${maxTotal}. Well cooked.` : `Not yet — ${total}/${maxTotal}.`}
            </div>
            <div className="text-xs opacity-80">
              {submitted
                ? 'The module is marked passed. Repetition still pays: retake it in a month and beat your score.'
                : 'Review the common mistakes, practise the weakest criterion, and retake when ready. Attempts are kept.'}
            </div>
          </div>
        </div>
      )}

      <section className="card p-6">
        <SectionTitle>Score your rubric</SectionTitle>
        <div className="space-y-5">
          {a.rubric.map((r) => (
            <div key={r.criterion}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{r.criterion}</div>
                <div className="text-sm font-bold text-copper-700">
                  {scores[r.criterion] ?? 0}/{r.maxScore}
                </div>
              </div>
              <p className="mb-1.5 text-xs text-ink-400">{r.guidance}</p>
              <input
                type="range"
                min={0}
                max={r.maxScore}
                step={1}
                value={scores[r.criterion] ?? 0}
                onChange={(e) => setScores((s) => ({ ...s, [r.criterion]: Number(e.target.value) }))}
                className="w-full accent-copper-600"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4">
          <Field label="Reflection — what went well, what to practise">
            <textarea
              className="input min-h-20"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Honest notes make the next attempt better…"
            />
          </Field>
          <div>
            <span className="label">
              <Camera size={12} className="mr-1 inline" />
              Photo evidence
            </span>
            <PhotoUploader linkId={a.id} onAdded={(pid) => setPhotoIds((p) => [...p, pid])} />
            <PhotoStrip ids={photoIds} onRemove={(pid) => setPhotoIds((p) => p.filter((x) => x !== pid))} />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-parchment-100 pt-4">
          <div className="font-display text-lg font-semibold">
            Total: {total}/{maxTotal}{' '}
            <span className={`text-sm ${total >= a.passScore ? 'text-sage-600' : 'text-ink-400'}`}>
              ({total >= a.passScore ? 'passing' : `pass at ${a.passScore}`})
            </span>
          </div>
          <button type="button" className="btn-primary" onClick={submit}>
            Submit attempt
          </button>
        </div>
      </section>

      {attempts.length > 0 && (
        <section className="mt-6 card p-6">
          <SectionTitle>Attempt history</SectionTitle>
          <div className="space-y-3">
            {[...attempts].reverse().map((att) => (
              <div key={att.id} className="rounded-xl bg-parchment-50 p-3">
                <div className="flex items-center gap-2 text-sm">
                  {att.passed ? <Pill tone="sage">passed</Pill> : <Pill tone="wine">not passed</Pill>}
                  <span className="font-semibold">
                    {att.total}/{att.maxTotal}
                  </span>
                  <span className="text-xs text-ink-400">{shortDate(att.date)}</span>
                </div>
                {att.reflection && <p className="mt-1 text-xs text-ink-500">{att.reflection}</p>}
                <PhotoStrip ids={att.photoIds} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
