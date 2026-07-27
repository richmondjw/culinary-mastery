import { snapshotUserData, useUserStore, type UserData } from '../store/useUserStore'
import { allPhotos, importPhotos } from './photos'

interface BackupFile {
  app: 'culinary-mastery'
  version: 1
  exportedAt: string
  data: UserData
  photos: Record<string, string>
}

export async function exportBackup(): Promise<void> {
  const backup: BackupFile = {
    app: 'culinary-mastery',
    version: 1,
    exportedAt: new Date().toISOString(),
    data: snapshotUserData(),
    photos: await allPhotos(),
  }
  const blob = new Blob([JSON.stringify(backup)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `culinary-mastery-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

export async function importBackup(file: File): Promise<{ ok: boolean; message: string }> {
  try {
    const text = await file.text()
    const parsed = JSON.parse(text) as Partial<BackupFile>
    if (parsed.app !== 'culinary-mastery' || !parsed.data) {
      return { ok: false, message: 'Not a Culinary Mastery backup file.' }
    }
    useUserStore.getState().importData(parsed.data as UserData)
    if (parsed.photos) await importPhotos(parsed.photos)
    return { ok: true, message: 'Backup restored — progress, notes, tools and photos are back.' }
  } catch {
    return { ok: false, message: 'Could not read that file as a backup.' }
  }
}
