"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

import HeroMain from "./HeroSectionMain";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";

const HeaderHero = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef(null);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (mobileMenuOpen) {
      setOpenMobileDropdown(null);
    }
  }, [mobileMenuOpen]);
  // Get page-specific data for non-home pages
  const getPageData = () => {
    const path = pathname.split("/")[1];
    const pageConfig = {
      about: {
        badgeKey: "pages.about.badge",
        titleKey: "pages.about.title",
        image: "/about.jpg",
        subtitleKey: "pages.about.subtitle",
      },
      contact: {
        badgeKey: "pages.contact.badge",
        titleKey: "pages.contact.title",
        image: "/images/contact-hero.jpg",
        subtitleKey: "pages.contact.subtitle",
      },
      media: {
        badgeKey: "pages.media.badge",
        titleKey: "pages.media.title",
        image: "/images/media-hero.jpg",
        subtitleKey: "pages.media.subtitle",
      },
      career: {
        badgeKey: "pages.career.badge",
        titleKey: "pages.career.title",
        image: "/images/career-hero.jpg",
        subtitleKey: "pages.career.subtitle",
      },
      services: {
        badgeKey: "pages.services.badge",
        titleKey: "pages.services.title",
        image: "/images/services-hero.jpg",
        subtitleKey: "pages.services.subtitle",
      },
      companies: {
        badgeKey: "pages.companies.badge",
        titleKey: "pages.companies.title",
        image: "/images/companies-hero.jpg",
        subtitleKey: "pages.companies.subtitle",
      },
    };
    return pageConfig[path] || pageConfig.about;
  };

  const slides = [
    {
      id: "hero.slide1.id",
      titleKey: "hero.slide1.title",
      descKey: "hero.slide1.desc",
      image: "hero.slide1.image",
      link: "hero.slide1.link",
      ctaKey: "hero.slide1.cta",
    },
    {
      id: "hero.slide2.id",
      titleKey: "hero.slide2.title",
      descKey: "hero.slide2.desc",
      image: "hero.slide2.image",
      link: "hero.slide2.link",
      ctaKey: "hero.slide2.cta",
    },
    {
      id: "hero.slide3.id",
      titleKey: "hero.slide3.title",
      descKey: "hero.slide3.desc",
      image: "hero.slide3.image",
      link: "hero.slide3.link",
      ctaKey: "hero.slide3.cta",
    },
    {
      id: "hero.slide4.id",
      titleKey: "hero.slide4.title",
      descKey: "hero.slide4.desc",
      image: "hero.slide4.image",
      link: "hero.slide4.link",
      ctaKey: "hero.slide4.cta",
    },
    {
      id: "hero.slide5.id",
      titleKey: "hero.slide5.title",
      descKey: "hero.slide5.desc",
      image: "hero.slide5.image",
      link: "hero.slide5.link",
      ctaKey: "hero.slide5.cta",
    },
    {
      id: "hero.slide6.id",
      titleKey: "hero.slide6.title",
      descKey: "hero.slide6.desc",
      image: "hero.slide6.image",
      link: "hero.slide6.link",
      ctaKey: "hero.slide6.cta",
    },
    {
      id: "hero.slide7.id",
      titleKey: "hero.slide7.title",
      descKey: "hero.slide7.desc",
      image: "hero.slide7.image",
      link: "hero.slide7.link",
      ctaKey: "hero.slide7.cta",
    },
    // {
    //   id: "salam-station",
    //   titleKey: "hero.slide6.title",
    //   descKey: "hero.slide6.desc",
    //   image: "/hero/salam.png",
    //   link: "/companies/salam-station",
    //   ctaKey: "hero.slide6.cta",
    // },
  ];
  // Services dropdown items
  const servicesItems = [
    {
      labelKey: "hero.services.telecom",
      href: "/services/telecom-it",
    },
    {
      labelKey: "hero.services.security",
      href: "/services/industrial-security",
    },
    {
      labelKey: "hero.services.facility",
      href: "/services/facility-management",
    },
    {
      labelKey: "hero.services.oilgas",
      href: "/services/oil-gas",
    },
    {
      labelKey: "hero.services.manufacturing",
      href: "/services/manufacturing",
    },
    {
      labelKey: "hero.services.realestate",
      href: "/services/real-estate",
    },
  ];
  const companiesData = t("companies.data", { returnObjects: true });

  // Companies dropdown items - USE TRANSLATION KEYS from companies.data
  const companiesItems = companiesData.map((company, index) => ({
    labelKey: `companies.data.${index}.name`,
    href: `/companies/${company.slug}`,
  }));
  // Auto slide - Only on home page
  useEffect(() => {
    if (!isHomePage) return;

    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval.current);
  }, [isHomePage]);

  const nextSlide = () => {
    if (!isHomePage || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  };

  const prevSlide = () => {
    if (!isHomePage || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  };

  const goToSlide = (index) => {
    if (!isHomePage || isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  };

  const currentSlideData = slides[currentSlide];
  const pageData = getPageData();

  // Navigation links
  const navLinks = [
    { key: "home", href: "/", label: t("nav.home") },
    { key: "about", href: "/about", label: t("nav.about") },
    {
      key: "services",
      href: "#",
      label: t("nav.services"),
      dropdown: servicesItems,
    },
    {
      key: "companies",
      href: "#",
      label: t("nav.companies"),
      dropdown: companiesItems,
    },
    { key: "media", href: "/media", label: t("nav.media") },
    { key: "career", href: "/careers", label: t("nav.career") },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between gap-4">
            <Link href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
              className="relative z-10 flex-shrink-0">
              <Image
                src="/sadara.png"
                alt="Sadara Group"
                width={160}
                height={40}
                className={`transition-all duration-300 ${scrolled ? "brightness-100" : "brightness-0 invert"}`}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    onClick={(e) => {
                      if (pathname === "/" && link.href === "/") {
                        e.preventDefault();
                        window.location.reload();
                      }
                    }}
                    href={link.href}
                    className={`text-sm font-medium mt-2 transition-colors duration-300 flex items-center gap-1 ${scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-primary"}`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <FiChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>
                  {link.dropdown && activeDropdown === link.key && (
                    <div className="pt-2">
                      <div className="absolute top-full left-0 min-w-[220px] bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                          >
                            {t(item.labelKey)} {/* Use t() with labelKey */}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Image
                src="/saudivision.png"
                alt="Saudi Vision 2030"
                width={80}
                height={40}
                className="object-contain"
              />
              <LanguageSwitcher />
              <Link href="/contact">
                <button className="px-5 py-2 cursor-pointer rounded-lg font-semibold text-sm transition-all duration-300 bg-primary text-white hover:bg-primary/90 shadow-md">
                  {t("header.contact")}
                </button>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors z-50 ${scrolled ? "text-gray-700" : "text-white"}`}
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" color="black" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed RTL alignment */}
        <div
          className={`fixed inset-x-0 bg-white z-40 lg:hidden transition-transform duration-500 ease-in-out ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          style={{
            top: 0,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <div className="flex-1 overflow-y-auto px-6 pt-20 pb-4">
            {navLinks.map((link) => (
              <div key={link.key} className="border-b border-gray-100">
                {link.dropdown ? (
                  <> <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === link.key ? null : link.key
                      )
                    }
                    className={`w-full flex items-center py-4 text-gray-800 font-medium justify-between ${isRTL ? "flex-row-reverse" : ""
                      }`}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${openMobileDropdown === link.key ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === link.key
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="pb-4 pl-4 space-y-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-gray-600 text-sm hover:text-primary py-1"
                          >
                            {t(item.labelKey)} {/* Use t() with labelKey */}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 text-gray-800 font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-auto pt-6 space-y-4">
              <Image
                src="/saudivision.png"
                alt="Saudi Vision 2030"
                width={80}
                height={40}
                className="object-contain"
              />
              <LanguageSwitcher />
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full flex justify-center bg-primary text-white py-3 rounded-lg font-semibold">
                  {t("header.contact")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Home page slider OR HeroMain for other pages */}
      {isHomePage ? (
        <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="relative w-full h-full flex-shrink-0">
                  <Image
                    src={t(slide.image)}
                    alt={t(slide.titleKey)}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center justify-center text-center">
            <div className="max-w-4xl">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-500 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"} ${isRTL ? "font-formal-arabic-bold" : ""}`}
              >
                {t(currentSlideData.titleKey)}
              </h1>
              <p
                className={`text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
              >
                {t(currentSlideData.descKey)}
              </p>
              <div
                className={`transition-all duration-500 delay-200 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
              >
                <Link href={t(currentSlideData.link)}>
                  <button className="group cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
                    <span>{t(currentSlideData.ctaKey)}</span>
                    <FiArrowRight
                      className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-[60%] md:top-1/2 md:-translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
          >
            <FiChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-[60%] md:top-1/2 md:-translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
          >
            <FiChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${idx === currentSlide ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </section>
      ) : (
        <HeroMain
          badge={t(pageData.badgeKey)}
          title={t(pageData.titleKey)}
          subtitle={t(pageData.subtitleKey)}
          image={pageData.image}
          height="h-[450px] md:h-[550px]"
        />
      )}
    </>
  );
};

export default HeaderHero;
