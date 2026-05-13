"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const AnimatedEnergyOrbWithWhatsapp = ({ size = 70 }) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-label="WhatsApp Energy Orb"
    >
      <svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer pulsing ring */}
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#pulseGradient)"
          strokeWidth="3"
          fill="none"
          style={{ animation: "pulse 2.5s ease-in-out infinite" }}
        />

        {/* Middle ring rotating */}
        <circle
          cx="32"
          cy="32"
          r="20"
          stroke="url(#rotatingGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{ animation: "spin 10s linear infinite" }}
        />

        <defs>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </radialGradient>

          <linearGradient id="pulseGradient" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#10B981" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="rotatingGradient" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg);}
            to { transform: rotate(360deg);}
          }
          @keyframes pulse {
            0%, 100% { stroke-opacity: 0.7; r: 28; }
            50% { stroke-opacity: 0; r: 32; }
          }
        `}</style>
      </svg>

      {/* Center WhatsApp Icon */}
      <FaWhatsapp
        className="text-[#25d366] drop-shadow-lg"
        style={{ fontSize: size * 0.55, zIndex: 10 }}
        aria-hidden="true"
      />
    </div>
  );
};

const WhatsAppOrbFloating = () => {
  return (
    <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50">
      <AnimatedEnergyOrbWithWhatsapp />
    </div>
  );
};

export default WhatsAppOrbFloating;
