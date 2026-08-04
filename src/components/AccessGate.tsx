import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LockKeyhole } from 'lucide-react'
import { canAccessFullKitchenTools, canAccessModule, currentEntitlement, paywallEnabled, type EntitlementTier } from '../lib/access'
import { track } from '../lib/analytics'

function UpgradePanel({ required }: { required: Exclude<EntitlementTier, 'free'> }) {
  const heading = required === 'homecook' ? 'Continue with Home Cook' : 'Unlock Full Kitchen'
  const detail = required === 'homecook'
    ? 'Modules 3–12 are part of the Home Cook course.'
    : 'This advanced module or tool is part of Full Kitchen.'

  useEffect(() => track('gated_content_denied', { required_tier: required }), [required])

  return (
    <main className="mx-auto max-w-xl px-6 py-20 text-center">
      <LockKeyhole className="mx-auto mb-4 text-copper-700" size={36} />
      <h1 className="font-display text-3xl font-bold">{heading}</h1>
      <p className="mt-3 text-ink-500">{detail} Modules 1–2 and the food-cost tool remain free.</p>
      <p className="mt-3 text-sm text-ink-500">Purchasing is not enabled yet. Your entitlement will be verified by the edge service when checkout launches.</p>
      <Link className="btn-primary mt-6 inline-flex" to="/app/modules">Back to the curriculum</Link>
    </main>
  )
}

export function ModuleAccessGate({ moduleNumber, children }: { moduleNumber: number; children: React.ReactNode }) {
  if (!paywallEnabled || canAccessModule(moduleNumber)) return <>{children}</>
  return <UpgradePanel required={moduleNumber <= 12 ? 'homecook' : 'fullkitchen'} />
}

export function FullKitchenAccessGate({ children }: { children: React.ReactNode }) {
  if (!paywallEnabled || canAccessFullKitchenTools()) return <>{children}</>
  return <UpgradePanel required="fullkitchen" />
}

/** Exposed for status/debug surfaces without making a purchase claim. */
export function entitlementLabel() {
  return currentEntitlement()
}
