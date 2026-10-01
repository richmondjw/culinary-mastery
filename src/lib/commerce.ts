/** Browser adapter only: the edge service must enforce payment and entitlements. */
export type PaidTier = 'homecook' | 'fullkitchen'
export type CommerceStatus = { ready: boolean; launchOfferActive: boolean }
export const plans = [
  { id: 'homecook' as const, name: 'Home Cook', standard: 79, launch: 59, description: 'Modules 1–12. Build your foundations, then explore proteins, pastry and flavour.' },
  { id: 'fullkitchen' as const, name: 'Full Kitchen', standard: 149, launch: 119, description: 'All 19 modules, plus costing, menu design, prep planning and portfolio tools.' },
]
export function checkoutUrl(value: unknown): string {
  if (typeof value !== 'string') throw new Error('Checkout is unavailable. Please try again later.')
  const url = new URL(value)
  if (url.protocol !== 'https:' || !url.hostname.endsWith('.lemonsqueezy.com') || url.username || url.password || url.port || !url.pathname.startsWith('/checkout/')) {
    throw new Error('Checkout returned an unexpected address. No payment was started.')
  }
  return url.href
}
export function readCommerceStatus(value: unknown): CommerceStatus {
  if (!value || typeof value !== 'object') return { ready: false, launchOfferActive: false }
  const data = value as Record<string, unknown>
  return { ready: data.ready === true, launchOfferActive: data.ready === true && data.launchOfferActive === true }
}
export async function commerceRequest(path: '/api/commerce' | '/api/checkout' | '/api/unlock', body?: unknown) {
  const response = await fetch(path, {
    method: body === undefined ? 'GET' : 'POST', credentials: 'same-origin', cache: 'no-store',
    headers: body === undefined ? { Accept: 'application/json' } : { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body), signal: AbortSignal.timeout(12000),
  })
  if (!response.ok) {
    if (response.status === 429) throw new Error('Too many attempts. Wait a minute, then try again.')
    if (response.status === 400 || response.status === 401 || response.status === 422) throw new Error('That licence could not be activated. Check the key in your purchase email and try again.')
    throw new Error('The purchase service is unavailable. Your progress is still saved on this device.')
  }
  if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('The purchase service is not connected yet.')
  return response.json() as Promise<unknown>
}
