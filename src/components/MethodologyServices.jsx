"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineCheckCircle } from "react-icons/hi";

const Methodology = () => {
  const { isRTL, language } = useLanguage();
  const { t } = useTranslation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Step icons
  const stepIcons = [
    <svg
      key="diagnosis"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>,
    <svg
      key="design"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>,
    <svg
      key="implementation"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
          data-aos="fade-down"
        >
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="text-[#27374e] font-semibold text-sm md:text-base tracking-wider uppercase bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10">
              {t("methodology.badge")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("methodology.title")}{" "}
            <span className="text-[#27374e] relative">
              {t("methodology.titleHighlight")}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#27374e]/30 rounded-full"></span>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("methodology.subtitle")}
          </p>
        </div>

        {/* Main Content - Desktop: Image in Center, Steps on Sides */}
        <div className="relative">
          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Step 1 */}
            <div
              className="relative"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <MethodologyStep
                step={t("methodology.steps.0")}
                icon={stepIcons[0]}
                index={0}
                isRTL={isRTL}
              />
            </div>

            {/* Center Column - Image */}
            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <div className="relative group">
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/methologies.jpeg"
                      alt={t("methodology.imageAlt")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#27374e]/10 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Step 3 (and Step 2 positioned separately) */}
            <div className="space-y-8">
              {/* Step 2 */}
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <MethodologyStep
                  step={t("methodology.steps.1")}
                  icon={stepIcons[1]}
                  index={1}
                  isRTL={isRTL}
                />
              </div>

              {/* Step 3 */}
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <MethodologyStep
                  step={t("methodology.steps.2")}
                  icon={stepIcons[2]}
                  index={2}
                  isRTL={isRTL}
                />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout (below lg) */}
          <div className="lg:hidden space-y-12">
            {/* Image - Full width on mobile */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-square w-full">
                <Image
                  src="/methologies.jpeg"
                  alt={t("methodology.imageAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#27374e]/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Steps - Stack vertically on mobile */}
            <div className="space-y-6">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <MethodologyStep
                    step={t(`methodology.steps.${index}`)}
                    icon={stepIcons[index]}
                    index={index}
                    isRTL={isRTL}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-[2px] bg-[#27374e]/20"></div>
            <div className="w-2 h-2 bg-[#27374e]/40 rounded-full"></div>
            <div className="w-12 h-[2px] bg-[#27374e]/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step Component
const MethodologyStep = ({ step, icon, index, isRTL }) => {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative bg-[#E9EFF2]  rounded-xl border border-gray-200 p-6 hover:border-[#27374e]/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Background Number */}
        {/* <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-[#27374e]/5 group-hover:text-[#27374e]/10 transition-colors duration-300">
          {step?.number}
        </div> */}

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#27374e] rounded-lg blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 bg-[#27374e] rounded-lg flex items-center justify-center text-white">
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#27374e] transition-colors duration-300">
            {step?.title}
          </h3>
        </div>

        {/* Items List */}
        <ul className="space-y-3">
          {step?.items?.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-start gap-3 ${isRTL ? "flex-row" : ""}`}
            >
              <HiOutlineCheckCircle className="w-5 h-5 text-[#27374e] flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 text-base">{item}</span>
            </li>
          ))}
        </ul>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-[#27374e] rounded-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default Methodology;
