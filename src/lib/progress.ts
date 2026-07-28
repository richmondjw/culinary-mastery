import { modules, recipes } from '../data'
import type { CourseModule, StageId } from '../types/content'
import type { UserData } from '../store/useUserStore'

type ProgressSlice = Pick<UserData, 'lessonsCompleted' | 'recipesCooked' | 'assessmentAttempts' | 'capstone'>

export function assessmentPassed(data: ProgressSlice, moduleId: string): boolean {
  return data.assessmentAttempts.some((a) => a.moduleId === moduleId && a.passed)
}

export function lessonsDone(data: ProgressSlice, m: CourseModule): number {
  return m.lessons.filter((l) => data.lessonsCompleted[l.id]).length
}

export function recipesCookedInModule(data: ProgressSlice, m: CourseModule): number {
  return recipes.filter((r) => r.moduleId === m.id && data.recipesCooked[r.id]).length
}

export function moduleRecipeCount(m: CourseModule): number {
  return recipes.filter((r) => r.moduleId === m.id).length
}

/** A module is complete when every lesson is done and the assessment is passed. */
export function moduleComplete(data: ProgressSlice, m: CourseModule): boolean {
  return lessonsDone(data, m) === m.lessons.length && assessmentPassed(data, m.id)
}

/** Unlocked when every prerequisite module is complete. */
export function moduleUnlocked(data: ProgressSlice, m: CourseModule): boolean {
  return m.prerequisites.every((pid) => {
    const pm = modules.find((x) => x.id === pid)
    return pm ? moduleComplete(data, pm) : true
  })
}

/** 0–100 within one module: lessons 60%, recipes 20%, assessment 20%. */
export function modulePct(data: ProgressSlice, m: CourseModule): number {
  const lessonPart = m.lessons.length > 0 ? lessonsDone(data, m) / m.lessons.length : 1
  const rc = moduleRecipeCount(m)
  const recipePart = rc > 0 ? recipesCookedInModule(data, m) / rc : 1
  const assessPart = assessmentPassed(data, m.id) ? 1 : 0
  return Math.round((lessonPart * 0.6 + recipePart * 0.2 + assessPart * 0.2) * 100)
}

export function stageModules(stage: StageId): CourseModule[] {
  return modules.filter((m) => m.stage === stage)
}

export function stagePct(data: ProgressSlice, stage: StageId): number {
  const ms = stageModules(stage)
  if (ms.length === 0) return 0
  return Math.round(ms.reduce((s, m) => s + modulePct(data, m), 0) / ms.length)
}

export function stageComplete(data: ProgressSlice, stage: StageId): boolean {
  return stageModules(stage).every((m) => moduleComplete(data, m))
}

export function overallPct(data: ProgressSlice): number {
  if (modules.length === 0) return 0
  return Math.round(modules.reduce((s, m) => s + modulePct(data, m), 0) / modules.length)
}

export function capstoneComplete(data: ProgressSlice, capstoneStepIds: string[]): boolean {
  return capstoneStepIds.every((id) => data.capstone.steps[id] === 'done')
}

/** The first unlocked, incomplete module — "continue here". */
export function currentModule(data: ProgressSlice): CourseModule | undefined {
  return modules.find((m) => moduleUnlocked(data, m) && !moduleComplete(data, m))
}

export function nextLesson(data: ProgressSlice): { moduleId: string; lessonId: string; title: string } | undefined {
  const m = currentModule(data)
  if (!m) return undefined
  const l = m.lessons.find((x) => !data.lessonsCompleted[x.id])
  if (l) return { moduleId: m.id, lessonId: l.id, title: l.title }
  return undefined
}

export function totalLessons(): number {
  return modules.reduce((s, m) => s + m.lessons.length, 0)
}

export function totalRecipes(): number {
  return recipes.length
}

/**
 * SIZZLE track mapping. The brand splits the curriculum into three visual tracks;
 * the course is organised in four stages, so the two foundation stages share the
 * Cook track. Kept here so every screen badges a stage the same way.
 */
export function trackForStage(stageId: number): 'cook' | 'craft' | 'business' {
  if (stageId <= 2) return 'cook'
  if (stageId === 3) return 'craft'
  return 'business'
}
