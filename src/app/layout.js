import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsapBtn from "@/components/WhatsapBtn";
import "@fontsource/orbitron/700.css";
import ScrollToTopButton from "@/components/ScrollToTop";
import Script from "next/script";
import { LanguageProvider } from "@/contexts/LanguageContext";
import HeaderHero from "@/components/Header";

const GA_ID = "G-6VJXJ3N9ZP";

// ═══════════════════════════════════════════════════════════════════════
// ORGANIZATION SCHEMA (JSON-LD)
// ⚠️ telephone is UNVERIFIED — confirm the +966-13 area code is correct
// before this goes live. Everything else below has been confirmed.
// ═══════════════════════════════════════════════════════════════════════
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": "https://www.sdi.com.sa/#organization",

  name: "Sadara Development Investment Company",
  alternateName: [
    "شركة صدارة التنمية للإستثمار",
    "SDI",
    "Sadara Investment",
    "صدارة",
  ],

  url: "https://www.sdi.com.sa",
  logo: {
    "@type": "ImageObject",
    url: "https://www.sdi.com.sa/sadara.png",
  },
  image: "https://www.sdi.com.sa/sadara.png",

  description:
    "Sadara Development Investment Company is a diversified holding company — the official unified legal entity for Al-Sheikh Commercial and Industrial Group — overseeing subsidiaries in telecommunications, real estate, oil & gas, manufacturing, and petroleum services across Saudi Arabia.",

  foundingDate: "1992",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al-Khobar",
      addressRegion: "Eastern Province",
      addressCountry: "SA",
    },
  },

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Al-Khobar Gate Tower, King Fahd Road, Al-Bandariyah District",
    addressLocality: "Al-Khobar",
    postalCode: "3422",
    addressCountry: "SA",
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+966-13-887-4122",
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["English", "Arabic"],
    },
  ],
  email: "info@sdi.com.sa",
  telephone: "+966-13-887-4122",

  sameAs: ["https://www.linkedin.com/company/al-sheikh-group-ksa"],

  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "400",
    unitText: "Professionals",
  },

  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },

  parentOrganization: {
    "@type": "Organization",
    name: "Al-Sheikh Commercial and Industrial Group",
  },

  subOrganization: [
    {
      "@type": "Corporation",
      name: "Saudi Call",
      alternateName: "Al-Sheikh Telecommunications Company",
      url: "https://www.saudi-call.com",
      foundingDate: "1992",
    },
    {
      "@type": "Organization",
      name: "Mawad Drilling",
      alternateName: "Drilling Materials Company",
      url: "https://www.drilling-materials.com",
      foundingDate: "2013",
    },
    {
      "@type": "Corporation",
      name: "Plastech",
      url: "https://www.plastech.com.sa/en/",
      foundingDate: "2015",
    },
    {
      "@type": "Corporation",
      name: "Jovae Industrial",
      alternateName: "Britex Detergents Factory",
      url: "https://www.britexksa.com",
      foundingDate: "2018",
    },
    {
      "@type": "Organization",
      name: "Wajd",
      url: "https://www.wajdfm.com/",
      foundingDate: "2020",
    },
    {
      "@type": "RealEstateAgent",
      name: "Ebreez Arabia",
      foundingDate: "2010",
    },
    {
      "@type": "Organization",
      name: "Salam Roads Petroleum Services",
      foundingDate: "2020",
    },
  ],

  knowsAbout: [
    "Telecommunications infrastructure",
    "Fiber optic networks",
    "FTTH solutions",
    "Industrial security systems",
    "Real estate development",
    "Drilling fluid additives",
    "Oil and gas services",
    "Plastic manufacturing",
    "PET preforms",
    "Industrial cleaning products",
    "Petroleum services",
    "Facility management",
    "Saudi Vision 2030",
  ],

  hasCertification: [
    { "@type": "Certification", name: "ISO 9001:2015" },
    { "@type": "Certification", name: "ISO 45001:2018" },
    { "@type": "Certification", name: "ISO 14001:2015" },
    { "@type": "Certification", name: "HCIS Approved" },
    { "@type": "Certification", name: "GMP Certified" },
    { "@type": "Certification", name: "API 13A" },
  ],

  industry: [
    "Holding Company",
    "Telecommunications",
    "Real Estate",
    "Oil & Gas",
    "Manufacturing",
    "Petroleum Services",
    "Security Systems",
    "Facility Management",
  ],

  slogan: "Unified ownership and management under one umbrella",
  mission:
    "Manage and develop a diversified investment portfolio founded on sound governance, innovation, and operational excellence—empowering subsidiaries and maximizing long-term returns.",
  vision:
    "To maximize value creation through expanding investment base, diversifying activities, and attracting promising opportunities locally and regionally.",
  values: [
    "Excellence",
    "Transparency",
    "Empowerment",
    "Innovation",
    "Responsibility",
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// WEBSITE SCHEMA (JSON-LD)
// This is what controls the site name Google shows above the URL
// in search results (e.g. "Sadara Development Investment" label).
// Without this, Google just shows the raw domain (sdi.com.sa).
// ═══════════════════════════════════════════════════════════════════════
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.sdi.com.sa/#website",
  name: "Sadara Development Investment",
  alternateName: "صدارة التنمية للاستثمار",
  url: "https://www.sdi.com.sa",
  description:
    "Sadara Development Investment Company — diversified holding company managing a portfolio of leading subsidiaries across telecom, real estate, oil & gas, manufacturing, and petroleum services in Saudi Arabia.",
  inLanguage: ["ar-SA", "en-US"],
  publisher: {
    "@id": "https://www.sdi.com.sa/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.sdi.com.sa/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const metadata = {
  title: "Sadara Development Investment |صدارة التنمية للاستثمار",
  description:
    "شركة صدارة التنمية للإستثمار - كيان قابض موحد يدير محفظة متنوعة من الشركات الرائدة في الاتصالات، العقار، النفط والغاز، التصنيع، والخدمات البترولية. نعمل من الخبر بالمنطقة الشرقية لدعم رؤية السعودية 2030 من خلال التميز التشغيلي والحوكمة.",
  keywords: [
    // Company identity
    "Sadara Development",
    "شركة صدارة التنمية للإستثمار",
    "Sadara Investment Company",
    "Al-Sheikh Group",
    "شركة القابضة",
    "holding company Saudi Arabia",
    "استثمار في السعودية",

    // Subsidiaries
    "Saudi Call",
    "السعودية كول",
    "Ebreez Arabia",
    "إبريز العربية",
    "Mawad Drilling",
    "مواد الحفر",
    "Plastech",
    "بلاستك",
    "Jovae",
    "جوفاي",
    "Britex Detergents",
    "Salam Station",
    "محطة سلام",

    // Core Sectors
    "اتصالات السعودية",
    "تطوير عقاري الخبر",
    "خدمات بترولية",
    "تصنيع بلاستيك",
    "منظفات صناعية",
    "أبراج اتصالات",
    "ألياف بصرية",

    // Services & Industries
    "Telecommunications infrastructure",
    "Fiber optic networks",
    "Industrial security systems",
    "Real estate development Khobar",
    "Drilling fluid additives",
    "Oil and gas services",
    "Plastic manufacturing",
    "PET preforms",
    "Industrial containers",
    "Household detergents",
    "Fuel stations Saudi Arabia",
    "Facility management",

    // Vision 2030
    "رؤية السعودية 2030",
    "توطين الصناعة",
    "التميز المؤسسي",
    "حوكمة الشركات",

    // Locations
    "الخبر",
    "المنطقة الشرقية",
    "Al-Khobar",
    "Eastern Province Saudi Arabia",
    "King Fahd Road Khobar",

    // Values & Quality
    "استثمار متنوع",
    "كفاءة عالية",
    "معايير الحوكمة",
    "ISO certified",
    "HCIS approved",
    "جودة وكفاءة",
    "تنمية مستدامة",

    // Specific Industry Terms
    "FTTH solutions",
    "drilling chemicals API standards",
    "blow molding",
    "injection molding",
    "industrial minerals",
    "security systems HCIS",
    "petroleum services",
    "commercial towers Khobar",

    // ── Client-approved keywords (English) — from Sadara_Website_seo.xlsx ──
    "Sadara",
    "Sadara Investment",
    "Sadara Company",
    "Sadara Development Investment",
    "SDI Saudi Arabia",
    "Saudi Investment Company",
    "Investment Holding Company",
    "Investment Management",
    "Strategic Investments",
    "Business Development",
    "Project Development",
    "Investment Opportunities",
    "Corporate Investments",
    "Private Investment Company",
    "Asset Management",
    "Investment Advisory",
    "Strategic Partnerships",
    "Business Growth Solutions",
    "Economic Development",
    "Saudi Vision 2030",
    "Investment Solutions",
    "Commercial Investments",
    "Sustainable Investments",
    "Saudi Business Investments",
    "Investment Portfolio Management",
    "Business Expansion",
    "Investment Consulting",
    "Development Investments",

    // ── Client-approved keywords (Arabic) — from Sadara_Website_seo.xlsx ──
    "صدارة",
    "صدارة للاستثمار",
    "شركة صدارة",
    "صدارة التنمية للاستثمار",
    "شركة صدارة التنمية للاستثمار",
    "شركة استثمار سعودية",
    "شركة استثمار قابضة",
    "إدارة الاستثمارات",
    "الاستثمارات الاستراتيجية",
    "تطوير الأعمال",
    "تطوير المشاريع",
    "الفرص الاستثمارية",
    "الاستثمار المؤسسي",
    "إدارة الأصول",
    "الاستشارات الاستثمارية",
    "الشراكات الاستراتيجية",
    "تنمية الأعمال",
    "التنمية الاقتصادية",
    "رؤية السعودية 2030",
    "الحلول الاستثمارية",
    "الاستثمار التجاري",
    "الاستثمار المستدام",
    "الاستثمار في المملكة العربية السعودية",
    "إدارة المحافظ الاستثمارية",
    "توسيع الأعمال",
    "تطوير الفرص الاستثمارية",
    "الاستثمارات التنموية",
    "الخدمات الاستثمارية",
  ].join(", "),
  robots: "index, follow",
  authors: [{ name: "Sadara Development Investment Company" }],
  creator: "Sadara Development Investment Company",
  publisher: "Sadara Development Investment Company",

  openGraph: {
    title: "Sadara Development Investment | صدارة التنمية للاستثمار",
    description:
      "نحن الكيان القانوني الموحد لمجموعة آل الشيخ التجارية والصناعية. نشرف على محفظة استثمارية متنوعة في قطاعات الاتصالات، النفط والغاز، العقار، التصنيع، والأمن الصناعي. مقرنا الخبر، المملكة العربية السعودية.",
    url: "https://www.sdi.com.sa",
    siteName: "Sadara Development Investment Company",
    images: [
      {
        url: "/sadara-og-image.jpg", // Replace with actual Sadara OG image path
        width: 1200,
        height: 630,
        alt: "Sadara Development Investment Company - شركة صدارة التنمية للإستثمار",
      },
    ],
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sadara Development | استثمار متنوع - كيان قابض موحد",
    description:
      "نشرف على مجموعة شركات رائدة: سعودي كول، إبريز العربية، مواد الحفر، بلاستك، جوفاي، ومحطة سلام. التميز والحوكمة عنواننا.",
    images: ["/sadara-twitter-image.jpg"], // Replace with actual path
    creator: "@SadaraDev", // Replace with actual handle if exists
    site: "@SadaraDev",
  },

  alternates: {
    canonical: "https://www.sdi.com.sa/",
    languages: {
      ar: "https://www.sdi.com.sa/ar",
      en: "https://www.sdi.com.sa/en",
    },
  },

  category: "business",
  classification: "Holding Company | Investment Development",
  verification: {
    google: "nXhMcXK-Z4Beqdbwev7yymXXnLmfF5kOc_h-eK55NLY",
  },
  icons: {
    icon: "/sadara.png",
    shortcut: "/sadara.png",
    apple: "/sadara.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" translate="no">
      <head>
        {/* Brand fonts: Somar Arabic (Arabic) and Madani (English) are loaded via @font-face in globals.css */}
        {/* Font files should be placed in /public/fonts/ directory */}

        <link href="/sadara.png" type="image/png" rel="icon" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
<meta name="google-site-verification" content="nh35F21_MqhMflkuMnvNRmOTdxcSqKa_gAZW2loCnok" />

        {/* Organization + WebSite Schema (JSON-LD) */}
        {/* Organization tells Google this is a real verified business */}
        {/* WebSite tells Google what name to show above the URL in search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />

        {/* Google Analytics GA4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          page_path: window.location.pathname,
        });
      `,
          }}
        />
        {/* Preload Madani fonts */}
      </head>
      <body style={{ fontFamily: "'Somar Arabic', 'Madani', sans-serif" }}>
        <LanguageProvider>
          <HeaderHero />
          <div className="">{children}</div>
          {/* <WhatsapBtn /> */}
          <Footer />
          <ScrollToTopButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
