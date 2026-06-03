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
    // Add if you have Google Search Console etc.
    // google: "your-google-verification-code",
  },

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: "Sadara Development Investment Company",
      alternateName: "شركة صدارة التنمية للإستثمار",
      url: "https://www.sdi.com.sa",
      logo: "https://www.sdi.com.sa/sadara-logo.png",
      description:
        "Sadara Development Investment Company is a diversified holding company serving as the official legal entity overseeing all subsidiaries of the Al-Sheikh Commercial and Industrial Group.",
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
      email: "info@sdi.com.sa",
      telephone: "+966-XXX-XXXXXX", // Add actual phone number if available
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "400+",
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
      subsidiaries: [
        {
          "@type": "Corporation",
          name: "Saudi Call (Al-Sheikh Telecommunications Company)",
          foundingDate: "1992",
        },
        {
          "@type": "RealEstateAgent",
          name: "Ebreez Arabia",
        },
        {
          "@type": "Corporation",
          name: "Mawad Drilling (Drilling Materials Company)",
          foundingDate: "2013",
        },
        {
          "@type": "Corporation",
          name: "Plastech (Plastic Ultimate Quality Plastic Products)",
        },
        {
          "@type": "Corporation",
          name: "Jovae (Britex Detergents Factory)",
        },
        {
          "@type": "Organization",
          name: "Salam Roads Petroleum Services Company",
        },
      ],
      knowsAbout: [
        "Telecommunications infrastructure",
        "Fiber optic networks",
        "Industrial security systems",
        "Real estate development",
        "Drilling fluid additives",
        "Oil and gas services",
        "Plastic manufacturing",
        "Industrial cleaning products",
        "Petroleum services",
        "Facility management",
        "Digital infrastructure",
      ],
      hasCertification: [
        {
          "@type": "Certification",
          name: "ISO 9001:2015",
        },
        {
          "@type": "Certification",
          name: "ISO 45001:2018",
        },
        {
          "@type": "Certification",
          name: "ISO 14001:2015",
        },
        {
          "@type": "Certification",
          name: "HCIS Approved",
        },
        {
          "@type": "Certification",
          name: "GMP Certified",
        },
        {
          "@type": "Certification",
          name: "API 13A",
        },
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
    }),
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

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2M3GGNHL7P"
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
