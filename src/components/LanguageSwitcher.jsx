"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiGlobe } from "react-icons/fi";

const LanguageSwitcher = ({ className = "" }) => {
  const { language, toggleLanguage, isRTL } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`
        flex items-center gap-2 px-3 py-2 
        bg-secondary 
        cursor-pointer
        border border-secondary/30 
        rounded-lg 
        text-white 
        hover:bg-secondary/90 
        transition-all duration-300 
        font-medium text-sm
        shadow-lg
        ${isRTL ? "flex-row-reverse" : "flex-row"}
        ${className}
      `}
      aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
    >
      <FiGlobe className="text-lg" />
      <span className="uppercase font-semibold">
        {language === "en" ? "العربية" : "EN"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
