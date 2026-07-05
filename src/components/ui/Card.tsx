import { cn } from "../../lib/utils"

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card/40 backdrop-blur-2xl border border-primary/10 rounded-theme shadow-sm",
        className
      )}
      {...props}
    />
  )
}
