"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants } from "@/utils/animations";

const PremiumExperience = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const features = [
    {
      title: t("premium.customizable.title"),
      englishTitle: t("premium.customizable.englishTitle"),
      description: t("premium.customizable.description"),
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      gradient: "from-primary to-secondary",
    },
    {
      title: t("premium.improvable.title"),
      englishTitle: t("premium.improvable.englishTitle"),
      description: t("premium.improvable.description"),
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
      gradient: "from-emerald-500 to-green-500",
    },
    {
      title: t("premium.applicable.title"),
      englishTitle: t("premium.applicable.englishTitle"),
      description: t("premium.applicable.description"),
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      gradient: "from-primary to-secondary",
    },
    {
      title: t("premium.affordable.title"),
      englishTitle: t("premium.affordable.englishTitle"),
      description: t("premium.affordable.description"),
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Premium Header without AOS */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="relative">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            </div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              {t("premium.badge")}
            </span>
          </div>

          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight ${
              isRTL ? "font-formal-arabic-heading" : "font-formal-heading"
            }`}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {t("premium.title")}{" "}
            </span>
            <span className=" text-primary">{t("premium.highlighted")}</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto ${
              isRTL ? "font-formal-arabic" : "font-formal"
            }`}
          >
            {t("premium.subtitle")}
          </p>
        </div>

        {/* Cards with Framer Motion Animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              {/* Card Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${feature.gradient}  rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300`}
              ></div>

              <div
                className={`relative border-primary border-1 p-8 border border-gray-200/50 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {/* Floating Number */}
                <div
                  className={`absolute top-4 ${isRTL ? "right-4" : "left-4"}`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${feature.gradient} text-white rounded-lg text-sm font-bold shadow-lg`}
                  >
                    0{index + 1}
                  </div>
                </div>

                {/* Icon with Gradient Border */}
                <div className="mb-8">
                  <div
                    className={`relative inline-flex items-center justify-center w-16 h-16 rounded-lg border-2 border-gray-200/50 group-hover:border-transparent group-hover:bg-gradient-to-br ${feature.gradient} transition-all duration-300`}
                  >
                    <div
                      className={`text-gray-600 transition-all duration-300 relative z-10 group-hover:scale-110`}
                    >
                      {feature.icon}
                    </div>
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/20 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Content without AOS */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm font-medium bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent uppercase tracking-wider`}
                    >
                      {feature.englishTitle}
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Bottom Bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumExperience;
