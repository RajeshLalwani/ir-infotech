import React from 'react';

export default function OfficialSeal({ className = "w-28 h-28" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm">
        <defs>
          {/* Top text arc */}
          <path
            id="sealTopArc"
            d="M 28,100 A 72,72 0 0,1 172,100"
            fill="none"
          />
          {/* Bottom text arc */}
          <path
            id="sealBottomArc"
            d="M 172,100 A 72,72 0 0,1 28,100"
            fill="none"
          />
        </defs>

        {/* Outer and Inner Concentric Stamp Rings */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#0a2540" strokeWidth="3.5" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#0284c7" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="58" fill="none" stroke="#0284c7" strokeWidth="1.5" />

        {/* Top Text: IR INFOTECH */}
        <text className="text-[14px] font-black tracking-[4.5px] fill-[#0a2540] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <textPath href="#sealTopArc" startOffset="50%" textAnchor="middle">
            IR INFOTECH
          </textPath>
        </text>

        {/* Bottom Text: IR INFOTECH */}
        <text className="text-[14px] font-black tracking-[4.5px] fill-[#0a2540] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <textPath href="#sealBottomArc" startOffset="50%" textAnchor="middle">
            IR INFOTECH
          </textPath>
        </text>

        {/* Side Stars */}
        <g fill="#0284c7">
          {/* Left Star */}
          <polygon points="22,100 24,94 30,94 25,90 27,84 22,88 17,84 19,90 14,94 20,94" transform="translate(0, 10)" />
          {/* Right Star */}
          <polygon points="178,100 180,94 186,94 181,90 183,84 178,88 173,84 175,90 170,94 176,94" transform="translate(0, 10)" />
        </g>

        {/* Decorative inner dotted ring */}
        <circle cx="100" cy="100" r="50" fill="none" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="2,2.5" opacity="0.6" />

        {/* Center Cyber Emblem (Pure Crisp Vector Graphics) */}
        <g id="sealCenterEmblem">
          {/* Top Circuit Traces branching upwards */}
          <line x1="100" y1="81" x2="100" y2="69" stroke="#0a2540" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="68" r="2.4" fill="#0a2540" />

          <line x1="88" y1="81" x2="81" y2="72" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="80" cy="71" r="2" fill="#0284c7" />

          <line x1="112" y1="81" x2="119" y2="72" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="120" cy="71" r="2" fill="#0284c7" />

          {/* Outer Inverted Triangle */}
          <polygon
            points="72,81 128,81 100,128"
            fill="none"
            stroke="#0a2540"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />

          {/* Inner Inverted Triangle */}
          <polygon
            points="80,85 120,85 100,121"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />

          {/* Cyber Eye Emblem (Almond Shape with Iris & Pupil) */}
          <path
            d="M 84,99 C 91,91 109,91 116,99 C 109,107 91,107 84,99 Z"
            fill="none"
            stroke="#0a2540"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Iris Ring */}
          <circle cx="100" cy="99" r="5.5" fill="none" stroke="#0284c7" strokeWidth="1.8" />
          {/* Center Pupil */}
          <circle cx="100" cy="99" r="2.8" fill="#0a2540" />

          {/* Eye Corner Circuit Flanks */}
          <line x1="75" y1="99" x2="83" y2="99" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="74" cy="99" r="1.6" fill="#0284c7" />

          <line x1="117" y1="99" x2="125" y2="99" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="126" cy="99" r="1.6" fill="#0284c7" />

          {/* Lower Center Accent Star */}
          <polygon
            points="100,133 101.5,137 106,137 102.5,139.5 104,143.5 100,141 96 143.5 97.5,139.5 94,137 98.5,137"
            fill="#0284c7"
          />
        </g>
      </svg>
    </div>
  );
}
