import { absolutePageUrl, publicPages, type PublicPagePath } from "../seo";
import { siteContact, siteUrl } from "../site-config";

export function StructuredData({ path }: { path: PublicPagePath }) {
  const page = publicPages[path];
  const isService = page.kind === "service";
  const url = absolutePageUrl(path);
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization", "@id": organizationId,
      name: "Golddigi", url: `${siteUrl}/`,
      ...(page.kind === "about" ? {
        legalName: "GOLD DIGI",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "Udyam registration number",
          value: "UDYAM-RJ-02-0144798",
        },
      } : {}),
      location: { "@type": "Place", name: "Bhiwadi" },
      email: siteContact.email, telephone: siteContact.phone,
    },
    {
      "@type": "WebSite", "@id": websiteId,
      url: `${siteUrl}/`, name: "Golddigi", inLanguage: "en",
      publisher: { "@id": organizationId },
    },
    {
      "@type": page.kind === "about" ? "AboutPage" : "WebPage", "@id": `${url}#webpage`,
      url, name: page.title, description: page.description,
      isPartOf: { "@id": websiteId }, inLanguage: "en",
      ...(isService ? { mainEntity: { "@id": `${url}#service` } } : {}),
      ...(page.kind === "about" ? { about: { "@id": organizationId } } : {}),
    },
  ];

  if (isService) {
    graph.push({
      "@type": "Service", "@id": `${url}#service`,
      name: page.name, serviceType: page.name, url,
      description: page.description, provider: { "@id": organizationId },
      ...(path === "/websites/bhiwadi"
        ? { areaServed: { "@type": "City", name: "Bhiwadi" } }
        : {}),
    });
  }

  if (path === "/guides/tibet-market-bhiwadi") {
    Object.assign(graph[2], {
      datePublished: "2026-11-02", dateModified: "2026-11-03",
      about: { "@id": `${url}#market` },
      publisher: { "@id": organizationId },
    });
    graph.push({
      "@type": "Place", "@id": `${url}#market`,
      name: "Tibet Market Bhiwadi",
      alternateName: ["Tibetan Market Bhiwadi", "Tibbati Market Bhiwadi"],
      geo: { "@type": "GeoCoordinates", latitude: 28.20661, longitude: 76.82439 },
      hasMap: "https://www.google.com/maps/search/?api=1&query=28.20661%2C76.82439",
      description: "Current location supplied for Tibet Market Bhiwadi, Rajasthan. Previous directory locations are outdated.",
    }, {
      "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: page.name, item: url },
      ],
    });
  }

  // Do not add offices, ratings, prices or service areas without real evidence.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\u003c"),
  }} />;
}
