import React, { useState, useRef, useEffect } from 'react';
import { X, Download, Printer, CheckCircle, FileText, Edit3, Eye, Shield, Building2 } from 'lucide-react';
import OfficialSeal from '../components/OfficialSeal';
import { createOfferLetter, generateNextOfferReference, getCompanySettings } from '../services/db';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function OfferLetterGenerator({ isOpen, onClose, intern, onSuccess }) {
  const printRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [referenceNo, setReferenceNo] = useState('');
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [settings, setSettings] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Editable clauses
  const [responsibilities, setResponsibilities] = useState(
    'As an intern at IR InfoTech, you will participate in real-world software architecture and deployment pipelines. Your responsibilities include developing clean, maintainable code, adhering to industry security standards, collaborating in agile sprint reviews, and presenting project deliverables under the mentorship of our technical leads.'
  );
  const [terms, setTerms] = useState(
    'All intellectual property, system designs, and code produced during this internship shall remain the exclusive property of IR InfoTech. Interns are expected to maintain strict confidentiality regarding client data, internal repositories, and proprietary technology.'
  );

  useEffect(() => {
    if (isOpen && intern) {
      generateNextOfferReference().then(setReferenceNo);
      getCompanySettings().then(setSettings);
    }
  }, [isOpen, intern]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !intern) return null;

  const formatDate = (dStr) => {
    if (!dStr) return '';
    try {
      const d = new Date(dStr);
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dStr;
    }
  };

  const handleDownloadPDF = async () => {
    if (!printRef.current) return;
    setDownloading(true);
    try {
      // First save or record issuance in database
      await createOfferLetter(intern.id, {
        reference_no: referenceNo,
        issue_date: issueDate,
        custom_responsibilities: responsibilities,
        custom_terms: terms
      });

      // Capture element to canvas
      const element = printRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`IR_InfoTech_Offer_${intern.full_name.replace(/\s+/g, '_')}_${referenceNo.replace(/\//g, '-')}.pdf`);

      setDownloading(false);
      onSuccess?.();
    } catch (err) {
      console.error('PDF generation error:', err);
      setDownloading(false);
      alert('Error generating PDF: ' + err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-5xl glass-panel rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/10 my-4 max-h-[95vh] flex flex-col">
        
        {/* Top Rim Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />

        {/* Modal Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-tech text-white">
                Official Internship Offer Letter Generator
              </h2>
              <p className="text-xs text-slate-400">
                Candidate: <span className="text-white font-semibold">{intern.full_name}</span> • Ref: <span className="text-cyan-400 font-mono font-bold">{referenceNo}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              {isEditing ? 'View Letter Preview' : 'Edit Clauses'}
            </button>
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="px-4 py-1.5 rounded-xl text-xs font-semibold font-tech tracking-wider uppercase text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              {downloading ? 'Compiling PDF...' : 'Issue & Download PDF'}
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Edit Clauses Drawer (if enabled) */}
        {isEditing && (
          <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 space-y-3 shrink-0 my-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-cyan-400 uppercase tracking-wider">
              <Edit3 className="w-4 h-4" />
              Customise Offer Clauses & Parameters
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Custom Responsibilities</label>
                <textarea
                  rows={3}
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-200 focus:outline-none focus:border-cyan-400 text-xs"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Terms & Confidentiality Conditions</label>
                <textarea
                  rows={3}
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-200 focus:outline-none focus:border-cyan-400 text-xs"
                />
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENT PREVIEW CONTAINER (SCROLLABLE) */}
        <div className="flex-1 overflow-y-auto py-4 flex justify-center bg-slate-900/40 rounded-2xl p-2 sm:p-6 border border-white/5">
          
          {/* THE OFFICIAL A4 OFFER LETTER CANVAS (Exact dimensions for crisp A4 PDF) */}
          <div
            ref={printRef}
            className="w-[794px] min-h-[1123px] bg-white text-slate-800 p-12 relative flex flex-col justify-between shadow-2xl font-sans leading-relaxed selection:bg-sky-200 selection:text-black"
            style={{ width: '794px', minHeight: '1123px' }}
          >
            {/* 1. DARK AQUA-AND-BLACK BRAND HEADER */}
            <div>
              <div className="bg-[#05070f] text-white p-6 -mx-12 -mt-12 mb-8 relative border-b-4 border-cyan-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src="/ir-logo.png" alt="IR InfoTech" className="w-14 h-14 object-contain" />
                    <div>
                      <h1 className="text-2xl font-black tracking-wider text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        IR INFOTECH
                      </h1>
                      <p className="text-[11px] font-bold tracking-[0.25em] text-cyan-400 uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        IDEAS | INNOVATION | IMPACT
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-slate-300 space-y-0.5">
                    <p className="font-semibold text-white">INTERNSHIP OFFER LETTER</p>
                    <p className="font-mono text-cyan-400">Ref: {referenceNo}</p>
                    <p>Date: {formatDate(issueDate)}</p>
                  </div>
                </div>
              </div>

              {/* 2. RECIPIENT INFORMATION */}
              <div className="mb-6 pb-4 border-b border-slate-200 text-xs">
                <p className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Candidate Details:</p>
                <h3 className="text-base font-bold text-slate-900 mt-1">{intern.full_name}</h3>
                <p className="text-slate-600">{intern.course_degree} ({intern.department})</p>
                <p className="text-slate-600 font-medium">{intern.college_name}</p>
                <p className="text-slate-500">{intern.email} • {intern.mobile}</p>
              </div>

              {/* 3. FORMAL LETTER BODY */}
              <div className="space-y-4 text-xs text-slate-700 leading-relaxed text-justify">
                <p className="font-bold text-slate-900 text-sm">
                  Dear {intern.full_name},
                </p>

                <p>
                  On behalf of <strong>IR InfoTech</strong>, we are pleased to offer you an appointment as an <strong>Intern in {intern.domain}</strong> under our technology research and enterprise solutions division. We were impressed by your academic track record, technical aptitude, and enthusiasm for building cutting-edge digital systems.
                </p>

                {/* AQUA SECTION DIVIDER */}
                <div className="flex items-center gap-2 text-cyan-800 font-bold tracking-wide uppercase text-[11px] pt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block"></span>
                  1. Internship Schedule & Engagement Terms
                </div>
                <p>
                  Your internship will formally commence on <strong>{formatDate(intern.start_date)}</strong> and conclude on <strong>{formatDate(intern.end_date)}</strong>, covering an active engagement of <strong>{intern.duration_months} Months</strong>. This engagement will operate under the <strong>{intern.internship_mode}</strong> track.
                </p>

                {/* PAID vs UNPAID STIPEND CLAUSE */}
                <div className="p-3.5 rounded-xl bg-slate-50 border-l-4 border-cyan-500 text-slate-800">
                  {intern.internship_type === 'Paid' ? (
                    <p>
                      <strong>Remuneration / Stipend Terms:</strong> This is an approved <strong>Paid Industry Internship</strong>. You will be eligible for a fixed performance stipend of <strong>₹{intern.stipend_amount} per month</strong>, disbursed monthly subject to milestone completion and active attendance.
                    </p>
                  ) : (
                    <p>
                      <strong>Remuneration Terms:</strong> This is a structured <strong>Unpaid Industry Apprenticeship & Learning Track</strong>. No financial stipend or salary will be provided during this training period. The entire value of this engagement comprises hands-on industry mentorship, live architecture exposure, and verified professional credentialing upon completion.
                    </p>
                  )}
                </div>

                {/* RESPONSIBILITIES */}
                <div className="flex items-center gap-2 text-cyan-800 font-bold tracking-wide uppercase text-[11px] pt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block"></span>
                  2. Roles & Technical Responsibilities
                </div>
                <p>{responsibilities}</p>

                {/* TERMS & CONFIDENTIALITY */}
                <div className="flex items-center gap-2 text-cyan-800 font-bold tracking-wide uppercase text-[11px] pt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block"></span>
                  3. Proprietary Rights & Professional Conduct
                </div>
                <p>{terms}</p>

                <p>
                  Upon successful conclusion of your internship and satisfactory evaluation by your mentor, you will be awarded an official <strong>IR InfoTech Internship Completion Certificate</strong> verifiable globally through our public credential validation portal.
                </p>
              </div>
            </div>

            {/* 4. SIGNATURES & OFFICIAL SEAL SECTION */}
            <div className="mt-8 pt-4 border-t border-slate-200">
              <div className="flex items-end justify-between px-2">
                {/* Authorized Signatory with Real Uploaded Signature */}
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    For IR InfoTech (Authorized Signatory):
                  </p>
                  <div className="h-16 flex items-end">
                    <img
                      src="/ir-signature.png"
                      alt="Rajesh Lalwani Signature"
                      className="h-14 object-contain filter contrast-125"
                    />
                  </div>
                  <p className="font-bold text-slate-900 text-xs">Rajesh Lalwani</p>
                  <p className="text-[10px] text-slate-600 font-medium">Founder & Managing Director</p>
                  <p className="text-[9px] text-slate-400">IR InfoTech • Anand, Gujarat</p>
                </div>

                {/* Center Corporate Seal */}
                <div className="flex flex-col items-center">
                  <OfficialSeal className="w-24 h-24" />
                </div>

                {/* Candidate Acceptance Section */}
                <div className="space-y-1 text-right text-xs">
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    Candidate Acceptance:
                  </p>
                  <div className="h-14 border-b border-slate-400 w-44 ml-auto" />
                  <p className="text-[11px] text-slate-800 font-semibold">{intern.full_name}</p>
                  <p className="text-[9px] text-slate-500">Signature & Date</p>
                </div>
              </div>

              {/* 5. PROFESSIONAL DARK FOOTER */}
              <div className="mt-6 -mx-12 -mb-12 bg-[#05070f] text-slate-300 p-4 border-t-2 border-cyan-400 text-[9.5px] flex items-center justify-between">
                <div>
                  <span className="font-bold text-white">IR InfoTech</span> • Udyam Reg: <span className="font-mono text-cyan-400">UDYAM-GJ-03-0089721</span>
                </div>
                <div className="space-x-3">
                  <span>Web: https://ir-infotech-three.vercel.app/</span>
                  <span>Email: info.irinfotech@gmail.com</span>
                  <span>HQ: Anand, Gujarat</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
