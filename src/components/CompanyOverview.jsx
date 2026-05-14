"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FaCheckCircle,
  FaBuilding,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaTrophy,
  FaRocket,
  FaArrowRight,
  FaShieldAlt,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CompanyOverview = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      disable: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const highlights = [
    {
      key: "experience",
      icon: <FaTrophy />,
      color: "from-amber-500 to-orange-500",
    },
    {
      key: "partnership",
      icon: <FaHandshake />,
      color: "from-emerald-500 to-teal-500",
    },
    { key: "growth", icon: <FaRocket />, color: "from-blue-500 to-indigo-500" },
  ];

  const stats = [
    {
      value: t("companyOverview.stats.years.number"),
      label: t("companyOverview.stats.years.label"),
      icon: <FaTrophy />,
    },
    {
      value: t("companyOverview.stats.projects.number"),
      label: t("companyOverview.stats.projects.label"),
      icon: <FaBriefcase />,
    },
    {
      value: t("companyOverview.stats.team.number"),
      label: t("companyOverview.stats.team.label"),
      icon: <FaUsers />,
    },
  ];
  return (
    <section
      className="relative w-full py-24 md:py-32 overflow-hidden bg-secondary"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-transparent rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-8xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge with Animation */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="inline-flex"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <span className="relative inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase bg-white text-primary px-5 py-2.5 rounded-full border border-primary/20 shadow-lg">
                  <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  {t("companyOverview.badge")}
                </span>
              </div>
            </div>

            {/* Title with Staggered Animation */}
            <div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold "
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <span className="text-gray-900">
                  {t("companyOverview.title")}
                </span>
                <br />
                <span className="text-[#582B21] relative inline-block mt-2">
                  {t("companyOverview.titleHighlight")}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4 L200 4"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="text-primary/30"
                      strokeDasharray="10 10"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="20"
                        to="0"
                        dur="1s"
                        begin="0.5s"
                        fill="freeze"
                      />
                    </path>
                  </svg>
                </span>
              </h2>
            </div>

            {/* Description with Fade Up */}
            <div
              className="space-y-5 text-gray-600 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <p className="text-lg">{t("companyOverview.description.p1")}</p>
              <p className="text-lg">{t("companyOverview.description.p2")}</p>
            </div>

            {/* Stats Row */}
            <div
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {t(stat.value)}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Enhanced Animation */}
          <div
            data-aos={isRTL ? "fade-left" : "fade-right"}
            data-aos-duration="1200"
            data-aos-delay="200"
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative group">
              {/* Animated Border Gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                <div className="relative h-[550px] md:h-[600px] w-full">
                  <Image
                    src="/st2.jpeg"
                    alt="Sadara Development Investment Company"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Animated Overlay Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 delay-300" />
                </div>

                {/* Floating Info Card with Animation */}
                <div className="absolute bottom-6 left-6 right-6 animate-slide-up">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/30 transform transition-all duration-500 hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 blur-lg rounded-xl" />
                        <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                          <FaBuilding className="w-7 h-7 text-gray-900" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {t("companyOverview.card.title")}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <FaGlobe className="text-primary text-xs" />
                          <p className="text-sm text-gray-600">
                            {t("companyOverview.card.subtitle")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Badge with Animation */}
                <div className="absolute top-6 right-6 animate-bounce-in">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-ring" />
                        <div className="w-2 h-2 bg-green-500 rounded-full absolute inset-0 animate-ping" />
                      </div>
                      <span className="text-xs font-bold text-gray-700">
                        {isRTL ? "تأسست عام ١٩٩٢" : "Est. 1992"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10 animate-spin-slow" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10 animate-spin-slow-delayed" />

            {/* Floating Dots */}
            <div className="absolute top-1/4 -right-4 w-2 h-2 bg-primary/40 rounded-full animate-float-slow" />
            <div className="absolute bottom-1/3 -left-4 w-3 h-3 bg-primary/30 rounded-full animate-float-slower" />
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
          }
          70% {
            box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 7s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-delayed {
          animation: spin-slow 25s linear infinite reverse;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
        }

        .animate-pulse-ring {
          animation: pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Smooth AOS Overrides */
        [data-aos] {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* RTL Specific */
        [dir="rtl"] .text-left {
          text-align: right !important;
        }
      `}</style>
    </section>
  );
};

export default CompanyOverview;
