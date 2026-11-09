import React, { useState, useEffect } from 'react';
import { ShieldCheck, Search, CheckCircle2, AlertCircle, Ban, ArrowLeft, Calendar, User, Briefcase, Award, Building2, Printer } from 'lucide-react';
import { verifyCertificatePublicly } from '../services/db';
import OfficialSeal from '../components/OfficialSeal';

export default function VerifyCertificatePage({ onNavigateHome, initialCertId = '' }) {
  const [certId, setCertId] = useState(initialCertId);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Check URL query param e.g. /verify-certificate?id=IRIT/CERT/2026/0001
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryId = params.get('id') || initialCertId;
    if (queryId) {
      setCertId(queryId);
      performLookup(queryId);
    }
  }, [initialCertId]);

  const performLookup = async (idToVerify) => {
    if (!idToVerify.trim()) return;
    setLoading(true);
    setHasSearched(true);
    const res = await verifyCertificatePublicly(idToVerify);
    setResult(res);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performLookup(certId);
  };

  const formatDate = (dStr) => {
    if (!dStr) return '';
    try {
      const d = new Date(dStr);
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dStr;
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-black">
      
      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-black/60 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <img src="/ir-logo.png" alt="IR InfoTech" className="w-10 h-10 object-contain" />
            <div>
              <span className="font-tech text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                IR INFOTECH
              </span>
              <p className="text-[10px] tracking-[0.25em] font-sub text-cyan-400 uppercase font-semibold">
                IDEAS | INNOVATION | IMPACT
              </p>
            </div>
          </button>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Return to Website</span>
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 sm:py-14 space-y-8">
        
        {/* Page Title & Search Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-bold text-cyan-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            Public Cryptographic Verification
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-tech text-white">
            Certificate & Credential Verification
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Verify the authenticity of internship completion certificates and training credentials issued by IR InfoTech.
          </p>
        </div>

        {/* Search Card */}
        <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="Enter Certificate ID (e.g. IRIT/CERT/2026/0001)..."
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono text-sm uppercase tracking-wider"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="py-3.5 px-8 rounded-2xl font-tech text-xs tracking-wider uppercase font-semibold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer"
            >
              {loading ? (
                <span className="animate-spin">⟳</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  Verify Credential
                </>
              )}
            </button>
          </form>

          <p className="text-center text-[11px] text-slate-500">
            Certificate IDs are case-insensitive and follow the official sequence format <span className="font-mono text-slate-400 font-semibold">IRIT/CERT/YYYY/XXXX</span>.
          </p>
        </div>

        {/* VERIFICATION RESULT DISPLAY */}
        {hasSearched && (
          <div className="space-y-6 animate-fade-in">
            
            {/* 1. VALID STATUS */}
            {result?.status === 'VALID' && (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl relative overflow-hidden space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        OFFICIALLY VERIFIED & AUTHENTIC
                      </span>
                      <h2 className="text-xl font-bold font-tech text-white mt-1">
                        Credential Record Confirmed
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => window.print()}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5 text-cyan-400" />
                    Print Verification Slip
                  </button>
                </div>

                {/* Details Grid (Strict Privacy Preserved - No phone, no email, no address) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">Candidate Full Name:</span>
                    <span className="text-lg font-bold text-white block mt-0.5">{result.intern_name}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">Domain / Specialization:</span>
                    <span className="text-sm font-semibold text-cyan-300 block mt-0.5">{result.domain}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">Certificate ID:</span>
                    <span className="text-sm font-mono font-bold text-white block mt-0.5">{result.certificate_id}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">Tenure & Duration:</span>
                    <span className="text-slate-200 block mt-0.5 font-medium">{formatDate(result.start_date)} to {formatDate(result.end_date)} ({result.duration})</span>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">Date of Issuance:</span>
                    <span className="text-slate-200 block mt-0.5 font-medium">{formatDate(result.issue_date)}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">Authorized Authority:</span>
                    <span className="text-slate-200 block mt-0.5 font-medium">{result.authorized_signatory || 'Rajesh Lalwani, Founder & Director'}</span>
                  </div>
                </div>

                {/* Seal & Issuing Organization Details */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <OfficialSeal className="w-16 h-16 shrink-0" />
                    <div>
                      <p className="font-bold text-white">IR InfoTech</p>
                      <p className="text-[11px] text-slate-400">Headquarters: Anand, Gujarat • Udyam: UDYAM-GJ-03-0089721</p>
                      <p className="text-[10px] text-cyan-400">Verified via Enterprise Registry System</p>
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-slate-500">
                    <p>Cryptographic Signature Verified</p>
                    <p>Secure Public Verification Service</p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. REVOKED STATUS */}
            {result?.status === 'REVOKED' && (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-red-500/40 shadow-2xl relative overflow-hidden space-y-4 bg-red-950/20">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-400">
                    <Ban className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/30 text-red-300 border border-red-500/50">
                      CREDENTIAL STATUS: REVOKED
                    </span>
                    <h2 className="text-xl font-bold font-tech text-white mt-1">
                      Certificate Has Been Formally Revoked
                    </h2>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  The credential associated with ID <strong className="font-mono text-white">{result.certificate_id}</strong> is no longer recognized as valid by IR InfoTech administrative authority.
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-red-500/30 text-xs space-y-1">
                  <p className="font-bold text-red-300">Recorded Administrative Notice:</p>
                  <p className="text-slate-300">{result.revocation_reason}</p>
                </div>

                <div className="pt-2 text-[11px] text-slate-400">
                  Candidate Name on record: <span className="font-semibold text-white">{result.intern_name}</span> • Issue Date: {formatDate(result.issue_date)}
                </div>
              </div>
            )}

            {/* 3. NOT FOUND STATUS */}
            {result?.status === 'NOT_FOUND' && (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden space-y-3 bg-amber-950/10 text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-2">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-tech text-white">
                  No Matching Record Found
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  {result.message || `No authentic certificate matches ID "${certId}". Please double-check the identifier on your certificate document or QR code.`}
                </p>
                <p className="text-[11px] text-slate-500 pt-2">
                  If you believe this is an error, please reach out with your certificate copy to <span className="text-cyan-400 font-mono">info.irinfotech@gmail.com</span>.
                </p>
              </div>
            )}

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} IR InfoTech. All rights reserved.</span>
          <span className="font-mono text-[11px]">UDYAM REG: UDYAM-GJ-03-0089721</span>
          <span>Anand, Gujarat, India</span>
        </div>
      </footer>

    </div>
  );
}
