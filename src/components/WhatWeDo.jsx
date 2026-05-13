"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, containerVariants } from "@/utils/animations";
import {
  FaUsers,
  FaChartLine,
  FaAward,
  FaLightbulb,
  FaDownload,
  FaArrowRight,
  FaUserTie,
  FaBusinessTime,
  FaBuilding,
  FaBrain,
  FaRocket,
  FaBriefcase,
  FaLayerGroup,
  FaIndustry,
} from "react-icons/fa";
import {
  RiTeamLine,
  RiBarChartBoxLine,
  RiMedalLine,
  RiLightbulbFlashLine,
} from "react-icons/ri";

const WhatWeDoSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const services = [
    {
      icon: <RiTeamLine className="w-10 h-10" />,
      title: t("whatWeDo.humanCapital.title"),
      description: t("whatWeDo.humanCapital.description"),
      gradient: "from-primary to-secondary",
      bgColor: "bg-light/30",
      iconColor: "text-primary",
    },
    {
      icon: <RiBarChartBoxLine className="w-10 h-10" />,
      title: t("whatWeDo.businessStrategies.title"),
      description: t("whatWeDo.businessStrategies.description"),
      gradient: "from-emerald-600 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: <RiMedalLine className="w-10 h-10" />,
      title: t("whatWeDo.organizationalExcellence.title"),
      description: t("whatWeDo.organizationalExcellence.description"),
      gradient: "from-primary to-secondary",
      bgColor: "bg-light/30",
      iconColor: "text-primary",
    },
    {
      icon: <RiLightbulbFlashLine className="w-10 h-10" />,
      title: t("whatWeDo.specializedConsulting.title"),
      description: t("whatWeDo.specializedConsulting.description"),
      gradient: "from-amber-600 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ];

  const stats = [
    {
      number: "40+",
      label: t("whatWeDo.stats.experience"),
      icon: <FaBusinessTime className="w-6 h-6" />,
      gradient: "from-primary to-secondary",
      bgColor: "bg-light/30",
    },
    {
      number: "500+",
      label: t("whatWeDo.stats.projects"),
      icon: <FaRocket className="w-6 h-6" />,
      gradient: "from-emerald-600 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      number: "50+",
      label: t("whatWeDo.stats.experts"),
      icon: <FaUserTie className="w-6 h-6" />,
      gradient: "from-primary to-secondary",
      bgColor: "bg-light/30",
    },
    {
      number: "30+",
      label: t("whatWeDo.stats.sectors"),
      icon: <FaIndustry className="w-6 h-6" />,
      gradient: "from-amber-600 to-orange-500",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        {/* Floating Dots Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Clean Header with Enhanced Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <div className="mx-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${
              isRTL ? "font-formal-arabic-heading" : "font-formal-heading"
            }`}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {t("whatWeDo.title")}
            </span>
          </h1>

          <p
            className={`text-lg text-gray-700 leading-relaxed ${
              isRTL ? "font-formal-arabic" : "font-formal"
            }`}
          >
            {t("whatWeDo.subtitle")}
          </p>
        </motion.div>

        {/* Enhanced Services Grid with Premium Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-300`}
              ></div>

              <div
                className={`relative bg-white rounded-lg border border-gray-200/80 p-6 md:p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group-hover:-translate-y-2 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {/* Premium Number Badge */}
                <div
                  className={`absolute -top-3 ${
                    isRTL ? "-right-3" : "-left-3"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${service.gradient} text-white rounded-full text-sm font-bold shadow-lg shadow-light/50`}
                  >
                    0{index + 1}
                  </div>
                </div>

                {/* Enhanced Icon Container */}
                <div className="mb-5">
                  <div className="relative">
                    {/* Icon Background with Gradient */}
                    <div
                      className={`absolute inset-0 ${service.bgColor} rounded-lg blur-xl opacity-50`}
                    ></div>

                    {/* Icon Container */}
                    <div
                      className={`relative inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-lg border-2 border-gray-100 group-hover:border-transparent transition-all duration-300`}
                    >
                      {/* Gradient Icon - Keep colored, don't turn white */}
                      <div
                        className={`${service.iconColor} transition-all duration-300 relative z-10 group-hover:scale-110`}
                      >
                        {service.icon}
                      </div>

                      {/* Hover Gradient Overlay - Subtle */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Premium Learn More Button */}
                <div className="mt-6">
                  <button
                    className={`group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-4 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5`}
                  >
                    <span>{t("whatWeDo.learnMore")}</span>
                    <FaArrowRight
                      className={`w-4 h-4 transform transition-transform group-hover/btn:translate-x-1 ${
                        isRTL && "rotate-180 group-hover/btn:-translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section with Premium Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group relative"
            >
              {/* Stats Card Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300`}
              ></div>

              <div className="relative bg-white p-6 md:p-8 rounded-lg border border-gray-200 hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:-translate-y-1 text-center">
                {/* Icon Container */}
                <div
                  className={`relative inline-flex items-center justify-center w-14 h-14 ${stat.bgColor} rounded-lg mb-4 group-hover:bg-gradient-to-br ${stat.gradient} transition-all duration-300 shadow-sm`}
                >
                  {/* Icon - Keep original color, add scale effect on hover */}
                  <div
                    className={`text-gray-600 transition-all duration-300 relative z-10 group-hover:scale-110`}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Number with Gradient */}
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                >
                  <span className="ltr-nums" dir="ltr">{stat.number}</span>
                </div>

                {/* Label */}
                <div className="text-gray-700 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center"
        >
          {/* CTA Container with Background */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-light/30 via-white/50 to-light/30 rounded-2xl blur-2xl opacity-60"></div>

            <a
              href="/company-profile.pdf"
              download
              target="_blank"
              className="group relative inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              {/* Button Glow Effect */}
              <div className="absolute -inset-1 bg-primary rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-300"></div>

              <FaDownload className="w-5 h-5 text-white transform group-hover:scale-110 transition-transform duration-300" />
              <span className="relative text-white">{t("whatWeDo.cta.button")}</span>
              <FaArrowRight
                className={`w-4 h-4 text-white transform transition-transform group-hover:translate-x-1 ${
                  isRTL && "rotate-180 group-hover:-translate-x-1"
                }`}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
