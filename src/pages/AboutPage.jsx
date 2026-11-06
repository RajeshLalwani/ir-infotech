import React from 'react';
import { 
  Target, 
  Compass, 
  Award, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Lightbulb, 
  ArrowRight 
} from 'lucide-react';
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
      desc: "We believe real tech skills are forged on live production projects, not hypothetical college textbook slides. We nurture talent ethically.",
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
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>About IR InfoTech</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Pioneering Future-Ready <br />
          <span className="text-cyan-400 glow-text">Technology Solutions</span>
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
            <div className="bg-[#091122] p-4 rounded-xl border border-cyan-500/20">
              <p className="font-tech text-2xl font-bold text-cyan-400">100%</p>
              <p className="text-xs font-semibold text-white mt-1">Codebase Ownership</p>
              <p className="text-[11px] text-slate-400">All IP strictly belongs to the client</p>
            </div>
            <div className="bg-[#091122] p-4 rounded-xl border border-cyan-500/20">
              <p className="font-tech text-2xl font-bold text-cyan-400">Verifiable</p>
              <p className="text-xs font-semibold text-white mt-1">QR Credential Registry</p>
              <p className="text-[11px] text-slate-400">Tamper-proof student certificates</p>
            </div>
          </div>
        </div>

        {/* Visual Emblem Box */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-[#090f20] border-2 border-cyan-500/40 rounded-3xl p-8 text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                <img src="/ir-logo.jpg" alt="IR InfoTech Official Emblem" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div>
                <h3 className="font-tech text-xl font-bold text-white tracking-wider">
                  IR INFOTECH
                </h3>
                <p className="text-xs font-sub font-semibold uppercase tracking-widest text-cyan-400">
                  Technology Solutions
                </p>
              </div>
              <p className="text-xs text-slate-400 italic">
                "The Eye of Providence symbolizes visionary architecture, vigilance in cybersecurity, and clarity of digital purpose."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c162d] to-[#070b16] border border-cyan-500/30 p-8 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-tech text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            To architect resilient, human-centric software solutions that empower businesses to scale securely — while transforming motivated students into world-class software engineers through direct industry exposure and live mentorship.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c162d] to-[#070b16] border border-cyan-500/30 p-8 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-tech text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            To become a globally recognized benchmark in intelligent technology solutions and developer incubation, renowned for zero-defect software deliveries and an empowering student learning environment.
          </p>
        </div>

      </section>

      {/* 4. Strategic Objectives */}
      <section className="rounded-3xl bg-[#080e1e] border border-cyan-500/20 p-8 sm:p-12">
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
            <div key={i} className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {obj}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Founder & Leadership Introduction */}
      <section className="rounded-3xl bg-gradient-to-r from-[#09152a] via-[#081226] to-[#040813] border-2 border-cyan-500/30 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-teal-400 shadow-[0_0_25px_rgba(0,240,255,0.4)] overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#070d1c] flex items-center justify-center">
                <Lightbulb className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
            <h3 className="font-tech text-xl font-bold text-white mt-4">Leadership Note</h3>
            <p className="text-xs font-semibold text-cyan-400 font-sub tracking-widest uppercase">
              Founder & Chief Architect
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-extrabold text-white">
              "Technology is only as good as the reliability of its systems and the integrity of its builders."
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              When founding IR InfoTech, we noticed a critical rift in the software ecosystem: enterprise clients struggled to find agile engineering teams who care deeply about code hygiene and security, while students graduating with computer science degrees struggled to bridge the abyss between theoretical classroom syllabi and corporate git workflows.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              IR InfoTech was engineered as the solution. We treat our clients with enterprise rigor and absolute transparency, and we treat our students as future colleagues who deserve genuine production challenges and verifiable credentials.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded border border-cyan-500/30">
                IR InfoTech Executive Council
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Company Core Values */}
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
                className="bg-[#091021] border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
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
            className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all font-sub shadow-[0_0_20px_rgba(0,240,255,0.5)] cursor-pointer"
          >
            Explore What We Build
          </button>
          <button
            onClick={onOpenApply}
            className="px-6 py-3 rounded-xl border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-bold text-xs uppercase tracking-wider hover:bg-cyan-900/40 transition-all font-sub cursor-pointer"
          >
            Join as Student Intern
          </button>
        </div>
      </section>

    </div>
  );
}
