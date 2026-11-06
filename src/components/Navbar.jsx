import React, { useState } from 'react';
import { Menu, X, ShieldCheck, ArrowRight, GraduationCap } from 'lucide-react';
import BrandLogo from './BrandLogo';

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
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/80 border-b border-[#00f0ff]/20 transition-all">
      
      {/* Top Laser Line in Electric Aqua */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_12px_#00f0ff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand: Transparent logo with zero black box */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img 
                src="/ir-logo.png" 
                alt="IR InfoTech" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,240,255,0.7)] group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_#00f0ff] transition-all duration-300"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></span>
              </span>
            </div>

            <BrandLogo size="md" />
          </button>

          {/* Aesthetic Desktop Navigation: Pure text color glow on active, ZERO background change */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 font-sub group bg-transparent ${
                    isActive
                      ? 'text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.9)]'
                      : 'text-slate-300 hover:text-[#00f0ff] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]'
                  }`}
                >
                  <span>{link.label}</span>
                  
                  {link.badge && (
                    <span className="text-[9px] uppercase font-black px-1.5 py-0.5 rounded-full bg-[#00f0ff] text-black shadow-[0_0_8px_#00f0ff]">
                      {link.badge}
                    </span>
                  )}

                  {/* Aesthetic Active Underline (No background change, just a glowing laser beam indicator) */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />
                  )}
                  
                  {/* Subtle hover laser bar */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/60 to-transparent transition-all duration-300" />
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
              className="px-3.5 py-2 text-xs font-bold font-sub uppercase tracking-wider rounded-xl border border-[#00f0ff]/30 text-[#00f0ff] glass-pill hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]"
              title="Verify Student Internship Certificate"
            >
              <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
              <span>Verify Certificate</span>
            </button>

            {/* Apply Now Primary CTA in Electric Aqua */}
            <button
              onClick={onOpenApply}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#00f0ff] hover:bg-white shadow-[0_0_25px_rgba(0,240,255,0.7)] hover:shadow-[0_0_35px_rgba(0,240,255,1)] transition-all duration-300 flex items-center gap-2 cursor-pointer font-sub"
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
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#00f0ff] text-black uppercase tracking-wider font-sub shadow-[0_0_10px_#00f0ff]"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white glass-pill"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00f0ff]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Clean, transparent background on active link, just glowing aqua text) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-[#00f0ff]/25 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors font-sub bg-transparent ${
                activePage === link.id
                  ? 'text-[#00f0ff] drop-shadow-[0_0_10px_#00f0ff] border-l-2 border-[#00f0ff] pl-3'
                  : 'text-slate-300 hover:text-[#00f0ff]'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#00f0ff] text-black shadow-[0_0_6px_#00f0ff]">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-4 border-t border-[#00f0ff]/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerify();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold font-sub uppercase tracking-wider rounded-xl border border-[#00f0ff]/30 text-[#00f0ff] glass-pill flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
              <span>Verify Certificate</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#00f0ff] text-black flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.7)] font-sub"
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
