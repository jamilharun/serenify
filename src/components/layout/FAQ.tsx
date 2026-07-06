import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { Card } from "../ui/Card"
import { SectionHeader } from "../ui/SectionHeader"

const FAQS = [
  {
    question: "What is Serenify?",
    answer: "Serenify is a calm, mood-themed dashboard that brings your email, tasks, and daily check-ins into one focused view.",
  },
  {
    question: "Can I switch between light and dark mode?",
    answer: "Yes — toggle it anytime from the Theme Showcase, or let it follow your system settings automatically.",
  },
  {
    question: "Do I need a credit card for the Free plan?",
    answer: "No credit card required. You can start on Free and upgrade to Pro whenever you're ready.",
  },
  {
    question: "Can I invite my team?",
    answer: "Team management is available on the Pro and Enterprise plans, with roles for Admins, Editors, and Viewers.",
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. Your inbox and check-ins stay local to your device unless you choose to sync with your team.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes — you can upgrade, downgrade, or cancel your plan at any time from Settings, no questions asked.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative z-20 px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          align="center"
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you might be wondering about Serenify."
        />

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <Card key={faq.question} className="overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-foreground/50 flex-shrink-0 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="px-6 pb-4 text-sm text-foreground/60 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
