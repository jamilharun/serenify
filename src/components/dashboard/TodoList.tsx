import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, ListTodo } from "lucide-react"
import { TodoItem, type Todo } from "./TodoItem"
import { Card } from "../ui/Card"
import { Input } from "../ui/Input"

interface TodoListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export function TodoList({ todos, setTodos }: TodoListProps) {
  const [inputValue, setInputValue] = useState("")

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
      completed: false
    }
    setTodos([newTodo, ...todos])
    setInputValue("")
  }

  const handleToggle = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const handleDelete = (id: string) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const sortedTodos = [...todos].sort((a, b) => Number(a.completed) - Number(b.completed))

  return (
    <Card className="w-full flex-1 min-h-[320px] flex flex-col rounded-[2rem] shadow-xl overflow-hidden relative z-30">
      
      {/* Widget Header */}
      <div className="p-5 pb-4 flex items-center justify-between border-b border-primary/10 bg-card/40">
        <div className="flex items-center gap-3 text-foreground/90">
          <ListTodo className="w-5 h-5 text-primary" />
          <h3 className="font-medium text-lg tracking-wide">Tasks</h3>
        </div>
        <div className="text-xs font-semibold px-2.5 py-1 bg-primary/20 text-primary rounded-full">
          {todos.filter(t => !t.completed).length} remaining
        </div>
      </div>

      {/* Widget Body (Scrollable List) */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {sortedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
          {todos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 text-foreground/40 font-light text-sm"
            >
              All clear. Enjoy your peace of mind.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-primary/10 bg-card/30">
        <form onSubmit={handleAdd} className="relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Plus className="w-4 h-4 text-primary/50 group-focus-within:text-primary transition-colors" />
          </div>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a task..."
            className="pl-9 py-3 rounded-2xl bg-card/60 backdrop-blur-md border-primary/20 focus:ring-2 shadow-inner"
          />
        </form>
      </div>

    </Card>
  )
}
