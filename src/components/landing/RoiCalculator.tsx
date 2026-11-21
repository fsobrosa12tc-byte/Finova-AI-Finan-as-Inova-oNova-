"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Sparkles, Check, ArrowRight } from "lucide-react";
import type { CheckoutUrls } from "@/types/landing";

interface RoiCalculatorProps {
  checkoutUrls: CheckoutUrls;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ checkoutUrls }) => {
  const [gastosVariaveis, setGastosVariaveis] = useState<number>(1800);
  const [usaChequeEspecial, setUsaChequeEspecial] = useState<boolean>(true);
  const [quantidadeContas, setQuantidadeContas] = useState<number>(3);

  // Estimativas conservadoras de cálculo:
  // - 15% de economia em gastos invisíveis / compras por impulso não registradas
  // - Eliminação de 1 a 2 usos de cheque especial por ano (média de R$ 180 em juros por incidente)
  const economiaDespesas = Math.round(gastosVariaveis * 0.14);
  const economiaJurosCheque = usaChequeEspecial ? 160 : 0;
  const totalEconomiaMensal = economiaDespesas + economiaJurosCheque;
  const totalEconomiaAnual = totalEconomiaMensal * 12;

  const custoPlanoProAnual = 34.9 * 12;
  const roiMultiplicador = Math.round((totalEconomiaAnual / custoPlanoProAnual) * 10) / 10;

  return (
    <section id="calculadora" className="py-20 md:py-28 relative bg-[#070c16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora de Retorno sobre Investimento (ROI)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quanto o Finova AI coloca de volta no seu bolso{" "}
            <span className="text-emerald-400">todo mês?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            A maioria das pessoas perde centenas de reais por mês sem perceber por falta de
            rastreio em tempo real e juros embutidos em contas bancárias. Simule seu cenário:
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Slider 1: Gastos Variáveis Mensais */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-300">Gastos variáveis mensais (delivery, rua, lazer):</span>
                  <span className="text-emerald-400 font-mono text-base font-bold">
                    R$ {gastosVariaveis.toLocaleString("pt-BR")}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="8000"
                  step="100"
                  value={gastosVariaveis}
                  onChange={(e) => setGastosVariaveis(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>R$ 500</span>
                  <span>R$ 4.000</span>
                  <span>R$ 8.000+</span>
                </div>
              </div>

              {/* Toggle: Risco / Histórico de Cheque Especial */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold text-slate-200">
                      Você já entrou ou costuma usar limite de cheque especial?
                    </span>
                    <p className="text-xs text-slate-400">
                      Mesmo que por 2 ou 3 dias por desatenção entre salários
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={usaChequeEspecial}
                    onChange={(e) => setUsaChequeEspecial(e.target.checked)}
                    className="w-5 h-5 accent-emerald-500 rounded cursor-pointer shrink-0 ml-3"
                  />
                </label>
              </div>

              {/* Slider 2: Número de Contas / Cartões */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-300">Total de contas bancárias e cartões de crédito:</span>
                  <span className="text-cyan-400 font-mono text-base font-bold">
                    {quantidadeContas} {quantidadeContas === 1 ? "instituição" : "instituições"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={quantidadeContas}
                  onChange={(e) => setQuantidadeContas(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 (conta única)</span>
                  <span>3 (média nacional)</span>
                  <span>6+ (multicontas)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Cálculo calibrado pela metodologia Marks Systems de redução de vazamentos invisíveis.
              </span>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/40 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Economia Estimada</span>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Você pode economizar até:
                </div>
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight mt-1">
                  R$ {totalEconomiaMensal.toLocaleString("pt-BR")}
                  <span className="text-base text-slate-400 font-normal"> /mês</span>
                </div>
                <div className="text-sm text-slate-300 mt-1 font-medium">
                  Ou cerca de{" "}
                  <strong className="text-white">
                    R$ {totalEconomiaAnual.toLocaleString("pt-BR")} por ano
                  </strong>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Eliminação de compras invisíveis:</span>
                  <span className="font-semibold text-white">R$ {economiaDespesas}/mês</span>
                </div>
                {usaChequeEspecial && (
                  <div className="flex justify-between">
                    <span>Zero juros de cheque especial:</span>
                    <span className="font-semibold text-emerald-400">R$ {economiaJurosCheque}/mês</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Investimento Plano Pro Finova:</span>
                  <span className="font-semibold text-cyan-300">R$ 34,90/mês</span>
                </div>
              </div>

              {/* ROI Factor */}
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center">
                <span className="text-xs text-emerald-300 font-medium">
                  Retorno estimado de{" "}
                  <strong className="text-white text-sm font-bold">{roiMultiplicador}x</strong> o
                  valor da sua assinatura.
                </span>
              </div>
            </div>

            <a
              href={checkoutUrls.pro}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/25 transition-all"
            >
              <span>Ativar Meu Finova AI Agora</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
