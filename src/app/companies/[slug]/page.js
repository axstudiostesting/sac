import CompanyDetail from "@/components/CompanyDetails";
import { translations } from "@/utils/translations";

const COMPANIES_TITLES = {
  sadara: {
    en: "Sadara Development - Sadara Group",
    ar: "صدارة للتنمية - مجموعة صدارة",
  },
  "saudi-call": {
    en: "Saudi Call - Sadara Group",
    ar: "سعودي كول - مجموعة صدارة",
  },
  ebreez: {
    en: "Ebreez Arabia - Sadara Group",
    ar: "إبريز العربية - مجموعة صدارة",
  },
  mawad: {
    en: "Mawad - Sadara Group",
    ar: "مواد - مجموعة صدارة",
  },
  plastech: {
    en: "Plastech - Sadara Group",
    ar: "بلاستك - مجموعة صدارة",
  },
  jovae: {
    en: "Jovae Industrial - Sadara Group",
    ar: " جوفية الصناعية - مجموعة صدارة",
  },
  "salam-station": {
    en: "Salam Roads Petroleum Services - Sadara Group",
    ar: "سلام الطرق للخدمات البترولية - مجموعة صدارة",
  },
  wajd: {
    en: "Wajd Management and Services",
    ar: "وجد للإدارة والخدمات",
  },
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
  const titles = COMPANIES_TITLES[slug];

  return {
    title: titles
      ? `${titles.en} | ${titles.ar}`
      : `${slug.replace(/-/g, " ")} | Sadara Group`,
    description: company?.shortDescription,
  };
}

export default async function CompanyPage({ params }) {
  const { slug } = await params;
  const titles = COMPANIES_TITLES[slug] || {
    en: slug.replace(/-/g, " "),
    ar: slug.replace(/-/g, " "),
  };
  return <CompanyDetail slug={slug} titleEn={titles.en} titleAr={titles.ar} />;
}
