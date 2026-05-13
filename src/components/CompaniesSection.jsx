"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const CompaniesSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const companiesData = t("companies.data");
  const badge = t("companies.badge");
  const title = t("companies.title");
  const subtitle = t("companies.subtitle");
  const viewCompany = t("companies.viewCompany");
  const established = t("companies.established");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!companiesData || !companiesData.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading companies...</p>
      </div>
    );
  }

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 20px)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <SectionTitle badge={badge} title={title} theme="dark" />

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {companiesData.map((company, idx) => (
            <div
              key={company.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Header with Logo */}
              <div className="p-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <div className="relative w-32 h-32 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                    <Image
                      src={company?.logo}
                      alt={company?.name || 'Company logo'}
                      width={100}
                      height={100}
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {company.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <p className="text-xs text-gray-400">
                        {established} {company.established}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {company.metrics?.slice(0, 3).map((metric, i) => (
                    <div
                      key={i}
                      className="text-center p-2 rounded-lg bg-white/10 group-hover:bg-primary/20 transition-all duration-300"
                    >
                      <div className="text-base md:text-lg font-bold text-white">
                        {metric.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-400 line-clamp-2">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                  {company.shortDescription}
                </p>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {company.services?.slice(0, 2).map((service, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full line-clamp-1 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300"
                    >
                      {service.length > 25
                        ? service.substring(0, 25) + "..."
                        : service}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={`/companies/${company.slug}`}>
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary  px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/80 transition-all duration-300 group/btn">
                    <span>{viewCompany}</span>
                    <FiArrowRight
                      className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
