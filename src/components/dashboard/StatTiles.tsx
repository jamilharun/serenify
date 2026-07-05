import { Mail, CheckCircle2, FileText } from "lucide-react"
import type { Email } from "./EmailRow"
import type { Todo } from "./TodoItem"
import { Card } from "../ui/Card"

interface StatTilesProps {
  emails: Email[]
  todos: Todo[]
}

export function StatTiles({ emails, todos }: StatTilesProps) {
  const unreadCount = emails.filter((e) => e.folder === "inbox" && e.unread).length
  const draftsCount = emails.filter((e) => e.folder === "drafts").length
  const completedCount = todos.filter((t) => t.completed).length

  const stats = [
    { label: "Unread", value: unreadCount, icon: Mail },
    { label: "Tasks Done", value: `${completedCount}/${todos.length}`, icon: CheckCircle2 },
    { label: "Drafts", value: draftsCount, icon: FileText },
  ]

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map(({ label, value, icon: Icon }) => (
        <Card key={label} className="flex flex-col gap-2 p-4">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-2xl font-bold text-foreground">{value}</span>
          <span className="text-xs text-foreground/50 font-medium">{label}</span>
        </Card>
      ))}
    </div>
  )
}
