const aud = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' })

export function money(n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return '—'
  return aud.format(n)
}

export function pct(n: number | null | undefined, dp = 1): string {
  if (n == null || Number.isNaN(n)) return '—'
  return `${n.toFixed(dp)}%`
}

export function hours(h: number): string {
  return h === 1 ? '1 hr' : `${h} hrs`
}

export function mins(m: number): string {
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60)
  const r = m % 60
  return r === 0 ? `${h} hr` : `${h} hr ${r} min`
}

export function shortDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function todayIso(): string {
  return new Date().toISOString()
}

/** Scale a recipe quantity, keeping sane precision. */
export function scaleQty(qty: number, factor: number): string {
  const v = qty * factor
  if (v >= 100) return String(Math.round(v))
  if (v >= 10) return String(Math.round(v * 10) / 10)
  return String(Math.round(v * 100) / 100)
}
