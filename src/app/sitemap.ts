import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.seo.siteUrl;
  if (!base) return [];

  return [{ url: base, lastModified: new Date(), priority: 1 }];
}
