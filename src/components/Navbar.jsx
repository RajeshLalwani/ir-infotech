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
      badge: 'Hiring' 
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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050811]/90 border-b border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all duration-300">
                <img 
                  src="/ir-logo.jpg" 
                  alt="IR InfoTech Logo" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-tech text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  IR INFOTECH
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-cyan-400/80 font-sub">
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
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black shadow-[0_0_8px_rgba(0,240,255,0.6)] animate-pulse">
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
              className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-cyan-500/25 text-cyan-300 bg-cyan-950/20 hover:bg-cyan-900/30 hover:border-cyan-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.1)]"
              title="Verify Student Internship Certificate"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Verify Certificate</span>
            </button>

            {/* Apply Now Primary CTA */}
            <button
              onClick={onOpenApply}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all duration-300 flex items-center gap-2 cursor-pointer font-sub"
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
              className="px-3 py-1.5 text-xs font-bold rounded-md bg-cyan-400 text-black uppercase tracking-wider"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070d1c] border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                activePage === link.id
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-400 text-black">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerify();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg border border-cyan-500/30 text-cyan-300 bg-cyan-950/20 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Verify Certificate</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-lg bg-cyan-400 text-black flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply for Internship / Jobs</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
