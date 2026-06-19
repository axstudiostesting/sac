// src/app/sitemap.js
// Next.js auto-serves this as https://www.sdi.com.sa/sitemap.xml
//
// This sitemap pulls company / media / sector slugs LIVE from translations.js
// so when you add a new company, news article, or sector, the sitemap updates
// automatically on the next build — no manual editing needed here.

import { translations } from "../utils/translations";

const baseUrl = "https://www.sdi.com.sa";

export default function sitemap() {
  const lastModified = new Date();

  // ── Static pages ──────────────────────────────────────────────────────
  const staticRoutes = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/careers`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/companies`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/media`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/sectors`, changeFrequency: "monthly", priority: 0.9 },
  ].map((route) => ({ ...route, lastModified }));

  // ── Dynamic: Companies (from translations.en.companies.data) ───────────
  const companies = translations?.en?.companies?.data || [];
  const companyRoutes = companies.map((company) => ({
    url: `${baseUrl}/companies/${company.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── Dynamic: Media / News / Events (from translations.en.media.items) ──
  const mediaItems = translations?.en?.media?.items || [];
  const mediaRoutes = mediaItems.map((item) => ({
    url: `${baseUrl}/media/${item.slug}`,
    lastModified,
    changeFrequency: "yearly", // articles rarely change after publishing
    priority: 0.6,
  }));

  // ── Dynamic: Sectors ─────────────────────────────────────────────────
  // NOTE: sectors/[slug]/page.js uses hyphenated slugs (e.g. "telecom-it"),
  // which differ from the underscored keys in translations.js services.detail
  // (e.g. "telecom_it"). Hardcoded here to match the REAL routes that exist.
  const sectorSlugs = [
    "telecom-it",
    "industrial-security",
    "facility-management",
    "oil-gas",
    "manufacturing",
    "real-estate",
  ];
  const sectorRoutes = sectorSlugs.map((slug) => ({
    url: `${baseUrl}/sectors/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...companyRoutes, ...mediaRoutes, ...sectorRoutes];
}
