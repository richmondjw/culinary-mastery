import { useState } from 'react'
import { AlertCircle, ExternalLink, Play } from 'lucide-react'
import type { VideoRef } from '../data/videos'

/**
 * Click-to-load YouTube embed.
 *
 * Deliberately does NOT auto-load the iframe: the thumbnail is a plain image until
 * the user asks for the video. That keeps lesson pages fast, avoids loading YouTube
 * on every page view, and means a dead video costs nothing until clicked.
 *
 * Uses youtube-nocookie.com (no tracking cookies until playback) and shows the
 * channel as visible attribution. Embed only — nothing is downloaded or re-hosted.
 */

function embedUrl(v: VideoRef): string {
  const params = new URLSearchParams({ autoplay: '1', rel: '0', modestbranding: '1' })
  if (v.startSec) params.set('start', String(v.startSec))
  return `https://www.youtube-nocookie.com/embed/${v.youtubeId}?${params}`
}

function watchUrl(v: VideoRef): string {
  return `https://www.youtube.com/watch?v=${v.youtubeId}${v.startSec ? `&t=${v.startSec}` : ''}`
}

export function VideoEmbed({ video, compact = false }: { video: VideoRef; compact?: boolean }) {
  const [playing, setPlaying] = useState(false)
  const [thumbFailed, setThumbFailed] = useState(false)

  return (
    <figure className="overflow-hidden rounded-2xl border-[3px] border-ink-900 shadow-press">
      <div className="relative aspect-video bg-ink-900">
        {playing ? (
          <iframe
            src={embedUrl(video)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`Play: ${video.title}`}
          >
            {!thumbFailed && (
              <img
                src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt=""
                onError={() => setThumbFailed(true)}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
            )}
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-ink-900 bg-copper-600 text-ink-900 shadow-press transition-transform group-hover:scale-110">
              <Play size={26} className="ml-0.5 fill-current" />
            </span>
          </button>
        )}
      </div>

      <figcaption className={`bg-surface ${compact ? 'p-2' : 'p-3'}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className={`font-semibold ${compact ? 'text-sm' : 'text-base'} leading-snug`}>{video.title}</div>
            <div className="text-sm text-ink-500">
              {video.channel ? `${video.channel} · ` : ''}
              {video.whatItShows}
            </div>
          </div>
          <a
            href={watchUrl(video)}
            target="_blank"
            rel="noopener noreferrer"
            className="-m-2 flex h-11 w-11 shrink-0 items-center justify-center text-ink-500 hover:text-copper-700"
            title="Open on YouTube"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        {video.status === 'candidate' && (
          <div className="mt-2 flex items-start gap-1.5 rounded-lg border-2 border-ink-900 bg-star-400 px-2 py-1.5 text-sm text-ink-900">
            <AlertCircle size={12} className="mt-px shrink-0" />
            <span>
              Unwatched suggestion — check it teaches our method before trusting it.
              {video.notes ? ` ${video.notes}` : ''}
            </span>
          </div>
        )}
        {video.status === 'verified' && video.notes && (
          <div className="mt-1.5 text-sm text-ink-500">{video.notes}</div>
        )}
      </figcaption>
    </figure>
  )
}

/** Renders the preferred clip, with the rest available as alternates. */
export function VideoPanel({ videos, compact = false }: { videos: VideoRef[]; compact?: boolean }) {
  const [index, setIndex] = useState(0)
  if (videos.length === 0) return null
  const current = videos[index]
  if (!current) return null

  return (
    <div>
      <VideoEmbed video={current} compact={compact} />
      {videos.length > 1 && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-2xs font-mono font-medium uppercase tracking-[0.14em] text-ink-500">Alternates</span>
          {videos.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              aria-label={`Show alternate clip ${i + 1}`}
              className={`flex h-11 w-11 items-center justify-center rounded-full border-[3px] font-mono text-sm font-bold transition-colors ${
                i === index
                  ? 'border-ink-900 bg-star-400 text-ink-900 shadow-press'
                  : 'border-ink-300 text-ink-500 hover:border-ink-900 hover:text-copper-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
