"use client";
import SpacingWrapper from "./SpacingWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const faqItems = [
    {
      question: t("faq.services.question"),
      answer: t("faq.services.answer"),
    },
    {
      question: t("faq.duration.question"),
      answer: t("faq.duration.answer"),
    },
    {
      question: t("faq.government.question"),
      answer: t("faq.government.answer"),
    },
    {
      question: t("faq.methodology.question"),
      answer: t("faq.methodology.answer"),
    },
    {
      question: t("faq.team.question"),
      answer: t("faq.team.answer"),
    },
    {
      question: t("faq.success.question"),
      answer: t("faq.success.answer"),
    },
  ];

  return (
    <SpacingWrapper>
      <div className="mx-auto bg-primary rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div
          className={`p-8 md:p-12 border-b border-white/20 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              {t("faq.subtitle")}
            </p>
          </div>
        </div>

        {/* FAQ Grid */}
        <h1>5</h1>
        <div className="p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30 group"
                >
                  <div className="text-white">
                    <div className="p-1 rounded-full w-8 text-center bg-white text-primary">
                      {index + 1}
                    </div>

                    {/* Content - RTL text alignment */}
                    <div
                      className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-white/95 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div
              className={`mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("faq.cta.title")}
                </h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {t("faq.cta.description")}
                </p>
                <div
                  className={`flex flex-col sm:flex-row gap-4 ${
                    isRTL ? "sm:flex-row-reverse justify-end" : "justify-start"
                  }`}
                >
                  <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                    {t("faq.cta.contact")}
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
                    {t("faq.cta.request")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles to override global RTL flex behavior */}
      <style jsx>{`
        /* Override any global RTL flex reversing for this section */
        .bg-primary [dir="rtl"] .flex {
          flex-direction: row !important;
        }

        /* Ensure numbers stay on left in RTL */
        [dir="rtl"] .flex > div:first-child {
          margin-left: 1rem !important;
          margin-right: 0 !important;
        }

        /* Force text alignment for Arabic */
        [dir="rtl"] .text-right {
          text-align: right !important;
        }
      `}</style>
    </SpacingWrapper>
  );
}
