import React, { useState, useRef, useEffect } from 'react';
import { X, Download, Edit3, Shield, Globe, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import OfficialSeal from '../components/OfficialSeal';
import { createOfferLetter, generateNextOfferReference, getCompanySettings } from '../services/db';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function OfferLetterGenerator({ isOpen, onClose, intern, onSuccess }) {
  const printRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [referenceNo, setReferenceNo] = useState('');
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [acceptanceDeadline, setAcceptanceDeadline] = useState('');
  const [settings, setSettings] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Position Title (default: intern.domain or Software Development Intern)
  const [positionTitle, setPositionTitle] = useState('Software Development Intern');

  // Exact Official Reference Bullets (4 Standard Deliverables as per Approved Template)
  const [bullets, setBullets] = useState([
    'Participate in the development and enhancement of software applications.',
    'Collaborate with the team on design, coding, testing and deployment activities.',
    'Gain hands-on experience with development tools, frameworks and best practices.',
    'Contribute to assigned projects and share progress and learnings regularly.'
  ]);

  useEffect(() => {
    if (isOpen && intern) {
      generateNextOfferReference().then(setReferenceNo);
      getCompanySettings().then(setSettings);
      
      if (intern.domain && intern.domain !== 'ALL') {
        const cleaned = intern.domain.replace(/\(.*?\)/g, '').trim();
        setPositionTitle(cleaned.toLowerCase().includes('intern') ? cleaned : `${cleaned} Intern`);
      } else {
        setPositionTitle('Software Development Intern');
      }

      // Compute acceptance deadline (default: 1 day after start_date or issue date)
      if (intern.start_date) {
        try {
          const d = new Date(intern.start_date);
          d.setDate(d.getDate() + 1);
          setAcceptanceDeadline(d.toISOString().split('T')[0]);
        } catch {
          setAcceptanceDeadline(issueDate);
        }
      } else {
        setAcceptanceDeadline(issueDate);
      }
    }
  }, [isOpen, intern, issueDate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !intern) return null;

  const candidateFirstName = intern.full_name 
    ? intern.full_name.trim().split(' ')[0] 
    : 'Candidate';

  const formatDate = (dStr) => {
    if (!dStr) return '';
    try {
      const d = new Date(dStr);
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch {
      return dStr;
    }
  };

  const formatDuration = (m) => {
    const val = parseInt(m, 10);
    return `${m} ${val === 1 ? 'Month' : 'Months'}`;
  };

  const handleDownloadPDF = async () => {
    if (!printRef.current) return;
    setDownloading(true);
    try {
      await createOfferLetter(intern.id, {
        reference_no: referenceNo,
        issue_date: issueDate
      });

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-5xl glass-panel rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/10 my-4 max-h-[96vh] flex flex-col">
        
        {/* Top Rim Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />

        {/* Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 shrink-0">
          <div>
            <h2 className="text-base sm:text-lg font-bold font-tech text-white flex items-center gap-2">
              IR InfoTech Official Offer Letter
              <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/20">
                {referenceNo}
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Candidate: <span className="text-white font-semibold">{intern.full_name}</span> • Role: <span className="text-cyan-400 font-semibold">{positionTitle}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
              {isEditing ? 'Close Editor' : 'Customize Clauses'}
            </button>
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="px-4 py-1.5 rounded-xl text-xs font-semibold font-tech tracking-wider uppercase text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              {downloading ? 'Compiling PDF...' : 'Download Official PDF'}
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

        {/* Optional Customizer Drawer */}
        {isEditing && (
          <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 space-y-3 shrink-0 my-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Offer Position Title</label>
                <input
                  type="text"
                  value={positionTitle}
                  onChange={(e) => setPositionTitle(e.target.value)}
                  className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Issue Date</label>
                <input
                  type="date"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Acceptance Deadline</label>
                <input
                  type="date"
                  value={acceptanceDeadline}
                  onChange={(e) => setAcceptanceDeadline(e.target.value)}
                  className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-slate-300 block font-semibold">Deliverable Bullets (Exact 4 Standard Points)</label>
              {bullets.map((b, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={b}
                  onChange={(e) => {
                    const next = [...bullets];
                    next[idx] = e.target.value;
                    setBullets(next);
                  }}
                  className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs mb-1"
                />
              ))}
            </div>
          </div>
        )}

        {/* LIVE A4 CANVAS PREVIEW (SCROLLABLE CONTAINER) */}
        <div className="flex-1 overflow-auto py-4 flex justify-center bg-slate-950/70 rounded-2xl p-2 sm:p-6 border border-white/5">
          
          {/* THE MASTER A4 CANVAS (794px x 1123px exact dimensions, 0 root padding for full-bleed header/footer) */}
          <div
            ref={printRef}
            className="w-[794px] min-h-[1123px] bg-white text-slate-800 relative flex flex-col justify-between shadow-2xl font-sans leading-normal selection:bg-cyan-200 selection:text-black box-border overflow-hidden"
            style={{ width: '794px', minHeight: '1123px', padding: 0 }}
          >
            {/* 1. TOP HEADER BANNER (Full Bleed Edge-to-Edge, Exact Reference Asset) */}
            <div className="w-full block overflow-hidden shrink-0 select-none">
              <img
                src="/cyber-header-perfect.png"
                alt="IR InfoTech Official Header"
                className="w-full block pointer-events-none"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* 2. BODY CONTENT CONTAINER (Padding applies only to inner text content) */}
            <div className="px-10 pt-2 pb-0 flex-1 flex flex-col justify-between">
              <div>
                {/* META BAR WITH EXACT UDYAM BADGE & VERTICAL DIVIDER */}
                <div className="grid grid-cols-[1.2fr_auto_1fr] items-center gap-4 pb-2 mb-2">
                  <div className="space-y-0.5">
                    <div className="text-cyan-950 font-bold text-xs">
                      Ref. No.: <span className="text-slate-900">{referenceNo}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-semibold mt-1">To,</p>
                    <h3 className="text-sm font-black text-slate-950 font-tech uppercase tracking-wide">
                      {intern.full_name}
                    </h3>
                    {intern.college_name && (
                      <p className="text-[11px] text-slate-600 font-medium">
                        {intern.college_name}
                      </p>
                    )}
                  </div>

                  <div className="w-[1.5px] h-16 bg-slate-300 mx-auto" />

                  <div className="flex flex-col items-end gap-1">
                    <div className="text-xs text-slate-800">
                      <span className="text-slate-500 font-semibold">Date: </span>
                      <span className="font-bold text-slate-900">{formatDate(issueDate)}</span>
                    </div>
                    <img
                      src="/udyam-badge-clean.png"
                      alt="Udyam Registered Enterprise"
                      className="h-12 object-contain mt-0.5 drop-shadow-xs"
                    />
                  </div>
                </div>

                {/* CYAN GRADIENT SUBJECT BANNER (EXACT REFERENCE DESIGN) */}
                <div className="mb-3 px-5 py-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-cyan-500 text-slate-950 text-xs font-black flex items-center justify-between shadow-sm">
                  <span>Subject: Offer of Internship at IR InfoTech</span>
                  <span className="text-slate-950/70 tracking-widest font-black select-none">////</span>
                </div>

                {/* FORMAL LETTER BODY (EXACT MATCH TO APPROVED REFERENCE) */}
                <div className="space-y-2.5 text-[11.5px] text-slate-700 leading-relaxed text-justify">
                  <p className="font-bold text-slate-950 text-xs">
                    Dear {candidateFirstName},
                  </p>

                  <p>
                    We are pleased to offer you the position of <strong>{positionTitle}</strong> at <strong>IR InfoTech</strong>. This opportunity will allow you to gain practical experience in software development, enhance your technical skills and work on real-world projects under the guidance of our experienced professionals.
                  </p>

                  <p>
                    Your internship will commence on <strong>{formatDate(intern.start_date)}</strong> for a period of <strong>{formatDuration(intern.duration_months)}</strong>, concluding on <strong>{formatDate(intern.end_date)}</strong>{intern.college_name ? <span>, and is affiliated with <strong>{intern.college_name}</strong></span> : ''}. {intern.is_paid || intern.stipend_type === 'Paid' ? `This is a paid internship with a monthly stipend of ${intern.stipend_amount || 'as agreed'}.` : 'This is an unpaid internship; no stipend will be provided.'}
                  </p>

                  {/* 4 RESPONSIBILITIES FEATURE BOX (EXACT MATCH TO REFERENCE) */}
                  <div className="my-2.5 border border-cyan-300 rounded-2xl overflow-hidden shadow-xs bg-[#e8fafc]/70">
                    {/* Dark Terminal Header Tab */}
                    <div className="bg-[#04282e] text-white px-4 py-1.5 flex items-center justify-between text-xs font-bold font-tech tracking-wider border-b border-cyan-700/40">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span className="bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 px-1 py-0.5 rounded font-mono text-[9px]">&lt;/&gt;</span>
                        <span>During your internship, you will:</span>
                      </div>
                      <span className="text-cyan-400 tracking-widest select-none font-black text-xs">//</span>
                    </div>

                    {/* Connected Timeline Nodes with Continuous Vertical Rail */}
                    <div className="p-3.5 relative">
                      <div className="absolute left-[21px] top-4 bottom-5 w-[1.5px] bg-gradient-to-b from-cyan-400 via-teal-400 to-cyan-500 rounded-full" />

                      <div className="space-y-2 text-[10.5px] text-slate-800 pl-4">
                        {bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 relative">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 border border-white mt-0.5 shrink-0 shadow-[0_0_4px_#06b6d4] z-10" />
                            <p className="leading-snug">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p>
                    We are confident that this internship will be a valuable learning experience for you and will contribute to your professional growth. Please confirm your acceptance of this offer by replying to this communication by <strong>{formatDate(acceptanceDeadline)}</strong>.
                  </p>

                  <p className="font-semibold text-slate-900 text-[11px]">
                    We look forward to having you on board at IR InfoTech.
                  </p>
                </div>
              </div>

              {/* 3. AUTHENTICATION & OFFICIAL CORPORATE SEAL BLOCK (EXACT MATCH TO REFERENCE — NO CANDIDATE ACCEPTANCE) */}
              <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-[1.3fr_auto_1.2fr] items-center gap-6">
                
                {/* Left: Authorized Signatory */}
                <div className="flex items-stretch gap-3 pl-1">
                  <div className="w-1 bg-cyan-400 rounded-full shrink-0" />
                  <div className="space-y-0.5">
                    <p className="text-[10.5px] font-semibold text-slate-600">Yours sincerely,</p>
                    <div className="h-12 flex items-end">
                      <img
                        src="/ir-signature.png"
                        alt="Rajesh Lalwani Signature"
                        className="h-11 object-contain filter contrast-125"
                      />
                    </div>
                    <h4 className="text-sm font-black text-slate-950 font-tech">Rajesh Lalwani</h4>
                    <p className="text-[9.5px] font-semibold text-slate-700 tracking-wide">Founder & CEO</p>
                    <p className="text-[10px] font-bold text-cyan-800">IR InfoTech</p>
                  </div>
                </div>

                {/* Center: Thin Vertical Divider Line */}
                <div className="w-[1px] h-20 bg-slate-200 mx-auto" />

                {/* Right: Official Corporate Seal (Crisp, Transparent, Centered) */}
                <div className="flex justify-center items-center pr-4">
                  <img
                    src="/ir-official-stamp-clean.png"
                    alt="IR InfoTech Official Stamp"
                    className="w-28 h-28 object-contain pointer-events-none drop-shadow-sm"
                  />
                </div>

              </div>
            </div>

            {/* 4. BOTTOM FOOTER BANNER (Full Bleed Edge-to-Edge, Exact Reference Asset) */}
            <div className="w-full block overflow-hidden shrink-0 select-none">
              <img
                src="/cyber-footer-perfect.png"
                alt="IR InfoTech Official Footer"
                className="w-full block pointer-events-none"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
