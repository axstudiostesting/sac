import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsHighlights from "@/components/StatsHighlight";
import HeroSection from "@/components/HeroSection";
import HeroWithImageAndLogos from "@/components/HeroWithImageAndLogos";
import ImageContainer from "@/components/ImageContainer";
import Blogs from "@/components/OurBlogs";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Title from "@/components/Title";
import WhatWeDoSection from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutHero from "../../public/clients/AboutHero";
import ValuesSection from "@/components/ValueSection";
import CompetitiveAdvantage from "@/components/CompetativeAdvantage";
import ExperienceFeatures from "@/components/ExperienceFeatures";
import PremiumExperience from "@/components/ExperienceFeatures";
import AboutFounder from "@/components/AboutFounder";
import PartnersClientsExpertise from "@/components/PartnersClientsExpertise";
import MethodologyServices from "@/components/MethodologyServices";
import DetailedServices from "@/components/DetailedServices";
import PartnersExperience from "@/components/PartnerExperience";
import Values from "@/components/ValueSection";
import ServicePhilosophy from "@/components/ServicePhilospy";
import Partners from "@/components/Partners";
import PartnersClientsExperience from "@/components/Partners";
import AboutCompany from "@/components/AboutCompany";
import MetricsSection from "@/components/MetricsSection";
import NewsSection from "@/components/NewsSection";
import MovingPartners from "@/components/PartnersNew";
import ClientsSection from "@/components/ClientsSection";
import LinkedInPostsSection from "@/components/LinedInPostSection";
import NewsEventsSection from "@/components/NewsEventPage";
import CompaniesSection from "@/components/CompaniesSection";
import PortfolioSection from "@/components/PortfoilioSection";
import ServicesSection from "@/components/ServicesHero";
import PartnersSection from "@/components/PartnersNew";
import DownloadProfile from "@/components/DownloadProfile";
import Service from "./sectors/page";
import SectorsSection from "@/components/DiversePortfolioSection";
import InvestmentSectors from "@/components/InvestmentSectors";
import CoreValues from "@/components/CoreValues";
import MediaSection from "@/components/NewsEventPage";
import MediaSliderCarousel from "@/components/MediaCarousel";
import CompanyOverview from "@/components/CompanyOverview";
import DynamicTitle from "@/components/DynamicTitle";

export default function Home() {
  return (
    <>
      <DynamicTitle
        en="Sadara Development Investment"
        ar="صدارة التنمية للاستثمار"
      />
      {/* <HeroSection /> */}
      {/* <AboutCompany /> */}

      <ServicesSection />
      {/* <SectorsSection /> */}
      {/* <MetricsSection /> */}
      <CompaniesSection />
      {/* <Values /> */}
      {/* <CompetitiveAdvantage /> */}
      {/* <SectorsSection /> */}
      {/* <InvestmentSectors /> */}

      {/* <CoreValues /> */}

      {/* <MethodologyServices /> */}
      {/* <PartnersSection /> */}

      <ClientsSection />
      <DownloadProfile />
      <CompanyOverview />
      <MediaSliderCarousel />

      {/* <PartnersClientsExperience /> */}

      {/* <LinkedInPostsSection /> */}

      {/* <FAQ /> */}
    </>
  );
}
