export const projects = {
  "shivom-designs": {
    path: "/work/shivom-designs" as const,
    name: "Shivom Designs",
    category: "Architecture & interiors",
    website: "https://www.shivomdesigns.com/",
    domain: "shivomdesigns.com",
    image: "/projects/shivom.png",
    theme: "shivom",
    location: "Ahmedabad, Gujarat",
    summary: "A service and portfolio website for an interior design business working across residential, commercial, retail and healthcare spaces.",
    challenge: "An interior design website needs to make visual work easy to explore while still explaining the services, process and next step for a prospective client.",
    solution: "The site brings service information, project imagery, FAQs and enquiry options into one clear journey. Visitors can move from the type of space they need to examples of work and then contact the business.",
    details: [
      "Residential and commercial interior design service sections",
      "A visual portfolio with project categories",
      "Frequently asked questions about the design process",
      "Contact form, phone and WhatsApp enquiry options",
    ],
    evidence: "The live website currently presents the business in Ahmedabad and describes residential, commercial, retail and hospital interior work.",
  },
  "daksha-enterprises": {
    path: "/work/daksha-enterprises" as const,
    name: "Daksha Enterprises",
    category: "Water treatment & industrial supply",
    website: "https://daksha-enterprises.com/",
    domain: "daksha-enterprises.com",
    image: "/projects/daksha-enterprises.png",
    theme: "daksha",
    location: "Bhiwadi, Rajasthan",
    summary: "A product-led website for a Bhiwadi supplier of RO systems, water treatment chemicals, equipment and plant setup services.",
    challenge: "A large technical range can become difficult to browse. Buyers need to find the right category, understand the available specifications and send enough information for a useful quotation.",
    solution: "The website organizes products by category and application, explains plant setup services, and connects product pages to enquiry actions. Technical questions and ordering steps help buyers prepare the details the supplier needs.",
    details: [
      "Product categories for RO systems, chemicals, filters and equipment",
      "Application-led routes for boiler, cooling tower, ETP and STP needs",
      "RO, ETP/STP and cooling-tower plant setup service pages",
      "Product-aware enquiry paths, downloads and technical FAQs",
    ],
    evidence: "The live website identifies Golddigi as its designer and maintainer and currently lists its Bhiwadi address, catalogue categories and plant services.",
  },
} as const;

export type ProjectSlug = keyof typeof projects;
