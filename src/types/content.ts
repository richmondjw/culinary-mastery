// Static course content types. All curriculum data in src/data/ conforms to these.

export type StageId = 1 | 2 | 3 | 4

export type Difficulty = 1 | 2 | 3 | 4 | 5

export interface TheoryBlock {
  heading: string
  /** Plain text; paragraphs separated by blank lines ("\n\n"). */
  body: string
}

export interface Demonstration {
  title: string
  steps: string[]
}

export interface Exercise {
  title: string
  instructions: string
  /** How/why to repeat this drill in later modules (deliberate repetition). */
  repeatPractice?: string
}

export interface Troubleshoot {
  problem: string
  cause: string
  fix: string
}

export interface Lesson {
  id: string
  title: string
  summary: string
  theory: TheoryBlock[]
  demonstrations: Demonstration[]
  exercises: Exercise[]
  recipeIds: string[]
  techniqueIds: string[]
  troubleshooting: Troubleshoot[]
}

export interface RubricCriterion {
  criterion: string
  maxScore: number
  guidance: string
}

export interface Assessment {
  id: string
  moduleId: string
  title: string
  /** What to cook/do, under what constraints. */
  brief: string
  rubric: RubricCriterion[]
  /** Minimum total score (out of rubric max sum) to pass. */
  passScore: number
  /** Photo/notes evidence expected alongside the self-scored rubric. */
  evidence: string
}

export interface CourseModule {
  id: string
  number: number
  stage: StageId
  title: string
  subtitle: string
  description: string
  objectives: string[]
  difficulty: Difficulty
  estimatedHours: number
  /** Module ids that must be completed (lessons + assessment) before this unlocks. */
  prerequisites: string[]
  skillsUnlocked: string[]
  equipment: string[]
  /** Pantry/shopping staples used across the module. */
  ingredients: string[]
  lessons: Lesson[]
  commonMistakes: Troubleshoot[]
  assessment: Assessment
  completionCriteria: string[]
}

export interface IngredientLine {
  item: string
  /** null for "to taste" / discretionary quantities. */
  qty: number | null
  unit: string
  prep?: string
}

export interface Recipe {
  id: string
  title: string
  moduleId: string
  description: string
  difficulty: Difficulty
  serves: number
  timeMins: number
  techniqueIds: string[]
  ingredients: IngredientLine[]
  method: string[]
  chefNotes: string[]
  /** Foundational skills this recipe deliberately re-drills. */
  reinforces: string[]
}

export interface Technique {
  id: string
  name: string
  category: string
  summary: string
  keyPoints: string[]
}

export type AchievementCondition =
  | { type: 'lessons-completed'; count: number }
  | { type: 'recipes-cooked'; count: number }
  | { type: 'module-completed'; moduleId: string }
  | { type: 'stage-completed'; stage: StageId }
  | { type: 'assessment-passed'; moduleId: string }
  | { type: 'assessments-passed'; count: number }
  | { type: 'photos-added'; count: number }
  | { type: 'notes-written'; count: number }
  | { type: 'costing-sheets-created'; count: number }
  | { type: 'menus-designed'; count: number }
  | { type: 'capstone-completed' }

export interface Achievement {
  id: string
  title: string
  description: string
  /** lucide-react icon name key, mapped in the achievements screen. */
  icon: string
  condition: AchievementCondition
}

export interface StageInfo {
  id: StageId
  name: string
  tagline: string
}
