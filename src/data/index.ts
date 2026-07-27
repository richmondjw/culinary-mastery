import type { CourseModule, Recipe } from '../types/content'
import { module01, module01Recipes } from './modules/module-01'
import { module02, module02Recipes } from './modules/module-02'
import { module03, module03Recipes } from './modules/module-03'
import { module04, module04Recipes } from './modules/module-04'
import { module05, module05Recipes } from './modules/module-05'
import { module06, module06Recipes } from './modules/module-06'
import { module07, module07Recipes } from './modules/module-07'
import { module08, module08Recipes } from './modules/module-08'
import { module09, module09Recipes } from './modules/module-09'
import { module10, module10Recipes } from './modules/module-10'
import { module11, module11Recipes } from './modules/module-11'
import { module12, module12Recipes } from './modules/module-12'
import { module13, module13Recipes } from './modules/module-13'
import { module14, module14Recipes } from './modules/module-14'
import { module15, module15Recipes } from './modules/module-15'
import { module16, module16Recipes } from './modules/module-16'
import { module17, module17Recipes } from './modules/module-17'
import { module18, module18Recipes } from './modules/module-18'
import { module19, module19Recipes } from './modules/module-19'

export { stages } from './stages'
export { techniques } from './techniques'
export { achievements } from './achievements'
export { equipmentList } from './equipment'
export { capstoneSteps } from './capstone'

export const modules: CourseModule[] = [
  module01,
  module02,
  module03,
  module04,
  module05,
  module06,
  module07,
  module08,
  module09,
  module10,
  module11,
  module12,
  module13,
  module14,
  module15,
  module16,
  module17,
  module18,
  module19,
]

export const recipes: Recipe[] = [
  ...module01Recipes,
  ...module02Recipes,
  ...module03Recipes,
  ...module04Recipes,
  ...module05Recipes,
  ...module06Recipes,
  ...module07Recipes,
  ...module08Recipes,
  ...module09Recipes,
  ...module10Recipes,
  ...module11Recipes,
  ...module12Recipes,
  ...module13Recipes,
  ...module14Recipes,
  ...module15Recipes,
  ...module16Recipes,
  ...module17Recipes,
  ...module18Recipes,
  ...module19Recipes,
]

export const moduleById = new Map(modules.map((m) => [m.id, m]))
export const recipeById = new Map(recipes.map((r) => [r.id, r]))

export function moduleForRecipe(recipeId: string): CourseModule | undefined {
  const r = recipeById.get(recipeId)
  return r ? moduleById.get(r.moduleId) : undefined
}

export function lessonById(lessonId: string) {
  for (const m of modules) {
    const l = m.lessons.find((x) => x.id === lessonId)
    if (l) return { module: m, lesson: l }
  }
  return undefined
}
