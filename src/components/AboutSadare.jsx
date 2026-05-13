"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiEye,
  FiTarget,
  FiAward,
  FiShield,
  FiUsers,
  FiZap,
  FiHeart,
  FiTrendingUp,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

const AboutSadara = () => {
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

  const values = [
    {
      icon: FiAward,
      title: "Excellence",
      description:
        "Highest standards of quality in all operations and investment decisions",
      color: "from-yellow-500/20 to-yellow-600/10",
    },
    {
      icon: FiShield,
      title: "Transparency",
      description:
        "Honesty, clarity, and integrity in communication and reporting",
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: FiUsers,
      title: "Empowerment",
      description:
        "Enabling teams and subsidiaries to achieve sustainable growth",
      color: "from-green-500/20 to-green-600/10",
    },
    {
      icon: FiZap,
      title: "Innovation",
      description:
        "New solutions and impactful investments driving transformation",
      color: "from-purple-500/20 to-purple-600/10",
    },
    {
      icon: FiHeart,
      title: "Responsibility",
      description: "Prioritizing community development and sustainability",
      color: "from-red-500/20 to-red-600/10",
    },
  ];

  const strategicPoints = [
    {
      icon: FiEye,
      title: "Strategic Vision",
      description: "Unified ownership and management under one umbrella",
    },
    {
      icon: FiTrendingUp,
      title: "Best Practices",
      description: "High efficiency with corporate governance standards",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-16 pb-4">
      {/* Main Container */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
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

        {/* Decorative Blobs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-down">
            <div className="inline-flex items-center gap-3 bg-primary/5 backdrop-blur-md px-6 py-3 rounded-full border border-primary/10 shadow-lg mb-6">
              <div className="relative">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
              </div>
              <span className="text-primary font-bold tracking-wider text-sm md:text-base uppercase">
                {t("aboutSadara.badge")}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("aboutSadara.title")}
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t("aboutSadara.subtitle")}
            </p>
            <div className="w-24 h-1 bg-primary/20 mx-auto mt-6 rounded-full" />
          </div>

          {/* Strategic Vision & Best Practices - 2 Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {strategicPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-primary/5 to-primary/2 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* About Description */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-10 mb-12 border border-gray-100 shadow-md"
          >
            <div className={`${isRTL ? "text-right" : "text-left"}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FiGlobe className="w-6 h-6 text-primary" />
                {t("aboutSadara.overviewTitle")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("aboutSadara.description")}
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-primary rounded-2xl p-8 md:p-10 mb-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="missionGrid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#missionGrid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FiTarget className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {t("aboutSadara.missionTitle")}
                </h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
                {t("aboutSadara.mission")}
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {t("aboutSadara.valuesTitle")}
              </h2>
              <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-xl p-6 text-center border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-150" />
                <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse delay-300" />
              </div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSadara;
