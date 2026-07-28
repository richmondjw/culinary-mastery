import { Link } from 'react-router-dom'
import { ArrowRight, Check, Crown, Lock } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { Field, Pill, ProgressRing, SectionTitle } from '../components/ui'
import { capstoneSteps } from '../data/capstone'
import { moduleById } from '../data'
import { moduleUnlocked } from '../lib/progress'
import { money } from '../lib/format'
import { useUserStore } from '../store/useUserStore'
import type { CapstoneStepStatus } from '../types/state'

// SIZZLE: colour is never the only signal — each status carries its own glyph via Pill.
const STATUS_META: Record<CapstoneStepStatus, { label: string; tone: 'neutral' | 'streak' | 'pass' }> = {
  todo: { label: 'To do', tone: 'neutral' },
  'in-progress': { label: 'In progress', tone: 'streak' },
  done: { label: 'Done', tone: 'pass' },
}

export default function Capstone() {
  const data = useUserStore()
  const setStep = useUserStore((s) => s.setCapstoneStep)
  const setNote = useUserStore((s) => s.setCapstoneNote)
  const setCapstone = useUserStore((s) => s.setCapstone)

  const m19 = moduleById.get('m19')
  const unlocked = m19 ? moduleUnlocked(data, m19) : false
  const doneCount = capstoneSteps.filter((s) => data.capstone.steps[s.id] === 'done').length
  const pct = Math.round((doneCount / capstoneSteps.length) * 100)
  const review = data.capstone.review

  return (
    <div>
      <PageHeader
        title="Capstone: the profitable menu"
        subtitle="Design, cost and execute a complete three-course menu — then review it like an operator. Nine deliverables, one real service."
        right={<ProgressRing pct={pct} size={72} stroke={7} />}
      />

      {!unlocked && (
        <div className="mb-6 flex items-center gap-3 rounded-2xl bg-parchment-100 p-4 text-sm text-ink-500">
          <Lock size={18} className="shrink-0 text-ink-500" />
          <p>
            The capstone unlocks when Module 14 (Plating) and Module 18 (Costing) are complete. You can read ahead and
            sketch ideas, but the deliverables are designed to draw on every module before them.{' '}
            {m19 && (
              <Link to="/modules/m19" className="font-semibold text-copper-700">
                See the capstone module →
              </Link>
            )}
          </p>
        </div>
      )}

      <div className="space-y-4">
        {capstoneSteps.map((step) => {
          const status = data.capstone.steps[step.id] ?? 'todo'
          const meta = STATUS_META[status]
          return (
            <section key={step.id} className={`card p-5 ${status === 'done' ? 'border-sage-500/40' : ''}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                      status === 'done' ? 'bg-sage-100 text-sage-700' : 'bg-copper-50 text-copper-700'
                    }`}
                  >
                    {status === 'done' ? <Check size={16} /> : step.number}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-ink-500">{step.summary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Pill tone={meta.tone}>{meta.label}</Pill>
                  <select
                    className="input !w-32 !py-1 text-sm"
                    value={status}
                    onChange={(e) => setStep(step.id, e.target.value as CapstoneStepStatus)}
                  >
                    <option value="todo">To do</option>
                    <option value="in-progress">In progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>

              <div className="mt-3 rounded-xl bg-parchment-50 p-3 text-sm text-ink-700">
                <strong>Deliverable:</strong> {step.deliverable}
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-500">
                {step.guidance.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {step.toolRoute && (
                  <Link to={step.toolRoute} className="btn-secondary !py-1.5 text-sm">
                    Open tool <ArrowRight size={13} />
                  </Link>
                )}
                <input
                  className="input flex-1"
                  placeholder="Working notes for this deliverable…"
                  value={data.capstone.stepNotes[step.id] ?? ''}
                  onChange={(e) => setNote(step.id, e.target.value)}
                />
              </div>
            </section>
          )
        })}
      </div>

      <SectionTitle>
        <span className="mt-8 inline-flex items-center gap-2">
          <Crown size={18} className="text-copper-700" /> Post-service review
        </span>
      </SectionTitle>
      <section className="card grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
        <Field label="Planned total food cost (AUD)">
          <input
            type="number"
            min={0}
            step={0.5}
            className="input"
            value={review.plannedCost ?? ''}
            placeholder="from your costing sheets"
            onChange={(e) => setCapstone({ review: { ...review, plannedCost: e.target.value === '' ? null : Number(e.target.value) } })}
          />
        </Field>
        <Field label="Actual total food cost (AUD, from receipts)">
          <input
            type="number"
            min={0}
            step={0.5}
            className="input"
            value={review.actualCost ?? ''}
            placeholder="what you really spent"
            onChange={(e) => setCapstone({ review: { ...review, actualCost: e.target.value === '' ? null : Number(e.target.value) } })}
          />
        </Field>
        {review.plannedCost != null && review.actualCost != null && (
          <div className="md:col-span-2 rounded-xl bg-parchment-50 p-3 text-sm">
            Variance:{' '}
            <strong className={review.actualCost > review.plannedCost ? 'text-wine-600' : 'text-sage-700'}>
              {money(review.actualCost - review.plannedCost)}
            </strong>{' '}
            ({review.plannedCost > 0 ? `${(((review.actualCost - review.plannedCost) / review.plannedCost) * 100).toFixed(1)}%` : '—'}) against
            plan.
          </div>
        )}
        <Field label="Timing — what fired late, and which prep decision caused it" className="md:col-span-2">
          <textarea
            className="input min-h-20"
            value={review.timingNotes}
            onChange={(e) => setCapstone({ review: { ...review, timingNotes: e.target.value } })}
          />
        </Field>
        <Field label="Waste log — grams binned, and why" className="md:col-span-2">
          <textarea
            className="input min-h-20"
            value={review.wasteLog}
            placeholder="e.g. 180 g fish trim (used for rillettes), 60 g herbs (over-picked — buy less)…"
            onChange={(e) => setCapstone({ review: { ...review, wasteLog: e.target.value } })}
          />
        </Field>
        <Field label="Guest feedback">
          <textarea
            className="input min-h-20"
            value={review.guestFeedback}
            onChange={(e) => setCapstone({ review: { ...review, guestFeedback: e.target.value } })}
          />
        </Field>
        <Field label="Three lessons for the next service">
          <textarea
            className="input min-h-20"
            value={review.lessons}
            onChange={(e) => setCapstone({ review: { ...review, lessons: e.target.value } })}
          />
        </Field>
      </section>

      {doneCount === capstoneSteps.length && (
        <div className="mt-6 rounded-2xl bg-sage-100 p-5 text-center">
          <Crown className="mx-auto mb-2 text-sage-700" size={28} />
          <div className="font-display text-xl font-semibold text-sage-700">Capstone complete. That was a real service.</div>
          <p className="mt-1 text-sm text-sage-700/80">
            Your menu, costings, photos and review are assembled in the{' '}
            <Link to="/portfolio" className="font-semibold underline">
              portfolio
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  )
}
