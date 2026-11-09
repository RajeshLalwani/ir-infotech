import React from 'react';

export const OFFICIAL_SEAL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <path id="sealTopArc" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
    <path id="sealBottomArc" d="M 30,100 A 70,70 0 0,0 170,100" fill="none" />
  </defs>
  <!-- Concentric Outer Rings -->
  <circle cx="100" cy="100" r="95" fill="none" stroke="#0d2858" stroke-width="3.5" />
  <circle cx="100" cy="100" r="87" fill="none" stroke="#1a4480" stroke-width="1.2" />
  <circle cx="100" cy="100" r="57" fill="none" stroke="#0d2858" stroke-width="1.5" />

  <!-- Arched Typography -->
  <text fill="#0d2858" font-size="14.5" font-weight="900" letter-spacing="4" font-family="'Orbitron', 'Rajdhani', -apple-system, sans-serif">
    <textPath href="#sealTopArc" startOffset="50%" text-anchor="middle">IR INFOTECH</textPath>
  </text>
  <text fill="#0d2858" font-size="14.5" font-weight="900" letter-spacing="4" font-family="'Orbitron', 'Rajdhani', -apple-system, sans-serif">
    <textPath href="#sealBottomArc" startOffset="50%" text-anchor="middle">IR INFOTECH</textPath>
  </text>

  <!-- Flanking 5-Pointed Stars -->
  <polygon points="21,100 23,94 29,94 24,90 26,84 21,88 16,84 18,90 13,94 19,94" transform="translate(0, 10)" fill="#0d2858" />
  <polygon points="179,100 181,94 187,94 182,90 184,84 179,88 174,84 176,90 171,94 177,94" transform="translate(0, 10)" fill="#0d2858" />

  <!-- Inverted Triangle Cyber Eye Emblem -->
  <g>
    <!-- Top 3 Antenna Pins -->
    <line x1="100" y1="81" x2="100" y2="69" stroke="#0d2858" stroke-width="2" stroke-linecap="round" />
    <circle cx="100" cy="68" r="2.5" fill="#0d2858" />
    <line x1="88" y1="81" x2="80" y2="72" stroke="#1a4480" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="79" cy="71" r="2" fill="#1a4480" />
    <line x1="112" y1="81" x2="120" y2="72" stroke="#1a4480" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="121" cy="71" r="2" fill="#1a4480" />

    <!-- Inverted Triangles -->
    <polygon points="69,81 131,81 100,129" fill="none" stroke="#0d2858" stroke-width="2.8" stroke-linejoin="round" />
    <polygon points="77,85 123,85 100,122" fill="none" stroke="#1a4480" stroke-width="1.2" stroke-linejoin="round" />

    <!-- Cyber Eye Contour -->
    <path d="M 83,99 C 90,90 110,90 117,99 C 110,108 90,108 83,99 Z" fill="none" stroke="#0d2858" stroke-width="2.2" stroke-linejoin="round" />
    <circle cx="100" cy="99" r="5.5" fill="none" stroke="#1a4480" stroke-width="1.8" />
    <circle cx="100" cy="99" r="2.8" fill="#0d2858" />

    <!-- Horizontal Antenna Wings -->
    <line x1="73" y1="99" x2="82" y2="99" stroke="#1a4480" stroke-width="1.6" stroke-linecap="round" />
    <circle cx="72" cy="99" r="1.6" fill="#1a4480" />
    <line x1="118" y1="99" x2="127" y2="99" stroke="#1a4480" stroke-width="1.6" stroke-linecap="round" />
    <circle cx="128" cy="99" r="1.6" fill="#1a4480" />

    <!-- Bottom Accent Star -->
    <polygon points="100,134 101.5,138 106,138 102.5,140.5 104,144.5 100,142 96,144.5 97.5,140.5 94,138 98.5,138" fill="#0d2858" />
  </g>
</svg>`;

export const OFFICIAL_SEAL_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(OFFICIAL_SEAL_SVG)}`;

export default function OfficialSeal({ className = "w-28 h-28" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <img
        src={OFFICIAL_SEAL_DATA_URI}
        alt="IR InfoTech Official Seal"
        className="w-full h-full object-contain block pointer-events-none drop-shadow-sm"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
