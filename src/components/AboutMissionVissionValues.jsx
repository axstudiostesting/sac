"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaBullseye,
  FaEye,
  FaBalanceScale,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaLeaf,
  FaHeart,
} from "react-icons/fa";

const AboutMissionVissionValues = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const values = [
    {
      icon: <FaBalanceScale size={18} />,
      title: t("aboutValues.integrity"),
      desc: t("aboutValues.integrityDesc"),
    },
    {
      icon: <FaHandshake size={18} />,
      title: t("aboutValues.loyalty"),
      desc: t("aboutValues.loyaltyDesc"),
    },
    {
      icon: <FaLightbulb size={18} />,
      title: t("aboutValues.smartEnergy"),
      desc: t("aboutValues.smartEnergyDesc"),
    },
    {
      icon: <FaUsers size={18} />,
      title: t("aboutValues.collaborative"),
      desc: t("aboutValues.collaborativeDesc"),
    },
  ];

  return (
    <section className="bg-white">
      {/* Mission & Vision */}
      <div className="relative py-20 px-6 md:px-12 bg-primary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-4 bg-secondary text-white rounded-full">
                <FaBullseye size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {t("aboutValues.mission")}
              </h2>
            </div>
            <h3 className="text-xl font-semibold text-secondary">
              {t("aboutValues.missionSubtitle")}
            </h3>
            <p className="text-white text-lg leading-relaxed text-center">
              {t("aboutValues.missionText")}
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-4 bg-secondary text-white rounded-full">
                <FaEye size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {t("aboutValues.vision")}
              </h2>
            </div>
            <h3 className="text-xl font-semibold text-secondary">
              {t("aboutValues.visionSubtitle")}
            </h3>
            <p className="text-white text-lg leading-relaxed text-center">
              {t("aboutValues.visionText")}
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Heading */}
      <div className="text-center mb-10 mt-20">
        <div className="flex mb-2 justify-center">
          <div className="p-4 bg-secondary text-white rounded-full">
            <FaHeart size={24} />
          </div>
        </div>
        <h2 className="text-2xl text-black font-bold text-center">
          {t("aboutValues.coreValues")}
        </h2>
        <p className="text-gray-600 mt-2 text-lg max-w-md text-center mx-auto">
          {t("aboutValues.coreValuesDesc")}
        </p>
      </div>

      {/* Core Values List */}
      <div className="space-y-4 max-w-4xl mx-auto px-4 pb-20">
        {values.map((val, i) => (
          <div
            key={i}
            className="flex items-start border border-gray-200 p-4 rounded-lg hover:shadow-md transition duration-300"
          >
            <div className="text-secondary mt-1 mr-4">{val.icon}</div>
            <div className="text-center flex-1">
              <h4 className="font-semibold text-gray-800 text-center">
                {val.title}
              </h4>
              <p className="text-gray-600 text-lg mt-1 text-center">
                {val.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMissionVissionValues;
