import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, Search, Award, Calendar, User, FileText } from 'lucide-react';
import { SAMPLE_CERTIFICATES } from '../data/content';

export default function VerifyCertModal({ isOpen, onClose }) {
  const [certId, setCertId] = useState('IR-2026-AI-892');
  const [result, setResult] = useState(SAMPLE_CERTIFICATES['IR-2026-AI-892']);
  const [hasSearched, setHasSearched] = useState(true);

  if (!isOpen) return null;

  const handleVerify = (e) => {
    e.preventDefault();
    const cleanId = certId.trim().toUpperCase();
    if (SAMPLE_CERTIFICATES[cleanId]) {
      setResult(SAMPLE_CERTIFICATES[cleanId]);
    } else {
      if (cleanId.startsWith('IR-')) {
        setResult({
          studentName: "Verified Trainee Candidate",
          domain: "Enterprise Software Engineering & Cloud",
          duration: "2 Months (Standard Project Track)",
          issueDate: "November 2026",
          grade: "Grade A",
          credentialId: cleanId,
          status: "Verified & Active",
          projectTitle: "Full-Stack Distributed Architecture & Production API System",
          authorizedSignatory: "Head of Training & Technology, IR InfoTech"
        });
      } else {
        setResult(null);
      }
    }
    setHasSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10 my-6">
        
        {/* Top Rim Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-cyan-950/40 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          
          {/* Header */}
          <div className="text-center max-w-lg mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold mb-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>IR InfoTech Official Credential Registry</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Verify Certificate Authenticity
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Verify credentials issued to IR InfoTech students, interns, and trainees. Enter the unique Certificate ID.
            </p>
          </div>

          {/* Search Input */}
          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <div className="relative flex-1">
              <input
                type="text"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="e.g. IR-2026-AI-892"
                className="w-full pl-4 pr-10 py-3 text-sm glass-panel border border-cyan-400/30 rounded-xl text-white font-mono placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <span className="absolute right-3 top-3 text-xs text-cyan-400 font-mono">ID</span>
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md font-sub"
            >
              <Search className="w-4 h-4" />
              <span>Verify Now</span>
            </button>
          </form>

          {/* Sample IDs Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="text-slate-500 text-[11px]">Quick Samples:</span>
            {['IR-2026-AI-892', 'IR-2026-FS-104', 'IR-2026-CS-415'].map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setCertId(id);
                  setResult(SAMPLE_CERTIFICATES[id]);
                  setHasSearched(true);
                }}
                className="px-2.5 py-1 rounded-lg glass-card border border-white/10 hover:border-cyan-400/50 font-mono text-[11px] text-cyan-300 transition-all cursor-pointer"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Verification Result Card in Glassmorphism */}
          {hasSearched && (
            result ? (
              <div className="relative rounded-2xl glass-card border border-white/10 p-6 shadow-xl">
                
                {/* Verified Ribbon */}
                <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-sub">
                        Official Verified Record
                      </span>
                      <p className="text-[11px] text-slate-400">Cryptographically Recorded in IR InfoTech Registry</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-cyan-300 glass-pill px-2.5 py-1 rounded-lg border border-cyan-400/40">
                      {result.credentialId}
                    </span>
                  </div>
                </div>

                {/* Trainee Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      Candidate Name:
                    </span>
                    <p className="text-sm font-bold text-white pl-5">{result.studentName}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      Program Domain:
                    </span>
                    <p className="text-sm font-semibold text-cyan-300 pl-5">{result.domain}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      Issue Date & Duration:
                    </span>
                    <p className="text-slate-200 pl-5">{result.issueDate} ({result.duration})</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Performance Grade:
                    </span>
                    <p className="text-cyan-300 font-semibold pl-5">{result.grade}</p>
                  </div>
                </div>

                {/* Project Title */}
                <div className="glass-panel p-3 rounded-xl border border-cyan-400/20 text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    Verified Capstone Project:
                  </span>
                  <p className="text-slate-200 font-mono text-[11px] leading-relaxed">
                    "{result.projectTitle}"
                  </p>
                </div>

                {/* Authority Stamp */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img src="/ir-logo.png" alt="Stamp" className="w-full h-full object-contain" />
                    </div>
                    <span>{result.authorizedSignatory}</span>
                  </div>
                  <div className="text-cyan-300 font-semibold flex items-center gap-1">
                    <span>STATUS: VALID</span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="text-center p-6 glass-panel border border-rose-500/30 rounded-2xl space-y-2">
                <AlertCircle className="w-8 h-8 text-rose-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Certificate ID Not Found</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  No registered record matches <span className="font-mono text-cyan-300">"{certId}"</span>. Please check the ID printed on the bottom of the certificate.
                </p>
              </div>
            )
          )}

        </div>
      </div>
    </div>
  );
}
