import React, { useState } from 'react';
import { X, Download, ExternalLink, Check, Copy, ShieldCheck, Smartphone, FolderCheck } from 'lucide-react';
import { GOOGLE_DRIVE_DOWNLOAD_URL } from '../data/appData';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(GOOGLE_DRIVE_DOWNLOAD_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleProceedToDownload = () => {
    window.open(GOOGLE_DRIVE_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 max-w-lg w-full bg-[#0F141C] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                APP DATENA · DOWNLOAD OFICIAL
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Baixar WhatsTransmissão
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative description */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            O instalador oficial está hospedado na pasta segura do <strong className="text-white">Google Drive da App Datena</strong>. Ao clicar no botão abaixo, você será direcionado para o download imediato do arquivo APK.
          </p>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instruções rápidas de instalação no celular:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-slate-400 pl-1 text-[11px]">
              <li>Acesse a pasta no Google Drive e toque no arquivo do app.</li>
              <li>Faça o download do APK no seu aparelho Android.</li>
              <li>Toque em <strong className="text-slate-300">Instalar</strong> (autorize fontes desconhecidas se solicitado).</li>
              <li>Abra o aplicativo e comece suas transmissões!</li>
            </ol>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={handleProceedToDownload}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/25 cursor-pointer hover:scale-[1.01]"
          >
            <FolderCheck className="w-5 h-5" />
            <span>Abrir Pasta no Google Drive e Baixar</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Link do Google Drive copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar link do Google Drive para compartilhar</span>
              </>
            )}
          </button>
        </div>

        {/* Security unboxed badge */}
        <div className="text-center pt-1 text-[11px] text-slate-500 font-mono">
          App Datena Softwares · 100% Livre de Vírus e Seguro
        </div>

      </div>

    </div>
  );
};
