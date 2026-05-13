"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const NewsSection = () => {
  const { isRTL, locale } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const items = t("media.items") || [];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <SectionTitle
          badge={t("media.badge")}
          title={t("media.title")}
          highlightedText={t("media.highlightedText")}
          subtitle={t("media.subtitle")}
        />

        {/* 🔥 SCROLL CONTAINER */}
        <div
          className={`flex gap-6 mt-10 overflow-x-auto pb-4 hide-scrollbar ${isRTL ? "flex-row-reverse" : ""
            }`}
        >
          {items.slice(0, 6).map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="min-w-[280px] max-w-[320px] flex-shrink-0 group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* IMAGE */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`p-5 flex flex-col flex-grow ${isRTL ? "text-right" : "text-left"}`}
                >
                  {/* META */}
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-2 flex-wrap">
                    <FiCalendar className="w-3 h-3 text-primary" />
                    <span>{item.date}</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <Link href={`/media/${item.slug}`} className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      {t("media.readMore")}
                      <FiArrowRight
                        className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-10">
          <Link href="/media">
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold">
              {t("media.viewAll")}
            </button>
          </Link>
        </div>
      </div>

      {/* HIDE SCROLLBAR */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default NewsSection;
