"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiCpu,
  FiShield,
  FiHome,
  FiDroplet,
  FiTruck,
  FiSettings,
  FiTool,
  FiPackage,
  FiBox,
  FiArrowRight,
} from "react-icons/fi";

const PortfolioSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const portfolioItems = [
    {
      icon: FiCpu,
      title: "Telecom, COM & IT",
      description: "Advanced digital infrastructure, fiber-optic networks, and systems integration",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-400",
    },
    {
      icon: FiShield,
      title: "Industrial Security",
      description: "Advanced security systems for critical facilities and operational readiness",
      color: "from-red-500/20 to-red-600/10",
      borderColor: "border-red-200",
      hoverColor: "hover:border-red-400",
    },
    {
      icon: FiHome,
      title: "Real Estate Development",
      description: "High-quality residential and commercial projects with sustainability standards",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-400",
    },
    {
      icon: FiDroplet,
      title: "Oil & Gas",
      description: "Chemical materials and technical support for drilling and exploration",
      color: "from-gray-500/20 to-gray-600/10",
      borderColor: "border-gray-200",
      hoverColor: "hover:border-gray-400",
    },
    {
      icon: FiTruck,
      title: "Petroleum Services",
      description: "Roadside stations and petroleum operations supporting logistics infrastructure",
      color: "from-orange-500/20 to-orange-600/10",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-orange-400",
    },
    {
      icon: FiSettings,
      title: "Operational Services",
      description: "High-efficiency field services for infrastructure, industrial, and energy projects",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-400",
    },
    {
      icon: FiTool,
      title: "Facility Management",
      description: "Operating and maintaining buildings with integrated asset management solutions",
      color: "from-teal-500/20 to-teal-600/10",
      borderColor: "border-teal-200",
      hoverColor: "hover:border-teal-400",
    },
    {
      icon: FiPackage,
      title: "Manufacturing",
      description: "Consumer and industrial cleaning products for local and regional markets",
      color: "from-indigo-500/20 to-indigo-600/10",
      borderColor: "border-indigo-200",
      hoverColor: "hover:border-indigo-400",
    },
    {
      icon: FiBox,
      title: "Plastic Industries",
      description: "Wide range of plastic products with focus on innovation and excellence",
      color: "from-pink-500/20 to-pink-600/10",
      borderColor: "border-pink-200",
      hoverColor: "hover:border-pink-400",
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
      }, 4000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, portfolioItems.length]);

  const visibleItems = [
    portfolioItems[activeIndex],
    portfolioItems[(activeIndex + 1) % portfolioItems.length],
    portfolioItems[(activeIndex + 2) % portfolioItems.length],
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
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
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-[#27374e] font-semibold text-sm md:text-base tracking-wider uppercase bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10">
              {t("portfolio.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("portfolio.title")}
            <span className="text-[#27374e]"> {t("portfolio.titleHighlight")}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
          <div className="w-24 h-1 bg-[#27374e]/20 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Desktop Grid View - 3x3 */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#27374e]/20"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#27374e]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#27374e] transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-[#27374e] group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#27374e] transition-colors">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#27374e]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Tablet View - 2x5 */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {portfolioItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#27374e]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#27374e] transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#27374e] group-hover:text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#27374e]">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Carousel */}
        <div className="block md:hidden">
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {portfolioItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                        <div className="w-14 h-14 bg-[#27374e]/10 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7 text-[#27374e]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {portfolioItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-8 bg-[#27374e]" : "w-2 bg-[#27374e]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <Link href="/portfolio">
            <button className="group inline-flex items-center gap-2 bg-[#27374e] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#27374e]/90 transition-all duration-300 shadow-md hover:shadow-xl">
              <span>{t("portfolio.viewAll")}</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;