// "use client";

// import React, { useEffect } from "react";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { useTranslation } from "@/hooks/useTranslation";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Link from "next/link";

// // React Icons from fi (Feather Icons) set
// import {
//   FiBriefcase,
//   FiUsers,
//   FiAward,
//   FiCheckCircle,
//   FiArrowLeft,
//   FiArrowRight,
// } from "react-icons/fi";

// const Services = () => {
//   const { isRTL, language } = useLanguage();
//   const { t } = useTranslation();

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-cubic",
//       offset: 100,
//     });
//   }, []);

//   // Icons for each service - using Fi React Icons
//   const serviceIcons = [
//     <FiBriefcase key="business" className="w-8 h-8" />,
//     <FiUsers key="human" className="w-8 h-8" />,
//     <FiAward key="excellence" className="w-8 h-8" />,
//   ];

//   return (
//     <section className="relative py-8 lg:pt-16 bg-white overflow-hidden">
//       {/* Background Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02] pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
//           backgroundSize: "40px 40px",
//         }}
//       ></div>
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
//         }}
//       ></div>

//       {/* Decorative Elements */}
//       <div className="absolute top-40 left-20 w-72 h-72 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>
//       <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
//         {/* Section Header */}
//         <div
//           className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
//           data-aos="fade-down"
//         >
//           {/* Badge */}
//           <div
//             className="inline-block mb-4"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <span className="text-[#27374e] font-semibold text-sm md:text-base tracking-wider uppercase bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10">
//               {t("services.badge")}
//             </span>
//           </div>

//           {/* Title */}
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             {t("services.title")}{" "}
//             <span className="text-[#27374e] relative">
//               {t("services.titleHighlight")}
//               <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#27374e]/30 rounded-full"></span>
//             </span>
//           </h2>

//           {/* Subtitle */}
//           <p
//             className="text-gray-600 text-lg max-w-3xl mx-auto"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             {t("services.subtitle")}
//           </p>
//         </div>

//         {/* Services Grid - 3 Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
//           {[0, 1, 2].map((index) => {
//             const item = t(`services.items.${index}`);

//             return (
//               <div
//                 key={index}
//                 className="group relative h-full"
//                 data-aos="fade-up"
//                 data-aos-delay={200 + index * 100}
//               >
//                 {/* Card */}
//                 <div
//                   className={`relative h-full bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-[#27374e]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
//                     isRTL ? "text-right" : "text-left"
//                   }`}
//                 >
//                   {/* Decorative Top Bar */}
//                   <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#27374e]/0 via-[#27374e]/30 to-[#27374e]/0 rounded-t-2xl"></div>

//                   {/* Number Badge */}
//                   <div
//                     className={`absolute top-4 ${isRTL ? "left-4" : "right-4"}`}
//                   >
//                     <span className="text-4xl font-bold text-[#27374e]/10 group-hover:text-[#27374e]/20 transition-colors duration-300">
//                       {item?.number ||
//                         (language === "ar"
//                           ? ["٠١", "٠٢", "٠٣"][index]
//                           : ["01", "02", "03"][index])}
//                     </span>
//                   </div>

//                   {/* Icon Container - Using Fi React Icons */}
//                   <div className="mb-6">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-[#27374e] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
//                       <div className="relative w-16 h-16 bg-[#27374e] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
//                         {serviceIcons[index]}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27374e] transition-colors duration-300">
//                     {item?.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-600 leading-relaxed text-base mb-6 line-clamp-4">
//                     {item?.description}
//                   </p>

//                   {/* Features List - Using FiCheckCircle */}
//                   <div className="space-y-3 mb-6">
//                     {item?.features?.slice(0, 4).map((feature, idx) => (
//                       <div
//                         key={idx}
//                         className={`flex items-start gap-3 text-sm ${
//                           isRTL ? "flex-row" : ""
//                         }`}
//                       >
//                         <FiCheckCircle className="w-5 h-5 text-[#27374e] flex-shrink-0 mt-0.5" />
//                         <span className="text-gray-600">{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Learn More Link - Using FiArrowLeft/FiArrowRight */}
//                   <Link
//                     href={`/services/${index === 0 ? "business" : index === 1 ? "human-capital" : "organizational-excellence"}`}
//                     className={`inline-flex items-center gap-2 text-[#27374e] font-semibold group/link hover:gap-3 transition-all duration-300 ${
//                       isRTL ? "flex-row" : ""
//                     }`}
//                   >
//                     <span>{t("services.cta.learnMore")}</span>
//                     {isRTL ? (
//                       <FiArrowLeft className="w-4 h-4 transform group-hover/link:-translate-x-1 transition-transform duration-300" />
//                     ) : (
//                       <FiArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
//                     )}
//                   </Link>

//                   {/* Bottom Accent Line */}
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-[#27374e] rounded-full transition-all duration-500"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Contact CTA - Using FiArrowLeft/FiArrowRight */}

//         {/* Bottom Decoration */}
//         <div className="mt-12 text-center">
//           <div className="inline-flex items-center gap-3">
//             <div className="w-12 h-[2px] bg-[#27374e]/20"></div>
//             <div className="flex gap-1">
//               <div className="w-2 h-2 bg-[#27374e]/40 rounded-full"></div>
//               <div className="w-2 h-2 bg-[#27374e]/60 rounded-full"></div>
//               <div className="w-2 h-2 bg-[#27374e]/80 rounded-full"></div>
//             </div>
//             <div className="w-12 h-[2px] bg-[#27374e]/20"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

// React Icons from fi (Feather Icons) set
import {
  FiBriefcase,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const Services = () => {
  const { isRTL, language } = useLanguage();
  const { t } = useTranslation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  // Icons for each service - using Fi React Icons
  const serviceIcons = [
    <FiBriefcase key="business" className="w-8 h-8" />,
    <FiUsers key="human" className="w-8 h-8" />,
    <FiAward key="excellence" className="w-8 h-8" />,
  ];

  return (
    <section className="relative py-8 lg:pt-16 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
        }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#27374e]/[0.02] rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
          data-aos="fade-down"
        >
          {/* Badge */}
          <div
            className="inline-block mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-[#27374e] font-semibold text-sm md:text-base tracking-wider uppercase bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10">
              {t("services.badge")}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("services.title")}{" "}
            <span className="text-[#27374e] relative">
              {t("services.titleHighlight")}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#27374e]/30 rounded-full"></span>
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid - 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {[0, 1, 2].map((index) => {
            const item = t(`services.items.${index}`);

            return (
              <div
                key={index}
                className="group relative h-full"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {/* Card */}
                <div
                  className={`relative h-full bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-[#27374e]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {/* Decorative Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#27374e]/0 via-[#27374e]/30 to-[#27374e]/0 rounded-t-2xl"></div>

                  {/* Number Badge - ENGLISH NUMBERS ONLY */}
                  <div
                    className={`absolute top-4 ${isRTL ? "right-4" : "right-4"}`}
                  >
                    <span className="text-4xl font-bold text-[#27374e]/10 group-hover:text-[#27374e]/20 transition-colors duration-300">
                      {["01", "02", "03"][index]}
                    </span>
                  </div>

                  {/* Icon Container - Using Fi React Icons */}
                  <div className="mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#27374e] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 bg-[#27374e] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {serviceIcons[index]}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27374e] transition-colors duration-300 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {item?.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-gray-600 leading-relaxed text-base mb-6 line-clamp-4 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {item?.description}
                  </p>

                  {/* Features List - Using FiCheckCircle */}
                  <div className="space-y-3 mb-6">
                    {item?.features?.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 text-sm ${
                          isRTL ? "flex-row" : "flex-row"
                        }`}
                      >
                        <FiCheckCircle
                          className={`w-5 h-5 text-[#27374e] flex-shrink-1 justify-end mt-0.5`}
                        />
                        <span
                          className={`text-gray-600 ${
                            isRTL
                              ? "order-2 text-right flex-1"
                              : "order-2 text-left"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link - Using FiArrowLeft/FiArrowRight */}
                  <Link
                    href={`/services/${index === 0 ? "business" : index === 1 ? "human-capital" : "organizational-excellence"}`}
                    className={`inline-flex items-center gap-2 text-[#27374e] font-semibold group/link hover:gap-3 transition-all duration-300 ${
                      isRTL ? "flex-row" : "flex-row"
                    }`}
                  >
                    <span className={isRTL ? "order-2" : "order-1"}>
                      {t("services.cta.learnMore")}
                    </span>
                    {isRTL ? (
                      <FiArrowLeft
                        className={`w-4 h-4 transform group-hover/link:-translate-x-1 transition-transform duration-300 ${isRTL ? "order-1 rotate-180" : "order-2"}`}
                      />
                    ) : (
                      <FiArrowRight
                        className={`w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300 ${isRTL ? "order-1" : "order-2"}`}
                      />
                    )}
                  </Link>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-[#27374e] rounded-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-[2px] bg-[#27374e]/20"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#27374e]/40 rounded-full"></div>
              <div className="w-2 h-2 bg-[#27374e]/60 rounded-full"></div>
              <div className="w-2 h-2 bg-[#27374e]/80 rounded-full"></div>
            </div>
            <div className="w-12 h-[2px] bg-[#27374e]/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
