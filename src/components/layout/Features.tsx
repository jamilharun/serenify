import { motion } from "framer-motion"
import { Palette, Inbox, BarChart3, Smile, ListTodo, MoonStar } from "lucide-react"
import { Card } from "../ui/Card"
import { SectionHeader } from "../ui/SectionHeader"

const FEATURES = [
  {
    icon: Palette,
    title: "Mood Themes",
    description: "Eight hand-tuned themes, light and dark. Pick one above and watch the whole page follow.",
  },
  {
    icon: Inbox,
    title: "Focused Inbox",
    description: "Folders, a clean reading pane, and quick compose — everything you need, nothing shouting.",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    description: "Unread counts, task progress, and drafts at a glance, on stat tiles that update as you work.",
  },
  {
    icon: Smile,
    title: "Mood Check-ins",
    description: "A tiny daily ritual. Your answer nudges the theme, the weather sliver, and your pace.",
  },
  {
    icon: ListTodo,
    title: "Calm Tasks",
    description: "A todo list that enjoys being empty. Finished tasks sink; peace of mind floats.",
  },
  {
    icon: MoonStar,
    title: "Light & Dark",
    description: "Follows your system automatically, or set the mood yourself — morning to midnight.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative z-20 px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Features"
          title="Everything you need for a calmer workday"
          subtitle="Every feature below is live in the preview above — go ahead and click around."
        />

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
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
