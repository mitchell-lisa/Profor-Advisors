import type { MetadataRoute } from "next";
import { isPrivate, business } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  if (isPrivate) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: business.seo.siteUrl
      ? `${business.seo.siteUrl}/sitemap.xml`
      : undefined,
  };
}
