import { achievements } from '../data'
import { capstoneSteps } from '../data/capstone'
import { modules } from '../data'
import type { AchievementCondition } from '../types/content'
import type { UserData } from '../store/useUserStore'
import { assessmentPassed, capstoneComplete, moduleComplete, stageComplete } from './progress'

function conditionMet(data: UserData, c: AchievementCondition): boolean {
  switch (c.type) {
    case 'lessons-completed':
      return Object.keys(data.lessonsCompleted).length >= c.count
    case 'recipes-cooked':
      return Object.keys(data.recipesCooked).length >= c.count
    case 'module-completed': {
      const m = modules.find((x) => x.id === c.moduleId)
      return m ? moduleComplete(data, m) : false
    }
    case 'stage-completed':
      return stageComplete(data, c.stage)
    case 'assessment-passed':
      return assessmentPassed(data, c.moduleId)
    case 'assessments-passed': {
      const passedModules = new Set(data.assessmentAttempts.filter((a) => a.passed).map((a) => a.moduleId))
      return passedModules.size >= c.count
    }
    case 'photos-added':
      return data.photos.length >= c.count
    case 'notes-written':
      return data.notes.length >= c.count
    case 'costing-sheets-created':
      return data.costingSheets.length >= c.count
    case 'menus-designed':
      return data.menus.length >= c.count
    case 'capstone-completed':
      return capstoneComplete(data, capstoneSteps.map((s) => s.id))
  }
}

/** Achievement ids newly earned but not yet recorded as unlocked. */
export function newlyEarned(data: UserData): string[] {
  return achievements
    .filter((a) => !data.achievementsUnlocked[a.id] && conditionMet(data, a.condition))
    .map((a) => a.id)
}
