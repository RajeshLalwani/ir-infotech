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
  Laptop, 
  Smartphone, 
  Zap, 
  Users, 
  BarChart3, 
  Briefcase,
  Star,
  ExternalLink,
  Globe
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import { COMPANY_INFO, STATS, THREE_PILLARS, SERVICES, PROJECTS, TESTIMONIALS, BANNER_OFFERINGS } from '../data/content';

export default function HomePage({ setActivePage, onOpenApply, onOpenVerify }) {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION - REDESIGNED EXACTLY FROM THE REFERENCE BANNER */}
      <section className="relative pt-8 lg:pt-16 pb-16 overflow-hidden">
        
        {/* Ambient Glowing Cyber Radial Lights */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/12 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-cyan-400/10 blur-[130px] pointer-events-none rounded-full" />

        {/* Digital Wireframe Globe Graphic in Background (Matches reference banner right side) */}
        <div className="absolute top-6 -right-20 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] opacity-25 pointer-events-none">
          <div className="w-full h-full rounded-full border border-cyan-400/40 relative animate-spin" style={{ animationDuration: '45s' }}>
            <div className="absolute inset-4 rounded-full border border-dashed border-cyan-300/30" />
            <div className="absolute inset-12 rounded-full border border-cyan-400/20" />
            {/* Latitude / Longitude lines */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-48 rounded-[100%] border border-cyan-400/30" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-48 rounded-[100%] border border-cyan-400/30" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Hero Container with Cyber Armor Tech Framing */}
          <div className="cyber-corner-box glass-panel rounded-3xl p-6 sm:p-12 lg:p-14 border border-cyan-400/35 shadow-[0_0_60px_rgba(0,240,255,0.2)] relative overflow-hidden">
            
            {/* Top Row: Logo with Holographic Pedestal + Brand Typography */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Official Emblem (Clean, Original Artwork) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative flex flex-col items-center">
                  
                  {/* Clean Original Logo - Crisp, Authentic, Natural Contrast */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 z-10 animate-float flex items-center justify-center">
                    <img 
                      src="/ir-logo.png" 
                      alt="IR InfoTech Official Emblem" 
                      className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,240,255,0.35)] hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Subtle Ground Anchor Flare */}
                  <div className="w-48 h-1 -mt-2 rounded-full bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent blur-sm" />

                </div>
              </div>

              {/* Right Column: Large Brand Header & Tagline (Matches Reference Banner) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Brand Name Typography */}
                <div>
                  <BrandLogo size="xl" showTagline={true} />
                </div>

                {/* Laser Flare Divider with Center Starburst (From Reference) */}
                <div className="w-full max-w-lg laser-flare my-4 mx-auto lg:mx-0" />

                {/* Value Proposition */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Engineering the next dimension of enterprise software, artificial intelligence, and cybersecurity — while preparing future tech leaders through hands-on paid internships.
                </p>

                {/* Dual Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <button
                    onClick={() => setActivePage('services')}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.7)] hover:shadow-[0_0_35px_rgba(0,240,255,0.9)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sub"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenApply}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-cyan-300 glass-pill hover:bg-cyan-400 hover:text-black border border-cyan-400/50 transition-all flex items-center justify-center gap-2 cursor-pointer font-sub shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Apply for Internship</span>
                  </button>
                </div>

              </div>

            </div>

            {/* Bottom Row: THE 6 CORE OFFERING PILLS (Exact representation of Reference Banner) */}
            <div className="mt-12 pt-8 border-t border-cyan-500/25">
              <div className="text-center mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">
                  Core Technology Capabilities & Programs
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                {BANNER_OFFERINGS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'internships' || item.id === 'training') {
                        setActivePage('internships');
                      } else {
                        setActivePage('services');
                      }
                    }}
                    className="cyber-offering-pill p-4 text-center group cursor-pointer flex flex-col items-center justify-between"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-2.5 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                      {item.icon === 'Code2' && <Code2 className="w-5 h-5 text-cyan-400" />}
                      {item.icon === 'Laptop' && <Laptop className="w-5 h-5 text-cyan-400" />}
                      {item.icon === 'Cpu' && <Cpu className="w-5 h-5 text-cyan-400" />}
                      {item.icon === 'BarChart3' && <BarChart3 className="w-5 h-5 text-cyan-400" />}
                      {item.icon === 'GraduationCap' && <GraduationCap className="w-5 h-5 text-cyan-400" />}
                      {item.icon === 'Briefcase' && <Briefcase className="w-5 h-5 text-cyan-400" />}
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-cyan-400/70 font-mono mt-0.5">
                        {item.tag}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Real-Time Stats Strip in Glassmorphism */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 hover:border-cyan-400/60 transition-all group"
              >
                <p className="font-tech text-3xl sm:text-4xl font-extrabold text-cyan-400 group-hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
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
              className="glass-card rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
                    {pillar.id === 'services' && <ShieldCheck className="w-6 h-6 text-cyan-400" />}
                    {pillar.id === 'solutions' && <Cpu className="w-6 h-6 text-cyan-400" />}
                    {pillar.id === 'internships' && <GraduationCap className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full glass-pill text-cyan-300 border border-cyan-400/30">
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

              <div className="mt-6 pt-4 border-t border-cyan-500/20">
                <button
                  onClick={() => {
                    if (pillar.id === 'internships') setActivePage('internships');
                    else setActivePage('services');
                  }}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer font-sub uppercase tracking-wider"
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
              Enterprise Solutions & Systems
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              From high-concurrency microservices to generative AI workflows and cyber-resilient cloud architectures.
            </p>
          </div>

          <button
            onClick={() => setActivePage('services')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl border border-cyan-400/40 glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2 cursor-pointer font-sub"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 hover:border-cyan-400/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                  {service.id === 'software-dev' && <Code2 className="w-5 h-5" />}
                  {service.id === 'web-dev' && <Laptop className="w-5 h-5" />}
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
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded glass-pill border border-cyan-400/20 text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActivePage('services')}
                className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center gap-1 cursor-pointer pt-2 border-t border-cyan-500/20 font-sub uppercase tracking-wider"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERNSHIPS & TALENT INCUBATOR HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel p-8 sm:p-12 overflow-hidden shadow-[0_0_60px_rgba(0,240,255,0.2)] border border-cyan-400/40">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 font-sub px-3.5 py-1 glass-pill border border-cyan-400/40 rounded-full inline-block">
                Paid Internships & Corporate Mentorship
              </span>
              <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-white">
                Bridge the Gap Between <span className="text-cyan-400">College & Corporate Tech</span>
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl">
                Work on live enterprise systems, write clean production code, receive 1-on-1 code reviews from senior architects, and earn an authentic digitally verifiable certificate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={onOpenApply}
                className="px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply via Google Form</span>
              </button>
              <button
                onClick={onOpenVerify}
                className="px-5 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-cyan-300 glass-pill hover:bg-cyan-400 hover:text-black border border-cyan-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Verify Credential</span>
              </button>
            </div>
          </div>

          {/* Quick Domain Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 border-t border-cyan-500/20 text-center">
            {['Full-Stack Web', 'AI & ML Agentic', 'Mobile Apps (Flutter)', 'Data Science & SQL', 'Cyber Defense', 'Cloud & DevOps'].map((item, idx) => (
              <div key={idx} className="glass-card p-3.5 rounded-xl border border-cyan-400/20 hover:border-cyan-400/60 transition-all">
                <p className="text-xs font-bold text-white">{item}</p>
                <p className="text-[10px] text-cyan-400 mt-1 font-mono">1 to 6 Mos</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 text-center space-y-6 shadow-[0_0_50px_rgba(0,240,255,0.25)] border border-cyan-400/40 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Ready to Build the Future?</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            Launch Your Next Big Tech Project With <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]">IR InfoTech</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Whether you need enterprise software engineering or are looking to kickstart your tech career through our live project internship program, we are ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all cursor-pointer font-sub"
            >
              Schedule Tech Consultation
            </button>
            <button
              onClick={onOpenApply}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-cyan-300 glass-pill hover:bg-cyan-400 hover:text-black border border-cyan-400/40 transition-all cursor-pointer font-sub"
            >
              Apply as Student Intern
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
