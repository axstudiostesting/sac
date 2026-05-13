"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FiRadio,
  FiShield,
  FiHome,
  FiDroplet,
  FiTruck,
  FiSettings,
  FiTool,
  FiBox,
  FiPackage,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const SectorsSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const sectors = [
    {
      titleKey: "sectors.telecom.title",
      descKey: "sectors.telecom.desc",
      icon: FiRadio,
      link: "/services/telecom-it",
    },
    {
      titleKey: "sectors.security.title",
      descKey: "sectors.security.desc",
      icon: FiShield,
      link: "/services/industrial-security",
    },
    {
      titleKey: "sectors.realestate.title",
      descKey: "sectors.realestate.desc",
      icon: FiHome,
      link: "/services/real-estate",
    },
    {
      titleKey: "sectors.oilgas.title",
      descKey: "sectors.oilgas.desc",
      icon: FiDroplet,
      link: "/services/oil-gas",
    },
    {
      titleKey: "sectors.petroleum.title",
      descKey: "sectors.petroleum.desc",
      icon: FiTruck,
      link: "/services/petroleum-services",
    },
    {
      titleKey: "sectors.operational.title",
      descKey: "sectors.operational.desc",
      icon: FiSettings,
      link: "/services/operational-services",
    },
    {
      titleKey: "sectors.facility.title",
      descKey: "sectors.facility.desc",
      icon: FiTool,
      link: "/services/facility-management",
    },
    {
      titleKey: "sectors.manufacturing.title",
      descKey: "sectors.manufacturing.desc",
      icon: FiBox,
      link: "/services/manufacturing",
    },
    {
      titleKey: "sectors.plastic.title",
      descKey: "sectors.plastic.desc",
      icon: FiPackage,
      link: "/services/plastic-industries",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div data-aos="fade-up">
            <SectionTitle
              badge={t("sectors.badge")}
              title={t("sectors.title")}
              highlightedText={t("sectors.titleHighlight")}
              subtitle={t("sectors.subtitle")}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            const aosAnimation = idx % 2 === 0 ? "fade-up" : "fade-down";

            return (
              <Link href={sector.link} key={sector.titleKey}>
                <div
                  data-aos={aosAnimation}
                  data-aos-delay={idx * 80}
                  className="group relative h-full cursor-pointer"
                >
                  <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Top gradient line */}
                    <div
                      className={`absolute top-[2px] left-4 right-4 h-[2px]b${
                        isRTL
                          ? "bg-gradient-to-l from-transparent via-[#27374e]/80 to-transparent"
                          : "bg-gradient-to-r from-transparent via-[#27374e]/80 to-transparent"
                      }`}
                    />

                    {/* Background subtle pattern */}

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#27374e] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#27374e] to-[#27374e]/80 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#27374e] mb-2">
                      {t(sector.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(sector.descKey)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
