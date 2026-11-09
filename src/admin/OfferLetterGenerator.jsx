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
  const [settings, setSettings] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Position Title (default: intern.domain or Software Development Intern)
  const [positionTitle, setPositionTitle] = useState('Software Development Intern');

  // Universal Bullet Points (5 Deliverables - Works universally for Software, BDE, HR, Marketing, Design, etc.)
  const [bullet1, setBullet1] = useState('Participate actively in functional project tasks, operational workflows, and assigned deliverables.');
  const [bullet2, setBullet2] = useState('Collaborate with mentors and cross-functional teams to execute initiatives adhering to company standards.');
  const [bullet3, setBullet3] = useState('Gain hands-on practical industry exposure with professional tools, modern methodologies, and corporate best practices.');
  const [bullet4, setBullet4] = useState('Contribute proactively to team milestones, document project outcomes, and report progress regularly.');
  const [bullet5, setBullet5] = useState('Engage in continuous skill enhancement, apply mentor feedback, and uphold organizational data integrity.');

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            </div>
            <div className="space-y-1.5">
              <label className="text-slate-300 block font-semibold">Deliverable Bullets (Universal)</label>
              <input
                type="text"
                value={bullet1}
                onChange={(e) => setBullet1(e.target.value)}
                className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs mb-1"
              />
              <input
                type="text"
                value={bullet2}
                onChange={(e) => setBullet2(e.target.value)}
                className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs mb-1"
              />
              <input
                type="text"
                value={bullet3}
                onChange={(e) => setBullet3(e.target.value)}
                className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs mb-1"
              />
              <input
                type="text"
                value={bullet4}
                onChange={(e) => setBullet4(e.target.value)}
                className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs mb-1"
              />
              <input
                type="text"
                value={bullet5}
                onChange={(e) => setBullet5(e.target.value)}
                className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs"
              />
            </div>
          </div>
        )}

        {/* LIVE A4 CANVAS PREVIEW (SCROLLABLE CONTAINER) */}
        <div className="flex-1 overflow-auto py-4 flex justify-center bg-slate-950/70 rounded-2xl p-2 sm:p-6 border border-white/5">
          
          {/* THE MASTER A4 CANVAS (794px x 1123px exact dimensions) */}
          <div
            ref={printRef}
            className="w-[794px] min-h-[1123px] bg-white text-slate-800 p-10 relative flex flex-col justify-between shadow-2xl font-sans leading-normal selection:bg-cyan-200 selection:text-black box-border"
            style={{ width: '794px', minHeight: '1123px' }}
          >
            <div>
              {/* 1. TOP DARK CYBER HEADER (Exact Visual Match to ChatGPT Design) */}
              <div className="bg-gradient-to-b from-[#010814] via-[#031528] to-[#010b18] text-white p-7 -mx-10 -mt-10 mb-5 relative overflow-hidden border-b-2 border-cyan-400 shadow-[0_4px_20px_rgba(0,240,255,0.15)]">
                {/* Glowing Cyber Wave SVG Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 800 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="neonGlowA" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#0284c7" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="neonGlowB" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <path d="M -50,140 C 150,40 300,160 500,60 C 650,-20 750,80 850,20" fill="none" stroke="url(#neonGlowA)" strokeWidth="2" />
                  <path d="M -50,110 C 200,150 400,20 600,130 C 700,180 800,90 850,60" fill="none" stroke="url(#neonGlowB)" strokeWidth="1.5" />
                </svg>

                {/* Cyber Glow Ambient Orbs */}
                <div className="absolute -top-12 -left-12 w-56 h-56 bg-cyan-500/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-56 h-56 bg-cyan-500/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-16 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

                {/* Brand Lockup */}
                <div className="flex items-center justify-between relative z-10 px-1">
                  <div className="flex items-center gap-4">
                    <img
                      src="/ir-logo.png"
                      alt="IR InfoTech"
                      className="w-16 h-16 object-contain filter drop-shadow-[0_0_12px_rgba(0,240,255,0.65)]"
                    />
                    <div>
                      <div className="flex items-baseline font-tech">
                        <span className="text-3xl font-black italic text-[#00f0ff] mr-2 drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">IR</span>
                        <span className="text-3xl font-black text-white tracking-wider">InfoTech</span>
                      </div>
                      <p className="text-[10.5px] font-bold tracking-[0.28em] text-cyan-300 uppercase mt-0.5" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        IDEAS &nbsp;|&nbsp; INNOVATION &nbsp;|&nbsp; IMPACT
                      </p>
                    </div>
                  </div>

                  {/* Ref No. in top corner */}
                  <div className="text-right text-[11px] font-mono text-cyan-300">
                    <p className="text-[9px] uppercase tracking-wider text-slate-400">Document Control</p>
                    <p className="font-bold">{referenceNo}</p>
                  </div>
                </div>

                {/* Center Hexagonal Title Badge with Horizontal Glowing Beam */}
                <div className="relative mt-4 flex items-center justify-center">
                  <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />
                  <div
                    className="relative z-10 px-9 py-2 bg-[#020b18] border-2 border-[#00f0ff] text-white text-xs font-black tracking-[0.22em] uppercase font-tech shadow-[0_0_16px_rgba(0,240,255,0.6)] flex items-center justify-center"
                    style={{ clipPath: 'polygon(14px 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0% 50%)' }}
                  >
                    INTERNSHIP OFFER LETTER
                  </div>
                </div>
              </div>

              {/* 2. RECIPIENT & UDYAM LAUREL BADGE SECTION (Matches ChatGPT Design) */}
              <div className="flex items-start justify-between pb-3.5 mb-3 border-b border-slate-200 text-xs">
                {/* Left: To Candidate */}
                <div className="space-y-0.5">
                  <p className="font-mono text-cyan-800 font-bold text-[11px]">
                    Ref. No.: <span className="text-slate-900">{referenceNo}</span>
                  </p>
                  <p className="text-slate-500 text-[11px] pt-1 font-semibold">To,</p>
                  <h3 className="text-base font-black text-slate-950 tracking-wide uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {intern.full_name}
                  </h3>
                  <p className="text-slate-700 font-bold text-xs">{intern.college_name}</p>
                </div>

                {/* Right: Date & Udyam Laurel Wreath Lockup */}
                <div className="text-right space-y-2 flex flex-col items-end">
                  <div className="text-xs">
                    <span className="text-slate-500 font-semibold">Date: </span>
                    <span className="font-bold text-slate-900">{formatDate(issueDate)}</span>
                  </div>

                  {/* Laurel Wreath Badge */}
                  <div className="flex flex-col items-center pt-0.5">
                    <div className="flex items-center justify-center gap-1.5 text-cyan-800">
                      <svg className="w-5 h-9 text-cyan-800" viewBox="0 0 24 40" fill="currentColor">
                        <path d="M12 35 C10 28, 4 22, 2 12 C1 8, 3 4, 6 2 C7 5, 8 10, 8 15 C8 20, 11 25, 12 30 Z" opacity="0.9" />
                        <path d="M8 30 C5 24, 2 18, 4 10 C5 12, 7 16, 7 20 Z" opacity="0.7" />
                        <circle cx="5" cy="5" r="1.5" />
                        <circle cx="3" cy="14" r="1.5" />
                      </svg>
                      <div className="text-[9px] font-black uppercase tracking-wider text-slate-800 text-center leading-tight">
                        UDYAM<br />REGISTERED<br />ENTERPRISE
                      </div>
                      <svg className="w-5 h-9 text-cyan-800 transform -scale-x-100" viewBox="0 0 24 40" fill="currentColor">
                        <path d="M12 35 C10 28, 4 22, 2 12 C1 8, 3 4, 6 2 C7 5, 8 10, 8 15 C8 20, 11 25, 12 30 Z" opacity="0.9" />
                        <path d="M8 30 C5 24, 2 18, 4 10 C5 12, 7 16, 7 20 Z" opacity="0.7" />
                        <circle cx="5" cy="5" r="1.5" />
                        <circle cx="3" cy="14" r="1.5" />
                      </svg>
                    </div>
                    <span className="mt-1 px-3 py-0.5 rounded-full bg-[#082f49] text-cyan-300 font-mono text-[9px] font-bold tracking-wider shadow-sm">
                      UDYAM-GJ-03-0089721
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. CYAN GRADIENT SUBJECT BANNER */}
              <div className="mb-3.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 text-slate-950 text-xs font-black flex items-center justify-between shadow-sm">
                <span>Subject: Offer of Internship at IR InfoTech</span>
                <span className="text-cyan-800 tracking-widest font-black select-none">///</span>
              </div>

              {/* 4. FORMAL LETTER BODY */}
              <div className="space-y-2.5 text-[11.5px] text-slate-700 leading-relaxed text-justify">
                <p className="font-bold text-slate-950 text-xs">
                  Dear {intern.full_name},
                </p>

                <p>
                  We are pleased to offer you the position of <strong>{positionTitle}</strong> at <strong>IR InfoTech</strong>. This opportunity will allow you to gain practical experience in software development, enhance your technical skills and work on real-world projects under the guidance of our experienced professionals.
                </p>

                <p>
                  Your internship will commence on <strong>{formatDate(intern.start_date)}</strong> for a period of <strong>{formatDuration(intern.duration_months)}</strong>, concluding on <strong>{formatDate(intern.end_date)}</strong>, and is affiliated with <strong>{intern.college_name}</strong>.
                </p>

                {/* 5. CONNECTED TIMELINE FEATURE BOX (Exact Match to ChatGPT Design) */}
                <div className="rounded-2xl border border-cyan-300 overflow-hidden my-3 shadow-sm bg-gradient-to-b from-cyan-50/70 to-white">
                  {/* Card Header with Code Emblem */}
                  <div className="bg-[#031b2e] text-white px-4 py-1.5 flex items-center justify-between text-xs font-bold font-tech tracking-wider border-b border-cyan-400/30">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono text-[10px] font-bold border border-cyan-500/40">
                        &lt;/&gt;
                      </span>
                      <span>During your internship, you will:</span>
                    </div>
                    <span className="text-cyan-400 tracking-widest select-none">///</span>
                  </div>

                  {/* Connected Vertical Timeline Bullets */}
                  <div className="p-3.5 pl-7 relative space-y-2.5 text-[11px] text-slate-800">
                    {/* Vertical Cyan Connecting Bar */}
                    <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-teal-400 to-cyan-500 shadow-[0_0_4px_#00f0ff]" />

                    {/* Bullet 1 */}
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-cyan-500 border-2 border-white shadow-[0_0_6px_#00f0ff]" />
                      <p className="leading-snug">{bullet1}</p>
                    </div>

                    {/* Bullet 2 */}
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-cyan-500 border-2 border-white shadow-[0_0_6px_#00f0ff]" />
                      <p className="leading-snug">{bullet2}</p>
                    </div>

                    {/* Bullet 3 */}
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-cyan-500 border-2 border-white shadow-[0_0_6px_#00f0ff]" />
                      <p className="leading-snug">{bullet3}</p>
                    </div>

                    {/* Bullet 4 */}
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-cyan-500 border-2 border-white shadow-[0_0_6px_#00f0ff]" />
                      <p className="leading-snug">{bullet4}</p>
                    </div>

                    {/* Bullet 5 */}
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-cyan-500 border-2 border-white shadow-[0_0_6px_#00f0ff]" />
                      <p className="leading-snug">{bullet5}</p>
                    </div>
                  </div>
                </div>

                <p>
                  We are confident that this internship will be a valuable learning experience for you and will contribute to your professional growth. Please confirm your acceptance of this offer by signing and returning this letter for our record.
                </p>

                <p className="font-semibold text-slate-900">
                  We look forward to having you on board at IR InfoTech.
                </p>
              </div>
            </div>

            {/* 7. SIGNATURES & OFFICIAL CORPORATE STAMP SECTION */}
            <div className="mt-4 pt-3 border-t border-slate-200">
              <div className="grid grid-cols-12 items-end">
                
                {/* Left: Authorized Signatory */}
                <div className="col-span-5 space-y-1">
                  <p className="text-[11px] font-semibold text-slate-600">Yours sincerely,</p>
                  <div className="h-14 flex items-end">
                    <img
                      src="/ir-signature.png"
                      alt="Rajesh Lalwani Signature"
                      className="h-12 object-contain filter contrast-125"
                    />
                  </div>
                  <h4 className="text-sm font-black text-slate-950 font-tech">Rajesh Lalwani</h4>
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Founder & CEO</p>
                  <p className="text-[10px] font-bold text-cyan-800">IR InfoTech</p>
                </div>

                {/* Center Divider */}
                <div className="col-span-1 flex justify-center h-20 items-center">
                  <div className="w-[1px] h-16 bg-slate-200" />
                </div>

                {/* Right: Round IR InfoTech Corporate Seal Stamp */}
                <div className="col-span-6 flex items-center justify-between pl-2">
                  <div className="flex flex-col items-center">
                    <OfficialSeal className="w-24 h-24" />
                  </div>

                  {/* Candidate Acceptance */}
                  <div className="text-right space-y-1">
                    <p className="text-[9.5px] text-slate-500 font-bold uppercase tracking-wider">
                      Candidate Acceptance:
                    </p>
                    <div className="h-12 border-b border-slate-400 w-36 ml-auto" />
                    <p className="text-[10px] text-slate-800 font-semibold">{intern.full_name}</p>
                    <p className="text-[8.5px] text-slate-400">Signature & Date</p>
                  </div>
                </div>

              </div>

              {/* 8. SLICK DARK CYBER FOOTER BAR (Exact Match to ChatGPT Design) */}
              <div className="mt-4 -mx-10 -mb-10 bg-gradient-to-b from-[#010814] via-[#020f20] to-[#010610] text-slate-300 p-4 border-t-2 border-cyan-400 text-[9.5px] space-y-2 shadow-[0_-4px_20px_rgba(0,240,255,0.15)] relative overflow-hidden">
                {/* Glowing Wave SVG line in Footer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 800 80" preserveAspectRatio="none">
                  <path d="M -50,50 C 200,10 400,70 600,20 C 700,0 800,40 850,20" fill="none" stroke="#00f0ff" strokeWidth="1.5" />
                </svg>

                {/* Top Info Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-cyan-300 font-medium relative z-10">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-white hover:text-cyan-300">https://ir-infotech-three.vercel.app/</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-white">info.irinfotech@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-white">+91 84889 84951</span>
                  </div>
                </div>

                {/* Bottom Row: Official Udyam Registration & HQ */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-slate-400 text-[8.5px] pt-1.5 border-t border-white/10 relative z-10">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-cyan-400" />
                    <span>Anand, Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-300">
                    <Shield className="w-2.5 h-2.5 text-cyan-400" />
                    <span>Udyam Registered Enterprise</span>
                  </div>
                  <div className="font-mono text-cyan-300 font-semibold">
                    Udyam Registration No.: UDYAM-GJ-03-0089721
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
