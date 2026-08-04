import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-copper-700">SIZZLE · Cook louder</p>
      <h1 className="mt-4 font-display text-5xl font-bold leading-none sm:text-7xl">A serious cooking course for cooks who want to get good.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">Start with knife skills and seasoning for free. Build all the way to a costed, service-ready menu when you are ready.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="btn-primary" to="/app/modules">Start free: Modules 1–2</Link>
        <Link className="btn-secondary" to="/tools/food-cost">Try the free food-cost tool</Link>
      </div>
    </main>
  )
}
