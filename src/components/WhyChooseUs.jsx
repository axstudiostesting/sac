"use client";
import SpacingWrapper from "./SpacingWrapper";
import Title from "./Title";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <SpacingWrapper>
      <Title text={t("whyChooseUs.title")} para={t("whyChooseUs.subtitle")} />
      <div className="rounded-lg p-4 bg-iesBlue-50">
        <div className="mx-auto">
          <div
            className={`max-w-3xl mx-auto mb-16 ${
              isRTL ? "text-right" : "text-center"
            }`}
          >
            <p className="text-slate-600 text-sm leading-relaxed"></p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {/* Tarsheed Certified */}
            <div className={`${isRTL ? "text-right" : "text-center"}`}>
              <div className="w-12 h-12 p-3 rounded-lg flex items-center justify-center mx-auto bg-green-50 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-green-700 w-full h-full inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-lg font-semibold mb-3">
                {t("whyChooseUs.tarsheedCertified")}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t("whyChooseUs.tarsheedDesc")}
              </p>
            </div>

            {/* Industry Expertise */}
            <div className={`${isRTL ? "text-right" : "text-center"}`}>
              <div className="w-12 h-12 p-3 rounded-lg flex items-center justify-center mx-auto bg-light/30 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary w-full h-full inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-lg font-semibold mb-3">
                {t("whyChooseUs.industryExpertise")}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t("whyChooseUs.industryExpertiseDesc")}
              </p>
            </div>

            {/* End-to-End Solutions */}
            <div className={`${isRTL ? "text-right" : "text-center"}`}>
              <div className="w-12 h-12 p-3 rounded-lg flex items-center justify-center mx-auto bg-light/30 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary w-full h-full inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-lg font-semibold mb-3">
                {t("whyChooseUs.integratedSolutions")}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t("whyChooseUs.integratedSolutionsDesc")}
              </p>
            </div>

            {/* 24/7 Support */}
            <div className={`${isRTL ? "text-right" : "text-center"}`}>
              <div className="w-12 h-12 p-3 rounded-lg flex items-center justify-center mx-auto bg-orange-50 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-orange-700 w-full h-full inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-lg font-semibold mb-3">
                {t("whyChooseUs.technicalSupport")}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t("whyChooseUs.technicalSupportDesc")}
              </p>
            </div>

            {/* Quality Assurance */}
            <div className={`${isRTL ? "text-right" : "text-center"}`}>
              <div className="w-12 h-12 p-3 rounded-lg flex items-center justify-center mx-auto bg-yellow-50 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-yellow-700 w-full h-full inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-lg font-semibold mb-3">
                {t("whyChooseUs.sasoQuality")}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t("whyChooseUs.sasoQualityDesc")}
              </p>
            </div>

            {/* Government Approved */}
            <div className={`${isRTL ? "text-right" : "text-center"}`}>
              <div className="w-12 h-12 p-3 rounded-lg flex items-center justify-center mx-auto bg-red-50 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-red-700 w-full h-full inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-3H7v-2h4v2zm0-3H7V9h4v2zm6 6h-4V9h4v8z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-lg font-semibold mb-3">
                {t("whyChooseUs.governmentApproved")}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t("whyChooseUs.governmentApprovedDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SpacingWrapper>
  );
}
