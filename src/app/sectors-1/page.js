import AboutFounder from "@/components/AboutFounder";
import AboutHero from "../../../public/clients/AboutHero";
import AboutUs from "@/components/AboutUs";
import DetailedServices from "@/components/DetailedServices";
import SectorsSection from "@/components/SectotsSection";
import Services from "@/components/ServicesMain";
export const metadata = {
  title:
    "بيت الخبرة الوطني | استشارات إدارية، رأس المال البشري، التميز المؤسسي",
  description:
    "بيت خبرة وطني مقره الرياض، نقدم خدمات استشارية متخصصة في رأس المال البشري، استراتيجيات الأعمال، والتميز المؤسسي. فريق استشاري بخبرات عالمية وفهم عميق للسوق السعودي.",
  keywords: [
    // Company identity
    "بيت الخبرة الوطني",
    "استشارات إدارية السعودية",
    "رأس المال البشري",
    "التميز المؤسسي",
    "استراتيجيات الأعمال",
    "تطوير مؤسسي",
    "تحول مؤسسي",

    // Services
    "استشارات الموارد البشرية",
    "التخطيط الاستراتيجي",
    "بطاقات الأداء المتوازن",
    "الهياكل التنظيمية",
    "تحليل الأعمال",
    "إدارة الأداء",
    "الجدارات الوظيفية",

    // Expertise
    "خبراء استشاريون",
    "مدربين معتمدين",
    "محكمين معتمدين",
    "استشارات حكومية",
    "قطاع خاص",
    "منظمات غير ربحية",

    // Certifications
    "معتمد من ATD",
    "شهادة CHRL",
    "معتمد بيركمان",
    "محكم تميز مؤسسي",
    "معتمد منشآت",
    "خبير موارد بشرية",

    // Sectors
    "الاتصالات وتقنية المعلومات",
    "القطاع المالي والتأمين",
    "القطاع الصحي",
    "التطوير العقاري",
    "الجمعيات الخيرية",
    "الشؤون البلدية",

    // Values
    "شراكة استراتيجية",
    "حلول مخصصة",
    "جودة عالية",
    "أسعار منافسة",
    "خبرة 40 عام",
    "فهم السوق السعودي",

    // Arabic keywords
    "استشارات إدارية الرياض",
    "تطوير الموارد البشرية",
    "التخطيط الاستراتيجي المؤسسي",
    "تحول رقمي مؤسسي",
    "حوكمة الشركات",
    "قياس الأداء المؤسسي",
    "إدارة المواهب",
    "تدريب وتطوير",
    "الذكاء العاطفي",
    "القيادة الإدارية",
    "تميز عمليات",
    "استدامة مؤسسية",
  ].join(", "),

  openGraph: {
    title: "بيت الخبرة الوطني | شريكك الاستراتيجي للتميز المؤسسي",
    description:
      "بيت خبرة وطني رائد يقدم حلول استشارية متكاملة في رأس المال البشري، استراتيجيات الأعمال، والتميز المؤسسي بخبرة 40 عاماً",
    url: "https://yourdomain.com/about",
    images: [
      {
        url: "/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "فريق بيت الخبرة الوطني الاستشاري - خبراء في الاستشارات الإدارية والتميز المؤسسي",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "بيت الخبرة الوطني | خبراء الاستشارات الإدارية والتميز المؤسسي",
    description:
      "اكتشف رحلة بيت الخبرة الوطني في تقديم حلول استشارية متكاملة تجمع بين الخبرة العالمية والفهم العميق للسوق السعودي",
    images: ["/about-team.jpg"],
  },

  alternates: {
    canonical: "https://yourdomain.com/about",
    languages: {
      ar: "https://yourdomain.com/about",
    },
  },

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "بيت الخبرة الوطني - عن الشركة",
      description:
        "بيت خبرة وطني متخصص في الاستشارات الإدارية، رأس المال البشري، والتميز المؤسسي بمقر رئيسي في الرياض",
      url: "https://yourdomain.com/about",
      publisher: {
        "@type": "Organization",
        name: "بيت الخبرة الوطني",
        logo: {
          "@type": "ImageObject",
          url: "https://yourdomain.com/logo.png",
        },
        description:
          "بيت خبرة وطني يقدم خدمات استشارية متخصصة في رأس المال البشري، استراتيجيات الأعمال، والتميز المؤسسي",
        address: {
          "@type": "PostalAddress",
          addressLocality: "الرياض",
          addressCountry: "SA",
        },
        areaServed: "السعودية",
        knowsAbout: [
          "استشارات الموارد البشرية",
          "التخطيط الاستراتيجي",
          "التميز المؤسسي",
          "إدارة الأداء",
          "تحول رقمي",
          "حوكمة الشركات",
        ],
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/about",
      },
      image: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/about-hero.jpg",
        width: 1200,
        height: 800,
        caption: "فريق بيت الخبرة الوطني الاستشاري",
      },
      keywords: [
        "استشارات إدارية",
        "رأس المال البشري",
        "التميز المؤسسي",
        "التخطيط الاستراتيجي",
        "تحول مؤسسي",
      ],
      inLanguage: "ar",
      datePublished: "2024-01-01",
      dateModified: "2024-12-01",
    }),
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  category: "consulting services",
};

export default function Service() {
  return (
    <>
      <SectorsSection />
    </>
  );
}
