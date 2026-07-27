import { get, set, del, entries } from 'idb-keyval'

const PREFIX = 'cm-photo:'

/** Downscale to max 1400px on the long edge and store as JPEG data URL in IndexedDB. */
export async function storePhoto(id: string, file: File): Promise<void> {
  const dataUrl = await downscale(file, 1400, 0.85)
  await set(PREFIX + id, dataUrl)
}

export async function loadPhoto(id: string): Promise<string | undefined> {
  return get<string>(PREFIX + id)
}

export async function deletePhoto(id: string): Promise<void> {
  await del(PREFIX + id)
}

export async function allPhotos(): Promise<Record<string, string>> {
  const all = await entries<string, string>()
  const out: Record<string, string> = {}
  for (const [k, v] of all) {
    if (typeof k === 'string' && k.startsWith(PREFIX)) out[k.slice(PREFIX.length)] = v
  }
  return out
}

export async function importPhotos(photos: Record<string, string>): Promise<void> {
  await Promise.all(Object.entries(photos).map(([id, dataUrl]) => set(PREFIX + id, dataUrl)))
}

function downscale(file: File, maxEdge: number, quality: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      const scale = Math.min(1, maxEdge / Math.max(img.width, img.height))
      const w = Math.round(img.width * scale)
      const h = Math.round(img.height * scale)
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (!ctx) return reject(new Error('canvas unavailable'))
      ctx.drawImage(img, 0, 0, w, h)
      resolve(canvas.toDataURL('image/jpeg', quality))
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('could not read image'))
    }
    img.src = url
  })
}
