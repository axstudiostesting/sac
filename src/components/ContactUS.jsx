"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeCompany, setActiveCompany] = useState("sadara");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const companies = {
    sadara: {
      key: "contact.companies.sadara",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18...",
    },

    "salam-station": {
      key: "contact.companies.salamStation",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18...",
    },

    "saudi-call": {
      key: "contact.companies.saudiCall",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18...",
    },

    ebreez: {
      key: "contact.companies.ebreez",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18...",
    },

    mawad: {
      key: "contact.companies.mawad",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18...",
    },

    plastech: {
      key: "contact.companies.plastech",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18...",
    },

    jovae: {
      key: "contact.companies.jovae",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18...",
    },

    wajd: {
      key: "contact.companies.wajd",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18...",
    },
  };
  const companyList = [
    { id: "sadara", key: "contact.companies.sadara.name" },
    { id: "salam-station", key: "contact.companies.salamStation.name" },
    { id: "saudi-call", key: "contact.companies.saudiCall.name" },
    { id: "ebreez", key: "contact.companies.ebreez.name" },
    { id: "mawad", key: "contact.companies.mawad.name" },
    { id: "plastech", key: "contact.companies.plastech.name" },
    { id: "jovae", key: "contact.companies.jovae.name" },
    { id: "wajd", key: "contact.companies.wajd.name" },
  ];;

  const currentCompany = companies[activeCompany];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          company: companies[activeCompany].name, // sends the selected company
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // Optionally show an error message to the user
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
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

      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Form + Image Row */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column */}
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">
                  {t("contact.form.title")}
                </h3>
              </div>

              <div className="p-6 md:p-8">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheckCircle className="w-8 h-8 text-green-500" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t("contact.form.success")}
                    </h3>

                    <p className="text-gray-500">
                      {t("contact.form.successMessage")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        {t("contact.form.name")} *
                      </label>

                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900" />

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder={t(
                            "contact.form.namePlaceholder"
                          )}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          {t("contact.form.email")} *
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder={t(
                            "contact.form.emailPlaceholder"
                          )}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          {t("contact.form.phone")}
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t(
                            "contact.form.phonePlaceholder"
                          )}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        {t("contact.form.message")} *
                      </label>

                      <div className="relative">
                        <FiMessageSquare className="absolute left-3 top-3 text-primary" />

                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="4"
                          placeholder={t(
                            "contact.form.messagePlaceholder"
                          )}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-primary"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>{t("contact.form.submit")}</span>

                      <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="fade-left" data-aos-duration="800">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/contact.png"
                alt="Contact Us"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold">
                  {t("contact.img.title")}
                </h3>

                <p className="text-white/80 text-sm mt-1">
                  {t("contact.img.text")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Switcher */}
        <div data-aos="fade-up" data-aos-delay="100" className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {companyList.map((company) => (
              <button
                key={company.id}
                onClick={() => setActiveCompany(company.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCompany === company.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {t(company.key)}
              </button>
            ))}
          </div>
        </div>
        {/* Contact Details + Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div data-aos="fade-right" data-aos-delay="150">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">
                  {t(`${currentCompany.key}.name`)}
                </h3>
                <p className="text-sm text-primary font-medium mt-0.5">
                  {t(`${currentCompany.key}.badge`)}
                </p>
              </div>
              <div className="p-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-900 uppercase tracking-wider">
                      Address
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {t(`${currentCompany.key}.address`)}
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-900 uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href={`tel:${t(`${currentCompany.key}.phone`)}`}
                      className="text-gray-600 text-sm hover:text-primary transition-colors"
                    >
                      {t(`${currentCompany.key}.phone`)}
                    </a>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-900 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${t(`${currentCompany.key}.email`)}`}
                      className="text-gray-600 text-sm hover:text-primary transition-colors break-all"
                    >
                      {t(`${currentCompany.key}.email`)}
                    </a>
                  </div>
                </div>
                {/* Website */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiGlobe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-900 uppercase tracking-wider">
                      Website
                    </p>
                    <a
                      href={`https://${t(
                        `${currentCompany.key}.website`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-sm hover:text-primary transition-colors"
                    >
                      {t(`${currentCompany.key}.website`)}
                    </a>
                  </div>
                </div>
                {/* Working Hours */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-900 uppercase tracking-wider">
                      Working Hours
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {t(`${currentCompany.key}.workingHours`)}
                    </p>
                  </div>
                </div>

                {/* Contact Person */}
                {t(`${currentCompany.key}.contactPerson`) !==
                  `${currentCompany.key}.contactPerson` && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiUser className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-900 uppercase tracking-wider">
                          Contact Person
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          {t(`${currentCompany.key}.contactPerson`)}
                        </p>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div data-aos="fade-left" data-aos-delay="150">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full">
              <div className="bg-primary/5 px-6 py-3 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900">
                  {isRTL ? "خريطة الموقع" : "Location Map"}
                </h3>
              </div>

              <div className="h-[400px] w-full">
                <iframe
                  src={currentCompany.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${t(`${currentCompany.key}.name`)} Office Location`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-16 h-[2px] bg-primary/20 rounded-full" />

            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-primary/40 rounded-full" />
              <div className="w-2 h-2 bg-primary/60 rounded-full" />
              <div className="w-2 h-2 bg-primary/80 rounded-full" />
              <div className="w-2 h-2 bg-primary/60 rounded-full" />
              <div className="w-2 h-2 bg-primary/40 rounded-full" />
            </div>

            <div className="w-16 h-[2px] bg-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
