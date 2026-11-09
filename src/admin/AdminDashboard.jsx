import React, { useState, useEffect } from 'react';
import { Users, UserCheck, Award, Clock, FileText, CheckCircle2, AlertCircle, ArrowUpRight, Plus, ExternalLink, Calendar } from 'lucide-react';
import { getDashboardStats, getInterns, getCertificates, getOfferLetters } from '../services/db';

export default function AdminDashboard({
  onNavigateTab,
  onOpenAddIntern,
  onOpenProfile,
  onOpenOffer,
  onOpenCertificate
}) {
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    selected: 0,
    completed: 0,
    certificatesIssued: 0,
    pendingCompletion: 0
  });
  const [recentInterns, setRecentInterns] = useState([]);
  const [recentOffers, setRecentOffers] = useState([]);
  const [recentCerts, setRecentCerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const s = await getDashboardStats();
    setStats(s);

    const allInterns = await getInterns();
    setRecentInterns(allInterns.slice(0, 5));

    const allOffers = await getOfferLetters();
    setRecentOffers(allOffers.slice(0, 4));

    const allCerts = await getCertificates();
    setRecentCerts(allCerts.slice(0, 4));

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const metricCards = [
    {
      label: 'Total Interns',
      value: stats.total,
      sub: 'All recorded candidates',
      icon: Users,
      color: 'text-cyan-400',
      border: 'border-cyan-500/20'
    },
    {
      label: 'Active Interns',
      value: stats.active,
      sub: 'Currently in training track',
      icon: UserCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20'
    },
    {
      label: 'Selected / Offered',
      value: stats.selected,
      sub: 'Awaiting joining / offer stage',
      icon: Clock,
      color: 'text-blue-400',
      border: 'border-blue-500/20'
    },
    {
      label: 'Completed Interns',
      value: stats.completed,
      sub: 'Finished project milestones',
      icon: CheckCircle2,
      color: 'text-purple-400',
      border: 'border-purple-500/20'
    },
    {
      label: 'Certificates Issued',
      value: stats.certificatesIssued,
      sub: 'Publicly verifiable credentials',
      icon: Award,
      color: 'text-cyan-300',
      border: 'border-cyan-400/30'
    },
    {
      label: 'Pending Completion',
      value: stats.pendingCompletion,
      sub: 'Active milestones under review',
      icon: FileText,
      color: 'text-amber-400',
      border: 'border-amber-500/20'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-black border border-cyan-500/20 relative overflow-hidden flex flex-wrap items-center justify-between gap-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-bold tracking-wider text-cyan-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            IR InfoTech Operations Desk
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-tech text-white">
            Internship & Credential Control System
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            Real-time administrative hub for applicant onboarding, lifecycle evaluation, automated offer generation, and cryptographic certificate issuance.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <button
            onClick={onOpenAddIntern}
            className="px-5 py-2.5 rounded-xl font-tech text-xs tracking-wider uppercase font-semibold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:opacity-95 transition-opacity flex items-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Register New Intern
          </button>
        </div>
      </div>

      {/* Metric Cards (Real Database Counts) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metricCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className={`p-4 rounded-2xl bg-white/[0.02] border ${card.border} space-y-2 relative overflow-hidden`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">{card.label}</span>
                <Icon className={`w-4 h-4 ${card.color}`} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-tech text-white">
                {card.value}
              </div>
              <div className="text-[10px] text-slate-500 truncate" title={card.sub}>
                {card.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Section: Recent Interns & Recent Documents */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Intern Registrations (2 cols) */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div>
              <h3 className="text-base font-bold font-tech text-white">
                Recent Intern Registrations
              </h3>
              <p className="text-xs text-slate-400">Latest candidate profiles registered in system</p>
            </div>
            <button
              onClick={() => onNavigateTab('interns')}
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold cursor-pointer"
            >
              View All Roster
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-2.5 px-3">Intern ID</th>
                  <th className="py-2.5 px-3">Candidate</th>
                  <th className="py-2.5 px-3">Domain</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {recentInterns.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-500">
                      No interns registered yet. Click "Register New Intern" above.
                    </td>
                  </tr>
                ) : (
                  recentInterns.map((intern) => (
                    <tr
                      key={intern.id}
                      onClick={() => onOpenProfile(intern)}
                      className="hover:bg-white/[0.02] transition-colors cursor-pointer group"
                    >
                      <td className="py-3 px-3 font-mono font-bold text-cyan-400">
                        {intern.intern_id}
                      </td>
                      <td className="py-3 px-3 text-white font-medium">
                        <div>{intern.full_name}</div>
                        <div className="text-[10px] text-slate-500">{intern.college_name}</div>
                      </td>
                      <td className="py-3 px-3 text-slate-300">
                        {intern.domain}
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-slate-300 border border-white/10">
                          {intern.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenProfile(intern);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-[11px] font-medium transition-colors"
                        >
                          Profile
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recently Generated Documents & Quick Actions (1 col) */}
        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
          
          {/* Quick Actions */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold font-tech text-white">
              Quick Administrative Actions
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={onOpenAddIntern}
                className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-left space-y-1 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4 text-cyan-400" />
                <p className="font-semibold text-white">New Intern</p>
                <p className="text-[10px] text-slate-400">Register candidate</p>
              </button>

              <button
                onClick={() => onNavigateTab('interns')}
                className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-left space-y-1 transition-colors cursor-pointer"
              >
                <Users className="w-4 h-4 text-emerald-400" />
                <p className="font-semibold text-white">Full Roster</p>
                <p className="text-[10px] text-slate-400">Search & filters</p>
              </button>

              <button
                onClick={() => onNavigateTab('export')}
                className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-left space-y-1 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <p className="font-semibold text-white">Export Data</p>
                <p className="text-[10px] text-slate-400">CSV & XLSX</p>
              </button>

              <button
                onClick={() => onNavigateTab('settings')}
                className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-left space-y-1 transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <p className="font-semibold text-white">Templates</p>
                <p className="text-[10px] text-slate-400">Settings & legal</p>
              </button>
            </div>
          </div>

          {/* Recently Issued Credentials */}
          <div className="space-y-3 pt-3 border-t border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Recently Issued Certificates
            </h4>
            {recentCerts.length === 0 ? (
              <p className="text-xs text-slate-500 py-3 text-center">
                No completion certificates issued yet.
              </p>
            ) : (
              <div className="space-y-2 text-xs">
                {recentCerts.map(c => (
                  <div key={c.id} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{c.intern_name}</p>
                      <p className="text-[10px] font-mono text-cyan-400">{c.certificate_id}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9.5px] font-semibold bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
