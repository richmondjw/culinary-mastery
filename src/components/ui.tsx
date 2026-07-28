import type { ReactNode } from 'react'
import { Flame } from 'lucide-react'

/** SIZZLE progress ring. The percentage always renders inside the ring —
 *  the arc alone never carries the number. At 100% it flips to teal + tick. */
export function ProgressRing({
  pct,
  size = 64,
  stroke = 6,
  className = '',
  label,
}: {
  pct: number
  size?: number
  stroke?: number
  className?: string
  label?: string
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const clamped = Math.min(100, Math.max(0, pct))
  const done = clamped >= 100
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${Math.round(clamped)}% ${label ?? 'complete'}`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E8E2CD" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={done ? '#0F9B8E' : '#FF4B12'}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (clamped / 100) * c}
          className="transition-[stroke-dashoffset] duration-500"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display leading-none" style={{ fontSize: Math.max(14, size / 4.2) }}>
          {done ? '✓' : `${Math.round(clamped)}%`}
        </span>
        {label && size >= 64 && <span className="font-mono text-2xs text-ink-500">{label}</span>}
      </div>
    </div>
  )
}

/** XP / lesson meter. Numerals are mandatory — a bar is never the only signal. */
export function Meter({ pct, caption, right }: { pct: number; caption: string; right?: string }) {
  const clamped = Math.min(100, Math.max(0, pct))
  const done = clamped >= 100
  return (
    <div className="flex flex-col gap-2">
      <div className="meter">
        {done ? (
          <div className="meter-fill-done">✓ COMPLETE</div>
        ) : (
          <div className="meter-fill" style={{ width: `${clamped}%` }} />
        )}
      </div>
      <div className="meter-caption">
        <span>{caption}</span>
        {right && <span className="text-ink-500">{right}</span>}
      </div>
    </div>
  )
}

/** Heat, not stars. Word label first so it never reads as colour alone. */
export function DifficultyDots({ level }: { level: number }) {
  return (
    <span className="pill bg-surface" title={`Heat ${level} of 5`}>
      Heat
      <span className="inline-flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <Flame
            key={i}
            size={14}
            className={i <= level ? 'text-copper-700 fill-copper-600' : 'text-ink-300 opacity-40'}
          />
        ))}
      </span>
      <span className="sr-only">{level} of 5</span>
    </span>
  )
}

/** Every tone pairs its fill with a glyph. Ink text on all accents. */
const pillTone: Record<string, string> = {
  pass: 'pill-pass',
  best: 'pill-best',
  retake: 'pill-retake',
  streak: 'pill-streak',
  locked: 'pill-locked',
  neutral: 'pill-meta',
}
const pillGlyph: Record<string, string> = {
  pass: '✓',
  best: '★',
  retake: '↺',
  streak: '🔥',
  locked: '🔒',
  neutral: '',
}
export function Pill({
  tone = 'neutral',
  children,
}: {
  tone?: 'pass' | 'best' | 'retake' | 'streak' | 'locked' | 'neutral'
  children: ReactNode
}) {
  return (
    <span className={pillTone[tone]}>
      {pillGlyph[tone] && <span aria-hidden="true">{pillGlyph[tone]}</span>}
      {children}
    </span>
  )
}

/** Track identity = colour AND shape. Survives greyscale and colour blindness. */
export function TrackBadge({ track, size = 36 }: { track: 'cook' | 'craft' | 'business'; size?: number }) {
  const cls = { cook: 'track-cook', craft: 'track-craft', business: 'track-business' }[track]
  const glyph = { cook: '🔥', craft: '✎', business: '$' }[track]
  const name = { cook: 'Cook', craft: 'Craft', business: 'Business' }[track]
  return (
    <span className={cls} style={{ height: size, width: size, fontSize: size * 0.47 }} title={`${name} track`}>
      <span aria-hidden="true">{glyph}</span>
      <span className="sr-only">{name} track</span>
    </span>
  )
}

/** Lesson / assessment progress node. */
export function Node({ state, children }: { state: 'done' | 'current' | 'todo' | 'locked'; children?: ReactNode }) {
  if (state === 'done') return <span className="node-done" aria-label="Done">✓</span>
  if (state === 'locked') return <span className="node-todo" aria-label="Locked">🔒</span>
  return <span className={state === 'current' ? 'node-current' : 'node-todo'}>{children}</span>
}

export function EmptyState({ icon, title, children }: { icon: ReactNode; title: string; children?: ReactNode }) {
  return (
    <div className="card-flat flex flex-col items-center gap-2 p-10 text-center">
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[3px] border-ink-900 bg-parchment-50">
        {icon}
      </div>
      <h3 className="font-display text-[19px]">{title}</h3>
      {children && <div className="text-base text-ink-700">{children}</div>}
    </div>
  )
}

export function StatCard({ label, value, sub, icon }: { label: string; value: string; sub?: string; icon?: ReactNode }) {
  return (
    <div className="card flex items-center gap-4 p-5">
      {icon && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[3px] border-ink-900 bg-copper-600 text-ink-900">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <div className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-500">{label}</div>
        <div className="truncate font-display text-2xl">{value}</div>
        {sub && <div className="text-sm text-ink-500">{sub}</div>}
      </div>
    </div>
  )
}

export function SectionTitle({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4 border-b-[3px] border-ink-900 pb-3">
      <h2 className="font-display text-2xl text-ink-900">{children}</h2>
      {right}
    </div>
  )
}

export function Field({ label, children, className = '' }: { label: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="label">{label}</span>
      {children}
    </label>
  )
}

/** Chef says — speech bubble callout. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="bubble">
      <div className="mb-1.5 font-mono text-2xs uppercase tracking-[0.14em]">Chef says</div>
      <div className="text-lg font-bold leading-snug">{children}</div>
    </div>
  )
}

/** One pop, 400ms, no confetti storm. Suppressed under reduced-motion by index.css. */
export function CelebrationToast({ title, body }: { title: string; body: string }) {
  return (
    <div role="status" className="rounded-2xl border-[3px] border-ink-900 bg-ink-900 p-4">
      <div className="animate-sizzle-pop rounded-xl border-[3px] border-parchment-50 bg-wine-500 px-4 py-3 text-ink-900">
        <div className="font-display text-lg">{title}</div>
        <div className="text-base font-semibold">{body}</div>
      </div>
    </div>
  )
}

/** Photo placeholder until real food photography lands. */
export function PhotoSlot({ note, className = 'h-32' }: { note: string; className?: string }) {
  return (
    <div className={`photo-slot ${className}`}>
      <span>{note}</span>
    </div>
  )
}
