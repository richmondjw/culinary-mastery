import { useState } from 'react'
import { CalendarClock, Clock, Plus, Trash2 } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { EmptyState, Field, SectionTitle } from '../components/ui'
import { mins } from '../lib/format'
import { uid } from '../lib/id'
import { useUserStore } from '../store/useUserStore'
import type { PrepDay, PrepPlan, PrepTask, ServiceStep } from '../types/state'

function newPlan(): PrepPlan {
  return {
    id: uid('plan'),
    name: 'New service plan',
    days: [
      { id: uid('day'), label: 'Day before', tasks: [] },
      { id: uid('day'), label: 'Service day', tasks: [] },
    ],
    service: [],
  }
}

export default function Planner() {
  const plans = useUserStore((s) => s.prepPlans)
  const menus = useUserStore((s) => s.menus)
  const upsert = useUserStore((s) => s.upsertPrepPlan)
  const remove = useUserStore((s) => s.deletePrepPlan)
  const [selectedId, setSelectedId] = useState<string | null>(plans[0]?.id ?? null)

  const plan = plans.find((p) => p.id === selectedId) ?? null

  function create() {
    const p = newPlan()
    upsert(p)
    setSelectedId(p.id)
  }

  function patch(p: Partial<PrepPlan>) {
    if (plan) upsert({ ...plan, ...p })
  }

  function patchDay(dayId: string, p: Partial<PrepDay>) {
    if (!plan) return
    patch({ days: plan.days.map((d) => (d.id === dayId ? { ...d, ...p } : d)) })
  }

  function patchTask(dayId: string, taskId: string, p: Partial<PrepTask>) {
    if (!plan) return
    patch({
      days: plan.days.map((d) =>
        d.id === dayId ? { ...d, tasks: d.tasks.map((t) => (t.id === taskId ? { ...t, ...p } : t)) } : d,
      ),
    })
  }

  function patchStep(stepId: string, p: Partial<ServiceStep>) {
    if (!plan) return
    patch({ service: plan.service.map((s) => (s.id === stepId ? { ...s, ...p } : s)) })
  }

  return (
    // SIZZLE quiet mode: dense operational screen — plain surfaces so the
    // timings and stations read before the brand does.
    <div className="quiet">
      <PageHeader
        title="Prep & service planner"
        subtitle="Work backwards from the moment guests sit down. Prep by day and station, then a minute-by-minute service timeline."
        right={
          <button type="button" className="btn-primary" onClick={create}>
            <Plus size={16} /> New plan
          </button>
        }
      />

      {plans.length === 0 ? (
        <EmptyState icon={<CalendarClock size={22} />} title="No plans yet">
          Plan your next dinner party like a service — it&rsquo;s the capstone rehearsal.
        </EmptyState>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="card h-fit overflow-hidden">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedId(p.id)}
                className={`block w-full border-b border-parchment-100 px-4 py-3 text-left text-sm last:border-0 ${
                  p.id === selectedId ? 'bg-copper-50 font-semibold text-copper-800' : 'hover:bg-parchment-50'
                }`}
              >
                <div className="truncate">{p.name}</div>
                <div className="text-sm font-normal text-ink-500">
                  {p.days.reduce((s, d) => s + d.tasks.length, 0)} prep tasks · {p.service.length} service steps
                </div>
              </button>
            ))}
          </aside>

          {plan && (
            <div className="min-w-0 space-y-5">
              <div className="card grid grid-cols-1 gap-3 p-5 sm:grid-cols-3">
                <Field label="Plan name" className="sm:col-span-2">
                  <input className="input" value={plan.name} onChange={(e) => patch({ name: e.target.value })} />
                </Field>
                <Field label="Linked menu">
                  <select className="input" value={plan.menuId ?? ''} onChange={(e) => patch({ menuId: e.target.value || undefined })}>
                    <option value="">—</option>
                    {menus.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <SectionTitle
                right={
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => patch({ days: [...plan.days, { id: uid('day'), label: `Day ${plan.days.length + 1}`, tasks: [] }] })}
                  >
                    <Plus size={14} /> Day
                  </button>
                }
              >
                Prep schedule
              </SectionTitle>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {plan.days.map((day) => {
                  const total = day.tasks.reduce((s, t) => s + t.durationMins, 0)
                  return (
                    <div key={day.id} className="card p-4">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <input
                          className="input !w-40 font-semibold"
                          value={day.label}
                          onChange={(e) => patchDay(day.id, { label: e.target.value })}
                        />
                        <span className="inline-flex items-center gap-1 text-sm text-ink-500">
                          <Clock size={12} /> {mins(total)}
                        </span>
                        <button
                          type="button"
                          className="text-ink-300 hover:text-wine-600"
                          title="Remove day"
                          onClick={() => patch({ days: plan.days.filter((d) => d.id !== day.id) })}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <ul className="space-y-2">
                        {day.tasks.map((t) => (
                          <li key={t.id} className="rounded-xl bg-parchment-50 p-2.5">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={t.done}
                                onChange={() => patchTask(day.id, t.id, { done: !t.done })}
                                className="h-6 w-6 shrink-0 accent-copper-600"
                              />
                              <input
                                className={`input !border-0 !bg-transparent !p-0 text-sm font-medium ${t.done ? 'line-through text-ink-500' : ''}`}
                                value={t.title}
                                placeholder="Task…"
                                onChange={(e) => patchTask(day.id, t.id, { title: e.target.value })}
                              />
                              <button
                                type="button"
                                className="text-ink-300 hover:text-wine-600"
                                onClick={() => patchDay(day.id, { tasks: day.tasks.filter((x) => x.id !== t.id) })}
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                            <div className="mt-1.5 flex flex-wrap items-center gap-2 pl-6">
                              <input
                                className="input input-compact !w-32"
                                value={t.station}
                                placeholder="station"
                                onChange={(e) => patchTask(day.id, t.id, { station: e.target.value })}
                              />
                              <input
                                type="number"
                                min={0}
                                className="input input-compact !w-20"
                                value={t.durationMins}
                                onChange={(e) => patchTask(day.id, t.id, { durationMins: Number(e.target.value) })}
                              />
                              <span className="font-mono text-sm text-ink-500">min</span>
                              <input
                                className="input input-compact w-full min-w-[180px] flex-1"
                                value={t.holdNote ?? ''}
                                placeholder="hold: container, temp, use-by"
                                onChange={(e) => patchTask(day.id, t.id, { holdNote: e.target.value || undefined })}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className="btn-ghost mt-2"
                        onClick={() =>
                          patchDay(day.id, {
                            tasks: [...day.tasks, { id: uid('task'), title: '', station: '', durationMins: 15, done: false }],
                          })
                        }
                      >
                        <Plus size={14} /> Task
                      </button>
                    </div>
                  )
                })}
              </div>

              <SectionTitle
                right={
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() =>
                      patch({ service: [...plan.service, { id: uid('svc'), time: '18:00', action: '', station: '', done: false }] })
                    }
                  >
                    <Plus size={14} /> Step
                  </button>
                }
              >
                Service timeline
              </SectionTitle>
              <div className="card p-4">
                {plan.service.length === 0 ? (
                  <p className="text-sm text-ink-500">
                    No steps yet. Start from guests seated, give every course a fire time and a landing time.
                  </p>
                ) : (
                  <ul className="space-y-1.5">
                    {[...plan.service]
                      .sort((a, b) => a.time.localeCompare(b.time))
                      .map((s) => (
                        <li key={s.id} className="flex flex-wrap items-center gap-2">
                          <input
                            type="checkbox"
                            checked={s.done}
                            onChange={() => patchStep(s.id, { done: !s.done })}
                            className="h-6 w-6 shrink-0 accent-copper-600"
                          />
                          <input
                            type="time"
                            className="input input-compact !w-32"
                            value={s.time}
                            onChange={(e) => patchStep(s.id, { time: e.target.value })}
                          />
                          <input
                            className={`input input-compact w-full min-w-[200px] flex-1 ${s.done ? 'line-through text-ink-500' : ''}`}
                            value={s.action}
                            placeholder="e.g. Fire mains — pan on for fish, plates warming"
                            onChange={(e) => patchStep(s.id, { action: e.target.value })}
                          />
                          <input
                            className="input input-compact !w-32"
                            value={s.station}
                            placeholder="station"
                            onChange={(e) => patchStep(s.id, { station: e.target.value })}
                          />
                          <button
                            type="button"
                            className="text-ink-300 hover:text-wine-600"
                            onClick={() => patch({ service: plan.service.filter((x) => x.id !== s.id) })}
                          >
                            <Trash2 size={14} />
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              <div className="card p-4 text-right">
                <button
                  type="button"
                  className="btn-ghost text-wine-600"
                  onClick={() => {
                    remove(plan.id)
                    setSelectedId(plans.find((p) => p.id !== plan.id)?.id ?? null)
                  }}
                >
                  <Trash2 size={15} /> Delete plan
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
