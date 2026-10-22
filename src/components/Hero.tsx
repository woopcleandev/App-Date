import React, { useState } from 'react';
import { Download, ArrowRight, Smartphone, ShieldCheck, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { GOOGLE_DRIVE_DOWNLOAD_URL, APP_SCREENSHOTS } from '../data/appData';

interface HeroProps {
  onOpenDownloadModal: () => void;
  onOpenScreenshotModal: (index: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownloadModal, onOpenScreenshotModal }) => {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);
  const activeScreenshot = APP_SCREENSHOTS[selectedScreenIndex];

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker (Zero-Pill: Clean unboxed metadata) */}
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="font-mono">APP DATENA</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Soluções Próprias para Negócios</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Primeiro Lançamento Oficial</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Automatize envios em massa no <span className="text-emerald-400">WhatsApp</span> e escale seu atendimento.
            </h1>

            {/* Subtitle / Description based exactly on user's prompt */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Conheça o <strong className="text-white font-semibold">WhatsTransmissão</strong>: o aplicativo definitivo da <strong>App Datena</strong> que automatiza o envio de mensagens em massa para o seu negócio e simplifica o atendimento ao cliente, otimizando o seu tempo e multiplicando o engajamento diário.
            </p>

            {/* Primary Action & Secondary Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenDownloadModal}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>Baixar WhatsTransmissão Grátis</span>
                <span className="font-mono text-xs bg-slate-950/15 px-2 py-0.5 rounded font-normal text-slate-950">
                  APK
                </span>
              </button>

              <a
                href="#demonstracao"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Ver Demonstração</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust and Technical Markers (Zero-Pill unboxed text) */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Compatível Android 8.0+
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                Download Seguro Google Drive
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                Sem Taxas por Mensagem
              </span>
            </div>

            {/* Quick KPI Strip */}
            <div className="pt-6 border-t border-slate-800/70 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">466+</div>
                <div className="text-xs text-slate-400 mt-0.5">Contatos por lista</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-emerald-400 tabular-nums">R$ 0</div>
                <div className="text-xs text-slate-400 mt-0.5">Sem mensalidade</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">1-Toque</div>
                <div className="text-xs text-slate-400 mt-0.5">Retomada automática</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Mobile App Showcase (5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive Screen Selector Tabs */}
            <div className="w-full max-w-sm mb-4 p-1 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs font-medium">
              {APP_SCREENSHOTS.map((screen, idx) => (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setSelectedScreenIndex(idx)}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center truncate ${
                    selectedScreenIndex === idx
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {screen.tag}
                </button>
              ))}
            </div>

            {/* Device Frame */}
            <div className="relative w-[290px] sm:w-[320px] rounded-[42px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-slate-700 shadow-2xl shadow-emerald-950/40">
              
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 mr-2 border border-slate-800" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
              </div>

              {/* Inner Screen Container */}
              <div 
                onClick={() => onOpenScreenshotModal(selectedScreenIndex)}
                className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19.5] cursor-pointer group"
                title="Clique para ampliar a captura de tela"
              >
                <img
                  src={activeScreenshot.path}
                  alt={activeScreenshot.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                />

                {/* Subtle Hover Overlay Badge */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3.5 py-1.5 bg-slate-900/90 border border-slate-700 rounded-full text-xs font-semibold text-emerald-400 flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Ampliar Tela Real</span>
                  </div>
                </div>
              </div>

              {/* Screen Caption below the device frame */}
              <div className="mt-3 px-2 text-center">
                <p className="text-xs font-semibold text-slate-200 truncate">{activeScreenshot.title}</p>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">{activeScreenshot.subtitle}</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
