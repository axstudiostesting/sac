"use client";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

// Helper to set cookie readable by the server
const setLangCookie = (lang) => {
  document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [isRTL, setIsRTL] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    // Check for saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
      setIsRTL(savedLanguage === "ar");
      console.log(isRTL, "siiiikkee");
    } else {
      // Default to English
      setLanguage("en");
      setIsRTL(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    localStorage.setItem("language", language);
    setLangCookie(language);

    const correctTitle =
      language === "ar"
        ? "صدارة التنمية للاستثمار"
        : "Sadara Development Investment";

    let isSetting = false; // 👈 guard flag

    document.title = correctTitle;

    const observer = new MutationObserver(() => {
      if (isSetting) return; // 👈 ignore our own changes
      if (document.title !== correctTitle) {
        isSetting = true;
        document.title = correctTitle;
        isSetting = false;
      }
    });

    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [language, isRTL, pathname]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    setIsRTL(newLanguage === "ar");
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    setLanguage: (lang) => {
      setLanguage(lang);
      setIsRTL(lang === "ar");
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
