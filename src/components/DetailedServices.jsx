// "use client";

// import React, { useEffect } from "react";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { useTranslation } from "@/hooks/useTranslation";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import {
//   HiOutlineUserGroup,
//   HiOutlineBriefcase,
//   HiOutlineStar,
// } from "react-icons/hi";
// import {
//   FaUsers,
//   FaAward,
//   FaSyncAlt,
//   FaLightbulb,
//   FaArrowRight,
//   FaShieldAlt,
// } from "react-icons/fa";

// const DetailedServices = () => {
//   const { isRTL } = useLanguage();
//   const { t } = useTranslation();

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true,
//       offset: 80,
//     });
//   }, []);

//   const services = [
//     {
//       key: "humanCapital",
//       icon: <HiOutlineUserGroup className="w-7 h-7" />,
//     },
//     {
//       key: "businessSolutions",
//       icon: <HiOutlineBriefcase className="w-7 h-7" />,
//     },
//     {
//       key: "organizationalExcellence",
//       icon: <HiOutlineStar className="w-7 h-7" />,
//     },
//   ];

//   const stats = [
//     { key: "experience", icon: <FaSyncAlt /> },
//     { key: "projects", icon: <FaAward /> },
//     { key: "consultants", icon: <FaUsers /> },
//     { key: "satisfaction", icon: <FaLightbulb /> },
//   ];

//   return (
//     <section className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
//       <div className="container mx-auto px-6 max-w-7xl">
//         {/* Header */}
//         <div className="text-center max-w-4xl mx-auto mb-20">
//           <span
//             className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4"
//             data-aos="fade-up"
//           >
//             {t("detailedServices.badge")}
//           </span>

//           <h2
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             {t("detailedServices.title")}{" "}
//             <span className="text-primary">
//               {t("detailedServices.titleHighlight")}
//             </span>
//           </h2>

//           <p
//             className="text-lg md:text-xl text-gray-600 leading-relaxed"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             {t("detailedServices.description")}
//           </p>
//         </div>

//         {/* Services */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
//           {services.map((service, index) => (
//             <div
//               key={service.key}
//               className="border bg-primary border-gray-200 rounded-lg -white p-8 hover:shadow-xl transition-all"
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-14 h-14 rounded-lg bg-primary text-white flex items-center justify-center">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-semibold text-white">
//                   {t(`detailedServices.services.${service.key}.title`)}
//                 </h3>
//               </div>

//               <ul className="space-y-3 mb-8">
//                 {t(`detailedServices.services.${service.key}.items`, []).map(
//                   (item, i) => (
//                     <li key={i} className="flex items-start gap-3 text-white">
//                       <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
//                       <span className="leading-relaxed">{item}</span>
//                     </li>
//                   )
//                 )}
//               </ul>

//               <a
//                 href="/contact"
//                 className={`inline-flex items-center gap-2 font-semibold text-white hover:underline ${
//                   isRTL ? "flex-row-reverse" : ""
//                 }`}
//               >
//                 {t(`detailedServices.services.${service.key}.button`)}
//                 <FaArrowRight className="text-sm" />
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto mb-24">
//           {stats.map((stat, index) => (
//             <div
//               key={stat.key}
//               className="text-center"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary text-white mb-4">
//                 {stat.icon}
//               </div>
//               <div className="text-3xl font-bold text-gray-900">
//                 <span className="ltr-nums" dir="ltr">{t(`detailedServices.stats.${stat.key}.number`)}</span>
//               </div>
//               <div className="text-gray-600 text-sm mt-1">
//                 {t(`detailedServices.stats.${stat.key}.label`)}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div
//           className="bg-primary rounded-2xl px-10 py-14 text-center max-w-5xl mx-auto"
//           data-aos="fade-up"
//         >
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             {t("detailedServices.cta.title")}
//           </h3>

//           <p className="text-white/80 text-lg mb-10 max-w-3xl mx-auto">
//             {t("detailedServices.cta.description")}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-3"
//             >
//               {t("detailedServices.cta.startProject.text")}
//             </a>

//             <a
//               href="/consultation"
//               className="border border-white/40 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center gap-3"
//             >
//               <FaShieldAlt />
//               {t("detailedServices.cta.freeConsultation.text")}
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DetailedServices;

"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineStar,
} from "react-icons/hi";
import {
  FaUsers,
  FaAward,
  FaSyncAlt,
  FaLightbulb,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

const DetailedServices = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const services = [
    {
      key: "humanCapital",
      icon: <HiOutlineUserGroup className="w-7 h-7" />,
    },
    {
      key: "businessSolutions",
      icon: <HiOutlineBriefcase className="w-7 h-7" />,
    },
    {
      key: "organizationalExcellence",
      icon: <HiOutlineStar className="w-7 h-7" />,
    },
  ];

  const stats = [
    { key: "experience", icon: <FaSyncAlt /> },
    { key: "projects", icon: <FaAward /> },
    { key: "consultants", icon: <FaUsers /> },
    { key: "satisfaction", icon: <FaLightbulb /> },
  ];

  return (
    <section className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4"
            data-aos="fade-up"
          >
            {t("detailedServices.badge")}
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("detailedServices.title")}{" "}
            <span className="text-primary">
              {t("detailedServices.titleHighlight")}
            </span>
          </h2>

          <p
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("detailedServices.description")}
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={service.key}
              className="border bg-primary border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div
                className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row" : "flex-row"}`}
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-primary text-white flex items-center justify-center ${isRTL ? "order-1" : "order-1"}`}
                >
                  {service.icon}
                </div>
                <h3
                  className={`text-2xl font-semibold text-white ${isRTL ? "order-2 text-right flex-1" : "order-2 text-left"}`}
                >
                  {t(`detailedServices.services.${service.key}.title`)}
                </h3>
              </div>

              <ul className="space-y-3 mb-8">
                {t(`detailedServices.services.${service.key}.items`, []).map(
                  (item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-white ${isRTL ? "flex-row" : "flex-row"}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 bg-white rounded-full mt-2 ${isRTL ? "order-1" : "order-1"}`}
                      />
                      <span
                        className={`leading-relaxed ${isRTL ? "order-2 text-right flex-1" : "order-2 text-left"}`}
                      >
                        {item}
                      </span>
                    </li>
                  ),
                )}
              </ul>

              <a
                href="/contact"
                className={`inline-flex items-center gap-2 font-semibold text-white hover:underline ${
                  isRTL ? "flex-row" : "flex-row"
                }`}
              >
                <span className={isRTL ? "order-2" : "order-1"}>
                  {t(`detailedServices.services.${service.key}.button`)}
                </span>
                <FaArrowRight
                  className={`text-sm ${isRTL ? "order-1 rotate-180" : "order-2"}`}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Stats - ENGLISH NUMBERS ONLY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto mb-24">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                <span className="ltr-nums" dir="ltr">
                  {t(`detailedServices.stats.${stat.key}.number`)}
                </span>
              </div>
              <div
                className={`text-gray-600 text-sm mt-1 ${isRTL ? "text-right" : "text-left"}`}
              >
                {t(`detailedServices.stats.${stat.key}.label`)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="bg-primary rounded-2xl px-10 py-14 text-center max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("detailedServices.cta.title")}
          </h3>

          <p className="text-white/80 text-lg mb-10 max-w-3xl mx-auto">
            {t("detailedServices.cta.description")}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <a
              href="/contact"
              className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-3"
            >
              {t("detailedServices.cta.startProject.text")}
            </a>

            <a
              href="/consultation"
              className="border border-white/40 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center gap-3"
            >
              <FaShieldAlt />
              {t("detailedServices.cta.freeConsultation.text")}
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Override any global RTL flex reversing */
        [dir="rtl"] .flex.items-center.gap-4 {
          flex-direction: row !important;
        }

        [dir="rtl"] .flex.items-start.gap-3 {
          flex-direction: row !important;
        }

        [dir="rtl"] .inline-flex.items-center.gap-2 {
          flex-direction: row !important;
        }

        /* Ensure proper ordering in RTL */
        [dir="rtl"] .order-1 {
          order: 1 !important;
        }

        [dir="rtl"] .order-2 {
          order: 2 !important;
        }

        /* Rotate arrow for RTL */
        [dir="rtl"] .rotate-180 {
          transform: rotate(180deg);
        }

        /* Ensure text starts from right in RTL */
        [dir="rtl"] .text-right {
          text-align: right !important;
        }
      `}</style>
    </section>
  );
};

export default DetailedServices;
