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
  return {
    title: titles
      ? `${titles.en} | ${titles.ar}`
      : `${slug.replace(/-/g, " ")} | Sadara Group`,
    description:
      "Professional services by Sadara Development Investment Company",
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
