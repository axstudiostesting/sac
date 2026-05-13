"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const MinimalCompaniesSection = () => {
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
      duration: 1000,
      once: true,
      offset: 120,
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
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gray-50">
      {/* Background SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#gradient1)"
          d="M0,400L1440,200L0,0Z"
          className="opacity-20"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#F3F4F6", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#E5E7EB", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div data-aos="fade-up" data-aos-duration="800">
          <SectionTitle badge={badge} title={title} subtitle={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {companiesData.map((company, idx) => (
            <Link href={`/companies/${company.slug}`} key={company.id}>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={idx * 200}
                data-aos-offset="200"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative"
              >
                {/* Animated SVG Icon inside the Card */}
                <svg
                  className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>

                {/* Logo Header */}
                <div className="p-6 pb-4 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={60}
                        height={60}
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" />
                          <span>{company.established}</span>
                        </div>
                        {company.headquarters && (
                          <div className="flex items-center gap-1">
                            <FiMapPin className="w-3 h-3" />
                            <span className="truncate max-w-[100px]">
                              {company.headquarters}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {company.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300 inline-flex items-center gap-1">
                      <span>{viewCompany}</span>
                      <FiArrowRight
                        className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`}
                      />
                    </div>

                    <div className="text-xs text-gray-400">
                      {company.metrics?.[0]?.value}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalCompaniesSection;
