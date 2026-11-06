import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(15);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 600);
          }, 300);
          return 100;
        }
        const jump = Math.floor(Math.random() * 20) + 12;
        return Math.min(100, prev + jump);
      });
    }, 180);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow in logo cyan */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none animate-pulse" />

      {/* Centerpiece: Orbital Ring with Center Glitter in Logo Color */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* Outer Orbital Ring 1 (Rotates clockwise) */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 border-r-cyan-400/60 animate-spin shadow-[0_0_25px_rgba(0,240,255,0.35)]" style={{ animationDuration: '2.5s' }} />

        {/* Outer Orbital Ring 2 (Counter-clockwise with orbital bead) */}
        <div 
          className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-cyan-400/30 animate-spin"
          style={{ animationDuration: '6s', animationDirection: 'reverse' }}
        >
          {/* Orbital Satellite Dot in Electric Cyan */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#00f0ff]" />
          <span className="absolute bottom-2 right-6 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
        </div>

        {/* Elliptical Atomic Orbit Ring (Like the logo) */}
        <div 
          className="absolute w-48 sm:w-56 h-20 rounded-[100%] border border-cyan-400/40 shadow-[0_0_18px_rgba(0,240,255,0.3)] animate-spin"
          style={{ transform: 'rotate(25deg)', animationDuration: '8s' }}
        />

        {/* Center Glitter / Shimmer Sparkle Core in Logo Cyan Color */}
        <div className="absolute flex items-center justify-center">
          
          {/* Pulsing Core Aura */}
          <div className="w-20 h-20 rounded-full bg-cyan-400/20 blur-md animate-ping" style={{ animationDuration: '2s' }} />
          
          {/* Radiant Glass Core */}
          <div className="absolute w-16 h-16 rounded-full bg-black/90 border border-cyan-300/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.7)]">
            
            {/* Glitter Icon with Multi-Sparkle Animation */}
            <div className="relative flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-cyan-300 animate-pulse drop-shadow-[0_0_15px_#00f0ff]" />
              
              {/* Micro Glitters floating around */}
              <span className="absolute -top-2 -right-2 text-xs text-white animate-bounce">✦</span>
              <span className="absolute -bottom-2 -left-2 text-[10px] text-cyan-200 animate-ping" style={{ animationDuration: '1.5s' }}>✧</span>
              <span className="absolute top-2 -left-3 text-[11px] text-cyan-400 animate-pulse">★</span>
            </div>

          </div>

        </div>

      </div>

      {/* Brand Name & Loading Bar */}
      <div className="text-center space-y-3 z-10">
        <div>
          <BrandLogo size="lg" showTagline={true} />
        </div>

        {/* Glowing Progress Bar */}
        <div className="w-56 sm:w-64 h-1.5 bg-[#071325] rounded-full overflow-hidden border border-cyan-500/30 p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 rounded-full transition-all duration-200 shadow-[0_0_12px_#00f0ff]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
          INITIALIZING SECURE SYSTEMS · {progress}%
        </p>
      </div>

    </div>
  );
}
