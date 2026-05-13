"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants } from "@/utils/animations";

import {
  RiBuilding4Line,
  RiTeamFill,
  RiGlobalLine,
  RiShieldCheckLine,
  RiBriefcaseFill,
  RiMedalLine,
  RiStarSLine,
} from "react-icons/ri";
import { HiOutlineUserGroup, HiOutlineChartBar } from "react-icons/hi2";
import { FaUserTie, FaGraduationCap, FaRocket, FaCrown } from "react-icons/fa";

const PartnersExperience = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const sections = [
    {
      id: "clients",
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
      title: t("clients.title"),
      subtitle: t("clients.subtitle"),
      description: t("clients.description"),
      image: "/c2.jpg",
      imageAlt: t("clients.imageAlt"),
      stats: [
        {
          value: "500+",
          label: t("clients.stats.clients"),
          icon: <FaUserTie />,
        },
        {
          value: "95%",
          label: t("clients.stats.retention"),
          icon: <RiStarSLine />,
        },
        {
          value: "40+",
          label: t("clients.stats.sectors"),
          icon: <HiOutlineChartBar />,
        },
      ],
      features: [
        t("clients.features.diverse"),
        t("clients.features.enterprise"),
        t("clients.features.longterm"),
      ],
    },
    {
      id: "experience",
      icon: <RiTeamFill className="w-8 h-8" />,
      title: t("experience.title"),
      subtitle: t("experience.subtitle"),
      description: t("experience.description"),
      image: "/c3.jpg",
      imageAlt: t("experience.imageAlt"),
      stats: [
        {
          value: "50+",
          label: t("experience.stats.experts"),
          icon: <FaGraduationCap />,
        },
        {
          value: "40+",
          label: t("experience.stats.years"),
          icon: <RiMedalLine />,
        },
        {
          value: "1000+",
          label: t("experience.stats.projects"),
          icon: <RiBriefcaseFill />,
        },
      ],
      features: [
        t("experience.features.certified"),
        t("experience.features.specialized"),
        t("experience.features.results"),
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary"
          >
            {t("global.badge")}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${
              isRTL ? "font-formal-arabic-heading" : "font-formal-heading"
            }`}
          >
            {t("global.title")}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            {t("global.subtitle")}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={fadeInUp}
              className={`bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {/* Card Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary text-white">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    <p className="text-sm text-primary font-medium uppercase tracking-wide">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-2">
                  {section.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="p-6">
                <div className="relative aspect-[4/3] rounded-lg border border-gray-100 overflow-hidden bg-gray-50">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  {section.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="flex justify-center mb-2 text-primary text-lg">
                        {stat.icon}
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersExperience;
