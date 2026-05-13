"use client";
import React, { useRef, useEffect, useState } from "react";
import AnimatedSun from "./AnimatedSun";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroWithImageAndLogos = ({
  title,
  description,
  buttonText,
  buttonLink = "/contact",
  apiLink = "/services",
  logos = [],
  imageSrc = "/whatwedo.png",
}) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight);
    }
  }, []);

  return (
    <section
      className="relative bg-white py-14 px-6 sm:px-12 bg-gradient-to-r from-light/20 via-light/30 to-light/20"
      data-aos="fade-up"
    >
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`max-w-screen-md hero-content ${
            isRTL ? "text-right" : "text-left"
          }`}
          data-aos="fade-right"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <h2 className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary xl:text-6xl md:text-5xl text-4xl font-extrabold !leading-tight">
            {title || t("heroWithImage.title")}
          </h2>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6 ${
            isRTL ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Left Section */}
          <div
            ref={leftRef}
            data-aos="fade-up"
            data-aos-delay="100"
            className={isRTL ? "lg:col-start-2" : ""}
          >
            <p
              className={`text-slate-600 text-base leading-relaxed hero-content ${
                isRTL ? "text-right" : "text-left"
              }`}
              dir={isRTL ? "rtl" : "ltr"}
            >
              {description || t("heroWithImage.description")}
            </p>

            <div
              className={`mt-12 flex gap-6 items-center flex-wrap ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <a
                href={buttonLink}
                className="bg-yellow-300 hover:bg-secondary hover:text-white transition-all text-slate-900 font-semibold text-[15px] rounded-full px-6 py-3 cursor-pointer"
              >
                {buttonText || t("heroWithImage.buttonText")}
              </a>
              <a
                href={apiLink}
                className="text-slate-900 text-[15px] font-semibold underline max-sm:block whitespace-nowrap"
              >
                {t("heroWithImage.exploreServices")}
              </a>
            </div>

            {logos?.length > 0 && (
              <div
                className="mt-12 flex flex-wrap gap-x-8 gap-y-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    className="w-32 shrink-0"
                    alt={`brand-logo-${index}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Section */}
          <div
            style={{ height: leftHeight || "auto" }}
            className={`w-full rounded-lg overflow-hidden ${
              isRTL ? "lg:col-start-1" : ""
            }`}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={imageSrc}
              className="w-full h-full object-cover rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none"
              alt="Integrated Energy System"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithImageAndLogos;
