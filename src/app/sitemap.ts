import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.seo.siteUrl;
  if (!base) return [];

  const routes = [
    { path: "", priority: 1 },
    { path: "/expertise", priority: 0.8 },
    { path: "/firm", priority: 0.8 },
    { path: "/contact", priority: 0.6 },
    ...(business.team.length > 0 ? [{ path: "/team", priority: 0.8 }] : []),
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    priority: r.priority,
  }));
}
