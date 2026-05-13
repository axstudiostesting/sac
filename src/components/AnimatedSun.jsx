import React from "react";

const AnimatedSun = ({ size = 150, className = "" }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glow / Rays behind */}
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="url(#raysGradient)"
        filter="url(#blurFilter)"
        opacity="0.35"
      />

      <circle
        cx="32"
        cy="32"
        r="12"
        fill="url(#sunGradient)"
        stroke="#FDB813"
        strokeWidth="2"
      />
      <g
        stroke="#FDB813"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transformOrigin="32 32"
        style={{ animation: "rotate 8s linear infinite" }}
      >
        {[...Array(12)].map((_, i) => {
          const angle = (360 / 12) * i;
          return (
            <line
              key={i}
              x1="32"
              y1="6"
              x2="32"
              y2="14"
              transform={`rotate(${angle} 32 32)`}
            />
          );
        })}
      </g>

      <defs>
        <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FFB300" />
        </radialGradient>

        <radialGradient id="raysGradient" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="#FFEB99" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
        </radialGradient>

        <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        <style>{`
          @keyframes rotate {
            from { transform: rotate(0deg);}
            to { transform: rotate(360deg);}
          }
        `}</style>
      </defs>
    </svg>
  );
};

export default AnimatedSun;
