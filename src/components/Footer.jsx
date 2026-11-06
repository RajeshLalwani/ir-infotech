import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ArrowUpRight, 
  GraduationCap, 
  CheckCircle2,
  Heart
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, INTERNSHIP_DOMAINS } from '../data/content';

export default function Footer({ setActivePage, onOpenLegal, onOpenVerify, onOpenApply }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060d] border-t border-cyan-500/20 text-slate-400 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                <img 
                  src="/ir-logo.jpg" 
                  alt="IR InfoTech" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <span className="font-tech text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  IR INFOTECH
                </span>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-cyan-400 font-sub">
                  Technology Solutions
                </p>
              </div>
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

            {/* Verification & Apply Pills */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenVerify}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verify Credential ID</span>
              </button>
              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-400 text-black hover:bg-cyan-300 transition-colors cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Apply for Internship</span>
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
                <button onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Services & Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Portfolio / Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('internships')} className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>Internships & Training</span>
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 rounded">Hiring</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Careers & Openings
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">
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
        <div className="pt-8 pb-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-slate-400">
            <span className="text-slate-200 font-semibold">Legal & Policies:</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('internship-terms')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Internship Terms
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('refund')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Refund & Cancellation Policy
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Disclaimer
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => onOpenLegal('cookie')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Cookie Policy
            </button>
          </div>

          {/* System status pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All Enterprise Systems Operational · 99.98% SLA</span>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer notice */}
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} IR InfoTech (IR InfoTech Technology Solutions). All rights reserved.</p>
          <p className="text-[11px] text-slate-500 text-center md:text-right max-w-md">
            Dedicated to engineering excellence, scalable cloud software, and ethical student workforce development.
          </p>
        </div>

      </div>
    </footer>
  );
}
