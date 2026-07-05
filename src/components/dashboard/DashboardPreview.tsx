import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PenSquare } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "../../lib/utils"
import { EmailList } from "./EmailList"
import { DUMMY_EMAILS } from "../../data/emails"
import { type Email, type Folder } from "./EmailRow"
import { type Todo } from "./TodoItem"
import { ReadingPane } from "./ReadingPane"
import { Sidebar } from "./Sidebar"
import { ComposeModal } from "./ComposeModal"
import { StatTiles } from "./StatTiles"
import { WeatherSliver } from "./WeatherSliver"
import { MoodCheckIn } from "./MoodCheckIn"
import { TodoList } from "./TodoList"
import { ProjectsPanel } from "./ProjectsPanel"
import { SettingsPanel } from "./SettingsPanel"

gsap.registerPlugin(ScrollTrigger)

const DEFAULT_TODOS: Todo[] = [
  { id: "1", text: "Take a deep breath", completed: false },
  { id: "2", text: "Review today's goals", completed: false },
]

const VIEWS = ["mail", "analytics", "projects", "settings"] as const
type View = (typeof VIEWS)[number]

const FOLDERS: Folder[] = ["inbox", "sent", "drafts", "archive"]
const PANE_HEIGHT = "h-[560px] lg:h-[680px]"

export function DashboardPreview() {
  const mockupRef = useRef<HTMLDivElement>(null)
  const [view, setView] = useState<View>("mail")
  const [emails, setEmails] = useState<Email[]>(DUMMY_EMAILS)
  const [folder, setFolder] = useState<Folder>("inbox")
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null)
  const [isComposing, setIsComposing] = useState(false)
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("serenify-todos")
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return []
      }
    }
    return DEFAULT_TODOS
  })

  useEffect(() => {
    localStorage.setItem("serenify-todos", JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    const mockup = mockupRef.current
    if (!mockup) return

    gsap.set(mockup, {
      opacity: 0,
      y: 120,
      scale: 0.75,
      rotateX: 14,
      transformPerspective: 1200,
      transformOrigin: "center top",
    })

    const tween = gsap.to(mockup, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      ease: "none",
    })

    const trigger = ScrollTrigger.create({
      trigger: mockup,
      start: "top 85%",
      end: "top 20%",
      scrub: true,
      pin: true,
      pinSpacing: true,
      animation: tween,
    })

    return () => {
      trigger.kill()
      tween.kill()
    }
  }, [])

  const selectedEmail = emails.find((e) => e.id === selectedEmailId) || null

  const handleSelectFolder = (nextFolder: Folder) => {
    setFolder(nextFolder)
    setSelectedEmailId(null)
  }

  const handleSend = ({ to, subject, body }: { to: string; subject: string; body: string }) => {
    const newEmail: Email = {
      id: crypto.randomUUID(),
      sender: to.trim() || "(no recipient)",
      subject: subject.trim() || "(no subject)",
      preview: body.trim(),
      time: "Just now",
      unread: false,
      folder: "sent",
    }
    setEmails([newEmail, ...emails])
    setIsComposing(false)
    setFolder("sent")
    setSelectedEmailId(null)
    setView("mail")
  }

  return (
    <section id="dashboard-mockup" className="relative z-20 px-6 md:px-16 pt-8 pb-32">
      <div
        ref={mockupRef}
        className="max-w-6xl mx-auto bg-card/50 backdrop-blur-2xl border border-primary/10 rounded-[2rem] shadow-2xl overflow-hidden"
      >
        {/* Window chrome bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-primary/10 bg-card/40">
          <div className="hidden sm:flex items-center gap-2 w-16">
            <div className="w-3 h-3 rounded-full bg-primary/40" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
          </div>

          <div className="flex gap-1 p-1 bg-background/40 rounded-full max-sm:w-full max-sm:justify-between overflow-x-auto">
            {VIEWS.map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={cn(
                  "px-3 sm:px-5 py-1.5 rounded-full text-sm font-medium capitalize transition-all whitespace-nowrap",
                  view === v
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/60 hover:text-foreground hover:bg-primary/10"
                )}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="hidden sm:block w-16" />
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <AnimatePresence mode="wait">
            {view === "mail" ? (
              <motion.div
                key="mail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                className={cn("relative w-full flex flex-col lg:flex-row gap-4 lg:gap-6", PANE_HEIGHT)}
              >
                {/* Compact folder bar replaces the sidebar below lg */}
                <div className="lg:hidden flex items-center gap-2 overflow-x-auto">
                  {FOLDERS.map((f) => (
                    <button
                      key={f}
                      onClick={() => handleSelectFolder(f)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium capitalize whitespace-nowrap transition-all",
                        folder === f
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-card/40 text-foreground/60 hover:text-foreground"
                      )}
                    >
                      {f}
                    </button>
                  ))}
                  <button
                    onClick={() => setIsComposing(true)}
                    aria-label="Compose"
                    className="ml-auto p-2.5 rounded-full bg-primary text-primary-foreground shadow-md flex-shrink-0"
                  >
                    <PenSquare className="w-4 h-4" />
                  </button>
                </div>

                <Sidebar
                  className="hidden lg:flex"
                  emails={emails}
                  activeFolder={folder}
                  onSelectFolder={handleSelectFolder}
                  onCompose={() => setIsComposing(true)}
                />

                <div className="relative flex-1 min-w-0 min-h-0 flex gap-6">
                  <EmailList
                    emails={emails}
                    folder={folder}
                    selectedId={selectedEmailId}
                    onSelect={setSelectedEmailId}
                    isExpanded={selectedEmailId === null}
                  />

                  <AnimatePresence mode="wait">
                    {selectedEmail && (
                      <ReadingPane
                        key="reading-pane"
                        email={selectedEmail}
                        onClose={() => setSelectedEmailId(null)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : view === "analytics" ? (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                className={cn("overflow-y-auto custom-scrollbar pr-1", PANE_HEIGHT)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-3">
                    <StatTiles emails={emails} todos={todos} />
                  </div>

                  <div className="flex flex-col gap-6">
                    <WeatherSliver />
                    <MoodCheckIn />
                  </div>

                  <div className="lg:col-span-2 flex">
                    <TodoList todos={todos} setTodos={setTodos} />
                  </div>
                </div>
              </motion.div>
            ) : view === "projects" ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                className={cn("overflow-y-auto custom-scrollbar pr-1", PANE_HEIGHT)}
              >
                <ProjectsPanel />
              </motion.div>
            ) : (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                className={cn("overflow-y-auto custom-scrollbar pr-1", PANE_HEIGHT)}
              >
                <SettingsPanel />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ComposeModal
        isOpen={isComposing}
        onClose={() => setIsComposing(false)}
        onSend={handleSend}
      />
    </section>
  )
}
