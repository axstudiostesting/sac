"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FiCalendar,
  FiUser,
  FiArrowLeft,
  FiArrowRight,
  FiEye,
  FiMapPin,
  FiClock,
  FiTag,
  FiShare2,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { translations } from "@/utils/translations";

const MediaDetail = ({ slug }) => {
  const { isRTL, language } = useLanguage();
  const { t } = useTranslation();
  const [item, setItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const mediaItems = translations[language]?.media?.items || [];
    const foundItem = mediaItems.find((item) => item.slug === slug);
    setItem(foundItem);

    if (foundItem) {
      const related = mediaItems
        .filter(
          (item) => item.id !== foundItem.id && item.type === foundItem.type,
        )
        .slice(0, 3);
      setRelatedItems(related);
    }
  }, [slug, language]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">{t("media.notFound")}</p>
      </div>
    );
  }

  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div data-aos="fade-right" className="mb-8">
          <Link href="/media">
            <button className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
              {isRTL ? (
                <FiArrowRight className="w-5 h-5" />
              ) : (
                <FiArrowLeft className="w-5 h-5" />
              )}
              <span>{t("media.backToMedia")}</span>
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div data-aos="fade-up">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${item.type === "news" ? "bg-blue-500" : "bg-primary"
                      }`}
                  >
                    {item.type === "news" ? t("media.news") : t("media.event")}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4 text-primary" />
                  <span>{item.date}</span>
                </div>
                {item.type === "news" && item.readTime && (
                  <div className="flex items-center gap-2">
                    <FiEye className="w-4 h-4 text-primary" />
                    <span>{item.readTime}</span>
                  </div>
                )}
                {item.type === "events" && item.location && (
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4 text-primary" />
                    <span>{item.location}</span>
                  </div>
                )}
                {item.type === "events" && item.time && (
                  <div className="flex items-center gap-2">
                    <FiClock className="w-4 h-4 text-primary" />
                    <span>{item.time}</span>
                  </div>
                )}
                {item.author && (
                  <div className="flex items-center gap-2">
                    <FiUser className="w-4 h-4 text-primary" />
                    <span>{item.author}</span>
                  </div>
                )}
                {item.category && (
                  <div className="flex items-center gap-2">
                    <FiTag className="w-4 h-4 text-primary" />
                    <span>{item.category}</span>
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {item.title}
              </h1>

              <div
                className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-semibold">
                    {t("media.share")}:
                  </span>
                  <button className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.997-11.024 9.87 9.87 0 002.2-2.285z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {relatedItems.length > 0 && (
              <div
                data-aos="fade-left"
                className="bg-white rounded-2xl p-6 shadow-md sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {t("media.relatedArticles")}
                </h3>
                <div className="space-y-6">
                  {relatedItems.map((related) => (
                    <Link key={related.id} href={`/media/${related.slug}`}>
                      <div className="group flex gap-4 my-3 cursor-pointer">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">
                            {related.date}
                          </p>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="bg-primary/5 rounded-2xl p-6 text-center mt-6"
            >
              <h4 className="font-bold text-gray-900 mb-2">
                {t("media.newsletter")}
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                {t("media.newsletterDesc")}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t("media.emailPlaceholder")}
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors">
                  {t("media.subscribe")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaDetail;
