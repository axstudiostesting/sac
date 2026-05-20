import AboutFounder from "@/components/AboutFounder";
import AboutHero from "../../../public/clients/AboutHero";
import AboutSadara from "@/components/AboutSadare";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSectionMain";
import MissionVision from "@/components/MissionVissionVal";
// about/page.js or about/metadata.js

export const metadata = {
  title:
    "About Us | Sadara Development and Investment Company – The Story of Transformation and Institutional Excellence | من نحن | شركة سدارى للتنمية والاستثمار – قصة التحول والتميز المؤسسي",
  description:
    "تعرف على شركة سدارى للتنمية والاستثمار، الكيان القانوني الموحد لمجموعة آل الشيخ التجارية والصناعية. نعمل منذ 1992 على إدارة وتطوير محفظة استثمارية متنوعة من الخبر، المملكة العربية السعودية.",
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
      "من نحن | شركة سدارى للتنمية والاستثمار - الكيان القابض الموحد لمجموعة آل الشيخ",
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
      "تعرف على شركة سدارى للتنمية والاستثمار، الكيان الموحد لمجموعة آل الشيخ. نتميز بالحوكمة الرشيدة، الابتكار، والتميز التشغيلي. مقرنا الخبر، ونشرف على 6 شركات رائدة في السوق السعودي.",
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
        alternateName: "شركة سدارى للتنمية والاستثمار",
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
      significantLinks: [
        {
          "@type": "LinkRole",
          name: "Our Subsidiaries",
          target: "https://www.sdi.com.sa/subsidiaries",
        },
        {
          "@type": "LinkRole",
          name: "Our Leadership",
          target: "https://www.sdi.com.sa/leadership",
        },
        {
          "@type": "LinkRole",
          name: "Investment Strategy",
          target: "https://www.sdi.com.sa/strategy",
        },
      ],
    }),
  },
};
export default function About() {
  return (
    <>
      {/* <div className="max-w-4xl mx-auto text-center mb-24">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("aboutCompany.badge")}
          </span>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t("aboutCompany.title")}{" "}
            <span className="text-primary relative inline-block">
              {t("aboutCompany.highlightedText")}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0 5 Q25 0 50 5 T100 5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t("aboutCompany.description")}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="mt-8"
        >
          <Link href="/about">
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>{t("aboutCompany.buttonText")}</span>
              {isRTL ? (
                <FiChevronRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </Link>
        </div> */}
      {/* </div> */}
      <AboutHero />

      <AboutFounder />
    </>
  );
}
