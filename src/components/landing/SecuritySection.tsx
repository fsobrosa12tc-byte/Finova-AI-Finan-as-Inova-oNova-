import React from "react";
import { Shield, Lock, EyeOff, Server, Database, CheckCircle2 } from "lucide-react";

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      icon: Lock,
      title: "Sem Acesso a Senhas Bancárias",
      desc: "O Finova AI nunca pede seus dados de acesso bancário ou senhas de cartão. Você controla suas informações através de mensagens e comprovantes, sem risco de invasão na sua conta.",
    },
    {
      icon: Database,
      title: "Isolamento Total por Supabase RLS",
      desc: "Seus dados financeiros são armazenados em banco relacional PostgreSQL com Row Level Security ativo. Nenhum outro usuário ou processo externo consegue enxergar suas transações.",
    },
    {
      icon: Shield,
      title: "Criptografia de Ponta a Ponta",
      desc: "Tráfego 100% blindado com TLS 1.3 e criptografia de repouso AES-256. Conformidade estrita com a Lei Geral de Proteção de Dados (LGPD).",
    },
    {
      icon: EyeOff,
      title: "Modo Privacidade de 1 Clique",
      desc: "Use o Finova em qualquer lugar sem bisbilhoteiros. Um botão no painel oculta todos os seus saldos e valores monetários com máscara instantânea (••••).",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#090E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              <Shield className="w-3.5 h-3.5" />
              <span>Privacidade & Segurança Nível Bancário</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Seus dados pertencem a você.{" "}
              <span className="text-emerald-400">Segurança inegociável.</span>
            </h2>

            <p className="text-slate-300 text-base">
              Desenvolvido pela <strong className="text-white">Marks Systems</strong> sob rigorosos
              padrões de engenharia de software e privacidade financeira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {securityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Marks Systems Official Seal */}
          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Propriedade intelectual e infraestrutura de alta disponibilidade da{" "}
                <strong className="text-slate-200">Marks Systems</strong>.
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                TLS 1.3
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                AES-256
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                LGPD Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
