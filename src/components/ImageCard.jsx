"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const ImageCard = ({ title, description, imageUrl, link }) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className="relative group w-full h-80 md:h-96 lg:h-[22rem] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.03]">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-110"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10 transition-all duration-300 group-hover:via-black/80" />

      {/* Bottom Content */}
      <div
        className={`absolute bottom-0 w-full px-6 py-6 z-20 backdrop-blur-md bg-white/10 bg-opacity-20 text-white ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-base font-light mb-4">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center px-4 py-2 text-sm md:text-base font-semibold bg-yellow-300 text-gray-900 rounded-lg hover:bg-yellow-400 transition duration-300"
        >
          {t("buttons.explore")}
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
