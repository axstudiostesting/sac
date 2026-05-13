"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function OurStories() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const imageRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    const adjustImageHeight = () => {
      const content = document.getElementById("our-story-content");
      const image = imageRef.current;
      if (content && image) {
        image.style.height = `${content.clientHeight}px`;
      }
    };

    setTimeout(adjustImageHeight, 500);
    window?.addEventListener("resize", adjustImageHeight);

    return () => window?.removeEventListener("resize", adjustImageHeight);
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            isRTL ? "md:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image Section */}
          <div
            data-aos={isRTL ? "fade-left" : "fade-right"}
            className={`h-full ${isRTL ? "md:col-start-2" : ""}`}
          >
            <img
              ref={imageRef}
              src="/hero.jpg"
              alt="Our Story"
              className="w-full h-full object-cover shadow-lg border-4 border-gray-100 rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div
            id="our-story-content"
            data-aos={isRTL ? "fade-right" : "fade-left"}
            className={`space-y-8 ${isRTL ? "md:col-start-1" : ""}`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Title */}
            <div className={`${isRTL ? "text-right" : "text-left"}`}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                {t("aboutUs.title")}
              </h2>
              <p className="text-secondary uppercase font-semibold tracking-wider text-sm mb-6">
                {t("aboutUs.subtitle")}
              </p>
            </div>

            {/* Main Description */}
            <div
              className={`text-lg leading-relaxed text-gray-700 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <p className="mb-6 leading-relaxed">{t("aboutUs.description")}</p>
            </div>

            {/* Key Points */}
            <div className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                <p className="text-base font-medium text-gray-800 leading-relaxed">
                  {t("aboutUs.specialized")}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                <p className="text-base text-gray-700 leading-relaxed">
                  {t("aboutUs.experts")}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                <p className="text-base text-gray-700 leading-relaxed">
                  {t("aboutUs.conducting")}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                <p className="text-base text-gray-700 leading-relaxed">
                  {t("aboutUs.supply")}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                <p className="text-base text-gray-700 leading-relaxed">
                  {t("aboutUs.financial")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
