import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G — Building Websites for Trust and Sales",
  description:
    "Websites designed around your business to build trust, increase traffic, and turn visits into sales.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
