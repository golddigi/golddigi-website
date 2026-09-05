import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://golddigi.com"),
  title: "Golddigi — Websites, Google Business Profile & AI Automations",
  description:
    "Custom websites, Google Business Profile optimization and management, and AI automations. Help customers find you, choose you, and get in touch. Built by Apurv.",
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
