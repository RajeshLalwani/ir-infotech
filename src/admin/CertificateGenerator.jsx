import React, { useState, useRef, useEffect } from 'react';
import { X, Download, ShieldCheck, AlertTriangle, RefreshCw, FileText, CheckCircle, Ban, Eye, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import OfficialSeal from '../components/OfficialSeal';
import { issueCertificate, generateNextCertificateId, revokeCertificate, reissueCertificate, getCompanySettings } from '../services/db';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function CertificateGenerator({ isOpen, onClose, intern, existingCert = null, onSuccess }) {
  const certRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [settings, setSettings] = useState(null);
  
  // Revoke state
  const [isRevoking, setIsRevoking] = useState(false);
  const [revokeReason, setRevokeReason] = useState('');
  const [revokeLoading, setRevokeLoading] = useState(false);

  // Reissue state
  const [isReissuing, setIsReissuing] = useState(false);
  const [reissueReason, setReissueReason] = useState('');
  const [correctedName, setCorrectedName] = useState('');
  const [correctedDomain, setCorrectedDomain] = useState('');

  useEffect(() => {
    if (isOpen && intern) {
      if (existingCert) {
        setCertificateId(existingCert.certificate_id);
        setIssueDate(existingCert.issue_date);
        setCorrectedName(existingCert.intern_name);
        setCorrectedDomain(existingCert.domain);
      } else {
        generateNextCertificateId().then(setCertificateId);
        setCorrectedName(intern.full_name);
        setCorrectedDomain(intern.domain);
      }
      getCompanySettings().then(setSettings);
    }
  }, [isOpen, intern, existingCert]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !intern) return null;

  const baseUrl = settings?.website || 'https://ir-infotech-three.vercel.app/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const qrVerificationUrl = `${cleanBase}/verify-certificate?id=${encodeURIComponent(certificateId)}`;

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
    if (!certRef.current) return;
    setDownloading(true);
    try {
      // If new, register in database
      if (!existingCert) {
        await issueCertificate(intern.id, {
          certificate_id: certificateId,
          issue_date: issueDate
        });
      }

      // Capture landscape A4
      const element = certRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`IR_InfoTech_Certificate_${(existingCert?.intern_name || intern.full_name).replace(/\s+/g, '_')}_${certificateId.replace(/\//g, '-')}.pdf`);

      setDownloading(false);
      onSuccess?.();
    } catch (err) {
      console.error('Certificate PDF generation error:', err);
      setDownloading(false);
      alert('Error generating certificate PDF: ' + err.message);
    }
  };

  const handleRevoke = async () => {
    if (!revokeReason.trim()) {
      alert('Please state a formal reason for certificate revocation.');
      return;
    }
    setRevokeLoading(true);
    try {
      await revokeCertificate(certificateId, revokeReason);
      setRevokeLoading(false);
      setIsRevoking(false);
      onSuccess?.();
      onClose();
    } catch (err) {
      setRevokeLoading(false);
      alert('Failed to revoke certificate: ' + err.message);
    }
  };

  const handleReissue = async () => {
    if (!reissueReason.trim()) {
      alert('Please state a reason for reissuing this certificate.');
      return;
    }
    try {
      await reissueCertificate(certificateId, {
        intern_name: correctedName,
        domain: correctedDomain
      }, reissueReason);
      setIsReissuing(false);
      onSuccess?.();
      alert('Certificate reissued and revision logged successfully.');
    } catch (err) {
      alert('Failed to reissue: ' + err.message);
    }
  };

  const isRevoked = existingCert?.status === 'REVOKED';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-6xl glass-panel rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/10 my-4 max-h-[96vh] flex flex-col">
        
        {/* Top Rim Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />

        {/* Modal Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border ${isRevoked ? 'bg-red-950/40 border-red-500/30 text-red-400' : 'bg-cyan-950/40 border-cyan-500/20 text-cyan-400'}`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-tech text-white flex items-center gap-2">
                Internship Completion Certificate
                {isRevoked && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                    REVOKED
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-400">
                Candidate: <span className="text-white font-semibold">{existingCert?.intern_name || intern.full_name}</span> • Certificate ID: <span className="text-cyan-400 font-mono font-bold">{certificateId}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {existingCert && !isRevoked && (
              <>
                <button
                  onClick={() => setIsReissuing(!isReissuing)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reissue / Correct
                </button>
                <button
                  onClick={() => setIsRevoking(!isRevoking)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-950/30 border border-red-500/30 text-red-300 hover:text-red-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Ban className="w-3.5 h-3.5" />
                  Revoke Certificate
                </button>
              </>
            )}

            {!isRevoked && (
              <button
                onClick={handleDownloadPDF}
                disabled={downloading}
                className="px-4 py-1.5 rounded-xl text-xs font-semibold font-tech tracking-wider uppercase text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:opacity-95 transition-opacity flex items-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                {downloading ? 'Rendering PDF...' : 'Download Landscape A4 PDF'}
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close certificate modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* REVOCATION DRAWER */}
        {isRevoking && (
          <div className="p-4 bg-red-950/30 rounded-2xl border border-red-500/30 space-y-3 shrink-0 my-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-red-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              Revoke Verified Credential: {certificateId}
            </div>
            <p className="text-slate-300">
              Revoking this credential will immediately mark it as <strong>REVOKED</strong> on the public verification portal. Please state the documented reason below:
            </p>
            <input
              type="text"
              value={revokeReason}
              onChange={(e) => setRevokeReason(e.target.value)}
              placeholder="e.g. Credential superseded by reissue / Academic criteria non-compliance"
              className="w-full p-2.5 rounded-xl bg-black/60 border border-red-500/30 text-red-200 focus:outline-none text-xs"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsRevoking(false)}
                className="px-3 py-1.5 rounded-xl text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleRevoke}
                disabled={revokeLoading}
                className="px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold cursor-pointer"
              >
                {revokeLoading ? 'Revoking...' : 'Confirm Revocation'}
              </button>
            </div>
          </div>
        )}

        {/* REISSUE / CORRECTION DRAWER */}
        {isReissuing && (
          <div className="p-4 bg-cyan-950/30 rounded-2xl border border-cyan-500/30 space-y-3 shrink-0 my-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-cyan-400 uppercase tracking-wider">
              <RefreshCw className="w-4 h-4" />
              Reissue Credential with Corrections
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 block mb-1">Corrected Intern Full Name</label>
                <input
                  type="text"
                  value={correctedName}
                  onChange={(e) => setCorrectedName(e.target.value)}
                  className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1">Corrected Internship Domain</label>
                <input
                  type="text"
                  value={correctedDomain}
                  onChange={(e) => setCorrectedDomain(e.target.value)}
                  className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-slate-300 block mb-1">Reason for Reissuance (Audit Trail Required)</label>
              <input
                type="text"
                value={reissueReason}
                onChange={(e) => setReissueReason(e.target.value)}
                placeholder="e.g. Corrected typographical error in candidate name"
                className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-white"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsReissuing(false)} className="px-3 py-1.5 text-slate-400">Cancel</button>
              <button onClick={handleReissue} className="px-4 py-1.5 bg-cyan-400 text-black font-bold rounded-xl cursor-pointer">
                Save & Update Certificate
              </button>
            </div>
          </div>
        )}

        {/* CERTIFICATE PREVIEW CANVAS (SCROLLABLE CONTAINER) */}
        <div className="flex-1 overflow-auto py-4 flex justify-center bg-slate-950/70 rounded-2xl p-2 sm:p-6 border border-white/5">
          
          {/* THE OFFICIAL LANDSCAPE A4 CERTIFICATE (1123px x 794px) */}
          <div
            ref={certRef}
            className="w-[1050px] h-[740px] bg-white text-slate-900 p-12 relative flex flex-col justify-between shadow-2xl selection:bg-cyan-200 select-none border-[12px] border-[#05070f] box-border"
            style={{ width: '1050px', height: '740px' }}
          >
            {/* INNER LUXURY DOUBLE BORDER & CORNER NOTCHES */}
            <div className="absolute inset-2 border-2 border-cyan-500 pointer-events-none" />
            <div className="absolute inset-3 border border-slate-300 pointer-events-none" />
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-600" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-600" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-600" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-600" />

            {/* REVOCATION WATERMARK OVERLAY */}
            {isRevoked && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="transform -rotate-25 border-8 border-red-600 text-red-600 px-12 py-4 rounded-3xl font-black text-6xl tracking-widest opacity-40 font-mono">
                  REVOKED CREDENTIAL
                </div>
              </div>
            )}

            {/* 1. TOP HEADER & LOGO LOCKUP */}
            <div className="flex items-center justify-between border-b-2 border-cyan-500 pb-4">
              <div className="flex items-center gap-4">
                <img src="/ir-logo.png" alt="IR InfoTech" className="w-16 h-16 object-contain" />
                <div>
                  <h1 className="text-3xl font-black tracking-wider text-slate-950" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    IR INFOTECH
                  </h1>
                  <p className="text-xs font-bold tracking-[0.3em] text-cyan-600 uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    IDEAS | INNOVATION | IMPACT
                  </p>
                </div>
              </div>
              <div className="text-right text-xs text-slate-600">
                <p className="font-semibold text-slate-900">Enterprise Tech & Systems</p>
                <p className="font-mono text-cyan-700 font-bold">ID: {certificateId}</p>
                <p>Issue Date: {formatDate(issueDate)}</p>
              </div>
            </div>

            {/* 2. CERTIFICATE CORE TITLES & RECIPIENT */}
            <div className="text-center my-auto space-y-3 px-8">
              <div className="inline-block">
                <span className="text-xs font-bold tracking-[0.35em] text-slate-500 uppercase block mb-1">
                  OFFICIAL INDUSTRY RECOGNITION
                </span>
                <h2 className="text-3xl font-extrabold tracking-widest text-[#05070f] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  CERTIFICATE OF INTERNSHIP
                </h2>
                <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-2" />
              </div>

              <p className="text-xs text-slate-500 italic pt-2">
                This is to proudly certify that
              </p>

              {/* CANDIDATE NAME */}
              <div className="py-1">
                <h3 className="text-3xl font-black text-slate-950 font-serif tracking-wide border-b border-slate-300 pb-2 inline-block px-10">
                  {existingCert?.intern_name || correctedName || intern.full_name}
                </h3>
              </div>

              {intern.college_name && (
                <p className="text-xs font-semibold text-slate-700">
                  of <span className="font-bold text-slate-900">{intern.college_name}</span>
                </p>
              )}

              {/* CITATION PARAGRAPH */}
              <p className="text-xs text-slate-700 max-w-2xl mx-auto leading-relaxed pt-1">
                has successfully and meritoriously completed an intensive industry internship in the domain of{' '}
                <strong className="text-slate-950 font-bold underline decoration-cyan-500 decoration-2 underline-offset-4">
                  {existingCert?.domain || correctedDomain || intern.domain}
                </strong>{' '}
                from <strong>{formatDate(intern.start_date)}</strong> to <strong>{formatDate(intern.end_date)}</strong> ({intern.duration_months} Months Track) at IR InfoTech.
              </p>
              
              <p className="text-[11px] text-slate-500 max-w-xl mx-auto">
                During this tenure, the candidate demonstrated exemplary diligence, technical competency, and professional ethics across production-grade engineering initiatives.
              </p>
            </div>

            {/* 3. SIGNATURES, QR CODE & CORPORATE SEAL SECTION */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-end justify-between px-4">
                
                {/* VERIFICATION QR CODE */}
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white border border-slate-300 rounded-lg shadow-sm">
                    <QRCodeSVG
                      value={qrVerificationUrl}
                      size={64}
                      level="H"
                      includeMargin={false}
                    />
                  </div>
                  <div className="text-[9px] text-slate-600 leading-tight space-y-0.5">
                    <p className="font-bold text-slate-900 flex items-center gap-1">
                      <QrCode className="w-3 h-3 text-cyan-600" />
                      Scan to Verify
                    </p>
                    <p className="font-mono text-[8.5px] text-slate-500">
                      ir-infotech-three.vercel.app
                    </p>
                    <p className="text-[8px] text-cyan-700 font-semibold">
                      Public Cryptographic Record
                    </p>
                  </div>
                </div>

                {/* CORPORATE EMBOSSED SEAL */}
                <div className="flex flex-col items-center">
                  <OfficialSeal className="w-24 h-24" />
                </div>

                {/* AUTHORIZED SIGNATORY */}
                <div className="text-right space-y-0.5">
                  <div className="h-14 flex items-end justify-end">
                    <img
                      src="/ir-signature.png"
                      alt="Authorized Signature"
                      className="h-12 object-contain filter contrast-125"
                    />
                  </div>
                  <div className="w-48 border-b border-slate-400 ml-auto pt-1" />
                  <p className="font-bold text-slate-900 text-xs">Rajesh Lalwani</p>
                  <p className="text-[10px] text-slate-600 font-medium">Founder & Managing Director</p>
                  <p className="text-[8.5px] text-slate-500">IR InfoTech • Anand, Gujarat</p>
                </div>

              </div>

              {/* FOOTER METRIC LINE */}
              <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[8px] text-slate-500 font-mono">
                <span>UDYAM REG: UDYAM-GJ-03-0089721</span>
                <span>AUTHENTICITY VERIFIABLE AT /verify-certificate?id={certificateId}</span>
                <span>ANAND, GUJARAT, INDIA</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
