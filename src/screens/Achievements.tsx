import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Beef,
  BookOpen,
  Briefcase,
  Calculator,
  Camera,
  ChefHat,
  CircleDot,
  ClipboardCheck,
  Crown,
  Croissant,
  Droplets,
  Fish,
  Flame,
  Landmark,
  Medal,
  NotebookPen,
  ScrollText,
  Soup,
  Sparkles,
  Sword,
  Utensils,
} from 'lucide-react'
import { PageHeader } from '../components/Layout'
import { achievements } from '../data'
import { shortDate } from '../lib/format'
import { useUserStore } from '../store/useUserStore'

const ICONS: Record<string, LucideIcon> = {
  Award,
  Beef,
  BookOpen,
  Briefcase,
  Calculator,
  Camera,
  ChefHat,
  CircleDot,
  ClipboardCheck,
  Crown,
  Croissant,
  Droplets,
  Fish,
  Flame,
  Landmark,
  Medal,
  NotebookPen,
  ScrollText,
  Soup,
  Sparkles,
  Sword,
  Utensils,
}

export default function Achievements() {
  const unlocked = useUserStore((s) => s.achievementsUnlocked)
  const count = Object.keys(unlocked).length

  return (
    <div>
      <PageHeader
        title="Achievements"
        subtitle={`Milestones on the road from home cook to head chef. ${count}/${achievements.length} earned.`}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => {
          const at = unlocked[a.id]
          const Icon = ICONS[a.icon] ?? Award
          return (
            <div key={a.id} className={`card flex items-center gap-4 p-5 ${at ? '' : 'opacity-50 grayscale'}`}>
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                  at ? 'bg-amber-50 text-amber-600' : 'bg-parchment-100 text-ink-400'
                }`}
              >
                <Icon size={22} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-base font-semibold">{a.title}</div>
                <div className="text-xs text-ink-500">{a.description}</div>
                <div className="mt-0.5 text-2xs text-ink-400">{at ? `Earned ${shortDate(at)}` : 'Locked'}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
