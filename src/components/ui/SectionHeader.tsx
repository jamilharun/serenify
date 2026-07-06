import { cn } from "../../lib/utils"

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left", className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent-foreground">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-foreground/60 max-w-xl">{subtitle}</p>}
    </div>
  )
}
