import { motion } from "framer-motion"
import { Star, MoreVertical } from "lucide-react"
import { cn } from "../../lib/utils"

export type Folder = "inbox" | "sent" | "drafts" | "archive"

export type Email = {
  id: string
  sender: string
  subject: string
  preview: string
  time: string
  unread: boolean
  folder: Folder
}

interface EmailRowProps {
  email: Email
  selected: boolean
  onClick: () => void
  isExpanded?: boolean
}

export function EmailRow({ email, selected, onClick, isExpanded = false }: EmailRowProps) {
  return (
    <motion.div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group flex px-5 py-4 border-b border-primary/10 transition-all cursor-pointer backdrop-blur-sm relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-inset",
        selected
          ? "bg-primary/20 border-l-[3px] border-l-primary"
          : email.unread ? "bg-card/30 hover:bg-card/50 border-l-[3px] border-l-transparent" : "bg-transparent opacity-80 hover:opacity-100 hover:bg-card/20 border-l-[3px] border-l-transparent",
        isExpanded ? "flex-row items-center gap-4" : "flex-col gap-2 items-start"
      )}
    >
      {/* Sender and Time section */}
      <div className={cn("flex justify-between items-center", isExpanded ? "w-auto flex-shrink-0" : "w-full")}>
        <div className="flex items-center gap-3 flex-shrink-0 w-48 xl:w-56">
          <div className="w-2 flex justify-center">
            {email.unread && !selected && <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/80" />}
          </div>

          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground shadow-sm",
            email.unread ? "bg-primary" : "bg-primary/40 text-foreground/70"
          )}>
            {email.sender.charAt(0)}
          </div>

          <span className={cn(
            "truncate text-sm transition-all flex-1",
            email.unread ? "font-bold text-foreground" : "font-medium text-foreground/70"
          )}>
            {email.sender}
          </span>
        </div>

        {/* If not expanded, show time on top right */}
        {!isExpanded && (
          <span className={cn(
            "text-xs transition-all flex-shrink-0",
            email.unread ? "font-bold text-primary" : "text-foreground/40 font-medium"
          )}>
            {email.time}
          </span>
        )}
      </div>

      {/* Subject and Preview section */}
      <div className={cn(
        "flex min-w-0 transition-all",
        isExpanded ? "flex-1 flex-row items-center gap-3" : "flex-col pl-7 w-full"
      )}>
        <span className={cn(
          "text-sm truncate transition-all flex-shrink-0",
          isExpanded ? "max-w-xs xl:max-w-md" : "mb-1 block",
          email.unread ? "font-bold text-foreground" : "text-foreground/90"
        )}>
          {email.subject}
        </span>

        {isExpanded && <span className="text-foreground/30 flex-shrink-0">-</span>}

        <span className={cn(
          "text-sm text-foreground/50 font-light leading-relaxed",
          isExpanded ? "truncate flex-1" : "line-clamp-2"
        )}>
          {email.preview}
        </span>
      </div>

      {/* Time and Actions (Only visible in Expanded mode) */}
      {isExpanded && (
        <div className="flex items-center gap-4 flex-shrink-0 ml-4">
          <span className={cn(
            "text-xs transition-all w-20 text-right group-hover:hidden",
            email.unread ? "font-bold text-primary" : "text-foreground/40 font-medium"
          )}>
            {email.time}
          </span>
          <div className="hidden group-hover:flex items-center gap-2 w-20 justify-end">
            <button aria-label="Star email" className="p-1.5 hover:bg-primary/20 rounded-full text-foreground/50 hover:text-foreground transition-colors">
              <Star className="w-4 h-4" />
            </button>
            <button aria-label="More actions" className="p-1.5 hover:bg-primary/20 rounded-full text-foreground/50 hover:text-foreground transition-colors">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
