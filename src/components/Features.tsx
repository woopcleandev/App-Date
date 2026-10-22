import React from 'react';
import { Send, BarChart3, PauseCircle, Shield, CheckCircle2, Zap } from 'lucide-react';
import { APP_FEATURES } from '../data/appData';

export const Features: React.FC = () => {
  return (
    <section id="recursos" className="py-24 bg-[#0A0D12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-emerald-400 font-mono tracking-wider">
            RECURSOS & FUNCIONALIDADES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2 text-balance">
            Construído para simplificar suas transmissões do início ao fim.
          </h2>
          <p className="text-base text-slate-400 mt-3 leading-relaxed">
            Elimine tarefas repetitivas, ganhe velocidade de contato e tenha visibilidade total de cada mensagem disparada para sua base de clientes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1 (Large - 7 cols): Disparo em Massa */}
          <div className="md:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-emerald-400">
                  {APP_FEATURES[0].number}. RECURSO PRINCIPAL
                </span>
                <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Send className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {APP_FEATURES[0].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {APP_FEATURES[0].description}
              </p>
            </div>

            {/* Visual simulation box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Status da Lista:</span>
                <span className="text-emerald-400 font-mono font-semibold">466 Contatos Carregados</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-400 h-2 rounded-full w-full transition-all duration-1000" />
              </div>
              <div className="text-[11px] text-slate-500 flex justify-between">
                <span>Campanha: Clientes Ativos</span>
                <span className="text-emerald-400 font-mono">100% Processado</span>
              </div>
            </div>
          </div>

          {/* Card 2 (5 cols): Métricas em tempo real */}
          <div className="md:col-span-5 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-emerald-400">
                  {APP_FEATURES[1].number}. RELATÓRIOS
                </span>
                <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <BarChart3 className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {APP_FEATURES[1].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {APP_FEATURES[1].description}
              </p>
            </div>

            {/* Micro stats table */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-slate-400 block text-[11px]">Enviados ao App</span>
                <span className="text-lg font-bold font-mono text-emerald-400 tabular-nums">466</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-slate-400 block text-[11px]">Falhas de Envio</span>
                <span className="text-lg font-bold font-mono text-slate-400 tabular-nums">0</span>
              </div>
            </div>
          </div>

          {/* Card 3 (5 cols): Pausa e Retomada */}
          <div className="md:col-span-5 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-emerald-400">
                  {APP_FEATURES[2].number}. CONTROLE OPERACIONAL
                </span>
                <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <PauseCircle className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {APP_FEATURES[2].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {APP_FEATURES[2].description}
              </p>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300">
                Funções nativas no app: <strong className="text-white">Retomar</strong> ou <strong className="text-white">Cancelar</strong>
              </div>
            </div>
          </div>

          {/* Card 4 (Large - 7 cols): Zero Mensalidade e Economia */}
          <div className="md:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-emerald-400">
                  {APP_FEATURES[3].number}. INDEPENDÊNCIA
                </span>
                <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {APP_FEATURES[3].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {APP_FEATURES[3].description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-emerald-200">
                  Economize até <strong>R$ 3.600,00 por ano</strong> em assinaturas de disparo web.
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">100% Grátis</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
