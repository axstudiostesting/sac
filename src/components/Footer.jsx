"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import {
  FaEnvelope,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFax,
  FaFacebook,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  // Mobile accordion state (only used on small screens)
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const linkBaseClass =
    "text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group";
  const linkClass = isRTL ? `${linkBaseClass} flex-row-reverse` : linkBaseClass;

  // Get companies from translation data
  const companiesData = t("companies.data") || [];

  // Take first 5 companies for footer
  const companyLinks = companiesData.slice(0, 8).map((company) => ({
    name: company.name,
    href: `/companies/${company.slug}`,
  }));

  const infoLinks = [
    {
      name: t("footer.info.aboutUs") || t("pages.about.badge") || "About Us",
      href: "/about",
    },
    {
      name: t("footer.info.media") || t("pages.media.badge") || "Media",
      href: "/media",
    },
    {
      name: t("footer.info.careers") || t("pages.career.badge") || "Careers",
      href: "/careers",
    },
    { name: t("footer.info.blog") || "Blog", href: "/blog" },
    { name: t("footer.info.news") || "News", href: "/news" },
  ];

  return (
    <footer
      className="bg-primary w-full overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="relative w-full">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 20px)`,
          }}
        />

        {/* Main Footer Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
              {/* Logo, Description and Socials */}
              <div className="sm:col-span-2 lg:col-span-4">

                <div data-aos="fade-up" className=" mb-6 text-center md:text-left">
                  <Image
                    src="/sadara.png"
                    alt={t("footer.logoAlt") || "Sadara Group Logo"}
                    width={180}
                    height={34}
                    className="mx-auto mb-4 brightness-0 invert"
                  />
                  <p className="text-gray-400 text-sm leading-relaxed px-2">
                    {t("footer.companyDescription")}
                  </p>
                </div>

                {/* Social Icons */}
                <div data-aos="fade-up" className="flex gap-3 md:gap-4 justify-center lg:justify-start">
                  <div
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer text-gray-300 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-base md:text-lg" />
                  </div>
                  <a
                    href={
                      t("footer.social.linkedinUrl") ||
                      "https://www.linkedin.com/company/sadara-development-investment"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-base md:text-lg" />
                  </a>
                  <div
                    className="cursor-pointer w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
                    aria-label="Facebok"

                  >
                    <FaFacebook className="text-base md:text-lg" />
                  </div>
                </div>
              </div>
              {/* Mobile: Stacked layout with accordion sections */}
              <div className="md:hidden space-y-6">

                {[
                  {
                    title: t("footer.companies.title") || "Our Companies",
                    content: companyLinks.map((link) => (
                      <Link key={link.name} href={link.href} className="block py-2.5 text-gray-300 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    )),
                  },
                  {
                    title: t("footer.info.title") || "Information",
                    content: infoLinks.map((link) => (
                      <Link key={link.name} href={link.href} className="block py-2.5 text-gray-300 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    )),
                  },
                  {
                    title: t("footer.contact.title") || "Contact Us",
                    content: (
                      <div className="space-y-3 py-2">
                        <div className="flex items-start gap-3 text-gray-300 text-sm">
                          <FaEnvelope className="text-white/60 mt-0.5" />
                          <a href={`mailto:${t("footer.contact.email")}`} className="hover:text-white transition-colors break-all">
                            {t("footer.contact.email")}
                          </a>
                        </div>
                        <div className="flex items-start gap-3 text-gray-300 text-sm">
                          <FaPhoneAlt className="text-white/60 mt-0.5" />
                          <a href={`tel:${t("footer.contact.phone")}`} className="hover:text-white transition-colors ltr-nums" dir="ltr">
                            {t("footer.contact.phone")}
                          </a>
                        </div>
                        <div className="flex items-start gap-3 text-gray-300 text-sm">
                          <FaFax className="text-white/60 mt-0.5" />
                          <span>{t("footer.contact.fax")}</span>
                        </div>
                        <div className="flex items-start gap-3 text-gray-300 text-sm">
                          <FaMapMarkerAlt className="text-white/60 mt-0.5" />
                          <span dangerouslySetInnerHTML={{
                            __html: t("footer.contact.address"),
                          }} />
                        </div>
                      </div>
                    ),
                  },
                ].map((section, idx) => (
                  <div
                    key={section.title}
                    data-aos="fade-up"
                    data-aos-delay={(idx + 1) * 100}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full flex justify-between items-center p-4 text-white font-semibold text-base"
                    >
                      <span>{section.title}</span>
                      {openSection === section.title ? (
                        <FiChevronUp className="w-5 h-5 text-white/70" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 text-white/70" />
                      )}
                    </button>
                    <div
                      className={`transition-all duration-400 overflow-hidden ${openSection === section.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-4 pb-4">{section.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div data-aos="fade-up" className=" hidden md:block lg:col-span-2">
                <h3 className="text-white font-bold text-base md:text-lg mb-4 relative inline-block">
                  {t("footer.companies.title") || "Our Companies"}
                  <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-white/30 rounded-full"></div>
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {companyLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className={linkClass}>
                        <span className="w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-aos="fade-up" className="hidden md:block lg:col-span-2">
                <h3 className="text-white font-bold text-base md:text-lg mb-4 relative inline-block">
                  {t("footer.info.title") || "Information"}
                  <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-white/30 rounded-full"></div>
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {infoLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className={linkClass}>
                        <span className="w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-aos="fade-up" className="hidden md:block lg:col-span-4">
                <h3 className="text-white font-bold text-base md:text-lg mb-4 relative inline-block">
                  {t("footer.contact.title") || "Contact Us"}
                  <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-white/30 rounded-full"></div>
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div
                    className={`flex items-start gap-3 text-gray-400 text-xs md:text-sm ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <FaEnvelope className="text-white/60 mt-0.5 flex-shrink-0" />
                    <a
                      href={`mailto:${t("footer.contact.email") || "info@sdi.com.sa"}`}
                      className="hover:text-white transition-colors break-all"
                    >
                      {t("footer.contact.email") || "info@sdi.com.sa"}
                    </a>
                  </div>
                  <div
                    className={`flex items-start gap-3 text-gray-400 text-xs md:text-sm ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <FaPhoneAlt className="text-white/60 mt-0.5 flex-shrink-0" />
                    <a
                      href={`tel:${t("footer.contact.phone") || "+966 59 673 5773"}`}
                      className="hover:text-white transition-colors ltr-nums"
                      dir="ltr"
                    >
                      {t("footer.contact.phone") || "+966 59 673 5773"}
                    </a>
                  </div>
                  <div
                    className={`flex items-start gap-3 text-gray-400 text-xs md:text-sm ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <FaFax className="text-white/60 mt-0.5 flex-shrink-0" />
                    <span>{t("footer.contact.fax") || "+966 12 345 6789"}</span>
                  </div>
                  <div
                    className={`flex items-start gap-3 text-gray-400 text-xs md:text-sm ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <FaMapMarkerAlt className="text-white/60 mt-0.5 flex-shrink-0" />
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          t("footer.contact.address") ||
                          "King Fahd Road, Al Olaya District,<br />P.O. Box 12345, Riyadh 11433,<br />Kingdom of Saudi Arabia",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div
              className="border-t border-white/10 pt-6 mt-6 md:pt-8 md:mt-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div
                className={`flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}
              >
                <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
                  {typeof t("footer.copyright") === "function"
                    ? t("footer.copyright")({ year: new Date().getFullYear() })
                    : (
                      t("footer.copyright") ||
                      "© {year} Sadara Development Investment Company. All rights reserved."
                    ).replace("{year}", new Date().getFullYear())}
                </p>
                <p className="text-gray-500 text-xs text-center md:text-right">
                  {t("footer.tagline") ||
                    "Building a diversified future for Saudi Arabia"}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
