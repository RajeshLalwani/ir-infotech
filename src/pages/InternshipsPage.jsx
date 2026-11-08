import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Award, 
  ChevronDown, 
  HelpCircle,
  Laptop,
  Users,
  ExternalLink,
  FileSpreadsheet
} from 'lucide-react';
import { COMPANY_INFO, INTERNSHIP_DOMAINS, INTERNSHIP_FAQS } from '../data/content';

export default function InternshipsPage({ onOpenApply }) {
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    { num: "01", title: "Fill Google Form", desc: "Submit your basic details and domain choice in our 2-minute Google Form or via LinkedIn." },
    { num: "02", title: "Technical Alignment", desc: "A short 15-minute discovery call to evaluate your current baseline and assign mentor." },
    { num: "03", title: "Offer Letter & Induction", desc: "Receive your official Offer Letter, cloud repository access, and project orientation." },
    { num: "04", title: "Live Sprints & Certification", desc: "Build real production modules, attend mentor reviews, and receive a verified QR certificate." },
  ];

  return (
    <div className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-pill border border-cyan-400/40 text-cyan-300 text-xs font-semibold">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <span>Talent Incubator & Corporate Training Hub</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Paid Internships & <br />
          <span className="text-cyan-400">Corporate Tech Training</span>
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Step beyond classroom theory. Write real-world production code on live enterprise projects, learn from senior software architects, and earn a digitally verifiable credential.
        </p>

        <div className="pt-2 flex justify-center">
          <a
            href={COMPANY_INFO.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Apply via Google Form</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 2. Key Pillars Strip in Glassmorphism */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Live Client Projects", desc: "No dummy todo apps. Real APIs & systems.", icon: Laptop },
          { label: "1-on-1 Mentor Standups", desc: "Direct weekly code reviews from tech leads.", icon: Users },
          { label: "Performance Stipend", desc: "Stipend for qualified production contributors.", icon: Award },
          { label: "Verifiable Credential", desc: "Tamper-proof online credential with QR code.", icon: ShieldCheck },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="glass-card rounded-2xl p-5 space-y-2 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/50 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">{item.label}</h4>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          );
        })}
      </section>

      {/* 3. Available Internship Domains */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            Choose Your Track
          </span>
          <h2 className="font-tech text-3xl font-extrabold text-white">
            Available Internship & Training Domains
          </h2>
          <p className="text-sm text-slate-400">
            Curated curriculum aligned with current hiring standards across top tech firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNSHIP_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="glass-card rounded-2xl p-6 hover:border-cyan-400 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full glass-pill border border-cyan-400/40 text-cyan-300">
                    {domain.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{domain.duration}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {domain.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider font-sub">Curriculum Highlights:</p>
                  {domain.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Prerequisites */}
                <div className="glass-panel p-2.5 rounded-xl border border-cyan-500/20 text-[11px] text-slate-400 mb-4">
                  <strong className="text-slate-200">Prerequisites:</strong> {domain.prerequisites}
                </div>
              </div>

              <div className="pt-3 border-t border-cyan-500/20">
                <button
                  onClick={onOpenApply}
                  className="w-full py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer font-sub shadow-md"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Durations, Eligibility & Stipend Info */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Track Durations */}
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4 border border-cyan-400/30">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/50 flex items-center justify-center text-cyan-400">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="font-tech text-xl font-bold text-white">Track Durations</h3>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="glass-panel p-2.5 rounded-xl">
              <strong className="text-cyan-400">1 Month Track:</strong> Fast-track crash foundation & deployment.
            </li>
            <li className="glass-panel p-2.5 rounded-xl">
              <strong className="text-cyan-400">2 Months Track:</strong> Standard full-cycle project track with live APIs.
            </li>
            <li className="glass-panel p-2.5 rounded-xl">
              <strong className="text-cyan-400">3 to 6 Months:</strong> Advanced capstone & placement assistance track.
            </li>
          </ul>
        </div>

        {/* Eligibility Criteria */}
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4 border border-cyan-400/30">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/50 flex items-center justify-center text-cyan-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="font-tech text-xl font-bold text-white">Eligibility Criteria</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>B.Tech, BE, BCA, MCA, B.Sc (IT/CS), or Diploma students.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Recent tech graduates wanting real industry projects.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Self-taught coders with passion and problem-solving skills.</span>
            </li>
          </ul>
        </div>

        {/* Transparent Policy */}
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4 border border-cyan-400/30">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/50 flex items-center justify-center text-cyan-400">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-tech text-xl font-bold text-white">Stipend & Certification</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Eligible contributors working on client production sprints receive a performance stipend. Every candidate who completes capstone milestones receives an official verifiable credential.
          </p>
        </div>

      </section>

      {/* 5. Application Procedure Roadmap */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            The Roadmap
          </span>
          <h2 className="font-tech text-3xl font-extrabold text-white">
            Simple 4-Step Application
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 relative border border-cyan-400/20">
              <span className="font-tech text-2xl font-black text-cyan-400/50">{s.num}</span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">{s.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQs Accordion */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            Got Questions?
          </span>
          <h2 className="font-tech text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {INTERNSHIP_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden transition-all border border-cyan-400/20"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-white font-bold text-sm cursor-pointer hover:text-cyan-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-cyan-500/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Bottom Apply CTA */}
      <section className="text-center rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 space-y-4 shadow-xl">
        <h3 className="font-tech text-2xl font-bold text-white">
          Ready to Elevate Your Engineering Profile?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Cohort seats are limited to ensure 1-on-1 mentor attention. Submit your application today.
        </p>
        <a
          href={COMPANY_INFO.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 rounded-2xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 font-sub shadow-md cursor-pointer"
        >
          Apply via Google Form Now
        </a>
      </section>

    </div>
  );
}
