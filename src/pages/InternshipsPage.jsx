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
  FileText,
  DollarSign,
  Laptop,
  Users
} from 'lucide-react';
import { INTERNSHIP_DOMAINS, INTERNSHIP_FAQS } from '../data/content';

export default function InternshipsPage({ onOpenApply, onOpenVerify }) {
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    { num: "01", title: "Online Application", desc: "Submit your details, domain preference, and portfolio/GitHub profile using our online form." },
    { num: "02", title: "Technical Alignment", desc: "A brief 15-minute technical discovery call or code challenge to understand your current baseline." },
    { num: "03", title: "Offer Letter & Kit", desc: "Receive your official Offer Letter, orientation schedule, and access to cloud repos and Discord." },
    { num: "04", title: "Live Sprints & Certification", desc: "Build live production modules with weekly mentor code reviews, culminating in a verifiable certificate." },
  ];

  return (
    <div className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <span>Talent Incubator & Corporate Training Hub</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Paid Internships & <br />
          <span className="text-cyan-400 glow-text">Corporate Tech Training</span>
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Step beyond classroom theory. Write real-world production code on live enterprise projects, learn from senior software architects, and earn a digitally verifiable credential.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Apply For Internship Cohort</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenVerify}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-cyan-300 border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Verify Existing Certificate</span>
          </button>
        </div>
      </section>

      {/* 2. Key Pillars Strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Live Client Projects", desc: "No dummy todo apps. Real APIs & systems.", icon: Laptop },
          { label: "1-on-1 Mentor Standups", desc: "Direct weekly code reviews from tech leads.", icon: Users },
          { label: "Performance Stipend", desc: "Stipend for qualified production contributors.", icon: Award },
          { label: "Verifiable Credential", desc: "Tamper-proof online credential with QR code.", icon: ShieldCheck },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-[#091122] border border-cyan-500/20 rounded-2xl p-5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
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
            Curated curriculum aligned with current 2026 hiring standards across top tech firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNSHIP_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="bg-[#091021] border border-cyan-500/25 rounded-2xl p-6 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300">
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
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-400 mb-4">
                  <strong className="text-slate-200">Prerequisites:</strong> {domain.prerequisites}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={onOpenApply}
                  className="w-full py-2.5 rounded-lg bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer font-sub shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                >
                  <span>Apply for this Domain</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Durations, Eligibility & Transparent Fees */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Track Durations */}
        <div className="rounded-2xl bg-[#091122] border border-cyan-500/25 p-6 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="font-tech text-xl font-bold text-white">Track Durations</h3>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <strong className="text-cyan-400">1 Month Track:</strong> Intensive foundation, core Git workflows, and mini live project deployment.
            </li>
            <li className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <strong className="text-cyan-400">2 Months Track:</strong> Standard full-cycle project track with live database & API integration.
            </li>
            <li className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <strong className="text-cyan-400">3 to 6 Months:</strong> Advanced industry capstone, performance stipend eligibility, and placement referrals.
            </li>
          </ul>
        </div>

        {/* Eligibility Criteria */}
        <div className="rounded-2xl bg-[#091122] border border-cyan-500/25 p-6 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="font-tech text-xl font-bold text-white">Eligibility Criteria</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Students pursuing B.Tech, BE, BCA, MCA, B.Sc (IT/CS), or Diploma.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Recent tech graduates seeking practical portfolio building.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Self-taught coders with passion and foundational problem-solving skills.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Basic knowledge of at least one programming language (C++, Python, JS, Java).</span>
            </li>
          </ul>
        </div>

        {/* Fees & Payment Policy */}
        <div className="rounded-2xl bg-[#091122] border border-cyan-500/25 p-6 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="font-tech text-xl font-bold text-white">Fees & Stipend Policy</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            IR InfoTech operates a dual-model:
          </p>
          <div className="space-y-2 text-xs">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <p className="font-semibold text-emerald-400">Performance Stipend:</p>
              <p className="text-[11px] text-slate-400">Allocated to candidates contributing directly to client modules after clearing initial technical assessment.</p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <p className="font-semibold text-cyan-300">Subsidized Training Fee:</p>
              <p className="text-[11px] text-slate-400">For beginner batches requiring intensive mentor guidance, cloud lab servers, and verified credentials.</p>
            </div>
          </div>
        </div>

      </section>

      {/* 5. Application Procedure Roadmap */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            The Roadmap
          </span>
          <h2 className="font-tech text-3xl font-extrabold text-white">
            Application & Selection Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#091122] border border-cyan-500/20 rounded-2xl p-6 relative">
              <span className="font-tech text-2xl font-black text-cyan-400/40">{s.num}</span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">{s.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Certificate Verification Feature Showcase */}
      <section className="rounded-3xl bg-gradient-to-r from-[#0a162e] via-[#071124] to-[#040813] border-2 border-cyan-500/40 p-8 sm:p-12 shadow-[0_0_40px_rgba(0,240,255,0.2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
              Credential Integrity
            </span>
            <h2 className="font-tech text-3xl font-extrabold text-white">
              Every Intern Receives a Verifiable Digital Certificate
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Employers can independently verify your IR InfoTech credential online using your unique Certificate ID and QR code. No fake claims, no paper ambiguity.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Unique Cryptographic Credential ID (e.g. IR-2026-AI-892)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Official Letter of Recommendation (LOR) for high performers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Permanent hosting in the IR InfoTech Public Registry</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenVerify}
                className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all font-sub cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Test Certificate Verification Tool</span>
              </button>
            </div>
          </div>

          {/* Certificate Mockup Preview */}
          <div className="lg:col-span-5 bg-[#050a18] border border-cyan-400/40 rounded-2xl p-6 space-y-4 shadow-[0_0_30px_rgba(0,240,255,0.15)] text-center">
            <div className="w-12 h-12 mx-auto rounded-lg overflow-hidden p-0.5 bg-gradient-to-br from-cyan-400 to-blue-600">
              <img src="/ir-logo.jpg" alt="Logo" className="w-full h-full object-cover rounded" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 font-mono">
                CERTIFICATE OF COMPLETION
              </p>
              <h4 className="text-base font-bold text-white mt-1">Aman Gupta</h4>
              <p className="text-xs text-slate-300">Artificial Intelligence & Machine Learning</p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[10px] font-mono text-cyan-300">
              CREDENTIAL ID: IR-2026-AI-892 · GRADE A+
            </div>
            <p className="text-[10px] text-slate-500">
              Verified & Issued under IR InfoTech Technology Solutions Charter.
            </p>
          </div>

        </div>
      </section>

      {/* 7. FAQs Accordion */}
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
                className="bg-[#091122] border border-cyan-500/20 rounded-xl overflow-hidden transition-all"
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
                  <div className="p-4 sm:p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Bottom Apply CTA */}
      <section className="text-center rounded-3xl bg-cyan-950/40 border border-cyan-500/30 p-8 sm:p-12 space-y-4">
        <h3 className="font-tech text-2xl font-bold text-white">
          Ready to Elevate Your Engineering Profile?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Cohort seats are limited to ensure 1-on-1 mentor attention. Submit your application today.
        </p>
        <button
          onClick={onOpenApply}
          className="px-8 py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 font-sub shadow-[0_0_25px_rgba(0,240,255,0.6)] cursor-pointer"
        >
          Apply for Next Batch Now
        </button>
      </section>

    </div>
  );
}
