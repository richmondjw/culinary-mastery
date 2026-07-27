import type { ReactNode } from 'react'
import { Flame } from 'lucide-react'

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
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e8e2cd" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={clamped >= 100 ? '#2fa044' : '#e60012'}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (clamped / 100) * c}
          className="transition-[stroke-dashoffset] duration-500"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-semibold" style={{ fontSize: size / 4.2 }}>
          {Math.round(clamped)}%
        </span>
        {label && <span className="text-2xs text-ink-500">{label}</span>}
      </div>
    </div>
  )
}

export function DifficultyDots({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" title={`Difficulty ${level}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Flame key={i} size={12} className={i <= level ? 'text-copper-600 fill-star-400' : 'text-ink-300'} />
      ))}
    </span>
  )
}

export function Pill({ tone, children }: { tone: 'copper' | 'sage' | 'wine' | 'neutral' | 'gold'; children: ReactNode }) {
  const tones: Record<string, string> = {
    copper: 'bg-copper-50 text-copper-700',
    sage: 'bg-sage-100 text-sage-700',
    wine: 'bg-copper-50 text-wine-600',
    neutral: 'bg-parchment-100 text-ink-500',
    gold: 'bg-star-400/25 text-ink-900',
  }
  return <span className={`pill ${tones[tone]}`}>{children}</span>
}

export function EmptyState({ icon, title, children }: { icon: ReactNode; title: string; children?: ReactNode }) {
  return (
    <div className="card p-10 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-copper-50 text-copper-600">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      {children && <div className="mt-1 text-sm text-ink-500">{children}</div>}
    </div>
  )
}

export function StatCard({ label, value, sub, icon }: { label: string; value: string; sub?: string; icon?: ReactNode }) {
  return (
    <div className="card flex items-center gap-4 p-4">
      {icon && <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copper-50 text-copper-600">{icon}</div>}
      <div className="min-w-0">
        <div className="text-2xs font-semibold uppercase tracking-wider text-ink-500">{label}</div>
        <div className="truncate font-display text-xl font-semibold">{value}</div>
        {sub && <div className="text-2xs text-ink-400">{sub}</div>}
      </div>
    </div>
  )
}

export function SectionTitle({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-4">
      <h2 className="font-display text-xl font-semibold text-ink-900">{children}</h2>
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
