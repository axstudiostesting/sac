// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { useTranslation } from "@/hooks/useTranslation";
// import { FiArrowRight, FiChevronRight } from "react-icons/fi";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import SectionTitle from "./SectionTitle";

// const SectorsSection = () => {
//   const { isRTL } = useLanguage();
//   const { t } = useTranslation();
//   const [active, setActive] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//     });

//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const sectors = [
//     {
//       title: "Telecom, COM & IT",
//       description:
//         "Advanced digital infrastructure, fiber-optic networks, and systems integration solutions for modern connectivity needs.",
//       image: "/h1b.jpg",
//       link: "/sectors/telecom-com-it",
//       slug: "telecom-com-it",
//     },
//     {
//       title: "Industrial Security",
//       description:
//         "Advanced security systems for critical facilities ensuring operational readiness and comprehensive protection.",
//       image: "/img2.jpg",
//       link: "/sectors/industrial-security",
//       slug: "industrial-security",
//     },
//     {
//       title: "Real Estate Development",
//       description:
//         "High-quality residential and commercial projects with sustainability standards and modern design.",
//       image: "/img3.jpg",
//       link: "/sectors/real-estate-development",
//       slug: "real-estate-development",
//     },
//     {
//       title: "Oil & Gas",
//       description:
//         "Chemical materials and technical support for drilling and exploration operations.",
//       image: "/h1b.jpg",
//       link: "/sectors/oil-gas",
//       slug: "oil-gas",
//     },
//     {
//       title: "Petroleum Services",
//       description:
//         "Roadside stations and petroleum operations supporting logistics infrastructure across the Kingdom.",
//       image: "/img2.jpg",
//       link: "/sectors/petroleum-services",
//       slug: "petroleum-services",
//     },
//     {
//       title: "Operational Services",
//       description:
//         "High-efficiency field services for infrastructure, industrial, and energy projects.",
//       image: "/img3.jpg",
//       link: "/sectors/operational-services",
//       slug: "operational-services",
//     },
//     {
//       title: "Facility Management",
//       description:
//         "Operating and maintaining buildings with integrated asset management solutions.",
//       image: "/h1b.jpg",
//       link: "/sectors/facility-management",
//       slug: "facility-management",
//     },
//     {
//       title: "Manufacturing",
//       description:
//         "Consumer and industrial cleaning products for local and regional markets with high quality standards.",
//       image: "/img2.jpg",
//       link: "/sectors/manufacturing",
//       slug: "manufacturing",
//     },
//     {
//       title: "Plastic Industries",
//       description:
//         "Wide range of plastic products with focus on innovation, excellence, and sustainable practices.",
//       image: "/img3.jpg",
//       link: "/sectors/plastic-industries",
//       slug: "plastic-industries",
//     },
//   ];

//   // Mobile view - Grid cards
//   if (isMobile) {
//     return (
//       <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
//         {/* Background Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
//           }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.03] pointer-events-none"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
//             backgroundSize: "40px 40px",
//           }}
//         />

//         <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
//           <div data-aos="fade-up">
//             <SectionTitle
//               badge={t("sectors.badge")}
//               title={t("sectors.title")}
//               highlightedText={t("sectors.highlightedText")}
//               subtitle={t("sectors.subtitle")}
//             />
//           </div>

//           {/* Mobile Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
//             {sectors.map((sector, idx) => (
//               <div
//                 key={idx}
//                 data-aos="fade-up"
//                 data-aos-delay={idx * 50}
//                 className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <Image
//                     src={sector.image}
//                     alt={sector.title}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#27374e] transition-colors duration-300 line-clamp-2">
//                     {sector.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                     {sector.description}
//                   </p>
//                   <Link href={sector.link}>
//                     <button className="group/btn inline-flex items-center gap-2 bg-[#27374e] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#27374e]/90 transition-all duration-300">
//                       {t("sectors.learnMore")}
//                       {isRTL ? (
//                         <FiChevronRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
//                       ) : (
//                         <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                       )}
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // Desktop view - Expandable cards
//   const equalWidth = 100 / sectors.length;

//   return (
//     <section className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       {/* Background Pattern Overlays */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
//         }}
//       />
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Decorative Blur Elements */}
//       <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

//       <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
//         <div data-aos="fade-up">
//           <SectionTitle
//             badge={t("sectors.badge")}
//             title={t("sectors.title")}
//             highlightedText={t("sectors.highlightedText")}
//             subtitle={t("sectors.subtitle")}
//           />
//         </div>

//         {/* Expandable Cards */}
//         <div className="flex h-[600px] w-full overflow-hidden rounded-2xl gap-3">
//           {sectors.map((sector, index) => {
//             const isActive = active === index;

//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => setActive(index)}
//                 onMouseLeave={() => setActive(null)}
//                 style={{
//                   width:
//                     active !== null
//                       ? isActive
//                         ? "55%"
//                         : `${45 / (sectors.length - 1)}%`
//                       : `${equalWidth}%`,
//                 }}
//                 className={`relative flex items-end justify-start text-white transition-all duration-500 cursor-pointer rounded-xl overflow-hidden group
//                   ${isActive ? "shadow-2xl" : ""}`}
//               >
//                 {/* Background Image */}
//                 <Image
//                   src={sector.image}
//                   alt={sector.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />

//                 {/* Overlay */}
//                 <div
//                   className={`absolute inset-0 transition-all duration-500 ${
//                     isActive
//                       ? "bg-gradient-to-t from-black/85 via-black/50 to-black/30"
//                       : "bg-black/70 group-hover:bg-black/60"
//                   }`}
//                 />

//                 {/* Content */}
//                 <div className="relative z-10 p-8 transition-all duration-500 w-full">
//                   {/* Title - Vertical for collapsed */}
//                   {!isActive && (
//                     <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
//                       <h2
//                         className="text-lg font-bold whitespace-nowrap rotate-90 origin-center opacity-90 group-hover:opacity-100 transition-all duration-300"
//                         style={{
//                           writingMode: "vertical-rl",
//                           textOrientation: "mixed",
//                         }}
//                       >
//                         {sector.title}
//                       </h2>
//                     </div>
//                   )}

//                   {/* Expanded content */}
//                   {isActive && (
//                     <div className="animate-fadeIn">
//                       <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
//                         {sector.title}
//                       </h2>
//                       <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed max-w-md">
//                         {sector.description}
//                       </p>
//                       <Link href={sector.link}>
//                         <button className="group/btn inline-flex items-center gap-3 bg-white text-[#27374e] px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base hover:bg-[#27374e] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                           <span>{t("sectors.learnMore")}</span>
//                           {isRTL ? (
//                             <FiChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:-translate-x-1 transition-transform" />
//                           ) : (
//                             <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
//                           )}
//                         </button>
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.4s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SectorsSection;
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const SectorsSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sectors = [
    {
      titleKey: "sectors.telecom.title",
      descKey: "sectors.telecom.desc",
      image: "/h1b.jpg",
      link: "/sectors/telecom-com-it",
    },
    {
      titleKey: "sectors.security.title",
      descKey: "sectors.security.desc",
      image: "/img2.jpg",
      link: "/sectors/industrial-security",
    },
    {
      titleKey: "sectors.realestate.title",
      descKey: "sectors.realestate.desc",
      image: "/img3.jpg",
      link: "/sectors/real-estate-development",
    },
    {
      titleKey: "sectors.oilgas.title",
      descKey: "sectors.oilgas.desc",
      image: "/h1b.jpg",
      link: "/sectors/oil-gas",
    },
    {
      titleKey: "sectors.petroleum.title",
      descKey: "sectors.petroleum.desc",
      image: "/img2.jpg",
      link: "/sectors/petroleum-services",
    },
    {
      titleKey: "sectors.operational.title",
      descKey: "sectors.operational.desc",
      image: "/img3.jpg",
      link: "/sectors/operational-services",
    },
    {
      titleKey: "sectors.facility.title",
      descKey: "sectors.facility.desc",
      image: "/h1b.jpg",
      link: "/sectors/facility-management",
    },
    {
      titleKey: "sectors.manufacturing.title",
      descKey: "sectors.manufacturing.desc",
      image: "/img2.jpg",
      link: "/sectors/manufacturing",
    },
    {
      titleKey: "sectors.plastic.title",
      descKey: "sectors.plastic.desc",
      image: "/img3.jpg",
      link: "/sectors/plastic-industries",
    },
  ];

  // Mobile view - Stacked cards
  if (isMobile) {
    return (
      <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
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

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
          <div data-aos="fade-up">
            <SectionTitle
              badge={t("sectors.badge")}
              title={t("sectors.title")}
              highlightedText={t("sectors.titleHighlight")}
              subtitle={t("sectors.subtitle")}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={t(sector.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {t(sector.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {t(sector.descKey)}
                  </p>
                  <Link href={sector.link}>
                    <button className="group/btn inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300">
                      {t("sectors.learnMore")}
                      {isRTL ? (
                        <FiChevronRight className="w-4 h-4" />
                      ) : (
                        <FiArrowRight className="w-4 h-4" />
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop view - 4 cards per row grid
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
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

      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        <div data-aos="fade-up">
          <SectionTitle
            badge={t("sectors.badge")}
            title={t("sectors.title")}
            highlightedText={t("sectors.titleHighlight")}
            subtitle={t("sectors.subtitle")}
          />
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 100}
              className="group relative"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={t(sector.titleKey)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-5">
                    <p className="text-white text-sm text-center line-clamp-5">
                      {t(sector.descKey)}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {t(sector.titleKey)}
                  </h3>

                  {/* Learn More Link */}
                  <Link href={sector.link}>
                    <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn hover:gap-3 transition-all duration-300">
                      {t("sectors.learnMore")}
                      {isRTL ? (
                        <FiChevronRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                      ) : (
                        <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </Link>
                </div>

                {/* Decorative Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
