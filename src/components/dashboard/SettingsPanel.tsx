import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Bell, Archive, LayoutList, Volume2, Calendar, UserPlus } from "lucide-react"
import { cn } from "../../lib/utils"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

type Preference = {
  key: string
  label: string
  description: string
  icon: typeof Mail
  checked: boolean
}

const DEFAULT_PREFERENCES: Preference[] = [
  { key: "email", label: "Email notifications", description: "Get notified about new messages", icon: Mail, checked: true },
  { key: "desktop", label: "Desktop notifications", description: "Show alerts on your desktop", icon: Bell, checked: false },
  { key: "archive", label: "Auto-archive read mail", description: "Keep your inbox tidy automatically", icon: Archive, checked: true },
  { key: "compact", label: "Compact list view", description: "Show more emails per screen", icon: LayoutList, checked: false },
  { key: "sound", label: "Sound effects", description: "Play a sound for new activity", icon: Volume2, checked: false },
  { key: "digest", label: "Weekly digest email", description: "A summary of your week, every Monday", icon: Calendar, checked: true },
]

type TeamMember = {
  name: string
  role: "Admin" | "Editor" | "Viewer"
  initial: string
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Sarah Chen", role: "Admin", initial: "S" },
  { name: "Alex Rivera", role: "Editor", initial: "A" },
  { name: "Maria Gomez", role: "Editor", initial: "M" },
  { name: "Jordan Lee", role: "Viewer", initial: "J" },
]

const ROLE_STYLES: Record<TeamMember["role"], string> = {
  Admin: "bg-primary/25 text-primary",
  Editor: "bg-primary/15 text-primary",
  Viewer: "bg-foreground/10 text-foreground/60",
}

function Toggle({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={checked}
      className={cn(
        "w-11 h-6 rounded-full transition-colors relative flex-shrink-0",
        checked ? "bg-primary" : "bg-foreground/15"
      )}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white shadow-sm absolute top-1"
        animate={{ left: checked ? "1.5rem" : "0.25rem" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  )
}

export function SettingsPanel() {
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES)
  const [inviteEmail, setInviteEmail] = useState("")

  const togglePreference = (key: string) => {
    setPreferences((prev) => prev.map((p) => (p.key === key ? { ...p, checked: !p.checked } : p)))
  }

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inviteEmail.trim()) return
    setInviteEmail("")
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center gap-3 p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-md">
            S
          </div>
          <div>
            <p className="font-semibold text-foreground">Sarah Chen</p>
            <p className="text-sm text-foreground/50">sarah@serenify.app</p>
          </div>
          <Button variant="outline" size="sm" className="mt-2 bg-card/60 border-primary/10">
            Edit Profile
          </Button>
        </Card>

        <Card className="md:col-span-2 flex flex-col gap-1 p-6">
          <h4 className="font-semibold text-foreground mb-3">Preferences</h4>
          {preferences.map(({ key, label, description, icon: Icon, checked }) => (
            <div key={key} className="flex items-center justify-between gap-4 py-3 border-b border-primary/10 last:border-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{label}</p>
                  <p className="text-xs text-foreground/50 truncate">{description}</p>
                </div>
              </div>
              <Toggle checked={checked} onToggle={() => togglePreference(key)} />
            </div>
          ))}
        </Card>
      </div>

      <Card className="p-6">
        <h4 className="font-semibold text-foreground mb-4">Team Members</h4>

        <div className="flex flex-col gap-1 mb-4">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="flex items-center justify-between gap-4 py-2.5 border-b border-primary/10 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-sm font-bold text-foreground flex-shrink-0">
                  {member.initial}
                </div>
                <p className="text-sm font-medium text-foreground">{member.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium", ROLE_STYLES[member.role])}>
                  {member.role}
                </span>
                <button className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleInvite} className="flex gap-2">
          <Input
            type="email"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder="Invite by email..."
            className="flex-1"
          />
          <Button type="submit" size="sm" className="py-2.5 flex-shrink-0">
            <UserPlus className="w-4 h-4" />
            Invite
          </Button>
        </form>
      </Card>
    </div>
  )
}
