"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FiArrowRight,
  FiChevronRight,
  FiCalendar,
  FiEye,
  FiMapPin,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const NewsEventsSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get only first 4 items from media
  const allItems = t("media.items") || [];
  const mediaItems = allItems.slice(0, 4);

  // Mobile view - Grid cards
  if (isMobile) {
    return (
      <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
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

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
          <div data-aos="fade-up">
            <SectionTitle
              badge={t("media.badge")}
              title={t("media.title")}
              highlightedText={t("media.highlightedText")}
              subtitle={t("media.subtitle")}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {mediaItems.map((item, idx) => (
              <div
                key={item.id || idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${item.type === "news"
                          ? "bg-blue-500 text-white"
                          : "bg-primary text-white"
                        }`}
                    >
                      {item.type === "news"
                        ? t("media.news")
                        : t("media.event")}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-2 flex-wrap">
                    <FiCalendar className="w-3 h-3 text-primary" />
                    <span>{item.date}</span>
                    {item.type === "news" && item.readTime && (
                      <>
                        <span>•</span>
                        <FiEye className="w-3 h-3 text-primary" />
                        <span>{item.readTime}</span>
                      </>
                    )}
                    {item.type === "events" && item.location && (
                      <>
                        <span>•</span>
                        <FiMapPin className="w-3 h-3 text-primary" />
                        <span className="truncate">{item.location}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <Link href={`/media/${item.slug}`}>
                    <button className="group/btn inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300">
                      {t("media.readMore")}
                      {isRTL ? (
                        <FiChevronRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                      ) : (
                        <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop view - Equal size cards, expand on hover
  const equalWidth = `${100 / mediaItems.length}%`;

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Pattern Overlays */}
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

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        <div data-aos="fade-up">
          <SectionTitle
            badge={t("media.badge")}
            title={t("media.title")}
            highlightedText={t("media.highlightedText")}
            subtitle={t("media.subtitle")}
          />
        </div>

        {/* Equal Size Cards */}
        <div className="flex h-[600px] w-full gap-4 mt-12">
          {mediaItems.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                style={{ width: equalWidth }}
                className={`relative flex items-end justify-start text-white transition-all duration-500 rounded-xl overflow-hidden group cursor-pointer
                  ${isActive ? "scale-[1.02] shadow-2xl z-10" : "scale-100"}`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                {/* Overlay - Darker on inactive, lighter on active */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${isActive
                      ? "bg-gradient-to-t from-black/90 via-black/60 to-black/40"
                      : "bg-black/80 group-hover:bg-black/70"
                    }`}
                />

                {/* Type Badge - Show on all cards */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${item.type === "news"
                        ? "bg-blue-500 text-white"
                        : "bg-primary text-white"
                      }`}
                  >
                    {item.type === "news" ? t("media.news") : t("media.event")}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 transition-all duration-500 w-full">
                  {isActive ? (
                    // Expanded Content
                    <div className="animate-fadeIn">
                      {/* Date and Meta */}
                      <div className="flex items-center gap-3 text-gray-200 text-xs mb-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                        {item.type === "news" && item.readTime && (
                          <div className="flex items-center gap-1">
                            <FiEye className="w-3 h-3" />
                            <span>{item.readTime}</span>
                          </div>
                        )}
                        {item.type === "events" && item.location && (
                          <div className="flex items-center gap-1">
                            <FiMapPin className="w-3 h-3" />
                            <span className="truncate max-w-[150px]">
                              {item.location}
                            </span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      <Link href={`/media/${item.slug}`}>
                        <button className="group/btn inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300">
                          {t("media.readMore")}
                          {isRTL ? (
                            <FiChevronRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                          ) : (
                            <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          )}
                        </button>
                      </Link>
                    </div>
                  ) : (
                    // Collapsed Content - Centered Title
                    <div className="flex flex-col items-center justify-center text-center w-full h-full">
                      <h3 className="text-lg font-bold line-clamp-3 mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300 text-xs">
                        <FiCalendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default NewsEventsSection;
