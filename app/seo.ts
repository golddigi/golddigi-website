import type { Metadata } from "next";
import { siteUrl } from "./site-config";

// Register only complete, public pages here. Metadata and crawl discovery share
// this list so unpublished city pages cannot accidentally enter the sitemap.
export const publicPages = {
  "/websites/bhiwadi": {
    kind: "service",
    title: "Website Design in Bhiwadi | Business Websites | Golddigi",
    name: "Website design in Bhiwadi",
    description: "Bhiwadi-based website design for business services, product catalogues and portfolios. Explore real projects and plan your website with remote reviews.",
  },
  "/": {
    kind: "home",
    title: "Web Design, Google Business Profile & Automation | Golddigi",
    name: "Websites, Google Business Profile & AI automations",
    description: "Custom business websites, Google Business Profile management and AI automations. Explore our projects and discuss your website, local presence or workflow.",
  },
  "/websites": {
    kind: "service",
    title: "Website Design & Development Services | Golddigi",
    name: "Website design and development",
    description: "Custom website design and development for small businesses. Explore real projects, responsive design, editable content, hosting and enquiry options.",
  },
  "/google-business-profile": {
    kind: "service",
    title: "Google Business Profile Optimization & Management | Golddigi",
    name: "Google Business Profile optimization and management",
    description: "Google Business Profile optimization and management for local businesses: business details, services, photos, review replies and performance reporting.",
  },
  "/ai-automations": {
    kind: "service",
    title: "WhatsApp, Email & IndiaMART Automations | Golddigi",
    name: "AI automation services",
    description: "Explore AI agents for WhatsApp conversations and email replies, plus automated IndiaMART lead capture. Practical n8n workflows built around your business.",
  },
  "/case-studies/whatsapp-campaign-water-treatment": {
    kind: "case-study",
    title: "WhatsApp Campaign Case Study: ₹189.88 to ₹4 Lakh Sales | Golddigi",
    name: "Water treatment WhatsApp campaign case study",
    description: "See how two months of website, catalogue, search and Google Business Profile work supported a three-day WhatsApp campaign and ₹4 lakh in client-reported gross sales.",
  },
  "/work/shivom-designs": {
    kind: "project",
    title: "Shivom Designs Website Project | Golddigi",
    name: "Shivom Designs website project",
    description: "Explore a website project for an Ahmedabad interior design business, with service information, a visual portfolio, FAQs and clear enquiry options.",
  },
  "/work/daksha-enterprises": {
    kind: "project",
    title: "Daksha Enterprises Website Project | Golddigi",
    name: "Daksha Enterprises website project",
    description: "Explore a product-led website for a Bhiwadi water treatment supplier, with product categories, plant services, technical details and enquiry paths.",
  },
} as const;

export type PublicPagePath = keyof typeof publicPages;

export function pageMetadata(path: PublicPagePath): Metadata {
  const { title, description } = publicPages[path];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title, description, url: path,
      type: "website", locale: "en_IN", siteName: "Golddigi",
    },
    twitter: { card: "summary", title, description },
  };
}

export function absolutePageUrl(path: PublicPagePath) {
  return new URL(path, siteUrl).href;
}
