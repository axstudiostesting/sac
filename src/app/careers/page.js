import CareersSection from "@/components/Careers";
import ContactPage from "@/components/ContactUS";
import ContactSection from "@/components/ContactUS";
import ContactUs from "@/components/ContactUS";
import HeroService from "@/components/HeroService";
// careers/page.js or careers/metadata.js

export const metadata = {
  title:
    "Jobs and Employment | Join the Sadara Development and Investment Company team – Job opportunities in Saudi Arabia | الوظائف والتوظيف | انضم إلى فريق سدارى للتنمية والاستثمار – فرص عمل في السعودية",
  description:
    "انضم إلى فريق شركة سدارى للتنمية والاستثمار وشركاتها التابعة. نبحث عن المواهب في قطاعات: الاتصالات، الهندسة، العقار، النفط والغاز، التصنيع، المبيعات، والإدارة. مقر العمل: الخبر والمنطقة الشرقية.",
  keywords: [
    // Main careers keywords
    "وظائف سدارى",
    "التوظيف في سدارى",
    "فرص عمل سدارى",
    "Sadara careers",
    "Sadara jobs",
    "انضم إلى سدارى",
    "عمل في سدارى",

    // Job categories
    "وظائف اتصالات",
    "وظائف هندسية",
    "وظائف عقارية",
    "وظائف نفط وغاز",
    "وظائف تصنيع",
    "وظائف مبيعات",
    "وظائف إدارية",
    "وظائف مالية",
    "وظائف موارد بشرية",
    "وظائف تسويق",
    "وظائف تقنية معلومات",
    "وظائف أمن صناعي",

    // Subsidiaries jobs
    "وظائف سعودي كول",
    "وظائف إبريز العربية",
    "وظائف مواد الحفر",
    "وظائف بلاستك",
    "وظائف جوفاي برايتكس",
    "وظائف محطة سلام",

    // Saudi specific
    "وظائف الخبر",
    "وظائف المنطقة الشرقية",
    "وظائف الدمام",
    "وظائف السعودية",
    "توظيف سعوديين",
    "السعودة",

    // Benefits
    "بيئة عمل مهنية",
    "تطوير مهني",
    "رواتب مجزية",
    "مزايا وظيفية",
    "تأمين طبي",

    // Recruitment process
    "تقديم وظائف سدارى",
    "طريقة التقديم في سدارى",
    "شواغر سدارى",
    "التقديم على وظائف سدارى",

    // Internships
    "تدريب تعاوني سدارى",
    "برامج تدريبية سدارى",
    "حديثي التخرج سدارى",
    "خريجين سدارى",

    // Life at Sadara
    "الحياة في سدارى",
    "ثقافة العمل سدارى",
    "تطوير الموظفين سدارى",

    // Arabic phrases
    "فرص وظيفية في شركة سدارى",
    "أفضل فرص العمل في الخبر",
    "وظائف شركة سدارى القابضة",
  ].join(", "),

  robots: "index, follow",
  authors: [{ name: "Sadara Development Investment Company - HR Department" }],
  creator: "Sadara Development Investment Company",
  publisher: "Sadara Development Investment Company",

  openGraph: {
    title: "الوظائف والتوظيف | انضم إلى فريق سدارى - فرص عمل في السعودية",
    description:
      "انضم إلى عائلة سدارى! نبحث عن المواهب الطموحة في قطاعات متعددة. بيئة عمل مهنية، تطوير مستمر، ورواتب مجزية. قدم الآن وانطلق في مسيرتك المهنية.",
    url: "https://www.sdi.com.sa/careers",
    siteName: "Sadara Development Investment Company",
    images: [
      {
        url: "/sadara-careers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Sadara Development - فرص عمل في سدارى",
      },
    ],
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "وظائف سدارى | انضم إلى فريقنا",
    description:
      "فرص عمل في شركة سدارى وشركاتها التابعة. قطاعات: اتصالات، هندسة، عقار، نفط، تصنيع، مبيعات، وإدارة.",
    images: ["/sadara-careers-twitter.jpg"],
    creator: "@SadaraDev",
    site: "@SadaraDev",
  },

  alternates: {
    canonical: "https://www.sdi.com.sa/careers",
    languages: {
      ar: "https://www.sdi.com.sa/ar/careers",
      en: "https://www.sdi.com.sa/en/careers",
    },
  },

  category: "careers",
  classification: "Employment | Job Opportunities | Recruitment",

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Careers at Sadara Development Investment Company",
      description:
        "Job opportunities and careers at Sadara Development and its subsidiaries",
      url: "https://www.sdi.com.sa/careers",
      isPartOf: {
        "@type": "WebSite",
        name: "Sadara Development Investment Company",
        url: "https://www.sdi.com.sa",
      },
      mainEntity: {
        "@type": "Organization",
        name: "Sadara Development Investment Company",
        alternateName: "شركة سدارى للتنمية والاستثمار",
        url: "https://www.sdi.com.sa",
        email: "careers@sdi.com.sa",
        hiring: {
          "@type": "Hiring",
          name: "Career Opportunities",
          description: "Join our team of 400+ professionals",
          employmentUnit: [
            {
              "@type": "Occupation",
              name: "Telecommunications Engineer",
              occupationalCategory: "Engineering",
              employmentType: "FULL_TIME",
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Al-Khobar",
                  addressRegion: "Eastern Province",
                  addressCountry: "SA",
                },
              },
            },
            {
              "@type": "Occupation",
              name: "Real Estate Manager",
              occupationalCategory: "Real Estate",
              employmentType: "FULL_TIME",
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Al-Khobar",
                  addressCountry: "SA",
                },
              },
            },
            {
              "@type": "Occupation",
              name: "Chemical Engineer - Drilling Fluids",
              occupationalCategory: "Engineering",
              employmentType: "FULL_TIME",
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dammam",
                  addressRegion: "Eastern Province",
                  addressCountry: "SA",
                },
              },
            },
            {
              "@type": "Occupation",
              name: "Production Manager - Plastics",
              occupationalCategory: "Manufacturing",
              employmentType: "FULL_TIME",
            },
            {
              "@type": "Occupation",
              name: "Sales Representative",
              occupationalCategory: "Sales",
              employmentType: "FULL_TIME",
            },
          ],
          hiringOrganization: {
            "@type": "Corporation",
            name: "Sadara Development Investment Company",
            sameAs: "https://www.sdi.com.sa",
          },
        },
      },
      employerOverview: {
        "@type": "EmployerAggregateRating",
        ratingValue: "4.5",
        ratingCount: "100", // Placeholder - update if available
        bestRating: "5",
        worstRating: "1",
      },
      potentialAction: {
        "@type": "ApplyAction",
        name: "Apply for a job",
        target: "https://www.sdi.com.sa/careers/apply",
        query: "job-title",
      },
    }),
  },
};
export default function Careers() {
  return (
    <>
      {/* <HeroService image="/h1.jpg" title="contact.heroTitle" /> */}

      <CareersSection />
    </>
  );
}
