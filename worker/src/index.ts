/**
 * Pre-capture safety stub.
 *
 * Replace this file verbatim with the exported live Worker before the first
 * `wrangler deploy`. It deliberately does not proxy traffic or validate a
 * licence, so deploying it before capture would interrupt the current site.
 */
export interface Env {
  // Enable after the live Worker capture and instrumentation review.
  // CONVERSIONS: AnalyticsEngineDataset
}

export default {
  async fetch(): Promise<Response> {
    return new Response('SIZZLE Worker source has not been captured from production.', {
      status: 503,
      headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
    })
  },
} satisfies ExportedHandler<Env>
