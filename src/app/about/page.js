import AboutFounder from "@/components/AboutFounder";
import AboutHero from "../../../public/clients/AboutHero";
import AboutSadara from "@/components/AboutSadare";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSectionMain";
import MissionVision from "@/components/MissionVissionVal";
import DynamicTitle from "@/components/DynamicTitle";
// about/page.js or about/metadata.js

export const metadata = {
  title:
    "About Us | Sadara Development and Investment Company – The Story of Transformation and Institutional Excellence | من نحن | شركة صدارة التنمية للإستثمار – قصة التحول والتميز المؤسسي",
  description:
    "تعرف على شركة صدارة التنمية للإستثمار، الكيان القانوني الموحد لمجموعة آل الشيخ التجارية والصناعية. نعمل منذ 1992 على إدارة وتطوير محفظة استثمارية متنوعة من الخبر، المملكة العربية السعودية.",
  keywords: [
    // Company meaning
    "من نحن سدارى",
    "عن شركة سدارى",
    "Sadara About Us",
    "تاريخ سدارى",
    "قصة سدارى",

    // Company Background
    "الكيان القانوني الموحد",
    "مجموعة آل الشيخ",
    "Al-Sheikh Group",
    "holding company Saudi Arabia",
    "شركة قابضة السعودية",
    "تأسست 1992",
    "أكثر من 30 عاماً",

    // Vision & Mission
    "رسالة سدارى",
    "رؤية سدارى",
    "أهداف سدارى",
    "رؤية استثمارية",
    "تطوير محفظة استثمارية",
    "التميز المؤسسي سدارى",
    "الحوكمة والشفافية",

    // Values
    "قيم سدارى",
    "التميز في الأداء",
    "الشفافية في العمل",
    "الابتكار في الاستثمار",
    "تمكين الفرق",
    "المسؤولية المجتمعية",
    "الاستدامة",

    // Leadership
    "الإدارة العليا سدارى",
    "قيادة سدارى",
    "فريق سدارى",
    "خبراء استثمار السعودية",

    // Strategic Direction
    "الاستراتيجية الاستثمارية",
    "مجلس إدارة سدارى",
    "الكفاءة التشغيلية",
    "معايير الحوكمة",
    "خلق القيمة",

    // Location & Operations
    "الخبر المكتب الرئيسي",
    "برج الخبر جيت",
    "طريق الملك فهد الخبر",
    "المنطقة الشرقية السعودية",
    "حي البندرية الخبر",

    // Unique Value Proposition
    "كيان قابض موحد",
    "محفظة استثمارية متنوعة",
    "إدارة موحدة",
    "أفضل الممارسات",
    "كفاءة عالية",

    // Subsidiaries mention
    "الشركات التابعة سدارى",
    "سعودي كول",
    "إبريز العربية",
    "مواد الحفر",
    "بلاستك",
    "جوفاي برايتكس",
    "محطة سلام",

    // Arabic phrases
    "من نحن - شركة سدارى",
    "تعريف بسدارى",
    "نبذة عن الشركة",
    "الهوية المؤسسية",
    "الرسالة والرؤية",
  ].join(", "),

  robots: "index, follow",
  authors: [{ name: "Sadara Development Investment Company" }],
  creator: "Sadara Development Investment Company",
  publisher: "Sadara Development Investment Company",

  openGraph: {
    title:
      "من نحن | شركة صدارة التنمية للإستثمار - الكيان القابض الموحد لمجموعة آل الشيخ",
    description:
      "نحن الكيان القانوني الموحد الذي يدير و يشرف على جميع شركات مجموعة آل الشيخ التجارية والصناعية. منذ 1992 ونحن نعمل على تطوير محفظة استثمارية متنوعة من مقرنا في الخبر، المملكة العربية السعودية، وفق أعلى معايير الحوكمة والكفاءة التشغيلية.",
    url: "https://www.sdi.com.sa/about",
    siteName: "Sadara Development Investment Company",
    images: [
      {
        url: "/sadara-about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sadara Development Investment Company - من نحن | الكيان القابض الموحد",
      },
    ],
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "من نحن | Sadara Development - قصة التحول والتميز",
    description:
      "تعرف على شركة صدارة التنمية للإستثمار، الكيان الموحد لمجموعة آل الشيخ. نتميز بالحوكمة الرشيدة، الابتكار، والتميز التشغيلي. مقرنا الخبر، ونشرف على 6 شركات رائدة في السوق السعودي.",
    images: ["/sadara-about-twitter.jpg"],
    creator: "@SadaraDev",
    site: "@SadaraDev",
  },

  alternates: {
    canonical: "https://www.sdi.com.sa/about",
    languages: {
      ar: "https://www.sdi.com.sa/ar/about",
      en: "https://www.sdi.com.sa/en/about",
    },
  },

  category: "business",
  classification: "Holding Company | About Us | Corporate Profile",

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Sadara Development Investment Company",
      description:
        "Sadara Development Investment Company is the unified legal entity and holding company for all subsidiaries of the Al-Sheikh Commercial and Industrial Group, operating from Al-Khobar, Saudi Arabia since 1992.",
      url: "https://www.sdi.com.sa/about",
      isPartOf: {
        "@type": "WebSite",
        name: "Sadara Development Investment Company",
        url: "https://www.sdi.com.sa",
      },
      about: {
        "@type": "Corporation",
        name: "Sadara Development Investment Company",
        alternateName: "شركة صدارة التنمية للإستثمار",
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
        legalName: "Sadara Development Investment Company",
        parentOrganization: {
          "@type": "Organization",
          name: "Al-Sheikh Commercial and Industrial Group",
        },
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: "400+",
          unitText: "Professionals",
        },
      },
      mainEntity: {
        "@type": "Corporation",
        name: "Sadara Development Investment Company",
        mission:
          "Manage and develop a diversified investment portfolio founded on sound governance, innovation, and operational excellence—empowering subsidiaries and maximizing long-term returns.",
        vision:
          "To maximize value creation through expanding investment base, diversifying activities, and attracting promising opportunities locally and regionally.",
        values: [
          {
            "@type": "QualitativeValue",
            name: "Excellence (التميز)",
            description:
              "Highest standards of quality in all operations and investment decisions",
          },
          {
            "@type": "QualitativeValue",
            name: "Transparency (الشفافية)",
            description:
              "Honesty, clarity, and integrity in communication and reporting",
          },
          {
            "@type": "QualitativeValue",
            name: "Empowerment (التمكين)",
            description:
              "Enabling teams and subsidiaries to achieve sustainable growth",
          },
          {
            "@type": "QualitativeValue",
            name: "Innovation (الابتكار)",
            description:
              "New solutions and impactful investments driving transformation",
          },
          {
            "@type": "QualitativeValue",
            name: "Responsibility (المسؤولية)",
            description:
              "Prioritizing community development and sustainability",
          },
        ],
        slogan: "Unified ownership and management under one umbrella",
        knowsAbout: [
          "Diversified investment portfolio management",
          "Corporate governance",
          "Operational excellence",
          "Subsidiary empowerment",
          "Strategic investments",
          "Value creation",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Al-Khobar Gate Tower, King Fahd Road, Al-Bandariyah District",
          addressLocality: "Al-Khobar",
          postalCode: "3422",
          addressCountry: "SA",
        },
        email: "info@sdi.com.sa",
        url: "https://www.sdi.com.sa",
      },
      // Fixed: /subsidiaries, /leadership, /strategy did not exist as real routes.
      // Only /companies is a real page; leadership and strategy pages don't
      // currently exist on the site, so those two links were removed rather
      // than pointed at the wrong place.
      significantLinks: [
        {
          "@type": "LinkRole",
          name: "Our Companies",
          target: "https://www.sdi.com.sa/companies",
        },
      ],
    }),
  },
};
export default function About() {
  return (
    <>
      <DynamicTitle
        en="About Us | Sadara Development Investment"
        ar="من نحن | صدارة التنمية للاستثمار"
      />
      <AboutHero />

      <AboutFounder />
    </>
  );
}
