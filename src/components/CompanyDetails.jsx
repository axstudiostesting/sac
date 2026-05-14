"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation"; // CHANGE THIS
import {
  FiArrowLeft,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiAward,
  FiStar,
  FiBriefcase,
  FiUsers,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const CompanyDetail = ({ slug }) => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation(); // CHANGE THIS - use t() function

  // Get all data using t()
  const companiesData = t("companies.data");
  const company = companiesData?.find((c) => c.slug === slug);

  // Get UI translations
  const backToCompanies = t("companies.backToCompanies");
  const established = t("companies.established");
  const headquarters = t("companies.headquarters");
  const overview = t("companies.overview");
  const services = t("companies.services");
  const properties = t("companies.properties");
  const majorProjects = t("companies.majorProjects");
  const targetSectors = t("companies.targetSectors");
  const clients = t("companies.clients");
  const certifications = t("companies.certifications");
  const keyMetrics = t("companies.keyMetrics");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Company not found</p>
      </div>
    );
  }

  // Icon mapping for metrics
  const getMetricIcon = (index) => {
    const icons = [FiUsers, FiCalendar];
    const Icon = icons[index % icons.length];
    return <Icon className="w-5 h-5 text-primary" />;
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Back Button */}
        <div data-aos="fade-right" data-aos-duration="600" className="mb-8">
          <Link href="/companies">
            <button className="group inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-all duration-300">
              {isRTL ? (
                <FiArrowLeft className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              )}
              <span className="font-medium">{backToCompanies}</span>
            </button>
          </Link>
        </div>

        {/* Hero Section - Company Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="relative bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#27374e] via-[#27374e]/70 to-transparent" />

          <div className="relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#27374e]/5 via-transparent to-transparent" />

            <div className="p-8 md:p-12 lg:p-16 relative">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
                {/* Logo Section - Enhanced */}
                <div className="relative group">
                  {/* Animated Rings */}
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#27374e]/20 via-[#27374e]/40 to-[#27374e]/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:scale-110" />

                  {/* Main Logo Container */}
                  <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border border-gray-100 group-hover:border-[#27374e]/20 transition-all duration-500 group-hover:shadow-[#27374e]/20">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />

                    {/* Logo Image */}
                    <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                  </div>

                  {/* Floating Badge - Optional */}
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Since {company.established}
                  </div>
                </div>

                {/* Content Section - Enhanced */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Company Name with Decorative Line */}
                  <div className="relative inline-block lg:block">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                      {company.name}
                    </h1>
                    <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 h-1 bg-gradient-to-r from-[#27374e] to-[#27374e]/40 rounded-full" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mt-6 mb-6">
                    {company.shortDescription}
                  </p>

                  {/* Info Chips - Enhanced */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                    {/* Established Chip */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#27374e]/0 via-[#27374e]/10 to-[#27374e]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:border-[#27374e]/30 hover:shadow-md transition-all duration-300">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <FiCalendar className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-gray-700">
                          <span className="font-semibold text-primary">
                            {established}
                          </span>{" "}
                          {company.established}
                        </span>
                      </div>
                    </div>

                    {/* Headquarters Chip */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#27374e]/0 via-[#27374e]/10 to-[#27374e]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:border-[#27374e]/30 hover:shadow-md transition-all duration-300">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <FiMapPin className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-gray-700">
                          <span className="font-semibold text-primary">
                            {headquarters}
                          </span>{" "}
                          {company.headquarters}
                        </span>
                      </div>
                    </div>

                    {/* Website Chip */}
                    {company.website && (
                      <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#27374e]/0 via-[#27374e]/10 to-[#27374e]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:border-[#27374e]/30 hover:shadow-md transition-all duration-300">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <FiStar className="w-3 h-3 text-primary" />
                          </div>
                          <a
                            href={`https://${company.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-700 hover:text-primary transition-colors"
                          >
                            {company.website}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Stats Bar */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 pt-4 border-t border-gray-100">
                    {company.metrics?.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="text-center lg:text-left">
                        <div className="text-2xl font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image Gallery Section */}
        {company?.images?.length > 0 && <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="180"
          className="bg-white rounded-2xl p-8 mb-8 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {company?.images?.map((img, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={img}
                    alt={`gallery-${idx}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              </div>
            ))}
          </div>

        </div>
        }

        {/* Metrics Bar */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {company.metrics?.map((metric, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors duration-300">
                {getMetricIcon(idx)}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                {overview}
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {company.description}
              </p>
            </div>

            {/* Services */}
            {company.services && company.services.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {services}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                    >
                      <FiCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-600 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Properties */}
            {company.properties && company.properties.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250"
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {properties}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {company.properties.map((property, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      <FiMapPin className="w-4 h-4 text-primary" />
                      <span className="text-gray-600 text-sm">{property}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Major Projects */}
            {company.majorProjects && company.majorProjects.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250"
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {majorProjects}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {company.majorProjects.map((project, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-[#27374e]/5 to-[#27374e]/10 text-primary rounded-full text-sm font-medium hover:from-[#27374e]/10 hover:to-[#27374e]/20 transition-all duration-300"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Target Sectors */}
            {company.targetSectors && company.targetSectors.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250"
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {targetSectors}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {company.targetSectors.map((sector, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Clients */}
            {company.clients && company.clients.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {clients}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {company.clients.map((client, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium hover:bg-primary/10 transition-all duration-300"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {company.certifications && company.certifications.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="350"
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {certifications}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {company.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 transition-all duration-300"
                    >
                      <FiAward className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
              className="bg-gradient-to-br from-[#27374e] to-[#27374e]/90 rounded-2xl p-6 shadow-lg sticky top-24 text-white"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiBriefcase className="w-5 h-5" />
                {keyMetrics}
              </h3>
              <div className="space-y-3">
                {company.metrics?.map((metric, idx) => (
                  <div
                    key={idx}
                    className="border-b border-white/10 pb-3 last:border-0"
                  >
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-sm text-white/70">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
              className="bg-white rounded-2xl p-6 shadow-md text-center"
            >
              <h4 className="font-bold text-gray-900 mb-2">
                {isRTL ? `مهتم بـ ${company.name}؟` : `Interested in ${company.name}?`}

              </h4>
              <p className="text-sm text-gray-500 mb-4">
                {isRTL ? "تواصل معنا لمعرفة المزيد عن خدماتنا" : "Contact us to learn more about our services"}
              </p>
              <Link href="/contact">
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                  {isRTL ? "تواصل" : "Get in Touch"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetail;
