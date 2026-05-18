"use client";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiDownload, FiFileText, FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const DownloadProfile = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const handleDownload = () => {
    const pdfUrl = isRTL
      ? "/pdf/sadara-company-profile-AR.pdf"
      : "/pdf/sadara-company-profile-EN.pdf";
    const fileName = isRTL
      ? "Sadara-Company-Profile-AR.pdf"
      : "Sadara-Company-Profile-EN.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 20px)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-20 left-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div
            className={`text-center md:text-left ${isRTL ? "md:text-right" : ""}`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <FiFileText className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                {t("download.badge")}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              {t("download.title")}
            </h3>
            <p className="text-white/80 text-base max-w-lg">
              {t("download.description")}
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="group bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 flex-shrink-0 cursor-pointer"
          >
            <FiDownload className="w-5 h-5" />
            <span>{t("download.button")}</span>
            {isRTL ? (
              <FiArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadProfile;
