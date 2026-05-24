"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DynamicTitle({ en, ar }) {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const correctTitleRef = useRef(language === "ar" ? ar : en);

  // Set the initial title based on saved language preference before any render
  useEffect(() => {
    setIsClient(true);
    // Check localStorage immediately to get the correct language on hydration
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "ar") {
      correctTitleRef.current = ar;
      document.title = ar;
    } else {
      correctTitleRef.current = en;
      document.title = en;
    }
  }, []);

  // Update the title when language changes
  useEffect(() => {
    if (!isClient) return;

    const newTitle = language === "ar" ? ar : en;
    correctTitleRef.current = newTitle;
    document.title = newTitle;

    // Watch for any external changes to the title and keep it correct
    const observer = new MutationObserver(() => {
      if (document.title !== correctTitleRef.current) {
        document.title = correctTitleRef.current;
      }
    });

    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [language, en, ar, isClient]);

  return null;
}
