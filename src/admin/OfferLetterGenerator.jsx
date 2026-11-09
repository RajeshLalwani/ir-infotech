import React, { useState, useRef, useEffect } from 'react';
import { X, Download, Edit3, Shield, Globe, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import OfficialSeal from '../components/OfficialSeal';
import CyberLetterheadHeader from '../components/CyberLetterheadHeader';
import CyberLetterheadFooter from '../components/CyberLetterheadFooter';
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
              {/* 1. TOP HEADER BANNER (100% Crisp Native Vector Cyber Header) */}
              <CyberLetterheadHeader className="-mx-10 -mt-10 mb-4" />

              {/* 2. CLEAN CORPORATE DATE & REFERENCE CONTROL BAR */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200 text-xs">
                <div className="font-mono text-slate-600 font-semibold text-[11px]">
                  Ref. No.: <span className="text-slate-900 font-bold">{referenceNo}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] font-semibold">Date: </span>
                  <span className="font-bold text-slate-900 text-xs">{formatDate(issueDate)}</span>
                </div>
              </div>

              {/* 3. CYAN GRADIENT SUBJECT BANNER */}
              <div className="mb-3.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 text-slate-950 text-xs font-black flex items-center justify-between shadow-sm">
                <span>Subject: Offer of Internship at IR InfoTech</span>
                <span className="text-cyan-800 tracking-widest font-black select-none">///</span>
              </div>

              {/* 4. FORMAL LETTER BODY (Starts directly with Candidate Full Name) */}
              <div className="space-y-2.5 text-[11.5px] text-slate-700 leading-relaxed text-justify">
                <p className="font-bold text-slate-950 text-sm">
                  Dear {intern.full_name},
                </p>

                <p>
                  Congratulations! We are pleased to extend to you an offer for the position of <strong>{positionTitle}</strong> at <strong>IR InfoTech</strong>. This opportunity will allow you to gain practical exposure across active corporate workflows, enhance your professional competencies, and collaborate on real-world initiatives under the mentorship of our team leads.
                </p>

                <p>
                  Your internship will commence on <strong>{formatDate(intern.start_date)}</strong> for a duration of <strong>{formatDuration(intern.duration_months)}</strong>, concluding on <strong>{formatDate(intern.end_date)}</strong>. During this period, you will participate in structured project initiatives designed to strengthen your applied capabilities, problem-solving faculties, and industry engineering standards.
                </p>

                {/* 5. UNIVERSAL FEATURE BOX (5 Universal Deliverables) */}
                <div className="rounded-2xl border border-cyan-300 overflow-hidden my-2.5 shadow-sm bg-gradient-to-b from-cyan-50/80 to-white">
                  {/* Card Header with Icon */}
                  <div className="bg-[#051829] text-white px-4 py-1.5 flex items-center justify-between text-xs font-bold font-tech tracking-wider">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      <span>During your internship, you will:</span>
                    </div>
                    <span className="text-cyan-400 tracking-widest select-none">///</span>
                  </div>

                  {/* Universal Bullet Nodes */}
                  <div className="p-3 space-y-2 text-[11px] text-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0 shadow-[0_0_4px_#06b6d4]" />
                      <p>{bullet1}</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0 shadow-[0_0_4px_#06b6d4]" />
                      <p>{bullet2}</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0 shadow-[0_0_4px_#06b6d4]" />
                      <p>{bullet3}</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0 shadow-[0_0_4px_#06b6d4]" />
                      <p>{bullet4}</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0 shadow-[0_0_4px_#06b6d4]" />
                      <p>{bullet5}</p>
                    </div>
                  </div>
                </div>

                {/* 6. SLS-INSPIRED CORPORATE COMPLIANCE & ANAND JURISDICTION CLAUSE */}
                <div className="p-2.5 bg-slate-50 rounded-xl border-l-2 border-cyan-500 text-[10.5px] text-slate-600 space-y-1">
                  <p>
                    <strong>Terms & Working Guidelines:</strong> Duties will be assigned through your designated supervisor and should not be taken as exhaustive. Interns are required to maintain strict confidentiality regarding company software, repositories, and client systems both during and after the tenure. In the event of any disputes, jurisdiction for resolution shall solely reside in <strong>Anand, Gujarat</strong>.
                  </p>
                </div>

                <p>
                  We are confident that this internship will be a valuable learning experience for you and will contribute to your professional growth. Please confirm your acceptance of this offer by signing and returning this letter for our record.
                </p>

                <p className="font-semibold text-slate-900">
                  We look forward to having you on board at IR InfoTech.
                </p>
              </div>
            </div>

            {/* 7. SIGNATURES & OFFICIAL ROUND STAMP SECTION */}
            <div className="mt-3 pt-3 border-t border-slate-200">
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

                {/* Right: Round IR InfoTech Corporate Seal Stamp (Exact User Asset) */}
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

              {/* 8. SLICK DARK CYBER FOOTER BAR (100% Crisp Native Vector Cyber Footer) */}
              <CyberLetterheadFooter className="-mx-10 -mb-10 mt-4" />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
