"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ChairmanMessage() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section
      id="chairman-message"
      className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-10 lg:px-28"
    >
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
          {t("ceoMessage.title")}
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center">
          {t("ceoMessage.message")}
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {t("ceoMessage.name").charAt(0)}
              </span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            {t("ceoMessage.name")}
          </h3>
          <p className="text-gray-600 text-center">
            {t("ceoMessage.position")}
          </p>
        </div>
      </div>
    </section>
  );
}
