import { HashRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './screens/Dashboard'
import Modules from './screens/Modules'
import ModuleDetail from './screens/ModuleDetail'
import LessonPage from './screens/LessonPage'
import AssessmentPage from './screens/AssessmentPage'
import Recipes from './screens/Recipes'
import RecipeDetail from './screens/RecipeDetail'
import Techniques from './screens/Techniques'
import Notes from './screens/Notes'
import Lists from './screens/Lists'
import Costing from './screens/Costing'
import MenuDesigner from './screens/MenuDesigner'
import Planner from './screens/Planner'
import Achievements from './screens/Achievements'
import Capstone from './screens/Capstone'
import Portfolio from './screens/Portfolio'
import SettingsPage from './screens/SettingsPage'
import Landing from './screens/Landing'
import { FullKitchenAccessGate, ModuleAccessGate } from './components/AccessGate'
import { moduleById, moduleForRecipe } from './data'

function ModuleRoute({ children }: { children: React.ReactNode }) {
  const { id } = useParams()
  const module = id ? moduleById.get(id) : undefined
  return module ? <ModuleAccessGate moduleNumber={module.number}>{children}</ModuleAccessGate> : <>{children}</>
}

function RecipeRoute({ children }: { children: React.ReactNode }) {
  const { id } = useParams()
  const module = id ? moduleForRecipe(id) : undefined
  return module ? <ModuleAccessGate moduleNumber={module.number}>{children}</ModuleAccessGate> : <>{children}</>
}

function LegacyAppRedirect() {
  const location = useLocation()
  return <Navigate to={`/app${location.pathname}${location.search}${location.hash}`} replace />
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/modules" element={<Modules />} />
          <Route path="/app/modules/:id" element={<ModuleRoute><ModuleDetail /></ModuleRoute>} />
          <Route path="/app/modules/:id/lessons/:lessonId" element={<ModuleRoute><LessonPage /></ModuleRoute>} />
          <Route path="/app/modules/:id/assessment" element={<ModuleRoute><AssessmentPage /></ModuleRoute>} />
          <Route path="/app/recipes" element={<Recipes />} />
          <Route path="/app/recipes/:id" element={<RecipeRoute><RecipeDetail /></RecipeRoute>} />
          <Route path="/app/techniques" element={<Techniques />} />
          <Route path="/app/notes" element={<Notes />} />
          <Route path="/app/lists" element={<Lists />} />
          <Route path="/app/costing" element={<FullKitchenAccessGate><Costing /></FullKitchenAccessGate>} />
          <Route path="/app/menu-designer" element={<FullKitchenAccessGate><MenuDesigner /></FullKitchenAccessGate>} />
          <Route path="/app/planner" element={<FullKitchenAccessGate><Planner /></FullKitchenAccessGate>} />
          <Route path="/app/achievements" element={<Achievements />} />
          <Route path="/app/capstone" element={<FullKitchenAccessGate><Capstone /></FullKitchenAccessGate>} />
          <Route path="/app/portfolio" element={<FullKitchenAccessGate><Portfolio /></FullKitchenAccessGate>} />
          <Route path="/app/settings" element={<SettingsPage />} />
          <Route path="/tools/food-cost" element={<Costing />} />
          {/* Keep pre-launch hash links working while the app shell lives at /app. */}
          <Route path="/modules/*" element={<LegacyAppRedirect />} />
          <Route path="/recipes/*" element={<LegacyAppRedirect />} />
          <Route path="/techniques/*" element={<LegacyAppRedirect />} />
          <Route path="/notes/*" element={<LegacyAppRedirect />} />
          <Route path="/lists/*" element={<LegacyAppRedirect />} />
          <Route path="/costing/*" element={<LegacyAppRedirect />} />
          <Route path="/menu-designer/*" element={<LegacyAppRedirect />} />
          <Route path="/planner/*" element={<LegacyAppRedirect />} />
          <Route path="/achievements/*" element={<LegacyAppRedirect />} />
          <Route path="/capstone/*" element={<LegacyAppRedirect />} />
          <Route path="/portfolio/*" element={<LegacyAppRedirect />} />
          <Route path="/settings/*" element={<LegacyAppRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
