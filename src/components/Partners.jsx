"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants } from "@/utils/animations";

// Icons
import {
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineBuildingOffice,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineTrophy,
} from "react-icons/hi2";
import {
  RiTeamFill,
  RiMedalLine,
  RiStarSLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const PartnersClientsExperience = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Partners logos array
  const partners = [
    { name: "Partner 1", logo: "/p1.png" },
    { name: "Partner 2", logo: "/p2.png" },
    { name: "Innovation Experts", logo: "/p3.png" },
    { name: "Technology Partners", logo: "/p4.jpg" },
    { name: "Microsoft", logo: "/p5.png" },
    { name: "Oracle", logo: "/p6.png" },
    { name: "SAP", logo: "/p7.png" },
    { name: "Mercer", logo: "/p8.webp" },
    { name: "Towers Watson", logo: "/p9.jpg" },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  // Clients & Experience sections
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
          icon: <HiOutlineBuildingOffice className="w-5 h-5" />,
        },
        {
          value: "95%",
          label: t("clients.stats.retention"),
          icon: <RiStarSLine className="w-5 h-5" />,
        },
        {
          value: "40+",
          label: t("clients.stats.sectors"),
          icon: <HiOutlineChartBar className="w-5 h-5" />,
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
          icon: <HiOutlineAcademicCap className="w-5 h-5" />,
        },
        {
          value: "40+",
          label: t("experience.stats.years"),
          icon: <RiMedalLine className="w-5 h-5" />,
        },
        {
          value: "1000+",
          label: t("experience.stats.projects"),
          icon: <HiOutlineBriefcase className="w-5 h-5" />,
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
    <section className="relative pt-8 bg-white overflow-hidden bg-[#E9EFF2]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* ========== PARTNERS CAROUSEL SECTION ========== */}
        <div className="mb-20 md:mb-24">
          {/* Partners Header */}
          <div
            className="text-center mb-8 md:mb-10 max-w-4xl mx-auto"
            data-aos="fade-down"
          >
            {/* Badge */}

            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              {t("partners.title")}
            </h2>
          </div>

          {/* Moving Logos Carousel */}
          <div
            className="relative w-full overflow-hidden py-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-16 md:w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-16 md:w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Carousel Track */}
            <div
              className="flex"
              style={{
                animation: `marquee ${isRTL ? "30s" : "30s"} linear infinite`,
                width: "fit-content",
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-4 md:mx-6"
                >
                  {/* Logo Container */}
                  <div className="w-24 h-16 md:w-32 md:h-20 lg:w-36 lg:h-24 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#27374e]/20 transition-all duration-300 flex items-center justify-center p-3 md:p-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-10 md:max-h-12 lg:max-h-16"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== CLIENTS & EXPERIENCE SECTION ========== */}
        <div className="bg-[#E9EFF2] p-8">
          {/* Global Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-[#27374e] bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10"
            >
              {t("global.badge")}
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${
                isRTL ? "font-formal-arabic-heading" : "font-formal-heading"
              }`}
            >
              {t("global.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-lg max-w-3xl mx-auto"
            >
              {t("global.subtitle")}
            </motion.p>
          </motion.div>

          {/* Two Cards Side by Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 ${
              isRTL ? "lg:flex-row-reverse" : ""
            }`}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative h-full"
              >
                {/* Card */}
                <div
                  className={`relative h-full bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:border-[#27374e]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {/* Decorative Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#27374e]/0 via-[#27374e]/30 to-[#27374e]/0 rounded-t-xl"></div>

                  {/* Header with Icon */}
                  <div
                    className={`flex items-start gap-4 mb-6 ${
                      isRTL ? "flex-row" : ""
                    }`}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#27374e] rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="relative w-14 h-14 bg-[#27374e] rounded-xl flex items-center justify-center text-white">
                        {section.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#27374e] transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-sm text-[#27374e]/70 font-medium uppercase tracking-wide">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Image */}
                  <div className="mb-6">
                    <div className="relative aspect-[16/9] rounded-lg border border-gray-100 overflow-hidden bg-gray-50">
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="flex justify-center mb-2 text-[#27374e]">
                          {stat.icon}
                        </div>
                        <div className="text-lg md:text-xl font-bold text-gray-900">
                          <span className="ltr-nums" dir="ltr">
                            {stat.value}
                          </span>
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

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-[2px] bg-[#27374e]/20"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#27374e]/40 rounded-full"></div>
              <div className="w-2 h-2 bg-[#27374e]/60 rounded-full"></div>
              <div className="w-2 h-2 bg-[#27374e]/80 rounded-full"></div>
            </div>
            <div className="w-12 h-[2px] bg-[#27374e]/20"></div>
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(33.33%);
          }
        }
        [dir="rtl"] div[style*="animation: marquee"] {
          animation-name: marquee-rtl !important;
        }
      `}</style>
    </section>
  );
};

export default PartnersClientsExperience;
