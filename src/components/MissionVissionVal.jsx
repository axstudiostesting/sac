"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiEye, FiTarget } from "react-icons/fi";

const MissionVision = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Pattern - Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#27374e 1px, transparent 1px), linear-gradient(to right, #27374e 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
          <div
            className="inline-block mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase bg-primary/5 px-5 py-2 rounded-full border border-primary/10">
              {t("missionVision.badge")}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("missionVision.title")}
          </h2>
          <div
            className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full"
            data-aos="fade-up"
            data-aos-delay="300"
          ></div>
        </div>

        {/* Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start`}>
          {/* Left Column - Text Content - Always first in DOM but order controlled by CSS */}
          <div
            className={`space-y-10 ${isRTL ? "lg:order-2" : "lg:order-1"}`}
            data-aos={isRTL ? "fade-right" : "fade-left"}
            data-aos-delay="200"
          >
            {/* Vision Card */}
            <div className="group relative">
              {/* Decorative Line - Positioned correctly for RTL */}
              <div
                className={`absolute top-0 ${
                  isRTL ? "right-0" : "left-0"
                } w-1 h-0 group-hover:h-full bg-primary/30 transition-all duration-500 ease-in-out rounded-full`}
              ></div>

              <div className={`${isRTL ? "pr-6" : "pl-6"}  `}>
                {/* Icon & Title - RTL aware with icon on right and title to its left */}

                <div
                  className={`flex items-center gap-4 ${isRTL ? "justify-start" : ""}`}
                >
                  {/* Title - comes first in RTL (appears on right side of icon) */}
                  <h3
                    className={`text-2xl md:text-3xl font-bold text-gray-900 ${
                      isRTL ? "order-1 text-right" : "order-2 text-left"
                    }`}
                  >
                    {t("missionVision.vision.title")}
                  </h3>
                  {/* Icon - comes second in RTL (appears on left side of title) */}
                  <div
                    className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 bg-primary   transition-colors duration-300 flex-shrink-0 ${
                      isRTL ? "order-2" : "order-1"
                    }`}
                  >
                    <FiEye className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Description - Full width with RTL text alignment */}
                <p
                  className={`text-gray-700 text-lg leading-relaxed ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("missionVision.vision.description")}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              {/* Decorative Line - Positioned correctly for RTL */}
              <div
                className={`absolute top-0 ${
                  isRTL ? "right-0" : "left-0"
                } w-1 h-0 group-hover:h-full bg-whitransition-all duration-500 ease-in-out rounded-full`}
              ></div>

              <div className={`${isRTL ? "pr-6" : "pl-6"}`}>
                {/* Icon & Title - RTL aware with icon on right and title to its left */}
                <div
                  className={`flex items-center gap-4 ${isRTL ? "justify-start" : ""}`}
                >
                  {/* Title - comes first in RTL (appears on right side of icon) */}
                  <h3
                    className={`text-2xl md:text-3xl  font-bold text-gray-900 ${
                      isRTL ? "order-1 text-right" : "order-2 text-left"
                    }`}
                  >
                    {t("missionVision.mission.title")}
                  </h3>
                  {/* Icon - comes second in RTL (appears on left side of title) */}
                  <div
                    className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 bg-primary transition-colors duration-300 flex-shrink-0 ${
                      isRTL ? "order-2" : "order-1"
                    }`}
                  >
                    <FiTarget className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Description - Full width with RTL text alignment */}
                <p
                  className={`text-gray-700 text-lg leading-relaxed ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("missionVision.mission.description")}
                </p>
              </div>
            </div>

            {/* Decorative Quote Marks - Positioned correctly for RTL */}
            <div className="relative mt-8 hidden sm:block">
              <div
                className={`absolute ${
                  isRTL ? "right-0" : "left-0"
                } text-8xl text-primary/5 font-serif`}
              >
                {isRTL ? '"' : '"'}
              </div>
            </div>
          </div>

          {/* Right Column - Image Space */}
          <div
            className={`relative ${isRTL ? "lg:order-1" : "lg:order-2"}`}
            data-aos={isRTL ? "fade-left" : "fade-right"}
            data-aos-delay="300"
          >
            {/* Image Container */}
            <div className="relative group">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/mission.jpeg"
                    alt={t("missionVision.imageAlt")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Decorative Elements - Positioned correctly for RTL */}
              <div
                className={`absolute -top-4 ${
                  isRTL ? "-left-4" : "-right-4"
                } w-24 h-24 ${
                  isRTL
                    ? "border-t-4 border-l-4 rounded-tl-3xl"
                    : "border-t-4 border-r-4 rounded-tr-3xl"
                } border-primary/30`}
              ></div>
              <div
                className={`absolute -bottom-4 ${
                  isRTL ? "-right-4" : "-left-4"
                } w-24 h-24 ${
                  isRTL
                    ? "border-b-4 border-r-4 rounded-br-3xl"
                    : "border-b-4 border-l-4 rounded-bl-3xl"
                } border-primary/30`}
              ></div>

              {/* Floating Badge - Positioned correctly for RTL */}
              <div
                className={`absolute bottom-8 ${
                  isRTL ? "left-8" : "right-8"
                } bg-primary text-white px-4 py-2 rounded-lg shadow-lg`}
              >
                <span className="font-semibold">
                  {t("missionVision.badge")}
                </span>
              </div>
            </div>

            {/* Connection Line between Vision & Mission (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className={`flex items-center gap-2 text-primary/30 ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="w-12 h-[2px] bg-primary/20"></div>
                <BsArrowLeft
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isRTL ? "block rotate-180" : "block"
                  }`}
                />
                <div className="w-12 h-[2px] bg-primary/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Pattern */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/70 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles to override global RTL behavior */}
      <style jsx>{`
        /* Override any global RTL flex reversing */
        [dir="rtl"] .flex.items-center.gap-4 {
          flex-direction: row !important;
        }

        /* Ensure proper text alignment for Arabic */
        [dir="rtl"] .text-right {
          text-align: right !important;
        }

        /* Keep icons on right in RTL with title to its left */
        [dir="rtl"] .order-2 {
          order: 2 !important;
        }

        [dir="rtl"] .order-1 {
          order: 1 !important;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MissionVision;
