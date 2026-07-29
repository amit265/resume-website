import { siteUrl } from "../lib/site-config";
import { projects } from "../lib/site-data";

export default function sitemap() {
  const lastModified = new Date("2026-07-28");

  const routes = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: project.featured ? 0.9 : 0.7,
    })),
  ];

  return routes;
}
