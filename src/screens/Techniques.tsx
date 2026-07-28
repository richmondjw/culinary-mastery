import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Video } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { Pill } from '../components/ui'
import { recipes, techniques } from '../data'
import { videosFor } from '../data/videos'
import { VideoPanel } from '../components/VideoEmbed'

export default function Techniques() {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')
  const [videoOnly, setVideoOnly] = useState(false)
  const [openVideo, setOpenVideo] = useState<string | null>(null)
  const categories = useMemo(() => [...new Set(techniques.map((t) => t.category))], [])

  const filtered = techniques.filter((t) => {
    if (category && t.category !== category) return false
    if (videoOnly && videosFor(t.id).length === 0) return false
    const ql = q.toLowerCase()
    if (ql && !t.name.toLowerCase().includes(ql) && !t.summary.toLowerCase().includes(ql)) return false
    return true
  })

  const withVideo = techniques.filter((t) => videosFor(t.id).length > 0).length

  return (
    <div>
      <PageHeader
        title="Technique library"
        subtitle={`${techniques.length} core techniques, cross-linked from every lesson and recipe. Repetition across modules is the design, not an accident.`}
      />

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative w-full sm:w-64">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
          <input className="input pl-9" placeholder="Search techniques…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <select className="input w-full sm:w-56" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setVideoOnly((v) => !v)}
          className={videoOnly ? 'btn-primary' : 'btn-secondary'}
          title="Show only techniques that have a video"
        >
          <Video size={15} /> With video ({withVideo})
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((t) => {
          const usedIn = recipes.filter((r) => r.techniqueIds.includes(t.id))
          const clips = videosFor(t.id)
          const isOpen = openVideo === t.id
          return (
            <div key={t.id} id={t.id} className="card scroll-mt-6 p-5">
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3 className="font-display text-base font-semibold">{t.name}</h3>
                <Pill tone="neutral">{t.category}</Pill>
              </div>
              <p className="text-sm text-ink-500">{t.summary}</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-ink-700">
                {t.keyPoints.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>

              {clips.length > 0 && (
                <div className="mt-3">
                  {isOpen ? (
                    <>
                      <VideoPanel videos={clips} compact />
                      <button type="button" className="btn-ghost mt-1 !text-2xs" onClick={() => setOpenVideo(null)}>
                        Hide video
                      </button>
                    </>
                  ) : (
                    <button type="button" className="btn-secondary !py-1.5 text-xs" onClick={() => setOpenVideo(t.id)}>
                      <Video size={14} /> Watch{clips.length > 1 ? ` (${clips.length})` : ''}
                    </button>
                  )}
                </div>
              )}
              {usedIn.length > 0 && (
                <div className="mt-3 border-t border-parchment-100 pt-2">
                  <div className="mb-1 text-2xs font-semibold uppercase tracking-wider text-ink-400">Practised in</div>
                  <div className="flex flex-wrap gap-1.5">
                    {usedIn.slice(0, 4).map((r) => (
                      <Link key={r.id} to={`/recipes/${r.id}`}>
                        <Pill tone="copper">{r.title}</Pill>
                      </Link>
                    ))}
                    {usedIn.length > 4 && <Pill tone="neutral">+{usedIn.length - 4} more</Pill>}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
