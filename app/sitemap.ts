import type { MetadataRoute } from "next";
import { CLUBS, clubSlug } from "@/lib/data";

const BASE = "https://club-500.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "", "/clubs", "/clubs/apply", "/fanzone", "/volunteer", "/partners",
    "/events", "/about", "/newsroom", "/podcast", "/journalist", "/login",
    "/privacy", "/terms",
  ].map((p) => ({ url: `${BASE}${p}`, lastModified: new Date() }));
  const clubs = CLUBS.map(([name]) => ({
    url: `${BASE}/clubs/${clubSlug(name)}`,
    lastModified: new Date(),
  }));
  return [...pages, ...clubs];
}
