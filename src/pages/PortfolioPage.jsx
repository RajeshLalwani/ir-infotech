import React, { useState } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  Code2, 
  ShieldCheck, 
  Layers, 
  CheckCircle2,
  Terminal,
  Server
} from 'lucide-react';
import { PROJECTS } from '../data/content';

export default function PortfolioPage({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Software Development', 'Web Development', 'Mobile Apps', 'AI & ML', 'Data Science'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-20 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Briefcase className="w-4 h-4 text-cyan-400" />
          <span>Proven Deliverables</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Portfolio & <span className="text-cyan-400 glow-text">Case Studies</span>
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Explore production systems engineered by IR InfoTech across FinTech, HealthTech, Supply Chain, and Enterprise SaaS.
        </p>
      </section>

      {/* 2. Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-sub ${
              activeCategory === cat
                ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'bg-[#091122] text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="bg-[#091122] border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Visual Top Banner */}
            <div className="h-44 bg-gradient-to-br from-[#0d1c3a] via-[#081226] to-[#040813] border-b border-cyan-500/20 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
              
              <div className="flex items-center justify-between text-xs z-10">
                <span className="font-mono text-cyan-400 bg-cyan-950/90 px-2.5 py-1 rounded border border-cyan-500/40 text-[10px]">
                  {p.category}
                </span>
                <span className="text-slate-400 text-[11px] font-mono">{p.client}</span>
              </div>

              <div className="z-10">
                <h3 className="font-tech text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.summary}
                </p>

                {/* Metrics Pill */}
                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="text-cyan-400">⚡</span>
                  <span>{p.metrics}</span>
                </div>

                {/* Feature bullets */}
                <div className="space-y-1.5 pt-1">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(p)}
                  className="w-full py-2.5 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>View Case Study Architecture</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#090f20] border-2 border-cyan-500/50 rounded-2xl p-6 sm:p-8 space-y-5 shadow-[0_0_50px_rgba(0,240,255,0.3)]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">{selectedProject.category} Case Study</span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div>
                <h4 className="font-bold text-white mb-1">Client Profile:</h4>
                <p className="text-slate-400">{selectedProject.client}</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">Architecture & Engineering Solution:</h4>
                <p className="leading-relaxed">{selectedProject.summary}</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                <h4 className="font-mono text-cyan-400 text-xs font-bold mb-2">VERIFIED BUSINESS OUTCOMES:</h4>
                <p className="text-sm font-mono text-emerald-400 font-bold">{selectedProject.metrics}</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Architectural Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  {selectedProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setActivePage('contact');
                }}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 cursor-pointer"
              >
                Build Similar Architecture
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="text-center rounded-3xl bg-[#091122] border border-cyan-500/25 p-8 sm:p-12 space-y-4">
        <h3 className="font-tech text-2xl font-bold text-white">
          Have an Ambitious Project in Mind?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Let's discuss requirements, architecture blueprints, and delivery schedules under mutual non-disclosure agreements.
        </p>
        <button
          onClick={() => setActivePage('contact')}
          className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 font-sub shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer"
        >
          Book Technical Scoping Session
        </button>
      </section>

    </div>
  );
}
