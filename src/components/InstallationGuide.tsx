import React from 'react';
import { Download, FolderCheck, ShieldAlert, PlayCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { GOOGLE_DRIVE_DOWNLOAD_URL } from '../data/appData';

interface InstallationGuideProps {
  onOpenDownloadModal: () => void;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ onOpenDownloadModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Acesse o Google Drive Oficial',
      desc: 'Clique no botão de download para abrir a pasta oficial da App Datena no Google Drive, onde o arquivo original e atualizado está hospedado.',
      icon: FolderCheck
    },
    {
      num: '02',
      title: 'Baixe o Arquivo APK',
      desc: 'Localize o instalador WhatsTransmissão (.apk) e confirme o download direto para a pasta de downloads do seu smartphone Android.',
      icon: Download
    },
    {
      num: '03',
      title: 'Permita Fontes Desconhecidas',
      desc: 'Como o app é proprietário e distribuído diretamente pela App Datena, basta autorizar a instalação de fontes confiáveis se o Android solicitar.',
      icon: ShieldAlert
    },
    {
      num: '04',
      title: 'Pronto! Inicie seus Disparos',
      desc: 'Abra o WhatsTransmissão, crie sua primeira lista de contatos e execute suas transmissões automáticas com controle total e relatórios ao vivo.',
      icon: PlayCircle
    }
  ];

  return (
    <section id="instalacao" className="py-24 bg-[#0D1117] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-emerald-400 font-mono tracking-wider">
            PASSO A PASSO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            Como Instalar no seu Android em 2 Minutos
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Processo rápido, direto e sem complicações. Siga os 4 passos abaixo para começar a utilizar o WhatsTransmissão hoje mesmo.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-emerald-400">
                      {step.num}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/70 text-[11px] text-slate-500 font-mono">
                  Etapa rápida e segura
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">Pronto para começar?</h4>
            <p className="text-xs text-slate-400 mt-1">
              Baixe agora o arquivo APK diretamente da pasta oficial do Google Drive.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenDownloadModal}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Baixar WhatsTransmissão</span>
            </button>
            <a
              href={GOOGLE_DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              title="Abrir no Google Drive"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
