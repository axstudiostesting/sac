import MediaDetail from "@/components/MediaDetail";
const MEDIA_TITLES = {
  "saudi-call-launches-advanced-security-solutions":
    "Saudi Call Launches Advanced Security Solutions - Sadara Group | سعودي كول تطلق حلولًا أمنية متطورة - مجموعة صدارة",
  "tech-summit-2024-riyadh":
    "Tech Summit 2024 Riyadh - Sadara Group | قمة التقنية 2024 الرياض - مجموعة صدارة",
  "partnership-announcement-tech-giant":
    "Partnership Announcement with Tech Giant - Sadara Group | إعلان شراكة مع عملاق تقني - مجموعة صدارة",
  "cybersecurity-workshop-2024":
    "Cybersecurity Workshop 2024 - Sadara Group | ورشة عمل الأمن السيبراني 2024 - مجموعة صدارة",
  "expanding-operations-new-cities":
    "Expanding Operations to New Cities - Sadara Group | توسيع العمليات إلى مدن جديدة - مجموعة صدارة",
};
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
    title: MEDIA_TITLES[slug] ?? `${slug.replace(/-/g, " ")} | Sadara Group`,
    description: "Read more about this latest update from Sadara Group",
  };
}

export default async function MediaDetailPage({ params }) {
  const { slug } = await params;
  return <MediaDetail slug={slug} />;
}
