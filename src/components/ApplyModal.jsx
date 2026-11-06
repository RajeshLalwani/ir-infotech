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
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_0_60px_rgba(0,240,255,0.25)] border border-cyan-400/40 my-6">
        
        {/* Top Rim Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f0ff]" />

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
            className="group block p-4 rounded-2xl glass-card border border-cyan-400/40 hover:border-cyan-400 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform">
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
            className="group block p-4 rounded-2xl glass-card border border-cyan-400/20 hover:border-cyan-400/60 transition-all cursor-pointer"
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

          {/* 3. Direct Email Fallback */}
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
