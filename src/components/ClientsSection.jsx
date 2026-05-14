"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { toArabicNumerals } from "@/utils/translations";

const ClientsSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const metricsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Animate numbers when metrics come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate clients (500)
            let start = 0;
            const endClients = 500;
            const duration = 2000;
            const step = 10;
            const incrementClients = endClients / (duration / step);

            const timer = setInterval(() => {
              start += incrementClients;
              if (start >= endClients) {
                setCounts((prev) => ({ ...prev, clients: endClients }));
                clearInterval(timer);
              } else {
                setCounts((prev) => ({ ...prev, clients: Math.floor(start) }));
              }
            }, step);

            // Animate projects (1000)
            let startProjects = 0;
            const endProjects = 1000;
            const timerProjects = setInterval(() => {
              startProjects += incrementClients * 2;
              if (startProjects >= endProjects) {
                setCounts((prev) => ({ ...prev, projects: endProjects }));
                clearInterval(timerProjects);
              } else {
                setCounts((prev) => ({
                  ...prev,
                  projects: Math.floor(startProjects),
                }));
              }
            }, step);

            // Animate experience (15)
            let startYears = 0;
            const endYears = 15;
            const timerYears = setInterval(() => {
              startYears += 0.5;
              if (startYears >= endYears) {
                setCounts((prev) => ({ ...prev, experience: endYears }));
                clearInterval(timerYears);
              } else {
                setCounts((prev) => ({
                  ...prev,
                  experience: Math.floor(startYears),
                }));
              }
            }, 80);

            return () => {
              clearInterval(timer);
              clearInterval(timerProjects);
              clearInterval(timerYears);
            };
          }
        });
      },
      { threshold: 0.3 },
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [hasAnimated]);

  // Client logos - Fixed duplicate entries
  const clients = [
    { name: "Saudi Aramco", logo: "/clients/p1.png" },
    { name: "STC", logo: "/clients/stc.png" },
    { name: "Saudi Water Authority", logo: "/clients/saudi-water.png" },

    { name: "Comatec", logo: "/clients/comatec.png" },
    { name: "Ministry of Interior", logo: "/clients/moi.jpg" },
    { name: "Mobily", logo: "/clients/mobily.webp" },
    { name: "Red Sea", logo: "/clients/redsea.webp" },
    { name: "Neom", logo: "/clients/neom.webp" },
    { name: "kafd", logo: "/clients/kafd.webp" },
    { name: "daco", logo: "/clients/daco.webp" },
    { name: "kafd", logo: "/clients/safd2.webp" },
    { name: "Salam", logo: "/clients/salam.png" },
    { name: "flir", logo: "/clients/flir.webp" },
    { name: "kafd", logo: "/clients/salto.webp" },
    { name: "Salam", logo: "/clients/alhua.webp" },
  ];

  const metrics = [
    {
      icon: FiUsers,
      value: hasAnimated
        ? isRTL
          ? toArabicNumerals(`+${counts.clients}`)
          : `${counts.clients}+`
        : isRTL
          ? "٠+"
          : "0+",
      title: isRTL ? "عملاء سعداء" : "Happy Clients",
    },
    {
      icon: FiBriefcase,
      value: hasAnimated
        ? isRTL
          ? toArabicNumerals(`+${counts.projects}`)
          : `${counts.projects}+`
        : isRTL
          ? "٠+"
          : "0+",
      title: isRTL ? "المشاريع المنجزة" : "Projects Completed",
    },
    {
      icon: FiAward,
      value: hasAnimated
        ? isRTL
          ? toArabicNumerals(`+${counts.experience}`)
          : `${counts.experience}+`
        : isRTL
          ? "٠+"
          : "0+",
      title: isRTL ? "سنوات الخبرة" : "Years Experience",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-white">
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
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
          {/* Left Side - Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase bg-primary/10 px-5 py-2 rounded-full border border-primary/20">
                {t("clients.badge")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t("clients.title")}{" "}
              <span className="text-primary">
                {t("clients.titleHighlight")}
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t("clients.description")}
            </p>

            {/* <button className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 text-lg">
              {t("clients.viewAll")}
              <FiArrowRight
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
              />
            </button> */}
          </div>

          {/* Right Side - Logos Grid */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {clients.map((client, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={(idx % 12) * 50}
                    data-aos-duration="600"
                    className="flex items-center justify-center py-4 px-3 bg-white rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/30 group"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={100}
                      height={50}
                      className="object-contain max-h-10 md:max-h-12 opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div ref={metricsRef} className="mt-2 pt-2 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="relative h-full  mt-6 !transition-all !duration-500 hover:-translate-y-2 overflow-hidden hover:cursor-default"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary transition-all duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl flex justify-center md:text-4xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm flex justify-center md:text-base font-semibold text-gray-500 uppercase tracking-wide">
                    {metric.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-[2px] bg-primary/20 rounded-full" />
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
              <div className="w-1.5 h-1.5 bg-primary/80 rounded-full" />
              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
            </div>
            <div className="w-12 h-[2px] bg-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
