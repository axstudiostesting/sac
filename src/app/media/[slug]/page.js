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
  "annual-gala-dinner-2024":
    "Annual Gala Dinner 2024 - Sadara Group | العشاء السنوي 2024 - مجموعة صدارة",
  "award-excellence-facility-management":
    "Award for Excellence in Facility Management - Sadara Group | جائزة التميز في إدارة المرافق - مجموعة صدارة",
  "new-data-center-solutions":
    "New Data Center Solutions - Sadara Group | حلول مراكز البيانات الجديدة - مجموعة صدارة",
  "digital-transformation-forum-2024":
    "Digital Transformation Forum 2024 - Sadara Group | منتدى التحول الرقمي 2024 - مجموعة صدارة",
  "free-consultation-campaign":
    "Free Consultation Campaign - Sadara Group | حملة الاستشارات المجانية - مجموعة صدارة",
};

// Short bilingual descriptions per article — used for meta description.
const MEDIA_DESCRIPTIONS = {
  "saudi-call-launches-advanced-security-solutions":
    "Saudi Call launches AI-powered security solutions with real-time threat detection for businesses across Saudi Arabia. سعودي كول تطلق حلول أمنية متطورة بالذكاء الاصطناعي.",
  "tech-summit-2024-riyadh":
    "Sadara Group participates in Tech Summit 2024, the largest technology conference in Riyadh, KSA. مجموعة صدارة تشارك في قمة التقنية 2024 بالرياض.",
  "partnership-announcement-tech-giant":
    "Sadara Group announces a strategic partnership bringing world-class technology solutions to the Saudi market. مجموعة صدارة تعلن شراكة استراتيجية مع عملاق تقني.",
  "cybersecurity-workshop-2024":
    "Hands-on cybersecurity workshop covering current threats, protection strategies, and incident response. ورشة عمل عملية حول الأمن السيبراني واستراتيجيات الحماية.",
  "expanding-operations-new-cities":
    "Saudi Call expands operations to 5 new cities across the Kingdom including Dammam, Jubail, and Tabuk. سعودي كول توسع نطاق عملها إلى 5 مدن جديدة.",
  "annual-gala-dinner-2024":
    "Sadara Group celebrates another year of achievements with clients and partners at its annual gala dinner. مجموعة صدارة تحتفل بإنجازاتها مع العملاء والشركاء.",
  "award-excellence-facility-management":
    "Sadara Group recognized as the best facility management service provider for 2024 in Saudi Arabia. مجموعة صدارة الأفضل في إدارة المرافق لعام 2024.",
  "new-data-center-solutions":
    "Sadara Group launches state-of-the-art data center solutions with enhanced security and scalability. مجموعة صدارة تطلق حلول مراكز بيانات متطورة.",
  "digital-transformation-forum-2024":
    "Sadara Group discusses the future of digital transformation in Saudi Arabia at this industry forum. مجموعة صدارة تناقش مستقبل التحول الرقمي في المملكة.",
  "free-consultation-campaign":
    "Limited-time free consultation campaign for businesses upgrading their technology infrastructure. حملة استشارات مجانية محدودة للشركات الراغبة بالتطوير.",
};

export async function generateStaticParams() {
  return Object.keys(MEDIA_TITLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: MEDIA_TITLES[slug] ?? `${slug.replace(/-/g, " ")} | Sadara Group`,
    description:
      MEDIA_DESCRIPTIONS[slug] ??
      "Read more about this latest update from Sadara Group | Sadara Development Investment Company.",
    alternates: {
      canonical: `https://www.sdi.com.sa/media/${slug}`,
    },
    openGraph: {
      title: MEDIA_TITLES[slug],
      description: MEDIA_DESCRIPTIONS[slug],
      url: `https://www.sdi.com.sa/media/${slug}`,
      type: "article",
    },
  };
}

export default async function MediaDetailPage({ params }) {
  const { slug } = await params;
  return <MediaDetail slug={slug} />;
}
