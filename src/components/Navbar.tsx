import React, { useState } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { GOOGLE_DRIVE_DOWNLOAD_URL } from '../data/appData';

interface NavbarProps {
  onOpenDownloadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    if (onOpenDownloadModal) {
      e.preventDefault();
      onOpenDownloadModal();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0D12]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="/" 
          className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors font-mono text-sm font-black">
            AD
          </span>
          <span className="text-slate-100">App Datena</span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#loja" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Aplicativos
          </a>
          <a href="#recursos" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Recursos
          </a>
          <a href="#demonstracao" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Demonstração
          </a>
          <a href="#instalacao" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Como Instalar
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={GOOGLE_DRIVE_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadClick}
            className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-emerald-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar WhatsTransmissão</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0E131A] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <a 
              href="#loja" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/60 transition-colors"
            >
              Aplicativos
            </a>
            <a 
              href="#recursos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/60 transition-colors"
            >
              Recursos
            </a>
            <a 
              href="#demonstracao" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/60 transition-colors"
            >
              Demonstração
            </a>
            <a 
              href="#instalacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/60 transition-colors"
            >
              Como Instalar
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/60 transition-colors"
            >
              Dúvidas
            </a>
          </nav>
          <div className="pt-2">
            <a
              href={GOOGLE_DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleDownloadClick(e);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Baixar WhatsTransmissão (Google Drive)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
