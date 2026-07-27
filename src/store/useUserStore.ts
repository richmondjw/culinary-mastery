import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {
  AssessmentAttempt,
  CapstoneState,
  CapstoneStepStatus,
  CostingSheet,
  MenuPlan,
  Note,
  PhotoMeta,
  PrepPlan,
  ShoppingItem,
} from '../types/state'
import { todayIso } from '../lib/format'

export interface UserData {
  lessonsCompleted: Record<string, string>
  recipesCooked: Record<string, string>
  assessmentAttempts: AssessmentAttempt[]
  notes: Note[]
  photos: PhotoMeta[]
  shopping: ShoppingItem[]
  equipmentOwned: Record<string, boolean>
  costingSheets: CostingSheet[]
  menus: MenuPlan[]
  prepPlans: PrepPlan[]
  capstone: CapstoneState
  achievementsUnlocked: Record<string, string>
}

interface UserActions {
  toggleLesson: (lessonId: string) => void
  toggleRecipeCooked: (recipeId: string) => void
  addAssessmentAttempt: (attempt: AssessmentAttempt) => void
  addNote: (note: Note) => void
  updateNote: (id: string, patch: Partial<Note>) => void
  deleteNote: (id: string) => void
  addPhotoMeta: (meta: PhotoMeta) => void
  deletePhotoMeta: (id: string) => void
  setShopping: (items: ShoppingItem[]) => void
  toggleEquipment: (id: string) => void
  upsertCostingSheet: (sheet: CostingSheet) => void
  deleteCostingSheet: (id: string) => void
  upsertMenu: (menu: MenuPlan) => void
  deleteMenu: (id: string) => void
  upsertPrepPlan: (plan: PrepPlan) => void
  deletePrepPlan: (id: string) => void
  setCapstoneStep: (stepId: string, status: CapstoneStepStatus) => void
  setCapstoneNote: (stepId: string, note: string) => void
  setCapstone: (patch: Partial<CapstoneState>) => void
  unlockAchievements: (ids: string[]) => void
  importData: (data: UserData) => void
  resetAll: () => void
}

export const emptyUserData: UserData = {
  lessonsCompleted: {},
  recipesCooked: {},
  assessmentAttempts: [],
  notes: [],
  photos: [],
  shopping: [],
  equipmentOwned: {},
  costingSheets: [],
  menus: [],
  prepPlans: [],
  capstone: {
    steps: {},
    stepNotes: {},
    review: {
      plannedCost: null,
      actualCost: null,
      timingNotes: '',
      guestFeedback: '',
      lessons: '',
      wasteLog: '',
    },
  },
  achievementsUnlocked: {},
}

export const useUserStore = create<UserData & UserActions>()(
  persist(
    (set) => ({
      ...emptyUserData,

      toggleLesson: (lessonId) =>
        set((s) => {
          const next = { ...s.lessonsCompleted }
          if (next[lessonId]) delete next[lessonId]
          else next[lessonId] = todayIso()
          return { lessonsCompleted: next }
        }),

      toggleRecipeCooked: (recipeId) =>
        set((s) => {
          const next = { ...s.recipesCooked }
          if (next[recipeId]) delete next[recipeId]
          else next[recipeId] = todayIso()
          return { recipesCooked: next }
        }),

      addAssessmentAttempt: (attempt) =>
        set((s) => ({ assessmentAttempts: [...s.assessmentAttempts, attempt] })),

      addNote: (note) => set((s) => ({ notes: [note, ...s.notes] })),
      updateNote: (id, patch) =>
        set((s) => ({ notes: s.notes.map((n) => (n.id === id ? { ...n, ...patch } : n)) })),
      deleteNote: (id) => set((s) => ({ notes: s.notes.filter((n) => n.id !== id) })),

      addPhotoMeta: (meta) => set((s) => ({ photos: [meta, ...s.photos] })),
      deletePhotoMeta: (id) => set((s) => ({ photos: s.photos.filter((p) => p.id !== id) })),

      setShopping: (items) => set({ shopping: items }),
      toggleEquipment: (id) =>
        set((s) => ({ equipmentOwned: { ...s.equipmentOwned, [id]: !s.equipmentOwned[id] } })),

      upsertCostingSheet: (sheet) =>
        set((s) => {
          const exists = s.costingSheets.some((c) => c.id === sheet.id)
          return {
            costingSheets: exists
              ? s.costingSheets.map((c) => (c.id === sheet.id ? sheet : c))
              : [...s.costingSheets, sheet],
          }
        }),
      deleteCostingSheet: (id) =>
        set((s) => ({ costingSheets: s.costingSheets.filter((c) => c.id !== id) })),

      upsertMenu: (menu) =>
        set((s) => {
          const exists = s.menus.some((m) => m.id === menu.id)
          return { menus: exists ? s.menus.map((m) => (m.id === menu.id ? menu : m)) : [...s.menus, menu] }
        }),
      deleteMenu: (id) => set((s) => ({ menus: s.menus.filter((m) => m.id !== id) })),

      upsertPrepPlan: (plan) =>
        set((s) => {
          const exists = s.prepPlans.some((p) => p.id === plan.id)
          return {
            prepPlans: exists ? s.prepPlans.map((p) => (p.id === plan.id ? plan : p)) : [...s.prepPlans, plan],
          }
        }),
      deletePrepPlan: (id) => set((s) => ({ prepPlans: s.prepPlans.filter((p) => p.id !== id) })),

      setCapstoneStep: (stepId, status) =>
        set((s) => ({ capstone: { ...s.capstone, steps: { ...s.capstone.steps, [stepId]: status } } })),
      setCapstoneNote: (stepId, note) =>
        set((s) => ({
          capstone: { ...s.capstone, stepNotes: { ...s.capstone.stepNotes, [stepId]: note } },
        })),
      setCapstone: (patch) => set((s) => ({ capstone: { ...s.capstone, ...patch } })),

      unlockAchievements: (ids) =>
        set((s) => {
          if (ids.length === 0) return {}
          const next = { ...s.achievementsUnlocked }
          const now = todayIso()
          for (const id of ids) if (!next[id]) next[id] = now
          return { achievementsUnlocked: next }
        }),

      importData: (data) => set({ ...emptyUserData, ...data }),
      resetAll: () => set({ ...emptyUserData }),
    }),
    { name: 'culinary-mastery-state', version: 1 },
  ),
)

/** Snapshot of persisted data only (no actions) — used by export. */
export function snapshotUserData(): UserData {
  const s = useUserStore.getState()
  return {
    lessonsCompleted: s.lessonsCompleted,
    recipesCooked: s.recipesCooked,
    assessmentAttempts: s.assessmentAttempts,
    notes: s.notes,
    photos: s.photos,
    shopping: s.shopping,
    equipmentOwned: s.equipmentOwned,
    costingSheets: s.costingSheets,
    menus: s.menus,
    prepPlans: s.prepPlans,
    capstone: s.capstone,
    achievementsUnlocked: s.achievementsUnlocked,
  }
}
