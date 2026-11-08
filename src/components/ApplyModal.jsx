import React from 'react';
import { X, ExternalLink, FileSpreadsheet, Mail, Sparkles, GraduationCap, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function ApplyModal({ isOpen, onClose, initialTab = 'internship' }) {
  if (!isOpen) return null;

  // Customizable Google Form & LinkedIn links
  const GOOGLE_FORM_URL = "https://forms.google.com"; // Replace with your actual Google Form URL
  const LINKEDIN_URL = COMPANY_INFO.linkedin;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10 my-6">
        
        {/* Top Rim Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-cyan-950/40 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Fast-Track Application</span>
          </div>

          <h3 className="font-tech text-2xl font-black text-white">
            Apply For Internship & Careers
          </h3>

          <p className="text-xs text-slate-300 max-w-sm mx-auto">
            Hamara application process simplified hai. Direct Google Form ya LinkedIn ke through apply karein.
          </p>
        </div>

        {/* Direct Action Cards */}
        <div className="space-y-3.5 pt-1">
          
          {/* 1. Google Form Option (Recommended) */}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                  <FileSpreadsheet className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Official Google Form
                    </h4>
                    <span className="text-[10px] bg-cyan-400 text-black font-extrabold px-1.5 py-0.5 rounded uppercase font-sub">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Fill the quick 2-minute internship registration form
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          {/* 2. LinkedIn Option with custom crisp SVG */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#001428] border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.27 1.64 1.64 0 0 0 0 3.27m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Apply via LinkedIn
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    View active internship cohort posts & lateral job openings
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          {/* 3. Direct WhatsApp Desk */}
          <a
            href={`https://wa.me/918488984951?text=${encodeURIComponent('Hi IR InfoTech, I want to apply for the internship program.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-2xl glass-card border border-emerald-400/20 hover:border-emerald-400/50 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-400/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Direct WhatsApp Desk
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Connect instantly on +91 84889 84951
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          {/* 4. Direct Email Fallback */}
          <a
            href={`mailto:${COMPANY_INFO.internshipsEmail}?subject=Application for IR InfoTech Internship`}
            className="group block p-4 rounded-2xl glass-card border border-cyan-400/20 hover:border-cyan-400/60 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#001428] border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Send Resume via Email
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {COMPANY_INFO.internshipsEmail}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

        </div>

        {/* Bottom Note */}
        <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Response within 24 hours</span>
          </span>
          <button
            onClick={onClose}
            className="text-cyan-300 hover:text-white font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
