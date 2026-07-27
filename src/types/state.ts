// User state persisted locally (localStorage via zustand-persist; photo blobs in IndexedDB).

export type Unit = 'g' | 'kg' | 'ml' | 'L' | 'each'

export interface AssessmentAttempt {
  id: string
  moduleId: string
  date: string
  scores: Record<string, number>
  total: number
  maxTotal: number
  passed: boolean
  reflection: string
  photoIds: string[]
}

export type NoteLink = 'lesson' | 'recipe' | 'free'

export interface Note {
  id: string
  linkType: NoteLink
  /** lessonId or recipeId when linkType is not 'free'. */
  linkId?: string
  title: string
  text: string
  photoIds: string[]
  date: string
}

export interface PhotoMeta {
  id: string
  caption: string
  date: string
  /** Optional context: recipeId, lessonId or moduleId the photo belongs to. */
  linkId?: string
}

export interface ShoppingItem {
  id: string
  label: string
  detail?: string
  category: string
  done: boolean
}

export interface CostLine {
  id: string
  ingredient: string
  /** Supplier pack price (AUD) for packQty of packUnit. */
  packPrice: number
  packQty: number
  packUnit: Unit
  /** Quantity used in the recipe, as-purchased (AP). */
  usedQty: number
  usedUnit: Unit
  /** Edible-portion yield, 1–100 (%). 100 = no trim loss. */
  yieldPct: number
}

export interface CostingSheet {
  id: string
  name: string
  portions: number
  lines: CostLine[]
  /** Q-factor: allowance for salt, oil, garnish etc., % added to ingredient cost. */
  qFactorPct: number
  /** Menu selling price including tax; null while undecided. */
  sellPrice: number | null
  /** Sales tax (GST) % included in sellPrice. */
  taxPct: number
  notes: string
}

export interface MenuDish {
  id: string
  name: string
  recipeId?: string
  costingSheetId?: string
  /** Fallback portion cost when no costing sheet is linked. */
  manualCost?: number
  sellPrice: number
  /** Forecast units sold per service — drives menu-mix analysis. */
  forecastSold: number
}

export interface MenuCourse {
  id: string
  name: string
  dishes: MenuDish[]
}

export interface MenuPlan {
  id: string
  name: string
  concept: string
  covers: number
  taxPct: number
  courses: MenuCourse[]
}

export interface PrepTask {
  id: string
  title: string
  station: string
  durationMins: number
  holdNote?: string
  done: boolean
}

export interface PrepDay {
  id: string
  label: string
  tasks: PrepTask[]
}

export interface ServiceStep {
  id: string
  time: string
  action: string
  station: string
  done: boolean
}

export interface PrepPlan {
  id: string
  name: string
  menuId?: string
  days: PrepDay[]
  service: ServiceStep[]
}

export type CapstoneStepStatus = 'todo' | 'in-progress' | 'done'

export interface CapstoneReview {
  plannedCost: number | null
  actualCost: number | null
  timingNotes: string
  guestFeedback: string
  lessons: string
  wasteLog: string
}

export interface CapstoneState {
  steps: Record<string, CapstoneStepStatus>
  stepNotes: Record<string, string>
  menuId?: string
  prepPlanId?: string
  review: CapstoneReview
}
