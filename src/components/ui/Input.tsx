import { cn } from "../../lib/utils"

const FIELD_CLASSES =
  "w-full px-4 py-2.5 rounded-xl bg-card/50 border border-primary/10 text-sm focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-foreground/40 text-foreground"

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(FIELD_CLASSES, className)} {...props} />
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn(FIELD_CLASSES, "resize-none", className)} {...props} />
}
