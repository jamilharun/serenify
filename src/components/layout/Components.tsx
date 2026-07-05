import { motion } from "framer-motion"
import { MousePointerClick, LayoutTemplate, Table, BarChart3, FormInput, Bell } from "lucide-react"
import { cn } from "../../lib/utils"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

const TABLE_ROWS = [
  { name: "Redesign Onboarding", status: "Active", date: "Aug 12" },
  { name: "Mobile App Beta", status: "At Risk", date: "Aug 20" },
]

const CHART_BARS = [40, 70, 55, 90, 35, 65]

const COMPONENTS = [
  {
    icon: MousePointerClick,
    title: "Buttons",
    description: "Primary, outline, and ghost variants.",
    preview: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Button size="sm">Primary</Button>
        <Button variant="outline" size="sm">Outline</Button>
        <Button variant="ghost" size="sm">Ghost</Button>
      </div>
    ),
  },
  {
    icon: LayoutTemplate,
    title: "Cards",
    description: "Glass cards with icon, title, and body text.",
    preview: (
      <div className="w-full max-w-[180px] p-4 rounded-xl bg-card/60 border border-primary/10 shadow-sm flex flex-col gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <LayoutTemplate className="w-4 h-4 text-primary" />
        </div>
        <p className="text-sm font-semibold text-foreground">Card title</p>
        <p className="text-xs text-foreground/50">Supporting text goes here.</p>
      </div>
    ),
  },
  {
    icon: Table,
    title: "Tables",
    description: "Structured rows for projects, tasks, or reports.",
    preview: (
      <div className="w-full max-w-[240px] text-xs">
        <div className="grid grid-cols-3 gap-2 pb-2 border-b border-primary/10 text-foreground/50 font-medium">
          <span>Name</span>
          <span>Status</span>
          <span>Date</span>
        </div>
        {TABLE_ROWS.map((row) => (
          <div key={row.name} className="grid grid-cols-3 gap-2 py-2 border-b border-primary/10 last:border-0 text-foreground/80">
            <span className="truncate">{row.name}</span>
            <span className="text-primary">{row.status}</span>
            <span>{row.date}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "Charts",
    description: "Lightweight bar and stat visualizations.",
    preview: (
      <div className="flex items-end gap-2 h-20">
        {CHART_BARS.map((height, i) => (
          <div key={i} className="w-4 rounded-t-md bg-primary/60" style={{ height: `${height}%` }} />
        ))}
      </div>
    ),
  },
  {
    icon: FormInput,
    title: "Forms",
    description: "Inputs, labels, and submit actions.",
    preview: (
      <div className="w-full max-w-[220px] flex flex-col gap-2">
        <label className="text-xs font-medium text-foreground/60">Email</label>
        <Input disabled placeholder="you@example.com" className="px-3 py-2 text-xs" />
        <Button size="sm" className="mt-1 text-xs">Submit</Button>
      </div>
    ),
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Toasts and inline alerts for live updates.",
    preview: (
      <div className="w-full max-w-[220px] flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-primary/10 shadow-sm">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Bell className="w-4 h-4 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-foreground">New message</p>
          <p className="text-xs text-foreground/50 truncate">Maya sent you feedback</p>
        </div>
      </div>
    ),
  },
]

export function Components() {
  return (
    <section id="components" className="relative z-20 px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">Components</h2>
          <p className="text-foreground/50 mt-1">The building blocks behind every dashboard tab.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPONENTS.map(({ icon: Icon, title, description, preview }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="flex h-full flex-col gap-4 p-6">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                    index % 2 === 0 ? "bg-primary/15" : "bg-accent"
                  )}
                >
                  <Icon className={cn("w-5 h-5", index % 2 === 0 ? "text-primary" : "text-accent-foreground")} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-xs text-foreground/50">{description}</p>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center p-5 rounded-xl bg-background/40 border border-dashed border-primary/20 min-h-[140px]">
                {preview}
              </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
