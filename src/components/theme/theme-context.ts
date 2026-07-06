import { createContext, useContext } from "react"

export const THEME_MODES = ["dark", "light", "system"] as const
export const LIGHT_VARIANTS = ["yellow", "green", "light-blue", "pink"] as const
export const DARK_VARIANTS = ["gray", "purple", "dark-blue", "forest"] as const

export type ThemeMode = (typeof THEME_MODES)[number]
export type LightVariant = (typeof LIGHT_VARIANTS)[number]
export type DarkVariant = (typeof DARK_VARIANTS)[number]

export type ThemeProviderState = {
  theme: ThemeMode
  lightVariant: LightVariant
  darkVariant: DarkVariant
  isDark: boolean
  activeVariant: LightVariant | DarkVariant
  setTheme: (theme: ThemeMode) => void
  setLightVariant: (variant: LightVariant) => void
  setDarkVariant: (variant: DarkVariant) => void
}

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
