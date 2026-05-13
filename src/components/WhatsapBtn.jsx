"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const WHATSAPP_NUMBER = "966596735773"; // no +, no spaces
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppBtn = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
                 flex items-center justify-center
                 w-14 h-14 rounded-full
                 bg-[#25D366] text-white
                 shadow-lg hover:scale-105 transition-transform"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppBtn;
