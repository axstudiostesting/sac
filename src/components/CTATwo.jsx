"use client";
import SpacingWrapper from "./SpacingWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <SpacingWrapper>
      <section className="bg-gradient-to-r from-primary via-secondary to-primary text-white py-16 px-6 md:px-12 lg:px-24 rounded-lg shadow-xl mx-4 md:mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg text-center md:text-left">
              {t("ctaTwo.title")}
            </h2>
            <p className="text-lg opacity-90 leading-relaxed text-center md:text-left">
              {t("ctaTwo.description")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-white text-secondary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              {t("ctaTwo.contactButton")}
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-secondary transition-colors duration-300 text-center"
            >
              {t("ctaTwo.projectsButton")}
            </a>
          </div>
        </div>
      </section>
    </SpacingWrapper>
  );
}
