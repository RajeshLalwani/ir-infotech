import React from 'react';

export default function BrandLogo({ 
  size = 'md', 
  showTagline = false, 
  withUnderline = true,
  withDivider = false,
  withEmblem = false,
  className = '' 
}) {
  const sizeClasses = {
    sm: {
      emblem: 'w-8 h-8',
      divider: 'h-8',
      text: 'text-lg',
      space: 'mr-2',
      tagline: 'text-[8px] tracking-[0.2em]',
      flare: 'h-[1.5px]',
    },
    md: {
      emblem: 'w-11 h-11 sm:w-12 sm:h-12',
      divider: 'h-10 sm:h-11',
      text: 'text-xl sm:text-2xl',
      space: 'mr-2.5',
      tagline: 'text-[9px] sm:text-[10px] tracking-[0.22em]',
      flare: 'h-[1.5px]',
    },
    lg: {
      emblem: 'w-16 h-16 sm:w-20 sm:h-20',
      divider: 'h-16 sm:h-20',
      text: 'text-3xl sm:text-4xl',
      space: 'mr-3',
      tagline: 'text-xs tracking-[0.3em]',
      flare: 'h-[2px]',
    },
    xl: {
      emblem: 'w-24 h-24 sm:w-32 sm:h-32',
      divider: 'h-24 sm:h-32',
      text: 'text-5xl sm:text-6xl lg:text-7xl',
      space: 'mr-4',
      tagline: 'text-xs sm:text-sm tracking-[0.35em]',
      flare: 'h-[2px]',
    }
  }[size] || {
    emblem: 'w-11 h-11',
    divider: 'h-10',
    text: 'text-2xl',
    space: 'mr-2.5',
    tagline: 'text-[10px] tracking-[0.25em]',
    flare: 'h-[1.5px]',
  };

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-4 select-none ${className}`}>
      
      {/* Optional Left Emblem */}
      {withEmblem && (
        <div className={`relative ${sizeClasses.emblem} flex items-center justify-center shrink-0`}>
          <img 
            src="/ir-logo.png" 
            alt="IR InfoTech Emblem" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]"
          />
        </div>
      )}

      {/* Optional Vertical Cyan Divider (from official brand lockup) */}
      {(withDivider || withEmblem) && (
        <div className={`w-[2px] ${sizeClasses.divider} bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff] shrink-0`} />
      )}

      {/* Brand Typography & Tagline */}
      <div className="flex flex-col">
        {/* Top: IR InfoTech */}
        <div className="flex items-baseline font-tech tracking-normal">
          {/* IR in Vibrant Electric Aqua */}
          <span 
            className={`${sizeClasses.text} ${sizeClasses.space} italic font-black text-[#00f0ff] drop-shadow-[0_0_16px_rgba(0,240,255,0.95)] drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]`}
          >
            IR
          </span>

          {/* InfoTech in Metallic Chrome Silver Gradient */}
          <span 
            className={`${sizeClasses.text} font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]`}
          >
            InfoTech
          </span>
        </div>

        {/* Horizontal Laser Glow Underline with Center Flare */}
        {showTagline && withUnderline && (
          <div className={`relative w-full ${sizeClasses.flare} bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff] my-1`}>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#00f0ff] blur-[0.5px]" />
          </div>
        )}

        {/* Official Slogan: IDEAS | INNOVATION | IMPACT */}
        {showTagline && (
          <div>
            <p className={`${sizeClasses.tagline} font-sub uppercase font-bold text-slate-200 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] whitespace-nowrap`}>
              IDEAS <span className="text-[#00f0ff] font-extrabold px-1">|</span> INNOVATION <span className="text-[#00f0ff] font-extrabold px-1">|</span> IMPACT
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
