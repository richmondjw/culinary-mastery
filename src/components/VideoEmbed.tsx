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
    <figure className="overflow-hidden rounded-xl border-2 border-ink-900">
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
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink-900 bg-copper-600 text-white shadow-press transition-transform group-hover:scale-110">
              <Play size={22} className="ml-0.5 fill-current" />
            </span>
          </button>
        )}
      </div>

      <figcaption className={`bg-white ${compact ? 'p-2' : 'p-3'}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className={`font-semibold ${compact ? 'text-xs' : 'text-sm'} leading-snug`}>{video.title}</div>
            <div className="text-2xs text-ink-400">
              {video.channel ? `${video.channel} · ` : ''}
              {video.whatItShows}
            </div>
          </div>
          <a
            href={watchUrl(video)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-ink-400 hover:text-copper-600"
            title="Open on YouTube"
          >
            <ExternalLink size={14} />
          </a>
        </div>

        {video.status === 'candidate' && (
          <div className="mt-1.5 flex items-start gap-1.5 rounded-lg bg-star-400/20 px-2 py-1 text-2xs text-ink-700">
            <AlertCircle size={12} className="mt-px shrink-0" />
            <span>
              Unwatched suggestion — check it teaches our method before trusting it.
              {video.notes ? ` ${video.notes}` : ''}
            </span>
          </div>
        )}
        {video.status === 'verified' && video.notes && (
          <div className="mt-1.5 text-2xs text-ink-500">{video.notes}</div>
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
          <span className="text-2xs font-semibold uppercase tracking-wider text-ink-400">Alternates</span>
          {videos.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full border px-2 py-0.5 text-2xs font-bold transition-colors ${
                i === index
                  ? 'border-ink-900 bg-star-400/40 text-ink-900'
                  : 'border-parchment-200 text-ink-500 hover:border-copper-300 hover:text-copper-700'
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
