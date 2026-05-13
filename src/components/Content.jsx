"use client";
import {
  FaCogs,
  FaHeadset,
  FaThumbsUp,
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaLeaf,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./Title";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Content() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const features = [
    {
      icon: <FaBuilding size={24} />,
      title: t("whyChooseUs.saudiMarket"),
      description: t("whyChooseUs.saudiMarketDesc"),
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: t("whyChooseUs.ashraeCertified"),
      description: t("whyChooseUs.ashraeCertifiedDesc"),
    },
    {
      icon: <FaCogs size={24} />,
      title: t("whyChooseUs.turnkeySolutions"),
      description: t("whyChooseUs.turnkeySolutionsDesc"),
    },
    {
      icon: <FaLeaf size={24} />,
      title: t("whyChooseUs.sustainablePractices"),
      description: t("whyChooseUs.sustainablePracticesDesc"),
    },
    {
      icon: <FaChartLine size={24} />,
      title: t("whyChooseUs.provenROI"),
      description: t("whyChooseUs.provenROIDesc"),
    },
    {
      icon: <FaUsers size={24} />,
      title: t("whyChooseUs.gulfGaihabBacked"),
      description: t("whyChooseUs.gulfGaihabBackedDesc"),
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto mb-16 text-center" data-aos="fade-up">
        <Title text={t("whyChooseUs.title")} para={t("whyChooseUs.subtitle")} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="bg-secondary/10 text-secondary w-14 h-14 flex items-center justify-center rounded-lg mb-5">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">
              {item.title}
            </h4>
            <p className="text-gray-600 leading-relaxed text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
