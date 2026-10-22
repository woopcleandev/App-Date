import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { GOOGLE_DRIVE_DOWNLOAD_URL } from '../data/appData';

interface StickyMobileCtaProps {
  onOpenDownloadModal: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenDownloadModal }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0B0F15]/95 backdrop-blur-lg border-t border-slate-800 px-4 py-2.5 max-h-[12vh]">
      <div className="flex items-center justify-between gap-3">
        <div className="truncate min-w-0">
          <div className="text-xs font-bold text-white truncate">WhatsTransmissão</div>
          <div className="text-[10px] text-emerald-400 truncate font-mono">App Datena · APK Android</div>
        </div>

        <button
          type="button"
          onClick={onOpenDownloadModal}
          className="flex items-center gap-1.5 px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Baixar Grátis</span>
        </button>
      </div>
    </div>
  );
};
