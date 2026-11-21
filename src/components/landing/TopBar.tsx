import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface TopBarProps {
  onCtaClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onCtaClick }) => {
  return (
    <aside
      aria-label="Aviso de lançamento"
      className="relative z-50 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-cyan-950/80 border-b border-emerald-500/20 px-4 py-2 text-xs md:text-sm text-slate-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
            Lançamento Oficial
          </span>
          <span className="hidden sm:inline text-slate-300">
            <strong>Marks Systems</strong> apresenta o Finova AI: Controle financeiro por áudio no WhatsApp.
          </span>
          <span className="sm:hidden text-slate-300 font-medium">
            Finova AI: Finanças no seu WhatsApp
          </span>
        </div>

        <a
          href="#planos"
          onClick={onCtaClick}
          className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors shrink-0 group"
        >
          <span>Garantir Condição Especial</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </aside>
  );
};
