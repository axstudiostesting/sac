import AboutFounder from "@/components/AboutFounder";
import AboutHero from "../../../public/clients/AboutHero";
import AboutUs from "@/components/AboutUs";
import DetailedServices from "@/components/DetailedServices";
import HeroSection from "@/components/HeroSection";
import NewsEventsSection from "@/components/NewsEventPage";
import Services from "@/components/ServicesMain";
import DynamicTitle from "@/components/DynamicTitle";

// news/page.js or events/page.js

export const metadata = {
  title:
    "News and Events | Sadara News Center – Latest Updates and Achievements | الأخبار والفعاليات | مركز أخبار سدارى – آخر المستجدات والإنجازات",
  description:
    "تابع أحدث أخبار شركة سدارى للتنمية والاستثمار وشركاتها التابعة. ننشر آخر الإنجازات، المشاريع الجديدة، الشراكات الاستراتيجية، الشهادات، والفعاليات التي نشارك فيها. نسهم في رؤية السعودية 2030.",
  keywords: [
    // Main news keywords
    "أخبار سدارى",
    "فعاليات سدارى",
    "مركز أخبار سدارى",
    "آخر أخبار سدارى",
    "Sadara news",
    "Sadara events",
    "Sadara announcements",
    "مستجدات سدارى",
    "إنجازات سدارى",

    // News categories
    "بيانات صحفية سدارى",
    "إعلانات سدارى",
    "إنجازات سدارى",
    "مشاريع جديدة سدارى",
    "شراكات استراتيجية سدارى",
    "شهادات وجوائز سدارى",
    "توسعات سدارى",
    "افتتاحات سدارى",

    // Subsidiaries news
    "أخبار سعودي كول",
    "أخبار إبريز العربية",
    "أخبار مواد الحفر",
    "أخبار بلاستك",
    "أخبار جوفاي برايتكس",
    "أخبار محطة سلام",
    "Saudi Call latest news",
    "Mawad Drilling achievements",
    "Plastech new products",
    "Britex launch",
    "Salam Station expansion",

    // Major projects news
    "سدارى في نيوم",
    "مشاريع سدارى مع أرامكو",
    "مشاريع سدارى مع وزارة الداخلية",
    "مشاريع سدارى مع هيئة المياه",

    // Events participation
    "مشاركات سدارى في المعارض",
    "حضور سدارى المؤتمرات",
    "معرض البترول والغاز",
    "معرض التقنية السعودي",
    "المنتدى الاقتصادي السعودي",
    "مؤتمر الاستثمار العقاري",
    "معرض التصنيع السعودي",

    // Certifications news
    "سدارى تحصل على شهادة ISO",
    "شهادة HCIS لسعودي كول",
    "شهادة API لمواد الحفر",
    "شهادة GMP لجوفاي",

    // Achievements
    "سدارى توسع استثماراتها",
    "نمو أرباح سدارى",
    "خبراء جدد في سدارى",
    "400+ موظف في سدارى",

    // Vision 2030
    "سدارى تدعم رؤية 2030",
    "توطين الصناعة سدارى",
    "استدامة سدارى",
    "مسؤولية مجتمعية سدارى",

    // Media
    "المكتب الإعلامي سدارى",
    "النشرة الإخبارية سدارى",
    "التواصل الإعلامي سدارى",
    "طلبات المقابلات سدارى",

    // Press keywords
    "بيان صحفي",
    "Press release",
    "Sadara press kit",
    "صور وفيديوهات سدارى",

    // Arabic
    "أخر أخبار مجموعة سدارى",
    "فعاليات شركة سدارى القادمة",
    "سدارى في الأخبار",
    "تغطيات إعلامية لسدارى",
  ].join(", "),

  robots: "index, follow",
  authors: [{ name: "Sadara Development Investment Company - Media Center" }],
  creator: "Sadara Development Investment Company",
  publisher: "Sadara Development Investment Company",

  openGraph: {
    title: "الأخبار والفعاليات | مركز أخبار سدارى - آخر الإنجازات والمستجدات",
    description:
      "تابع أحدث أخبار سدارى. نشارككم إنجازاتنا، مشاريعنا الجديدة، شراكاتنا الاستراتيجية، والفعاليات التي نشارك فيها. نسهم في تحقيق رؤية السعودية 2030.",
    url: "https://www.sdi.com.sa/news",
    siteName: "Sadara Development Investment Company",
    images: [
      {
        url: "/sadara-news-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sadara News & Events Center | مركز أخبار وفعاليات سدارى",
      },
    ],
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "أخبار سدارى | Sadara News - Latest Updates",
    description:
      "آخر أخبار شركة سدارى وشركاتها التابعة. إنجازات جديدة، مشاريع، شراكات، وشهادات. تابعونا للمزيد.",
    images: ["/sadara-news-twitter.jpg"],
    creator: "@SadaraDev",
    site: "@SadaraDev",
  },

  alternates: {
    canonical: "https://www.sdi.com.sa/news",
    languages: {
      ar: "https://www.sdi.com.sa/ar/news",
      en: "https://www.sdi.com.sa/en/news",
    },
  },

  category: "news",
  classification: "Corporate News | Press Releases | Events | Media Center",

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Sadara Development - News & Events Center",
      description:
        "Latest news, press releases, announcements, and events from Sadara Development Investment Company and its subsidiaries",
      url: "https://www.sdi.com.sa/news",
      isPartOf: {
        "@type": "WebSite",
        name: "Sadara Development Investment Company",
        url: "https://www.sdi.com.sa",
      },
      mainEntity: {
        "@type": "ItemList",
        name: "News Articles",
        description: "Recent news and events from Sadara",
        numberOfItems: "10", // dynamic
        itemListElement: [
          // Example news items - replace with dynamic data
          // {
          //   "@type": "ListItem",
          //   position: 1,
          //   item: {
          //     "@type": "NewsArticle",
          //     headline: "مثال: سدارى تحصل على شهادة ISO 45001",
          //     datePublished: "2024-01-15",
          //     dateModified: "2024-01-15",
          //     author: { "@type": "Organization", name: "Sadara Development" },
          //     publisher: { "@type": "Organization", name: "Sadara Development", logo: "https://www.sdi.com.sa/logo.png" },
          //     description: "حصلت شركة سدارى على شهادة الأيزو في الصحة والسلامة المهنية",
          //     url: "https://www.sdi.com.sa/news/iso-45001",
          //     articleSection: "شهادات وجوائز",
          //   },
          // },
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "Sadara Development Investment Company",
        logo: "https://www.sdi.com.sa/sadara-logo.png",
        url: "https://www.sdi.com.sa",
      },
      potentialAction: {
        "@type": "SubscribeAction",
        name: "Subscribe to Newsletter",
        target: "https://www.sdi.com.sa/newsletter",
      },
    }),
  },
};

export default function Media() {
  return (
    <>
      <DynamicTitle
        en="News and Events | Sadara News Center – Latest Updates and Achievements"
        ar="الأخبار والفعاليات | مركز أخبار سدارى – آخر المستجدات والإنجازات"
      />
      <NewsEventsSection />
    </>
  );
}
