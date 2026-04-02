import type { MetadataRoute } from "next"

const routes = [
  "",
  "/about",
  "/problem",
  "/solution",
  "/methodology",
  "/faq",
  "/contact",
  "/pledge",
  "/donate",
  "/resources",
  "/my-district",
  "/resources/flyer",
  "/resources/data-packet",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map((route) => ({
    url: `https://fresh535.org${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
