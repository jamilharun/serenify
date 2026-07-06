import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

export function CTABanner() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setJoined(true)
  }

  return (
    <section id="waitlist" className="relative z-20 px-6 md:px-16 pb-20 md:pb-28 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] border border-primary/15 bg-gradient-to-br from-primary/25 via-card/60 to-accent/50 backdrop-blur-2xl px-8 py-16 md:py-20 text-center shadow-xl"
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/30 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Ready to find your flow?
          </h2>
          <p className="text-foreground/65 max-w-md">
            Join the waitlist and be the first to calm your inbox when Serenify opens up.
          </p>

          {joined ? (
            <div className="mt-4 flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary/15 text-foreground font-medium">
              <Check className="w-5 h-5 text-primary" />
              You're on the list — see you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 bg-background/60 py-3"
              />
              <Button type="submit" className="py-3 flex-shrink-0">
                Join the waitlist
              </Button>
            </form>
          )}

          <p className="text-xs text-foreground/55">Free to start. No credit card required.</p>
        </div>
      </motion.div>
    </section>
  )
}
