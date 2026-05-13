"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiMail,
  FiChevronRight,
  FiUsers,
  FiTrendingUp,
  FiAward,
  FiSend,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const CareersSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const jobs = [];

  const stats = [
    { value: "500+", label: "Employees", icon: FiUsers },
    { value: "15+", label: "Nationalities", icon: FiTrendingUp },
    { value: "98%", label: "Saudization", icon: FiAward },
  ];

  const handleSendCV = () => {
    const subject = encodeURIComponent("Job Application - CV Submission");
    const body = encodeURIComponent(
      `Dear Hiring Manager,\n\nI am writing to submit my CV for consideration for any suitable position at Sadara Development Investment Company.\n\nPlease find my resume attached for your review.\n\nBest regards,\n[Your Name]\n[Your Phone Number]`,
    );
    window.location.href = `mailto:careers@sdi.com.sa?subject=${subject}&body=${body}`;
  };

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

      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div data-aos="fade-up">
          <SectionTitle
            badge={t("careers.badge")}
            title={t("careers.title")}
            highlightedText={t("careers.highlightedText")}
            subtitle={t("careers.subtitle")}
          />
        </div>

        {/* Stats Bar */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl mb-3">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Jobs - Send CV Card */}
        {jobs.length === 0 && (
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 text-center p-8 md:p-12">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <FiMail className="w-10 h-10 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t("careers.noJobs.title")}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {t("careers.noJobs.description")}
              </p>

              {/* Send CV Button */}
              <button
                onClick={handleSendCV}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 group"
              >
                <FiSend className="w-5 h-5" />
                <span>{t("careers.noJobs.sendCV")}</span>
                <FiChevronRight
                  className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                />
              </button>

              {/* Email Display */}
              <p className="text-xs text-gray-400 mt-4">
                {t("careers.noJobs.or")}{" "}
                <a
                  href="mailto:careers@sadara.com"
                  className="text-primary hover:underline"
                >
                  careers@sadara.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Jobs Grid - When jobs exist */}
        {jobs.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job, idx) => (
              <div
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={150 + idx * 50}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  {/* Job Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <FiBriefcase className="w-3 h-3" />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <FiMapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <FiClock className="w-3 h-3" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-xs font-semibold text-primary">
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Requirements Preview */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      {t("careers.keyRequirements")}:
                    </p>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 2).map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-gray-500"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full mt-1.5" />
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 2 && (
                        <li className="text-xs text-primary">
                          +{job.requirements.length - 2}{" "}
                          {t("careers.moreRequirements")}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent(
                        `Application for ${job.title} position`,
                      );
                      const body = encodeURIComponent(
                        `Dear Hiring Manager,\n\nI am writing to apply for the ${job.title} position at Sadara Development Investment Company.\n\nPlease find my resume attached for your review.\n\nBest regards,\n[Your Name]\n[Your Phone Number]`,
                      );
                      window.location.href = `mailto:careers@sadara.com?subject=${subject}&body=${body}`;
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300 group/btn"
                  >
                    <FiMail className="w-4 h-4" />
                    <span>{t("careers.applyNow")}</span>
                    <FiChevronRight
                      className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-16 h-[2px] bg-primary/20 rounded-full" />
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-primary/40 rounded-full" />
              <div className="w-2 h-2 bg-primary/60 rounded-full" />
              <div className="w-2 h-2 bg-primary/80 rounded-full" />
              <div className="w-2 h-2 bg-primary/60 rounded-full" />
              <div className="w-2 h-2 bg-primary/40 rounded-full" />
            </div>
            <div className="w-16 h-[2px] bg-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
