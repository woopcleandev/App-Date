import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Smartphone } from 'lucide-react';
import { APP_SCREENSHOTS, GOOGLE_DRIVE_DOWNLOAD_URL } from '../data/appData';

interface ScreenshotModalProps {
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onOpenDownloadModal: () => void;
}

export const ScreenshotModal: React.FC<ScreenshotModalProps> = ({
  currentIndex,
  onClose,
  onNavigate,
  onOpenDownloadModal,
}) => {
  if (currentIndex === null) return null;

  const currentScreenshot = APP_SCREENSHOTS[currentIndex];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + APP_SCREENSHOTS.length) % APP_SCREENSHOTS.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % APP_SCREENSHOTS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative z-10 max-w-4xl w-full bg-[#0E131A] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
              0{currentIndex + 1}
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                {currentScreenshot.title}
              </h3>
              <p className="text-xs text-slate-400">{currentScreenshot.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Screenshot & Details */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Screenshot Display Frame (7 cols) */}
          <div className="md:col-span-7 flex justify-center relative">
            <div className="relative w-[280px] sm:w-[320px] rounded-[36px] p-2.5 bg-slate-800 border border-slate-700 shadow-xl">
              <div className="rounded-[28px] overflow-hidden aspect-[9/19.5] bg-black">
                <img
                  src={currentScreenshot.path}
                  alt={currentScreenshot.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Prev / Next floating arrow buttons */}
            <button
              type="button"
              onClick={() => onNavigate((currentIndex - 1 + APP_SCREENSHOTS.length) % APP_SCREENSHOTS.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white transition-colors cursor-pointer shadow-lg"
              title="Tela anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate((currentIndex + 1) % APP_SCREENSHOTS.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white transition-colors cursor-pointer shadow-lg"
              title="Próxima tela"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Details & Explanation (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                DETALHES DA TELA
              </span>
              <h4 className="text-xl font-bold text-white mt-1">
                {currentScreenshot.title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentScreenshot.description}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
              <div className="text-slate-400">
                <strong className="text-white">Destaque operacional:</strong> Interface nativa Android desenvolvida sob medida para não travar mesmo com listas densas de mais de 450 contatos.
              </div>
            </div>

            {/* Thumbnails to jump directly */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-500 font-mono block mb-2">OUTRAS TELAS:</span>
              <div className="flex gap-2">
                {APP_SCREENSHOTS.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onNavigate(idx)}
                    className={`flex-1 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                      idx === currentIndex
                        ? 'border-emerald-500/80 bg-emerald-500/10 text-emerald-300'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] font-mono block">0{idx + 1}</span>
                    <span className="text-xs font-semibold truncate block">{s.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Download CTA inside modal */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenDownloadModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Baixar WhatsTransmissão Agora</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
