"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StatsHighlights() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  const stats = [
    { value: 100, suffix: "M+ KWH", label: t("stats.totalSavings") },
    { value: 35, suffix: "M+ KG", label: t("stats.carbonReduced") },
    { value: 24, suffix: "M+ SAR", label: t("stats.costSaved") },
    { value: 200, suffix: "+", label: t("stats.satisfiedClients") },
  ];

  return (
    <section className="bg-gradient-to-r from-primary via-secondary to-primary text-white py-16 px-6 md:px-12 lg:px-24">
      <div
        className={`max-w-7xl mx-auto text-center mb-12 ${
          isRTL ? "text-right" : "text-center"
        }`}
      >
        <h3 className="text-4xl font-extrabold mb-4">
          {t("stats.impactTitle")}
        </h3>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          {t("stats.impactSubtitle")}
        </p>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 ${
          isRTL ? "text-right" : "text-center"
        }`}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="space-y-2"
          >
            <p className="text-5xl font-extrabold">
              <span className="ltr-nums" dir="ltr">
                {hasAnimated ? <CountUp end={stat.value} duration={2.5} /> : "0"}
                {stat.suffix}
              </span>
            </p>
            <p className="uppercase tracking-widest font-semibold text-light">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
