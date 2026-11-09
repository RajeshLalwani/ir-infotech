import React from 'react';

export const CYBER_HEADER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 794 145" width="794" height="145">
  <defs>
    <!-- Deep Obsidian Background Gradient -->
    <linearGradient id="cyberBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#010712" />
      <stop offset="50%" stop-color="#02172d" />
      <stop offset="100%" stop-color="#010915" />
    </linearGradient>

    <!-- Center Ambient Cyan Glow -->
    <radialGradient id="headerRadialGlow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.25" />
      <stop offset="50%" stop-color="#0284c7" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#010712" stop-opacity="0" />
    </radialGradient>

    <!-- Wave Ribbon Gradients -->
    <linearGradient id="waveCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0" />
      <stop offset="35%" stop-color="#00f0ff" stop-opacity="0.85" />
      <stop offset="70%" stop-color="#0284c7" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#00f0ff" stop-opacity="0" />
    </linearGradient>

    <!-- Laser Beam Gradient -->
    <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0" />
      <stop offset="20%" stop-color="#00f0ff" stop-opacity="0.3" />
      <stop offset="50%" stop-color="#00f0ff" stop-opacity="1" />
      <stop offset="80%" stop-color="#00f0ff" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#00f0ff" stop-opacity="0" />
    </linearGradient>

    <!-- Badge Fill Gradient -->
    <linearGradient id="badgeFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#031f38" />
      <stop offset="100%" stop-color="#010e1c" />
    </linearGradient>

    <!-- Soft Glow Filter -->
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Header Base Background -->
  <rect width="794" height="145" fill="url(#cyberBg)" />
  <!-- Center Radial Glow -->
  <rect width="794" height="145" fill="url(#headerRadialGlow)" />

  <!-- Flowing Cyber Wave Ribbons -->
  <path d="M -40,15 C 160,-25 220,95 380,126" fill="none" stroke="url(#waveCyanGrad)" stroke-width="2.2" filter="url(#neonGlow)" />
  <path d="M -60,40 C 130,-5 190,110 390,126" fill="none" stroke="#00f0ff" stroke-width="1.2" opacity="0.4" />
  <path d="M 834,15 C 634,-25 574,95 414,126" fill="none" stroke="url(#waveCyanGrad)" stroke-width="2.2" filter="url(#neonGlow)" />
  <path d="M 854,40 C 664,-5 604,110 404,126" fill="none" stroke="#00f0ff" stroke-width="1.2" opacity="0.4" />

  <!-- Corner Decorative Micro Tech Ticks -->
  <line x1="20" y1="18" x2="60" y2="18" stroke="#00f0ff" stroke-width="1" opacity="0.5" />
  <line x1="20" y1="18" x2="20" y2="38" stroke="#00f0ff" stroke-width="1" opacity="0.5" />
  <circle cx="20" cy="18" r="2" fill="#00f0ff" />

  <line x1="774" y1="18" x2="734" y2="18" stroke="#00f0ff" stroke-width="1" opacity="0.5" />
  <line x1="774" y1="18" x2="774" y2="38" stroke="#00f0ff" stroke-width="1" opacity="0.5" />
  <circle cx="774" cy="18" r="2" fill="#00f0ff" />

  <!-- CENTER BRAND LOCKUP (CYBER EYE + IR INFOTECH) -->
  <g transform="translate(230, 16)">
    <!-- Cyber Eye Inverted Triangle Emblem -->
    <g transform="translate(15, 0)">
      <!-- Antenna Circuit Traces -->
      <line x1="28" y1="14" x2="28" y2="2" stroke="#00f0ff" stroke-width="1.8" stroke-linecap="round" filter="url(#neonGlow)" />
      <circle cx="28" cy="2" r="2.2" fill="#00f0ff" />
      <line x1="16" y1="14" x2="8" y2="5" stroke="#00f0ff" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="7" cy="4" r="1.8" fill="#00f0ff" />
      <line x1="40" y1="14" x2="48" y2="5" stroke="#00f0ff" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="49" cy="4" r="1.8" fill="#00f0ff" />

      <!-- Inverted Triangle Outer -->
      <polygon points="4,15 52,15 28,54" fill="none" stroke="#00f0ff" stroke-width="2.2" stroke-linejoin="round" filter="url(#neonGlow)" />
      <!-- Inverted Triangle Inner -->
      <polygon points="12,19 44,19 28,47" fill="rgba(0, 240, 255, 0.08)" stroke="#38bdf8" stroke-width="1" stroke-linejoin="round" />

      <!-- Cyber Eye Almond Contour -->
      <path d="M 16,30 C 21,23 35,23 40,30 C 35,37 21,37 16,30 Z" fill="none" stroke="#00f0ff" stroke-width="1.8" filter="url(#neonGlow)" />
      <!-- Eye Iris & Pupil -->
      <circle cx="28" cy="30" r="4.2" fill="none" stroke="#ffffff" stroke-width="1.4" />
      <circle cx="28" cy="30" r="2" fill="#00f0ff" />

      <!-- Horizontal Flanking Antenna Wings -->
      <line x1="0" y1="30" x2="7" y2="30" stroke="#00f0ff" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="0" cy="30" r="1.5" fill="#00f0ff" />
      <line x1="49" y1="30" x2="56" y2="30" stroke="#00f0ff" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="56" cy="30" r="1.5" fill="#00f0ff" />
    </g>

    <!-- Vertical Glowing Cyan Divider -->
    <line x1="92" y1="8" x2="92" y2="52" stroke="#00f0ff" stroke-width="1.5" opacity="0.6" filter="url(#neonGlow)" />

    <!-- Brand Typography -->
    <g transform="translate(108, 0)">
      <text x="0" y="34" font-family="'Orbitron', sans-serif" font-weight="900" font-style="italic" font-size="30">
        <tspan fill="#00f0ff" filter="url(#neonGlow)">IR </tspan>
        <tspan fill="#ffffff" font-family="'Rajdhani', 'Orbitron', sans-serif" font-weight="700">InfoTech</tspan>
      </text>
      <text x="2" y="49" font-family="'Rajdhani', sans-serif" font-weight="700" font-size="9.5" fill="#7dd3fc" letter-spacing="0.32em">
        IDEAS  |  INNOVATION  |  IMPACT
      </text>
    </g>
  </g>

  <!-- HORIZONTAL LASER BEAM & CUT-CORNER BADGE -->
  <line x1="0" y1="123" x2="794" y2="123" stroke="url(#laserBeamGrad)" stroke-width="2" filter="url(#neonGlow)" />

  <!-- Center Chamfered Hexagonal Badge -->
  <g transform="translate(247, 107)">
    <!-- Chamfered Hexagon Path (Cut 45° corners) -->
    <polygon points="16,0 284,0 300,16 300,16 284,32 16,32 0,16 0,16" 
             fill="url(#badgeFill)" 
             stroke="#00f0ff" 
             stroke-width="1.8" 
             filter="url(#neonGlow)" />

    <!-- Inner Hexagon Accent Line -->
    <polygon points="18,3 282,3 296,16 282,29 18,29 4,16" 
             fill="none" 
             stroke="#0284c7" 
             stroke-width="0.8" 
             opacity="0.7" />

    <!-- Corner Cyan Flashes -->
    <circle cx="16" cy="0" r="1.5" fill="#ffffff" />
    <circle cx="284" cy="0" r="1.5" fill="#ffffff" />
    <circle cx="300" cy="16" r="1.5" fill="#ffffff" />
    <circle cx="284" cy="32" r="1.5" fill="#ffffff" />
    <circle cx="16" cy="32" r="1.5" fill="#ffffff" />
    <circle cx="0" cy="16" r="1.5" fill="#ffffff" />

    <!-- Badge Title Text -->
    <text x="150" y="21" 
          text-anchor="middle" 
          font-family="'Orbitron', sans-serif" 
          font-weight="900" 
          font-size="12.5" 
          fill="#ffffff" 
          letter-spacing="0.18em">
      INTERNSHIP OFFER LETTER
    </text>
  </g>
</svg>`;

export const CYBER_HEADER_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(CYBER_HEADER_SVG)}`;

export default function CyberLetterheadHeader({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden select-none ${className}`}>
      <img
        src={CYBER_HEADER_DATA_URI}
        alt="IR InfoTech Official Letterhead Header"
        className="w-full object-cover block pointer-events-none"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  );
}
