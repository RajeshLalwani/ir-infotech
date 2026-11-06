import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('Enterprise IT Solutions');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-pill border border-cyan-400/40 text-cyan-300 text-xs font-semibold">
          <MessageSquare className="w-4 h-4 text-cyan-400" />
          <span>Connect With IR InfoTech</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Let’s Architect <br />
          <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]">Something Extraordinary</span>
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Whether you need enterprise software development, wish to enroll in our student training cohort, or explore strategic partnerships, our team responds within 24 hours.
        </p>
      </section>

      {/* 2. Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-cyan-400/30">
            <h3 className="font-tech text-xl font-bold text-white">Direct Communication</h3>
            
            <div className="space-y-4 text-xs">
              
              {/* Business Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400">Official Business & Inquiries:</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-[11px] text-cyan-400/80 mt-0.5">All Client, Internship & Career Correspondence</p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400">Telephone & WhatsApp:</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-[11px] text-emerald-400 mt-0.5">WhatsApp Active</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400">Innovation Center / Headquarters:</p>
                  <p className="text-sm font-semibold text-white">{COMPANY_INFO.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400">Operating Hours:</p>
                  <p className="text-sm font-semibold text-white">{COMPANY_INFO.hours}</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.27 1.64 1.64 0 0 0 0 3.27m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400">Official LinkedIn:</p>
                  <a
                    href={COMPANY_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>linkedin.com/company/ir-infotech-official</span>
                    <span className="text-[10px] text-cyan-400">↗</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Response Guarantee Badge */}
            <div className="pt-4 border-t border-cyan-500/20 flex items-center gap-2.5 text-xs text-cyan-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Standard response SLA: Within 24 business hours.</span>
            </div>

          </div>

          {/* Hologram Brand Badge */}
          <div className="glass-panel rounded-2xl p-6 flex items-center gap-4 border border-cyan-400/20">
            <div className="w-14 h-14 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-cyan-400 to-cyan-600 shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.5)]">
              <img src="/ir-logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <h4 className="font-tech text-base font-bold text-white">IR INFOTECH</h4>
              <p className="text-[11px] text-cyan-400 font-sub tracking-wider uppercase font-semibold">Technology Solutions</p>
              <p className="text-[11px] text-slate-400 mt-1">Enterprise Software · AI · Verified Training</p>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Form in Glassmorphism */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,240,255,0.2)] border border-cyan-400/40">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-tech text-2xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Your inquiry has been routed to our technical advisory team.
                </p>
                <div className="inline-block px-4 py-2 glass-pill rounded-xl text-cyan-300 font-mono text-xs border border-cyan-400/30">
                  INQ REF: {Math.floor(100000 + Math.random() * 900000)}
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all cursor-pointer font-sub shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-tech text-2xl font-bold text-white">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below. We will analyze your requirements and get back to you promptly.
                  </p>
                </div>

                {/* Inquiry Type selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">I am interested in: *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Enterprise IT Solutions', 'Student Internship / Training', 'Partnership / General'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center font-sub ${
                          inquiryType === type
                            ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(0,240,255,0.5)] font-bold'
                            : 'glass-card text-slate-400 hover:text-white border border-cyan-400/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full px-3.5 py-2.5 text-sm glass-panel border border-cyan-400/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@company.com"
                      className="w-full px-3.5 py-2.5 text-sm glass-panel border border-cyan-400/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm glass-panel border border-cyan-400/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Company / College Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. TechCorp Solutions"
                      className="w-full px-3.5 py-2.5 text-sm glass-panel border border-cyan-400/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Project Details or Inquiry *</label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project requirements, technology stack, timeline or student queries..."
                    className="w-full px-3.5 py-2.5 text-sm glass-panel border border-cyan-400/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer font-sub"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 Information is kept strictly confidential and protected under non-disclosure terms.
                </p>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
