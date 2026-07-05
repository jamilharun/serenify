import { Inbox, Send, File, Archive, PenSquare } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/Button"
import type { Email, Folder } from "./EmailRow"

interface SidebarProps {
  emails: Email[]
  activeFolder: Folder
  onSelectFolder: (folder: Folder) => void
  onCompose: () => void
  className?: string
}

export function Sidebar({ emails, activeFolder, onSelectFolder, onCompose, className }: SidebarProps) {
  const inboxUnread = emails.filter((e) => e.folder === "inbox" && e.unread).length
  const draftsCount = emails.filter((e) => e.folder === "drafts").length

  const navItems: { folder: Folder; label: string; icon: typeof Inbox; count?: number; countMuted?: boolean }[] = [
    { folder: "inbox", label: "Inbox", icon: Inbox, count: inboxUnread || undefined },
    { folder: "sent", label: "Sent", icon: Send },
    { folder: "drafts", label: "Drafts", icon: File, count: draftsCount || undefined, countMuted: true },
    { folder: "archive", label: "Archive", icon: Archive },
  ]

  return (
    <div className={cn("w-64 flex-shrink-0 flex flex-col gap-6", className)}>
      <Button onClick={onCompose} className="w-full py-3.5 rounded-2xl shadow-lg">
        <PenSquare className="w-5 h-5" />
        Compose
      </Button>

      <nav className="flex flex-col gap-2">
        {navItems.map(({ folder, label, icon: Icon, count, countMuted }) => (
          <button
            key={folder}
            onClick={() => onSelectFolder(folder)}
            className={cn(
              "flex items-center justify-between px-4 py-2.5 rounded-xl transition-all text-left",
              activeFolder === folder
                ? "bg-card/60 backdrop-blur-md text-foreground font-medium shadow-sm border border-primary/10"
                : "text-foreground/70 hover:bg-card/40 hover:text-foreground border border-transparent"
            )}
          >
            <div className="flex items-center gap-3">
              <Icon className={cn("w-4 h-4", activeFolder === folder && "text-primary")} />
              {label}
            </div>
            {!!count && (
              <span className={cn("text-xs font-bold", countMuted ? "font-medium text-foreground/60" : "text-primary")}>
                {count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}
