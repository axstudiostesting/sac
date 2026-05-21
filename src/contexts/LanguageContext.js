"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

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

  useEffect(() => {
    // Check for saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
      setIsRTL(savedLanguage === "ar");
    } else {
      // Default to English
      setLanguage("en");
      setIsRTL(false);
    }
  }, []);

  useEffect(() => {
    // Update document direction and language
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // Save to localStorage
    localStorage.setItem("language", language);
  }, [language, isRTL]);

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
