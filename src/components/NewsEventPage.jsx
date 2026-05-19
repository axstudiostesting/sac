// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { FiCalendar, FiArrowRight, FiEye } from "react-icons/fi";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import SectionTitle from "./SectionTitle";

// const NewsEventsSection = () => {
//   const { isRTL } = useLanguage();
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [visibleItems, setVisibleItems] = useState(8);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   const items = [
//     {
//       id: 1,
//       type: "news",
//       title: "Saudi Call Launches Advanced Security Solutions",
//       description:
//         "New cutting-edge security systems designed to protect businesses with AI-powered monitoring and real-time threat detection.",
//       image: "/h1b.jpg",
//       date: "March 15, 2024",
//       readTime: "5 min read",
//       link: "/news/1",
//     },
//     {
//       id: 2,
//       type: "events",
//       title: "Tech Summit 2024 - Riyadh",
//       description:
//         "Join us at the largest technology conference in KSA. Meet industry experts and discover latest innovations.",
//       image: "/img2.jpg",
//       date: "April 20, 2024",
//       location: "Riyadh Front Expo",
//       link: "/events/1",
//     },
//     {
//       id: 3,
//       type: "news",
//       title: "Partnership Announcement with Leading Tech Giant",
//       description:
//         "Strategic partnership to bring world-class technology solutions to the Saudi market.",
//       image: "/img3.jpg",
//       date: "March 10, 2024",
//       readTime: "3 min read",
//       link: "/news/2",
//     },
//     {
//       id: 4,
//       type: "events",
//       title: "Cybersecurity Workshop",
//       description:
//         "Hands-on workshop on latest cybersecurity threats and protection strategies.",
//       image: "/h1b.jpg",
//       date: "May 5, 2024",
//       location: "Online Webinar",
//       link: "/events/2",
//     },
//     {
//       id: 5,
//       type: "news",
//       title: "Expanding Operations to New Cities",
//       description:
//         "Saudi Call expands its footprint to 5 new cities across the Kingdom.",
//       image: "/img2.jpg",
//       date: "March 5, 2024",
//       readTime: "4 min read",
//       link: "/news/3",
//     },
//     {
//       id: 6,
//       type: "events",
//       title: "Annual Gala Dinner 2024",
//       description: "Celebrating our achievements with clients and partners.",
//       image: "/img3.jpg",
//       date: "June 10, 2024",
//       location: "Four Seasons Riyadh",
//       link: "/events/3",
//     },
//     {
//       id: 7,
//       type: "news",
//       title: "Award for Excellence in Facility Management",
//       description:
//         "Recognized as the best facility management service provider for 2024.",
//       image: "/h1b.jpg",
//       date: "February 28, 2024",
//       readTime: "2 min read",
//       link: "/news/4",
//     },
//     {
//       id: 8,
//       type: "news",
//       title: "New Data Center Solutions Now Available",
//       description:
//         "State-of-the-art data center solutions with enhanced security.",
//       image: "/img2.jpg",
//       date: "February 20, 2024",
//       readTime: "6 min read",
//       link: "/news/5",
//     },
//     {
//       id: 9,
//       type: "events",
//       title: "Digital Transformation Forum",
//       description: "Discussing the future of digital transformation in KSA.",
//       image: "/img3.jpg",
//       date: "July 15, 2024",
//       location: "King Abdullah Financial District",
//       link: "/events/4",
//     },
//     {
//       id: 10,
//       type: "news",
//       title: "Free Consultation Campaign Launch",
//       description: "Limited time offer for businesses looking to upgrade.",
//       image: "/h1b.jpg",
//       date: "February 15, 2024",
//       readTime: "3 min read",
//       link: "/news/6",
//     },
//   ];

//   const filters = [
//     { key: "all", label: "All" },
//     { key: "news", label: "News" },
//     { key: "events", label: "Events" },
//   ];

//   const filteredItems =
//     activeFilter === "all"
//       ? items
//       : items.filter((item) => item.type === activeFilter);

//   const displayedItems = filteredItems.slice(0, visibleItems);

//   const loadMore = () => {
//     setVisibleItems((prev) => prev + 4);
//   };

//   return (
//     <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       {/* Background Pattern */}
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

//       <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
//         {/* Section Title */}
//         <SectionTitle
//           badge="media"
//           title="News And"
//           highlightedText={"Events"}
//         />

//         {/* Filter Pills */}
//         <div
//           data-aos="fade-up"
//           data-aos-delay="100"
//           className="flex justify-center gap-4 mb-12"
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter.key}
//               onClick={() => {
//                 setActiveFilter(filter.key);
//                 setVisibleItems(8);
//               }}
//               className={`px-6 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
//                 activeFilter === filter.key
//                   ? "bg-primary text-white shadow-lg"
//                   : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//               }`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {displayedItems.map((item, idx) => (
//             <div
//               key={item.id}
//               data-aos="fade-up"
//               data-aos-delay={idx * 50}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//             >
//               {/* Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {/* Type Badge */}
//                 <div className="absolute top-3 right-3">
//                   <span
//                     className={`text-xs font-semibold px-3 py-1 rounded-full ${
//                       item.type === "news"
//                         ? "bg-blue-500 text-white"
//                         : "bg-primary text-white"
//                     }`}
//                   >
//                     {item.type === "news" ? "News" : "Event"}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 {/* Date */}
//                 <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
//                   <FiCalendar className="w-3 h-3 text-primary" />
//                   <span>{item.date}</span>
//                   {item.type === "news" && item.readTime && (
//                     <>
//                       <span>•</span>
//                       <FiEye className="w-3 h-3 text-primary" />
//                       <span>{item.readTime}</span>
//                     </>
//                   )}
//                   {item.type === "events" && item.location && (
//                     <>
//                       <span>•</span>
//                       <span>{item.location}</span>
//                     </>
//                   )}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                   {item.description}
//                 </p>

//                 {/* Read More Link */}
//                 <Link href={item.link}>
//                   <button className="inline-flex items-center gap-1 text-[#27374e] font-semibold text-sm hover:gap-2 transition-all duration-300">
//                     Read More
//                     <FiArrowRight className="w-4 h-4" />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleItems < filteredItems.length && (
//           <div className="text-center mt-12" data-aos="fade-up">
//             <button
//               onClick={loadMore}
//               className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#27374e]/90 transition-all duration-300 shadow-md hover:shadow-xl"
//             >
//               Load More
//               <FiArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default NewsEventsSection;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FiCalendar,
  FiArrowRight,
  FiEye,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const MediaSection = () => {
  const { isRTL, locale } = useLanguage();
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState(8);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const items = t("media.items") || [];

  const filters = [
    { key: "all", label: t("media.filters.all") },
    { key: "news", label: t("media.filters.news") },
    { key: "events", label: t("media.filters.events") },
  ];

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.type === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setVisibleItems(8);
  };

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
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
        <SectionTitle
          badge={t("media.badge")}
          title={t("media.title")}
          highlightedText={t("media.highlightedText")}
          subtitle={t("media.subtitle")}
        />

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => {
                setActiveFilter(filter.key);
                setVisibleItems(8);
              }}
              className={`px-6 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${activeFilter === filter.key
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${item.type === "news"
                      ? "bg-blue-500 text-white"
                      : "bg-primary text-white"
                      }`}
                  >
                    {item.type === "news" ? t("media.news") : t("media.event")}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-2 flex-wrap">
                  <FiCalendar className="w-3 h-3 text-primary" />
                  <span>{item.date}</span>
                  {item.type === "news" && item.readTime && (
                    <>
                      <span>•</span>
                      <FiEye className="w-3 h-3 text-primary" />
                      <span>{item.readTime}</span>
                    </>
                  )}
                  {item.type === "events" && item.location && (
                    <>
                      <span>•</span>
                      <FiMapPin className="w-3 h-3 text-primary" />
                      <span className="truncate max-w-[100px]">
                        {item.location}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {t(item.title)}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <Link href={`/media/${item.slug}`}>
                  <button className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all duration-300">
                    {t("media.readMore")}
                    <FiArrowRight
                      className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < filteredItems.length && (
          <div className="text-center mt-12" data-aos="fade-up">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {t("media.loadMore")}
              <FiArrowRight
                className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaSection;
