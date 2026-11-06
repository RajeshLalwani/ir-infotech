import React, { useEffect, useState } from 'react';
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
      {/* Ambient Radial Aura in Electric Aqua */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#00f0ff]/10 blur-[150px] pointer-events-none animate-pulse" />

      {/* Centerpiece: Orbital Rings with ✨ Symbol in Electric Aqua */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* Outer Orbital Ring 1 (Rotates clockwise) in Electric Aqua */}
        <div 
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-[#00f0ff]/25 border-t-[#00f0ff] border-r-[#00f0ff]/80 animate-spin shadow-[0_0_30px_rgba(0,240,255,0.45)]" 
          style={{ animationDuration: '2.5s' }} 
        />

        {/* Outer Orbital Ring 2 (Counter-clockwise with orbital satellite bead) */}
        <div 
          className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-[#00f0ff]/35 animate-spin"
          style={{ animationDuration: '6s', animationDirection: 'reverse' }}
        >
          {/* Orbital Satellite Dots in Electric Aqua */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]" />
          <span className="absolute bottom-2 right-6 w-2.5 h-2.5 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />
        </div>

        {/* Elliptical Atomic Orbit Ring (Like the logo) */}
        <div 
          className="absolute w-52 sm:w-60 h-20 rounded-[100%] border border-[#00f0ff]/45 shadow-[0_0_20px_rgba(0,240,255,0.35)] animate-spin"
          style={{ transform: 'rotate(25deg)', animationDuration: '7s' }}
        />

        {/* Center Core: Literal ✨ Symbol in Electric Aqua */}
        <div className="absolute flex items-center justify-center">
          
          {/* Pulsing Core Aura */}
          <div className="w-24 h-24 rounded-full bg-[#00f0ff]/20 blur-md animate-ping" style={{ animationDuration: '2s' }} />
          
          {/* Center Glass Sphere */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/90 border border-[#00f0ff]/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.85)]">
            
            {/* ✨ Symbol in pure Electric Aqua */}
            <div className="relative flex items-center justify-center select-none">
              <span className="text-3xl sm:text-4xl text-[#00f0ff] drop-shadow-[0_0_20px_#00f0ff] animate-pulse">
                ✨
              </span>
              
              {/* Micro sparkles floating around */}
              <span className="absolute -top-3 -right-2 text-xs text-white animate-bounce">✦</span>
              <span className="absolute -bottom-2 -left-2 text-[10px] text-[#00f0ff] animate-ping" style={{ animationDuration: '1.2s' }}>✧</span>
              <span className="absolute top-1 -left-3 text-[11px] text-[#00f0ff] animate-pulse">★</span>
            </div>

          </div>

        </div>

      </div>

      {/* Brand Name & Loading Bar */}
      <div className="text-center space-y-4 z-10">
        <div>
          <BrandLogo size="lg" showTagline={true} />
        </div>

        {/* Glowing Progress Bar in Electric Aqua */}
        <div className="w-56 sm:w-64 h-1.5 bg-[#001018] rounded-full overflow-hidden border border-[#00f0ff]/40 p-[1px] mx-auto">
          <div
            className="h-full bg-gradient-to-r from-[#00f0ff] via-white to-[#00f0ff] rounded-full transition-all duration-200 shadow-[0_0_15px_#00f0ff]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase">
          INITIALIZING SECURE SYSTEMS · {progress}%
        </p>
      </div>

    </div>
  );
}
