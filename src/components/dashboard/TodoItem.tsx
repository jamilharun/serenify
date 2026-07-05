import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "../../lib/utils"

export type Todo = {
  id: string
  text: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className={cn(
        "group relative flex items-center gap-3 p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-primary/10 shadow-sm transition-all hover:shadow-md hover:border-primary/30",
        todo.completed && "opacity-50 bg-card/20 border-transparent shadow-none hover:border-transparent"
      )}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 cursor-pointer",
          todo.completed 
            ? "border-primary bg-primary text-primary-foreground" 
            : "border-primary/40 hover:border-primary"
        )}
      >
        {todo.completed && <Check className="w-3 h-3" />}
      </button>

      <span className={cn(
        "flex-1 text-sm transition-all duration-300 outline-none truncate",
        todo.completed ? "line-through text-foreground/40" : "text-foreground/90 font-medium"
      )}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 p-1.5 text-foreground/40 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all cursor-pointer"
        title="Delete Task"
      >
        <X className="w-3 h-3" />
      </button>
    </motion.div>
  )
}
