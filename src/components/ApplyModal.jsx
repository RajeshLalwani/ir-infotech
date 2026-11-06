import React, { useState } from 'react';
import { X, CheckCircle2, GraduationCap, Briefcase, Sparkles, Send, ArrowRight } from 'lucide-react';
import { INTERNSHIP_DOMAINS, CAREER_OPENINGS } from '../data/content';

export default function ApplyModal({ isOpen, onClose, initialTab = 'internship', selectedDomain = '' }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'internship' | 'career'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    collegeOrOrg: '',
    yearOrExp: '',
    domain: selectedDomain || INTERNSHIP_DOMAINS[0].title,
    portfolioUrl: '',
    duration: '2 Months',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#090f20] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden my-8">
        
        {/* Top Glowing Header Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="font-tech text-2xl font-bold text-white">Application Received!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you for applying to <span className="text-cyan-400 font-semibold">IR InfoTech</span>. Your application reference ID is:
              </p>
              <div className="inline-block px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg text-cyan-300 font-mono text-sm font-bold tracking-wider">
                APP-{Math.floor(100000 + Math.random() * 900000)}
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 text-left space-y-2 max-w-md mx-auto">
              <p className="font-semibold text-cyan-400">Next Steps:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Our technical evaluation cell will review your profile.</li>
                <li>You will receive an official confirmation on <span className="text-slate-200">{formData.email || 'your email'}</span> within 24 hours.</li>
                <li>Shortlisted applicants will receive a Google Meet link for technical alignment.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider font-sub">
                <Sparkles className="w-4 h-4" />
                <span>Join IR InfoTech</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Fast-Track Your Tech Career
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Apply for industry-grade live project internships or explore lateral engineering roles.
              </p>
            </div>

            {/* Tab switch */}
            <div className="grid grid-cols-2 p-1 bg-slate-950/80 border border-slate-800 rounded-xl">
              <button
                type="button"
                onClick={() => setActiveTab('internship')}
                className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'internship'
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Internship & Training</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('career')}
                className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'career'
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Full-Time Careers</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-sm bg-slate-950/90 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full px-3 py-2 text-sm bg-slate-950/90 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-sm bg-slate-950/90 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {activeTab === 'internship' ? 'College / University *' : 'Current Company / Last Org *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.collegeOrOrg}
                    onChange={(e) => setFormData({ ...formData, collegeOrOrg: e.target.value })}
                    placeholder={activeTab === 'internship' ? 'e.g. AKTU / Delhi University' : 'e.g. Freelance / Tech Co'}
                    className="w-full px-3 py-2 text-sm bg-slate-950/90 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {activeTab === 'internship' ? 'Select Training Domain *' : 'Select Career Role *'}
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    {activeTab === 'internship' ? (
                      INTERNSHIP_DOMAINS.map((d) => (
                        <option key={d.id} value={d.title}>
                          {d.title}
                        </option>
                      ))
                    ) : (
                      CAREER_OPENINGS.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {activeTab === 'internship' ? 'Preferred Duration' : 'Total Experience'}
                  </label>
                  {activeTab === 'internship' ? (
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="1 Month">1 Month (Intensive Foundation)</option>
                      <option value="2 Months">2 Months (Standard Project)</option>
                      <option value="3 Months">3 Months (Advanced Capstone)</option>
                      <option value="6 Months">6 Months (Full Industry Track)</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      placeholder="e.g. 2.5 Years"
                      value={formData.yearOrExp}
                      onChange={(e) => setFormData({ ...formData, yearOrExp: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  GitHub Profile / LinkedIn / Portfolio URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  placeholder="https://github.com/username or https://linkedin.com/in/username"
                  className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Why do you want to join IR InfoTech? (Brief note)
                </label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your interests, programming projects, and goals..."
                  className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit {activeTab === 'internship' ? 'Internship Application' : 'Job Application'}</span>
              </button>

              <p className="text-[11px] text-center text-slate-500">
                🔒 By submitting, you agree to IR InfoTech's Terms & Conditions and Privacy Policy.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
