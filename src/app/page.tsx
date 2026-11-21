"use client";

// CONFIGURAÇÃO CENTRALIZADA DE CHECKOUT E AUTENTICAÇÃO
// Altere facilmente os destinos de checkout e login do Finova AI aqui:
const CHECKOUT_URLS = {
  login: "/login",
  starter: "/cadastro?plan=starter", // Plano R$ 19,90/mês
  pro: "/cadastro?plan=pro",         // Plano R$ 34,90/mês (Mais Popular)
  copilot: "/cadastro?plan=copilot", // Plano R$ 49,90/mês
};

import React from "react";
import { TopBar } from "@/components/landing/TopBar";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhatsAppSimulator } from "@/components/landing/WhatsAppSimulator";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { PricingSection } from "@/components/landing/PricingSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaFinalSection } from "@/components/landing/CtaFinalSection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090E1A] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* 1. Barra de Topo com Notificação de Lançamento */}
      <TopBar />

      {/* 2. Navbar Fixa com Glassmorphism e Logo Oficial */}
      <Navbar checkoutUrls={CHECKOUT_URLS} />

      <main className="flex-1">
        {/* 3. Hero Section de Alto Impacto com Capa Oficial & Badges Flutuantes */}
        <HeroSection checkoutUrls={CHECKOUT_URLS} />

        {/* 4. Simulador Interativo do WhatsApp em Tempo Real (Groq Whisper + Gemini Flash) */}
        <WhatsAppSimulator />

        {/* 5. A Grande Dor: Planilhas Manuais & Cheque Especial vs. Finova AI */}
        <ProblemSolutionSection />

        {/* 6. Deep Dive nos Recursos: Áudio, Anti-Cheque, 6 Gráficos, Extratos e Privacidade */}
        <FeaturesSection />

        {/* 7. Calculadora Interativa de Economia e ROI */}
        <RoiCalculator checkoutUrls={CHECKOUT_URLS} />

        {/* 8. Matriz Oficial de Planos & Preços (Starter, Pro, Copilot) */}
        <PricingSection checkoutUrls={CHECKOUT_URLS} />

        {/* 9. Casos Reais e Prova Social com Personas do PRD */}
        <SocialProofSection />

        {/* 10. Segurança Nível Bancário, LGPD e Infraestrutura Marks Systems */}
        <SecuritySection />

        {/* 11. FAQ Interativo com Accordion */}
        <FaqSection />

        {/* 12. Chamada Final para Ação (CTA de Fechamento com Garantia) */}
        <CtaFinalSection checkoutUrls={CHECKOUT_URLS} />
      </main>

      {/* 13. Rodapé Oficial Marks Systems */}
      <Footer checkoutUrls={CHECKOUT_URLS} />
    </div>
  );
}
