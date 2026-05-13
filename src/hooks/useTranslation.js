"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key, params = {}) => {
    return getTranslation(key, language, params);
  };

  return { t, language };
};
