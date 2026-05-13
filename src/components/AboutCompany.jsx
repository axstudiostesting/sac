"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import SectionTitle from "./SectionTitle";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCompany = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Pattern Overlays */}
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

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div data-aos="fade-up">
            <SectionTitle
              badge={t("aboutCompany.badge")}
              title={t("aboutCompany.title")}
              highlightedText={t("aboutCompany.highlightedText")}
              subtitle={t("aboutCompany.subtitle")}
            />
          </div>

          {/* Paragraph */}
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto font-light tracking-wide">
              {t("aboutCompany.description")}
            </p>
          </div>

          {/* Read More Button */}
          <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center">
            <Link href="/about">
              <button className="group relative overflow-hidden bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                  {t("aboutCompany.buttonText")}
                  {isRTL ? (
                    <FiChevronRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
