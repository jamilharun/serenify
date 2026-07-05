import { cn } from "../../lib/utils"

export type ButtonVariant = "primary" | "outline" | "ghost"
export type ButtonSize = "sm" | "md" | "lg"

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all",
  outline:
    "border border-primary/30 text-foreground font-medium hover:bg-primary/10 transition-colors",
  ghost:
    "text-foreground/70 font-medium hover:bg-primary/10 hover:text-foreground transition-colors",
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 rounded-xl text-sm",
  md: "px-5 py-2.5 rounded-xl text-sm",
  lg: "px-8 py-4 rounded-2xl",
}

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center gap-2",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  )
}
