"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPlay,
  FiArrowRight,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();
  const { isRTL, locale } = useLanguage();
  const progressInterval = useRef(null);

  // Get slides from translations
  const getSlides = () => {
    return [
      {
        type: "image",
        image: "/hero1.jpg",
        titleKey: "hero.slide1.title",
        highlightKey: "hero.slide1.highlight",
        descKey: "hero.slide1.desc",
        link: "/companies/sadara-development",
        ctaKey: "hero.slide1.cta",
        services: [
          "Diversified Investment Portfolio",
          "Strategic Holdings",
          "Vision 2030 Alignment",
        ],
      },
      {
        type: "image",
        image: "/hero22.jpg",
        titleKey: "hero.slide2.title",
        highlightKey: "hero.slide2.highlight",
        descKey: "hero.slide2.desc",
        link: "/companies/saudi-call",
        ctaKey: "hero.slide2.cta",
        services: ["Telecom & IT", "Security Systems", "Fiber Optics"],
      },
      {
        type: "image",
        image: "/hero3.jpg",
        titleKey: "hero.slide3.title",
        highlightKey: "hero.slide3.highlight",
        descKey: "hero.slide3.desc",
        link: "/companies/ebreez",
        ctaKey: "hero.slide3.cta",
        services: ["Real Estate", "Property Management", "Investment"],
      },
      {
        type: "image",
        image: "/hero1.jpg",
        titleKey: "hero.slide4.title",
        highlightKey: "hero.slide4.highlight",
        descKey: "hero.slide4.desc",
        link: "/companies/mawad",
        ctaKey: "hero.slide4.cta",
        services: ["Oil & Gas", "Drilling Solutions", "Industrial Minerals"],
      },
      {
        type: "image",
        image: "/hero22.jpg",
        titleKey: "hero.slide5.title",
        highlightKey: "hero.slide5.highlight",
        descKey: "hero.slide5.desc",
        link: "/companies/plastech",
        ctaKey: "hero.slide5.cta",
        services: ["Plastic Manufacturing", "Packaging", "Industrial Products"],
      },
    ];
  };

  const slides = getSlides();
  const currentSlide = slides[currentIndex];

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying) {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      return;
    }

    setProgress(0);
    const startTime = Date.now();
    const duration = 6000;

    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / duration) * 100;

      if (newProgress >= 100) {
        setProgress(100);
        clearInterval(progressInterval.current);
      } else {
        setProgress(newProgress);
      }
    }, 50);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  // Auto-play slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrevSlide = () => {
    console.log('first')
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 600);
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1080px] overflow-hidden bg-gray-900">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${idx === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
              }`}
          >
            {/* Dark Overlay Gradient - RTL aware */}
            <div
              className={`absolute inset-0 z-10 ${isRTL
                ? "bg-gradient-to-l from-black/90 via-black/70 to-black/50"
                : "bg-gradient-to-r from-black/90 via-black/70 to-black/50"
                }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />

            <Image
              src={slide.image}
              alt={t(slide.titleKey)}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 z-20 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%)
            `,
            backgroundSize: "60px 60px",
            animation: "slide 20s linear infinite",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto h-full px-6 md:px-12 lg:px-20">
        <div
          className={`h-full flex items-center ${isRTL ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`w-full max-w-4xl ${isRTL ? "text-right" : "text-left"}`}
          >
            {/* Premium Company Indicator */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 transition-all duration-700 ${isTransitioning
                ? "opacity-0 -translate-y-10"
                : "opacity-100 translate-y-0"
                }`}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide uppercase">
                {t("hero.company")}
              </span>
            </div>

            {/* Main Title */}
            <div
              className={`mb-6 transition-all duration-700 delay-100 ${isTransitioning
                ? "opacity-0 translate-y-8"
                : "opacity-100 translate-y-0"
                }`}
            >
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pt-6 ${isRTL ? "font-formal-arabic-bold" : "font-formal-bold"}`}
              >
                <span className="block text-white leading-tight">
                  {t(currentSlide.titleKey)}
                </span>
                <span className="relative inline-block mt-3">
                  <span className="relative z-10 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {t(currentSlide.highlightKey)}
                  </span>
                  <div
                    className={`absolute -bottom-2 h-1 w-24 bg-gradient-to-r from-primary to-primary/40 rounded-full ${isRTL ? "right-0" : "left-0"}`}
                  />
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={`mb-8 transition-all duration-700 delay-200 ${isTransitioning
                ? "opacity-0 translate-y-8"
                : "opacity-100 translate-y-0"
                }`}
            >
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
                {t(currentSlide.descKey)}
              </p>
            </div>

            {/* Service Tags */}
            <div
              className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-300 ${isTransitioning
                ? "opacity-0 translate-y-8"
                : "opacity-100 translate-y-0"
                } ${isRTL ? "justify-end" : "justify-start"}`}
            >
              {currentSlide.services.map((service, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm md:text-base hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-400 ${isTransitioning
                ? "opacity-0 translate-y-8"
                : "opacity-100 translate-y-0"
                } ${isRTL ? "sm:flex-row-reverse" : ""}`}
            >
              <Link href={currentSlide.link}>
                <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t(currentSlide.ctaKey)}
                    <FiArrowRight
                      className={`transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="group px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:border-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    {t("hero.contactUs")}
                    <div className="relative">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
                    </div>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-40">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex gap-2 md:gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="group relative"
                >
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex
                      ? "w-8 md:w-12 bg-primary"
                      : "w-6 md:w-8 bg-white/30 hover:bg-white/50"
                      }`}
                  >
                    {idx === currentIndex && isAutoPlaying && (
                      <div
                        className="absolute top-0 left-0 h-full bg-white/50 rounded-full transition-all duration-50"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Arrows & Play/Pause */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                aria-label={isAutoPlaying ? "Pause" : "Play"}
              >
                {isAutoPlaying ? (
                  <FiPause className="w-3 h-3 md:w-4 md:h-4" />
                ) : (
                  <FiPlay className="w-3 h-3 md:w-4 md:h-4" />
                )}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handlePrevSlide}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                >
                  {isRTL ? (
                    <FiChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
                  ) : (
                    <FiChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" />
                  )}
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                >
                  {isRTL ? (
                    <FiChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" />
                  ) : (
                    <FiChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-60px) translateY(-60px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
