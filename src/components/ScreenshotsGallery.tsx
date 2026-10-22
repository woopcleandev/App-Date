import React from 'react';
import { Maximize2, Smartphone, Eye, CheckCircle2 } from 'lucide-react';
import { APP_SCREENSHOTS } from '../data/appData';

interface ScreenshotsGalleryProps {
  onOpenScreenshotModal: (index: number) => void;
}

export const ScreenshotsGallery: React.FC<ScreenshotsGalleryProps> = ({ onOpenScreenshotModal }) => {
  return (
    <section id="demonstracao" className="py-24 bg-[#0D1117] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-emerald-400 font-mono tracking-wider">
            INTERFACE REAL DO APLICATIVO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            Veja o WhatsTransmissão em Ação
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Capturas reais do aplicativo instalado em celular Android. Design escuro ergonômico, botões objetivos e relatórios imediatos.
          </p>
        </div>

        {/* 3 Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APP_SCREENSHOTS.map((screen, idx) => (
            <div
              key={screen.id}
              className="group bg-slate-900/50 border border-slate-800 rounded-3xl p-5 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Screen Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-mono text-emerald-400 font-medium">TELA 0{idx + 1}</span>
                  <span>{screen.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {screen.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {screen.description}
                </p>
              </div>

              {/* Smartphone Frame with Real Screenshot */}
              <div 
                onClick={() => onOpenScreenshotModal(idx)}
                className="relative rounded-2xl overflow-hidden bg-black border border-slate-700/80 aspect-[9/18] cursor-pointer shadow-lg group-hover:shadow-emerald-950/50 transition-all"
              >
                <img
                  src={screen.path}
                  alt={screen.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-103"
                  loading="lazy"
                />

                {/* Hover Button */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 bg-slate-900/90 border border-emerald-500/50 rounded-xl text-xs font-semibold text-emerald-300 flex items-center gap-2 backdrop-blur-md shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Clique para Ampliar</span>
                  </div>
                </div>
              </div>

              {/* Action trigger button */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenScreenshotModal(idx)}
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Explorar Detalhes</span>
                </button>
                <span className="text-[11px] text-slate-500 font-mono">Alta Resolução</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
