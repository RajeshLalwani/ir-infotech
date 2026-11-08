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
      {/* Centerpiece: Orbital Rings with ✨ Symbol in Electric Aqua */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* Outer Orbital Ring 1 (Rotates clockwise) in Electric Aqua */}
        <div 
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-cyan-400/30 border-t-cyan-400 animate-spin" 
          style={{ animationDuration: '2s' }} 
        />

        {/* Outer Orbital Ring 2 (Counter-clockwise with orbital satellite bead) */}
        <div 
          className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-cyan-400/25 animate-spin"
          style={{ animationDuration: '5s', animationDirection: 'reverse' }}
        >
          {/* Orbital Satellite Dots in Electric Aqua */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="absolute bottom-2 right-6 w-2 h-2 rounded-full bg-cyan-400" />
        </div>

        {/* Center Core: Glitter / Sparkles in Pure Electric Aqua */}
        <div className="absolute flex items-center justify-center">
          
          {/* Center Glass Sphere */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-950 border border-[#00f0ff]/40 flex items-center justify-center">
            
            {/* Glitter Sparkles in Pure Electric Aqua */}
            <div className="relative flex items-center justify-center select-none text-[#00f0ff]">
              {/* Primary Electric Aqua Sparkles Icon */}
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#00f0ff] fill-[#00f0ff] filter drop-shadow-[0_0_8px_#00f0ff] animate-pulse" />
              
              {/* Micro Aqua Glitter Points */}
              <span className="absolute -top-2.5 -right-2 text-[10px] text-[#00f0ff] font-bold animate-bounce">✦</span>
              <span className="absolute -bottom-2 -left-2 text-[8px] text-[#00f0ff] animate-ping" style={{ animationDuration: '1.4s' }}>✧</span>
            </div>

          </div>

        </div>

      </div>

      {/* Brand Name & Loading Bar */}
      <div className="text-center space-y-4 z-10">
        <div>
          <BrandLogo size="lg" showTagline={true} />
        </div>

        {/* Progress Bar in Electric Aqua */}
        <div className="w-56 sm:w-64 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/10 p-[1px] mx-auto">
          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
          INITIALIZING SECURE SYSTEMS · {progress}%
        </p>
      </div>

    </div>
  );
}
