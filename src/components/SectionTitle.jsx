"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const SectionTitle = ({
  badge,
  title,
  highlightedText,
  subtitle,
  centered = true,
  theme = "light",
}) => {
  const { isRTL } = useLanguage();

  // Determine text colors based on theme
  const badgeTextColor = theme === "dark" ? "text-white" : "text-[#27374e]";
  const badgeBorderColor =
    theme === "dark" ? "border-white/30" : "border-[#27374e]/10";
  const badgeBgColor = theme === "dark" ? "bg-white/10" : "bg-[#27374e]/5";

  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const highlightedColor = theme === "dark" ? "text-primary" : "text-primary";
  const subtitleColor = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const underlineColor = theme === "dark" ? "bg-white/20" : "bg-[#27374e]/20";

  return (
    <div
      className={`${centered ? "text-center" : "text-left"} mb-12 md:mb-16 ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Badge */}
      {badge && (
        <div className={`inline-block mb-4 ${!centered && "block"}`}>
          <span
            className={`${badgeTextColor} ${badgeBgColor} font-semibold text-sm md:text-base tracking-wider uppercase px-5 py-2 rounded-full border ${badgeBorderColor}`}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor} mb-4`}
      >
        {title}{" "}
        {highlightedText && (
          <span className={highlightedColor}>{highlightedText}</span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`${subtitleColor} text-base md:text-lg max-w-3xl ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}

      {/* Underline */}
      <div
        className={`w-24 h-1 ${underlineColor} ${centered ? "mx-auto" : ""} mt-6 rounded-full`}
      />
    </div>
  );
};

export default SectionTitle;
