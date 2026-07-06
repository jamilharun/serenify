import { Sun, CloudSun, Sunset, Cloud, CloudMoon, CloudRain, Sparkles } from "lucide-react"
import { useTheme } from "../theme/theme-context"
import type { LightVariant, DarkVariant } from "../theme/theme-context"
import { Card } from "../ui/Card"

const WEATHER_BY_VARIANT: Record<LightVariant | DarkVariant, { icon: typeof Sun; temp: string; condition: string }> = {
  yellow: { icon: Sun, temp: "68°F", condition: "Sunny Morning" },
  green: { icon: CloudSun, temp: "70°F", condition: "Fresh & Mild" },
  "light-blue": { icon: Sun, temp: "75°F", condition: "Clear Skies" },
  pink: { icon: Sunset, temp: "72°F", condition: "Golden Hour" },
  gray: { icon: Cloud, temp: "64°F", condition: "Calm & Overcast" },
  purple: { icon: CloudMoon, temp: "66°F", condition: "Quiet Night" },
  "dark-blue": { icon: CloudRain, temp: "60°F", condition: "Light Rain" },
  forest: { icon: Sparkles, temp: "62°F", condition: "Still Night" },
}

export function WeatherSliver() {
  const { activeVariant } = useTheme()
  const { icon: Icon, temp, condition } = WEATHER_BY_VARIANT[activeVariant]

  return (
    <Card className="flex items-center gap-4 p-4">
      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-foreground">{temp}</span>
        <span className="text-xs text-foreground/50 font-medium">{condition}</span>
      </div>
    </Card>
  )
}
