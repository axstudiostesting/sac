// "use client";
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Title from "./Title";
// import SpacingWrapper from "./SpacingWrapper";
// import { IMG_URL } from "@/utils/globalUtils";
// import { useTranslation } from "@/hooks/useTranslation";
// import { useLanguage } from "@/contexts/LanguageContext";
// // {
// //   id: 1,
// //   title: "SRGJ",
// //   fullForm: "Shaqra Rajaj College for Girls",
// //   image: "",
// // },

// // {
// //   id: 9,
// //   title: "Royal Combi Hospital",
// //   fullForm: "Royal Commission Hospital - Jubail",
// //   image: "",
// // },

// const projectsData = {
//   energyEfficiency: [
//     {
//       id: 0,
//       title: "King Fahad Medical City",
//       image: "v1750749678/KFMC_inuvhx.jpg",
//     },
//     {
//       id: 1,
//       title: "ROYAL SAUDI LAND FORCES",
//       image: "v1750749679/saudilandforces_apv3u5.png",
//     },
//     {
//       id: 2,
//       title: "UM AL QURA UNIVERSITY",
//       image: "v1750749679/umalqura_sgsutu.webp",
//     },
//     {
//       id: 3,
//       title: "Ministry of Interior - Qasim Region",
//       image: "v1750073789/Moi_i4iebd.jpg",
//     },
//     {
//       id: 4,
//       title: "Ministry of Defence KAMC-T",
//       image: "v1750749290/moid_ilpioh.jpg",
//     },
//     {
//       id: 5,
//       title: "Education Najran Province",
//       image: "v1750073508/najran-enp-momra_kibi3s.jpg",
//     },
//     {
//       id: 6,
//       title: "Osram Project",
//       image: "v1750748380/osram_vvwek3.png",
//     },
//     {
//       id: 7,
//       title: "Tabuk University",
//       image: "v1750073548/tabuk-university_qrarf1.jpg",
//     },
//     {
//       id: 8,
//       title: "SHAQRA University",
//       image: "v1750748482/shaqra_e5m0ny.jpg",
//     },
//     {
//       id: 9,
//       title: "Ministry of Municipal and Rural Affairs - Makkah Region",
//       image: "v1750073789/momrah_wkyk6j.jpg",
//     },
//     {
//       id: 10,
//       title: "Ministry of Interior General Directorate Project Phase 2",
//       image: "v1750073499/moi-gdp-_2_xp4euc.png",
//     },
//     {
//       id: 11,
//       title: "Prince Sattam bin Abdulaziz University",
//       image: "v1750073509/pasu_iti12x.jpg",
//     },
//   ],
//   solarProjects: [
//     {
//       id: 6,
//       title: "200 Schools in Al Baha",
//       image: "v1750748971/al-baha_icdn5n.jpg",
//     },
//     {
//       id: 7,
//       title: "200 Schools in Aseer School",
//       image: "v1750748376/aseer-school_crzfxw.jpg",
//     },
//     {
//       id: 8,
//       title: "Hafar Batain Hospital",
//       image: "v1750748407/hafar-hos_quyyif.jpg",
//     },
//     {
//       id: 10,
//       title: "Al Qasim Hospital",
//       image: "v1750748614/qasim-h_s412d4.jpg",
//     },
//   ],
// };

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState("energyEfficiency");
//   const { t } = useTranslation();
//   const { isRTL } = useLanguage();

//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out", once: true });
//   }, []);

//   // Create translated projects data
//   const translatedProjectsData = {
//     energyEfficiency: [
//       {
//         id: 0,
//         title: t("projects.kfmc"),
//         image: "v1750749678/KFMC_inuvhx.jpg",
//       },
//       {
//         id: 1,
//         title: t("projects.royalSaudiLandForces"),
//         image: "v1750749679/saudilandforces_apv3u5.png",
//       },
//       {
//         id: 2,
//         title: t("projects.umAlQuraUniversity"),
//         image: "v1750749679/umalqura_sgsutu.webp",
//       },
//       {
//         id: 3,
//         title: t("projects.moiQasimRegion"),
//         image: "v1750073789/Moi_i4iebd.jpg",
//       },
//       {
//         id: 4,
//         title: t("projects.ministryOfDefenceKAMC"),
//         image: "v1750749290/moid_ilpioh.jpg",
//       },
//       {
//         id: 5,
//         title: t("projects.educationNajranProvince"),
//         image: "v1750073508/najran-enp-momra_kibi3s.jpg",
//       },
//       {
//         id: 6,
//         title: t("projects.osramProject"),
//         image: "v1750748380/osram_vvwek3.png",
//       },
//       {
//         id: 7,
//         title: t("projects.tabukUniversity"),
//         image: "v1750073548/tabuk-university_qrarf1.jpg",
//       },
//       {
//         id: 8,
//         title: t("projects.shaqraUniversity"),
//         image: "v1750748482/shaqra_e5m0ny.jpg",
//       },
//       {
//         id: 9,
//         title: t("projects.momrahMakkahRegion"),
//         image: "v1750073789/momrah_wkyk6j.jpg",
//       },
//       {
//         id: 10,
//         title: t("projects.moiGeneralDirectorate"),
//         image: "v1750073499/moi-gdp-_2_xp4euc.png",
//       },
//       {
//         id: 11,
//         title: t("projects.princeSattamUniversity"),
//         image: "v1750073509/pasu_iti12x.jpg",
//       },
//     ],
//     solarProjects: [
//       {
//         id: 6,
//         title: t("projects.alBahaSchools"),
//         image: "v1750748971/al-baha_icdn5n.jpg",
//       },
//       {
//         id: 7,
//         title: t("projects.aseerSchools"),
//         image: "v1750748376/aseer-school_crzfxw.jpg",
//       },
//       {
//         id: 8,
//         title: t("projects.hafarBatainHospital"),
//         image: "v1750748407/hafar-hos_quyyif.jpg",
//       },
//       {
//         id: 10,
//         title: t("projects.alQasimHospital"),
//         image: "v1750748614/qasim-h_s412d4.jpg",
//       },
//     ],
//   };

//   return (
//     <>
//       <SpacingWrapper>
//         <Title text={t("projects.title")} para={t("projects.subtitle")} />

//         {/* Category Tabs */}
//         <div className="flex justify-center mb-8">
//           <div
//             className={`inline-flex rounded-md shadow-sm ${
//               isRTL ? "flex-row-reverse" : ""
//             }`}
//           >
//             <button
//               onClick={() => setActiveCategory("energyEfficiency")}
//               className={`px-6 py-3 text-sm font-medium ${
//                 isRTL ? "rounded-r-lg" : "rounded-l-lg"
//               } ${
//                 activeCategory === "energyEfficiency"
//                   ? "bg-secondary text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {t("services.energyManagement")}
//             </button>
//             <button
//               onClick={() => setActiveCategory("solarProjects")}
//               className={`px-6 py-3 text-sm font-medium ${
//                 isRTL ? "rounded-l-lg" : "rounded-r-lg"
//               } ${
//                 activeCategory === "solarProjects"
//                   ? "bg-secondary text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {t("services.solarPanels")}
//             </button>
//           </div>
//         </div>

//         <Swiper
//           modules={[Navigation]}
//           navigation
//           loop
//           spaceBetween={16}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="w-11/12"
//         >
//           {translatedProjectsData[activeCategory].map(
//             ({ id, title, image }) => (
//               <SwiperSlide key={id}>
//                 <div
//                   data-aos="fade-up"
//                   className="rounded-2xl m-8 mt-0 overflow-hidden bg-white shadow-md transition hover:shadow-lg"
//                 >
//                   <img
//                     src={`${IMG_URL}${image}`}
//                     alt={title}
//                     className="w-full h-52  object-cover rounded-t-2xl"
//                   />
//                   <div
//                     className={`p-4 ${isRTL ? "text-right" : "text-center"}`}
//                   >
//                     <h3 className="text-lg font-semibold text-gray-700">
//                       {title}
//                     </h3>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             )
//           )}
//         </Swiper>
//       </SpacingWrapper>
//     </>
//   );
// };

// export default Projects;
