import AboutFounder from "@/components/AboutFounder";
import AboutHero from "../../../public/clients/AboutHero";
import AboutUs from "@/components/AboutUs";
import DetailedServices from "@/components/DetailedServices";
import ServicesSection from "@/components/ServicesHero";
import Services from "@/components/ServicesMain";
import ModernServicesSection from "@/components/ModernServicesSection";
import MinimalServicesSection from "@/components/ModernServicesSection";
import DynamicTitle from "@/components/DynamicTitle";

// services/page.js or services/metadata.js

export const metadata = {
  title:
    "Our Services | Sadara Development and Investment Company – A diversified investment portfolio across 8 vital sectors | خدماتنا | شركة صدارة التنمية للإستثمار - محفظة استثمارية متنوعة في 8 قطاعات حيوية",
  description:
    "نشرف على محفظة استثمارية متنوعة تشمل الاتصالات، الأمن الصناعي، التطوير العقاري، النفط والغاز، الخدمات البترولية، الخدمات التشغيلية، إدارة المرافق، والتصنيع. اكتشف كيف نخلق القيمة من خلال شركاتنا التابعة.",
  keywords: [
    // Main service categories
    "خدمات سدارى",
    "أنشطة استثمارية",
    "محفظة استثمارية متنوعة",
    "قطاعات سدارى",
    "استثمارات سدارى",

    // ICT & Telecom
    "خدمات الاتصالات",
    "البنية التحتية للاتصالات",
    "شبكات الألياف البصرية",
    "حلول FTTH",
    "تكامل أنظمة",
    "مراكز البيانات",
    "حلول الأمن السيبراني",
    "Saudi Call خدمات",

    // Industrial Security
    "الأمن الصناعي",
    "أنظمة أمنية معتمدة من HCIS",
    "سياج أمني",
    "كاميرات مراقبة",
    "أنظمة التحكم في الدخول",
    "حماية المنشآت الحيوية",
    "أنظمة الإنذار المبكر",

    // Real Estate Development
    "تطوير عقاري الخبر",
    "إدارة العقارات التجارية",
    "أبراج تجارية الخبر",
    "مجمعات تجارية",
    "إبريز العربية عقارات",
    "Al-Khobar Gate Tower",
    "التطوير العقاري المستدام",
    "إدارة المرافق",

    // Oil & Gas
    "خدمات النفط والغاز",
    "إضافات سوائل الحفر",
    "مواد كيميائية للحفر",
    "معادن صناعية متخصصة",
    "معايير API",
    "Mawad Drilling",
    "دعم آبار HPHT",
    "حلول حقول النفط",

    // Petroleum Services
    "خدمات بترولية",
    "محطات الوقود",
    "محطات خدمة على الطرق السريعة",
    "خدمات مساندة للطاقة",
    "Salam Station",
    "وقود وخدمات السفر",

    // Operational Services
    "خدمات تشغيلية",
    "خدمات ميدانية",
    "دعم البنية التحتية",
    "خدمات لوجستية",
    "صيانة دورية",

    // Facility Management
    "إدارة المرافق",
    "تشغيل المباني",
    "إدارة الطاقة",
    "أنظمة التكييف والكهرباء",
    "حلول إدارة الأصول المتكاملة",

    // Manufacturing
    "خدمات التصنيع",
    "منتجات بلاستيكية",
    "عبوات صناعية",
    "PET بريفورمز",
    "براميل 220 لتر",
    "حاويات IBC",
    "منظفات صناعية",
    "بلاستك",
    "جوفاي برايتكس",
    "منظفات منزلية",
    "مطهرات",

    // Export & Distribution
    "تصدير إلى دول الخليج",
    "توزيع في السوق السعودي",
    "شمال أفريقيا",
    "أسيا",

    // Quality & Certifications
    "شهادات الجودة",
    "ISO certified",
    "معايير API",
    "GMP معتمد",
    "HCIS معتمد",

    // Major Projects
    "مشاريع سدارى",
    "NEOM",
    "مطار جازان الجديد",
    "مجمع الملك سلمان الدولي",
    "مشاريع الحرمين",

    // Arabic keywords
    "خدمات شركة سدارى",
    "مجالات الاستثمار لدى سدارى",
    "ما تقدمه سدارى من خدمات",
    "أنشطة الشركات التابعة",
  ].join(", "),

  robots: "index, follow",
  authors: [{ name: "Sadara Development Investment Company" }],
  creator: "Sadara Development Investment Company",
  publisher: "Sadara Development Investment Company",

  openGraph: {
    title: "خدماتنا | شركة صدارة التنمية للإستثمار - 8 قطاعات استثمارية رائدة",
    description:
      "نشرف على محفظة استثمارية متنوعة تشمل الاتصالات وتقنية المعلومات، الأمن الصناعي، التطوير العقاري، النفط والغاز، الخدمات البترولية، الخدمات التشغيلية، إدارة المرافق، والتصنيع. جميع خدماتنا مدعومة بأعلى معايير الجودة والكفاءة التشغيلية.",
    url: "https://www.sdi.com.sa/sectors",
    siteName: "Sadara Development Investment Company",
    images: [
      {
        url: "/sadara-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sadara Services - 8 Investment Sectors | خدمات شركة سدارى - 8 قطاعات استثمارية",
      },
    ],
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sadara Services | خدمات سدارى - محفظة استثمارية متنوعة",
    description:
      "استكشف قطاعاتنا الاستثمارية الثمانية: الاتصالات، الأمن الصناعي، العقار، النفط والغاز، الخدمات البترولية، الخدمات التشغيلية، إدارة المرافق، والتصنيع.",
    images: ["/sadara-services-twitter.jpg"],
    creator: "@SadaraDev",
    site: "@SadaraDev",
  },

  alternates: {
    canonical: "https://www.sdi.com.sa/sectors",
    languages: {
      ar: "https://www.sdi.com.sa/ar/sectors",
      en: "https://www.sdi.com.sa/en/sectors",
    },
  },

  category: "business",
  classification:
    "Investment Portfolio | Diversified Services | Holding Company Services",

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Sadara Development Investment Company Services",
      description:
        "A diversified investment portfolio spanning 8 vital sectors",
      url: "https://www.sdi.com.sa/sectors",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Telecommunications & IT",
          description:
            "Advanced digital infrastructure, fiber-optic networks, and systems integration",
          url: "https://www.sdi.com.sa/sectors/telecom",
          provider: {
            "@type": "Corporation",
            name: "Saudi Call (Al-Sheikh Telecommunications Company)",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industrial Security",
          description:
            "Advanced security systems for critical facilities and operational readiness",
          url: "https://www.sdi.com.sa/sectors/industrial-security",
          provider: {
            "@type": "Corporation",
            name: "Saudi Call",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Real Estate Development",
          description:
            "High-quality residential and commercial projects with sustainability standards",
          url: "https://www.sdi.com.sa/sectors/real-estate",
          provider: {
            "@type": "RealEstateAgent",
            name: "Ebreez Arabia",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Oil & Gas",
          description:
            "Chemical materials and technical support for drilling and exploration",
          url: "https://www.sdi.com.sa/sectors/oil-gas",
          provider: {
            "@type": "Corporation",
            name: "Mawad Drilling (Drilling Materials Company)",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Petroleum Services",
          description:
            "Roadside stations and petroleum operations supporting logistics infrastructure",
          url: "https://www.sdi.com.sa/sectors/petroleum",
          provider: {
            "@type": "Organization",
            name: "Salam Roads Petroleum Services Company",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Operational Services",
          description:
            "High-efficiency field services for infrastructure, industrial, and energy projects",
          url: "https://www.sdi.com.sa/sectors/operational",
          provider: {
            "@type": "Organization",
            name: "Sadara Development",
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Facility Management",
          description:
            "Operating and maintaining buildings with integrated asset management solutions",
          url: "https://www.sdi.com.sa/sectors/facility-management",
          provider: {
            "@type": "Organization",
            name: "Sadara Development",
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Manufacturing",
          description:
            "Consumer and industrial products including plastics and cleaning solutions",
          url: "https://www.sdi.com.sa/sectors/manufacturing",
          provider: {
            "@type": "Corporation",
            name: "Plastech & Jovae (Britex)",
          },
        },
      ],
      mainEntity: {
        "@type": "Service",
        serviceType: "Diversified Investment Portfolio",
        provider: {
          "@type": "Corporation",
          name: "Sadara Development Investment Company",
          url: "https://www.sdi.com.sa",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sadara Services Catalog",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Telecom Infrastructure",
                category: "Telecommunications",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Security Systems",
                category: "Industrial Security",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Property Management",
                category: "Real Estate",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Drilling Chemicals",
                category: "Oil & Gas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fuel Stations",
                category: "Petroleum Services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Field Services",
                category: "Operational Services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Building Operations",
                category: "Facility Management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plastic Manufacturing",
                category: "Manufacturing",
              },
            },
          ],
        },
      },
    }),
  },
};
export default function Service() {
  return (
    <>
      <DynamicTitle
        en="Our Services | Sadara Development and Investment Company – A diversified investment portfolio across 8 vital sectors"
        ar="خدماتنا | شركة صدارة التنمية للإستثمار - محفظة استثمارية متنوعة في 8 قطاعات حيوية"
      />
      {/* <Services />
      <DetailedServices /> */}
      <MinimalServicesSection />
      {/* <ServicesSection /> */}
    </>
  );
}
