import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import type { TestimonialItem } from "@/types/landing";

export const SocialProofSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: "Lucas P.",
      age: 29,
      role: "Profissional Multicontas / Engenheiro de Software",
      city: "São Paulo, SP",
      initials: "LP",
      avatar: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      quote:
        "Eu tinha conta salário no Itaú, cartão no Inter e investimentos na XP. Sempre caía no cheque especial achando que tinha saldo na conta, porque o app do banco mistura tudo. Com o Finova, mando um áudio de 4 segundos enquanto saio do restaurante e ele já me avisa se o saldo real estiver acabando. Economizei mais de R$ 600 em juros nos últimos 3 meses.",
      highlight: "Economizou R$ 600+ em juros de cheque especial",
      rating: 5,
      tag: "Caso Real: Multicontas",
    },
    {
      name: "Mariana R.",
      age: 36,
      role: "Planejadora Familiar / Gestora de Operações",
      city: "Curitiba, PR",
      initials: "MR",
      avatar: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      quote:
        "Tentei usar planilhas por anos e sempre abandonava na segunda semana. No Finova, subi o extrato dos últimos 30 dias em PDF e em menos de 1 minuto a inteligência artificial já identificou mais de R$ 380 em assinaturas recorrentes e pequenos gastos diários que estavam sangrando o orçamento da nossa família.",
      highlight: "Encontrou R$ 380 em assinaturas esquecidas",
      rating: 5,
      tag: "Caso Real: Orçamento Familiar",
    },
    {
      name: "Rodrigo F.",
      age: 42,
      role: "Consultor Comercial & Vendedor Externo",
      city: "Belo Horizonte, MG",
      initials: "RF",
      avatar: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      quote:
        "Passo o dia na rua visitando clientes. Gastos de combustível, pedágio, almoço e estacionamento se perdiam facilmente. Agora, antes de ligar o carro eu gravo um áudio no WhatsApp do Finova. A velocidade do Groq Whisper é inacreditável. O melhor retorno de R$ 34,90 da minha vida.",
      highlight: "Zero comprovantes perdidos na rua",
      rating: 5,
      tag: "Caso Real: Rotina Externa",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#070b14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Resultados Comprovados</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quem experimenta não volta mais para{" "}
            <span className="text-emerald-400">planilhas manuais</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Histórias reais de quem transformou desordem financeira em clareza absoluta com apenas
            algumas mensagens de áudio por dia.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-xl group"
            >
              <div className="space-y-4">
                {/* Rating & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {item.tag}
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="text-xs font-bold text-white bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60">
                  ⚡ {item.highlight}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border ${item.avatar}`}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {item.name}, {item.age} anos
                  </div>
                  <div className="text-xs text-slate-400">{item.role}</div>
                  <div className="text-[11px] text-slate-500">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
