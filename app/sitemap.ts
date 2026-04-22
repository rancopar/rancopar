import type { MetadataRoute } from "next";
import { projects } from "./lib/projects";

const SITE_URL = "https://rancopar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL,               lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/work`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((p) => ({
      url: `${SITE_URL}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
