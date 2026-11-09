import React from 'react';

export default function OfficialSeal({ className = "w-28 h-28" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm">
        <defs>
          <path
            id="sealOuterTextPath"
            d="M 100, 100 m -76, 0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
          />
          <path
            id="sealInnerTextPath"
            d="M 100, 100 m -56, 0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
          />
          <linearGradient id="sealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#082f49" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>

        {/* Outer Serrated Star / Ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="3,3" />
        <circle cx="100" cy="100" r="91" fill="none" stroke="#0369a1" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#0284c7" strokeWidth="0.75" />

        {/* Circular Curved Outer Text */}
        <text className="text-[10.5px] font-bold tracking-[2.5px] fill-sky-950 uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          <textPath href="#sealOuterTextPath" startOffset="0%">
            ★ IR INFOTECH ★ ANAND, GUJARAT, INDIA ★
          </textPath>
        </text>

        {/* Middle Ring */}
        <circle cx="100" cy="100" r="66" fill="none" stroke="#0369a1" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="63" fill="none" stroke="#0284c7" strokeWidth="0.75" strokeDasharray="2,2" />

        {/* Circular Curved Inner Text */}
        <text className="text-[8px] font-semibold tracking-[1.5px] fill-sky-900 uppercase" style={{ fontFamily: 'sans-serif' }}>
          <textPath href="#sealInnerTextPath" startOffset="0%">
            • UDYAM-GJ-03-0089721 • CORPORATE SEAL •
          </textPath>
        </text>

        {/* Center Badge Core */}
        <circle cx="100" cy="100" r="42" fill="#082f49" stroke="#0284c7" strokeWidth="1.5" />
        
        {/* Center Star & Embellishment */}
        <g transform="translate(100, 100)">
          <polygon points="0,-16 4,-5 16,-5 7,2 10,13 0,7 -10,13 -7,2 -16,-5 -4,-5" fill="#38bdf8" />
          <circle cx="0" cy="0" r="2.5" fill="#082f49" />
          <text y="24" textAnchor="middle" className="text-[7.5px] font-black tracking-wider fill-cyan-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            VERIFIED
          </text>
        </g>
      </svg>
    </div>
  );
}
