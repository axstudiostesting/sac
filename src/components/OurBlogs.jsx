"use client";
import SpacingWrapper from "./SpacingWrapper";
import Title from "./Title";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function News() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const newsItems = [
    {
      title: t("news.newShowroomRiyadh"),
      desc: t("news.newShowroomDesc"),
      img: "/openin.jpg",
      date: "August, 2025",
      location: "Riyadh Arid",
      tag: t("news.grandOpening"),
    },
    {
      title: t("news.dammamShowroom"),
      desc: t("news.dammamShowroomDesc"),
      img: "/openin.jpg",
      date: "August, 2025",
      location: "Dammam Howezi City",
      tag: t("news.exclusivePreview"),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <span id="news">
      <SpacingWrapper>
        <Title text={t("news.title")} para={t("news.subtitle")} />

        <div className="px-4 py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              data-aos="fade-up"
            >
              <div className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#F3F2EF]">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7389627238129930241?collapsed=1"
                  height="560"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn Post"
                  className="w-full min-h-[560px] border-0 bg-white"
                ></iframe>
              </div>

              <div className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#F3F2EF]">
                <div className="relative w-full" style={{ paddingTop: "177%" }}>
                  <iframe
                    src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7383399425626259456?collapsed=1"
                    frameBorder="0"
                    allowFullScreen
                    title="LinkedIn Post"
                    className="absolute inset-0 w-full h-full border-0 bg-white"
                  ></iframe>
                </div>
              </div>

              <div className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#F3F2EF]">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7362738714831204353?collapsed=1"
                  height="670"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn Post"
                  className="w-full min-h-[670px] border-0 bg-white"
                ></iframe>
              </div>
            </div>

            {/* Featured News Banner */}
            <div
              className="mb-16 relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
              <img
                src="/grand.jpg"
                alt="Lightning Showrooms"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 z-20 p-8 text-white">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white bg-secondary rounded-full">
                  {t("news.comingSoon")}
                </span>
                <h2 className="text-4xl font-bold mb-2">
                  {t("news.lightningShowrooms")}
                </h2>
                <p className="text-xl mb-4 max-w-2xl">
                  {t("news.lightningDescription")}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    📍 {t("news.multipleLocations")}
                  </span>
                  <span className="flex items-center">August 2025</span>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div
                    className={`absolute top-4 z-10 ${
                      isRTL ? "left-4" : "right-4"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-white bg-primary rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6 bg-white">
                    <div
                      className={`flex items-center text-sm text-gray-500 mb-2 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      📍 {item.location}
                    </div>
                    <h3
                      className={`text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-gray-600 mb-4 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {item.desc}
                    </p>
                    <div
                      className={`flex items-center ${
                        isRTL
                          ? "flex-row-reverse justify-between"
                          : "justify-between"
                      }`}
                    >
                      <span className="text-sm font-medium text-secondary">
                        {item.date}
                      </span>
                      {/* <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-secondary rounded-full hover:bg-primary transition-colors"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SpacingWrapper>
    </span>
  );
}
