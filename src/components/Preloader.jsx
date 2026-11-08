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

        {/* Center Core: Official IR InfoTech Emblem with Transparent Background */}
        <div className="absolute flex items-center justify-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center select-none animate-pulse" style={{ animationDuration: '3s' }}>
            <img 
              src="/ir-logo.png" 
              alt="IR InfoTech Emblem" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
            />
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
