// "use client";
// import React from "react";
// import Link from "next/link";
// import { IMG_URL, SERVICES } from "@/utils/globalUtils";
// import HeroService from "./HeroService";
// import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
// import { useTranslation } from "@/hooks/useTranslation";
// import { useLanguage } from "@/contexts/LanguageContext";

// const ServiceDetails = ({ categoryName }) => {
//   const { t } = useTranslation();
//   const { isRTL } = useLanguage();

//   useEffect(() => {
//     AOS.init({
//       once: true,
//       duration: 1000,
//       easing: "ease-out-cubic",
//       offset: 120,
//     });
//   }, []);

//   // Get service data from translations
//   const getServiceData = (categoryName) => {
//     const serviceKey = categoryName.replace(/-/g, "");
//     const serviceMap = {
//       energymanagement: "energyManagement",
//       lightningandcontrol: "lightingControl",
//       solarenergysolutions: "solarEnergy",
//       hvacsystems: "hvacSystems",
//       buildingmanagementsystems: "buildingManagement",
//       plumbingsystems: "plumbingSystems",
//       firefightingsystems: "firefightingSystems",
//       evchargers: "evChargers",
//     };

//     const key = serviceMap[serviceKey];
//     if (key && t(`serviceContent.${key}`)) {
//       const originalData = SERVICES[`/services/${categoryName}`];
//       return {
//         title: t(`serviceContent.${key}.title`),
//         paragraphs: t(`serviceContent.${key}.paragraphs`),
//         images: originalData ? originalData.images : [],
//       };
//     }

//     // Fallback to original data
//     return SERVICES[`/services/${categoryName}`];
//   };

//   const categoryData = getServiceData(categoryName);

//   if (!categoryData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center py-20">
//           <h2 className="text-4xl font-bold text-red-600 mb-4">404</h2>
//           <p className="text-xl text-gray-600 mb-6">
//             {t("serviceDetails.notFound")}
//           </p>
//           <Link href="/services">
//             <button
//               className={`flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all ${
//                 isRTL ? "flex-row-reverse" : ""
//               }`}
//             >
//               <FaArrowLeft className={isRTL ? "rotate-180" : ""} />{" "}
//               {t("serviceDetails.browseServices")}
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const { title, paragraphs, images = [] } = categoryData;

//   return (
//     <>
//       <HeroService image="/whatwedo.png" title={title} />

//       <div
//         className={`max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${
//           isRTL ? "text-right" : "text-left"
//         }`}
//       >
//         <div
//           data-aos="fade-right"
//           className={`mb-12 ${isRTL ? "text-right" : "text-left"}`}
//         >
//           <Link href="/services">
//             <button
//               className={`group flex items-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200 ${
//                 isRTL ? "flex-row-reverse" : ""
//               }`}
//             >
//               <FaArrowLeft
//                 className={`group-hover:-translate-x-1 transition-transform ${
//                   isRTL ? "rotate-180 group-hover:translate-x-1" : ""
//                 }`}
//               />
//               <span>{t("serviceDetails.allServices")}</span>
//             </button>
//           </Link>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12 w-full max-w-none">
//           {/* Left side - Paragraphs */}
//           <div
//             className={`lg:w-3/4 space-y-10 flex flex-col justify-center ${
//               isRTL ? "text-right lg:order-2" : "text-left"
//             }`}
//             style={{ flexDirection: "column" }}
//           >
//             {paragraphs.map((para, idx) => (
//               <div
//                 key={idx}
//                 data-aos="fade-up"
//                 data-aos-delay={idx * 100}
//                 className={`relative group ${isRTL ? "pr-8" : "pl-8"}`}
//               >
//                 <div
//                   className={`absolute top-0 h-full w-1 bg-gradient-to-b from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
//                     isRTL ? "-right-8" : "-left-8"
//                   }`}
//                 ></div>
//                 <p
//                   className={`text-gray-700 text-lg md:text-xl leading-relaxed ${
//                     isRTL ? "font-formal-arabic" : "font-formal"
//                   } border-gray-100 hover:border-secondary transition-all duration-500 py-4 px-4 rounded-lg bg-gray-50/50 hover:bg-gray-50 ${
//                     isRTL
//                       ? "pr-4 border-r-4 text-right"
//                       : "pl-4 border-l-4 text-left"
//                   }`}
//                 >
//                   {para}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Right side - Images */}
//           <div
//             className={`lg:w-1/4 flex flex-col ${
//               isRTL ? "items-end lg:order-1" : "items-start"
//             }`}
//             style={{ flexDirection: "column" }}
//           >
//             <div className="grid grid-cols-1 gap-4 w-full">
//               {images && images.length > 0 ? (
//                 images.map((img, idx) => (
//                   <div
//                     key={idx}
//                     data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
//                     data-aos-delay={idx * 100 + 200}
//                     className="relative group overflow-hidden rounded-lg shadow-md"
//                     style={{ aspectRatio: "4/3", maxHeight: "200px" }}
//                   >
//                     <img
//                       src={`${IMG_URL}${img}`}
//                       alt={`${title} service example ${idx + 1}`}
//                       className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
//                       loading="lazy"
//                     />
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 ${
//                         isRTL ? "justify-end" : "justify-start"
//                       }`}
//                     >
//                       <span
//                         className={`text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ${
//                           isRTL ? "text-right" : "text-left"
//                         }`}
//                       >
//                         {title} Installation
//                       </span>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="col-span-full text-center py-8">
//                   <p className="text-gray-500">No images available</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div
//           className={`mt-20 bg-secondary p-0.5 rounded-2xl shadow-xl ${
//             isRTL ? "mr-0" : "ml-0"
//           }`}
//           data-aos="zoom-in"
//           data-aos-delay="500"
//         >
//           <div className="bg-white rounded-2xl p-8 text-center">
//             <h3
//               className={`text-2xl ${
//                 isRTL ? "font-formal-arabic-heading" : "font-formal-heading"
//               } text-secondary mb-4 text-center`}
//             >
//               {t("serviceDetails.readyToUpgrade")}
//             </h3>
//             <p
//               className={`text-gray-600 mb-6 text-center ${
//                 isRTL ? "font-formal-arabic" : "font-formal"
//               }`}
//             >
//               {t("serviceDetails.expertsWillDesign")}
//             </p>
//             <Link href="/contact">
//               <button
//                 className={`group relative overflow-hidden px-8 py-4 bg-secondary text-white ${
//                   isRTL ? "font-formal-arabic-bold" : "font-formal-bold"
//                 } rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
//               >
//                 <span
//                   className={`relative z-10 text-white flex items-center gap-2 ${
//                     isRTL ? "flex-row-reverse" : ""
//                   }`}
//                 >
//                   {t("serviceDetails.getFreeConsultation")}
//                   <FaChevronRight
//                     className={`group-hover:translate-x-1 transition-transform ${
//                       isRTL ? "rotate-180" : ""
//                     }`}
//                   />
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServiceDetails;

"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiAward,
  FiBriefcase,
  FiUsers,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetail = ({ slug }) => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  // Get service data from translations
  const getServiceData = () => {
    const serviceKey = `services.detail.${slug.replace(/-/g, "_")}`;
    return {
      title: t(`${serviceKey}.title`),
      description: t(`${serviceKey}.description`),
      image: t(`${serviceKey}.image`),
      metrics: t(`${serviceKey}.metrics`) || [],
      features: t(`${serviceKey}.features`) || [],
      certifications: t(`${serviceKey}.certifications`) || [],
    };
  };

  const service = getServiceData();

  if (!service.title) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Service not found</p>
      </div>
    );
  }

  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Back Button */}
        <div data-aos="fade-right" className="mb-8">
          <Link href="/services">
            <button className="inline-flex items-center gap-2 text-gray-500 hover:text-[#27374e] transition-colors">
              {isRTL ? (
                <FiArrowLeft className="w-5 h-5 rotate-180" />
              ) : (
                <FiArrowLeft className="w-5 h-5" />
              )}
              <span>{t("services.backToServices")}</span>
            </button>
          </Link>
        </div>

        {/* Hero Section */}
        <div
          data-aos="fade-up"
          className="relative rounded-3xl overflow-hidden mb-12"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
          </div>
        </div>

        {/* Metrics Bar */}
        {service.metrics && service.metrics.length > 0 && (
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {service.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#27374e]">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#27374e] rounded-full" />
                {t("services.overview")}
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>

            {service.features && service.features.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white rounded-2xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#27374e] rounded-full" />
                  {t("services.keyFeatures")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                    >
                      <FiCheckCircle className="w-5 h-5 text-[#27374e] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.certifications && service.certifications.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="bg-white rounded-2xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#27374e] rounded-full" />
                  {t("services.certifications")}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm"
                    >
                      <FiAward className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="bg-gradient-to-br from-[#27374e] to-[#27374e]/90 rounded-2xl p-6 text-white sticky top-24"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiBriefcase className="w-5 h-5" />
                {t("services.quickInfo")}
              </h3>
              <div className="space-y-3">
                <div className="border-b border-white/10 pb-3">
                  <div className="text-sm text-white/70">
                    {t("services.expertise")}
                  </div>
                  <div className="font-semibold">
                    {t("services.yearsExpertise")}
                  </div>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <div className="text-sm text-white/70">
                    {t("services.coverage")}
                  </div>
                  <div className="font-semibold">
                    {t("services.nationwide")}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/70">
                    {t("services.support")}
                  </div>
                  <div className="font-semibold">
                    {isRTL ? "٢٤/٧" : "24/7"} {t("services.available")}
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="bg-white rounded-2xl p-6 shadow-md text-center"
            >
              <h4 className="font-bold text-gray-900 mb-2">
                {t("services.needHelp")}
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                {t("services.contactTeam")}
              </p>
              <Link href="/contact">
                <button className="w-full bg-[#27374e] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#27374e]/90 transition-all">
                  {t("services.contactUs")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
