"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";

// Import premium icons
import {
  HiOutlineCog,
  HiOutlinePuzzle,
  HiOutlineCurrencyDollar,
  HiOutlineEmojiHappy,
  HiOutlineRefresh,
} from "react-icons/hi";

const ServicePhilosophy = () => {
  const { isRTL, language } = useLanguage();
  const { t } = useTranslation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Premium icons for each philosophy
  const icons = [
    <HiOutlineCog key="applicable" className="w-8 h-8" />,
    <HiOutlinePuzzle key="customizable" className="w-8 h-8" />,
    <HiOutlineCurrencyDollar key="affordable" className="w-8 h-8" />,
    <HiOutlineEmojiHappy key="satisfiable" className="w-8 h-8" />,
    <HiOutlineRefresh key="improvable" className="w-8 h-8" />,
  ];

  // Animation directions (left/right alternating)
  const animations = [
    "fade-right",
    "fade-left",
    "fade-right",
    "fade-left",
    "fade-right",
  ];

  return (
    <section className="relative py-20 md:py-24 lg:py-28 bg-[#27374e] overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16 md:mb-20"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="text-white/90 font-semibold text-sm md:text-base tracking-wider uppercase bg-white/10 px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm">
              {t("servicePhilosophy.badge")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            {t("servicePhilosophy.title")}{" "}
            <span className="text-white/90 relative">
              {t("servicePhilosophy.titleHighlight")}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></span>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            {t("servicePhilosophy.subtitle")}
          </p>
        </div>

        {/* Philosophy Grid - 5 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* First 3 cards */}
          {[0, 1, 2].map((index) => {
            const item = t(`servicePhilosophy.items.${index}`);

            return (
              <div
                key={index}
                data-aos={animations[index]}
                data-aos-delay={index * 100}
                className="group relative h-full"
              >
                {/* Premium Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Decorative Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#27374e]/0 via-[#27374e]/50 to-[#27374e]/0"></div>

                  {/* Background Pattern (subtle) */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute top-10 right-10 w-20 h-20 border-8 border-[#27374e]/10 rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-16 h-16 border-8 border-[#27374e]/10 rounded-full"></div>
                  </div>

                  {/* Number Badge */}
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-[#27374e]/20 group-hover:text-[#27374e]/30 transition-colors duration-300">
                      {language === "ar"
                        ? ["01", "02", "03", "04", "05", "06", "07"][index]
                        : ["01", "02", "03", "04", "05", "06", "07"][index]}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#27374e] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#27374e] to-[#27374e]/80 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {icons[index]}
                    </div>
                  </div>

                  {/* Title Section */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#27374e]">
                      {item?.arabicTitle}
                    </h3>
                    <p className="text-[#27374e]/60 text-lg font-medium">
                      ({item?.title})
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item?.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      className="w-8 h-8 text-[#27374e]/20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row - Last 2 Cards (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mt-6 md:mt-8">
          {[3, 4].map((index) => {
            const item = t(`servicePhilosophy.items.${index}`);

            return (
              <div
                key={index}
                data-aos={animations[index]}
                data-aos-delay={index * 100}
                className="group relative h-full"
              >
                {/* Premium Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Decorative Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#27374e]/0 via-[#27374e]/50 to-[#27374e]/0"></div>

                  {/* Background Pattern (subtle) */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute top-10 right-10 w-20 h-20 border-8 border-[#27374e]/10 rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-16 h-16 border-8 border-[#27374e]/10 rounded-full"></div>
                  </div>

                  {/* Number Badge */}
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-[#27374e]/20 group-hover:text-[#27374e]/30 transition-colors duration-300">
                      {["01", "02", "03", "04", "05", "06", "07"][index]}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#27374e] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#27374e] to-[#27374e]/80 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {icons[index]}
                    </div>
                  </div>

                  {/* Title Section */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#27374e]">
                      {item?.arabicTitle}
                    </h3>
                    <p className="text-[#27374e]/60 text-lg font-medium">
                      ({item?.title})
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item?.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      className="w-8 h-8 text-[#27374e]/20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Bottom Line */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-[2px] bg-white/20"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse delay-200"></div>
            </div>
            <div className="w-12 h-[2px] bg-white/20"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicePhilosophy;
