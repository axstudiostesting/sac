"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const ServicesSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      id: "telecom-it",
      slug: "telecom-it",
      titleKey: "services.telecom.title",
      descKey: "services.telecom.desc",
      shortDescKey: "services.telecom.shortDesc",
      image: "/h1b.jpg",
      icon: "📡",
    },
    {
      id: "industrial-security",
      slug: "industrial-security",
      titleKey: "services.security.title",
      descKey: "services.security.desc",
      shortDescKey: "services.security.shortDesc",
      image: "/img2.jpg",
      icon: "🛡️",
    },
    {
      id: "facility-management",
      slug: "facility-management",
      titleKey: "services.facility.title",
      descKey: "services.facility.desc",
      shortDescKey: "services.facility.shortDesc",
      image: "/img3.jpg",
      icon: "🏢",
    },
    {
      id: "oil-gas",
      slug: "oil-gas",
      titleKey: "services.oilgas.title",
      descKey: "services.oilgas.desc",
      shortDescKey: "services.oilgas.shortDesc",
      image: "/h1b.jpg",
      icon: "🛢️",
    },
    {
      id: "manufacturing",
      slug: "manufacturing",
      titleKey: "services.manufacturing.title",
      descKey: "services.manufacturing.desc",
      shortDescKey: "services.manufacturing.shortDesc",
      image: "/img2.jpg",
      icon: "🏭",
    },
    {
      id: "real-estate",
      slug: "real-estate",
      titleKey: "services.realestate.title",
      descKey: "services.realestate.desc",
      shortDescKey: "services.realestate.shortDesc",
      image: "/img3.jpg",
      icon: "🏗️",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
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

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div data-aos="fade-up">
          <SectionTitle
            badge={t("services.badge")}
            title={t("services.title")}
            highlightedText={t("services.highlightedText")}
            subtitle={t("services.subtitle")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={t(service.titleKey)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#27374e] transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {t(service.shortDescKey)}
                </p>
                <Link href={`/services/${service.slug}`}>
                  <button className="inline-flex items-center gap-2 text-[#27374e] font-semibold text-sm group/btn hover:gap-3 transition-all duration-300">
                    {t("services.readMore")}
                    <FiArrowRight
                      className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
