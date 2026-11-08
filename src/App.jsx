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

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [applyInitialTab, setApplyInitialTab] = useState('internship');
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState('privacy');

  // Smooth scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleOpenApply = (tab = 'internship') => {
    setApplyInitialTab(tab);
    setIsApplyOpen(true);
  };

  const handleOpenLegal = (doc = 'privacy') => {
    setActiveLegalDoc(doc);
    setIsLegalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col relative selection:bg-cyan-400 selection:text-black">
      
      {/* 1. Futuristic Orbital Preloader with Center Glitter in Logo Colors */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* Glassmorphic Header Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenApply={() => handleOpenApply('internship')}
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

      {/* Footer with Legal Policies & Fast Navigation */}
      <Footer
        setActivePage={setActivePage}
        onOpenLegal={handleOpenLegal}
        onOpenApply={() => handleOpenApply('internship')}
      />

      {/* 1. Simplified Apply Modal (Google Form + LinkedIn) */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        initialTab={applyInitialTab}
      />

      {/* 2. Comprehensive Legal & Compliance Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialDoc={activeLegalDoc}
      />

      {/* 3. Floating 1-Click WhatsApp Quick Action Desk */}
      <WhatsAppButton />

    </div>
  );
}
