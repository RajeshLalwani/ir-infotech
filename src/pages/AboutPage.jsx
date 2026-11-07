import React from 'react';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Code2, 
  Cpu, 
  Lightbulb, 
  ArrowRight 
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import { COMPANY_INFO } from '../data/content';

export default function AboutPage({ setActivePage, onOpenApply }) {
  const values = [
    {
      title: "Zero-Downtime Reliability",
      desc: "We build architectures that don't sleep. Every system is engineered with auto-recovery, failover redundancy, and 99.98% uptime SLA.",
      icon: ShieldCheck,
    },
    {
      title: "Radical Innovation",
      desc: "We stay ahead of modern tech curves — from agentic LLM pipelines to high-throughput cloud microservices and event-driven computing.",
      icon: Cpu,
    },
    {
      title: "Academic-to-Industry Bridge",
      desc: "We believe real tech skills are forged on live production projects, not hypothetical textbook slides. We nurture talent ethically.",
      icon: Users,
    },
    {
      title: "Transparency & Code Ownership",
      desc: "Zero vendor lock-in. Full client code ownership, continuous CI/CD visibility, and honest, proactive engineering communication.",
      icon: Code2,
    },
  ];

  const objectives = [
    "Deliver enterprise-grade cloud, AI, and web software with measurable client ROI.",
    "Eliminate digital vulnerabilities by enforcing Zero-Trust cybersecurity standards.",
    "Provide structured, hands-on, and paid internship cohorts to 5,000+ engineers by 2028.",
    "Cultivate an ethical research ecosystem in applied Generative AI and automated systems.",
  ];

  return (
    <div className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-pill border border-cyan-400/40 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>About IR InfoTech</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Pioneering Future-Ready <br />
          <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]">Technology Solutions</span>
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Founded on the conviction that high-performance engineering and real-world student incubation can thrive under one roof. We architect software that scales and train minds that build.
        </p>
      </section>

      {/* 2. Company Overview & Visual Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            Our Story & Heritage
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Engineering Excellence Meets Practical Tech Mentorship
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-cyan-400">IR InfoTech</strong> was established with a dual mission: to solve complex digital challenges for global enterprises, and to solve the persistent industry skill gap by offering rigorous, paid, live-project training to college students and tech graduates.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our engineering teams develop scalable web applications, enterprise SaaS platforms, AI-driven automation pipelines, and robust cybersecurity postures. Concurrently, our talent incubator provides aspiring engineers with the rare opportunity to touch live codebases, participate in agile standups, and earn verifiable certifications.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="glass-card p-5 rounded-2xl border border-cyan-400/25">
              <p className="font-tech text-2xl font-bold text-cyan-400">100%</p>
              <p className="text-xs font-semibold text-white mt-1">Codebase Ownership</p>
              <p className="text-[11px] text-slate-400">All IP strictly belongs to the client</p>
            </div>
            <div className="glass-card p-5 rounded-2xl border border-cyan-400/25">
              <p className="font-tech text-2xl font-bold text-cyan-400">Verifiable</p>
              <p className="text-xs font-semibold text-white mt-1">QR Credential Registry</p>
              <p className="text-[11px] text-slate-400">Tamper-proof student certificates</p>
            </div>
          </div>
        </div>

        {/* Visual Emblem Box in Glassmorphism */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-2 bg-cyan-400/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative glass-panel rounded-3xl p-8 text-center space-y-4 border border-cyan-400/40">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto flex items-center justify-center animate-float">
                {/* Ambient Radial Aqua Bloom */}
                <div className="absolute inset-0 bg-[#00f0ff]/15 rounded-full blur-2xl pointer-events-none" />
                <img 
                  src="/ir-logo.png" 
                  alt="IR InfoTech Official Emblem" 
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(0,240,255,0.95)]" 
                />
              </div>
              <div className="w-40 mx-auto laser-flare" />
              <div className="flex justify-center">
                <BrandLogo size="md" showTagline={true} />
              </div>
              <p className="text-xs text-slate-400 italic">
                "The Eye of Providence symbolizes visionary architecture, vigilance in cybersecurity, and clarity of digital purpose."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission in Glassmorphism */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <div className="rounded-3xl glass-card border border-cyan-400/30 p-8 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-tech text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            To architect resilient, human-centric software solutions that empower businesses to scale securely — while transforming motivated students into world-class software engineers through direct industry exposure and live mentorship.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-3xl glass-card border border-cyan-400/30 p-8 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-tech text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            To become a globally recognized benchmark in intelligent technology solutions and developer incubation, renowned for zero-defect software deliveries and an empowering student learning environment.
          </p>
        </div>

      </section>

      {/* 4. Strategic Objectives */}
      <section className="rounded-3xl glass-panel border border-cyan-400/30 p-8 sm:p-12">
        <div className="max-w-3xl mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            Roadmap & Goals
          </span>
          <h2 className="font-tech text-3xl font-extrabold text-white">
            Our Core Objectives
          </h2>
          <p className="text-sm text-slate-400">
            Every line of code and every training batch is measured against these institutional benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3 glass-card p-4 rounded-xl border border-cyan-400/20">
              <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-[0_0_8px_#00f0ff]">
                {i + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {obj}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Company Core Values in Glassmorphism */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            The DNA of Our Firm
          </span>
          <h2 className="font-tech text-3xl font-extrabold text-white">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 hover:border-cyan-400/60 transition-all group border border-cyan-400/20"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setActivePage('services')}
            className="px-7 py-3.5 rounded-2xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all font-sub shadow-[0_0_20px_rgba(0,240,255,0.6)] cursor-pointer"
          >
            Explore What We Build
          </button>
          <button
            onClick={onOpenApply}
            className="px-7 py-3.5 rounded-2xl glass-pill border border-cyan-400/40 text-cyan-300 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all font-sub cursor-pointer"
          >
            Join as Student Intern
          </button>
        </div>
      </section>

    </div>
  );
}
