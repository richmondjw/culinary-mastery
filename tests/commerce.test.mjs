import test from 'node:test'
import assert from 'node:assert/strict'
import { checkoutUrl, readCommerceStatus, commerceRequest, plans } from '../src/lib/commerce.ts'
test('approved standard and launch prices are preserved', () => {
  assert.deepEqual(plans.map(p => [p.standard, p.launch]), [[79,59],[149,119]])
})
test('only exact boolean readiness enables checkout and discounts', () => {
  for (const input of [null, {}, { ready: 'true' }, { ready: false, launchOfferActive: true }]) {
    assert.deepEqual(readCommerceStatus(input), { ready: false, launchOfferActive: false })
  }
  assert.deepEqual(readCommerceStatus({ready:true,launchOfferActive:true}), {ready:true,launchOfferActive:true})
})
test('checkout accepts provider checkout but rejects arbitrary redirects', () => {
  assert.equal(checkoutUrl('https://sizzle.lemonsqueezy.com/checkout/buy/abc'), 'https://sizzle.lemonsqueezy.com/checkout/buy/abc')
  for (const url of ['javascript:alert(1)', 'https://lemonsqueezy.com.evil.test/checkout/a', 'https://evil.test/checkout/a', 'http://sizzle.lemonsqueezy.com/checkout/a', 'https://u:p@sizzle.lemonsqueezy.com/checkout/a', 'https://sizzle.lemonsqueezy.com:8443/checkout/a', 'https://sizzle.lemonsqueezy.com/account', null]) assert.throws(() => checkoutUrl(url))
})
test('HTML fallback is not purchase-service readiness', async () => {
  const original = globalThis.fetch
  try { globalThis.fetch = async () => new Response('<html>app shell</html>', {headers:{'content-type':'text/html'}})
    await assert.rejects(commerceRequest('/api/commerce'), /not connected/)
  } finally { globalThis.fetch = original }
})
test('rate limiting is recoverable and does not expose provider details', async () => {
  const original = globalThis.fetch
  try { globalThis.fetch = async () => new Response('private upstream details', {status:429})
    await assert.rejects(commerceRequest('/api/unlock',{license_key:'test'}), /Wait a minute/)
  } finally { globalThis.fetch = original }
})
test('requests send credentials same-origin and never cache licence responses', async () => {
  const original = globalThis.fetch
  try { globalThis.fetch = async (path, init) => {
    assert.equal(path,'/api/unlock'); assert.equal(init.credentials,'same-origin'); assert.equal(init.cache,'no-store'); assert.equal(init.method,'POST')
    return Response.json({tier:'homecook'})
  }; assert.deepEqual(await commerceRequest('/api/unlock',{license_key:'test'}),{tier:'homecook'})
  } finally { globalThis.fetch = original }
})
