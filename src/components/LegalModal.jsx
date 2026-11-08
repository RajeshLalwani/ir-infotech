import React, { useState } from 'react';
import { X, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function LegalModal({ isOpen, onClose, initialDoc = 'privacy' }) {
  const [activeDoc, setActiveDoc] = useState(initialDoc);

  if (!isOpen) return null;

  const docs = [
    { id: 'privacy', title: 'Privacy Policy' },
    { id: 'terms', title: 'Terms & Conditions' },
    { id: 'internship-terms', title: 'Internship Terms' },
    { id: 'refund', title: 'Refund & Cancellation' },
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'cookie', title: 'Cookie Policy' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10 my-6">
        
        {/* Top Rim Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-cyan-950/40 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider font-sub">
              <FileText className="w-4 h-4" />
              <span>IR InfoTech Compliance & Legal Framework</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white mt-1">
              Legal, Privacy & Institutional Policies
            </h2>
          </div>

          {/* Doc Switcher Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-cyan-500/20 pb-3">
            {docs.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDoc(d.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sub uppercase tracking-wider ${
                  activeDoc === d.id
                    ? 'bg-cyan-400 text-black shadow-md font-bold'
                    : 'glass-card text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>

          {/* Doc Content Area */}
          <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4 text-xs text-slate-300 leading-relaxed">
            
            {activeDoc === 'privacy' && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">Privacy Policy</h3>
                <p className="text-slate-400">Effective Date: November 2026 · IR InfoTech</p>
                <p>
                  At IR InfoTech, we are deeply committed to protecting the privacy, confidentiality, and data integrity of all clients, visitors, internship applicants, and registered students.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">1. Data We Collect</h4>
                <p>
                  We collect information you provide directly, including names, email addresses, phone/WhatsApp contact numbers, academic institutions, resumes, and project inquiry specifications submitted through our forms.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">2. How We Use Information</h4>
                <p>
                  Collected data is strictly utilized for communication, technical evaluation, student onboarding, service quotation, client project delivery, and issuing verifiable certificate credentials. We do not sell or monetize personal data to third-party ad networks.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">3. Data Security & Storage</h4>
                <p>
                  All sensitive applicant records and enterprise project blueprints are protected using industry-standard AES-256 encryption, TLS in transit, and role-based zero-trust access controls.
                </p>
              </div>
            )}

            {activeDoc === 'terms' && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">Terms & Conditions</h3>
                <p className="text-slate-400">Effective Date: November 2026 · IR InfoTech</p>
                <p>
                  Welcome to IR InfoTech. By accessing our website, engaging our IT services, or applying to our internship and training programs, you agree to comply with and be bound by the following terms.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">1. Scope of Services</h4>
                <p>
                  IR InfoTech delivers enterprise software development, IT consulting, AI implementations, and tech training. All technical deliverables are governed by explicit Statements of Work (SOW) executed between IR InfoTech and the client.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">2. Intellectual Property</h4>
                <p>
                  All proprietary code, branding, logos, trademarks, and educational curricula hosted on this platform are the exclusive intellectual property of IR InfoTech, protected under copyright and IP statutes.
                </p>
              </div>
            )}

            {activeDoc === 'internship-terms' && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">Internship & Training Terms</h3>
                <p className="text-slate-400">Official Student Guidelines · IR InfoTech</p>
                <p>
                  These terms govern student participation in all IR InfoTech internship tracks, workshops, capstone training programs, and live project cohorts.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">1. Code of Conduct & Academic Integrity</h4>
                <p>
                  Interns are expected to maintain professional etiquette, attend scheduled mentor standups, and deliver original, un-plagiarized code. Any unauthorized dissemination of proprietary source code or client data results in immediate expulsion and revocation of credentials.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">2. Certificate Issuance Criteria</h4>
                <p>
                  Verifiable Completion Certificates and Letters of Recommendation are granted only upon timely submission and technical review of assigned milestone tasks and capstone project modules.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">3. Stipend & Project Allocation</h4>
                <p>
                  Performance-based stipends are distributed according to verified milestone achievements in production sprints, as evaluated by the project engineering leads.
                </p>
              </div>
            )}

            {activeDoc === 'refund' && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">Refund & Cancellation Policy</h3>
                <p className="text-slate-400">Transparent Financial Policy · IR InfoTech</p>
                <p>
                  We believe in total transparency regarding all student training fees, workshop admissions, and enterprise project retainers.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">1. Student Training & Registration Fees</h4>
                <p>
                  Students enrolled in subsidized training cohorts may request a 100% refund within 48 hours of initial registration before course orientation commences. Once the student has accessed cloud labs, source repos, and mentor sessions, registration fees become non-refundable.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">2. Enterprise Milestone Retainers</h4>
                <p>
                  Client development contracts feature milestone-based escrow billing. If a deliverable fails to satisfy agreed specifications after revision cycles, client compensation is managed according to the dispute resolution clauses outlined in the master service contract.
                </p>
              </div>
            )}

            {activeDoc === 'disclaimer' && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">Statutory & Institutional Disclaimer</h3>
                <p className="text-slate-400">Compliance & Transparency Statement · IR InfoTech</p>
                <p>
                  The information provided on this website is for general informational, educational, and service engagement purposes.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">1. Official Registration Disclosures</h4>
                <p>
                  IR InfoTech operates in strict compliance with all applicable digital business regulations. Any future government registrations (e.g. Udyam MSME, GSTIN, ISO certifications) will be publicly presented only upon formal issuance by respective statutory authorities.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">2. Third-Party Trademarks</h4>
                <p>
                  Trademarks, logos, and brand names of technologies referenced (e.g., Python, React, AWS, Docker) are the property of their respective owners. Their mention signifies technological proficiency and does not imply direct sponsorship or affiliation.
                </p>
              </div>
            )}

            {activeDoc === 'cookie' && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">Cookie & Tracking Policy</h3>
                <p className="text-slate-400">Browser Storage & Preferences · IR InfoTech</p>
                <p>
                  Our platform utilizes essential cookies and local browser storage to guarantee website performance, maintain active session navigation, and remember user preferences.
                </p>
                <h4 className="font-semibold text-cyan-300 pt-2">1. Essential Cookies</h4>
                <p>
                  These are necessary for user navigation, submitting forms, and viewing digital certificates.
                </p>
              </div>
            )}

          </div>

          <div className="pt-4 border-t border-cyan-500/20 flex justify-between items-center text-xs">
            <span className="text-slate-400">Queries? Reach out to <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:underline">{COMPANY_INFO.email}</a></span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-bold uppercase tracking-wider hover:bg-cyan-300 cursor-pointer font-sub"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
