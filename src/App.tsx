import { HashRouter, Route, Routes } from 'react-router-dom'
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

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/:id" element={<ModuleDetail />} />
          <Route path="/modules/:id/lessons/:lessonId" element={<LessonPage />} />
          <Route path="/modules/:id/assessment" element={<AssessmentPage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/costing" element={<Costing />} />
          <Route path="/menu-designer" element={<MenuDesigner />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
