// "use client";
// import { motion } from "framer-motion";
// import Title from "./Title";
// import ImageCard from "./ImageCard"; // ✅ Import updated ImageCard
// import { serviceCategories } from "@/utils/globalUtils";
// import { useTranslation } from "@/hooks/useTranslation";
// import { useLanguage } from "@/contexts/LanguageContext";
// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const Services = () => {
//   const { t } = useTranslation();
//   const { isRTL } = useLanguage();

//   // Create translated services array
//   const translatedServices = [
//     {
//       title: t("services.energyManagement"),
//       description: t("services.energyManagementDesc"),
//       imageUrl: "/em.jpg",
//       link: "/services/energy-management",
//     },
//     {
//       title: t("services.lighting"),
//       description: t("services.lightingDesc"),
//       imageUrl: "/lightning.webp",
//       link: "/services/lightning-and-control",
//     },
//     {
//       title: t("services.solarPanels"),
//       description: t("services.solarPanelsDesc"),
//       imageUrl: "/solar.jpg",
//       link: "/services/solar-energy-solutions",
//     },
//     {
//       title: t("services.hvac"),
//       description: t("services.hvacDesc"),
//       imageUrl: "/solar4.jpg",
//       link: "/services/hvac-systems",
//     },
//     {
//       title: t("services.buildingAutomation"),
//       description: t("services.buildingAutomationDesc"),
//       imageUrl: "/bms.jpg",
//       link: "/services/building-management-systems",
//     },
//     {
//       title: t("services.plumbing"),
//       description: t("services.plumbingDesc"),
//       imageUrl: "/solar6.jpg",
//       link: "/services/plumbing-systems",
//     },
//   ];

//   return (
//     <section className="relative py-24 px-4 sm:px-8 lg:px-32 bg-slate-100 overflow-hidden">
//       {/* Fancy Background Bubbles */}
//       <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
//         <div className="absolute w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px] rotate-45 animate-pulse" />
//         <div className="absolute w-96 h-96 bg-secondary/30 opacity-20 rounded-full blur-3xl bottom-[-120px] right-[-150px] rotate-45 animate-pulse delay-1000" />
//         <div className="absolute w-52 h-52 bg-yellow-200 opacity-30 rounded-full blur-2xl top-[30%] left-[10%] rotate-12 animate-pulse delay-500" />
//         <div className="absolute w-60 h-60 bg-primary/20 opacity-20 rounded-full blur-2xl top-[60%] right-[20%] rotate-12 animate-pulse delay-700" />
//       </div>

//       <Title text={t("services.title")} para={t("services.subtitle")} />

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 relative z-10">
//         {translatedServices.map((service, i) => (
//           <motion.div
//             key={i}
//             custom={i}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <ImageCard
//               title={service.title}
//               description={service.description}
//               imageUrl={service.imageUrl}
//               link={service.link}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
