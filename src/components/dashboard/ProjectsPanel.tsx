import { Clock, AlertTriangle, CheckCircle2, Calendar, Layers } from "lucide-react"
import { cn } from "../../lib/utils"
import { Card } from "../ui/Card"

type Status = "On Track" | "At Risk" | "Done"

type Project = {
  id: string
  name: string
  progress: number
  status: Status
  members: string[]
  dueDate: string
}

const PROJECTS: Project[] = [
  { id: "1", name: "Redesign Onboarding Flow", progress: 72, status: "On Track", members: ["A", "S", "M"], dueDate: "Aug 12" },
  { id: "2", name: "Mobile App Beta", progress: 45, status: "At Risk", members: ["J", "K"], dueDate: "Aug 20" },
  { id: "3", name: "Q3 Marketing Push", progress: 100, status: "Done", members: ["D", "T", "R", "L"], dueDate: "Jul 30" },
  { id: "4", name: "API Rate Limiting", progress: 30, status: "On Track", members: ["S"], dueDate: "Sep 02" },
  { id: "5", name: "Design System Refresh", progress: 88, status: "On Track", members: ["A", "M"], dueDate: "Aug 05" },
  { id: "6", name: "Customer Feedback Survey", progress: 15, status: "At Risk", members: ["K", "D", "T"], dueDate: "Sep 10" },
]

const STATUS_STYLES: Record<Status, string> = {
  "On Track": "bg-primary/15 text-primary",
  "At Risk": "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  Done: "bg-primary/25 text-primary",
}

const STATUS_ICONS: Record<Status, typeof Clock> = {
  "On Track": Clock,
  "At Risk": AlertTriangle,
  Done: CheckCircle2,
}

export function ProjectsPanel() {
  const summary = [
    { label: "Total Projects", value: PROJECTS.length, icon: Layers },
    { label: "On Track", value: PROJECTS.filter((p) => p.status === "On Track").length, icon: Clock },
    { label: "At Risk", value: PROJECTS.filter((p) => p.status === "At Risk").length, icon: AlertTriangle },
    { label: "Done", value: PROJECTS.filter((p) => p.status === "Done").length, icon: CheckCircle2 },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {summary.map(({ label, value, icon: Icon }) => (
          <Card key={label} className="flex flex-col gap-2 p-4">
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-2xl font-bold text-foreground">{value}</span>
            <span className="text-xs text-foreground/50 font-medium">{label}</span>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project) => {
        const StatusIcon = STATUS_ICONS[project.status]

        return (
          <Card key={project.id} className="flex flex-col gap-4 p-5">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-semibold text-foreground">{project.name}</h4>
              <span
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0",
                  STATUS_STYLES[project.status]
                )}
              >
                <StatusIcon className="w-3 h-3" />
                {project.status}
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.members.map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-primary/30 border-2 border-card flex items-center justify-center text-xs font-bold text-foreground"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="flex items-center gap-1.5 text-xs text-foreground/50">
                <Calendar className="w-3.5 h-3.5" />
                {project.dueDate}
              </span>
            </div>
          </Card>
          )
        })}
      </div>
    </div>
  )
}
