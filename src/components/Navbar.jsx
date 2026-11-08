import React, { useState } from 'react';
import { Menu, X, ArrowRight, GraduationCap } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenApply }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'internships', label: 'Internships & Training', badge: 'Apply' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#03070f]/90 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Lockup */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none py-1"
          >
            {/* Official Brand Emblem */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
              <img 
                src="/ir-logo.png" 
                alt="IR InfoTech Emblem" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Clean Vertical Divider */}
            <div className="w-[1.5px] h-9 sm:h-10 bg-gradient-to-b from-transparent via-[#00f0ff]/70 to-transparent shrink-0" />

            {/* Brand Typography & Tagline */}
            <div className="flex flex-col select-none">
              <div className="flex items-baseline font-tech tracking-normal">
                <span className="text-xl sm:text-2xl mr-2 italic font-black text-[#00f0ff]">
                  IR
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  InfoTech
                </span>
              </div>
              
              {/* Glowing Electric Aqua Laser Underline */}
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff] my-0.5" />

              <p className="text-[8px] sm:text-[9.5px] font-sub uppercase font-bold text-slate-300 tracking-[0.2em] whitespace-nowrap">
                IDEAS <span className="text-[#00f0ff] font-semibold px-0.5">|</span> INNOVATION <span className="text-[#00f0ff] font-semibold px-0.5">|</span> IMPACT
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer flex items-center gap-1.5 font-sub ${
                    isActive
                      ? 'text-[#00f0ff]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  
                  {link.badge && (
                    <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-[#00f0ff] text-black">
                      {link.badge}
                    </span>
                  )}

                  {/* Clean Active Underline Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#00f0ff]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Apply Now Primary CTA */}
            <button
              onClick={onOpenApply}
              className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#00f0ff] hover:bg-[#38f8ff] transition-all duration-200 flex items-center gap-2 cursor-pointer font-sub"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenApply}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#00f0ff] text-black uppercase tracking-wider font-sub"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00f0ff]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#03070f] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors font-sub ${
                activePage === link.id
                  ? 'text-[#00f0ff] border-l-2 border-[#00f0ff] pl-3 bg-white/5'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#00f0ff] text-black">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#00f0ff] text-black flex items-center justify-center gap-2 font-sub"
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
