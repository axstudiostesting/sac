import CompanyDetail from "@/components/CompanyDetails";
import { translations } from "@/utils/translations";
const COMPANIES_TITLES = {
  sadara: "Sadara Development - Sadara Group | صدارة للتنمية - مجموعة صدارة",
  "saudi-call": "Saudi Call - Sadara Group | سعودي كول - مجموعة صدارة",
  ebreez: "Ebreez Arabia - Sadara Group | إبريز العربية - مجموعة صدارة",
  mawad: "Mawad - Sadara Group - مواد - مجموعة صدارة",
  plastech: "Plastech - Sadara Group | بلاستك - مجموعة صدارة",
  jovae: "Jovae Industrial - Sadara Group | جوفاي الصناعية - مجموعة صدارة",
  "salam-station":
    "Salam Roads Petroleum Services - Sadara Group | سلام رودز لخدمات البترول - مجموعة صدارة",
  wajd: "Wajd Management and Services | Wajd Management and Services | وجد للإدارة والخدمات | وجد للإدارة والخدمات",
};
export async function generateStaticParams() {
  const companies = translations.en.companies.data;
  return companies.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const company = translations.en.companies.data.find((c) => c.slug === slug);

  return {
    // title: `${company?.name} | Sadara Group`,
    title:
      COMPANIES_TITLES[slug] ?? `${slug.replace(/-/g, " ")} | Sadara Group`,
    description: company?.shortDescription,
  };
}

export default async function CompanyPage({ params }) {
  const { slug } = await params;
  return <CompanyDetail slug={slug} />;
}
