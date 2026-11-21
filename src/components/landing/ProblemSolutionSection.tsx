import React from "react";
import { XCircle, CheckCircle2, AlertOctagon, TrendingUp, Clock, Smartphone } from "lucide-react";

export const ProblemSolutionSection: React.FC = () => {
  const comparisons = [
    {
      problemIcon: Clock,
      problemTitle: "Planilhas Manuais que Ninguém Preenche",
      problemDesc:
        "Você baixa templates complexos, passa semanas sem abrir e quando tenta atualizar já perdeu dezenas de comprovantes e notas de rua.",
      solutionIcon: Smartphone,
      solutionTitle: "Input no WhatsApp em 5 Segundos",
      solutionDesc:
        "Acabou de pagar a conta? Manda um áudio ou foto no WhatsApp. A IA transcreve, categoriza e salva no banco sem quebrar sua rotina.",
    },
    {
      problemIcon: AlertOctagon,
      problemTitle: "A Armadilha Ilusória do Cheque Especial",
      problemDesc:
        "Os bancos misturam seu saldo com o limite pré-aprovado. Você gasta achando que o dinheiro é seu e paga até 8% a.m. de juros abusivos.",
      solutionIcon: CheckCircle2,
      solutionTitle: "Blindagem Contábil e Alerta Preventivo",
      solutionDesc:
        "O Finova AI separa categoricamente o Saldo Líquido Real do Limite do Banco. Se o saldo ficar crítico, ele te avisa antes de cobrar juros.",
    },
    {
      problemIcon: XCircle,
      problemTitle: "Contas Espalhadas em 3 ou 4 Aplicativos",
      problemDesc:
        "Você tem a conta do salário no bancão, cartão no roxinho e investimentos no Inter. Nunca sabe exatamente quanto tem disponível de verdade.",
      solutionIcon: TrendingUp,
      solutionTitle: "Visão Consolidada de Alta Resolução",
      solutionDesc:
        "Um único painel analítico executivo que unifica todas as contas, faturas de múltiplos cartões e calcula seu fluxo de caixa e runway futuro.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/25">
            <span>Chega de Fricção e Perda Financeira</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Por que <span className="text-red-400 line-through">planilhas antigas</span> falham e o{" "}
            <span className="text-emerald-400">Finova AI</span> funciona?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            90% das pessoas desistem do controle financeiro não por falta de vontade, mas pelo
            atrito de ter que abrir planilhas cansativas no computador. Veja o contraste:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {comparisons.map((item, idx) => {
            const ProblemIcon = item.problemIcon;
            const SolutionIcon = item.solutionIcon;

            return (
              <div
                key={idx}
                className="flex flex-col rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all shadow-xl group"
              >
                {/* Top: The Old Pain (Red Accent) */}
                <div className="p-6 sm:p-7 border-b border-slate-800/80 bg-red-950/15 flex-1 space-y-3">
                  <div className="flex items-center gap-2.5 text-red-400 font-semibold text-xs uppercase tracking-wider">
                    <ProblemIcon className="w-4 h-4 shrink-0" />
                    <span>Como a maioria faz (e falha)</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-red-300 transition-colors">
                    {item.problemTitle}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.problemDesc}</p>
                </div>

                {/* Bottom: The Finova Way (Emerald Accent) */}
                <div className="p-6 sm:p-7 bg-emerald-950/20 border-t border-emerald-500/20 flex-1 space-y-3">
                  <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <SolutionIcon className="w-4 h-4 shrink-0" />
                    <span>Com o Finova AI (Ativo Oficial)</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.solutionTitle}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.solutionDesc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Hook */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-lg sm:text-xl font-bold text-white">
              Pronto para transformar seu WhatsApp no seu assistente financeiro pessoal?
            </div>
            <div className="text-sm text-slate-400">
              Sem precisar instalar nenhum aplicativo na App Store ou Google Play.
            </div>
          </div>
          <a
            href="#planos"
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
          >
            Quero Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};
