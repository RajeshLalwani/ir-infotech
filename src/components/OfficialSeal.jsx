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

        {/* Center Emblem */}
        <image
          href="/ir-logo.png"
          x="62"
          y="62"
          width="76"
          height="76"
          preserveAspectRatio="xMidYMid meet"
          style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(1900%) hue-rotate(185deg) brightness(90%) contrast(98%)' }}
        />
      </svg>
    </div>
  );
}
