import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import {
  useTheme,
  type ThemeMode,
  type LightVariant,
  type DarkVariant,
} from "./theme-context";
import { cn } from "../../lib/utils";

const THEME_CARDS: {
  mode: ThemeMode;
  variant: LightVariant | DarkVariant;
  label: string;
  bg: string;
}[] = [
  {
    mode: "light",
    variant: "yellow",
    label: "Sunday Morning",
    bg: "/images/bg_sunday_morning.avif",
  },
  {
    mode: "light",
    variant: "green",
    label: "Matcha",
    bg: "/images/bg_matcha.avif",
  },
  {
    mode: "light",
    variant: "light-blue",
    label: "Clear Sky",
    bg: "/images/bg_clear_sky.avif",
  },
  {
    mode: "light",
    variant: "pink",
    label: "Sunset",
    bg: "/images/bg_sunset.avif",
  },
  {
    mode: "dark",
    variant: "gray",
    label: "Stress Free",
    bg: "/images/bg_stress_free.avif",
  },
  {
    mode: "dark",
    variant: "purple",
    label: "Hyper Focus",
    bg: "/images/bg_hyper_focus.avif",
  },
  {
    mode: "dark",
    variant: "dark-blue",
    label: "Calming Rain",
    bg: "/images/bg_calming_rain.avif",
  },
];

export function ThemeShowcase() {
  const {
    isDark,
    lightVariant,
    darkVariant,
    setTheme,
    setLightVariant,
    setDarkVariant,
  } = useTheme();

  const handleSelect = (
    mode: ThemeMode,
    variant: LightVariant | DarkVariant,
  ) => {
    setTheme(mode);
    if (mode === "dark") {
      setDarkVariant(variant as DarkVariant);
    } else {
      setLightVariant(variant as LightVariant);
    }
  };

  return (
    <section className="relative z-20 px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Theme Showcase
            </h2>
            <p className="text-foreground/50 mt-1">
              Pick a mood — the whole page updates live.
            </p>
          </div>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full bg-card/60 backdrop-blur-md border border-primary/20 hover:bg-primary/20 transition-colors text-foreground font-medium"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {THEME_CARDS.filter((card) => card.mode === (isDark ? "dark" : "light")).map((card) => {
            const isSelected = isDark
              ? card.mode === "dark" && card.variant === darkVariant
              : card.mode === "light" && card.variant === lightVariant;

            return (
              <motion.button
                key={card.label}
                onClick={() => handleSelect(card.mode, card.variant)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 shadow-md transition-colors",
                  isSelected
                    ? "border-foreground shadow-lg"
                    : "border-transparent hover:border-primary/40",
                )}
              >
                <img
                  src={card.bg}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold drop-shadow-md text-left">
                  {card.label}
                </span>

                {isSelected && (
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-white shadow" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
