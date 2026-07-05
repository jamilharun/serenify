import { Reply, Forward, Trash2, MoreHorizontal, X } from "lucide-react"
import { motion } from "framer-motion"
import { type Email } from "./EmailRow"

interface ReadingPaneProps {
  email: Email
  onClose: () => void
}

export function ReadingPane({ email, onClose }: ReadingPaneProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: 20, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.98, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex-1 bg-card/20 backdrop-blur-2xl border border-primary/10 rounded-3xl shadow-xl overflow-hidden flex flex-col min-w-0 origin-right max-lg:absolute max-lg:inset-0 max-lg:z-10 max-lg:bg-card/90"
    >
      <div className="p-6 border-b border-primary/10 flex justify-between items-center bg-card/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold bg-primary text-primary-foreground shadow-md">
            {email.sender.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{email.sender}</h2>
            <p className="text-sm text-foreground/60">{email.time}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button aria-label="Reply" className="p-2 hover:bg-primary/20 rounded-full transition-colors text-foreground/70"><Reply className="w-5 h-5" /></button>
          <button aria-label="Forward" className="p-2 hover:bg-primary/20 rounded-full transition-colors text-foreground/70"><Forward className="w-5 h-5" /></button>
          <button aria-label="Delete" className="p-2 hover:bg-red-500/20 text-red-500/70 hover:text-red-500 rounded-full transition-colors"><Trash2 className="w-5 h-5" /></button>
          <button aria-label="More actions" className="p-2 hover:bg-primary/20 rounded-full transition-colors text-foreground/70"><MoreHorizontal className="w-5 h-5" /></button>
          
          <div className="w-px h-6 bg-primary/20 mx-2" />
          
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-red-500/20 text-foreground/40 hover:text-red-500 rounded-full transition-colors" 
            title="Close Panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
        <h1 className="text-3xl font-bold text-foreground mb-8 tracking-tight leading-snug">{email.subject}</h1>
        <div className="flex flex-col gap-6 text-foreground/80 leading-relaxed font-light">
          <p>{email.preview}</p>
          <p>
            I'll follow up with more details later this week, but wanted to get this on your radar
            first. Let me know if you have any questions in the meantime.
          </p>
          <p>Best regards,<br/>{email.sender}</p>
        </div>
      </div>
    </motion.div>
  )
}
