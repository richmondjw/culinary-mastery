import { useEffect, useState, type ReactNode } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  Award,
  Calculator,
  Camera,
  ChefHat,
  ClipboardList,
  Crown,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  Menu,
  NotebookPen,
  ScrollText,
  Settings,
  UtensilsCrossed,
  X,
} from 'lucide-react'
import { useUserStore } from '../store/useUserStore'
import { newlyEarned } from '../lib/achievementsEngine'
import { overallPct } from '../lib/progress'
import { ProgressRing } from './ui'

const nav = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/modules', label: 'Course', icon: GraduationCap },
  { to: '/recipes', label: 'Recipes', icon: UtensilsCrossed },
  { to: '/techniques', label: 'Techniques', icon: ChefHat },
  { to: '/notes', label: 'Journal', icon: NotebookPen },
  { to: '/lists', label: 'Lists', icon: ListChecks },
  { to: '/costing', label: 'Costing', icon: Calculator },
  { to: '/menu-designer', label: 'Menu Designer', icon: ScrollText },
  { to: '/planner', label: 'Planner', icon: ClipboardList },
  { to: '/achievements', label: 'Achievements', icon: Award },
  { to: '/capstone', label: 'Capstone', icon: Crown },
  { to: '/portfolio', label: 'Portfolio', icon: Camera },
]

/** Evaluates achievement conditions after every state change. */
function useAchievementWatcher() {
  const store = useUserStore()
  useEffect(() => {
    const earned = newlyEarned(store)
    if (earned.length > 0) store.unlockAchievements(earned)
  })
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink-900 bg-copper-600 text-white shadow-press">
        <ChefHat size={22} />
      </div>
      <div className="min-w-0">
        <div className="truncate font-display text-xl leading-tight text-ink-900">Culinary Mastery</div>
        {!compact && <div className="truncate text-2xs font-bold text-ink-400">🍳 Fundamentals → profitable menu</div>}
      </div>
    </div>
  )
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2">
      {nav.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl border-2 px-3 py-1.5 text-sm font-bold transition-all ${
              isActive
                ? 'border-ink-900 bg-star-400/40 text-ink-900 shadow-press'
                : 'border-transparent text-ink-500 hover:bg-parchment-100 hover:text-ink-900'
            }`
          }
        >
          <Icon size={17} />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

function ChefXp({ pct }: { pct: number }) {
  return (
    <div className="flex items-center gap-3">
      <ProgressRing pct={pct} size={48} stroke={5} />
      <div className="min-w-0 flex-1">
        <div className="text-xs font-bold">Chef XP</div>
        <div className="text-2xs font-bold text-ink-400">{pct >= 100 ? '👑 Head Chef!' : '⭐ Keep cooking!'}</div>
      </div>
      <NavLink to="/settings" className="text-ink-400 hover:text-copper-600" title="Settings">
        <Settings size={17} />
      </NavLink>
    </div>
  )
}

export default function Layout() {
  useAchievementWatcher()
  const data = useUserStore()
  const pct = overallPct(data)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  // Close the drawer on navigation and on Escape.
  useEffect(() => setDrawerOpen(false), [location.pathname])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDrawerOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="no-print fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r-2 border-ink-900 bg-white lg:flex">
        <div className="px-5 pb-4 pt-6">
          <Logo />
        </div>
        <NavList />
        <div className="border-t-2 border-ink-900 p-4">
          <ChefXp pct={pct} />
        </div>
      </aside>

      {/* Mobile top app bar */}
      <header className="no-print fixed inset-x-0 top-0 z-20 flex items-center justify-between gap-3 border-b-2 border-ink-900 bg-white px-4 py-2.5 lg:hidden">
        <Logo compact />
        <div className="flex shrink-0 items-center gap-2">
          <ProgressRing pct={pct} size={36} stroke={4} />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink-900 bg-white shadow-press transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile slide-over drawer */}
      {drawerOpen && (
        <div className="no-print fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink-900/60"
            onClick={() => setDrawerOpen(false)}
          />
          <div
            data-testid="mobile-drawer"
            className="absolute inset-y-0 left-0 flex w-[85%] max-w-xs flex-col border-r-2 border-ink-900 bg-white pb-[env(safe-area-inset-bottom)]"
          >
            <div className="flex items-center justify-between px-5 pb-4 pt-5">
              <Logo />
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink-900 bg-white shadow-press"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <NavList onNavigate={() => setDrawerOpen(false)} />
            <div className="border-t-2 border-ink-900 p-4">
              <ChefXp pct={pct} />
            </div>
          </div>
        </div>
      )}

      <main className="min-w-0 flex-1 pt-16 lg:ml-60 lg:pt-0 print:ml-0 print:pt-0">
        <div className="mx-auto max-w-6xl px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export function PageHeader({ title, subtitle, right }: { title: string; subtitle?: string; right?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 max-w-2xl text-sm text-ink-500">{subtitle}</p>}
      </div>
      {right}
    </div>
  )
}

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink to={to} className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-copper-600 hover:text-copper-700">
      ← {label}
    </NavLink>
  )
}
