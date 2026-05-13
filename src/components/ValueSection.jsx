"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  HiOutlineRefresh,
  HiOutlineStar,
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiOutlineAdjustments,
} from "react-icons/hi";

const Values = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const valuesList = [
    {
      key: "continuous",
      icon: <HiOutlineRefresh className="w-6 h-6" />,
    },
    {
      key: "excellence",
      icon: <HiOutlineStar className="w-6 h-6" />,
    },
    {
      key: "professionalism",
      icon: <HiOutlineBadgeCheck className="w-6 h-6" />,
    },
    {
      key: "commitment",
      icon: <HiOutlineShieldCheck className="w-6 h-6" />,
    },
    {
      key: "flexibility",
      icon: <HiOutlineAdjustments className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-16 md:pt-20 lg:pt-24 bg-[#E9EFF2] overflow-hidden">
      {/* Subtle Background Pattern - exactly like image */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Very Subtle Gradient Orbs - barely visible like image */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header - exactly like image */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#27374e] font-semibold text-sm md:text-base tracking-wider uppercase bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10">
              {t("values.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("values.title")}{" "}
            <span className="text-[#27374e]">{t("values.highlighted")}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("values.subtitle")}
          </p>
          <div className="w-24 h-1 bg-[#27374e]/20 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-8 items-start`}>
          {/* Left Column - Values List */}
          <div className={`space-y-4 ${isRTL ? "lg:order-2" : ""}`}>
            {valuesList.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-gray-200 hover:border-[#27374e]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Left Accent Bar - primary color on hover */}
                <div
                  className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} w-1 h-full bg-[#27374e] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}
                ></div>

                <div className="relative p-5 md:p-6">
                  <div
                    className={`flex gap-4 ${isRTL ? "flex-row" : "flex-row"}`}
                  >
                    {/* Icon Container - primary color - MOVED TO RIGHT IN RTL */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-[#27374e]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-[#27374e] ${
                        isRTL ? "order-2" : "order-1"
                      }`}
                    >
                      {value.icon}
                    </div>

                    {/* Text Content */}
                    <div
                      className={`flex-1 ${isRTL ? "order-1 text-right" : "order-2 text-left"}`}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#27374e] transition-colors duration-300">
                        {t(`values.${value.key}.title`)}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {t(`values.${value.key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative flex items-center justify-center ${isRTL ? "lg:order-1" : ""}`}
          >
            {/* Image Container */}
            <div className="relative group w-full h-full p-16">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/values.jpeg"
                    alt={t("values.imageAlt")}
                    fill
                    className=" group-hover:scale-105 transition-transform duration-700 w-48"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#27374e]/10 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Decorative Elements - primary color accents */}
              <div
                className={`absolute -top-4 -right-4 w-32 h-32 border-t-4 border-r-4 border-[#27374e]/20 rounded-tr-3xl`}
              ></div>
              <div
                className={`absolute -bottom-4 -left-4 w-32 h-32 border-b-4 border-l-4 border-[#27374e]/20 rounded-bl-3xl`}
              ></div>

              {/* Trust Badge - primary color */}
              <div
                className={`absolute bottom-8 ${isRTL ? "left-8" : "right-8"} bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-100`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-medium">
                    {t("values.stats.trust")}
                  </span>
                  <span className="text-[#27374e] font-bold ltr-nums" dir="ltr">
                    98%
                  </span>
                </div>
              </div>
            </div>

            {/* Connection Pattern - primary color */}
            <div className="hidden lg:block absolute top-1/2 -left-8 w-16 h-[2px] bg-gradient-to-r from-transparent to-[#27374e]/20"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Values;
