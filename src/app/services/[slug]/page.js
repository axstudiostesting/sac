import ServiceDetail from "@/components/ServiceDetails";

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
    title: `${slug.replace(/-/g, " ").toUpperCase()} | Sadara Group`,
    description:
      "Professional services by Sadara Development Investment Company",
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  return <ServiceDetail slug={slug} />;
}
