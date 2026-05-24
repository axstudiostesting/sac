"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function useDynamicTitle({ en, ar }) {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const correctTitleRef = useRef(language === "ar" ? ar : en);

  // Initialize with saved language preference on hydration
  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "ar") {
      correctTitleRef.current = ar;
      document.title = ar;
    } else {
      correctTitleRef.current = en;
      document.title = en;
    }
  }, []);

  // Update title when language changes
  useEffect(() => {
    if (!isClient) return;

    const correctTitle = language === "ar" ? ar : en;
    correctTitleRef.current = correctTitle;
    document.title = correctTitle;

    // Watch for any external changes to the title
    const titleEl = document.querySelector("title");
    if (!titleEl) return;

    const observer = new MutationObserver(() => {
      if (document.title !== correctTitle) {
        document.title = correctTitle;
      }
    });

    observer.observe(titleEl, { childList: true });

    return () => observer.disconnect();
  }, [language, en, ar, isClient]);

  return null;
}
