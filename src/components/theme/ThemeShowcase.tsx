import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import {
  useTheme,
  type ThemeMode,
  type LightVariant,
  type DarkVariant,
} from "./theme-context";
import { cn } from "../../lib/utils";
import { SectionHeader } from "../ui/SectionHeader";

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
  {
    mode: "dark",
    variant: "forest",
    label: "Midnight Forest",
    bg: "/images/bg_midnight_forest.avif",
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
    <section id="themes" className="relative z-20 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Themes"
            title="Set the mood"
            subtitle="Pick a mood — the whole page updates live."
            className="mb-0"
          />

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex-shrink-0 flex items-center gap-2 px-5 py-3 mb-1 rounded-full bg-card/60 backdrop-blur-md border border-primary/20 hover:bg-primary/20 transition-colors text-foreground font-medium"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-16 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center">
        {THEME_CARDS.filter((card) => card.mode === (isDark ? "dark" : "light")).map((card) => {
          const isSelected = isDark
            ? card.mode === "dark" && card.variant === darkVariant
            : card.mode === "light" && card.variant === lightVariant;

          return (
            <motion.button
              key={card.label}
              onClick={() => handleSelect(card.mode, card.variant)}
              aria-pressed={isSelected}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "group relative aspect-[3/4] w-44 sm:w-52 md:w-60 flex-shrink-0 snap-start rounded-2xl overflow-hidden border-2 shadow-md transition-colors",
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
    </section>
  );
}
