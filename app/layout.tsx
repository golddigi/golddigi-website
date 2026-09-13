import type { Metadata } from "next";
import { siteUrl } from "./site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Golddigi — Websites, Google Business Profile & AI Automations",
  description:
    "Custom websites, Google Business Profile optimization and management, and AI automations that help customers find, choose, and contact your business.",
  openGraph: {
    title: "Golddigi — Websites, Google Business Profile & AI Automations",
    description: "Get found. Get chosen. Work smarter. Custom websites, Google Business Profile optimization, and practical AI automations for your business.",
    type: "website",
    locale: "en_IN",
    siteName: "Golddigi",
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
