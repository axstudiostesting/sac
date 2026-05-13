"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const ServicesSection = () => {
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

  const services = [
    {
      titleKey: "services.telecom.title",
      descKey: "services.telecom.shortDesc",
      image: "/h1b.jpg",
      link: "/services/telecom-it",
    },
    {
      titleKey: "services.security.title",
      descKey: "services.security.shortDesc",
      image: "/img2.jpg",
      link: "/services/industrial-security",
    },
    {
      titleKey: "services.facility.title",
      descKey: "services.facility.shortDesc",
      image: "/img3.jpg",
      link: "/services/facility-management",
    },
    {
      titleKey: "services.oilgas.title",
      descKey: "services.oilgas.shortDesc",
      image: "/h1b.jpg",
      link: "/services/oil-gas",
    },
    {
      titleKey: "services.manufacturing.title",
      descKey: "services.manufacturing.shortDesc",
      image: "/img2.jpg",
      link: "/services/manufacturing",
    },
    {
      titleKey: "services.realestate.title",
      descKey: "services.realestate.shortDesc",
      image: "/img3.jpg",
      link: "/services/real-estate",
    },
  ];

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

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
          <div data-aos="fade-up">
            <SectionTitle
              badge={t("services.badge")}
              title={t("services.title")}
              highlightedText={t("services.highlightedText")}
              subtitle={t("services.subtitle")}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#27374e] transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {t(service.descKey)}
                  </p>
                  <Link href={service.link}>
                    <button className="inline-flex items-center gap-2 text-[#27374e] font-semibold text-sm group/btn hover:gap-3 transition-all duration-300">
                      {t("services.readMore")}
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

  // Desktop view - Expandable cards
  const equalWidth = 100 / services.length;

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
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

      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div data-aos="fade-up">
          <SectionTitle
            badge={t("services.badge")}
            title={t("services.title")}
            highlightedText={t("services.highlightedText")}
            subtitle={t("services.subtitle")}
          />
        </div>

        <div className="flex h-[600px] w-full overflow-hidden rounded-2xl gap-3 mt-12">
          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                style={{
                  width:
                    active !== null
                      ? isActive
                        ? "55%"
                        : `${45 / (services.length - 1)}%`
                      : `${equalWidth}%`,
                }}
                className={`relative flex items-end justify-start text-white transition-all duration-500 cursor-pointer rounded-xl overflow-hidden group
                  ${isActive ? "shadow-2xl ring-2 ring-primary/20" : ""}`}
              >
                <Image
                  src={service.image}
                  alt={t(service.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/85 via-black/50 to-black/30"
                      : "bg-black/70 group-hover:bg-black/60"
                  }`}
                />

                <div className="relative z-10 p-8 transition-all duration-500 w-full">
                  {!isActive && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                      <h2
                        className="text-base md:text-lg font-bold whitespace-nowrap rotate-90 origin-center opacity-90 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                        }}
                      >
                        {t(service.titleKey)}
                      </h2>
                    </div>
                  )}

                  {isActive && (
                    <div className="animate-fadeIn">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                        {t(service.titleKey)}
                      </h2>
                      <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed max-w-md">
                        {t(service.descKey)}
                      </p>
                      <Link href={service.link}>
                        <button className="group/btn inline-flex items-center gap-3 bg-white text-[#27374e] px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base hover:bg-[#27374e] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                          <span>{t("services.readMore")}</span>
                          {isRTL ? (
                            <FiChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:-translate-x-1 transition-transform" />
                          ) : (
                            <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                          )}
                        </button>
                      </Link>
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
