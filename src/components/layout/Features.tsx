import { motion } from "framer-motion"
import { LayoutGrid, BarChart3, Users, FileBarChart, Moon } from "lucide-react"
import { cn } from "../../lib/utils"
import { Card } from "../ui/Card"

const FEATURES = [
  {
    icon: LayoutGrid,
    title: "Widgets",
    description: "Drop in Stats, Weather, Mood, and Todo cards to build a dashboard that fits your day.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "See unread counts, task completion, and drafts at a glance with live stat tiles.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Organize folders and shared inboxes so your whole team stays in flow together.",
  },
  {
    icon: FileBarChart,
    title: "Reports",
    description: "Turn your daily check-ins into simple, shareable summaries.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Switch between seven calming themes, light or dark, in a single click.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative z-20 px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">Features</h2>
          <p className="text-foreground/50 mt-1">Everything you need for a calmer workday.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="flex h-full flex-col gap-4 p-6">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  index % 2 === 0 ? "bg-primary/15" : "bg-accent"
                )}
              >
                <Icon className={cn("w-5 h-5", index % 2 === 0 ? "text-primary" : "text-accent-foreground")} />
              </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
