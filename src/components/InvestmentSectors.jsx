"use client";
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiCpu,
  FiShield,
  FiHome,
  FiDroplet,
  FiTruck,
  FiSettings,
  FiTool,
  FiPackage,
  FiBox,
} from "react-icons/fi";

const InvestmentSectors = () => {
  const { isRTL, language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  const sectors = [
    {
      icon: FiCpu,
      titleKey: "sectors.telecom.title",
      descKey: "sectors.telecom.desc",
      number: "01",
    },
    {
      icon: FiShield,
      titleKey: "sectors.security.title",
      descKey: "sectors.security.desc",
      number: "02",
    },
    {
      icon: FiHome,
      titleKey: "sectors.realestate.title",
      descKey: "sectors.realestate.desc",
      number: "03",
    },
    {
      icon: FiDroplet,
      titleKey: "sectors.oilgas.title",
      descKey: "sectors.oilgas.desc",
      number: "04",
    },
    {
      icon: FiTruck,
      titleKey: "sectors.petroleum.title",
      descKey: "sectors.petroleum.desc",
      number: "05",
    },
    {
      icon: FiSettings,
      titleKey: "sectors.operational.title",
      descKey: "sectors.operational.desc",
      number: "06",
    },
    {
      icon: FiTool,
      titleKey: "sectors.facility.title",
      descKey: "sectors.facility.desc",
      number: "07",
    },
    {
      icon: FiPackage,
      titleKey: "sectors.manufacturing.title",
      descKey: "sectors.manufacturing.desc",
      number: "08",
    },
    {
      icon: FiBox,
      titleKey: "sectors.plastic.title",
      descKey: "sectors.plastic.desc",
      number: "09",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
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

      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase bg-primary/10 px-5 py-2 rounded-full border border-primary/20">
              {t("sectors.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("sectors.title")}
            <span className="text-primary"> {t("sectors.titleHighlight")}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("sectors.subtitle")}
          </p>
          <div className="w-24 h-1 bg-primary/20 mx-auto mt-6 rounded-full" />
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/30"
              >
                {/* Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-primary/5 group-hover:text-primary/10 transition-all duration-300">
                  {sector.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-all duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {t(sector.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(sector.descKey)}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestmentSectors;
