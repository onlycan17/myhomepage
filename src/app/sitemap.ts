import type { MetadataRoute } from "next";

import { getAllPostSlugs } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPostSlugs();

  return [
    {
      url: "https://onlycan17.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://onlycan17.vercel.app/blog",
      lastModified: new Date(),
    },
    ...slugs.map((slug) => ({
      url: `https://onlycan17.vercel.app/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
