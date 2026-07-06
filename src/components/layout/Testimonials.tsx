import { motion } from "framer-motion"
import { Card } from "../ui/Card"
import { SectionHeader } from "../ui/SectionHeader"

const TESTIMONIALS = [
  {
    quote:
      "I didn't realize how loud my inbox was until it went quiet. The mood check-in sounds silly — until you've done it every morning for a week.",
    name: "Maya Torres",
    role: "Design Lead, Fieldnote",
  },
  {
    quote:
      "Switching themes with the time of day genuinely changed how I feel about email. Calming Rain at 9pm is a ritual now.",
    name: "Tom Reyes",
    role: "Freelance Developer",
  },
  {
    quote:
      "Our whole team runs on it. Shared folders keep us aligned, and the stat tiles keep standups mercifully short.",
    name: "Priya Nair",
    role: "Ops Manager, Loam",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative z-20 px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          align="center"
          eyebrow="Kind words"
          title="People are finding their flow"
          subtitle="Loved by 12,000+ calm inboxes and counting."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="flex h-full flex-col gap-6 p-8">
                <p className="font-display text-lg text-foreground/85 leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-sm font-bold text-foreground">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-foreground/60">{role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
