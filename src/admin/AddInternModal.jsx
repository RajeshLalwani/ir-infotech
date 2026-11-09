import React, { useState, useEffect } from 'react';
import { X, UserPlus, CheckCircle2, AlertCircle, FileText, Calendar, Building2, Briefcase, GraduationCap, Shield } from 'lucide-react';
import { addIntern, updateIntern, generateNextInternId } from '../services/db';

const DOMAINS = [
  'Software Development',
  'Full-Stack Web Development (MERN / React)',
  'Business Development (BDE)',
  'Human Resources (HR)',
  'UI/UX Architecture & Product Design',
  'Digital Marketing & Content Strategy',
  'AI & Machine Learning Engineering',
  'Cloud Architecture & DevOps',
  'Data Science & Analytics',
  'Mobile Application Development (React Native / Flutter)',
  'Python & Enterprise Backend Systems',
  'Cybersecurity & Network Defense'
];

export default function AddInternModal({ isOpen, onClose, onSuccess, editIntern = null }) {
  const [step, setStep] = useState('form'); // 'form' | 'confirm'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextIdPreview, setNextIdPreview] = useState('...');

  // Form Fields State (Streamlined & Clean)
  const [formData, setFormData] = useState({
    // Personal Information
    full_name: '',
    email: '',
    mobile: '',
    gender: 'Prefer not to say',

    // Academic Profile
    college_name: '',
    university_name: '',
    course_degree: 'B.Tech / B.E.',
    department: 'Computer Engineering / IT',
    current_semester: '6th Semester',

    // Internship Details
    domain: DOMAINS[0],
    start_date: new Date().toISOString().split('T')[0],
    duration_months: 2,
    end_date: '',
    internship_mode: 'Remote',
    internship_type: 'Unpaid',
    stipend_amount: 0,
    assigned_mentor: 'Senior Technical Lead, IR InfoTech',
    status: 'Selected'
  });

  // Calculate End Date automatically based on Start Date + Duration Months
  useEffect(() => {
    if (formData.start_date && formData.duration_months) {
      const start = new Date(formData.start_date);
      if (!isNaN(start.getTime())) {
        const end = new Date(start);
        end.setMonth(end.getMonth() + parseInt(formData.duration_months, 10));
        setFormData(prev => ({
          ...prev,
          end_date: end.toISOString().split('T')[0]
        }));
      }
    }
  }, [formData.start_date, formData.duration_months]);

  // Load preview or edit data
  useEffect(() => {
    if (editIntern) {
      setFormData({
        ...editIntern,
        duration_months: editIntern.duration_months || 2
      });
      setNextIdPreview(editIntern.intern_id);
    } else {
      generateNextInternId().then(setNextIdPreview);
    }
  }, [editIntern, isOpen]);

  // Escape key listener for fast closing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value
    }));
  };

  const validate = () => {
    if (!formData.full_name.trim()) return 'Candidate Full Name is required.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      return 'A valid Email Address is required.';
    }
    if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, '').length < 10) {
      return 'A valid 10-digit Mobile Number is required.';
    }
    if (!formData.college_name.trim()) return 'College / Institute Name is required.';
    if (!formData.course_degree.trim()) return 'Course / Degree is required.';
    if (!formData.department.trim()) return 'Department / Specialisation is required.';
    if (!formData.start_date) return 'Internship Start Date is required.';
    if (!formData.end_date) return 'Internship End Date is required.';
    if (formData.internship_type === 'Paid' && (!formData.stipend_amount || formData.stipend_amount <= 0)) {
      return 'Please specify the monthly stipend amount for Paid internship.';
    }
    return null;
  };

  const handleProceedToConfirm = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStep('confirm');
  };

  const handleFinalSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      if (editIntern) {
        await updateIntern(editIntern.id, formData);
      } else {
        await addIntern(formData);
      }
      setLoading(false);
      onSuccess?.();
      onClose();
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Operation failed. Please try again.');
      setStep('form');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Top Rim Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_8px_#00f0ff]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-tech text-white">
                {editIntern ? 'Edit Intern Record' : 'Register New Intern'}
              </h2>
              <p className="text-xs text-slate-400">
                Assigned Intern ID: <span className="text-cyan-400 font-mono font-bold">{nextIdPreview}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* STEP 1: FORM INPUTS */}
        {step === 'form' && (
          <form onSubmit={handleProceedToConfirm} className="space-y-6">
            
            {/* SECTION A: PERSONAL INFORMATION */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-1.5">
                <Shield className="w-3.5 h-3.5" />
                Section A: Personal Information
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="e.g. Aarav Sharma"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="candidate@gmail.com"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION B: ACADEMIC PROFILE */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Section B: Academic Profile
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div className="sm:col-span-2">
                  <label className="text-slate-300 block mb-1 font-medium">College / Institute Name *</label>
                  <input
                    type="text"
                    name="college_name"
                    value={formData.college_name}
                    onChange={handleChange}
                    placeholder="e.g. Birla Vishvakarma Mahavidyalaya (BVM), Anand"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Affiliated University Name</label>
                  <input
                    type="text"
                    name="university_name"
                    value={formData.university_name}
                    onChange={handleChange}
                    placeholder="e.g. Gujarat Technological University"
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Course / Degree *</label>
                  <input
                    type="text"
                    name="course_degree"
                    value={formData.course_degree}
                    onChange={handleChange}
                    placeholder="B.Tech / BCA / MCA / Diploma"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Department / Specialisation *</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Computer Engineering / IT"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Semester / Year</label>
                  <input
                    type="text"
                    name="current_semester"
                    value={formData.current_semester}
                    onChange={handleChange}
                    placeholder="6th Semester / 3rd Year"
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* SECTION C: INTERNSHIP DETAILS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                Section C: Internship Details & Terms
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div className="sm:col-span-2">
                  <label className="text-slate-300 block mb-1 font-medium">Internship Domain / Role *</label>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    {DOMAINS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Internship Mode *</label>
                  <select
                    name="internship_mode"
                    value={formData.internship_mode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Remote">Remote (Virtual Track)</option>
                    <option value="On-site">On-site (Anand HQ)</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Start Date *</label>
                  <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Duration (Months) *</label>
                  <select
                    name="duration_months"
                    value={formData.duration_months}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value={1}>1 Month (4 Weeks)</option>
                    <option value={2}>2 Months (8 Weeks)</option>
                    <option value={3}>3 Months (12 Weeks)</option>
                    <option value={4}>4 Months (16 Weeks)</option>
                    <option value={6}>6 Months (Full Semester)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">End Date (Auto-Calculated) *</label>
                  <input
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    readOnly
                    className="w-full px-3 py-2 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-cyan-300 font-mono focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Internship Type *</label>
                  <select
                    name="internship_type"
                    value={formData.internship_type}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Unpaid">Unpaid (Learning Track)</option>
                    <option value="Paid">Paid (With Monthly Stipend)</option>
                  </select>
                </div>
                {formData.internship_type === 'Paid' && (
                  <div>
                    <label className="text-slate-300 block mb-1 font-medium">Stipend Amount (₹/Month) *</label>
                    <input
                      type="number"
                      name="stipend_amount"
                      value={formData.stipend_amount}
                      onChange={handleChange}
                      placeholder="e.g. 5000"
                      min={100}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>
                )}
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Initial Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Selected">Selected</option>
                    <option value="Offer Sent">Offer Sent</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="Withdrawn">Withdrawn</option>
                    <option value="Terminated">Terminated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-tech text-xs tracking-wider uppercase font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/10 cursor-pointer"
              >
                Review & Confirm Details →
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: CONFIRMATION REVIEW MODAL */}
        {step === 'confirm' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Confirm Intern Record Registration
              </div>
              <p>
                Please verify the details below before committing. This will assign Intern ID <span className="text-cyan-400 font-mono font-bold">{nextIdPreview}</span> and prepare their candidate profile for document issuance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              <div>
                <span className="text-slate-500 block">Candidate:</span>
                <span className="font-semibold text-white text-sm">{formData.full_name} ({formData.gender})</span>
                <span className="text-slate-400 block">{formData.email} • {formData.mobile}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Institution:</span>
                <span className="font-semibold text-white">{formData.college_name}</span>
                <span className="text-slate-400 block">
                  {formData.course_degree} ({formData.department}) • {formData.current_semester}
                  {formData.university_name ? ` • ${formData.university_name}` : ''}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">Internship Track:</span>
                <span className="font-semibold text-cyan-300">{formData.domain}</span>
                <span className="text-slate-400 block">{formData.internship_mode} • {formData.duration_months} Months</span>
              </div>
              <div>
                <span className="text-slate-500 block">Schedule & Stipend:</span>
                <span className="font-semibold text-white">{formData.start_date} to {formData.end_date}</span>
                <span className="text-slate-400 block">
                  {formData.internship_type === 'Paid' ? `Paid (₹${formData.stipend_amount}/mo)` : 'Unpaid (Learning Track)'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep('form')}
                disabled={loading}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                ← Edit Details
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={loading}
                className="px-6 py-2.5 rounded-xl font-tech text-xs tracking-wider uppercase font-semibold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center gap-2"
              >
                {loading ? 'Saving to Database...' : (editIntern ? 'Save Updated Changes' : 'Confirm & Save Intern Record')}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
