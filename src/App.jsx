import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';
import LegalModal from './components/LegalModal';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import InternshipsPage from './pages/InternshipsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

// New Integrated Systems: Admin Portal & Public Verification Page
import { AdminAuthProvider } from './admin/AdminAuthContext';
import AdminPortal from './admin/AdminPortal';
import VerifyCertificatePage from './pages/VerifyCertificatePage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [applyInitialTab, setApplyInitialTab] = useState('internship');
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState('privacy');

  // Synchronized browser route path state
  const [currentPath, setCurrentPath] = useState(() => {
    const p = window.location.pathname;
    const h = window.location.hash;
    if (p.startsWith('/admin') || h === '#admin') return '/admin';
    if (p.startsWith('/verify-certificate') || h.startsWith('#verify-certificate')) return '/verify-certificate';
    return '/';
  });

  // Listen to popstate for browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      const h = window.location.hash;
      if (p.startsWith('/admin') || h === '#admin') {
        setCurrentPath('/admin');
      } else if (p.startsWith('/verify-certificate') || h.startsWith('#verify-certificate')) {
        setCurrentPath('/verify-certificate');
      } else {
        setCurrentPath('/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (path === '/') {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
      setActivePage('home');
    } else {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage, currentPath]);

  const handleOpenApply = (tab = 'internship') => {
    setApplyInitialTab(tab);
    setIsApplyOpen(true);
  };

  const handleOpenLegal = (doc = 'privacy') => {
    setActiveLegalDoc(doc);
    setIsLegalOpen(true);
  };

  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-black text-slate-100 flex flex-col relative selection:bg-cyan-400 selection:text-black">
        
        {/* Preloader */}
        {loading && <Preloader onFinish={() => setLoading(false)} />}

        {/* 1. ROUTE: SECURE ADMIN PORTAL (/admin) */}
        {currentPath === '/admin' ? (
          <AdminPortal onNavigateToWebsite={() => navigateTo('/')} />
        ) : currentPath === '/verify-certificate' ? (
          /* 2. ROUTE: PUBLIC CERTIFICATE VERIFICATION PAGE (/verify-certificate) */
          <VerifyCertificatePage onNavigateHome={() => navigateTo('/')} />
        ) : (
          /* 3. ROUTE: OFFICIAL IR INFOTECH CORPORATE WEBSITE (Default /) */
          <>
            {/* Glassmorphic Header Navigation */}
            <Navbar
              activePage={activePage}
              setActivePage={setActivePage}
              onOpenApply={() => handleOpenApply('internship')}
              onNavigateVerify={() => navigateTo('/verify-certificate')}
            />

            {/* Main Page Content Body */}
            <main className="flex-1 relative z-10">
              {activePage === 'home' && (
                <HomePage
                  setActivePage={setActivePage}
                  onOpenApply={() => handleOpenApply('internship')}
                />
              )}

              {activePage === 'about' && (
                <AboutPage
                  setActivePage={setActivePage}
                  onOpenApply={() => handleOpenApply('internship')}
                />
              )}

              {activePage === 'services' && (
                <ServicesPage
                  setActivePage={setActivePage}
                />
              )}

              {activePage === 'portfolio' && (
                <PortfolioPage
                  setActivePage={setActivePage}
                />
              )}

              {activePage === 'internships' && (
                <InternshipsPage
                  onOpenApply={() => handleOpenApply('internship')}
                />
              )}

              {activePage === 'careers' && (
                <CareersPage
                  onOpenApply={() => handleOpenApply('career')}
                />
              )}

              {activePage === 'contact' && (
                <ContactPage />
              )}
            </main>

            {/* Footer with Legal Policies, Certificate Verification & Admin Desk Links */}
            <Footer
              setActivePage={setActivePage}
              onOpenLegal={handleOpenLegal}
              onOpenApply={() => handleOpenApply('internship')}
              onNavigateVerify={() => navigateTo('/verify-certificate')}
              onNavigateAdmin={() => navigateTo('/admin')}
            />

            {/* Simplified Apply Modal (Google Form + Official Links) */}
            <ApplyModal
              isOpen={isApplyOpen}
              onClose={() => setIsApplyOpen(false)}
              initialTab={applyInitialTab}
            />

            {/* Comprehensive Legal & Compliance Modal */}
            <LegalModal
              isOpen={isLegalOpen}
              onClose={() => setIsLegalOpen(false)}
              initialDoc={activeLegalDoc}
            />

            {/* Floating 1-Click WhatsApp Quick Action Desk */}
            <WhatsAppButton />
          </>
        )}

      </div>
    </AdminAuthProvider>
  );
}
