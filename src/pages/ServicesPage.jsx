import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Send
} from 'lucide-react';
import { SERVICES } from '../data/content';

export default function ServicesPage({ setActivePage }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);

  // Quick estimator state
  const [projectType, setProjectType] = useState('Custom Web Application (Next.js/React)');
  const [timeline, setTimeline] = useState('4-8 Weeks');
  const [scale, setScale] = useState('Startup / MVP');

  const currentService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const workflowSteps = [
    { step: "01", title: "Discovery & Blueprint", desc: "Detailed technical scoping, user journeys, architecture design, and timeline estimations." },
    { step: "02", title: "UI/UX & Prototyping", desc: "Interactive Figma wireframes, design tokens, responsive guidelines, and client reviews." },
    { step: "03", title: "Agile Production Sprints", desc: "Clean code delivery with continuous GitHub CI/CD, unit testing, and weekly demo builds." },
    { step: "04", title: "Security Audit & QA", desc: "OWASP penetration testing, performance benchmarking, cross-device regression checks." },
    { step: "05", title: "Deployment & 24/7 SLA", desc: "Zero-downtime multi-cloud launch, automated monitoring, backups, and guaranteed uptime." },
  ];

  return (
    <div className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-pill border border-cyan-400/40 text-cyan-300 text-xs font-semibold">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>Enterprise Services & Capabilities</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          High-Velocity <br />
          <span className="text-cyan-400">Digital Solutions & IT Services</span>
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          From full-cycle custom software and high-conversion web apps to autonomous AI workflows and cloud modernization. We build systems engineered to outlast market disruptions.
        </p>
      </section>

      {/* 2. Interactive Service Deep Dive Explorer */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            Interactive Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Explore Capabilities by Domain
          </h2>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SERVICES.map((s) => {
            const isSelected = s.id === selectedService;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-sub flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cyan-400 text-black shadow-md'
                    : 'glass-card text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/40'
                }`}
              >
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card in Glassmorphism */}
        <div className="rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg glass-pill text-cyan-300 text-xs font-mono border border-cyan-400/30">
                SERVICE CODE: {currentService.id.toUpperCase()}
              </div>

              <h3 className="font-tech text-3xl font-bold text-white">
                {currentService.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentService.fullDesc}
              </p>

              {/* Features List */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sub">
                  Key Deliverables & Specifications:
                </h4>
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-950/80 border border-cyan-400 flex items-center justify-center text-cyan-400 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setActivePage('contact')}
                  className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all cursor-pointer font-sub shadow-md flex items-center gap-2"
                >
                  <span>Request Proposal for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActivePage('portfolio')}
                  className="px-5 py-3 rounded-2xl glass-pill border border-white/10 hover:border-cyan-400/40 text-cyan-300 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all cursor-pointer font-sub"
                >
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Right Tech Stack & Architecture Box in Glassmorphism */}
            <div className="lg:col-span-5 glass-card rounded-2xl p-6 space-y-6 border border-white/10">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-sub font-bold">
                  Primary Tech Ecosystem
                </span>
                <h4 className="text-lg font-bold text-white mt-1">Tools & Frameworks</h4>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {currentService.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 glass-panel rounded-xl flex items-center gap-2 border border-white/5"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-mono font-bold text-slate-200">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-cyan-500/20 space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Deployment Pipeline:</span>
                  <span className="text-cyan-300 font-mono">Automated CI/CD</span>
                </div>
                <div className="flex justify-between">
                  <span>Testing Standard:</span>
                  <span className="text-cyan-300 font-mono">Unit + Integration</span>
                </div>
                <div className="flex justify-between">
                  <span>License:</span>
                  <span className="text-emerald-400 font-mono">100% Commercial IP</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Engineering Workflow in Glassmorphism */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            The Blueprint
          </span>
          <h2 className="font-tech text-3xl font-extrabold text-white">
            Our 5-Stage Engineering Workflow
          </h2>
          <p className="text-sm text-slate-400">
            Predictable sprints, transparent commits, and zero unexpected downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {workflowSteps.map((wf, idx) => (
            <div
              key={idx}
              className="relative glass-card rounded-2xl p-5 hover:border-cyan-400 transition-all flex flex-col justify-between group border border-cyan-400/20"
            >
              <div>
                <span className="font-tech text-2xl font-black text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                  {wf.step}
                </span>
                <h3 className="text-base font-bold text-white mt-2 mb-2 group-hover:text-cyan-300 transition-colors">
                  {wf.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {wf.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cyan-500/20 flex items-center justify-between text-[10px] text-cyan-400 font-mono">
                <span>STAGE {wf.step}</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Instant Project Estimator */}
      <section className="rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
              Fast Estimation
            </span>
            <h2 className="font-tech text-3xl font-extrabold text-white">
              Instant Project Scope Estimator
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Select your requirements to receive a customized architectural proposal within 24 hours.
            </p>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Target Project Solution:</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 text-sm glass-panel border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Custom Web Application (Next.js/React)">Custom Web Application (Next.js/React)</option>
                  <option value="Enterprise SaaS / ERP System">Enterprise SaaS / ERP System</option>
                  <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
                  <option value="AI / ML Autonomous Agent Integration">AI / ML Autonomous Agent Integration</option>
                  <option value="Cloud Migration & DevOps Automation">Cloud Migration & DevOps Automation</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Target Scale:</label>
                  <select
                    value={scale}
                    onChange={(e) => setScale(e.target.value)}
                    className="w-full px-3 py-2 text-sm glass-panel border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Startup / MVP">Startup / MVP</option>
                    <option value="Growing Mid-Market">Growing Mid-Market</option>
                    <option value="Global Enterprise Scale">Global Enterprise Scale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Desired Timeline:</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 text-sm glass-panel border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="2-4 Weeks (Rapid MVP)">2-4 Weeks (Rapid MVP)</option>
                    <option value="4-8 Weeks (Standard)">4-8 Weeks (Standard)</option>
                    <option value="3+ Months (Enterprise)">3+ Months (Enterprise)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary Card in Glassmorphism */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Estimated Architecture Summary</span>
              <span className="text-[10px] font-mono text-emerald-400">READY TO TRANSMIT</span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between glass-panel p-2.5 rounded-xl border border-white/5">
                <span className="text-slate-400">Selected Solution:</span>
                <span className="text-cyan-300 font-bold">{projectType}</span>
              </div>
              <div className="flex justify-between glass-panel p-2.5 rounded-xl border border-white/5">
                <span className="text-slate-400">Target Timeline:</span>
                <span className="text-white font-bold">{timeline}</span>
              </div>
              <div className="flex justify-between glass-panel p-2.5 rounded-xl border border-white/5">
                <span className="text-slate-400">Target Scale:</span>
                <span className="text-white font-bold">{scale}</span>
              </div>
            </div>

            <button
              onClick={() => setActivePage('contact')}
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
            >
              <Send className="w-4 h-4" />
              <span>Submit for Formal Technical Blueprint</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
