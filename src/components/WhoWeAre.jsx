"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaDownload,
  FaUsers,
  FaChartLine,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";

const WhatWeDoSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const services = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "استشارات رأس المال البشري",
      description: "حلول متكاملة لتطوير الموارد البشرية والهياكل التنظيمية",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "إستراتيجيات الأعمال",
      description: "تخطيط وتحليل الأعمال ودراسات الجدوى الاقتصادية",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "التميز المؤسسي",
      description: "حوكمة الشركات ونماذج العمل والمعايير الدولية",
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "استشارات متخصصة",
      description: "حلول مخصصة تلبي احتياجات مؤسستك الفريدة",
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/whatwedo.png')",
        minHeight: "700px",
      }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50 backdrop-blur-sm"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-white/20 rounded-full animate-float z-10"></div>
      <div className="absolute bottom-32 right-40 w-4 h-4 bg-white/30 rounded-full animate-float-delayed z-10"></div>
      <div className="absolute top-40 right-20 w-5 h-5 bg-white/25 rounded-full animate-float z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
              <FaLightbulb className="text-white text-lg" />
              <span className="text-white font-semibold">ما نقدمه</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide text-white">
              خدماتنا <span className="text-white/90">المتخصصة</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-white/90 leading-relaxed">
              نقدم حلولاً استشارية متكاملة تجمع بين الخبرة العالمية والفهم
              العميق للسوق السعودي لتحقيق التميز المؤسسي المستدام
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/95 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white group-hover:w-3/4 transition-all duration-500 rounded-t-full"></div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { number: "40+", label: "عام خبرة" },
              { number: "500+", label: "مشروع ناجح" },
              { number: "50+", label: "خبير استشاري" },
              { number: "30+", label: "قطاع خدم" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <span className="ltr-nums" dir="ltr">{stat.number}</span>
                </div>
                <div className="text-white/80 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div className="text-center">
            <a
              href="/company-profile.pdf"
              download
              target="_blank"
              className="group inline-flex items-center gap-4 bg-white text-primary px-12 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
            >
              <FaDownload className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>تحميل البروفايل التعريفي</span>
            </a>
            <p className="text-white/70 mt-4 text-lg">
              اكتشف المزيد عن خبراتنا وخدماتنا
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoSection;
