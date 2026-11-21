import React from "react";
import Image from "next/image";
import { ShieldCheck, Heart } from "lucide-react";
import type { CheckoutUrls } from "@/types/landing";

interface FooterProps {
  checkoutUrls: CheckoutUrls;
}

export const Footer: React.FC<FooterProps> = ({ checkoutUrls }) => {
  return (
    <footer className="border-t border-slate-800/90 bg-[#060a12] text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/30">
                <Image
                  src="/logo-finova.jpg"
                  alt="Finova AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  Finova <span className="text-emerald-400">AI</span>
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-400 -mt-1 tracking-wider">
                  Marks Systems
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Micro-SaaS de inteligência financeira pessoal integrada ao WhatsApp. Elimine o atrito
              das planilhas, blinde-se contra os juros abusivos do cheque especial e tenha controle
              real do seu dinheiro.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Propriedade Intelectual Registrada • Marks Systems</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">Produto</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-emerald-400 transition-colors">
                  Simulador WhatsApp
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-emerald-400 transition-colors">
                  Diferenciais & Anti-Cheque
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-emerald-400 transition-colors">
                  Calculadora de ROI
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-emerald-400 transition-colors">
                  Planos & Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Account & Direct Links */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">Acesso Direto</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={checkoutUrls.login} className="hover:text-emerald-400 transition-colors">
                  Área de Membros (Login)
                </a>
              </li>
              <li>
                <a href={checkoutUrls.starter} className="hover:text-emerald-400 transition-colors">
                  Plano Starter (R$ 19,90)
                </a>
              </li>
              <li>
                <a href={checkoutUrls.pro} className="hover:text-emerald-400 transition-colors font-semibold text-emerald-400">
                  Plano Pro (R$ 34,90)
                </a>
              </li>
              <li>
                <a href={checkoutUrls.copilot} className="hover:text-emerald-400 transition-colors">
                  Copilot VIP (R$ 49,90)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">Conformidade</div>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400">Termos de Uso</span>
              </li>
              <li>
                <span className="text-slate-400">Política de Privacidade (LGPD)</span>
              </li>
              <li>
                <span className="text-slate-400">Segurança de Dados (AES-256)</span>
              </li>
              <li>
                <span className="text-slate-400">Status dos Serviços (99.9% SLA)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Finova AI — Todos os direitos reservados. Mantido e
            operado por <strong>Marks Systems</strong>.
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>para revolucionar a saúde financeira das pessoas.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
