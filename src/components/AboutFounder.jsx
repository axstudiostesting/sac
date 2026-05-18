"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiAward,
  FiBriefcase,
  FiUsers,
  FiCheckCircle,
  FiStar,
  FiBookOpen,
  FiCpu,
  FiTrendingUp,
  FiShield,
  FiTarget,
  FiGlobe,
} from "react-icons/fi";
const iconMap = {
  trending: <FiTrendingUp className="w-4 h-4" />,
  briefcase: <FiBriefcase className="w-4 h-4" />,
  users: <FiUsers className="w-4 h-4" />,
  target: <FiTarget className="w-4 h-4" />,
};

const AboutFounders = () => {
  const { isRTL, language } = useLanguage();
  const { t } = useTranslation();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      [...Array(15)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${5 + Math.random() * 10}s`,
        delay: `${Math.random() * 5}s`,
      }))
    );
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  const founders = t("aboutFounders.founders").map((founder, index) => ({
    ...founder,
    id: `founder-${index + 1}`,
  }));

  // Stats data
  const stats = t("aboutFounders.stats").map((stat, index) => ({
    ...stat,
    icon: iconMap[stat.icon],
    id: `stat-${index + 1}`,
  }));

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-16 pb-4">
      <section className="relative py-12 md:py-16 lg:py-20 bg-primary rounded-3xl shadow-2xl overflow-hidden">
        {/* Premium Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                top: p.top,
                left: p.left,
                animation: `float ${p.duration} linear infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Header with Premium Badge */}
          <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="relative">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
              <span className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
                {t("aboutFounders.badge")}
              </span>
              <FiAward className="text-white/80 w-4 h-4" />
            </div>
          </div>

          {/* Message from Founders */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-12 border border-white/20"
          >
            <div
              className={`text-center ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <FiGlobe className="text-white/60 w-6 h-6" />
                <span className="text-white/60 text-sm uppercase tracking-wider">
                  {t("aboutFounders.messageLabel")}
                </span>
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed italic">
                "{t("aboutFounders.message")}"
              </p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white/80 font-medium">
                  {t("aboutFounders.messageSignature")}
                </p>
              </div>
            </div>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="p-8">
                  {/* Founder Header */}
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                    {/* Image */}
                    <div className="relative group/image">
                      <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-700" />
                      <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Name & Title */}
                    <div
                      className={`text-center md:text-left ${isRTL ? "md:text-right" : ""}`}
                    >
                      <h2 className="text-2xl font-bold text-white mb-1">
                        {founder.name}
                      </h2>
                      <p className="text-white/70 text-sm">{founder.title}</p>
                      <div
                        className={`w-12 h-0.5 bg-white/30 rounded-full mt-3 ${isRTL ? "md:mr-0" : ""}`}
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-5">
                    <div
                      className={`flex items-center gap-2 mb-3 ${isRTL ? "flex-row-reverse justify-end" : ""}`}
                    >
                      <FiBriefcase className="text-white/60 w-4 h-4" />
                      <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                        {t("aboutFounders.experience")}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {founder.experience.map((exp, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 text-white/80 text-sm ${isRTL ? "flex-row-reverse" : ""}`}
                        >
                          <FiCheckCircle className="text-white/40 w-3 h-3 mt-1 flex-shrink-0" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certifications */}
                  <div>
                    <div
                      className={`flex items-center gap-2 mb-3 ${isRTL ? "flex-row-reverse justify-end" : ""}`}
                    >
                      <FiAward className="text-white/60 w-4 h-4" />
                      <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                        {t("aboutFounders.certifications")}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {founder.certifications.map((cert, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 text-white/80 text-sm ${isRTL ? "flex-row-reverse" : ""}`}
                        >
                          <FiStar className="text-white/40 w-3 h-3 mt-1 flex-shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={400 + index * 50}
              >
                <div className={`flex items-center justify-center gap-2 mb-2`}>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-white/60 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150" />
                <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse delay-300" />
              </div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutFounders;