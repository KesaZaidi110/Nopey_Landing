import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nopey — Find the subscriptions you forgot you're paying for",
  description:
    "Upload a bank statement and Nopey finds every recurring charge, shows the true yearly cost, and gives you step-by-step guides to cancel. Join the waitlist today.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Nopey — Say nope to subscriptions you forgot you had",
    description:
      "Upload a bank statement. Nopey finds every recurring charge, shows what it really costs per year, and tells you what to cancel. Join the waitlist.",
    url: SITE_URL,
    siteName: "Nopey",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nopey — Find and cancel forgotten subscriptions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nopey — Say nope to subscriptions you forgot you had",
    description:
      "Upload a bank statement. Nopey finds every recurring charge, shows what it really costs per year, and tells you what to cancel.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "subscription tracker",
    "cancel subscriptions",
    "bank statement analyzer",
    "recurring charges",
    "subscription management",
    "personal finance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
