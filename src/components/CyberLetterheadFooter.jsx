import React from 'react';

export const CYBER_FOOTER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 794 72" width="794" height="72">
  <defs>
    <linearGradient id="footerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#010815" />
      <stop offset="50%" stop-color="#021427" />
      <stop offset="100%" stop-color="#010815" />
    </linearGradient>

    <linearGradient id="footerLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.2" />
      <stop offset="30%" stop-color="#00f0ff" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#00f0ff" stop-opacity="1" />
      <stop offset="70%" stop-color="#00f0ff" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#00f0ff" stop-opacity="0.2" />
    </linearGradient>

    <filter id="laserGlow" x="-20%" y="-50%" width="140%" height="200%">
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Footer Background -->
  <rect width="794" height="72" fill="url(#footerBg)" />

  <!-- Corner Ambient Tech Waves -->
  <path d="M 0,25 C 80,15 110,65 200,72" fill="none" stroke="#00f0ff" stroke-width="1" opacity="0.2" />
  <path d="M 794,25 C 714,15 684,65 594,72" fill="none" stroke="#00f0ff" stroke-width="1" opacity="0.2" />

  <!-- Top Geometric Chamfered Laser Rail -->
  <polyline points="0,8 60,8 70,2 724,2 734,8 794,8" 
            fill="none" 
            stroke="url(#footerLaserGrad)" 
            stroke-width="2" 
            filter="url(#laserGlow)" />

  <!-- Center Laser Flare Point -->
  <ellipse cx="397" cy="2" rx="45" ry="2" fill="#00f0ff" opacity="0.9" filter="url(#laserGlow)" />
  <circle cx="397" cy="2" r="2" fill="#ffffff" />

  <!-- TIER 1: CONTACT CHANNELS -->
  <g transform="translate(0, 24)">
    <!-- Web -->
    <g transform="translate(100, 0)">
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="#00f0ff" stroke-width="1.2" />
      <line x1="1.5" y1="8" x2="14.5" y2="8" stroke="#00f0ff" stroke-width="1" />
      <ellipse cx="8" cy="8" rx="3.5" ry="6.5" fill="none" stroke="#00f0ff" stroke-width="1" />
      <text x="22" y="11.5" font-family="'Rajdhani', sans-serif" font-weight="700" font-size="11" fill="#ffffff" letter-spacing="0.04em">
        https://ir-infotech-three.vercel.app/
      </text>
    </g>

    <!-- Divider 1 -->
    <line x1="340" y1="2" x2="340" y2="14" stroke="#00f0ff" stroke-width="1" opacity="0.4" />

    <!-- Email -->
    <g transform="translate(356, 0)">
      <rect x="0" y="2" width="15" height="11" rx="1.5" fill="none" stroke="#00f0ff" stroke-width="1.2" />
      <polyline points="0,3 7.5,8.5 15,3" fill="none" stroke="#00f0ff" stroke-width="1.2" />
      <text x="22" y="11.5" font-family="'Rajdhani', sans-serif" font-weight="700" font-size="11" fill="#ffffff" letter-spacing="0.04em">
        info.irinfotech@gmail.com
      </text>
    </g>

    <!-- Divider 2 -->
    <line x1="562" y1="2" x2="562" y2="14" stroke="#00f0ff" stroke-width="1" opacity="0.4" />

    <!-- Phone -->
    <g transform="translate(578, 0)">
      <path d="M 2,1 C 1,1 0,2 0,3 C 0,8.5 4.5,13 10,13 C 11,13 12,12 12,11 L 10,8.5 C 9.5,8 8.8,8 8.4,8.4 L 7.5,9.3 C 5.5,8.2 4.3,7 3.2,5 L 4.1,4.1 C 4.5,3.7 4.5,3 4,2.5 Z" fill="#00f0ff" />
      <text x="20" y="11.5" font-family="'Rajdhani', sans-serif" font-weight="700" font-size="11" fill="#ffffff" letter-spacing="0.04em">
        +91 84889 84951
      </text>
    </g>
  </g>

  <!-- Sub-tier Horizontal Micro Divider -->
  <line x1="60" y1="43" x2="734" y2="43" stroke="#00f0ff" stroke-width="0.75" opacity="0.25" />

  <!-- TIER 2: STATUTORY & LEGAL CREDENTIALS -->
  <g transform="translate(0, 57)">
    <!-- Anand HQ -->
    <g transform="translate(75, 0)">
      <path d="M 5,0 C 2.2,0 0,2.2 0,5 C 0,8.8 5,13 5,13 C 5,13 10,8.8 10,5 C 10,2.2 7.8,0 5,0 Z M 5,6.8 C 4,6.8 3.2,6 3.2,5 C 3.2,4 4,3.2 5,3.2 C 6,3.2 6.8,4 6.8,5 C 6.8,6 6,6.8 5,6.8 Z" fill="#00f0ff" />
      <text x="16" y="9.5" font-family="'Rajdhani', sans-serif" font-weight="600" font-size="10.5" fill="#bae6fd" letter-spacing="0.03em">
        Anand, Gujarat, India
      </text>
    </g>

    <!-- Divider -->
    <line x1="230" y1="2" x2="230" y2="12" stroke="#ffffff" stroke-width="1" opacity="0.15" />

    <!-- Udyam Enterprise -->
    <g transform="translate(250, 0)">
      <path d="M 6,0 L 0,2.5 L 0,6.5 C 0,10.2 2.6,13.6 6,14.5 C 9.4,13.6 12,10.2 12,6.5 L 12,2.5 Z" fill="none" stroke="#00f0ff" stroke-width="1.2" />
      <polyline points="3.5,7 5.5,9 8.5,5" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-linecap="round" />
      <text x="18" y="9.5" font-family="'Rajdhani', sans-serif" font-weight="600" font-size="10.5" fill="#bae6fd" letter-spacing="0.03em">
        Udyam Registered Enterprise
      </text>
    </g>

    <!-- Divider -->
    <line x1="450" y1="2" x2="450" y2="12" stroke="#ffffff" stroke-width="1" opacity="0.15" />

    <!-- Udyam Reg Number -->
    <g transform="translate(470, 0)">
      <text x="0" y="9.5" font-family="'Rajdhani', sans-serif" font-weight="600" font-size="10.5" fill="#bae6fd" letter-spacing="0.03em">
        Udyam Registration No.: <tspan fill="#ffffff" font-family="'JetBrains Mono', monospace" font-weight="700">UDYAM-GJ-03-0089721</tspan>
      </text>
    </g>
  </g>
</svg>`;

export const CYBER_FOOTER_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(CYBER_FOOTER_SVG)}`;

export default function CyberLetterheadFooter({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden select-none ${className}`}>
      <img
        src={CYBER_FOOTER_DATA_URI}
        alt="IR InfoTech Official Letterhead Footer"
        className="w-full object-cover block pointer-events-none"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  );
}
