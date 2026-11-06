import React from 'react';

export default function BrandLogo({ size = 'md', showTagline = false, className = '' }) {
  const sizeClasses = {
    sm: {
      text: 'text-lg',
      tagline: 'text-[8px] tracking-[0.25em]',
    },
    md: {
      text: 'text-2xl',
      tagline: 'text-[10px] tracking-[0.3em]',
    },
    lg: {
      text: 'text-4xl sm:text-5xl',
      tagline: 'text-xs sm:text-sm tracking-[0.35em]',
    },
    xl: {
      text: 'text-5xl sm:text-6xl lg:text-7xl',
      tagline: 'text-sm sm:text-base tracking-[0.4em]',
    }
  }[size] || {
    text: 'text-2xl',
    tagline: 'text-[10px] tracking-[0.3em]',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* IR InfoTech Brand Typography */}
      <div className="flex items-baseline tracking-normal font-tech">
        {/* IR in Italic Neon Cyan Gradient */}
        <span className={`${sizeClasses.text} italic font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 drop-shadow-[0_0_20px_rgba(0,240,255,0.85)] pr-1`}>
          IR
        </span>
        {/* InfoTech in Metallic Chrome Silver Gradient */}
        <span className={`${sizeClasses.text} font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]`}>
          InfoTech
        </span>
      </div>

      {/* Official Slogan: IDEAS | INNOVATION | IMPACT */}
      {showTagline && (
        <div className="mt-1">
          <p className={`${sizeClasses.tagline} font-sub uppercase font-bold text-slate-200 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]`}>
            IDEAS <span className="text-cyan-400 font-extrabold px-1">|</span> INNOVATION <span className="text-cyan-400 font-extrabold px-1">|</span> IMPACT
          </p>
        </div>
      )}
    </div>
  );
}
