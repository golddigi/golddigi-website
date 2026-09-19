import type { MetadataRoute } from "next";
import { absolutePageUrl, publicPages, type PublicPagePath } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(publicPages) as PublicPagePath[]).map(
    (path) => ({ url: absolutePageUrl(path) }),
  );
}
