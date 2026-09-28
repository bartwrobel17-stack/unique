import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://unique.wroc.pl", lastModified: new Date() }];
}