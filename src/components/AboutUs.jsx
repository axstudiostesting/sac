"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroService from "./HeroService";
import CeoMessage from "./CeoMessage";
import AboutMissionVissionValues from "./AboutMissionVissionValues";
import ValueShowCase from "./ValueShowCase";
import OurStories from "./OurStories";
import CompanyProfileHero from "./CompanyProfileHero";
import Content from "./Content";
import CTA from "./CTATwo";

export default function AboutUs() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <HeroService
        image="/hero2.jpg"
        title={t("aboutUs.heroTitle")}
        subtitle={t("aboutUs.heroSubtitle")}
      />
      <CeoMessage />
      <AboutMissionVissionValues />
      <ValueShowCase />
      <OurStories />
      <CompanyProfileHero />
      <Content />
      <CTA />
    </div>
  );
}
