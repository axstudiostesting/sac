"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const SadaraServices = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      titleKey: "sadaraServices.telecom.title",
      descKey: "sadaraServices.telecom.shortDesc",
      image: "/h1b.jpg",
      link: "/services/telecom-it",
      aosDelay: 0,
    },
    {
      titleKey: "sadaraServices.security.title",
      descKey: "sadaraServices.security.shortDesc",
      image: "/img2.jpg",
      link: "/services/industrial-security",
      aosDelay: 100,
    },
    {
      titleKey: "sadaraServices.facility.title",
      descKey: "sadaraServices.facility.shortDesc",
      image: "/img3.jpg",
      link: "/services/facility-management",
      aosDelay: 0,
    },
    {
      titleKey: "sadaraServices.oilgas.title",
      descKey: "sadaraServices.oilgas.shortDesc",
      image: "/h1b.jpg",
      link: "/services/oil-gas",
      aosDelay: 100,
    },
    {
      titleKey: "sadaraServices.manufacturing.title",
      descKey: "sadaraServices.manufacturing.shortDesc",
      image: "/img2.jpg",
      link: "/services/manufacturing",
      aosDelay: 0,
    },
    {
      titleKey: "sadaraServices.realestate.title",
      descKey: "sadaraServices.realestate.shortDesc",
      image: "/img3.jpg",
      link: "/services/real-estate",
      aosDelay: 100,
    },
  ];

  if (isMobile) {
    return (
      <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
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
          <div>
            <div data-aos="fade-up">
              <SectionTitle
                badge={t("sadaraServices.badge")}
                title={t("sadaraServices.title")}
                highlightedText={t("sadaraServices.highlightedText")}
                subtitle={t("sadaraServices.subtitle")}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 mt-12">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={t(service.titleKey)}
                      fill
                      className="object-cover brightness-75 contrast-125 grayscale group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#27374e] transition-colors">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {t(service.descKey)}
                    </p>
                    <Link href={service.link}>
                      <button className="inline-flex items-center gap-2 text-[#27374e] font-semibold text-sm group/btn hover:gap-3 transition-all duration-300">
                        {t("sadaraServices.readMore")}
                        <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
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

      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div>
          <div data-aos="fade-up">
            <SectionTitle
              badge={t("sadaraServices.badge")}
              title={t("sadaraServices.title")}
              highlightedText={t("sadaraServices.highlightedText")}
              subtitle={t("sadaraServices.subtitle")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            {services.map((service, idx) => {
              const aosAnimation = idx % 2 === 0 ? "fade-up" : "fade-down";
              return (
                <Link href={service.link} key={idx}>
                  <div
                    data-aos={aosAnimation}
                    data-aos-delay={service.aosDelay}
                    data-aos-duration="800"
                    className="group relative block overflow-hidden cursor-pointer"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={t(service.titleKey)}
                        fill
                        className="object-cover brightness-75 contrast-125 grayscale group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 line-clamp-2">
                          {t(service.titleKey)}
                        </h2>
                        <p className="text-white/80 text-sm md:text-base mb-4 max-w-lg line-clamp-2">
                          {t(service.descKey)}
                        </p>
                        <button className="inline-flex items-center gap-2 text-white font-semibold text-sm md:text-base group/btn hover:gap-3 transition-all duration-300 w-fit">
                          {t("sadaraServices.readMore")}
                          <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5 md:p-6 lg:p-7 group-hover:opacity-0 transition-opacity duration-500">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white line-clamp-1">
                        {t(service.titleKey)}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SadaraServices;
