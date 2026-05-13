"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const MethodologyServices = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const methodology = [
    {
      step: t("methodology.step1.step"),
      title: t("methodology.step1.title"),
      description: t("methodology.step1.description"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      gradient: "from-primary to-secondary",
    },
    {
      step: t("methodology.step2.step"),
      title: t("methodology.step2.title"),
      description: t("methodology.step2.description"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      step: t("methodology.step3.step"),
      title: t("methodology.step3.title"),
      description: t("methodology.step3.description"),
      icon: (
        <svg
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
        </svg>
      ),
      gradient: "from-primary to-secondary",
    },
  ];

  const services = [
    {
      title: t("services.humanCapital.title"),
      description: t("services.humanCapital.description"),
      features: t("services.humanCapital.features", { returnObjects: true }),
      gradient: "from-primary to-secondary",
    },
    {
      title: t("services.businessSolutions.title"),
      description: t("services.businessSolutions.description"),
      features: t("services.businessSolutions.features", {
        returnObjects: true,
      }),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: t("services.organizationalExcellence.title"),
      description: t("services.organizationalExcellence.description"),
      features: t("services.organizationalExcellence.features", {
        returnObjects: true,
      }),
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section className="relative bg-[#E9EFF2]  pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-primary/20 to-secondary/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Methodology Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="relative">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              {t("methodology.badge")}
            </span>
          </div>

          <h1
            className={`text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight ${
              isRTL ? "font-formal-arabic-heading" : "font-formal-heading"
            }`}
          >
            {t("methodology.title")}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("methodology.highlighted")}
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto ${
              isRTL ? "font-formal-arabic" : "font-formal"
            }`}
          >
            {t("methodology.subtitle")}
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {methodology.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connection Line */}
              {index < methodology.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-16 h-0.5 bg-gradient-to-r from-gray-700 to-gray-600 transform translate-x-full -translate-y-1/2 z-0"></div>
              )}

              {/* Card Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-500`}
              ></div>

              <div
                className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-500 group-hover:scale-105 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {/* Step Badge */}
                <div
                  className={`absolute -top-4 ${
                    isRTL ? "-right-4" : "-left-4"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-full text-lg font-bold shadow-2xl border-2 border-white/20`}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-8 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} text-white rounded-2xl shadow-xl transform group-hover:scale-110 transition-all duration-500`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Animated Bottom Line */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-32 h-1 bg-gradient-to-r ${step.gradient} rounded-full transition-all duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="relative">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              {t("services.badge")}
            </span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight ${
              isRTL ? "font-formal-arabic-heading" : "font-formal-heading"
            }`}
          >
            {t("services.title")}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {t("services.highlighted")}
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto ${
              isRTL ? "font-formal-arabic" : "font-formal"
            }`}
          >
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}
              ></div>

              <div
                className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-500 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {/* Service Header */}
                <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Icon */}
                  <div className="lg:w-20 lg:h-20 flex-shrink-0">
                    <div
                      className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-4 group/feature"
                    >
                      <div
                        className={`flex-shrink-0 w-3 h-3 mt-2 bg-gradient-to-br ${service.gradient} rounded-full group-hover/feature:scale-125 transition-transform duration-300`}
                      ></div>
                      <span className="text-gray-300 leading-relaxed group-hover/feature:text-gray-200 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Gradient Bar */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-48 h-1 bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="mt-24 relative">
          {/* CTA Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-3xl opacity-30"></div>

          <div
            className={`relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl overflow-hidden ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {t("methodology.cta.title")}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  {t("methodology.cta.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/consultation">
                  <button className="group relative w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-white px-10 py-5 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center gap-3">
                      {t("methodology.cta.button1")}
                      <svg
                        className={`w-6 h-6 transform transition-transform group-hover:translate-x-2 ${
                          isRTL && "rotate-180 group-hover:-translate-x-2"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>

                <Link href="/services">
                  <button className="group w-full sm:w-auto bg-transparent text-white px-10 py-5 rounded-lg font-bold text-lg border-2 border-gray-600 hover:border-secondary hover:text-secondary transition-all duration-500 hover:-translate-y-1">
                    <span className="flex items-center justify-center gap-3">
                      {t("methodology.cta.button2")}
                      <svg
                        className={`w-6 h-6 transform transition-transform group-hover:rotate-12 ${
                          isRTL && "rotate-180"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </section>
  );
};

export default MethodologyServices;
