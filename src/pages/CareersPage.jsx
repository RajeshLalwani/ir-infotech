import React from 'react';
import { 
  Briefcase, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Zap, 
  HeartHandshake, 
  Rocket, 
  Laptop 
} from 'lucide-react';
import { CAREER_OPENINGS, COMPANY_INFO } from '../data/content';

export default function CareersPage({ onOpenApply }) {
  const perks = [
    { title: "Cutting-Edge Tech Stack", desc: "Work with modern Next.js, LangChain AI, Kubernetes, and high-throughput databases.", icon: Rocket },
    { title: "Remote / Hybrid Flexibility", desc: "Results matter more than hours logged in a chair. Work from anywhere in India.", icon: Laptop },
    { title: "Merit-Based Fast Promotion", desc: "Zero corporate politics. Your technical impact and code quality drive your career trajectory.", icon: Zap },
    { title: "Mentorship & Learning Budget", desc: "Access to paid courses, cloud certifications, and technical conference tickets.", icon: HeartHandshake },
  ];

  return (
    <div className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Briefcase className="w-4 h-4 text-cyan-400" />
          <span>Careers at IR InfoTech</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Build Mission-Critical Systems <br />
          <span className="text-cyan-400 glow-text">With Our Engineering Team</span>
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          We are always searching for passionate software engineers, cloud architects, and tech mentors who refuse to write mediocre code.
        </p>
      </section>

      {/* 2. Perks & Culture */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
            Why Join IR
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Engineers First Culture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-[#091122] border border-cyan-500/20 rounded-2xl p-6 space-y-3 hover:border-cyan-400/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{p.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sub">
              Open Positions
            </span>
            <h2 className="font-tech text-3xl font-extrabold text-white mt-1">
              Current Engineering Opportunities
            </h2>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-3 py-1.5 rounded-lg border border-cyan-500/30">
            {CAREER_OPENINGS.length} ACTIVE POSITIONS
          </span>
        </div>

        <div className="space-y-4">
          {CAREER_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="bg-[#091122] border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                    {job.type}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Exp: {job.experience}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{job.location}</span>
                  </span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.skills.map((s, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <button
                  onClick={onOpenApply}
                  className="w-full md:w-auto px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all cursor-pointer font-sub shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Recruitment Desk Notice */}
      <section className="rounded-3xl bg-[#080e1e] border border-cyan-500/25 p-8 sm:p-12 text-center space-y-4">
        <h3 className="font-tech text-2xl font-bold text-white">
          Don't See Your Exact Role?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          We always make room for exceptional talent. Send your GitHub, resume, and a brief description of what you love building directly to our recruitment team.
        </p>
        <div className="pt-2">
          <a
            href={`mailto:${COMPANY_INFO.careersEmail}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold font-mono hover:bg-cyan-900/50 hover:border-cyan-400 transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{COMPANY_INFO.careersEmail}</span>
          </a>
        </div>
      </section>

    </div>
  );
}
