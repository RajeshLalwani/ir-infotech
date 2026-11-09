import React, { useState, useEffect } from 'react';
import { Settings, Building2, Save, CheckCircle2, Shield, FileText, Award, AlertCircle } from 'lucide-react';
import OfficialSeal from '../components/OfficialSeal';
import { getCompanySettings, updateCompanySettings, isSupabaseConfigured } from '../services/db';

export default function CompanySettings() {
  const [settings, setSettings] = useState({
    company_name: 'IR InfoTech',
    tagline: 'IDEAS | INNOVATION | IMPACT',
    website: 'https://ir-infotech-three.vercel.app/',
    email: 'info.irinfotech@gmail.com',
    contact_number: '+91 84889 84951',
    address: 'Anand, Gujarat, India - 388001',
    udyam_reg_no: 'UDYAM-GJ-03-0089721',
    offer_prefix: 'IRIT/INT',
    cert_prefix: 'IRIT/CERT',
    intern_prefix: 'IRIT-INT',
    authorized_signatory: 'Rajesh Lalwani, Founder & Director'
  });

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getCompanySettings().then(data => {
      if (data) setSettings(data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);
    try {
      await updateCompanySettings(settings);
      setLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setLoading(false);
      alert('Error updating settings: ' + err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold font-tech text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-cyan-400" />
            Company Profile & Document Template Settings
          </h2>
          <p className="text-xs text-slate-400">
            Configure legal identifiers, official address, and document numbering sequences across generated offer letters and credentials.
          </p>
        </div>

        {saved && (
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5 border border-emerald-500/30">
            <CheckCircle2 className="w-4 h-4" />
            Settings saved successfully!
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Company Identity Details */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">
            <Building2 className="w-4 h-4" />
            Official Corporate Entity
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="text-slate-300 block mb-1 font-medium">Company Legal Name</label>
              <input
                type="text"
                name="company_name"
                value={settings.company_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-medium">Official Tagline</label>
              <input
                type="text"
                name="tagline"
                value={settings.tagline}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400 font-sub tracking-wider"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-medium">Udyam Registration No.</label>
              <input
                type="text"
                name="udyam_reg_no"
                value={settings.udyam_reg_no}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-300 font-mono focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-medium">Official Website</label>
              <input
                type="url"
                name="website"
                value={settings.website}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-medium">Official Support Email</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-medium">Contact Number</label>
              <input
                type="text"
                name="contact_number"
                value={settings.contact_number}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-slate-300 block mb-1 font-medium">Headquarters Address</label>
              <input
                type="text"
                name="address"
                value={settings.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-medium">Authorized Signatory Title</label>
              <input
                type="text"
                name="authorized_signatory"
                value={settings.authorized_signatory}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Document Numbering Sequence Prefixes */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">
            <Shield className="w-4 h-4" />
            Document Numbering Schemes & Prefixes
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="text-slate-300 block mb-1 font-medium">Intern ID Prefix</label>
              <input
                type="text"
                name="intern_prefix"
                value={settings.intern_prefix}
                onChange={handleChange}
                placeholder="IRIT-INT"
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-300 font-mono focus:outline-none focus:border-cyan-400"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Output: {settings.intern_prefix}-2026-0001</span>
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-medium">Offer Letter Reference Prefix</label>
              <input
                type="text"
                name="offer_prefix"
                value={settings.offer_prefix}
                onChange={handleChange}
                placeholder="IRIT/INT"
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-300 font-mono focus:outline-none focus:border-cyan-400"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Output: {settings.offer_prefix}/2026/0001</span>
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-medium">Certificate ID Prefix</label>
              <input
                type="text"
                name="cert_prefix"
                value={settings.cert_prefix}
                onChange={handleChange}
                placeholder="IRIT/CERT"
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-300 font-mono focus:outline-none focus:border-cyan-400"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Output: {settings.cert_prefix}/2026/0001</span>
            </div>
          </div>
        </div>

        {/* Brand Assets Inspection */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">
            <Award className="w-4 h-4" />
            Approved Brand Assets In Document Engine
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            
            {/* Logo */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center space-y-2">
              <span className="text-slate-400 font-medium">Official Logo Asset:</span>
              <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                <img src="/ir-logo.png" alt="IR InfoTech Logo" className="w-16 h-16 object-contain" />
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">public/ir-logo.png (Active)</span>
            </div>

            {/* Signature */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center space-y-2">
              <span className="text-slate-400 font-medium">Authorized Signatory:</span>
              <div className="p-3 bg-white rounded-xl border border-white/10 h-22 flex items-center justify-center">
                <img src="/ir-signature.png" alt="Rajesh Lalwani Signature" className="h-12 object-contain" />
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">public/ir-signature.png (Rlalwani)</span>
            </div>

            {/* Seal */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center space-y-2">
              <span className="text-slate-400 font-medium">Digital Corporate Seal:</span>
              <div className="p-2 bg-white rounded-xl border border-white/10 h-22 flex items-center justify-center">
                <OfficialSeal className="w-18 h-18" />
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">OfficialSeal.jsx (Active)</span>
            </div>

          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 rounded-xl font-tech text-xs tracking-wider uppercase font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            {loading ? 'Saving...' : 'Save Configuration Changes'}
          </button>
        </div>

      </form>
    </div>
  );
}
