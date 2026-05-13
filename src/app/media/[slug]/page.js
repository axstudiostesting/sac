import MediaDetail from "@/components/MediaDetail";
export async function generateStaticParams() {
  // This will be populated at build time
  // You can fetch slugs from your data source
  const slugs = [
    { slug: "saudi-call-launches-advanced-security-solutions" },
    { slug: "tech-summit-2024-riyadh" },
    { slug: "partnership-announcement-tech-giant" },
    { slug: "cybersecurity-workshop-2024" },
    { slug: "expanding-operations-new-cities" },
  ];
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Sadara Group`,
    description: "Read more about this latest update from Sadara Group",
  };
}

export default async function MediaDetailPage({ params }) {
  const { slug } = await params;
  return <MediaDetail slug={slug} />;
}
