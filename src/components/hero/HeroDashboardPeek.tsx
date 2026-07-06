import { motion } from "framer-motion"
import { Mail, CheckCircle2, FileText } from "lucide-react"
import { cn } from "../../lib/utils"

const PEEK_STATS = [
  { icon: Mail, value: "3", label: "Unread" },
  { icon: CheckCircle2, value: "2/5", label: "Tasks" },
  { icon: FileText, value: "2", label: "Drafts" },
]

const PEEK_EMAILS = [
  { sender: "Alex at Serenify", subject: "Welcome to your new flow", time: "9:41", unread: true },
  { sender: "Maya Torres", subject: "Feedback on the mood check-in", time: "8:15", unread: true },
  { sender: "Sarah Jenkins", subject: "Coffee tomorrow?", time: "Yest.", unread: false },
]

export function HeroDashboardPeek() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
      className="hidden lg:block absolute right-10 xl:right-20 bottom-0 z-20 w-[400px] xl:w-[440px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="translate-y-16 rounded-t-[1.75rem] bg-card/70 backdrop-blur-2xl border border-primary/15 shadow-2xl p-5 flex flex-col gap-4"
        style={{ transform: "rotateX(6deg) rotateZ(-1.5deg)" }}
      >
        {/* chrome dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        </div>

        {/* stat tiles */}
        <div className="grid grid-cols-3 gap-2">
          {PEEK_STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col gap-1 p-3 rounded-xl bg-background/40 border border-primary/10">
              <Icon className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-bold text-foreground leading-none">{value}</span>
              <span className="text-[10px] text-foreground/55">{label}</span>
            </div>
          ))}
        </div>

        {/* email rows */}
        <div className="flex flex-col rounded-xl bg-background/40 border border-primary/10 overflow-hidden">
          {PEEK_EMAILS.map(({ sender, subject, time, unread }) => (
            <div key={subject} className="flex items-center gap-2.5 px-3 py-2.5 border-b border-primary/10 last:border-0">
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0",
                  unread ? "bg-primary text-primary-foreground" : "bg-primary/30 text-foreground/70"
                )}
              >
                {sender.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className={cn("text-xs truncate leading-tight", unread ? "font-bold text-foreground" : "text-foreground/70")}>
                  {sender}
                </p>
                <p className="text-[10px] text-foreground/55 truncate">{subject}</p>
              </div>
              <span className={cn("text-[10px] flex-shrink-0", unread ? "font-bold text-primary" : "text-foreground/45")}>
                {time}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
