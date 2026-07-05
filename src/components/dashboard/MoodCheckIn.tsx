import { useState } from "react"
import { Smile, Meh, Frown, Moon } from "lucide-react"
import { cn } from "../../lib/utils"
import { Card } from "../ui/Card"

type Mood = "great" | "okay" | "rough" | "tired"

const MOODS: { key: Mood; label: string; icon: typeof Smile; note: string }[] = [
  { key: "great", label: "Great", icon: Smile, note: "Love that energy — keep it going." },
  { key: "okay", label: "Okay", icon: Meh, note: "Steady as it goes." },
  { key: "rough", label: "Rough", icon: Frown, note: "Be gentle with yourself today." },
  { key: "tired", label: "Tired", icon: Moon, note: "Maybe a short break would help." },
]

export function MoodCheckIn() {
  const [selected, setSelected] = useState<Mood | null>(
    () => (localStorage.getItem("serenify-mood") as Mood) || null
  )

  const handleSelect = (mood: Mood) => {
    setSelected(mood)
    localStorage.setItem("serenify-mood", mood)
  }

  const activeMood = MOODS.find((m) => m.key === selected)

  return (
    <Card className="flex flex-col gap-3 p-4">
      <span className="text-sm font-medium text-foreground/80">How are you feeling?</span>
      <div className="flex justify-between gap-2">
        {MOODS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => handleSelect(key)}
            className={cn(
              "flex-1 flex flex-col items-center gap-1.5 py-2.5 rounded-xl transition-all",
              selected === key
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-foreground/50 hover:bg-primary/10 hover:text-foreground"
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </div>
      {activeMood && (
        <p className="text-xs text-foreground/50 font-light text-center pt-2 border-t border-primary/10">
          {activeMood.note}
        </p>
      )}
    </Card>
  )
}
