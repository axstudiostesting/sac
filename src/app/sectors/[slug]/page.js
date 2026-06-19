import ServiceDetail from "@/components/ServiceDetails";

const SERVICE_TITLES = {
  "telecom-it": {
    en: "Telecom & IT - Sadara Group",
    ar: "الاتصالات وتقنية المعلومات - مجموعة صدارة",
  },
  "industrial-security": {
    en: "Industrial Security - Sadara Group",
    ar: "الأمن الصناعي - مجموعة صدارة",
  },
  "facility-management": {
    en: "Facility Management - Sadara Group",
    ar: "إدارة المرافق - مجموعة صدارة",
  },
  "oil-gas": {
    en: "Oil & Gas - Sadara Group",
    ar: "النفط والغاز - مجموعة صدارة",
  },
  manufacturing: {
    en: "Manufacturing - Sadara Group",
    ar: "التصنيع - مجموعة صدارة",
  },
  "real-estate": {
    en: "Real Estate - Sadara Group",
    ar: "العقارات - مجموعة صدارة",
  },
};

// Bilingual SEO descriptions + keywords per sector
const SERVICE_SEO = {
  "telecom-it": {
    description:
      "Advanced telecom infrastructure, fiber optic networks, and FTTH solutions across Saudi Arabia. بنية تحتية اتصالات متطورة وشبكات ألياف ضوئية في السعودية.",
    keywords:
      "telecom infrastructure Saudi Arabia, اتصالات السعودية بنية تحتية, fiber optic networks KSA, شبكات الألياف الضوئية, FTTH solutions Saudi Arabia, حلول الألياف المنزلية",
  },
  "industrial-security": {
    description:
      "HCIS-approved industrial security systems including surveillance, access control, and perimeter protection. أنظمة أمن صناعي معتمدة من هيئة الاتصالات.",
    keywords:
      "industrial security systems HCIS, أنظمة أمن صناعي معتمدة هيئة الاتصالات, security systems HCIS, الأمن الصناعي السعودية",
  },
  "facility-management": {
    description:
      "Integrated facility management services including building operations, HVAC, and preventive maintenance. إدارة متكاملة للمرافق والمنشآت في السعودية.",
    keywords:
      "facility management KSA, إدارة المرافق والمنشآت, building operations Saudi Arabia, تشغيل المباني السعودية",
  },
  "oil-gas": {
    description:
      "Drilling fluid additives and technical support meeting API standards for the oil and gas industry. مواد حفر بترولية وفق معايير API لقطاع النفط والغاز.",
    keywords:
      "drilling fluid additives API, مواد حفر بترولية, oil and gas services Saudi Arabia, خدمات النفط والغاز السعودية",
  },
  manufacturing: {
    description:
      "Industrial and consumer product manufacturing including plastics and detergents serving Saudi and GCC markets. تصنيع منتجات صناعية واستهلاكية للسوق السعودي والخليجي.",
    keywords:
      "plastic manufacturing PET preforms, تصنيع البلاستيك أنابيب PET, household detergents manufacturing, تصنيع المنظفات المنزلية",
  },
  "real-estate": {
    description:
      "Premium residential and commercial real estate development in Al-Khobar and the Eastern Province. تطوير عقاري سكني وتجاري في الخبر والمنطقة الشرقية.",
    keywords:
      "real estate development Khobar, تطوير عقاري الخبر, commercial towers Al-Khobar, أبراج تجارية الخبر",
  },
};

export async function generateStaticParams() {
  const services = [
    { slug: "telecom-it" },
    { slug: "industrial-security" },
    { slug: "facility-management" },
    { slug: "oil-gas" },
    { slug: "manufacturing" },
    { slug: "real-estate" },
  ];
  return services;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const titles = SERVICE_TITLES[slug];
  const seo = SERVICE_SEO[slug];

  const title = titles
    ? `${titles.en} | ${titles.ar}`
    : `${slug.replace(/-/g, " ")} | Sadara Group`;

  return {
    title,
    description:
      seo?.description ||
      "Professional services by Sadara Development Investment Company.",
    keywords: seo?.keywords || "",
    alternates: {
      canonical: `https://www.sdi.com.sa/sectors/${slug}`,
    },
    openGraph: {
      title,
      description: seo?.description,
      url: `https://www.sdi.com.sa/sectors/${slug}`,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const titles = SERVICE_TITLES[slug] || {
    en: slug.replace(/-/g, " "),
    ar: slug.replace(/-/g, " "),
  };
  return <ServiceDetail slug={slug} titleEn={titles.en} titleAr={titles.ar} />;
}
