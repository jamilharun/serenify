import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, Send } from "lucide-react"
import { Button } from "../ui/Button"
import { Input, Textarea } from "../ui/Input"

interface ComposeModalProps {
  isOpen: boolean
  onClose: () => void
  onSend: (data: { to: string; subject: string; body: string }) => void
}

export function ComposeModal({ isOpen, onClose, onSend }: ComposeModalProps) {
  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, onClose])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject.trim() && !body.trim()) return
    onSend({ to, subject, body })
    setTo("")
    setSubject("")
    setBody("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm p-6"
          onClick={onClose}
        >
          <motion.form
            onSubmit={handleSend}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-lg bg-card/80 backdrop-blur-2xl border border-primary/10 rounded-3xl shadow-xl overflow-hidden flex flex-col"
          >
            <div className="p-5 border-b border-primary/10 flex items-center justify-between">
              <h3 className="font-semibold text-lg text-foreground">New Message</h3>
              <button
                type="button"
                onClick={onClose}
                className="p-2 hover:bg-red-500/20 text-foreground/40 hover:text-red-500 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 flex flex-col gap-3">
              <Input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="To"
                autoFocus
              />
              <Input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
              />
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write your message..."
                rows={6}
              />
            </div>

            <div className="p-5 border-t border-primary/10 flex justify-end gap-3">
              <Button type="button" variant="ghost" size="sm" onClick={onClose} className="text-foreground/60">
                Cancel
              </Button>
              <Button type="submit" size="sm">
                <Send className="w-4 h-4" />
                Send
              </Button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
