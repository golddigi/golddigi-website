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
      location: { "@type": "Place", name: "Bhiwadi" },
      email: siteContact.email, telephone: siteContact.phone,
    },
    {
      "@type": "WebSite", "@id": websiteId,
      url: `${siteUrl}/`, name: "Golddigi", inLanguage: "en",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage", "@id": `${url}#webpage`,
      url, name: page.title, description: page.description,
      isPartOf: { "@id": websiteId }, inLanguage: "en",
      ...(isService ? { mainEntity: { "@id": `${url}#service` } } : {}),
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

  // Do not add offices, ratings, prices or service areas without real evidence.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
  }} />;
}
