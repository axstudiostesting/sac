// "use client";
// import React, { useEffect, useState, useMemo } from "react";
// import Title from "./Title";
// import SpacingWrapper from "./SpacingWrapper";
// import { IMG_URL } from "@/utils/globalUtils";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "@/hooks/useTranslation";
// import { useLanguage } from "@/contexts/LanguageContext";

// const projectsData = {
//   energyEfficiency: [
//     {
//       id: 0,
//       title: "King Fahad Medical City",
//       image: "v1750749678/KFMC_inuvhx.jpg",
//       description: "Advanced medical facility with energy efficient systems",
//       stats: "35% energy reduction",
//       icon: "⚕️",
//       highlights: [
//         "Smart HVAC systems",
//         "LED lighting retrofit",
//         "Energy monitoring",
//       ],
//     },
//     {
//       id: 1,
//       title: "ROYAL SAUDI LAND FORCES",
//       image: "v1750749679/saudilandforces_apv3u5.png",
//       description: "Military base energy optimization project",
//       stats: "40% efficiency gain",
//       icon: "🛡️",
//       highlights: [
//         "Secure power systems",
//         "Mission-critical reliability",
//         "Redundant infrastructure",
//       ],
//     },
//     {
//       id: 2,
//       title: "UM AL QURA UNIVERSITY",
//       image: "v1750749679/umalqura_sgsutu.webp",
//       description: "Campus-wide energy efficiency modernization",
//       stats: "30,000 students served",
//       icon: "🎓",
//       highlights: [
//         "Smart classroom solutions",
//         "Sustainable campus initiative",
//         "Educational displays",
//       ],
//     },
//     {
//       id: 3,
//       title: "Ministry of Interior - Qasim Region",
//       image: "v1750073789/Moi_i4iebd.jpg",
//       description: "Government facility energy upgrade",
//       stats: "99.9% uptime",
//       icon: "🏛️",
//       highlights: ["24/7 operations", "Security systems", "Backup power"],
//     },
//     {
//       id: 4,
//       title: "Ministry of Defence KAMC-T",
//       image: "v1750749290/moid_ilpioh.jpg",
//       description: "Military hospital with critical power systems",
//       stats: "99.99% uptime",
//       icon: "⚕️",
//       highlights: [
//         "Life-saving power reliability",
//         "Redundant systems",
//         "Emergency backup",
//       ],
//     },
//     {
//       id: 5,
//       title: "Education Najran Province",
//       image: "v1750073508/najran-enp-momra_kibi3s.jpg",
//       description: "Regional education facilities upgrade",
//       stats: "50+ schools",
//       icon: "🏫",
//       highlights: [
//         "District-wide implementation",
//         "Sustainable solutions",
//         "Community impact",
//       ],
//     },
//     {
//       id: 6,
//       title: "Osram Project",
//       image: "v1750748380/osram_vvwek3.png",
//       description: "Industrial lighting efficiency project",
//       stats: "$1.2M annual savings",
//       icon: "💡",
//       highlights: ["LED conversion", "Smart controls", "ROI < 2 years"],
//     },
//     {
//       id: 7,
//       title: "Tabuk University",
//       image: "v1750073548/tabuk-university_qrarf1.jpg",
//       description: "University campus energy modernization",
//       stats: "45% reduction",
//       icon: "🎓",
//       highlights: [
//         "Smart campus solutions",
//         "Renewable integration",
//         "Student engagement",
//       ],
//     },
//     {
//       id: 8,
//       title: "SHAQRA University",
//       image: "v1750748482/shaqra_e5m0ny.jpg",
//       description: "Energy efficient campus infrastructure",
//       stats: "10,000+ students",
//       icon: "🏛️",
//       highlights: [
//         "Modern facilities",
//         "Sustainable design",
//         "Energy monitoring",
//       ],
//     },
//     {
//       id: 9,
//       title: "Ministry of Municipal and Rural Affairs - Makkah Region",
//       image: "v1750073789/momrah_wkyk6j.jpg",
//       description: "Government building efficiency upgrades",
//       stats: "30% savings",
//       icon: "🏢",
//       highlights: [
//         "Public sector leadership",
//         "Sustainable operations",
//         "Smart building tech",
//       ],
//     },
//     {
//       id: 10,
//       title: "Ministry of Interior General Directorate Project Phase 2",
//       image: "v1750073499/moi-gdp-_2_xp4euc.png",
//       description: "Critical government infrastructure upgrade",
//       stats: "Phase 2 completion",
//       icon: "🛡️",
//       highlights: [
//         "Security systems",
//         "Redundant power",
//         "Future-proof design",
//       ],
//     },
//     {
//       id: 11,
//       title: "Prince Sattam bin Abdulaziz University",
//       image: "v1750073509/pasu_iti12x.jpg",
//       description: "University energy efficiency program",
//       stats: "15,000 students",
//       icon: "🎓",
//       highlights: [
//         "Campus-wide implementation",
//         "Research integration",
//         "Sustainable education",
//       ],
//     },
//   ],
//   solarProjects: [
//     {
//       id: 6,
//       title: "200 Schools in Al Baha",
//       image: "v1750748971/al-baha_icdn5n.jpg",
//       description: "Solar-powered education facility",
//       stats: "800 students",
//       icon: "🏫",
//       highlights: [
//         "Off-grid capability",
//         "Educational displays",
//         "Community impact",
//       ],
//     },
//     {
//       id: 7,
//       title: "200 Schools in Aseer School",
//       image: "v1750748376/aseer-school_crzfxw.jpg",
//       description: "100% solar-powered campus",
//       stats: "100% renewable",
//       icon: "🌞",
//       highlights: ["Carbon neutral", "Youth education", "Sustainable model"],
//     },
//     {
//       id: 8,
//       title: "Hafar Batain Hospital",
//       image: "v1750748407/hafar-hos_quyyif.jpg",
//       description: "Solar-powered healthcare facility",
//       stats: "300 beds",
//       icon: "🏥",
//       highlights: ["Life-saving power", "Hybrid system", "Instant failover"],
//     },
//     {
//       id: 10,
//       title: "Al Qasim Hospital",
//       image: "v1750748614/qasim-h_s412d4.jpg",
//       description: "Emergency solar power system",
//       stats: "0ms failover",
//       icon: "⚡",
//       highlights: ["Mission-critical", "Military-grade", "Uninterruptible"],
//     },
//   ],
// };
// const ProjectsPage = () => {
//   const pathname = usePathname();
//   const [activeCategory, setActiveCategory] = useState("energyEfficiency");
//   const [activeProject, setActiveProject] = useState(null);
//   const [isMounted, setIsMounted] = useState(false);
//   const { t, language } = useTranslation();
//   const { isRTL } = useLanguage();

//   // Create translated projects data - this will re-render when language changes
//   const translatedProjectsData = useMemo(
//     () => ({
//       energyEfficiency: [
//         {
//           id: 0,
//           title: t("projects.kfmc"),
//           image: "v1750749678/KFMC_inuvhx.jpg",
//           description:
//             t("projects.kfmc") + " - " + t("projects.projectDescription"),
//           stats: "35% energy reduction",
//           icon: "⚕️",
//           highlights: [
//             t("projects.smartHVACSystems"),
//             t("projects.ledLightingRetrofit"),
//             t("projects.energyMonitoring"),
//           ],
//         },
//         {
//           id: 1,
//           title: t("projects.royalSaudiLandForces"),
//           image: "v1750749679/saudilandforces_apv3u5.png",
//           description:
//             t("projects.royalSaudiLandForces") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "40% efficiency gain",
//           icon: "🛡️",
//           highlights: [
//             t("projects.securePowerSystems"),
//             t("projects.missionCriticalReliability"),
//             t("projects.redundantInfrastructure"),
//           ],
//         },
//         {
//           id: 2,
//           title: t("projects.umAlQuraUniversity"),
//           image: "v1750749679/umalqura_sgsutu.webp",
//           description:
//             t("projects.umAlQuraUniversity") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "30,000 students served",
//           icon: "🎓",
//           highlights: [
//             t("projects.smartClassroomSolutions"),
//             t("projects.sustainableCampusInitiative"),
//             t("projects.educationalDisplays"),
//           ],
//         },
//         {
//           id: 3,
//           title: t("projects.moiQasimRegion"),
//           image: "v1750073789/Moi_i4iebd.jpg",
//           description:
//             t("projects.moiQasimRegion") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "99.9% uptime",
//           icon: "🏛️",
//           highlights: [
//             t("projects.operations24_7"),
//             t("projects.securitySystems"),
//             t("projects.backupPower"),
//           ],
//         },
//         {
//           id: 4,
//           title: t("projects.ministryOfDefenceKAMC"),
//           image: "v1750749290/moid_ilpioh.jpg",
//           description:
//             t("projects.ministryOfDefenceKAMC") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "99.99% uptime",
//           icon: "⚕️",
//           highlights: [
//             t("projects.lifeSavingPowerReliability"),
//             t("projects.redundantSystems"),
//             t("projects.emergencyBackup"),
//           ],
//         },
//         {
//           id: 5,
//           title: t("projects.educationNajranProvince"),
//           image: "v1750073508/najran-enp-momra_kibi3s.jpg",
//           description:
//             t("projects.educationNajranProvince") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "50+ schools",
//           icon: "🏫",
//           highlights: [
//             t("projects.districtWideImplementation"),
//             t("projects.sustainableSolutions"),
//             t("projects.communityImpact"),
//           ],
//         },
//         {
//           id: 6,
//           title: t("projects.osramProject"),
//           image: "v1750748380/osram_vvwek3.png",
//           description:
//             t("projects.osramProject") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "$1.2M annual savings",
//           icon: "💡",
//           highlights: [
//             t("projects.ledConversion"),
//             t("projects.smartControls"),
//             t("projects.roiLessThan2Years"),
//           ],
//         },
//         {
//           id: 7,
//           title: t("projects.tabukUniversity"),
//           image: "v1750073548/tabuk-university_qrarf1.jpg",
//           description:
//             t("projects.tabukUniversity") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "45% reduction",
//           icon: "🎓",
//           highlights: [
//             t("projects.smartCampusSolutions"),
//             t("projects.renewableIntegration"),
//             t("projects.studentEngagement"),
//           ],
//         },
//         {
//           id: 8,
//           title: t("projects.shaqraUniversity"),
//           image: "v1750748482/shaqra_e5m0ny.jpg",
//           description:
//             t("projects.shaqraUniversity") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "10,000+ students",
//           icon: "🏛️",
//           highlights: [
//             t("projects.modernFacilities"),
//             t("projects.sustainableDesign"),
//             t("projects.energyMonitoring"),
//           ],
//         },
//         {
//           id: 9,
//           title: t("projects.momrahMakkahRegion"),
//           image: "v1750073789/momrah_wkyk6j.jpg",
//           description:
//             t("projects.momrahMakkahRegion") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "30% savings",
//           icon: "🏢",
//           highlights: [
//             t("projects.publicSectorLeadership"),
//             t("projects.sustainableOperations"),
//             t("projects.smartBuildingTech"),
//           ],
//         },
//         {
//           id: 10,
//           title: t("projects.moiGeneralDirectorate"),
//           image: "v1750073499/moi-gdp-_2_xp4euc.png",
//           description:
//             t("projects.moiGeneralDirectorate") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "Phase 2 completion",
//           icon: "🛡️",
//           highlights: [
//             t("projects.securitySystems"),
//             t("projects.backupPower"),
//             t("projects.futureProofDesign"),
//           ],
//         },
//         {
//           id: 11,
//           title: t("projects.princeSattamUniversity"),
//           image: "v1750073509/pasu_iti12x.jpg",
//           description:
//             t("projects.princeSattamUniversity") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "15,000 students",
//           icon: "🎓",
//           highlights: [
//             t("projects.campusWideImplementation"),
//             t("projects.researchIntegration"),
//             t("projects.sustainableEducation"),
//           ],
//         },
//       ],
//       solarProjects: [
//         {
//           id: 6,
//           title: t("projects.alBahaSchools"),
//           image: "v1750748971/al-baha_icdn5n.jpg",
//           description:
//             t("projects.alBahaSchools") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "800 students",
//           icon: "🏫",
//           highlights: [
//             t("projects.offGridCapability"),
//             t("projects.educationalDisplays"),
//             t("projects.communityImpact"),
//           ],
//         },
//         {
//           id: 7,
//           title: t("projects.aseerSchools"),
//           image: "v1750748376/aseer-school_crzfxw.jpg",
//           description:
//             t("projects.aseerSchools") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "100% renewable",
//           icon: "🌞",
//           highlights: [
//             t("projects.carbonNeutral"),
//             t("projects.youthEducation"),
//             t("projects.sustainableModel"),
//           ],
//         },
//         {
//           id: 8,
//           title: t("projects.hafarBatainHospital"),
//           image: "v1750748407/hafar-hos_quyyif.jpg",
//           description:
//             t("projects.hafarBatainHospital") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "300 beds",
//           icon: "🏥",
//           highlights: [
//             t("projects.lifeSavingPower"),
//             t("projects.hybridSystem"),
//             t("projects.instantFailover"),
//           ],
//         },
//         {
//           id: 10,
//           title: t("projects.alQasimHospital"),
//           image: "v1750748614/qasim-h_s412d4.jpg",
//           description:
//             t("projects.alQasimHospital") +
//             " - " +
//             t("projects.projectDescription"),
//           stats: "0ms failover",
//           icon: "⚡",
//           highlights: [
//             t("projects.missionCritical"),
//             t("projects.militaryGrade"),
//             t("projects.uninterruptible"),
//           ],
//         },
//       ],
//     }),
//     [t, language]
//   );

//   // Get current translated project data
//   const getCurrentProjectData = (projectId) => {
//     const currentProject = translatedProjectsData[activeCategory].find(
//       (project) => project.id === projectId
//     );
//     return currentProject;
//   };

//   useEffect(() => {
//     setIsMounted(true);
//     if (
//       typeof window !== "undefined" &&
//       window.location.hash.includes("#solar")
//     ) {
//       setActiveCategory("solarProjects");
//     }
//   }, [pathname]);

//   // Parallax effect
//   useEffect(() => {
//     if (!isMounted) return;

//     const handleScroll = () => {
//       const elements = document.querySelectorAll(".parallax-bg");
//       elements.forEach((el) => {
//         const speed = parseFloat(el.dataset.speed);
//         const yPos = -(window.scrollY * speed);
//         el.style.transform = `translate3d(0, ${yPos}px, 0)`;
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isMounted]);

//   if (!isMounted) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-pulse text-xl">Loading projects...</div>
//       </div>
//     );
//   }

//   return (
//     <SpacingWrapper key={t("projects.title")}>
//       <div className="relative overflow-hidden min-h-screen">
//         {/* Cosmic background elements */}
//         <div
//           className="parallax-bg fixed -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 z-0"
//           data-speed="0.03"
//         ></div>
//         <div
//           className="parallax-bg fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-green-500/10 to-yellow-500/10 rounded-full mix-blend-screen filter blur-[80px] opacity-40 z-0"
//           data-speed="0.02"
//         ></div>

//         {/* Animated grid lines */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={`vertical-${i}`}
//               className="absolute top-0 bottom-0 w-px bg-white/5"
//               style={{ left: `${i * 5}%` }}
//             ></div>
//           ))}
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={`horizontal-${i}`}
//               className="absolute left-0 right-0 h-px bg-white/5"
//               style={{ top: `${i * 10}%` }}
//             ></div>
//           ))}
//         </div>

//         <div className="relative z-10">
//           <Title
//             text={t("projects.title")}
//             para={t("projects.subtitle")}
//             className="text-center"
//           />

//           {/* Quantum category selector */}
//           <motion.div
//             className="flex justify-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="inline-flex rounded-full shadow-2xl bg-black/30 backdrop-blur-md border border-white/10 p-1">
//               <button
//                 onClick={() => setActiveCategory("energyEfficiency")}
//                 className={`px-8 py-3 text-sm font-medium rounded-full transition-all duration-500 flex items-center ${
//                   activeCategory === "energyEfficiency"
//                     ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
//                     : "text-white/80 hover:text-white hover:bg-white/10"
//                 }`}
//               >
//                 {t("projects.energyEfficiency")}
//               </button>
//               <button
//                 onClick={() => setActiveCategory("solarProjects")}
//                 className={`px-8 py-3 text-sm font-medium rounded-full transition-all duration-500 flex items-center ${
//                   activeCategory === "solarProjects"
//                     ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg"
//                     : "text-white/80 hover:text-white hover:bg-white/10"
//                 }`}
//               >
//                 {t("projects.solarProjects")}
//               </button>
//             </div>
//           </motion.div>

//           {/* Holographic project grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//             {translatedProjectsData[activeCategory].map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.1,
//                   type: "spring",
//                   stiffness: 100,
//                 }}
//                 whileHover={{ scale: 1.03 }}
//                 className="relative group"
//               >
//                 <div
//                   className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm shadow-2xl h-full cursor-pointer"
//                   onClick={() => setActiveProject(project)}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
//                   <img
//                     src={`${IMG_URL}${project.image}`}
//                     alt={project.title}
//                     className="w-full h-full object-cover transform transition-all duration-1000 group-hover:scale-110"
//                   />

//                   <div className="absolute bottom-0 left-0 p-8 w-full z-20">
//                     <motion.div
//                       className="flex items-center mb-2"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 }}
//                     >
//                       <h3 className="text-2xl font-bold text-white">
//                         {project.title}
//                       </h3>
//                     </motion.div>
//                     <motion.p
//                       className="text-white/80 text-sm mb-4"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.4 }}
//                     >
//                       {project.description}
//                     </motion.p>
//                     <motion.div
//                       className="flex justify-between items-center"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.5 }}
//                     >
//                       <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white/80">
//                         {project.stats}
//                       </span>
//                       <button className="text-white/60 hover:text-white transition-colors">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <circle cx="12" cy="12" r="10"></circle>
//                           <polyline points="12 16 16 12 12 8"></polyline>
//                           <line x1="8" y1="12" x2="16" y2="12"></line>
//                         </svg>
//                       </button>
//                     </motion.div>
//                   </div>

//                   <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${
//                         activeCategory === "energyEfficiency"
//                           ? "from-cyan-500/20 to-blue-600/20"
//                           : "from-yellow-400/20 to-orange-500/20"
//                       } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//                     ></div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <AnimatePresence>
//           {activeProject && (
//             <motion.div
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActiveProject(null)}
//             >
//               <motion.div
//                 className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
//                 initial={{ scale: 0.95, opacity: 0, y: 20 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.95, opacity: 0, y: 20 }}
//                 transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Close Button */}
//                 <button
//                   className="absolute top-6 right-6 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <line x1="18" y1="6" x2="6" y2="18"></line>
//                     <line x1="6" y1="6" x2="18" y2="18"></line>
//                   </svg>
//                 </button>

//                 {/* Header with Image */}
//                 <div className="relative h-48 sm:h-56 overflow-hidden">
//                   <img
//                     src={`${IMG_URL}${activeProject.image}`}
//                     alt={activeProject.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
//                     <div className="flex items-center mb-2">
//                       <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
//                         {activeCategory === "energyEfficiency"
//                           ? t("projects.energyEfficiency")
//                           : t("projects.solarProjects")}
//                       </span>
//                     </div>
//                     <h2 className="text-2xl sm:text-3xl font-bold text-white">
//                       {activeProject.title}
//                     </h2>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 sm:p-6">
//                   {/* Stats Cards */}
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
//                     <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200">
//                       <h4 className="text-blue-600 text-xs font-medium mb-1">
//                         {t("projects.impact")}
//                       </h4>
//                       <p className="text-lg font-bold text-blue-900">
//                         {activeProject.stats}
//                       </p>
//                     </div>
//                     <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg border border-green-200">
//                       <h4 className="text-green-600 text-xs font-medium mb-1">
//                         {t("projects.category")}
//                       </h4>
//                       <p className="text-sm font-semibold text-green-900">
//                         {activeCategory === "energyEfficiency"
//                           ? t("projects.infrastructure")
//                           : t("projects.renewableEnergy")}
//                       </p>
//                     </div>
//                     <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-lg border border-purple-200">
//                       <h4 className="text-purple-600 text-xs font-medium mb-1">
//                         {t("projects.year")}
//                       </h4>
//                       <p className="text-sm font-semibold text-purple-900">
//                         {t("projects.yearRange")}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Project Description */}
//                   <div className="mb-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
//                       <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></span>
//                       {t("projects.projectDescription")}
//                     </h3>
//                     <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                       <p className="text-gray-700 text-sm leading-relaxed">
//                         {(() => {
//                           const currentProject = getCurrentProjectData(
//                             activeProject.id
//                           );
//                           return (
//                             currentProject?.description ||
//                             activeProject.description ||
//                             "No description available"
//                           );
//                         })()}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Project Highlights */}
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
//                       <span className="w-1 h-5 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-2"></span>
//                       {t("projects.projectHighlights")}
//                     </h3>
//                     <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
//                       <ul className="space-y-2">
//                         {(() => {
//                           const currentProject = getCurrentProjectData(
//                             activeProject.id
//                           );
//                           const highlights =
//                             currentProject?.highlights ||
//                             activeProject.highlights ||
//                             [];
//                           return highlights.map((highlight, i) => (
//                             <li key={i} className="flex items-start group">
//                               <span className="inline-flex items-center justify-center w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
//                                 {i + 1}
//                               </span>
//                               <span className="text-gray-700 text-sm leading-relaxed">
//                                 {highlight}
//                               </span>
//                             </li>
//                           ));
//                         })()}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Floating particles */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//           {[...Array(30)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full bg-white/10"
//               style={{
//                 width: `${Math.random() * 6 + 2}px`,
//                 height: `${Math.random() * 6 + 2}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, (Math.random() - 0.5) * 60],
//                 x: [0, (Math.random() - 0.5) * 60],
//                 opacity: [0.2, 0.8, 0.2],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </SpacingWrapper>
//   );
// };

// export default ProjectsPage;
