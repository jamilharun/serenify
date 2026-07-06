import { AnimatePresence, motion } from "framer-motion"
import { useTheme, type LightVariant, type DarkVariant } from "../theme/theme-context"
import { buttonClasses } from "../ui/buttonStyles"
import { HeroDashboardPeek } from "./HeroDashboardPeek"

const backgrounds: Record<LightVariant | DarkVariant, string> = {
  "yellow": "url('/images/bg_sunday_morning.avif')",
  "green": "url('/images/bg_matcha.avif')",
  "light-blue": "url('/images/bg_clear_sky.avif')",
  "pink": "url('/images/bg_sunset.avif')",
  "gray": "url('/images/bg_stress_free.avif')",
  "purple": "url('/images/bg_hyper_focus.avif')",
  "dark-blue": "url('/images/bg_calming_rain.avif')",
  "forest": "url('/images/bg_midnight_forest.avif')"
}

export function HeroSection() {
  const { activeVariant } = useTheme()
  const activeBg = backgrounds[activeVariant]

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background Image — AnimatePresence keeps the old image mounted so themes crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeVariant}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: activeBg }}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-background/10 backdrop-blur-[1px] transition-colors duration-700" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full px-6 md:px-16 flex justify-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <h1 className="font-display text-6xl md:text-[6rem] leading-[1.05] tracking-tight text-foreground drop-shadow-2xl mb-6 font-semibold">
            Find your flow.
            <br />
            <span className="font-normal italic text-foreground/80">Calm your inbox.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-xl font-light tracking-wide drop-shadow-md mb-8">
            Serenify blends your email and your headspace into one beautifully calm dashboard.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#dashboard-mockup" className={buttonClasses("primary", "lg", "shadow-lg")}>
              Try the live demo
            </a>
            <a href="#waitlist" className={buttonClasses("ghost", "lg", "text-foreground/80")}>
              Join the waitlist
            </a>
          </div>
        </motion.div>
      </div>

      <HeroDashboardPeek />
    </div>
  )
}
