import CompaniesSection from "@/components/CompaniesSection";
import MinimalCompaniesSection from "@/components/MinimalCompanies";
import DynamicTitle from "@/components/DynamicTitle";

// companies/page.js or subsidiaries/page.js

export const metadata = {
  title:
    "شركاتنا | شركة صدارة التنمية للإستثمار - محفظتنا الاستثمارية المتنوعة (6 شركات رائدة)",
  description:
    "تعرف على شركات سدارى التابعة: سعودي كول (الاتصالات والأمن الصناعي)، إبريز العربية (التطوير العقاري)، مواد الحفر (إضافات سوائل الحفر)، بلاستك (المنتجات البلاستيكية)، جوفاي (المنظفات المنزلية والصناعية)، ومحطة سلام (الخدمات البترولية).",
  keywords: [
    // Main companies keywords
    "شركات سدارى",
    "الشركات التابعة لسدارى",
    "محفظة سدارى الاستثمارية",
    "Sadara companies",
    "Sadara subsidiaries",
    "شركات مجموعة آل الشيخ",

    // All 6 companies
    "شركة سعودي كول",
    "شركة إبريز العربية",
    "شركة مواد الحفر",
    "شركة بلاستك",
    "شركة جوفاي برايتكس",
    "شركة محطة سلام",
    "Saudi Call company",
    "Ebreez Arabia company",
    "Mawad Drilling company",
    "Plastech company",
    "Jovae Britex company",
    "Salam Station company",

    // By sector grouping
    "شركات الاتصالات في السعودية",
    "شركات التطوير العقاري في الخبر",
    "شركات النفط والغاز في السعودية",
    "شركات التصنيع البلاستيك في السعودية",
    "شركات المنظفات في السعودية",
    "شركات محطات الوقود في السعودية",

    // Coverage
    "شركات سدارى القابضة",
    "محفظة استثمارية متنوعة",
    "استثمارات سدارى",
    "قطاعات سدارى الاستثمارية",

    // Arabic phrases
    "جميع شركات مجموعة سدارى",
    "دليل شركات سدارى",
    "نظرة عامة على شركات سدارى",
    "الذراع الاستثماري لسدارى",
  ].join(", "),

  robots: "index, follow",
  authors: [{ name: "Sadara Development Investment Company" }],
  creator: "Sadara Development Investment Company",
  publisher: "Sadara Development Investment Company",

  openGraph: {
    title:
      "شركاتنا | Sadara Companies - محفظة استثمارية متنوعة من 6 شركات رائدة",
    description:
      "نشرف على 6 شركات تابعة في قطاعات حيوية: الاتصالات والأمن الصناعي (سعودي كول)، التطوير العقاري (إبريز العربية)، النفط والغاز (مواد الحفر)، التصنيع البلاستيك (بلاستك)، المنظفات (جوفاي برايتكس)، والخدمات البترولية (محطة سلام).",
    url: "https://www.sdi.com.sa/companies",
    siteName: "Sadara Development Investment Company",
    images: [
      {
        url: "/sadara-companies-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sadara Companies - 6 Leading Subsidiaries | شركات سدارى - 6 شركات رائدة",
      },
    ],
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "شركات سدارى | Sadara's Portfolio - 6 Subsidiaries",
    description:
      "استكشف شركاتنا التابعة: سعودي كول 📡، إبريز العربية 🏢، مواد الحفر 🛢️، بلاستك 📦، جوفاي برايتكس 🧼، ومحطة سلام ⛽.",
    images: ["/sadara-companies-twitter.jpg"],
    creator: "@SadaraDev",
    site: "@SadaraDev",
  },

  alternates: {
    canonical: "https://www.sdi.com.sa/companies",
    languages: {
      ar: "https://www.sdi.com.sa/ar/companies",
      en: "https://www.sdi.com.sa/en/companies",
    },
  },

  category: "business",
  classification: "Subsidiaries | Portfolio Companies | Group Companies",

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Sadara Development Investment Company - Subsidiaries",
      description:
        "A diversified portfolio of 6 leading companies across vital sectors",
      url: "https://www.sdi.com.sa/companies",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Saudi Call (Al-Sheikh Telecommunications Company)",
          description:
            "Telecommunications infrastructure, fiber optic networks, industrial security systems, and IT integration",
          url: "https://www.sdi.com.sa/companies/saudi-call",
          image: "https://www.sdi.com.sa/logos/saudi-call-logo.png",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ebreez Arabia",
          description:
            "Real estate development and asset management in Al-Khobar - commercial towers and mixed-use complexes",
          url: "https://www.sdi.com.sa/companies/ebreez-arabia",
          image: "https://www.sdi.com.sa/logos/ebreez-logo.png",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mawad Drilling (Drilling Materials Company)",
          description:
            "Drilling fluid additives and industrial minerals manufacturing - API certified for HPHT wells",
          url: "https://www.sdi.com.sa/companies/mawad-drilling",
          image: "https://www.sdi.com.sa/logos/mawad-logo.png",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Plastech (Plastic Ultimate Quality)",
          description:
            "Premium plastic products - containers, PET preforms, industrial drums, and IBC containers",
          url: "https://www.sdi.com.sa/companies/plastech",
          image: "https://www.sdi.com.sa/logos/plastech-logo.png",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Jovae (Britex Detergents Factory)",
          description:
            "High-quality household detergents, disinfectants, and industrial cleaning solutions - SASO certified",
          url: "https://www.sdi.com.sa/companies/jovae",
          image: "https://www.sdi.com.sa/logos/jovae-logo.png",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Salam Roads Petroleum Services Company (Salam Station)",
          description:
            "Integrated fuel stations and roadside services on major highways - fuel, maintenance, restaurants, and rest areas",
          url: "https://www.sdi.com.sa/companies/salam-station",
          image: "https://www.sdi.com.sa/logos/salam-logo.png",
        },
      ],
      mainEntity: {
        "@type": "Corporation",
        name: "Sadara Development Investment Company",
        alternateName: "شركة صدارة التنمية للإستثمار",
        url: "https://www.sdi.com.sa",
        logo: "https://www.sdi.com.sa/sadara-logo.png",
        parentOrganization: {
          "@type": "Organization",
          name: "Al-Sheikh Commercial and Industrial Group",
        },
      },
    }),
  },
};

export default function CompaniesPage() {
  return (
    <>
      <DynamicTitle
        en="Our Companies | Sadara Development Investment Company - Diversified Investment Portfolio (6 Leading Companies)"
        ar="شركاتنا | شركة صدارة التنمية للإستثمار - محفظتنا الاستثمارية المتنوعة (6 شركات رائدة)"
      />
      <MinimalCompaniesSection />
    </>
  );
}
