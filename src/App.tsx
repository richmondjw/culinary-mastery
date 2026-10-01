import { lazy, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
const Layout = lazy(() => import('./components/Layout'))
import Landing from './screens/Landing'
import { FullKitchenAccessGate } from './components/AccessGate'
const ModuleRoute = lazy(() => import('./components/ContentRoutes').then(m => ({ default: m.ModuleRoute })))
const RecipeRoute = lazy(() => import('./components/ContentRoutes').then(m => ({ default: m.RecipeRoute })))

const Dashboard = lazy(() => import('./screens/Dashboard'))
const Modules = lazy(() => import('./screens/Modules'))
const ModuleDetail = lazy(() => import('./screens/ModuleDetail'))
const LessonPage = lazy(() => import('./screens/LessonPage'))
const AssessmentPage = lazy(() => import('./screens/AssessmentPage'))
const Recipes = lazy(() => import('./screens/Recipes'))
const RecipeDetail = lazy(() => import('./screens/RecipeDetail'))
const Techniques = lazy(() => import('./screens/Techniques'))
const Notes = lazy(() => import('./screens/Notes'))
const Lists = lazy(() => import('./screens/Lists'))
const Costing = lazy(() => import('./screens/Costing'))
const MenuDesigner = lazy(() => import('./screens/MenuDesigner'))
const Planner = lazy(() => import('./screens/Planner'))
const Achievements = lazy(() => import('./screens/Achievements'))
const Capstone = lazy(() => import('./screens/Capstone'))
const Portfolio = lazy(() => import('./screens/Portfolio'))
const SettingsPage = lazy(() => import('./screens/SettingsPage'))

function RouteLoading() {
  return <main className="min-h-screen bg-parchment-50 p-8" aria-busy="true" role="status">Loading your kitchen…</main>
}

function LegacyAppRedirect() {
  const location = useLocation()
  return <Navigate to={`/app${location.pathname}${location.search}${location.hash}`} replace />
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<RouteLoading />}>
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
      </Suspense>
    </HashRouter>
  )
}
