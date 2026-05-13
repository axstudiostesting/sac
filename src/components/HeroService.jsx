"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function HeroService({ image, title, subtitle }) {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <div
      className="relative w-full h-[30vh] md:h-[45vh] bg-center bg-cover flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div
        className={`relative z-20 px-4 text-center hero-content`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h1
          className={`text-3xl md:text-5xl font-bold mb-4 drop-shadow-md text-center`}
        >
          {title === "Our Services"
            ? t("services.title")
            : title === "contact.heroTitle"
            ? t("contact.heroTitle")
            : title}
        </h1>
        {subtitle && (
          <p
            className={`text-md md:text-xl max-w-2xl drop-shadow-sm text-center mx-auto hero-content`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
