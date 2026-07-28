import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { NotebookPen, Trash2 } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { EmptyState, Field, Pill } from '../components/ui'
import { PhotoStrip, PhotoUploader } from '../components/photos'
import { lessonById, recipeById, recipes } from '../data'
import { shortDate, todayIso } from '../lib/format'
import { uid } from '../lib/id'
import { deletePhoto } from '../lib/photos'
import { useUserStore } from '../store/useUserStore'
import type { NoteLink } from '../types/state'

export default function Notes() {
  const [params] = useSearchParams()
  const data = useUserStore()
  const addNote = useUserStore((s) => s.addNote)
  const deleteNote = useUserStore((s) => s.deleteNote)
  const updateNote = useUserStore((s) => s.updateNote)
  const deletePhotoMeta = useUserStore((s) => s.deletePhotoMeta)

  const presetRecipe = params.get('recipe') ?? ''
  const [linkType, setLinkType] = useState<NoteLink>(presetRecipe ? 'recipe' : 'free')
  const [linkId, setLinkId] = useState(presetRecipe)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [photoIds, setPhotoIds] = useState<string[]>([])

  function save() {
    if (!text.trim() && photoIds.length === 0) return
    addNote({
      id: uid('note'),
      linkType,
      linkId: linkType === 'free' ? undefined : linkId || undefined,
      title: title.trim() || (linkType === 'recipe' ? recipeById.get(linkId)?.title ?? 'Untitled' : 'Kitchen note'),
      text: text.trim(),
      photoIds,
      date: todayIso(),
    })
    setTitle('')
    setText('')
    setPhotoIds([])
  }

  function linkLabel(n: { linkType: NoteLink; linkId?: string }) {
    if (n.linkType === 'recipe' && n.linkId) {
      const r = recipeById.get(n.linkId)
      return r ? (
        <Link to={`/recipes/${n.linkId}`}>
          <Pill tone="neutral">recipe: {r.title}</Pill>
        </Link>
      ) : null
    }
    if (n.linkType === 'lesson' && n.linkId) {
      const found = lessonById(n.linkId)
      return found ? (
        <Link to={`/modules/${found.module.id}/lessons/${n.linkId}`}>
          <Pill tone="pass">lesson: {found.lesson.title}</Pill>
        </Link>
      ) : null
    }
    return <Pill tone="neutral">journal</Pill>
  }

  return (
    <div>
      <PageHeader
        title="Journal"
        subtitle="Notes and photos from every cook. What you notice is what you learn — write it down while the pan is still warm."
      />

      <section className="card mb-6 p-5">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <Field label="Attach to">
            <select
              className="input"
              value={linkType}
              onChange={(e) => {
                setLinkType(e.target.value as NoteLink)
                setLinkId('')
              }}
            >
              <option value="free">Nothing — free note</option>
              <option value="recipe">A recipe</option>
            </select>
          </Field>
          {linkType === 'recipe' && (
            <Field label="Recipe" className="md:col-span-2">
              <select className="input" value={linkId} onChange={(e) => setLinkId(e.target.value)}>
                <option value="">Choose a recipe…</option>
                {recipes.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title}
                  </option>
                ))}
              </select>
            </Field>
          )}
        </div>
        <Field label="Title (optional)" className="mt-3">
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Second attempt at beurre blanc" />
        </Field>
        <Field label="Note" className="mt-3">
          <textarea
            className="input min-h-24"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What worked, what didn't, what you'd change next time…"
          />
        </Field>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <PhotoUploader onAdded={(pid) => setPhotoIds((p) => [...p, pid])} />
            <PhotoStrip ids={photoIds} onRemove={(pid) => setPhotoIds((p) => p.filter((x) => x !== pid))} />
          </div>
          <button type="button" className="btn-primary" onClick={save}>
            Save note
          </button>
        </div>
      </section>

      {data.notes.length === 0 ? (
        <EmptyState icon={<NotebookPen size={22} />} title="No notes yet">
          Your first note could be tonight&rsquo;s dinner.
        </EmptyState>
      ) : (
        <div className="space-y-4">
          {data.notes.map((n) => (
            <article key={n.id} className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base font-semibold">{n.title}</h3>
                    {linkLabel(n)}
                  </div>
                  <div className="text-sm text-ink-500">{shortDate(n.date)}</div>
                </div>
                <button
                  type="button"
                  className="btn-ghost h-11 w-11 !p-0 text-ink-500 hover:text-wine-600"
                  title="Delete note"
                  onClick={async () => {
                    for (const pid of n.photoIds) {
                      await deletePhoto(pid)
                      deletePhotoMeta(pid)
                    }
                    deleteNote(n.id)
                  }}
                >
                  <Trash2 size={15} />
                </button>
              </div>
              {n.text && <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink-700">{n.text}</p>}
              <PhotoStrip
                ids={n.photoIds}
                onRemove={(pid) =>
                  updateNote(n.id, { photoIds: n.photoIds.filter((x) => x !== pid) })
                }
              />
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
