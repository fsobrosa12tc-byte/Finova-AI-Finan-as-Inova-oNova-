"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { FaqItem } from "@/types/landing";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "WhatsApp",
      question: "Preciso instalar algum aplicativo novo no meu celular?",
      answer:
        "Não! O Finova AI funciona diretamente no aplicativo do WhatsApp que você já usa todos os dias. Após a assinatura, você recebe o link direto para iniciar a conversa com o número comercial oficial do Finova. Para acessar seus gráficos detalhados, basta abrir a plataforma web pelo celular ou computador.",
    },
    {
      category: "Geral",
      question: "Como o Finova AI me protege de perder dinheiro com Cheque Especial?",
      answer:
        "Os bancos comerciais frequentemente somam o limite de cheque especial ao seu saldo disponível, criando uma ilusão perigosa de dinheiro em conta. O Finova AI possui um algoritmo proprietário anti-ilusão que separa rigorosamente o saldo real do limite do banco. Se você estiver perto de entrar no vermelho, ele envia um alerta preventivo no WhatsApp calculando o juro estimado e sugerindo cobrir com saldo ocioso de outra conta.",
    },
    {
      category: "WhatsApp",
      question: "Como funciona o envio de áudio? A IA realmente entende gírias e sotaques?",
      answer:
        "Sim! Utilizamos o modelo Groq Whisper-large-v3, calibrado para áudios em português brasileiro falado, mesmo com ruídos de fundo (como trânsito ou restaurantes). Você pode falar naturalmente: 'Gastei 35 reais no almoço no débito do Inter'. A IA transcreve em menos de 800 milissegundos e devolve os campos estruturados para você apenas confirmar com o botão '1'.",
    },
    {
      category: "Segurança",
      question: "O Finova AI tem acesso às minhas senhas do banco?",
      answer:
        "Absolutamente não. Em nenhum momento solicitamos login, senhas de 4 dígitos ou chaves de segurança dos seus bancos. O Finova funciona exclusivamente através dos seus comandos no WhatsApp (mensagens, áudios e comprovantes) e uploads voluntários de extratos.",
    },
    {
      category: "Planos",
      question: "Posso importar meu histórico bancário dos meses anteriores?",
      answer:
        "Sim! No onboarding do primeiro acesso, você pode optar por começar com a 'folha em branco' ou subir seu extrato bancário dos últimos 30 dias em formato PDF ou CSV. Nossa IA (Gemini 1.5 Flash) realiza a conciliação e categorização de todas as linhas em lote.",
    },
    {
      category: "Planos",
      question: "Existe fidelidade ou multa de cancelamento?",
      answer:
        "Nenhuma fidelidade. Você pode cancelar sua assinatura a qualquer momento com apenas 1 clique no painel ou pelo WhatsApp. Além disso, oferecemos 7 dias de garantia incondicional: se não gostar, devolvemos 100% do seu dinheiro sem perguntas.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#070c16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Tudo o que você precisa saber sobre o funcionamento, segurança e tecnologia do Finova
            AI.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-emerald-500/20 text-emerald-400" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 mt-1">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Direct Contact */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Ainda ficou com alguma dúvida específica? Fale com nossa equipe técnica:{" "}
          <a
            href="mailto:suporte@marks.systems"
            className="text-emerald-400 underline hover:text-emerald-300"
          >
            suporte@marks.systems
          </a>
        </div>
      </div>
    </section>
  );
};
