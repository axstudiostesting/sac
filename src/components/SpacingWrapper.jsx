"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SpacingWrapper = ({ children }) => {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`bg-white px-5 py-8 sm:px-4 sm:py-6 md:px-16 md:py-8 lg:px-16 lg:py-10 xl:px-16 xl:py-16 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {children}
    </div>
  );
};

export default SpacingWrapper;
