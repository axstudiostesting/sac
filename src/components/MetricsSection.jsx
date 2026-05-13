"use client";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiUsers, FiAward, FiBriefcase } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const MetricsSection = () => {
  const { isRTL } = useLanguage();
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    years: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Animate numbers when section comes into view
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

            // Animate years (15)
            let startYears = 0;
            const endYears = 15;
            const timerYears = setInterval(() => {
              startYears += 0.5;
              if (startYears >= endYears) {
                setCounts((prev) => ({ ...prev, years: endYears }));
                clearInterval(timerYears);
              } else {
                setCounts((prev) => ({
                  ...prev,
                  years: Math.floor(startYears),
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const metrics = [
    {
      icon: FiUsers,
      value: hasAnimated ? `${counts.clients}+` : "0+",
      targetValue: 500,
      title: "Happy Clients",
      suffix: "+",
    },
    {
      icon: FiBriefcase,
      value: hasAnimated ? `${counts.projects.toLocaleString()}+` : "0+",
      targetValue: 1000,
      title: "Projects Completed",
      suffix: "+",
    },
    {
      icon: FiAward,
      value: hasAnimated ? `${counts.years}+` : "0+",
      targetValue: 15,
      title: "Years of Excellence",
      suffix: "+",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden bg-light"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-4 lg:px-4">
        {/* Centered Container with white background */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-2 md:p-4 lg:p-4">
          {/* Section Title */}
          <div data-aos="fade-up">
            <div className="text-center mb-2 md:mb-2">
              <div className="inline-block mb-4">
                <span className="text-[#27374e] font-semibold text-sm md:text-base tracking-wider uppercase bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10">
                  Performance Metrics
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Facts & <span className="text-[#27374e]">Figures</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Numbers that speak for themselves - Our journey of excellence
              </p>
              <div className="w-24 h-1 bg-[#27374e]/20 mx-auto mt-6 rounded-full"></div>
            </div>
          </div>

          {/* Metrics Grid - 3 items in a row */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="group relative text-center">
                  {/* Professional Outline Icon */}
                  <div className="flex justify-center mb-6">
                    <Icon className="w-16 h-16 md:w-20 md:h-20 text-[#27374e] transition-all duration-300 group-hover:scale-110 group-hover:text-[#27374e]/80" />
                  </div>

                  {/* Animated Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 tracking-tight">
                    {metric.value}
                  </div>

                  {/* Title */}
                  <div className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wide">
                    {metric.title}
                  </div>

                  {/* Decorative Line */}
                  <div className="w-12 h-0.5 bg-[#27374e]/20 mx-auto mt-4 group-hover:w-20 group-hover:bg-[#27374e]/40 transition-all duration-300 rounded-full"></div>
                </div>
              );
            })}
          </div>

          {/* Trust Badge at Bottom */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-16 text-center pt-8 border-t border-gray-100"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-[#27374e]/5 px-6 py-3 rounded-full border border-[#27374e]/10">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-[#27374e] rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-[#27374e]/80 rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-[#27374e]/60 rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700 font-medium">
                Trusted by industry leaders across the Kingdom
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
