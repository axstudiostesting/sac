"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";

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
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const baseTitles = useRef({});
  const isInitialMount = useRef(true);
  const lastSetTitle = useRef("");

  // 1. Load saved language once on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const resolved =
      savedLanguage === "en" || savedLanguage === "ar" ? savedLanguage : "en";

    setLanguage(resolved);
    setIsRTL(resolved === "ar");
    setIsMounted(true);
  }, []);

  // 2. Update HTML attributes and cookies
  useEffect(() => {
    if (!isMounted) return;

    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    localStorage.setItem("language", language);
    document.cookie = `language=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }, [language, isRTL, isMounted]);

  // 3. Robust Title Manager
  useEffect(() => {
    const head = document.querySelector("head");
    if (!head) return;

    const applyTitle = (baseText) => {
      if (!baseText) return;

      const targetTitle = isRTL
        ? baseText
            .split("|")
            .map((s) => s.trim())
            .reverse()
            .join(" | ")
        : baseText;

      lastSetTitle.current = targetTitle;

      if (document.title !== targetTitle) {
        document.title = targetTitle;
      }
    };

    // On hard refresh, grab the initial server-rendered title safely
    if (isInitialMount.current) {
      baseTitles.current[pathname] = document.title;
      isInitialMount.current = false;
      applyTitle(document.title);
    }
    // If we've visited this route before, apply its known base title immediately
    else if (baseTitles.current[pathname]) {
      applyTitle(baseTitles.current[pathname]);
    }
    // NOTE: If it's a NEW route, we intentionally do NOT grab document.title here.
    // We wait for the observer below to catch Next.js injecting the new title.

    const observer = new MutationObserver(() => {
      const currentDocTitle = document.title;

      // Ignore empty titles during the split-second Next.js swaps the <title> elements out during navigation
      if (!currentDocTitle || currentDocTitle.trim() === "") return;

      // If the browser's actual title doesn't match the Arabic title we just set...
      if (currentDocTitle !== lastSetTitle.current) {
        // It must be Next.js injecting the new English metadata (either from navigation or hydration)!
        baseTitles.current[pathname] = currentDocTitle;
        applyTitle(currentDocTitle);
      }
    });

    observer.observe(head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [pathname, isRTL]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    setIsRTL(newLanguage === "ar");
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    locale: language,
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
