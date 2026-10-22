import React, { useState } from 'react';
import { Clock, TrendingUp, DollarSign, Download, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDownloadModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDownloadModal }) => {
  const [contactsPerWeek, setContactsPerWeek] = useState(450);
  const [campaignsPerWeek, setCampaignsPerWeek] = useState(3);

  // Math calculations
  // Manual: ~40 seconds per contact to open chat, paste, adjust, send
  const monthlyContacts = contactsPerWeek * campaignsPerWeek * 4;
  const manualMinutesPerMonth = (monthlyContacts * 40) / 60;
  const manualHoursPerMonth = Math.round(manualMinutesPerMonth / 60);

  // With WhatsTransmissão: ~3 minutes to setup and load list, then automatic execution
  const appHoursPerMonth = Math.round(((campaignsPerWeek * 4 * 4) / 60) * 10) / 10;
  const hoursSavedPerMonth = Math.max(1, manualHoursPerMonth - 1);

  // Financial savings against typical cloud bulk platforms (R$ 197/mo average)
  const monthlyToolCostSaved = 197;
  const annualSavings = monthlyToolCostSaved * 12;

  return (
    <section className="py-20 bg-[#0A0D12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 font-mono tracking-wider">
            SIMULADOR DE ECONOMIA
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-1">
            Calcule o tempo e dinheiro que você economiza
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Ajuste os parâmetros do seu negócio e veja o impacto prático de automatizar suas transmissões com o WhatsTransmissão.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* Slider 1: Contatos por lista */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-white">Contatos por lista / campanha:</span>
                <span className="font-mono text-emerald-400 font-bold text-base tabular-nums bg-emerald-500/10 px-3 py-0.5 rounded-lg border border-emerald-500/20">
                  {contactsPerWeek.toLocaleString('pt-BR')} contatos
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={contactsPerWeek}
                onChange={(e) => setContactsPerWeek(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>50 contatos</span>
                <span>500</span>
                <span>1.000</span>
                <span>2.500+</span>
              </div>
            </div>

            {/* Slider 2: Campanhas por semana */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-white">Campanhas disparadas por semana:</span>
                <span className="font-mono text-emerald-400 font-bold text-base tabular-nums bg-emerald-500/10 px-3 py-0.5 rounded-lg border border-emerald-500/20">
                  {campaignsPerWeek} por semana
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={campaignsPerWeek}
                onChange={(e) => setCampaignsPerWeek(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 campanha</span>
                <span>3 (comum)</span>
                <span>5</span>
                <span>10 campanhas</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-white">Estimativa de volume mensal:</div>
              <div className="text-slate-400 font-mono">
                Total de ~<strong className="text-emerald-400">{monthlyContacts.toLocaleString('pt-BR')}</strong> mensagens processadas por mês.
              </div>
            </div>

          </div>

          {/* Results Column (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-900 to-[#0A1715] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>SEU GANHO DE PRODUTIVIDADE</span>
              </div>

              {/* Big KPI Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tempo Economizado</span>
                  </div>
                  <div className="text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                    +{hoursSavedPerMonth}h
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Livres por mês para você focar no fechamento de vendas
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Economia Estimada</span>
                  </div>
                  <div className="text-3xl font-extrabold font-mono text-white tabular-nums">
                    R$ {annualSavings.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Economizados por ano sem pagar plataformas caras de envio
                  </div>
                </div>
              </div>

              {/* Comparison breakdown */}
              <div className="space-y-2 text-xs border-t border-slate-800 pt-4">
                <div className="flex justify-between text-slate-400">
                  <span>Envio Manual Tradicional:</span>
                  <span className="font-mono text-rose-400 font-semibold">~{manualHoursPerMonth} horas/mês</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Com WhatsTransmissão:</span>
                  <span className="font-mono text-emerald-400 font-semibold">&lt; 1 hora/mês</span>
                </div>
              </div>
            </div>

            {/* Quick action button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenDownloadModal}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Começar a Economizar Agora (Baixar App)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
