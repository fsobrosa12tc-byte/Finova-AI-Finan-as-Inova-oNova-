import React from "react";
import {
  Mic,
  ShieldAlert,
  BarChart3,
  FileSpreadsheet,
  EyeOff,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Mic,
      tag: "Groq Whisper Large v3",
      title: "Input por Áudio em <800ms",
      desc: "Grave uma mensagem de áudio rápida no trânsito ou no restaurante. A IA transcreve instantaneamente em linguagem natural brasileira, extrai valores, identifica o cartão e pergunta pela confirmação.",
      color: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400",
      borderColor: "group-hover:border-cyan-500/50",
    },
    {
      icon: ShieldAlert,
      tag: "Exclusividade Marks Systems",
      title: "Motor Anti-Cheque Especial",
      desc: "O Finova AI impede a falsa sensação de riqueza separando rigorosamente seu Saldo Próprio do Limite de Cheque Especial bancário. Se você entrar no vermelho, ele calcula os juros diários acumulados e alerta.",
      color: "from-emerald-500/20 to-green-500/20",
      iconColor: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/50",
    },
    {
      icon: BarChart3,
      tag: "Interface Executiva Web",
      title: "6 Visões Analíticas com Dicas de IA",
      desc: "Tenha acesso a gráficos densos e intuitivos: Fluxo & Runway, Categorias Donut, Hierarquia de Cartões, Monitor de Limites, Metas Bullet Chart e Heatmap de Compras. Cada gráfico possui diagnósticos automáticos.",
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
      borderColor: "group-hover:border-purple-500/50",
    },
    {
      icon: FileSpreadsheet,
      tag: "Onboarding Inteligente",
      title: "Upload de Extrato em PDF/CSV",
      desc: "Não quer começar do zero? Faça o upload do extrato bancário dos últimos 30 dias em PDF ou CSV. Nosso pipeline com Gemini 1.5 Flash lê, categoriza em lote e calibra seu histórico em segundos.",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      borderColor: "group-hover:border-amber-500/50",
    },
    {
      icon: EyeOff,
      tag: "Privacidade Visual",
      title: "Modo Camuflagem no Dashboard",
      desc: "Abra seu painel em locais públicos, no trabalho ou em reuniões sem preocupação: um único clique no cabeçalho mascara todos os valores monetários com pontinhos seguros (••••).",
      color: "from-blue-500/20 to-sky-500/20",
      iconColor: "text-blue-400",
      borderColor: "group-hover:border-blue-500/50",
    },
    {
      icon: Lock,
      tag: "Nível Bancário & LGPD",
      title: "Segurança de Dados com Supabase RLS",
      desc: "Comunicação 100% criptografada via HTTPS/TLS 1.3. Seus dados residem em PostgreSQL no Supabase com isolamento absoluto por Row Level Security (RLS). Nenhuma senha bancária é solicitada.",
      color: "from-emerald-500/20 to-cyan-500/20",
      iconColor: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/50",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 relative bg-[#090E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
            <Zap className="w-3.5 h-3.5" />
            <span>Engenharia de Ponta a Serviço do Seu Bolso</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tecnologia de ponta para você não ter que pensar em{" "}
            <span className="text-cyan-400">fórmulas ou regras</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Combinamos os modelos de inteligência artificial mais avançados do mercado (Groq
            Whisper e Google Gemini 1.5 Flash) a uma arquitetura serverless de latência ultrabaixa.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`group relative p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/30 ${feat.borderColor}`}
              >
                {/* Glow pill behind icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center border border-white/10`}
                  >
                    <Icon className={`w-6 h-6 ${feat.iconColor}`} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-1 rounded-full bg-slate-800/70 border border-slate-700/60">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
