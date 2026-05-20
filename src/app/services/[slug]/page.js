import ServiceDetail from "@/components/ServiceDetails";
const SERVICE_TITLES = {
  "telecom-it":
    "Telecom & IT - Sadara Group | الاتصالات وتقنية المعلومات - مجموعة صدارة",
  "industrial-security":
    "Industrial Security - Sadara Group | الأمن الصناعي - مجموعة صدارة",
  "facility-management":
    "Facility Management - Sadara Group | إدارة المرافق - مجموعة صدارة",
  "oil-gas": "Oil & Gas - Sadara Group | النفط والغاز - مجموعة صدارة",
  manufacturing: "Manufacturing - Sadara Group | التصنيع - مجموعة صدارة",
  "real-estate": "Real Estate - Sadara Group | العقارات - مجموعة صدارة",
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
  return {
    title: SERVICE_TITLES[slug] ?? `${slug.replace(/-/g, " ")} | Sadara Group`,
    description:
      "Professional services by Sadara Development Investment Company",
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  return <ServiceDetail slug={slug} />;
}
