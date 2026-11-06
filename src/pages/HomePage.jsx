import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Globe, 
  Smartphone, 
  Zap, 
  Users, 
  BarChart3, 
  Terminal,
  Lock,
  Star,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, STATS, THREE_PILLARS, SERVICES, PROJECTS, TESTIMONIALS } from '../data/content';

export default function HomePage({ setActivePage, onOpenApply, onOpenVerify }) {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 pb-16 overflow-hidden">
        {/* Ambient Radial Cyber Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-20 -left-32 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="font-sub tracking-widest uppercase text-[11px] font-bold">
                  Next-Gen IT Solutions & Talent Incubator
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Engineering The Next Dimension of{' '}
                <span className="font-tech bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent glow-text">
                  Intelligent Technology
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="text-cyan-400 font-semibold">IR InfoTech</span> provides enterprise-grade software development, AI solutions, and cloud architectures to global businesses — while training the next generation of engineers through verified, paid internship programs.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setActivePage('services')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sub"
                >
                  <Cpu className="w-4 h-4" />
                  <span>Explore Enterprise Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenApply}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-cyan-300 border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer font-sub shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                >
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>Apply for Internship</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Zero-Trust Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>24/7 Managed SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Verifiable Certifications</span>
                </div>
              </div>

            </div>

            {/* Right Column: Cyber Holographic Logo Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                
                {/* Glowing Outer Rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-teal-400/30 rounded-3xl blur-2xl group-hover:blur-3xl opacity-75 group-hover:opacity-100 transition-all duration-700 animate-pulse-glow" />

                <div className="relative bg-[#090f22] border-2 border-cyan-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,240,255,0.3)] backdrop-blur-xl">
                  
                  {/* Holographic Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 text-xs">
                    <div className="flex items-center gap-2 font-mono text-cyan-400">
                      <Terminal className="w-4 h-4" />
                      <span>SYS://IR_INFOTECH_CORE</span>
                    </div>
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-[10px] text-cyan-300 font-mono">
                      ONLINE · v4.2
                    </span>
                  </div>

                  {/* Logo Centerpiece */}
                  <div className="py-6 flex flex-col items-center justify-center">
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 via-cyan-500 to-blue-600 shadow-[0_0_35px_rgba(0,240,255,0.6)] animate-float">
                      <img 
                        src="/ir-logo.jpg" 
                        alt="IR InfoTech Official Holographic Emblem" 
                        className="w-full h-full object-cover rounded-[14px]"
                      />
                    </div>

                    <div className="mt-5 text-center">
                      <h2 className="font-tech text-2xl font-black tracking-widest text-white glow-text">
                        IR INFOTECH
                      </h2>
                      <p className="text-xs font-sub font-bold uppercase tracking-[0.3em] text-cyan-400 mt-0.5">
                        Technology Solutions
                      </p>
                    </div>
                  </div>

                  {/* Micro Terminal Stats */}
                  <div className="pt-4 border-t border-cyan-500/20 grid grid-cols-2 gap-3 text-left">
                    <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                      <p className="text-[10px] text-slate-400 font-mono">ENCRYPTION</p>
                      <p className="text-xs font-bold text-cyan-300 font-mono">AES-256 / ZERO-TRUST</p>
                    </div>
                    <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                      <p className="text-[10px] text-slate-400 font-mono">GLOBAL UPTIME</p>
                      <p className="text-xs font-bold text-emerald-400 font-mono">99.98% VERIFIED</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Real-Time Stats Strip */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="bg-[#091122]/80 border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400/50 transition-all group"
              >
                <p className="font-tech text-3xl sm:text-4xl font-extrabold text-cyan-400 group-hover:scale-105 transition-transform glow-text">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-white mt-1">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. THREE CORE PILLARS OF IR INFOTECH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="font-sub text-xs uppercase tracking-widest text-cyan-400 font-bold">
            The Triad of Excellence
          </p>
          <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-white">
            What Defines <span className="text-cyan-400">IR InfoTech</span>
          </h2>
          <p className="text-sm text-slate-300">
            We are built on three foundational pillars designed to serve forward-thinking enterprises and ambitious software engineers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#0a1226] to-[#070b16] border border-cyan-500/25 p-8 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.08)] hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-transform">
                    {pillar.id === 'services' && <ShieldCheck className="w-6 h-6" />}
                    {pillar.id === 'solutions' && <Cpu className="w-6 h-6" />}
                    {pillar.id === 'internships' && <GraduationCap className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-300">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    if (pillar.id === 'internships') setActivePage('internships');
                    else setActivePage('services');
                  }}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <p className="font-sub text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Capabilities
            </p>
            <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-white">
              Enterprise Technology Solutions
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              From high-concurrency microservices to generative AI workflows and cyber-resilient cloud architectures.
            </p>
          </div>

          <button
            onClick={() => setActivePage('services')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-bold uppercase tracking-wider hover:bg-cyan-900/40 transition-all flex items-center gap-2 cursor-pointer font-sub"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#091021] border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.id === 'software-dev' && <Code2 className="w-5 h-5" />}
                  {service.id === 'web-dev' && <Globe className="w-5 h-5" />}
                  {service.id === 'mobile-apps' && <Smartphone className="w-5 h-5" />}
                  {service.id === 'ai-ml' && <Sparkles className="w-5 h-5" />}
                  {service.id === 'data-science' && <BarChart3 className="w-5 h-5" />}
                  {service.id === 'it-consultancy' && <Layers className="w-5 h-5" />}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActivePage('services')}
                className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-800/80"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE IR INFOTECH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c162e] via-[#080f20] to-[#050914] border border-cyan-500/30 p-8 sm:p-12 shadow-[0_0_40px_rgba(0,240,255,0.12)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <p className="font-sub text-xs uppercase tracking-widest text-cyan-400 font-bold">
                The IR Advantage
              </p>
              <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-white">
                Why Industry Leaders Partner with <span className="text-cyan-400">IR InfoTech</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We combine architectural rigor, cutting-edge AI pipelines, and zero-compromise security protocols. We treat your digital infrastructure as mission-critical.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { title: "Security-First & Zero-Trust", desc: "Every API, database, and microservice is hardened against modern OWASP attack vectors." },
                  { title: "Sprint-Based Agile Velocity", desc: "Bi-weekly production-ready sprints with complete code transparency and direct GitHub access." },
                  { title: "99.98% Availability SLA", desc: "High-availability multi-region cloud configurations with automated failovers." },
                  { title: "Dedicated Tech Lead & PM", desc: "Direct engineering collaboration with senior architects without bureaucratic layers." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setActivePage('contact')}
                  className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all cursor-pointer font-sub shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  Schedule Technical Discovery
                </button>
              </div>
            </div>

            {/* Right: Security Hologram Box */}
            <div className="lg:col-span-6">
              <div className="bg-[#050a16] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white">ZERO-TRUST SECURITY METRICS</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">STATUS: AUDITED</span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">End-to-End Encryption:</span>
                    <span className="text-cyan-300 font-bold">TLS 1.3 / AES-256-GCM</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">Mean Time to Recovery (MTTR):</span>
                    <span className="text-cyan-300 font-bold">&lt; 8 Minutes</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">Automated CI/CD Test Coverage:</span>
                    <span className="text-emerald-400 font-bold">94.8% passing</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">Certificate Verification Registry:</span>
                    <span className="text-cyan-300 font-bold">Instant Online Lookup</span>
                  </div>
                </div>

                <div className="p-3 bg-cyan-950/40 rounded-xl border border-cyan-500/20 text-[11px] text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-cyan-400" />
                  <span>Enterprise Non-Disclosure Agreements (NDAs) signed prior to project blueprinting.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INTERNSHIP & TALENT INCUBATOR HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#09152a] via-[#060f22] to-[#040813] border-2 border-cyan-500/40 p-8 sm:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.2)]">
          
          {/* Subtle Top Badge */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub px-3 py-1 bg-cyan-950 border border-cyan-500/30 rounded-full inline-block">
                Paid Internships & Corporate Mentorship
              </span>
              <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-white">
                Bridge the Gap Between <span className="text-cyan-400">College & Corporate Tech</span>
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl">
                Work on live enterprise systems, write production-level React & Python code, receive 1-on-1 feedback from senior architects, and earn an authentic digitally verifiable certificate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={onOpenApply}
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for Internship</span>
              </button>
              <button
                onClick={onOpenVerify}
                className="px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-cyan-300 border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Verify Credential</span>
              </button>
            </div>
          </div>

          {/* Quick Domain Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-cyan-500/20 text-center">
            {['Full-Stack Web', 'AI & ML Agentic', 'Mobile Apps (Flutter)', 'Data Science & SQL', 'Cyber Defense', 'Cloud & DevOps'].map((item, idx) => (
              <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 hover:border-cyan-400/40 transition-all">
                <p className="text-xs font-bold text-white">{item}</p>
                <p className="text-[10px] text-cyan-400 mt-1 font-mono">1 to 6 Mos</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FEATURED CASE STUDIES / PORTFOLIO PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <p className="font-sub text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Proven Track Record
            </p>
            <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-white">
              Featured Case Studies & Deployments
            </h2>
            <p className="text-sm text-slate-400">
              Real-world systems engineered for resilience, throughput, and measurable ROI.
            </p>
          </div>

          <button
            onClick={() => setActivePage('portfolio')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-bold uppercase tracking-wider hover:bg-cyan-900/40 transition-all flex items-center gap-2 cursor-pointer font-sub"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-[#091122] border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                    {project.category}
                  </span>
                  <span className="text-slate-400 text-[11px]">{project.client}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-[11px] font-mono text-emerald-400 mb-4">
                  ⚡ {project.metrics}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="font-sub text-xs uppercase tracking-widest text-cyan-400 font-bold">
            Trusted By Clients & Trainees
          </p>
          <h2 className="font-tech text-3xl font-extrabold text-white">
            What People Say About <span className="text-cyan-400">IR InfoTech</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-[#080e1e] border border-cyan-500/20 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-cyan-400 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-cyan-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <p className="text-xs font-bold text-white">{t.name}</p>
                <p className="text-[11px] text-cyan-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950 via-[#0a1835] to-[#040915] border-2 border-cyan-500/40 p-8 sm:p-14 text-center space-y-6 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Ready to Build the Future?</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            Launch Your Next Big Tech Project With <span className="text-cyan-400 glow-text">IR InfoTech</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Whether you need enterprise software engineering or are looking to kickstart your tech career through our live project internship program, we are ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all cursor-pointer font-sub"
            >
              Schedule Tech Consultation
            </button>
            <button
              onClick={onOpenApply}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-cyan-300 border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/50 transition-all cursor-pointer font-sub"
            >
              Apply as Student Intern
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
