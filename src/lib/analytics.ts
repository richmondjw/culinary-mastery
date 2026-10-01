/**
 * Provider-neutral browser analytics boundary. It sends no network traffic
 * unless VITE_ANALYTICS_MEASUREMENT_ID is set and a host integration registers
 * window.sizzleAnalytics. Keep conversion authority in the Worker.
 */
export type AnalyticsEvent = 'page_view' | 'unlock_attempt' | 'gated_content_denied' | 'checkout_started' | 'free_course_started'
export type AnalyticsProperties = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    sizzleAnalytics?: { track: (event: AnalyticsEvent, properties?: AnalyticsProperties) => void }
  }
}

const measurementId = import.meta.env.VITE_ANALYTICS_MEASUREMENT_ID

export function track(event: AnalyticsEvent, properties?: AnalyticsProperties) {
  if (!measurementId || typeof window === 'undefined') return
  window.sizzleAnalytics?.track(event, { ...properties, measurement_id: measurementId })
}
