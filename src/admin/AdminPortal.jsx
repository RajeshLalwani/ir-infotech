import React, { useState } from 'react';
import { useAdminAuth } from './AdminAuthContext';
import AdminLoginPage from './AdminLoginPage';
import AdminDashboard from './AdminDashboard';
import InternDirectory from './InternDirectory';
import ExportData from './ExportData';
import CompanySettings from './CompanySettings';
import AuditLogs from './AuditLogs';
import AddInternModal from './AddInternModal';
import InternProfileModal from './InternProfileModal';
import OfferLetterGenerator from './OfferLetterGenerator';
import CertificateGenerator from './CertificateGenerator';

import {
  LayoutDashboard,
  Users,
  FileSpreadsheet,
  Settings,
  History,
  LogOut,
  ArrowLeft,
  Shield,
  Menu,
  X,
  Plus
} from 'lucide-react';

export default function AdminPortal({ onNavigateToWebsite }) {
  const { isAuthenticated, adminUser, logout } = useAdminAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingIntern, setEditingIntern] = useState(null);
  const [selectedInternForProfile, setSelectedInternForProfile] = useState(null);
  const [selectedInternForOffer, setSelectedInternForOffer] = useState(null);
  const [selectedInternForCert, setSelectedInternForCert] = useState(null);
  const [existingCertForModal, setExistingCertForModal] = useState(null);

  // If not logged in, render the secure Admin Login Page
  if (!isAuthenticated) {
    return <AdminLoginPage onNavigateToWebsite={onNavigateToWebsite} />;
  }

  const handleOpenAddIntern = (internToEdit = null) => {
    setEditingIntern(internToEdit);
    setIsAddOpen(true);
  };

  const handleOpenProfile = (intern) => {
    setSelectedInternForProfile(intern);
  };

  const handleOpenOffer = (intern) => {
    setSelectedInternForOffer(intern);
  };

  const handleOpenCertificate = (intern, existingCert = null) => {
    setSelectedInternForCert(intern);
    setExistingCertForModal(existingCert);
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'interns', label: 'Intern Management', icon: Users },
    { id: 'export', label: 'Export Data', icon: FileSpreadsheet },
    { id: 'settings', label: 'Company Settings', icon: Settings },
    { id: 'audit', label: 'Audit Trail', icon: History }
  ];

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 flex flex-col md:flex-row selection:bg-cyan-400 selection:text-black">
      
      {/* SIDEBAR NAVIGATION (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-[#080c18] border-r border-white/10 shrink-0 p-5 space-y-6">
        
        {/* Brand Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <img src="/ir-logo.png" alt="IR InfoTech" className="w-10 h-10 object-contain" />
          <div>
            <h2 className="text-sm font-bold font-tech text-white">IR INFOTECH</h2>
            <p className="text-[10px] tracking-wider text-cyan-400 font-semibold uppercase">Admin & HR Portal</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1.5 text-xs font-semibold">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                  active
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-md shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-cyan-400' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom Profile & Return */}
        <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <p className="text-[10px] text-slate-500 uppercase font-semibold">Authenticated Session:</p>
            <p className="text-white font-medium truncate" title={adminUser?.email}>{adminUser?.email}</p>
            <p className="text-[10px] text-cyan-400">{adminUser?.role}</p>
          </div>

          <button
            onClick={onNavigateToWebsite}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Public Website
          </button>

          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-950/20 transition-colors cursor-pointer text-[11px]"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>

      </aside>

      {/* MOBILE TOPBAR */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#080c18] border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <img src="/ir-logo.png" alt="IR InfoTech" className="w-8 h-8 object-contain" />
          <span className="font-bold text-sm text-white font-tech">IR Portal</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d19] border-b border-white/10 p-4 space-y-2 text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2 px-3 rounded-lg ${
                activeTab === item.id ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 flex justify-between">
            <button onClick={onNavigateToWebsite} className="text-slate-400 hover:text-white">
              Public Website
            </button>
            <button onClick={logout} className="text-red-400">
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-h-screen">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'dashboard' && (
            <AdminDashboard
              onNavigateTab={setActiveTab}
              onOpenAddIntern={() => handleOpenAddIntern(null)}
              onOpenProfile={handleOpenProfile}
              onOpenOffer={handleOpenOffer}
              onOpenCertificate={handleOpenCertificate}
            />
          )}

          {activeTab === 'interns' && (
            <InternDirectory
              onOpenAddIntern={() => handleOpenAddIntern(null)}
              onOpenProfile={handleOpenProfile}
              onOpenOffer={handleOpenOffer}
              onOpenCertificate={handleOpenCertificate}
            />
          )}

          {activeTab === 'export' && <ExportData />}
          {activeTab === 'settings' && <CompanySettings />}
          {activeTab === 'audit' && <AuditLogs />}
        </div>
      </main>

      {/* MODALS */}
      <AddInternModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        editIntern={editingIntern}
        onSuccess={() => {
          setIsAddOpen(false);
          // Reload if on interns or dashboard
        }}
      />

      <InternProfileModal
        isOpen={Boolean(selectedInternForProfile)}
        onClose={() => setSelectedInternForProfile(null)}
        intern={selectedInternForProfile}
        onOpenOffer={handleOpenOffer}
        onOpenCertificate={handleOpenCertificate}
        onEditIntern={(i) => {
          setSelectedInternForProfile(null);
          handleOpenAddIntern(i);
        }}
        onRefresh={() => {}}
      />

      <OfferLetterGenerator
        isOpen={Boolean(selectedInternForOffer)}
        onClose={() => setSelectedInternForOffer(null)}
        intern={selectedInternForOffer}
        onSuccess={() => {}}
      />

      <CertificateGenerator
        isOpen={Boolean(selectedInternForCert)}
        onClose={() => setSelectedInternForCert(null)}
        intern={selectedInternForCert}
        existingCert={existingCertForModal}
        onSuccess={() => {}}
      />

    </div>
  );
}
