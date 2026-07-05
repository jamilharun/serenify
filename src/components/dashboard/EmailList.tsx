import { Search, Filter, Inbox } from "lucide-react";
import { EmailRow, type Email, type Folder } from "./EmailRow";
import { motion } from "framer-motion";
import { Input } from "../ui/Input";
import { useMediaQuery } from "../../lib/useMediaQuery";


interface EmailListProps {
  emails: Email[];
  folder: Folder;
  selectedId: string | null;
  onSelect: (id: string) => void;
  isExpanded?: boolean;
}

const FOLDER_LABELS: Record<Folder, string> = {
  inbox: "Inbox",
  sent: "Sent",
  drafts: "Drafts",
  archive: "Archive",
};

export function EmailList({
  emails,
  folder,
  selectedId,
  onSelect,
  isExpanded = false,
}: EmailListProps) {
  const filteredEmails = emails.filter((email) => email.folder === folder);
  // Below lg the reading pane overlays the list, so the list always spans full width
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div
      initial={false}
      animate={{ width: isDesktop && !isExpanded ? 420 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-card/20 backdrop-blur-2xl border border-primary/10 rounded-3xl shadow-xl overflow-hidden flex flex-col h-full flex-shrink-0"
    >
      {/* Header Toolbar */}
      <div className="p-4 border-b border-primary/10 bg-card/40 flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="font-semibold text-lg text-foreground tracking-wide">
            {FOLDER_LABELS[folder]}
          </h3>
          <button aria-label="Filter emails" className="p-2 rounded-full border border-primary/10 hover:bg-primary/10 text-foreground/60 hover:text-foreground transition-all">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        <div className="relative group px-2">
          <Search className="w-4 h-4 text-foreground/40 absolute left-5 top-1/2 -translate-y-1/2 group-focus-within:text-primary transition-colors" />
          <Input
            type="text"
            placeholder="Search emails..."
            className="pl-9 py-2"
          />
        </div>
      </div>

      {/* List Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
        {filteredEmails.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-foreground/40 py-12">
            <Inbox className="w-8 h-8" />
            <p className="text-sm font-light">No emails in this folder.</p>
          </div>
        ) : (
          filteredEmails.map((email) => (
            <EmailRow
              key={email.id}
              email={email}
              selected={email.id === selectedId}
              onClick={() => onSelect(email.id)}
              isExpanded={isExpanded}
            />
          ))
        )}
      </div>
    </motion.div>
  );
}
