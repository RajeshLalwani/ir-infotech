import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO, SERVICES, INTERNSHIP_DOMAINS } from '../data/content';

export default function Footer({ setActivePage, onOpenLegal, onOpenVerify, onOpenApply }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000206] border-t border-cyan-400/20 text-slate-400 relative overflow-hidden">
      
      {/* Top Glowing Laser Rim */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent shadow-[0_0_12px_#00f0ff]" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                <img 
                  src="/ir-logo.jpg" 
                  alt="IR InfoTech" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <BrandLogo size="md" showTagline={true} />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Engineering the next dimension of enterprise software, artificial intelligence, and cybersecurity. Providing dual excellence in global technology delivery and student industry-grade training.
            </p>

            {/* Quick Contacts */}
            <div className="space-y-2 pt-2 text-xs">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            {/* Verification, Apply & LinkedIn Pills */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold glass-pill text-cyan-300 hover:bg-cyan-950/60 transition-colors cursor-pointer border border-cyan-400/30 font-sub uppercase tracking-wider"
              >
                <svg className="w-3.5 h-3.5 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.27 1.64 1.64 0 0 0 0 3.27m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <button
                onClick={onOpenVerify}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold glass-pill text-cyan-300 hover:bg-cyan-950/60 transition-colors cursor-pointer border border-cyan-400/30 font-sub uppercase tracking-wider"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verify Credential</span>
              </button>
              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-400 text-black hover:bg-cyan-300 transition-colors cursor-pointer font-sub uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Apply</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <p className="font-tech text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Services & Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Portfolio / Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('internships')} className="hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>Internships & Training</span>
                  <span className="text-[10px] bg-cyan-400 text-black font-extrabold px-1.5 rounded">Apply</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Careers & Openings
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Breakdown */}
          <div className="space-y-3">
            <p className="font-tech text-xs uppercase tracking-widest text-cyan-400 font-bold">
              IT Services
            </p>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => handleNav('services')}
                    className="hover:text-cyan-300 transition-colors text-left cursor-pointer flex items-center gap-1"
                  >
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Internship Domains */}
          <div className="space-y-3">
            <p className="font-tech text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Internship Domains
            </p>
            <ul className="space-y-2 text-xs">
              {INTERNSHIP_DOMAINS.map((domain) => (
                <li key={domain.id}>
                  <button 
                    onClick={() => handleNav('internships')}
                    className="hover:text-cyan-300 transition-colors text-left cursor-pointer flex items-center gap-1"
                  >
                    <span>{domain.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Legal Policies Strip */}
        <div className="pt-8 pb-6 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-slate-400">
            <span className="text-slate-200 font-semibold">Legal & Policies:</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('internship-terms')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Internship Terms
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('refund')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Refund & Cancellation Policy
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Disclaimer
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('cookie')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Cookie Policy
            </button>
          </div>

          {/* System status pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span>All Enterprise Systems Operational · 99.98% SLA</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-cyan-500/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} IR InfoTech. All rights reserved.</p>
          <p className="text-[11px] text-slate-500 text-center md:text-right max-w-md">
            Dedicated to engineering excellence, scalable cloud software, and ethical student workforce development.
          </p>
        </div>

      </div>
    </footer>
  );
}
