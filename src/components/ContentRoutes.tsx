import { useParams } from 'react-router-dom'
import { moduleById, moduleForRecipe } from '../data'
import { ModuleAccessGate } from './AccessGate'

// Keep the full course catalogue out of the landing-page entry chunk.
// This is a performance boundary, NOT secure paid-content protection.
export function ModuleRoute({ children }: { children: React.ReactNode }) {
  const { id } = useParams()
  const module = id ? moduleById.get(id) : undefined
  return module ? <ModuleAccessGate moduleNumber={module.number}>{children}</ModuleAccessGate> : <>{children}</>
}
export function RecipeRoute({ children }: { children: React.ReactNode }) {
  const { id } = useParams()
  const module = id ? moduleForRecipe(id) : undefined
  return module ? <ModuleAccessGate moduleNumber={module.number}>{children}</ModuleAccessGate> : <>{children}</>
}
