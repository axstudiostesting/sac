// import { SERVICES } from "@/utils/globalUtils";
// export const dynamic = "force-static";
// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://iesksa.com";
// const LAST_MOD = new Date().toISOString();

// // Priority tiers for different page types
// const PRIORITY = {
//   STATIC: "0.8",
//   SERVICE: "0.7",
//   DYNAMIC: "0.6",
// };

// // Common URL template generator
// const generateUrlNode = (loc, priority, changefreq = "weekly") => `
//   <url>
//     <loc>${loc}</loc>
//     <lastmod>${LAST_MOD}</lastmod>
//     <changefreq>${changefreq}</changefreq>
//     <priority>${priority}</priority>
//   </url>
// `;

// export async function GET() {
//   // 1. Core static pages
//   const staticPages = ["", "news", "about", "contact", "projects", "services"]; // Added empty string for root

//   // 2. Service category pages
//   const serviceCategories = Object.keys(SERVICES).map(
//     (route) => `${SITE_URL}${route}`
//   );

//   // 3. Generate all URL entries
//   const urlEntries = [
//     // Homepage and static pages
//     ...staticPages.map((page) =>
//       generateUrlNode(
//         `${SITE_URL}/${page}`.replace("//", "/"), // Fix double slash
//         PRIORITY.STATIC,
//         page === "" ? "daily" : "weekly" // Homepage gets daily crawl
//       )
//     ),

//     // Service category pages
//     ...serviceCategories.map((loc) => generateUrlNode(loc, PRIORITY.SERVICE)),
//   ].join("");

//   // 4. Build final sitemap
//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${urlEntries}
//     </urlset>`;

//   return new Response(sitemap, {
//     headers: {
//       "Content-Type": "application/xml",
//       "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600", // 24h cache
//     },
//   });
// }
