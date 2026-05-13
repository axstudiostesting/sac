"use client";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-16 bg-yellow-300 text-center"
    >
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-black">
        {t("cta.title")}
      </h3>
      <p className="text-black text-lg max-w-xl mx-auto mb-6">
        {t("cta.subtitle")}
      </p>
      <a
        href="/contact"
        className="inline-block px-6 py-3 bg-dark hover:bg-primary text-white text-sm font-medium shadow-md transition duration-200"
      >
        {t("cta.contactUs")}
      </a>
    </motion.div>
  );
}
