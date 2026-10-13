// ─────────────────────────────────────────────
//  Nopey – Site constants
// ─────────────────────────────────────────────

/** Replace with your real Tally / form endpoint */
export const WAITLIST_URL = "https://formspree.io/f/mdeawdvg";

export const SITE_URL = "https://nopey.app";

export const FAQ_ITEMS = [
  {
    question: "Is it safe to upload my bank statement?",
    answer:
      "We built Nopey around one principle: your data is yours. Your statement is processed only to identify recurring charges and is never stored on our servers longer than your session. You can delete everything at any time. We don't share or sell your data.",
  },
  {
    question: "How much will Nopey cost?",
    answer:
      "We'll announce pricing when we launch. Waitlist members will receive early-bird pricing - so joining now is the best way to lock in a lower rate.",
  },
  {
    question: "Which banks and statement formats work?",
    answer:
      "We're designing Nopey to work with standard CSV exports that most US banks provide. Exact bank compatibility will be confirmed at launch - we're actively testing across the major providers.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. Nopey is a tracking tool, not financial advice. We surface information from your own statements to help you make more informed decisions. Nothing in the app should be taken as a recommendation to invest, borrow, or take any financial action.",
  },
  {
    question: "When does Nopey launch?",
    answer:
      "We're in early development. Join the waitlist to be first in line - we'll send you updates as we get closer to launch, and waitlist members will get access before anyone else.",
  },
];

export const FEATURES = [
  {
    icon: "📈",
    title: "Price-Hike Alerts",
    description:
      "Get notified the moment a service quietly bumps its price - before your next billing cycle.",
    accent: "coral",
  },
  {
    icon: "🔔",
    title: "Renewal Reminders",
    description:
      "Never get blindsided by an annual renewal. We remind you days before it hits.",
    accent: "lime",
  },
  {
    icon: "📊",
    title: "True Yearly Cost",
    description:
      "See every recurring charge expressed as what it actually costs you over a year.",
    accent: "green",
  },
  {
    icon: "🗺️",
    title: "Cancel Guides",
    description:
      "Step-by-step instructions for cancelling the most stubborn subscriptions.",
    accent: "lime",
  },
  {
    icon: "⚠️",
    title: "Free-Trial Warnings",
    description:
      "Spot trials that are about to convert to paid plans before they do.",
    accent: "coral",
  },
  {
    icon: "🔒",
    title: "Privacy-First",
    description:
      "No accounts needed to try it. Your statement data is never sold or shared.",
    accent: "green",
  },
];
