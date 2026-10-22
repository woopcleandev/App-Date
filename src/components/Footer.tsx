import React from 'react';
import { Download, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { GOOGLE_DRIVE_DOWNLOAD_URL } from '../data/appData';

interface FooterProps {
  onOpenDownloadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownloadModal }) => {
  return (
    <footer className="bg-[#070A0F] border-t border-slate-800/80 pt-16 pb-24 md:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="/" className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm font-black">
                AD
              </span>
              <span>App Datena</span>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Loja e laboratório de desenvolvimento de aplicativos e soluções próprias para empresas e empreendedores. Automação inteligente, controle total e alta produtividade.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Distribuição oficial e segura via Google Drive</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-white text-xs uppercase tracking-wider font-mono">
              Navegação
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#loja" className="hover:text-emerald-400 transition-colors">
                  Catálogo de Aplicativos
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-emerald-400 transition-colors">
                  Recursos do WhatsTransmissão
                </a>
              </li>
              <li>
                <a href="#demonstracao" className="hover:text-emerald-400 transition-colors">
                  Capturas de Tela e Demonstração
                </a>
              </li>
              <li>
                <a href="#instalacao" className="hover:text-emerald-400 transition-colors">
                  Passo a Passo de Instalação APK
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Downloads & Solutions (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-white text-xs uppercase tracking-wider font-mono">
              Aplicativo em Destaque
            </div>
            <p className="text-xs text-slate-400">
              Baixe a versão atualizada do WhatsTransmissão diretamente da nossa pasta pública no Google Drive.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={onOpenDownloadModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar WhatsTransmissão</span>
              </button>
              <a
                href={GOOGLE_DRIVE_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors text-xs"
              >
                <span>Google Drive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} App Datena. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-3">
            <span>WhatsTransmissão v1.0</span>
            <span aria-hidden="true">·</span>
            <span>Android APK</span>
            <span aria-hidden="true">·</span>
            <span>Hospedagem Google Drive</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
