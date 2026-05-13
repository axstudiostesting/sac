// "use client";
// import React from "react";
// import Title from "./Title";
// import { IMG_URL } from "@/utils/globalUtils";
// import { useTranslation } from "@/hooks/useTranslation";
// import { useLanguage } from "@/contexts/LanguageContext";

// const ImageContainer = () => {
//   const { t } = useTranslation();
//   const { isRTL } = useLanguage();

//   const images = [
//     "v1750841398/g1_uxy24a.jpg",
//     "v1750841398/g3_dcs89t.jpg",
//     "v1750841398/g4_izsck6.jpg",
//     "v1750841398/g5_tnt0vy.jpg",
//     "v1750841399/g6_yeexkk.jpg",
//     "v1750841399/g7_wv0puv.jpg",
//     "v1750841399/g8_tjncys.jpg",
//     "v1750841399/g9_jn9jdn.jpg",
//     "v1750841400/g10_lturhj.jpg",
//     "v1750841400/g11_n34t15.jpg",
//     "v1750841400/g12_jfjmyy.jpg",
//     "v1750841400/g13_hxwk8i.jpg",
//     "v1750841400/g14_iugg03.jpg",
//     "v1750841401/g15_fifnog.jpg",
//     "v1750841401/g16_fryxel.jpg",
//   ];

//   return (
//     <>
//       <Title text={t("gallery.title")} para={t("gallery.subtitle")} />

//       <section className="pb-12">
//         <div className="container mx-auto lg:px-12">
//           <div className="grid grid-cols-3 md:grid-cols-4 gap-0">
//             {images && images.length > 0 ? (
//               images.map((e, index) => {
//                 return (
//                   <div key={index} className="relative m-1 h-48">
//                     <img
//                       src={`${IMG_URL}${e}`}
//                       alt="Store Image"
//                       className="w-full h-full object-cover shadow-lg"
//                     />
//                   </div>
//                 );
//               })
//             ) : (
//               <div className="col-span-full text-center py-8">
//                 <p className="text-gray-500">No images available</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ImageContainer;
