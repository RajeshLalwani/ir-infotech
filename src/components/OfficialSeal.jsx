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
        <circle cx="100" cy="100" r="95" fill="none" stroke="#082f49" strokeWidth="3" />
        <circle cx="100" cy="100" r="87" fill="none" stroke="#0369a1" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="58" fill="none" stroke="#0369a1" strokeWidth="1.5" />

        {/* Top Text: IR INFOTECH */}
        <text className="text-[13.5px] font-black tracking-[4px] fill-[#082f49] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <textPath href="#sealTopArc" startOffset="50%" textAnchor="middle">
            IR INFOTECH
          </textPath>
        </text>

        {/* Bottom Text: IR INFOTECH */}
        <text className="text-[13.5px] font-black tracking-[4px] fill-[#082f49] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
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
        <circle cx="100" cy="100" r="50" fill="none" stroke="#0369a1" strokeWidth="0.75" strokeDasharray="2,2.5" opacity="0.7" />

        {/* Center Cyber Emblem (Pure Crisp Vector Graphics) */}
        <g id="sealCenterEmblem">
          {/* Top Circuit Traces branching upwards */}
          <line x1="100" y1="81" x2="100" y2="70" stroke="#082f49" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="100" cy="69" r="2.2" fill="#082f49" />

          <line x1="88" y1="81" x2="81" y2="73" stroke="#0369a1" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="80" cy="72" r="1.8" fill="#0369a1" />

          <line x1="112" y1="81" x2="119" y2="73" stroke="#0369a1" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="120" cy="72" r="1.8" fill="#0369a1" />

          {/* Outer Inverted Triangle */}
          <polygon
            points="73,81 127,81 100,127"
            fill="none"
            stroke="#082f49"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner Inverted Triangle */}
          <polygon
            points="81,85 119,85 100,120"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Cyber Eye Emblem (Almond Shape with Iris & Pupil) */}
          <path
            d="M 85,99 C 91,91 109,91 115,99 C 109,107 91,107 85,99 Z"
            fill="none"
            stroke="#082f49"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Iris Ring */}
          <circle cx="100" cy="99" r="5" fill="none" stroke="#0284c7" strokeWidth="1.6" />
          {/* Center Pupil */}
          <circle cx="100" cy="99" r="2.6" fill="#082f49" />

          {/* Eye Corner Circuit Flanks */}
          <line x1="77" y1="99" x2="84" y2="99" stroke="#0369a1" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="76" cy="99" r="1.5" fill="#0369a1" />

          <line x1="116" y1="99" x2="123" y2="99" stroke="#0369a1" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="124" cy="99" r="1.5" fill="#0369a1" />

          {/* Lower Center Accent Star */}
          <polygon
            points="100,132 101.3,135.5 105,135.5 102,137.5 103.2,141 100,139 96.8,141 98,137.5 95,135.5 98.7,135.5"
            fill="#0284c7"
          />
        </g>
      </svg>
    </div>
  );
}
