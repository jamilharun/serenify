import { motion } from "framer-motion"
import { Sunrise, Inbox, MoonStar } from "lucide-react"
import { Card } from "../ui/Card"
import { SectionHeader } from "../ui/SectionHeader"

const STEPS = [
  {
    icon: Sunrise,
    step: "01",
    title: "Check in",
    description:
      "Start the day with a one-tap mood check-in. Serenify tunes its theme, weather, and pace to match how you're arriving.",
  },
  {
    icon: Inbox,
    step: "02",
    title: "Find your flow",
    description:
      "One focused inbox — no tabs, no badges shouting. Read, reply, archive, breathe. Your tasks and stats sit quietly beside it.",
  },
  {
    icon: MoonStar,
    step: "03",
    title: "Wind down",
    description:
      "Close the day by reviewing what got done — Calming Rain on, tomorrow already sorted, inbox actually quiet.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-20 border-y border-primary/10 bg-card/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow="How it works"
          title="A calmer day, start to finish"
          subtitle="Serenify follows the shape of your day — not the other way around."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map(({ icon: Icon, step, title, description }, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col gap-4 p-8 bg-card/50">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display text-4xl font-medium text-primary/40">{step}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
