import { useEffect, useRef, useState } from 'react'
import { Camera, Trash2 } from 'lucide-react'
import { uid } from '../lib/id'
import { deletePhoto, loadPhoto, storePhoto } from '../lib/photos'
import { todayIso } from '../lib/format'
import { useUserStore } from '../store/useUserStore'

export function PhotoImg({ id, className = '' }: { id: string; className?: string }) {
  const [src, setSrc] = useState<string>()
  useEffect(() => {
    let live = true
    loadPhoto(id).then((s) => {
      if (live) setSrc(s)
    })
    return () => {
      live = false
    }
  }, [id])
  if (!src) return <div className={`animate-pulse bg-parchment-100 ${className}`} />
  return <img src={src} alt="" className={`object-cover ${className}`} />
}

export function PhotoUploader({
  linkId,
  onAdded,
  compact = false,
}: {
  linkId?: string
  onAdded?: (photoId: string) => void
  compact?: boolean
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const addPhotoMeta = useUserStore((s) => s.addPhotoMeta)
  const [busy, setBusy] = useState(false)

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    setBusy(true)
    try {
      for (const file of Array.from(files)) {
        const id = uid('ph')
        await storePhoto(id, file)
        addPhotoMeta({ id, caption: '', date: todayIso(), linkId })
        onAdded?.(id)
      }
    } finally {
      setBusy(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={busy}
        className={compact ? 'btn-ghost !px-2' : 'btn-secondary'}
        title="Add photo"
      >
        <Camera size={16} />
        {!compact && (busy ? 'Adding…' : 'Add photo')}
      </button>
    </>
  )
}

export function PhotoStrip({ ids, onRemove }: { ids: string[]; onRemove?: (id: string) => void }) {
  const deletePhotoMeta = useUserStore((s) => s.deletePhotoMeta)
  if (ids.length === 0) return null
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {ids.map((id) => (
        <div key={id} className="group relative">
          <PhotoImg id={id} className="h-24 w-24 rounded-xl" />
          {onRemove && (
            <button
              type="button"
              className="absolute -right-1.5 -top-1.5 hidden rounded-full bg-wine-600 p-1 text-white group-hover:block"
              onClick={async () => {
                await deletePhoto(id)
                deletePhotoMeta(id)
                onRemove(id)
              }}
              title="Delete photo"
            >
              <Trash2 size={12} />
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
