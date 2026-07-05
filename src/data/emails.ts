import { type Email } from "../components/dashboard/EmailRow";

export const DUMMY_EMAILS: Email[] = [
  {
    id: "1",
    sender: "Alex at Serenify",
    subject: "Welcome to your new flow",
    preview:
      "We're so glad you're here. Let's get started by exploring your themes and widgets...",
    time: "9:41 AM",
    unread: true,
    folder: "inbox",
  },
  {
    id: "2",
    sender: "Design Team",
    subject: "New assets for the upcoming launch",
    preview:
      "Attached are the final Figma files for the Q3 marketing push. Let me know if you need any adjustments.",
    time: "Yesterday",
    unread: true,
    folder: "inbox",
  },
  {
    id: "3",
    sender: "GitHub",
    subject: "[serenify-ui] Pull Request #42 merged",
    preview:
      "The email dashboard layout has been successfully merged into main.",
    time: "Yesterday",
    unread: false,
    folder: "inbox",
  },
  {
    id: "4",
    sender: "Sarah Jenkins",
    subject: "Coffee tomorrow?",
    preview:
      "Hey! Are we still on for coffee at Bluebottle tomorrow morning? Let me know!",
    time: "Oct 12",
    unread: false,
    folder: "inbox",
  },
  {
    id: "5",
    sender: "Maya Torres",
    subject: "Feedback on the mood check-in feature",
    preview:
      "Just tried it out this morning — really like how it ties into the theme switcher. One small suggestion...",
    time: "8:15 AM",
    unread: true,
    folder: "inbox",
  },
  {
    id: "6",
    sender: "Linear",
    subject: "[SER-128] Assigned to you",
    preview:
      "\"Polish empty states across dashboard tabs\" was assigned to you by Jordan Lee.",
    time: "Yesterday",
    unread: false,
    folder: "inbox",
  },
  {
    id: "7",
    sender: "Priya Nair",
    subject: "Weekly sync notes",
    preview:
      "Sharing notes from today's sync — action items are at the bottom, nothing urgent for you this week.",
    time: "Oct 14",
    unread: false,
    folder: "inbox",
  },
  {
    id: "8",
    sender: "Calendly",
    subject: "New booking: Design review",
    preview:
      "Tom Reyes booked a 30 minute Design Review with you for Thursday at 2:00 PM.",
    time: "Oct 13",
    unread: false,
    folder: "inbox",
  },
  {
    id: "9",
    sender: "Notion",
    subject: "Your workspace summary",
    preview:
      "You have 3 tasks due this week. Review your workspace for details.",
    time: "Oct 10",
    unread: false,
    folder: "archive",
  },
  {
    id: "10",
    sender: "Stripe",
    subject: "Payment successfully processed",
    preview: "Your payment of $29.00 for the Pro Plan has been processed.",
    time: "Oct 08",
    unread: false,
    folder: "archive",
  },
  {
    id: "11",
    sender: "Figma",
    subject: "Your file was viewed 12 times this week",
    preview:
      "\"Serenify Dashboard v2\" is getting attention — see who's been viewing your file.",
    time: "Oct 05",
    unread: false,
    folder: "archive",
  },
  {
    id: "12",
    sender: "Vercel",
    subject: "Deployment successful",
    preview:
      "serenify-ui was deployed to production. Build completed in 42s.",
    time: "Oct 02",
    unread: false,
    folder: "archive",
  },
  {
    id: "13",
    sender: "You",
    subject: "Re: Coffee tomorrow?",
    preview: "Yes, let's do 9am at Bluebottle, see you there!",
    time: "Oct 12",
    unread: false,
    folder: "drafts",
  },
  {
    id: "14",
    sender: "You",
    subject: "Q3 recap for the team",
    preview:
      "Wanted to share a quick recap before Friday's meeting — still working on the numbers for the last...",
    time: "Oct 11",
    unread: false,
    folder: "drafts",
  },
  {
    id: "15",
    sender: "You",
    subject: "Re: New assets for the upcoming launch",
    preview: "Thanks, these look great. Sending to the client today.",
    time: "Oct 09",
    unread: false,
    folder: "sent",
  },
  {
    id: "16",
    sender: "You",
    subject: "Re: Weekly sync notes",
    preview: "Sounds good, I'll pick up the onboarding task this week.",
    time: "Oct 14",
    unread: false,
    folder: "sent",
  },
];
