"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroMain = ({
  title,
  subtitle,
  image = "/header-bg.jpg",
  badge = "Welcome",
  height = "h-[500px] md:h-[600px]",
}) => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={"/header-bg.jpg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 20px)`,
        }}
      />

      {/* Content - Only change is text-center here */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          {badge && (
            <div className="inline-block mb-4">
              <span className="text-white font-semibold text-sm md:text-base tracking-wider uppercase bg-white/10 px-5 py-2 rounded-full border border-white/20">
                {badge}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
