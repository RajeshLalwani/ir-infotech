import React, { useState } from 'react';
import { useAdminAuth } from './AdminAuthContext';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle, ArrowLeft, Building2 } from 'lucide-react';

export default function AdminLoginPage({ onNavigateToWebsite }) {
  const { login, loading, error: authError } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [localError, setLocalError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    if (!email || !password) {
      setLocalError('Please enter both your authorized email and security key.');
      return;
    }
    const res = await login(email, password, remember);
    if (!res.success) {
      setLocalError(res.error || 'Authentication failed. Please verify your credentials.');
    }
  };

  const handleFillDemo = () => {
    setEmail('admin@irinfotech.in');
    setPassword('IRIT@2026#Admin');
  };

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 flex flex-col justify-center items-center p-4 relative selection:bg-cyan-400 selection:text-black">
      {/* Background Cyber Glow & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      {/* Back to Website Button */}
      <button
        onClick={onNavigateToWebsite}
        className="absolute top-6 left-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 hover:text-cyan-400 transition-colors uppercase cursor-pointer z-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to IR InfoTech Website
      </button>

      {/* Login Card */}
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 z-10 space-y-8">
        {/* Top Rim Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />

        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 mb-1">
            <img src="/ir-logo.png" alt="IR InfoTech Emblem" className="w-12 h-12 object-contain" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-tech tracking-wide text-white">
              IR INFOTECH
            </h1>
            <p className="text-xs tracking-[0.2em] font-sub text-cyan-400 uppercase font-semibold">
              Admin & HR Management Portal
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Sign in to manage interns, generate offer letters, and issue verified completion credentials.
          </p>
        </div>

        {/* Error Alert */}
        {(localError || authError) && (
          <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
            <span>{localError || authError}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@irinfotech.in"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Security Key / Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-white/20 bg-black/40 text-cyan-400 focus:ring-0"
              />
              Remember this session
            </label>
            <button
              type="button"
              onClick={handleFillDemo}
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              Autofill Staging Credentials
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl font-tech text-xs tracking-wider uppercase font-semibold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/10"
          >
            {loading ? (
              <span className="inline-block animate-spin mr-2">⟳</span>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Authenticate & Enter Portal
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Security Notice */}
        <div className="pt-4 border-t border-white/5 text-center text-[11px] text-slate-500 space-y-1">
          <p className="flex items-center justify-center gap-1.5 font-medium text-slate-400">
            <Lock className="w-3 h-3 text-cyan-400" />
            Restricted System • 256-Bit SSL Encrypted
          </p>
          <p>
            Unauthorized attempts are monitored and recorded in administrative audit logs.
          </p>
        </div>
      </div>
    </div>
  );
}
