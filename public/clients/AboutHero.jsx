"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import { FaEye } from "react-icons/fa";
import "aos/dist/aos.css";
import {
  FiShield,
  FiTool,
  FiRadio,
  FiVideo,
  FiAlertTriangle,
  FiServer,
  FiWifi,
  FiHome,
  FiDroplet,
  FiTruck,
  FiBriefcase,
  FiCpu,
  FiTrendingUp,
  FiAward,
  FiEye,
  FiTarget,
  FiHeart,
  FiGlobe,
  FiLayers,
  FiMapPin,
  FiClock,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";
import SectionTitle from "../../src/components/SectionTitle";

const AboutHero = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  // Values Data
  const values = [
    {
      nameKey: "about.values.excellence.name",
      descKey: "about.values.excellence.desc",
      icon: FiAward,
    },
    {
      nameKey: "about.values.transparency.name",
      descKey: "about.values.transparency.desc",
      icon: FiEye,
    },
    {
      nameKey: "about.values.empowerment.name",
      descKey: "about.values.empowerment.desc",
      icon: FiTrendingUp,
    },
    {
      nameKey: "about.values.innovation.name",
      descKey: "about.values.innovation.desc",
      icon: FiCpu,
    },
    {
      nameKey: "about.values.responsibility.name",
      descKey: "about.values.responsibility.desc",
      icon: FiHeart,
    },
  ];

  // ============================================================
  // AREA 1: ADD MORE PARAGRAPHS HERE - Left side content
  // ============================================================
  // Just add more objects to this array to create new paragraphs
  const leftSideParagraphs = [
    {
      id: 1,
      type: "main", // main = large text, normal = regular text, quote = italic, highlight = with icon
      textKey: "about.paragraph1",
      highlightKey: "about.paragraph1.highlight",
      icon: null,
      delay: 200,
    },
    {
      id: 2,
      type: "normal",
      textKey: "about.paragraph2",
      highlightKey: "about.paragraph2.highlight",
      icon: FiMapPin,
      delay: 300,
    },
    {
      id: 3,
      type: "highlight",
      textKey: "about.paragraph3",
      icon: FiEye,
      delay: 400,
    },
    {
      id: 4,
      type: "normal",
      textKey: "about.paragraph4",
      icon: FiBriefcase,
      delay: 500,
    },
    {
      id: 5,
      type: "normal",
      textKey: "about.paragraph5",
      icon: FiUsers,
      delay: 600,
    },
    {
      id: 6,
      type: "quote",
      textKey: "about.paragraph6",
      icon: null,
      delay: 700,
    },
  ];

  // ============================================================
  // AREA 2: ADD MORE STATS HERE - Floating card stats
  // ============================================================
  const floatingStats = [
    {
      value: "30+",
      valueAr: "+٣٠",
      labelKey: "about.floatingCard.label",
      titleKey: "about.floatingCard.title",
      locationKey: "about.floatingCard.location",
    },
  ];

  return (
    <section className="relative pt-20 lg:pt-28 pb-16 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        data-aos="fade-right"
        data-aos-duration="1000"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full translate-x-1/2 translate-y-1/2"
        data-aos="fade-left"
        data-aos-duration="1000"
      ></div>
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>

      {/* Diagonal Line Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header with SectionTitle */}
        <div data-aos="fade-up" data-aos-duration="800">
          <SectionTitle
            badge={t("about.badge")}
            title={t("about.title.part1")}
            highlightedText={t("about.title.part2")}
            subtitle={t("about.subtitle")}
            centered={true}
            theme="light"
          />
        </div>

        {/* Content Grid with Image on Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN - Multiple Paragraphs */}
          <div className="space-y-6">
            {leftSideParagraphs.map((para) => {
              // Render different paragraph types
              if (para.type === "main") {
                return (
                  <div
                    key={para.id}
                    className="relative"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay={para.delay}
                  >
                    <div
                      className={`absolute -top-4 ${isRTL ? "-right-4" : "-left-4"} w-16 h-16 bg-primary/10 rounded-full`}
                    ></div>
                    <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed relative z-10">
                      {t(para.textKey + ".part1")}
                      <span className="text-primary font-semibold">
                        {" "}
                        {t(para.highlightKey)}
                      </span>
                      {t(para.textKey + ".part2")}
                    </p>
                  </div>
                );
              } else if (para.type === "normal") {
                return (
                  <div
                    key={para.id}
                    className="relative pl-6 border-l-4 border-primary/30"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay={para.delay}
                  >
                    <div className="space-y-3">
                      {para.icon && (
                        <div className="flex items-center gap-2 mb-2">
                          <para.icon className="w-5 h-5 text-primary" />
                          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            {t(para.textKey + ".label")}
                          </span>
                        </div>
                      )}
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {t(para.textKey + ".text")}
                      </p>
                    </div>
                  </div>
                );
              } else if (para.type === "highlight") {
                return (
                  <div
                    key={para.id}
                    className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl border border-primary/20"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay={para.delay}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        {para.icon && (
                          <para.icon className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {t(para.textKey + ".title")}
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                          {t(para.textKey + ".text")}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else if (para.type === "quote") {
                return (
                  <div
                    key={para.id}
                    className="relative"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay={para.delay}
                  >
                    <div
                      className={`absolute ${isRTL ? "right-0" : "left-0"} -top-6 text-6xl text-primary/10 font-serif`}
                    >
                      "
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed pl-8 pr-8 pt-4">
                      {t(para.textKey + ".text")}
                    </p>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* RIGHT COLUMN - Image */}
          <div className="relative lg:sticky lg:top-24">
            <div
              className="relative group"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/about1.jpeg"
                    alt="Sadara Development Investment Company"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-primary/5 rounded-full -z-10"></div>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} w-20 h-20 border-t-4 border-r-4 border-primary/40 rounded-tr-2xl`}
                ></div>
                <div
                  className={`absolute bottom-0 ${isRTL ? "right-0" : "left-0"} w-20 h-20 border-b-4 border-l-4 border-primary/40 rounded-bl-2xl`}
                ></div>

                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg font-semibold">
                    {t("about.image.caption1")}
                  </p>
                  <p className="text-white/80 text-sm">
                    {t("about.image.caption2")}
                  </p>
                </div>
              </div>

              {/* Floating Card - Stats */}
              {floatingStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`absolute ${isRTL ? "bottom-20 left-6" : "bottom-20 right-6"} bg-white p-5 rounded-xl shadow-2xl border border-gray-100 backdrop-blur-sm bg-white/95`}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-2xl">
                        {isRTL ? stat.valueAr : stat.value}

                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        {t(stat.labelKey)}
                      </div>
                      <div className="font-bold text-gray-800 text-lg">
                        {t(stat.titleKey)}
                      </div>
                      <div className="text-xs text-gray-400">
                        {t(stat.locationKey)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* ============================================================ */}
              {/* AREA 3: ADD MORE FLOATING CARDS - Just add more objects above */}
              {/* Example: 
                { value: "400+", labelKey: "about.floatingCard2.label", titleKey: "about.floatingCard2.title", locationKey: "about.floatingCard2.location" }
              */}
              {/* ============================================================ */}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div
          className="mt-16 pt-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <SectionTitle
            highlightedText={t("about.values.title")}
            centered={true}
            theme="light"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={200 + index * 100}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {t(value.nameKey)}
                </h3>
                <p className="text-gray-500 text-sm">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section - Using your design */}
        <div
          className="relative w-full flex flex-col md:flex-row overflow-hidden rounded-2xl mt-16"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {/* Mission Section */}
          <div
            className="relative w-full md:w-1/2 bg-primary text-white flex items-center justify-center p-12 z-10"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="max-w-md z-20">
              <div
                className="flex items-center mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <FaBullseye className="text-4xl mr-4 text-[#4da8da]" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("about.mission.title")}
                </h2>
              </div>

              <div className="space-y-6">
                <p
                  className="text-lg leading-relaxed flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <FaLightbulb className="flex-shrink-0 mt-1 mr-3 text-[#4da8da]" />
                  {t("about.mission.text1")}
                </p>

                <p
                  className="text-lg leading-relaxed flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FaHandshake className="flex-shrink-0 mt-1 mr-3 text-[#4da8da]" />
                  {t("about.mission.text2")}
                </p>
              </div>
            </div>

            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#4da8da]/20"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute hidden md:block left-1/2 top-0 h-full z-10">
            <svg
              className="h-full w-10 text-primary"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0,0 100,0 0,100" />
            </svg>
          </div>

          {/* Vision Section */}
          <div
            className="w-full md:w-1/2 bg-gray-50 text-gray-800 flex items-center justify-center p-12 z-0"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="max-w-md">
              <div
                className="flex items-center mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <FaEye className="text-4xl mr-4 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("about.vision.title")}
                </h2>
              </div>

              <div className="space-y-6">
                <p
                  className="text-lg leading-relaxed flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <FaChartLine className="flex-shrink-0 mt-1 mr-3 text-primary" />
                  {t("about.vision.text1")}
                </p>

                <p
                  className="text-lg leading-relaxed flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FaRocket className="flex-shrink-0 mt-1 mr-3 text-[#165e91]" />
                  {t("about.vision.text2")}
                </p>
              </div>

              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#165e91]/10"
                data-aos="zoom-in"
                data-aos-delay="300"
              ></div>
            </div>
          </div>
        </div>

        {/* Footer Statement */}
        <div
          className="mt-16 pt-8 border-t border-gray-200"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-primary text-4xl">✦</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              {t("about.footer")}
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-primary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
