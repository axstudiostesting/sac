// src/app/robots.js
// Next.js auto-serves this as https://www.sdi.com.sa/robots.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/terms-and-conditions"],
      },
    ],
    sitemap: "https://www.sdi.com.sa/sitemap.xml",
    host: "https://www.sdi.com.sa",
  };
}
