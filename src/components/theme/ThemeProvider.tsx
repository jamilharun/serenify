import { useEffect, useMemo, useState } from "react"
import {
  THEME_MODES,
  LIGHT_VARIANTS,
  DARK_VARIANTS,
  ThemeProviderContext,
  type ThemeMode,
  type LightVariant,
  type DarkVariant,
  type ThemeProviderState,
} from "./theme-context"

type ThemeProviderProps = {
  children: React.ReactNode
  storageKey?: string
}

function readStored<T extends string>(key: string, valid: readonly T[], fallback: T): T {
  const stored = localStorage.getItem(key)
  return valid.includes(stored as T) ? (stored as T) : fallback
}

export function ThemeProvider({
  children,
  storageKey = "serenify-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>(() =>
    readStored(`${storageKey}-mode`, THEME_MODES, "system")
  )
  const [lightVariant, setLightVariant] = useState<LightVariant>(() =>
    readStored(`${storageKey}-light-variant`, LIGHT_VARIANTS, "yellow")
  )
  const [darkVariant, setDarkVariant] = useState<DarkVariant>(() =>
    readStored(`${storageKey}-dark-variant`, DARK_VARIANTS, "gray")
  )
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const isDark = theme === "dark" || (theme === "system" && systemDark)
  const activeVariant = isDark ? darkVariant : lightVariant

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle("dark", isDark)
    root.setAttribute("data-theme", activeVariant)
  }, [isDark, activeVariant])

  const value = useMemo<ThemeProviderState>(
    () => ({
      theme,
      lightVariant,
      darkVariant,
      isDark,
      activeVariant,
      setTheme: (next: ThemeMode) => {
        localStorage.setItem(`${storageKey}-mode`, next)
        setTheme(next)
      },
      setLightVariant: (variant: LightVariant) => {
        localStorage.setItem(`${storageKey}-light-variant`, variant)
        setLightVariant(variant)
      },
      setDarkVariant: (variant: DarkVariant) => {
        localStorage.setItem(`${storageKey}-dark-variant`, variant)
        setDarkVariant(variant)
      },
    }),
    [theme, lightVariant, darkVariant, isDark, activeVariant, storageKey]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
