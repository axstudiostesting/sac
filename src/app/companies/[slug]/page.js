import CompanyDetail from "@/components/CompanyDetails";
import { translations } from "@/utils/translations";

const COMPANIES_TITLES = {
  "saudi-call": {
    en: "Saudi Call - Sadara Group",
    ar: "سعودي كول - مجموعة صدارة",
  },
  ebreez: {
    en: "Ebreez Arabia - Sadara Group",
    ar: "إبريز العربية - مجموعة صدارة",
  },
  mawad: {
    en: "Mawad Drilling - Sadara Group",
    ar: "مواد الحفر - مجموعة صدارة",
  },
  plastech: {
    en: "Plastech - Sadara Group",
    ar: "بلاستك - مجموعة صدارة",
  },
  jovae: {
    en: "Jovae Industrial - Sadara Group",
    ar: "جوفية الصناعية - مجموعة صدارة",
  },
  "salam-station": {
    en: "Salam Roads Petroleum Services - Sadara Group",
    ar: "سلام الطرق للخدمات البترولية - مجموعة صدارة",
  },
  wajd: {
    en: "Wajd - Sadara Group",
    ar: "وجد - مجموعة صدارة",
  },
};

// Bilingual SEO keywords per company — pulled from client's approved keyword list
// plus company-specific terms.
const COMPANIES_KEYWORDS = {
  "saudi-call": [
    "Saudi Call telecommunications",
    "السعودية كول اتصالات",
    "Al-Sheikh telecommunications company",
    "شركة الشيخ للاتصالات",
    "fiber optic networks KSA",
    "شبكات الألياف الضوئية",
    "industrial security systems HCIS",
    "أنظمة أمن صناعي معتمدة",
    "Sadara Development Investment",
    "صدارة التنمية للاستثمار",
  ],
  ebreez: [
    "Ebreez Arabia real estate",
    "إبريز العربية عقارات",
    "real estate development Khobar",
    "تطوير عقاري الخبر",
    "commercial towers Al-Khobar",
    "أبراج تجارية الخبر",
    "Sadara Development Investment",
    "صدارة التنمية للاستثمار",
  ],
  mawad: [
    "Mawad Drilling chemicals",
    "شركة مواد الحفر",
    "drilling fluid additives API",
    "مواد حفر بترولية",
    "oil and gas services Saudi Arabia",
    "خدمات النفط والغاز السعودية",
    "Sadara Development Investment",
    "صدارة التنمية للاستثمار",
  ],
  plastech: [
    "Plastech plastic manufacturing",
    "بلاستك للبلاستيك",
    "plastic manufacturing PET preforms",
    "تصنيع البلاستيك أنابيب PET",
    "blow molding injection molding KSA",
    "قوالب حقن ونفخ البلاستيك",
    "Sadara Development Investment",
    "صدارة التنمية للاستثمار",
  ],
  jovae: [
    "Jovae Britex detergents",
    "جوفاي برايتكس منظفات",
    "household detergents manufacturing",
    "تصنيع المنظفات المنزلية",
    "industrial cleaning products Saudi Arabia",
    "منتجات تنظيف صناعية",
    "Sadara Development Investment",
    "صدارة التنمية للاستثمار",
  ],
  "salam-station": [
    "Salam Station petroleum services",
    "محطة سلام للخدمات البترولية",
    "fuel stations Saudi Arabia",
    "محطات وقود السعودية",
    "petroleum services Eastern Province",
    "خدمات بترولية المنطقة الشرقية",
    "Sadara Development Investment",
    "صدارة التنمية للاستثمار",
  ],
  wajd: [
    "Wajd facility management",
    "وجد إدارة مرافق",
    "facility management KSA",
    "إدارة المرافق والمنشآت",
    "property management Saudi Arabia",
    "إدارة عقارات السعودية",
    "Sadara Development Investment",
    "صدارة التنمية للاستثمار",
  ],
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
  const companyAr = translations.ar.companies.data.find((c) => c.slug === slug);
  const titles = COMPANIES_TITLES[slug];
  const keywords = COMPANIES_KEYWORDS[slug] || [];

  const title = titles
    ? `${titles.en} | ${titles.ar}`
    : `${slug.replace(/-/g, " ")} | Sadara Group`;

  const description = company?.shortDescription
    ? `${company.shortDescription} ${companyAr?.shortDescription || ""}`.trim()
    : "Discover this Sadara Group subsidiary company.";

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: `https://www.sdi.com.sa/companies/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.sdi.com.sa/companies/${slug}`,
      images: company?.logo ? [{ url: company.logo }] : undefined,
    },
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
