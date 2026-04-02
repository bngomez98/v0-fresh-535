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
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://fresh535.org${route}`,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
