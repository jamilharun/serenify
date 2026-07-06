import { motion } from "framer-motion"
import { Feather, Crown, Building2, Check } from "lucide-react"
import { cn } from "../../lib/utils"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"
import { SectionHeader } from "../ui/SectionHeader"

const TIERS = [
  {
    icon: Feather,
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For getting started with a calmer inbox.",
    features: [
      "1 dashboard theme",
      "Up to 3 widgets",
      "Basic email organization",
      "Community support",
    ],
    cta: "Get Started",
    note: "Free forever. No credit card required.",
    highlighted: false,
  },
  {
    icon: Crown,
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For individuals who live in their dashboard.",
    features: [
      "All 8 mood themes",
      "Unlimited widgets",
      "Advanced analytics",
      "Compose & smart drafts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    note: "14-day trial. No credit card required.",
    highlighted: true,
  },
  {
    icon: Building2,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams who want calm at scale.",
    features: [
      "Everything in Pro",
      "Team management & roles",
      "Reports & exports",
      "Dedicated onboarding",
      "SLA & priority support",
    ],
    cta: "Contact Sales",
    note: "We reply within one business day.",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative z-20 px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          align="center"
          eyebrow="Pricing"
          title="Choose the plan that fits your flow"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map(({ icon: Icon, name, price, period, description, features, cta, note, highlighted }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <Card
                className={cn(
                  "relative flex flex-col p-8 rounded-3xl h-full",
                  highlighted && "bg-card/60 border-primary shadow-xl md:-mt-4 md:h-[calc(100%+2rem)]"
                )}
              >
              {highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-md whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground">{name}</h3>
              <p className="text-sm text-foreground/50 mt-1 mb-6">{description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-foreground">{price}</span>
                {period && <span className="text-foreground/50 text-sm">{period}</span>}
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/70">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={highlighted ? "primary" : "outline"}
                className={cn("w-full py-3 rounded-2xl", highlighted ? "shadow-lg font-semibold" : "font-semibold")}
              >
                {cta}
              </Button>
              <p className="text-xs text-foreground/55 text-center mt-3">{note}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
