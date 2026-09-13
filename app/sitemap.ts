import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/websites", "/google-business-profile", "/ai-automations"].map(
    (path) => ({ url: `${siteUrl}${path}` }),
  );
}
