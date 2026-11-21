import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import type { CheckoutUrls } from "@/types/landing";

interface CtaFinalSectionProps {
  checkoutUrls: CheckoutUrls;
}

export const CtaFinalSection: React.FC<CtaFinalSectionProps> = ({ checkoutUrls }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#090E1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Glow behind card */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-cyan-500/20 rounded-3xl blur-3xl -z-10" />

        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-emerald-500/40 shadow-2xl text-center space-y-8">
          {/* Logo badge */}
          <div className="flex justify-center">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-lg shadow-emerald-950/60">
              <Image
                src="/logo-finova.jpg"
                alt="Finova AI Marca Oficial"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Pare de perder dinheiro para o esquecimento e para o{" "}
              <span className="text-emerald-400">cheque especial</span>.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Junte-se a quem já tem clareza e paz mental todos os dias. Envie seu primeiro áudio no
              WhatsApp em menos de 60 segundos após o cadastro.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={checkoutUrls.pro}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Garantir Meu Acesso Imediato</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={checkoutUrls.starter}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              Ver Plano Básico (R$ 19,90)
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia incondicional de 7 dias com reembolso total</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sem fidelidade • Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
