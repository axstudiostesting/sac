// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { useTranslation } from "@/hooks/useTranslation";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import SectionTitle from "./SectionTitle";

// const MovingPartners = () => {
//   const { isRTL } = useLanguage();
//   const { t } = useTranslation();

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   // Partners logos array
//   const partners = [
//     { name: "Partner 1", logo: "/p1.png" },
//     { name: "Partner 2", logo: "/p2.png" },
//     { name: "Innovation Experts", logo: "/p3.png" },
//     { name: "Technology Partners", logo: "/p4.jpg" },
//     { name: "Microsoft", logo: "/p5.png" },
//     { name: "Oracle", logo: "/p6.png" },
//     { name: "SAP", logo: "/p7.png" },
//     { name: "Mercer", logo: "/p8.webp" },
//     { name: "Towers Watson", logo: "/p9.jpg" },
//   ];

//   // Duplicate partners for seamless loop
//   const duplicatedPartners = [...partners, ...partners, ...partners];

//   return (
//     <section className="relative w-full py-16 md:py-20 overflow-hidden ">
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
//       <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />

//       <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
//         {/* Section Title */}
//         <SectionTitle
//           badge="Our Partners"
//           title="Our"
//           highlightedText={"Partners"}
//           subtitle={
//             "  We partner with the world's leading technology providers"
//           }
//         />

//         {/* Moving Logos Carousel */}
//         <div
//           className="relative w-full overflow-hidden py-8"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           {/* Gradient Overlays */}
//           <div className="absolute left-0 top-0 w-16 md:w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 w-16 md:w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

//           {/* Carousel Track */}
//           <div
//             className="flex"
//             style={{
//               animation: `marquee ${isRTL ? "30s" : "30s"} linear infinite`,
//               width: "fit-content",
//             }}
//           >
//             {duplicatedPartners.map((partner, index) => (
//               <div
//                 key={`${partner.name}-${index}`}
//                 className="flex-shrink-0 mx-4 md:mx-6"
//               >
//                 {/* Logo Container */}
//                 <div className="w-28 h-20 md:w-36 md:h-24 lg:w-40 lg:h-28 bg-white border-primary rounded-xl border border-gray-100 hover:border-[#27374e]/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-3 md:p-4 group">
//                   <Image
//                     src={partner.logo}
//                     alt={partner.name}
//                     width={120}
//                     height={60}
//                     className="object-contain max-h-10 md:max-h-12 lg:max-h-14 group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Decoration */}
//         <div className="mt-12 text-center">
//           <div className="inline-flex items-center gap-3">
//             <div className="w-12 h-[2px] bg-[#27374e]/20 rounded-full"></div>
//             <div className="flex gap-1">
//               <div className="w-2 h-2 bg-[#27374e]/40 rounded-full"></div>
//               <div className="w-2 h-2 bg-[#27374e]/60 rounded-full"></div>
//               <div className="w-2 h-2 bg-[#27374e]/80 rounded-full"></div>
//             </div>
//             <div className="w-12 h-[2px] bg-[#27374e]/20 rounded-full"></div>
//           </div>
//         </div>
//       </div>

//       {/* Marquee Animation Styles */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.33%);
//           }
//         }
//         @keyframes marquee-rtl {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(33.33%);
//           }
//         }
//         [dir="rtl"] div[style*="animation: marquee"] {
//           animation-name: marquee-rtl !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default MovingPartners;
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const PartnersSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Partners logos array
  const partners = [
    { name: "Saudi Aramco", logo: "/partners/p1.png" },
    { name: "Microsoft", logo: "/partners/p2.png" },
    { name: "Oracle", logo: "/partners/p3.png" },
    { name: "Towers Watson", logo: "/partners/p4.jpg" },
    { name: "Mercer", logo: "/partners/p8.webp" },
    { name: "STC", logo: "/partners/p2.png" },
    { name: "SABIC", logo: "/partners/p3.png" },
    { name: "SAP", logo: "/partners/p7.png" },
    { name: "NEOM", logo: "/partners/p1.png" },
    { name: "Maaden", logo: "/partners/p2.png" },
    { name: "Zain", logo: "/partners/p3.png" },
    { name: "Al Rajhi Bank", logo: "/partners/p5.png" },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden ">
      {/* Background Pattern Overlays */}
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

      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <SectionTitle
          badge={t("partners.badge")}
          title={t("partners.title")}
          highlightedText={t("partners.highlightedText")}
          subtitle={t("partners.subtitle")}
        />

        {/* Partners Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl p-4 md:p-6 flex items-center justify-center  transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-12 md:max-h-14 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-[2px] bg-[#27374e]/20 rounded-full" />
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#27374e]/40 rounded-full" />
              <div className="w-2 h-2 bg-[#27374e]/60 rounded-full" />
              <div className="w-2 h-2 bg-[#27374e]/80 rounded-full" />
            </div>
            <div className="w-12 h-[2px] bg-[#27374e]/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
