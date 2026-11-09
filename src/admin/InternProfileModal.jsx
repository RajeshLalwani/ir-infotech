import React, { useState, useEffect } from 'react';
import { X, User, GraduationCap, Briefcase, FileText, Award, Calendar, CheckCircle, Clock, Shield, AlertCircle, Edit, ExternalLink } from 'lucide-react';
import { updateIntern, getOfferLetters, getCertificates } from '../services/db';

const STATUS_COLORS = {
  Selected: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Offer Sent': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Active: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Completed: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Withdrawn: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Terminated: 'bg-red-500/10 text-red-400 border-red-500/20'
};

export default function InternProfileModal({
  isOpen,
  onClose,
  intern,
  onOpenOffer,
  onOpenCertificate,
  onEditIntern,
  onRefresh
}) {
  const [status, setStatus] = useState(intern?.status || 'Selected');
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [offers, setOffers] = useState([]);
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    if (intern) {
      setStatus(intern.status);
      getOfferLetters(intern.id).then(setOffers);
      getCertificates(intern.id).then(setCerts);
    }
  }, [intern, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !intern) return null;

  const handleStatusChange = async (newStatus) => {
    if (newStatus === intern.status) return;
    setLoadingStatus(true);
    try {
      await updateIntern(intern.id, { status: newStatus });
      setStatus(newStatus);
      setLoadingStatus(false);
      onRefresh?.();
    } catch (err) {
      setLoadingStatus(false);
      alert('Error updating status: ' + err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10 my-6 max-h-[90vh] overflow-y-auto">
        
        {/* Top Rim Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-tech font-bold text-lg">
              {intern.full_name?.charAt(0) || 'I'}
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-xl font-bold font-tech text-white">
                  {intern.full_name}
                </h2>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${STATUS_COLORS[status] || STATUS_COLORS.Selected}`}>
                  {status}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Intern ID: <span className="text-cyan-400 font-bold">{intern.intern_id}</span> • Registered on {intern.created_at?.split('T')[0]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onEditIntern(intern)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Edit className="w-3.5 h-3.5" />
              Edit Profile
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Status Control Bar */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Update Internship Lifecycle Status:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {['Selected', 'Offer Sent', 'Active', 'Completed', 'Withdrawn', 'Terminated'].map((st) => (
              <button
                key={st}
                onClick={() => handleStatusChange(st)}
                disabled={loadingStatus || status === st}
                className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                  status === st
                    ? 'bg-cyan-400 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          
          {/* Personal Info */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 font-bold text-cyan-400 uppercase tracking-wider pb-1 border-b border-white/5">
              <User className="w-4 h-4" />
              Personal Details
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Email:</span>
                <span className="text-white font-medium">{intern.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Mobile:</span>
                <span className="text-white font-medium">{intern.mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Gender:</span>
                <span className="text-slate-300">{intern.gender || 'Prefer not to say'}</span>
              </div>
            </div>
          </div>

          {/* Academic Info */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 font-bold text-cyan-400 uppercase tracking-wider pb-1 border-b border-white/5">
              <GraduationCap className="w-4 h-4" />
              Academic Background
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">College / Institute:</span>
                <span className="text-white font-medium text-right max-w-[200px] truncate" title={intern.college_name}>{intern.college_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Affiliated University:</span>
                <span className="text-slate-300">{intern.university_name || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Course / Degree:</span>
                <span className="text-white">{intern.course_degree}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Department:</span>
                <span className="text-slate-300">{intern.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Semester / Year:</span>
                <span className="text-slate-300">{intern.current_semester || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Internship Track Info */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-cyan-400 uppercase tracking-wider pb-1 border-b border-white/5">
              <Briefcase className="w-4 h-4" />
              Internship Engagement Terms
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <span className="text-slate-400 block">Domain / Role:</span>
                <span className="text-white font-semibold">{intern.domain}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Schedule:</span>
                <span className="text-white font-medium">{intern.start_date} to {intern.end_date}</span>
                <span className="text-slate-500 block text-[11px]">{intern.duration_months} Months Duration</span>
              </div>
              <div>
                <span className="text-slate-400 block">Mode & Type:</span>
                <span className="text-white font-medium">{intern.internship_mode} Track</span>
                <span className="text-cyan-400 block font-semibold text-[11px]">
                  {intern.internship_type === 'Paid' ? `Paid (₹${intern.stipend_amount}/mo)` : 'Unpaid Track'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Assigned Mentor:</span>
                <span className="text-slate-300">{intern.assigned_mentor || 'Technical Lead'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* GENERATED DOCUMENTS & CREDENTIALS SECTION */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h3 className="text-sm font-bold font-tech text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            Official Generated Credentials & Documents
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* 1. Offer Letter Card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    Internship Offer Letter
                  </span>
                  {offers.length > 0 ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      ISSUED
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-400">
                      NOT ISSUED
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {offers.length > 0 
                    ? `Latest Ref: ${offers[0].reference_no} • Issued ${offers[0].issue_date}`
                    : 'Generate official offer letter with company branding, terms and digital signature.'}
                </p>
              </div>

              <button
                onClick={() => onOpenOffer(intern)}
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                {offers.length > 0 ? 'Preview / Re-download Offer Letter' : 'Generate Offer Letter'}
              </button>
            </div>

            {/* 2. Completion Certificate Card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cyan-400" />
                    Completion Certificate
                  </span>
                  {certs.length > 0 ? (
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                      certs[0].status === 'VALID' 
                        ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                        : 'bg-red-500/20 text-red-400 border-red-500/30'
                    }`}>
                      {certs[0].status}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-400">
                      NOT ISSUED
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {certs.length > 0
                    ? `Cert ID: ${certs[0].certificate_id} • Status: ${certs[0].status}`
                    : status === 'Completed'
                      ? 'Internship is marked completed. Certificate can now be approved and issued.'
                      : 'Requires intern status to be marked as "Completed" before issuance.'}
                </p>
              </div>

              {status === 'Completed' || certs.length > 0 ? (
                <button
                  onClick={() => onOpenCertificate({ ...intern, status }, certs[0] || null)}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-teal-300 hover:opacity-95 text-black transition-opacity flex items-center justify-center gap-1.5 font-tech tracking-wider uppercase cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5" />
                  {certs.length > 0 ? 'Manage Certificate' : 'Issue Completion Certificate'}
                </button>
              ) : (
                <div className="text-center py-2 text-[11px] text-slate-500 bg-white/[0.02] rounded-xl border border-white/5">
                  Locked until marked as "Completed"
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
