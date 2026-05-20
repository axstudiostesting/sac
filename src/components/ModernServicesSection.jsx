"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const EnhancedServicesSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      titleKey: "services.telecom.title",
      descKey: "services.telecom.shortDesc",
      image: "/telecom.webp",
      link: "/services/telecom-it",
    },
    {
      titleKey: "services.security.title",
      descKey: "services.security.shortDesc",
      image: "/security.jpg",
      link: "/services/industrial-security",
    },
    {
      titleKey: "services.facility.title",
      descKey: "services.facility.shortDesc",
      image: "/facility.webp",
      link: "/services/facility-management",
    },
    {
      titleKey: "services.oilgas.title",
      descKey: "services.oilgas.shortDesc",
      image: "/oil.webp",
      link: "/services/oil-gas",
    },
    {
      titleKey: "services.manufacturing.title",
      descKey: "services.manufacturing.shortDesc",
      image: "/manufactoring.webp",
      link: "/services/manufacturing",
    },
    {
      titleKey: "services.realestate.title",
      descKey: "services.realestate.shortDesc",
      image: "/hero3.jpg",
      link: "/services/real-estate",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Animated Background Elements */}
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

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] opacity-30" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* About Section */}
        {/* <div className="max-w-4xl mx-auto text-center mb-24">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("aboutCompany.badge")}
            </span>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t("aboutCompany.title")}{" "}
              <span className="text-primary relative inline-block">
                {t("aboutCompany.highlightedText")}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q25 0 50 5 T100 5"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t("aboutCompany.description")}
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="mt-8"
          >
            <Link href="/about">
              <button className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span>{t("aboutCompany.buttonText")}</span>
                {isRTL ? (
                  <FiChevronRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </Link>
          </div>
        </div> */}

        {/* Services Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/5 px-4 py-1.5 rounded-full">
            {t("services.badge")}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("services.title")}{" "}
            <span className="text-primary">
              {t("services.highlightedText")}
            </span>
          </h3>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link href={service.link} key={idx}>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={idx * 100}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Number Badge */}
                  {/* <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary font-bold text-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    {String(idx + 1).padStart(2, "0")}
                  </div> */}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {t(service.descKey)}
                  </p>

                  {/* Read More Link */}
                  <div className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>{t("services.readMore")}</span>
                    {isRTL ? (
                      <FiChevronRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section - Using translations if available, otherwise clean design */}
        {/* <div className="mt-24">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  40+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Years of Excellence
                </div>
                <div className="w-12 h-0.5 bg-primary/20 mx-auto mt-3 group-hover:w-16 transition-all duration-300" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Projects Completed
                </div>
                <div className="w-12 h-0.5 bg-primary/20 mx-auto mt-3 group-hover:w-16 transition-all duration-300" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  100+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Expert Team Members
                </div>
                <div className="w-12 h-0.5 bg-primary/20 mx-auto mt-3 group-hover:w-16 transition-all duration-300" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Client Support
                </div>
                <div className="w-12 h-0.5 bg-primary/20 mx-auto mt-3 group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EnhancedServicesSection;
