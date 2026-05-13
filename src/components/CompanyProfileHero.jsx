"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const CompanyProfileHero = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="relative bg-white py-16 px-6 sm:px-12 bg-gradient-to-r from-light/30 to-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isRTL ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Left Column - Text Content */}
          <div
            className={`space-y-6 ${
              isRTL ? "text-right lg:col-start-2" : "text-left"
            }`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-secondary font-semibold text-sm">
                {t("companyProfile.since")}
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary xl:text-6xl md:text-5xl text-4xl font-extrabold !leading-tight">
                {t("companyProfile.title")}
              </span>
            </h2>

            <p
              className={`text-gray-600 text-lg leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("companyProfile.description")}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                t("companyProfile.turnkey"),
                t("companyProfile.solar"),
                t("companyProfile.lighting"),
                t("companyProfile.hvac"),
                t("companyProfile.mep"),
                t("companyProfile.retrofitting"),
                t("companyProfile.ashrae"),
                t("companyProfile.esco"),
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <svg
                    className={`h-5 w-5 text-secondary mt-0.5 flex-shrink-0 ${
                      isRTL ? "ml-2" : "mr-2"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    className={`text-gray-700 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className={`flex flex-wrap gap-4 mt-10 ${
                isRTL ? "flex-row-reverse justify-center" : "justify-center"
              }`}
            >
              <Link
                href="/about"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-all"
              >
                {t("companyProfile.capabilities")}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold px-8 py-3 rounded-full transition-all"
              >
                {t("companyProfile.requestAudit")}
              </Link>
            </div>
          </div>

          {/* Right Column - Image/Stats */}
          <div className={`relative ${isRTL ? "lg:col-start-1" : ""}`}>
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
              <h3
                className={`text-2xl font-bold text-gray-800 mb-6 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("companyProfile.differentiators")}
              </h3>

              <div className="space-y-6">
                <div
                  className={`flex items-start ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`bg-light/30 p-3 rounded-lg ${
                      isRTL ? "ml-4" : "mr-4"
                    }`}
                  >
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-gray-900 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("companyProfile.gulfBacking")}
                    </h4>
                    <p
                      className={`text-gray-600 mt-1 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("companyProfile.gulfBackingDesc")}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`bg-green-100 p-3 rounded-lg ${
                      isRTL ? "ml-4" : "mr-4"
                    }`}
                  >
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-gray-900 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("companyProfile.certifiedExcellence")}
                    </h4>
                    <p
                      className={`text-gray-600 mt-1 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("companyProfile.certifiedExcellenceDesc")}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`bg-yellow-100 p-3 rounded-lg ${
                      isRTL ? "ml-4" : "mr-4"
                    }`}
                  >
                    <svg
                      className="h-6 w-6 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-gray-900 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("companyProfile.escoNetwork")}
                    </h4>
                    <p
                      className={`text-gray-600 mt-1 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("companyProfile.escoNetworkDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute -bottom-8 bg-white p-6 rounded-lg shadow-lg border border-gray-100 w-64 ${
                isRTL ? "-right-8" : "-left-8"
              }`}
            >
              <h4
                className={`font-bold text-gray-800 text-lg mb-2 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                100+ Projects
              </h4>
              <p
                className={`text-gray-600 text-sm ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                Completed across industrial and commercial sectors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileHero;
