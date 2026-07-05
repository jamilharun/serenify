import { motion } from "framer-motion"
import { buttonClasses } from "../ui/buttonStyles"

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Components", href: "#components" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 flex justify-between items-center bg-card/30 backdrop-blur-xl border-b border-primary/10"
    >
      <a href="#top" className="text-foreground font-semibold tracking-wide">Serenify</a>

      <nav className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3 py-2 rounded-full text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-primary/10 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#dashboard-mockup" className={buttonClasses("primary", "sm", "rounded-full")}>
        Get Started
      </a>
    </motion.header>
  )
}
