"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FiX,
  FiPhone,
  FiMail,
  FiHome,
  FiInfo,
  FiBriefcase,
  FiMail as FiContact,
  FiCalendar,
  FiChevronRight,
  FiChevronLeft,
  FiChevronDown,
  FiUsers,
} from "react-icons/fi";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileDropdown = ({
  menuOpen,
  setMenuOpen,
  servicesItems = [],
  companyItems = [],
}) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [expandedSection, setExpandedSection] = useState(null); // 'services' or 'company'

  const asideRef = useRef(null);
  const closeButtonRef = useRef(null);
  const bodyOverflowRef = useRef("");
  const bodyOverflowXRef = useRef("");

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setExpandedSection(null);
  }, [setMenuOpen]);

  // Handle body scroll + escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    if (menuOpen) {
      bodyOverflowRef.current = document.body.style.overflow;
      bodyOverflowXRef.current = document.body.style.overflowX;

      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";

      document.addEventListener("keydown", handleEscape);

      const focusable = asideRef.current?.querySelector(
        'button, [href], [tabindex]:not([tabindex="-1"])',
      );
      focusable?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = bodyOverflowRef.current;
      document.body.style.overflowX = bodyOverflowXRef.current;
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (menuOpen) closeButtonRef.current?.focus();
  }, [menuOpen]);

  if (!menuOpen) return null;

  const ChevronIcon = isRTL ? FiChevronLeft : FiChevronRight;

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        role="dialog"
        aria-modal="true"
        onClick={closeMenu}
      >
        {/* Side Menu */}
        <aside
          ref={asideRef}
          dir={isRTL ? "rtl" : "ltr"}
          onClick={(e) => e.stopPropagation()}
          className={`
            fixed inset-y-0 z-50
            w-80 max-w-[85vw]
            bg-gradient-to-b from-white to-gray-50
            shadow-2xl
            transform transition-all duration-500 ease-out
            ${
              isRTL
                ? "right-0 translate-x-0 border-l border-gray-100"
                : "left-0 translate-x-0 border-r border-gray-100"
            }
          `}
        >
          {/* Decorative Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/30"></div>

          {/* Header with Gradient */}
          <header className="relative bg-gradient-to-b from-primary/5 to-transparent px-6 pt-8 pb-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("nav.menuTitle")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {t("nav.contactInfo")}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                aria-label={t("nav.close")}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                  <FiX className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
                </div>
              </button>
            </div>

            {/* Language Switcher - Compact Design */}
            <div className="mt-4 flex justify-end">
              <LanguageSwitcher variant="mobile" />
            </div>
          </header>

          {/* Navigation with Icons */}
          <nav className="py-4 max-h-[calc(100vh-320px)] overflow-y-auto no-scrollbar">
            <ul className="space-y-1 px-3">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`
                    group relative flex items-center gap-4 
                    px-4 py-3.5 rounded-xl
                    text-gray-700 font-medium
                    hover:bg-primary/5 hover:text-primary
                    transition-all duration-300
                  `}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiHome className="w-5 h-5" />
                  </div>
                  <span className="flex-1 text-base">{t("nav.home")}</span>
                  <ChevronIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute right-0 w-1 h-0 bg-primary rounded-full group-hover:h-8 transition-all duration-300"></div>
                </Link>
              </li>

              {/* Company Dropdown */}
              <li>
                <div>
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "company" ? null : "company",
                      )
                    }
                    className={`
                      w-full group relative flex items-center gap-4 
                      px-4 py-3.5 rounded-xl
                      text-gray-700 font-medium
                      hover:bg-primary/5 hover:text-primary
                      transition-all duration-300
                    `}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FiUsers className="w-5 h-5" />
                    </div>
                    <span className="flex-1 text-base text-left">
                      {t("nav.companies")}
                    </span>
                    <FiChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedSection === "company" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Company Submenu */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${expandedSection === "company" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <ul
                      className={`pl-4 space-y-1 mt-1 ${isRTL ? "pr-4 pl-0" : ""}`}
                    >
                      {companyItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`
                              block px-4 py-2.5 rounded-lg
                              text-sm text-gray-600
                              hover:bg-primary/5 hover:text-primary
                              transition-all duration-200
                              ${isRTL ? "text-right" : "text-left"}
                            `}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              {/* Services Dropdown */}
              <li>
                <div>
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "services" ? null : "services",
                      )
                    }
                    className={`
                      w-full group relative flex items-center gap-4 
                      px-4 py-3.5 rounded-xl
                      text-gray-700 font-medium
                      hover:bg-primary/5 hover:text-primary
                      transition-all duration-300
                    `}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FiBriefcase className="w-5 h-5" />
                    </div>
                    <span className="flex-1 text-base text-left">
                      {t("nav.services")}
                    </span>
                    <FiChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedSection === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Services Submenu */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${expandedSection === "services" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <ul
                      className={`pl-4 space-y-1 mt-1 ${isRTL ? "pr-4 pl-0" : ""}`}
                    >
                      {servicesItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`
                              block px-4 py-2.5 rounded-lg
                              text-sm text-gray-600
                              hover:bg-primary/5 hover:text-primary
                              transition-all duration-200
                              ${isRTL ? "text-right" : "text-left"}
                            `}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              {/* Contact */}
              <li>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className={`
                    group relative flex items-center gap-4 
                    px-4 py-3.5 rounded-xl
                    text-gray-700 font-medium
                    hover:bg-primary/5 hover:text-primary
                    transition-all duration-300
                  `}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiContact className="w-5 h-5" />
                  </div>
                  <span className="flex-1 text-base">{t("nav.contact")}</span>
                  <ChevronIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute right-0 w-1 h-0 bg-primary rounded-full group-hover:h-8 transition-all duration-300"></div>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer with Contact Info */}
          <footer className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 space-y-4">
            {/* Contact Items */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <FiPhone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {t("nav.phone")}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <FiMail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {t("nav.email")}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="group relative block w-full overflow-hidden rounded-xl bg-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <div className="relative flex items-center justify-center gap-3 px-6 py-4">
                <FiCalendar className="w-5 h-5 text-white" />
                <span className="font-bold text-white">
                  {t("nav.bookConsultation")}
                </span>
                {isRTL ? (
                  <FiChevronLeft className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300" />
                ) : (
                  <FiChevronRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                )}
              </div>
            </Link>

            {/* Decorative Bottom Pattern */}
            <div className="flex justify-center gap-1 pt-2">
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </footer>
        </aside>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default MobileDropdown;
