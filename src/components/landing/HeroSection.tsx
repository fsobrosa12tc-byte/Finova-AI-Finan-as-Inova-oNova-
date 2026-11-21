import React from "react";
import Image from "next/image";
import {
  Mic,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Lock,
  ChevronRight,
  Play,
} from "lucide-react";
import type { CheckoutUrls } from "@/types/landing";

interface HeroSectionProps {
  checkoutUrls: CheckoutUrls;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ checkoutUrls }) => {
  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-radial-hero pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-900/90 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-950/50 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">Novo:</span>
            <span>Inteligência Artificial & WhatsApp no Controle Financeiro Pessoal</span>
            <ChevronRight className="w-4 h-4 text-emerald-400 hidden sm:inline" />
          </div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Controle financeiro no piloto automático: registre despesas por{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent underline decoration-emerald-500/40 decoration-wavy decoration-2">
              áudio no WhatsApp
            </span>{" "}
            em 5 segundos.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Elimine de vez as planilhas manuais e o susto do cheque especial. O{" "}
            <strong className="text-white font-semibold">Finova AI</strong> transcreve seus áudios,
            separa rigorosamente o seu saldo real do limite do banco e alimenta um dashboard
            analítico com diagnósticos executivos em tempo real.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={checkoutUrls.pro}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Começar no Plano Pro (R$ 34,90/mês)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#simulador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/40 transition-all shadow-md group"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Testar Simulador do WhatsApp</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-3 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garantia incondicional de 7 dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Cancele a qualquer momento</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Sem acesso a senhas bancárias</span>
            </div>
          </div>
        </div>

        {/* Visual Element Hero Integrado (Capa Oficial + Overlays Flutuantes) */}
        <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
          {/* Ambient Glow Backdrop */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-teal-500/30 rounded-3xl blur-2xl opacity-75 animate-pulse-slow -z-10" />

          {/* Mockup Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-800">
              <Image
                src="/capa-finova.jpg"
                alt="Finova AI - Capa Oficial e Dashboard Executivo"
                fill
                priority
                className="object-cover object-top"
              />

              {/* Gradient Overlay for integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A] via-transparent to-transparent opacity-60" />

              {/* Floating Badge Top-Right: Transcrição de Áudio Groq Whisper */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 shadow-xl animate-float">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Mic className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Groq Whisper IA (&lt;800ms)
                  </div>
                  <div className="text-xs text-white font-medium">
                    &ldquo;Almoço executivo R$ 45 no débito&rdquo;
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold">
                    ✓ Categorizado: Alimentação
                  </div>
                </div>
              </div>

              {/* Floating Badge Bottom-Left: Anti-Cheque Especial */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                    Blindagem Anti-Ilusão
                  </div>
                  <div className="text-xs text-slate-200">
                    Saldo Real: <strong className="text-emerald-400">R$ 2.450,00</strong>
                  </div>
                  <div className="text-[10px] text-amber-400 font-semibold">
                    Cheque Especial (R$ 1.500) Isolado
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip below Hero */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                5 seg
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                Para registrar qualquer despesa
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
                94%+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                Acurácia de categorização por IA
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
                R$ 0,00
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                Perdidos em juros de cheque especial
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                No WhatsApp sem app pesado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
