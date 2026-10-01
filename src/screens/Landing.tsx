import { Link } from 'react-router-dom'
import PurchasePanel from '../components/PurchasePanel'
import { track } from '../lib/analytics'

export default function Landing() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8 sm:py-12">
      <nav className="mb-10 flex flex-wrap items-center justify-between gap-4" aria-label="SIZZLE">
        <Link to="/" className="font-display text-3xl text-ink-900">SIZZLE</Link>
        <div className="flex flex-wrap items-center gap-6"><a className="font-bold underline" href="#plans">Courses & pricing</a><Link className="font-bold underline" to="/app/modules">Explore the curriculum</Link></div>
      </nav>
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl leading-none sm:text-7xl">A serious cooking course for cooks who want to get good.</h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink-700">Start with knife skills and seasoning for free. Build all the way to a costed, service-ready menu when you are ready.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="btn-primary" to="/app/modules" onClick={() => track('free_course_started', { source: 'landing' })}>Start free: Modules 1–2</Link>
            <Link className="btn-secondary" to="/tools/food-cost">Try the food-cost tool</Link>
          </div>
          <p className="mt-5 text-sm text-ink-500">No account needed to start. Learn, practise and keep track of what you cook.</p>
        </div>
        <figure className="min-w-0">
          <img className="aspect-[4/5] w-full rounded-2xl border-[3px] border-ink-900 object-cover object-right shadow-card" src={`${import.meta.env.BASE_URL}images/sizzle-editorial-hero.webp`} width="1536" height="1024" alt="Risograph-style illustration of a colourful dinner with pasta, roasted vegetables, lemons and fresh herbs" fetchPriority="high" />
          <figcaption className="mt-3 text-sm text-ink-500">Campaign illustration, not a photograph of a course recipe.</figcaption>
        </figure>
      </section>
      <section className="mt-20 border-y-[3px] border-ink-900 py-10" aria-labelledby="course-title">
        <h2 id="course-title" className="font-display text-3xl sm:text-4xl">From the first chop to the final plate.</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div><h3 className="font-display text-xl">Build your foundations</h3><p className="mt-3 text-ink-700">Learn through lessons, recipes and assessments. Start with the basics, then move through the course at your own pace.</p></div>
          <div><h3 className="font-display text-xl">Make practice visible</h3><p className="mt-3 text-ink-700">Use your cooking journal, notes and photos to record what worked and what you want to try differently next time.</p></div>
          <div><h3 className="font-display text-xl">Think beyond the recipe</h3><p className="mt-3 text-ink-700">Full Kitchen connects cooking with food costing, menu design and prep planning, all in one learning workspace.</p></div>
        </div>
      </section>
      <PurchasePanel />
      <section className="mt-16 border-t-2 border-ink-900 pt-8" aria-labelledby="faq-title">
        <h2 id="faq-title" className="font-display text-3xl">Before you start</h2>
        <details className="mt-6 border-b border-ink-300 py-4"><summary className="cursor-pointer font-bold">Where does my progress live?</summary><p className="mt-3 max-w-2xl">In this browser, on this device. Export a backup from Settings before clearing your browser or moving devices. Course activation and learning-data backup are separate.</p></details>
        <details className="border-b border-ink-300 py-4"><summary className="cursor-pointer font-bold">Is this a professional qualification?</summary><p className="mt-3 max-w-2xl">SIZZLE is a self-directed learning product. It does not claim accredited certification, guaranteed employment or a professional qualification.</p></details>
        <details className="border-b border-ink-300 py-4"><summary className="cursor-pointer font-bold">Can I try it before paying?</summary><p className="mt-3 max-w-2xl">Yes. Modules 1–2 and the standalone food-cost tool are free. Paid enrolment will open once the purchase and activation service is ready.</p></details>
      </section>
      <footer className="mt-12 pb-6 text-sm text-ink-500">SIZZLE · Cook louder. · A cooking course and practice workspace.</footer>
    </main>
  )
}
