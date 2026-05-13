"use client";
import React from "react";
import Button from "./Button";
import { useLanguage } from "@/contexts/LanguageContext";

const Title = ({
  text,
  para,
  paraWidthFull = false,
  showBtn = false,
  btnTxt = "",
  btnLink = "",
  className = "",
}) => {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`p-6 text-center transition-all duration-300 ease-in-out ${className}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="flex items-center justify-center mb-6">
        <h1 className="px-4 text-3xl md:text-4xl lg:text-5xl text-primary dark:text-white tracking-tight relative inline-block text-center">
          <span className="text-primary relative z-10">{text}</span>
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full animate-pulse z-0" />
        </h1>
      </div>

      {para && (
        <p
          className={`text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-center ${
            paraWidthFull ? "w-full" : "max-w-2xl mx-auto"
          } transition-opacity duration-500`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {para}
        </p>
      )}

      {showBtn && (
        <div className="mt-8">
          <Button text={btnTxt} link={btnLink} />
        </div>
      )}
    </div>
  );
};

export default Title;
