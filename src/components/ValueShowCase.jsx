"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaStore,
  FaChartLine,
} from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueShowCase = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const coreValues = [
    {
      icon: <FaHandshake size={28} />,
      title: t("aboutValues.integrity"),
      description: t("aboutValues.integrityDesc"),
    },
    {
      icon: <FaLightbulb size={28} />,
      title: t("aboutValues.smartEnergy"),
      description: t("aboutValues.smartEnergyDesc"),
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: t("aboutValues.reliable"),
      description: t("aboutValues.reliableDesc"),
    },
    {
      icon: <FaUsers size={28} />,
      title: t("aboutValues.collaborative"),
      description: t("aboutValues.collaborativeDesc"),
    },
    {
      icon: <FaChartLine size={28} />,
      title: t("aboutValues.greenLeadership"),
      description: t("aboutValues.greenLeadershipDesc"),
    },
    {
      icon: <FaStore size={28} />,
      title: t("aboutValues.clientFirst"),
      description: t("aboutValues.clientFirstDesc"),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
          {t("aboutValues.coreValues")}
        </h2>
        <p className="text-black max-w-2xl mb-12 text-center mx-auto">
          {t("aboutValues.coreValuesDesc")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 px-4">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-secondary/10 text-secondary w-16 h-16 flex items-center justify-center rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueShowCase;
