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
      tagline: 'text-[8px] tracking-[0.18em]',
    },
    md: {
      emblem: 'w-11 h-11 sm:w-12 sm:h-12',
      divider: 'h-9 sm:h-10',
      text: 'text-xl sm:text-2xl',
      space: 'mr-2.5',
      tagline: 'text-[9px] sm:text-[10px] tracking-[0.2em]',
    },
    lg: {
      emblem: 'w-16 h-16 sm:w-20 sm:h-20',
      divider: 'h-14 sm:h-16',
      text: 'text-3xl sm:text-4xl',
      space: 'mr-3',
      tagline: 'text-xs tracking-[0.25em]',
    },
    xl: {
      emblem: 'w-24 h-24 sm:w-28 sm:h-28',
      divider: 'h-20 sm:h-24',
      text: 'text-4xl sm:text-5xl lg:text-6xl',
      space: 'mr-3.5',
      tagline: 'text-xs sm:text-sm tracking-[0.3em]',
    }
  }[size] || {
    emblem: 'w-11 h-11',
    divider: 'h-10',
    text: 'text-2xl',
    space: 'mr-2.5',
    tagline: 'text-[10px] tracking-[0.2em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      
      {/* Optional Left Emblem */}
      {withEmblem && (
        <div className={`relative ${sizeClasses.emblem} flex items-center justify-center shrink-0`}>
          <img 
            src="/ir-logo.png" 
            alt="IR InfoTech Emblem" 
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Clean Vertical Cyan Divider */}
      {(withDivider || withEmblem) && (
        <div className={`w-[1.5px] ${sizeClasses.divider} bg-gradient-to-b from-transparent via-[#00f0ff]/70 to-transparent shrink-0`} />
      )}

      {/* Brand Typography & Tagline */}
      <div className="flex flex-col">
        {/* Top: IR InfoTech */}
        <div className="flex items-baseline font-tech tracking-normal">
          {/* IR in Sharp Electric Aqua */}
          <span className={`${sizeClasses.text} ${sizeClasses.space} italic font-black text-[#00f0ff]`}>
            IR
          </span>

          {/* InfoTech in Crisp White */}
          <span className={`${sizeClasses.text} font-black tracking-tight text-white`}>
            InfoTech
          </span>
        </div>

        {/* Glowing Electric Aqua Laser Underline */}
        {showTagline && withUnderline && (
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff] my-1" />
        )}

        {/* Clean Professional Slogan: IDEAS | INNOVATION | IMPACT */}
        {showTagline && (
          <div>
            <p className={`${sizeClasses.tagline} font-sub uppercase font-bold text-slate-300 whitespace-nowrap`}>
              IDEAS <span className="text-[#00f0ff] font-semibold px-1">|</span> INNOVATION <span className="text-[#00f0ff] font-semibold px-1">|</span> IMPACT
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
