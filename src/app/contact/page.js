import ContactPage from "@/components/ContactUS";
import ContactSection from "@/components/ContactUS";
import ContactUs from "@/components/ContactUS";
import HeroService from "@/components/HeroService";
import DynamicTitle from "@/components/DynamicTitle";

// contact/page.js or contact/metadata.js

export const metadata = {
  title:
    "Contact Us | Sadara Development and Investment Company – Main Headquarters Al Khobar, Kingdom of Saudi Arabia | اتصل بنا | شركة صدارة التنمية للإستثمار - المقر الرئيسي الخبر المملكة العربية السعودية",
  description:
    "تواصل مع فريق شركة صدارة التنمية للإستثمار. مقرنا الرئيسي في برج الخبر جيت، طريق الملك فهد، حي البندرية، الخبر. للاستفسارات حول الاستثمار، الشراكات، أو فرص الأعمال. info@sdi.com.sa",
  keywords: [
    // Main contact keywords
    "اتصل بنا سدارى",
    "تواصل مع سدارى",
    "رقم هاتف سدارى",
    "بريد إلكتروني سدارى",
    "عنوان سدارى",
    "Sadara contact",
    "Sadara phone number",
    "Sadara email",

    // Address related
    "الخبر برج الخبر جيت",
    "طريق الملك فهد الخبر",
    "حي البندرية الخبر",
    "Al-Khobar Gate Tower",
    "King Fahd Road Al-Khobar",
    "Al-Bandariyah District Khobar",
    "المنطقة الشرقية الخبر",
    "المقر الرئيسي سدارى",

    // Communication channels
    "+966 سدارى",
    "info@sdi.com.sa",
    "sdi.com.sa",
    "موقع سدارى الإلكتروني",

    // Inquiries types
    "استفسارات استثمارية",
    "فرص استثمارية مع سدارى",
    "شراكة مع سدارى",
    "تقديم عروض لسدارى",
    "التوظيف في سدارى",
    "وظائف شركة سدارى",
    "موردين سدارى",
    "مناقصات سدارى",
    "استفسارات الشركات التابعة",

    // Subsidiaries contact
    "الاتصال بسعودي كول",
    "الاتصال بإبريز العربية",
    "الاتصال بمواد الحفر",
    "الاتصال ببلاستك",
    "الاتصال بجوفاي",
    "الاتصال بمحطة سلام",

    // Navigation & directions
    "خريطة موقع سدارى",
    "كيف تصل إلى سدارى",
    "اتجاهات الوصول الخبر",
    "الخرائط سدارى",

    // Business hours
    "ساعات العمل سدارى",
    "أوقات الدوام الرسمي سدارى",
    "مواعيد الاستقبال سدارى",

    // Arabic phrases
    "تواصل مع إدارة سدارى",
    "مراسلة شركة سدارى",
    "عناوين فروع سدارى",
    "مكتب سدارى الرئيسي",
    "الاستعلام عن خدمات سدارى",
  ].join(", "),

  robots: "index, follow",
  authors: [{ name: "Sadara Development Investment Company" }],
  creator: "Sadara Development Investment Company",
  publisher: "Sadara Development Investment Company",

  openGraph: {
    title: "اتصل بنا | شركة صدارة التنمية للإستثمار - المقر الرئيسي الخبر",
    description:
      "نسعد بتواصلكم معنا. مقرنا الرئيسي في برج الخبر جيت، طريق الملك فهد، الخبر. للاستفسارات الاستثمارية، فرص الشراكة، أو أي استفسارات أخرى، يرجى التواصل عبر البريد الإلكتروني info@sdi.com.sa.",
    url: "https://www.sdi.com.sa/contact",
    siteName: "Sadara Development Investment Company",
    images: [
      {
        url: "/sadara-contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sadara Development Contact - Al-Khobar Gate Tower | اتصل بشركة سدارى - برج الخبر جيت",
      },
    ],
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "اتصل بنا | Contact Sadara Development - Al-Khobar",
    description:
      "مقرنا الرئيسي في الخبر. تواصل معنا للاستفسارات الاستثمارية وفرص الشراكة. البريد الإلكتروني: info@sdi.com.sa",
    images: ["/sadara-contact-twitter.jpg"],
    creator: "@SadaraDev",
    site: "@SadaraDev",
  },

  alternates: {
    canonical: "https://www.sdi.com.sa/contact",
    languages: {
      ar: "https://www.sdi.com.sa/ar/contact",
      en: "https://www.sdi.com.sa/en/contact",
    },
  },

  category: "business",
  classification:
    "Contact Information | Corporate Headquarters | Business Inquiries",

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Sadara Development Investment Company",
      description:
        "Contact page for Sadara Development Investment Company - Headquarters in Al-Khobar, Saudi Arabia",
      url: "https://www.sdi.com.sa/contact",
      isPartOf: {
        "@type": "WebSite",
        name: "Sadara Development Investment Company",
        url: "https://www.sdi.com.sa",
      },
      mainEntity: {
        "@type": "Corporation",
        name: "Sadara Development Investment Company",
        alternateName: "شركة صدارة التنمية للإستثمار",
        url: "https://www.sdi.com.sa",
        email: "info@sdi.com.sa",
        telephone: "+966-XXX-XXXXXX", // Add actual phone number
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Al-Khobar Gate Tower, King Fahd Road, Al-Bandariyah District",
          addressLocality: "Al-Khobar",
          addressRegion: "Eastern Province",
          postalCode: "3422",
          addressCountry: "SA",
          addressCountryCode: "SA",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "general inquiries",
            email: "info@sdi.com.sa",
            availableLanguage: ["Arabic", "English"],
            areaServed: "SA",
          },
          {
            "@type": "ContactPoint",
            contactType: "investment inquiries",
            email: "investment@sdi.com.sa",
            availableLanguage: ["Arabic", "English"],
            areaServed: "SA",
          },
          {
            "@type": "ContactPoint",
            contactType: "supplier registration",
            email: "suppliers@sdi.com.sa",
            availableLanguage: ["Arabic", "English"],
            areaServed: "SA",
          },
          {
            "@type": "ContactPoint",
            contactType: "careers",
            email: "careers@sdi.com.sa",
            availableLanguage: ["Arabic", "English"],
            areaServed: "SA",
          },
        ],
        location: {
          "@type": "Place",
          name: "Sadara Development Headquarters",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Al-Khobar Gate Tower, King Fahd Road, Al-Bandariyah District",
            addressLocality: "Al-Khobar",
            addressRegion: "Eastern Province",
            postalCode: "3422",
            addressCountry: "SA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.2796,
            longitude: 50.2088, // Approximate coordinates for Al-Khobar - adjust as needed
          },
        },
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://www.sdi.com.sa",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "اتصل بنا",
            item: "https://www.sdi.com.sa/contact",
          },
        ],
      },
    }),
  },
};
export default function Contact() {
  return (
    <>
      <DynamicTitle
        en="Contact Us | Sadara Development and Investment Company – Main Headquarters Al Khobar, Kingdom of Saudi Arabia"
        ar="اتصل بنا | شركة صدارة التنمية للإستثمار - المقر الرئيسي الخبر المملكة العربية السعودية"
      />
      {/* <HeroService image="/h1.jpg" title="contact.heroTitle" /> */}

      <ContactSection />
    </>
  );
}
