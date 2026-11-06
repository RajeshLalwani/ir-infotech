import React, { useState } from 'react';
import { Menu, X, ShieldCheck, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenApply, onOpenVerify }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { 
      id: 'internships', 
      label: 'Internships & Training', 
      badge: 'Apply' 
    },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#000308]/80 border-b border-cyan-400/20">
      
      {/* Top Laser Glow Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_10px_#00f0ff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(0,240,255,0.5)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all duration-300">
                <img 
                  src="/ir-logo.jpg" 
                  alt="IR InfoTech Logo" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300 shadow-[0_0_8px_#00f0ff]"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-tech text-xl font-extrabold tracking-wider text-white group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]">
                  IR INFOTECH
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-cyan-400 font-sub">
                Technology Solutions
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-sub ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-400/10 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-cyan-950/30'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded-full bg-cyan-400 text-black shadow-[0_0_8px_#00f0ff]">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Verify Certificate Quick Trigger */}
            <button
              onClick={onOpenVerify}
              className="px-3.5 py-2 text-xs font-bold font-sub uppercase tracking-wider rounded-xl border border-cyan-400/30 text-cyan-300 glass-pill hover:bg-cyan-950/60 hover:border-cyan-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.15)]"
              title="Verify Student Internship Certificate"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Verify Certificate</span>
            </button>

            {/* Apply Now Primary CTA */}
            <button
              onClick={onOpenApply}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:shadow-[0_0_35px_rgba(0,240,255,0.9)] transition-all duration-300 flex items-center gap-2 cursor-pointer font-sub"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenApply}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-cyan-400 text-black uppercase tracking-wider font-sub shadow-[0_0_10px_#00f0ff]"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white glass-pill"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000511]/95 backdrop-blur-2xl border-b border-cyan-400/25 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors font-sub ${
                activePage === link.id
                  ? 'bg-cyan-400/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'text-slate-300 hover:bg-cyan-950/20'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-400 text-black shadow-[0_0_6px_#00f0ff]">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-4 border-t border-cyan-500/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerify();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold font-sub uppercase tracking-wider rounded-xl border border-cyan-400/30 text-cyan-300 glass-pill flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Verify Certificate</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-cyan-400 text-black flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.6)] font-sub"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply for Internship</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
