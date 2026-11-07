import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/918488984951?text=${encodeURIComponent(
    'Hi IR InfoTech, I would like to connect with your team regarding software solutions and training opportunities.'
  )}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
      
      {/* Tooltip on Hover */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/90 border border-emerald-400/50 backdrop-blur-md text-xs font-bold text-slate-100 shadow-[0_0_20px_rgba(16,185,129,0.35)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat on WhatsApp: <span className="text-emerald-400 font-mono">+91 84889 84951</span></span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with IR InfoTech on WhatsApp (+91 84889 84951)"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.7)] hover:shadow-[0_0_35px_rgba(16,185,129,1)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20"
      >
        {/* Pulsing Aura Ping */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />

        {/* WhatsApp Icon */}
        <svg 
          className="relative z-10 w-7 h-7 fill-current drop-shadow-md" 
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/>
        </svg>

        {/* Online Indicator Badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-black"></span>
        </span>
      </a>

    </aside>
  );
}
