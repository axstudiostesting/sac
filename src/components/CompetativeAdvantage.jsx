"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";

const CompetitiveAdvantage = () => {
  const { isRTL, language } = useLanguage();
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

  // Icons for each advantage
  const icons = [
    // Local Expertise
    <svg
      key="icon1"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>,
    // Partnership Leadership
    <svg
      key="icon2"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>,
    // Expert Consultants
    <svg
      key="icon3"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>,
    // Trusted Experts
    <svg
      key="icon4"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>,
    // Custom Solutions
    <svg
      key="icon5"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>,
    // Quality & Price
    <svg
      key="icon6"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>,
    // Saudi Market Understanding
    <svg
      key="icon7"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
  ];

  return (
    <section className="relative py-16 md:py-20 lg:pt-24 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Decorative Elements - Very Subtle */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          {/* Badge */}
          <div
            className="inline-block mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-[#27374e] font-semibold text-sm md:text-base tracking-wider uppercase bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10">
              {t("advantages.badge")}
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("advantages.title")}
          </h2>

          <p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t("advantages.subtitle")}
          </p>

          <div
            className="w-24 h-1 bg-[#27374e]/20 mx-auto mt-6 rounded-full"
            data-aos="fade-up"
            data-aos-delay="400"
          ></div>
        </div>

        {/* Advantages Grid - 7 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {[0, 1, 2, 3, 4, 5, 6].map((index) => {
            const item = t(`advantages.items.${index}`);

            return (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
                data-aos-duration="600"
              >
                {/* Card */}
                <div
                  className={`relative h-full bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:border-[#27374e]/30 hover:shadow-lg transition-all duration-300 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {/* Number in Center Top */}
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-[#27374e]/20 group-hover:text-[#27374e]/30 transition-colors duration-300">
                      {language === "ar"
                        ? ["01", "02", "03", "04", "05", "06", "07"][index]
                        : ["01", "02", "03", "04", "05", "06", "07"][index]}
                    </span>
                  </div>

                  {/* Icon Container - Centered */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 bg-[#27374e]/10 rounded-xl flex items-center justify-center text-[#27374e] group-hover:bg-[#27374e] group-hover:text-white transition-all duration-300">
                      {icons[index]}
                    </div>
                  </div>

                  {/* Content - Centered */}
                  <div className="space-y-3 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#27374e] transition-colors duration-300">
                      {item?.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {item?.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line - Appears on Hover */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-[#27374e] rounded-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#27374e]/20 to-transparent"></div>
    </section>
  );
};

export default CompetitiveAdvantage;
