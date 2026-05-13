import CompanyDetail from "@/components/CompanyDetails";
import { translations } from "@/utils/translations";

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
    title: `${company?.name} | Sadara Group`,
    description: company?.shortDescription,
  };
}

export default async function CompanyPage({ params }) {
  const { slug } = await params;
  return <CompanyDetail slug={slug} />;
}
