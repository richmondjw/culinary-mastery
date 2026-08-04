export type EntitlementTier = 'free' | 'homecook' | 'fullkitchen'

/**
 * Launch-safe access policy.  The gate is deliberately off unless explicitly
 * enabled at build time; the eventual Worker-issued signed cookie is the
 * authority, not this browser-side rollout stub.
 */
export const paywallEnabled = import.meta.env.VITE_SIZZLE_PAYWALL_ENABLED === 'true'

function configuredTier(): EntitlementTier {
  const tier = import.meta.env.VITE_SIZZLE_ENTITLEMENT
  return tier === 'homecook' || tier === 'fullkitchen' ? tier : 'free'
}

export function currentEntitlement(): EntitlementTier {
  return paywallEnabled ? configuredTier() : 'fullkitchen'
}

export function canAccessModule(moduleNumber: number, tier = currentEntitlement()) {
  if (moduleNumber <= 2) return true
  if (moduleNumber <= 12) return tier === 'homecook' || tier === 'fullkitchen'
  return tier === 'fullkitchen'
}

export function canAccessFullKitchenTools(tier = currentEntitlement()) {
  return tier === 'fullkitchen'
}
