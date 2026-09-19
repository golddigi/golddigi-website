import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS Dashboard | Golddigi",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <h1>CMS Dashboard</h1>;
}
