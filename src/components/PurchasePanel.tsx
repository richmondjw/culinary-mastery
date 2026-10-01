import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { checkoutUrl, commerceRequest, plans, readCommerceStatus, type PaidTier } from '../lib/commerce'
import { track } from '../lib/analytics'

export default function PurchasePanel() {
  const [status, setStatus] = useState({ ready: false, launchOfferActive: false })
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState<PaidTier | 'activate' | null>(null)
  const [error, setError] = useState('')
  const [key, setKey] = useState('')
  const [activated, setActivated] = useState(false)
  useEffect(() => {
    let active = true
    commerceRequest('/api/commerce').then(data => { if (active) setStatus(readCommerceStatus(data)) })
      .catch(() => { /* Offline / unconfigured: do not offer a purchase. */ })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])
  async function purchase(tier: PaidTier) {
    setBusy(tier); setError('')
    try {
      const response = await commerceRequest('/api/checkout', { tier }) as { url?: unknown }
      const url = checkoutUrl(response.url)
      track('checkout_started', { tier })
      window.location.assign(url)
    } catch (e) { setError(e instanceof Error ? e.message : 'Checkout could not open. Please try again.') }
    finally { setBusy(null) }
  }
  async function activate(event: React.FormEvent) {
    event.preventDefault(); setBusy('activate'); setError('')
    try {
      await commerceRequest('/api/unlock', { license_key: key.trim() })
      // A successful POST alone is not proof: require a same-origin session read.
      const response = await fetch('/api/session', { credentials: 'same-origin', cache: 'no-store', signal: AbortSignal.timeout(12000) })
      if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Activation was not confirmed. Please try again.')
      const session = await response.json()
      if (session.tier !== 'homecook' && session.tier !== 'fullkitchen') throw new Error('Paid access was not confirmed. Please try again.')
      setKey(''); setActivated(true)
    } catch (e) { setError(e instanceof Error ? e.message : 'Activation failed. Please try again.') }
    finally { setBusy(null) }
  }
  return <section id="plans" className="mt-20 scroll-mt-8" aria-labelledby="plans-title">
    <h2 id="plans-title" className="font-display text-3xl sm:text-4xl">Start free. Choose your next course.</h2>
    <p className="mt-4 max-w-2xl text-ink-700">Modules 1–2 are free, with no account required. Paid courses are one-time purchases in Australian dollars.</p>
    <p className="mt-3 text-sm text-ink-500" role="status">{loading ? 'Checking purchase availability…' : status.ready ? 'Secure checkout provided by Lemon Squeezy.' : 'Paid enrolment is not open yet. You can explore the free lessons now.'}</p>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {plans.map(plan => <article className="card p-6 sm:p-8" key={plan.id}>
        <h3 className="font-display text-2xl">{plan.name}</h3>
        <p className="my-4 font-display text-4xl">A${status.launchOfferActive ? plan.launch : plan.standard}<span className="ml-2 font-sans text-base font-normal">one time</span></p>
        {status.launchOfferActive && <p className="mb-3 text-sm">Launch price. Standard price A${plan.standard}.</p>}
        <p className="mb-6 text-ink-700">{plan.description}</p>
        <button type="button" className="btn-primary w-full" disabled={!status.ready || busy !== null} onClick={() => purchase(plan.id)}>{busy === plan.id ? 'Opening checkout…' : status.ready ? `Choose ${plan.name}` : 'Enrolment opens soon'}</button>
      </article>)}
    </div>
    <details className="mt-8 border-y-2 border-ink-900 py-5">
      <summary className="cursor-pointer font-bold">Already purchased? Activate this device</summary>
      <p className="mt-4 max-w-2xl text-sm text-ink-700">Use the licence key from your purchase email. Activation restores course access, not your journal or progress. Keep a backup in Settings to move your learning data between devices.</p>
      {activated ? <p className="mt-4" role="status">Purchase verified. <a className="underline" href="/#/app/modules">Open your course</a></p> : <form className="mt-5 max-w-xl" onSubmit={activate}>
        <label className="label" htmlFor="licence-key">Licence key</label>
        <input id="licence-key" className="input" type="password" value={key} onChange={e => setKey(e.target.value)} required maxLength={200} autoComplete="off" spellCheck={false} disabled={!status.ready || busy !== null} />
        <button type="submit" className="btn-secondary mt-4" disabled={!status.ready || busy !== null || !key.trim()}>{busy === 'activate' ? 'Verifying purchase…' : 'Activate this device'}</button>
      </form>}
    </details>
    {error && <p className="mt-4 rounded-xl border-2 border-wine-600 p-4" role="alert">{error}</p>}
    <p className="mt-6 text-sm text-ink-500">Your progress, notes and photos stay in this browser. <Link className="underline" to="/app/settings">Export a backup</Link> regularly. No automatic cross-device sync is promised.</p>
  </section>
}
