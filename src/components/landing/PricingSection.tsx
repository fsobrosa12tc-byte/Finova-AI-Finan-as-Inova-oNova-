import React from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import type { CheckoutUrls, PricingPlan } from "@/types/landing";

interface PricingSectionProps {
  checkoutUrls: CheckoutUrls;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ checkoutUrls }) => {
  const plans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      tagline: "Para quem quer começar com controle essencial via texto.",
      price: "19,90",
      period: "mês",
      ctaText: "Começar com Starter",
      checkoutKey: "starter",
      features: [
        { text: "Acesso Web completo ao dashboard", included: true },
        { text: "WhatsApp via mensagens de Texto simples", included: true },
        { text: "Dashboard analítico padrão com metas", included: true },
        { text: "Até 15 comprovantes assistidos/mês", included: true },
        { text: "Anti-Cheque Especial básico", included: true },
        { text: "Áudio com transcrição Groq Whisper", included: false },
        { text: "Uploads ilimitados de extratos PDF/CSV", included: false },
        { text: "Copiloto IA e relatórios quinzenais", included: false },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      tagline: "A experiência completa e sem atrito com áudio e fotos no WhatsApp.",
      price: "34,90",
      period: "mês",
      badge: "Mais Escolhido • Melhor Custo-Benefício",
      popular: true,
      ctaText: "Assinar Plano Pro (Recomendado)",
      checkoutKey: "pro",
      features: [
        { text: "Tudo do plano Starter incluso", included: true },
        {
          text: "WhatsApp com Áudio via Groq Whisper (<800ms)",
          highlighted: true,
          included: true,
        },
        {
          text: "Leitura de Cupons por Fotos (Gemini Flash OCR)",
          highlighted: true,
          included: true,
        },
        { text: "Uploads ilimitados de extratos PDF e CSV", included: true },
        { text: "Categorização preditiva contínua por IA", included: true },
        { text: "Histórico completo e múltiplos cartões", included: true },
        { text: "Monitor ativo de juros diários", included: true },
        { text: "Copiloto IA consultivo dedicado", included: false },
      ],
    },
    {
      id: "copilot",
      name: "Copilot VIP",
      tagline: "Para quem quer consultoria financeira proativa com inteligência artificial.",
      price: "49,90",
      period: "mês",
      badge: "Executivo / Exclusivo",
      ctaText: "Assinar Copilot VIP",
      checkoutKey: "copilot",
      features: [
        { text: "Todos os recursos do plano Pro inclusos", included: true },
        {
          text: "Copiloto IA Dedicado em linguagem natural",
          highlighted: true,
          included: true,
        },
        {
          text: "Canal prioritário e VIP no WhatsApp",
          highlighted: true,
          included: true,
        },
        { text: "Análise preditiva de fluxo de caixa futuro", included: true },
        { text: "Simulação de antecipação de juros e dívidas", included: true },
        {
          text: "Relatórios executivos quinzenais por e-mail",
          highlighted: true,
          included: true,
        },
        { text: "Suporte VIP direto com especialistas", included: true },
        { text: "Acesso antecipado a novas features", included: true },
      ],
    },
  ];

  return (
    <section id="planos" className="py-20 md:py-28 relative bg-[#090E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <Zap className="w-3.5 h-3.5" />
            <span>Investimento Acessível e Transparente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Planos simples que se pagam já na{" "}
            <span className="text-emerald-400">primeira semana</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Sem contratos de fidelidade. Cancele com um clique quando quiser. Comece agora com
            garantia incondicional de 7 dias.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const checkoutUrl = checkoutUrls[plan.checkoutKey];

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "glass-panel-gold border-amber-400/60 lg:-translate-y-2 shadow-2xl shadow-emerald-500/10"
                    : "glass-panel border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="space-y-1 mb-6">
                    <h3 className="text-2xl font-black text-white flex items-center gap-2">
                      {plan.name}
                      {isPopular && <Sparkles className="w-5 h-5 text-amber-400" />}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                    <span className="text-sm font-semibold text-slate-400">R$</span>
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">/{plan.period}</span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      O que está incluído:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          feat.included ? "text-slate-200" : "text-slate-500 line-through"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            feat.included
                              ? feat.highlighted
                                ? "text-amber-400 font-bold"
                                : "text-emerald-400"
                              : "text-slate-600"
                          }`}
                        />
                        <span className={feat.highlighted ? "font-semibold text-white" : ""}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href={checkoutUrl}
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg ${
                      isPopular
                        ? "bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 text-slate-950 hover:from-emerald-300 hover:to-teal-300 shadow-emerald-500/30"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center mt-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>7 dias de garantia incondicional</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / Direct Checkout Note */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-2 text-xs text-slate-400 bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
          <p>
            🔒 Pagamentos processados com segurança máxima via{" "}
            <strong className="text-slate-200">Mercado Pago (Pix e Cartão de Crédito)</strong>.
            Ativação imediata no seu WhatsApp logo após a confirmação.
          </p>
        </div>
      </div>
    </section>
  );
};
