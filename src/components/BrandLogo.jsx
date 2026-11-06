import React from 'react';

export default function BrandLogo({ size = 'md', showTagline = false, className = '' }) {
  const sizeClasses = {
    sm: {
      text: 'text-lg',
      space: 'mr-2',
      tagline: 'text-[9px] tracking-[0.25em]',
    },
    md: {
      text: 'text-2xl',
      space: 'mr-2.5',
      tagline: 'text-[11px] tracking-[0.3em]',
    },
    lg: {
      text: 'text-4xl sm:text-5xl',
      space: 'mr-3',
      tagline: 'text-xs sm:text-sm tracking-[0.35em]',
    },
    xl: {
      text: 'text-5xl sm:text-6xl lg:text-7xl',
      space: 'mr-4',
      tagline: 'text-sm sm:text-base tracking-[0.4em]',
    }
  }[size] || {
    text: 'text-2xl',
    space: 'mr-2.5',
    tagline: 'text-[11px] tracking-[0.3em]',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* Brand Typography: "IR InfoTech" with clear space and pure Electric Aqua IR */}
      <div className="flex items-baseline font-tech tracking-normal select-none">
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

      {/* Official Slogan: IDEAS | INNOVATION | IMPACT */}
      {showTagline && (
        <div className="mt-1.5">
          <p className={`${sizeClasses.tagline} font-sub uppercase font-bold text-slate-200 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] tracking-widest`}>
            IDEAS <span className="text-[#00f0ff] font-extrabold px-1">|</span> INNOVATION <span className="text-[#00f0ff] font-extrabold px-1">|</span> IMPACT
          </p>
        </div>
      )}
    </div>
  );
}
