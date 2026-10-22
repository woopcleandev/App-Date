import React, { useState } from 'react';
import { Download, Star, Check, ExternalLink, Sparkles, Clock, Smartphone, ShieldCheck, Megaphone } from 'lucide-react';
import { GOOGLE_DRIVE_DOWNLOAD_URL, APP_SCREENSHOTS } from '../data/appData';

interface AppCatalogProps {
  onOpenDownloadModal: () => void;
  onOpenScreenshotModal: (index: number) => void;
}

export const AppCatalog: React.FC<AppCatalogProps> = ({ onOpenDownloadModal, onOpenScreenshotModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'available' | 'upcoming'>('all');

  return (
    <section id="loja" className="py-20 bg-[#0C1017] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-emerald-400 font-mono tracking-wider">
              VITRINE OFICIAL
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-1">
              Catálogo de Aplicativos App Datena
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Desenvolvemos softwares e ferramentas proprietárias focadas em produtividade, automação e geração de negócios.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Todos (1 Disponível)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('available')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'available'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Prontos para Baixar
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('upcoming')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Em Breve
            </button>
          </div>
        </div>

        {/* Featured Store Card: WhatsTransmissão */}
        {(activeTab === 'all' || activeTab === 'available') && (
          <div className="bg-slate-900/70 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/40 relative overflow-hidden mb-10 transition-all hover:border-emerald-500/50">
            
            {/* Top Glow bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* App Icon + Core Presentation (4 columns) */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start gap-6">
                
                {/* App Icon - Styled as the real WhatsTransmissão icon */}
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-0.5 shadow-xl shadow-emerald-950/60 flex items-center justify-center">
                    <div className="w-full h-full bg-[#101720] rounded-[14px] flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 shadow-md">
                        <Megaphone className="w-7 h-7 fill-slate-950 text-slate-950" />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-1.5 leading-tight font-mono">
                        Whats<span className="text-emerald-400">Transmissão</span>
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md font-mono tracking-wider">
                    APK
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs text-slate-400">Desenvolvedor: <span className="text-slate-200 font-medium">App Datena</span></div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    WhatsTransmissão
                  </h3>
                  
                  {/* Rating & Version unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                    <div className="flex items-center text-amber-400 gap-1 font-semibold font-mono">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>5.0</span>
                    </div>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>Versão 1.0 Oficial</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-emerald-400 font-medium">Download Grátis</span>
                  </div>

                  <p className="text-xs text-slate-400 pt-1">
                    Solução de envio em massa inteligente para WhatsApp com gestão de listas e controle operacional em tempo real.
                  </p>
                </div>

              </div>

              {/* Technical Specifications & Feature Bullets (5 columns) */}
              <div className="lg:col-span-5 space-y-4 lg:border-x lg:border-slate-800 lg:px-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Especificações Técnicas
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                    <span className="text-slate-500 block text-[11px]">Plataforma:</span>
                    <span className="text-slate-200 font-medium font-mono">Android 8.0 ou superior</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                    <span className="text-slate-500 block text-[11px]">Formato:</span>
                    <span className="text-slate-200 font-medium font-mono">Arquivo APK Direto</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                    <span className="text-slate-500 block text-[11px]">Hospedagem:</span>
                    <span className="text-slate-200 font-medium">Google Drive Oficial</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                    <span className="text-slate-500 block text-[11px]">Custo / Licença:</span>
                    <span className="text-emerald-400 font-medium">Livre / Proprietário</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Disparo em massa sequencial seguro sem risco de instabilidade</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Relatório detalhado: enviados ao app, falhas e confirmações</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Botão de Retomada e Cancelamento a qualquer momento</span>
                  </div>
                </div>
              </div>

              {/* Action Column & Direct Download (3 columns) */}
              <div className="lg:col-span-3 flex flex-col justify-center items-stretch space-y-3">
                <div className="text-center p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 mb-1">
                  <span className="text-[11px] text-slate-400 block">Status do App:</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">Disponível Imediato</span>
                </div>

                <button
                  type="button"
                  onClick={onOpenDownloadModal}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Baixar Aplicativo Agora</span>
                </button>

                <a
                  href={GOOGLE_DRIVE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-[11px] font-medium text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <span>Abrir pasta no Google Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenScreenshotModal(0)}
                  className="w-full text-center text-[11px] text-slate-400 hover:text-emerald-400 transition-colors pt-1 cursor-pointer"
                >
                  Ver capturas de tela do app
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Upcoming Pipeline: Estúdio de Desenvolvimento App Datena */}
        {(activeTab === 'all' || activeTab === 'upcoming') && (
          <div className="mt-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>Em Desenvolvimento pelo Time App Datena</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Teaser 1 */}
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-4 opacity-75">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 shrink-0 font-mono text-sm font-bold">
                  CRM
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white">Datena Funil & CRM</h4>
                    <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
                      Em Breve
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Gestão visual de leads e clientes direto pelo WhatsApp, sincronizado com seus contatos de transmissão.
                  </p>
                </div>
              </div>

              {/* Teaser 2 */}
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-4 opacity-75">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 shrink-0 font-mono text-sm font-bold">
                  EXT
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white">Datena Extrator & Validador</h4>
                    <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
                      Em Breve
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Organizador inteligente de contatos por DDD, filtros de números ativos e formatação automática para listas.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
