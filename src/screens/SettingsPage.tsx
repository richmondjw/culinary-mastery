import { useRef, useState } from 'react'
import { AlertTriangle, Download, Upload } from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { SectionTitle } from '../components/ui'
import { exportBackup, importBackup } from '../lib/exportImport'
import { useUserStore } from '../store/useUserStore'

export default function SettingsPage() {
  const resetAll = useUserStore((s) => s.resetAll)
  const fileRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="Settings" subtitle="Your data lives in this browser. Back it up, restore it, or start over." />

      <section className="card mb-6 p-6">
        <SectionTitle>Backup & restore</SectionTitle>
        <p className="mb-4 text-sm text-ink-500">
          Everything — progress, assessments, notes, photos, costing sheets, menus and plans — exports to a single JSON
          file. Keep one after every big session; restore it on any device.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn-primary" onClick={() => exportBackup()}>
            <Download size={16} /> Export backup
          </button>
          <button type="button" className="btn-secondary" onClick={() => fileRef.current?.click()}>
            <Upload size={16} /> Import backup
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0]
              if (f) {
                const res = await importBackup(f)
                setMessage(res.message)
              }
              e.target.value = ''
            }}
          />
        </div>
        {message && <p className="mt-3 rounded-xl bg-parchment-100 p-3 text-sm text-ink-700">{message}</p>}
      </section>

      <section className="card border-wine-500/30 p-6">
        <SectionTitle>
          <span className="inline-flex items-center gap-2 text-wine-600">
            <AlertTriangle size={18} /> Danger zone
          </span>
        </SectionTitle>
        <p className="mb-3 text-sm text-ink-500">
          Reset wipes all progress and data in this browser. Photos in local storage are kept but orphaned — export a
          backup first if in doubt.
        </p>
        {confirmReset ? (
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="btn bg-wine-600 text-white hover:bg-wine-500"
              onClick={() => {
                resetAll()
                setConfirmReset(false)
                setMessage('All progress reset.')
              }}
            >
              Yes, reset everything
            </button>
            <button type="button" className="btn-secondary" onClick={() => setConfirmReset(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <button type="button" className="btn-secondary text-wine-600" onClick={() => setConfirmReset(true)}>
            Reset all progress…
          </button>
        )}
      </section>

      <p className="mt-6 text-center text-2xs text-ink-400">
        Culinary Mastery · local-first, no accounts, no servers · currency AUD · GST 10% defaults
      </p>
    </div>
  )
}
