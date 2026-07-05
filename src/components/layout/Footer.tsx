import { Mail, Globe, MessageCircle } from "lucide-react"

const LINK_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Components", href: "#components" },
      { label: "Dashboard Preview", href: "#dashboard-mockup" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Support", href: "#" },
      { label: "Community", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative z-20 px-6 md:px-16 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-primary/10">
          <div className="col-span-2">
            <span className="text-foreground font-semibold tracking-wide">Serenify</span>
            <p className="text-sm text-foreground/50 mt-3 max-w-xs leading-relaxed">
              A calm, mood-themed dashboard that brings your email and your headspace into one focused view.
            </p>
          </div>

          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-foreground mb-3">{column.title}</h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-foreground/50 hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm text-foreground/50">
          <span>&copy; {new Date().getFullYear()} Serenify. Designed for a calmer workday.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors" title="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors" title="Contact">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors" title="Community">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
