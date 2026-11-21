"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mic,
  Send,
  CheckCheck,
  Sparkles,
  ShieldAlert,
  Camera,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
  BadgeCheck,
} from "lucide-react";

type ScenarioKey = "audio" | "cheque" | "foto";

interface Message {
  id: string;
  sender: "user" | "bot";
  type: "text" | "audio" | "image" | "confirmation_card";
  content?: string;
  time: string;
  details?: {
    valor: string;
    categoria: string;
    metodo: string;
    conta: string;
    status: string;
  };
  audioDuration?: string;
  imageUrl?: string;
}

export const WhatsAppSimulator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("audio");
  const [step, setStep] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>("");
  const [customMessages, setCustomMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Scenarios presets
  const scenarioData: Record<ScenarioKey, Message[]> = {
    audio: [
      {
        id: "a1",
        sender: "user",
        type: "audio",
        audioDuration: "0:04",
        time: "12:34",
        content: "Gastei trinta e cinco reais no restaurante no débito do Inter.",
      },
      {
        id: "a2",
        sender: "bot",
        type: "confirmation_card",
        time: "12:34",
        content: "🎙️ Áudio transcrito com sucesso via Groq Whisper (<800ms)!",
        details: {
          valor: "R$ 35,00",
          categoria: "Alimentação / Restaurante",
          metodo: "Débito",
          conta: "Banco Inter (Conta Secundária)",
          status: "Aguardando confirmação",
        },
      },
    ],
    cheque: [
      {
        id: "c1",
        sender: "user",
        type: "text",
        content: "Quanto eu tenho na conta do Itaú pra gastar hoje?",
        time: "15:20",
      },
      {
        id: "c2",
        sender: "bot",
        type: "text",
        time: "15:20",
        content:
          "⚠️ **Alerta Anti-Cheque Especial Finova:**\n\nSeu **Saldo Próprio Real** no Itaú é de apenas **R$ 45,00**.\n\nO banco exibe R$ 1.545,00 porque soma seu Limite de Cheque Especial (R$ 1.500,00 com taxa de 8,0% a.m.).\n\n💡 **Dica de Proteção:** Você possui **R$ 820,00 ociosos no Inter**. Deseja fazer um Pix entre contas para não pagar juros diários?",
      },
    ],
    foto: [
      {
        id: "f1",
        sender: "user",
        type: "image",
        content: "Cupom fiscal da farmácia",
        time: "18:45",
      },
      {
        id: "f2",
        sender: "bot",
        type: "confirmation_card",
        time: "18:45",
        content: "📸 Cupom lido via Gemini 1.5 Flash Vision!",
        details: {
          valor: "R$ 68,90",
          categoria: "Saúde & Farmácia (Medicamentos)",
          metodo: "Crédito Mastercard (Cartão Principal)",
          conta: "Itaú Salário",
          status: "Aguardando confirmação",
        },
      },
    ],
  };

  const handleSelectScenario = (key: ScenarioKey) => {
    setActiveScenario(key);
    setStep(0);
    setCustomMessages([]);
  };

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setStep(1);
      setIsProcessing(false);
    }, 600);
  };

  const handleReset = () => {
    setStep(0);
    setCustomMessages([]);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userMsg: Message = {
      id: `custom-user-${Date.now()}`,
      sender: "user",
      type: "text",
      content: customInput,
      time: "Agora",
    };

    setCustomMessages((prev) => [...prev, userMsg]);
    const inputCopy = customInput;
    setCustomInput("");
    setIsProcessing(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: `custom-bot-${Date.now()}`,
        sender: "bot",
        type: "confirmation_card",
        time: "Agora",
        content: "⚡ Processado instantaneamente pela IA do Finova!",
        details: {
          valor: inputCopy.match(/\d+/)?.[0] ? `R$ ${inputCopy.match(/\d+/)?.[0]},00` : "R$ 48,00",
          categoria: inputCopy.toLowerCase().includes("uber")
            ? "Transporte / Aplicativo"
            : inputCopy.toLowerCase().includes("mercado")
            ? "Supermercado"
            : "Despesa Variável",
          metodo: "Cartão de Crédito Principal",
          conta: "Conta Salário",
          status: "Aguardando confirmação",
        },
      };
      setCustomMessages((prev) => [...prev, botMsg]);
      setIsProcessing(false);
    }, 900);
  };

  const currentMessages =
    customMessages.length > 0 ? customMessages : scenarioData[activeScenario];

  return (
    <section id="simulador" className="py-20 md:py-28 relative overflow-hidden bg-[#070b14]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-radial-section pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <Cpu className="w-3.5 h-3.5" />
            <span>Simulador Interativo em Tempo Real</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Veja a mágica acontecer direto no seu{" "}
            <span className="text-emerald-400">WhatsApp</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Sem abrir aplicativos bancários lentos ou preencher planilhas. Teste os 3 cenários
            abaixo ou digite uma despesa para ver a resposta imediata da IA.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls & Scenario Switchers (Left Column) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Escolha uma demonstração:
            </div>

            {/* Scenario 1 Button */}
            <button
              onClick={() => handleSelectScenario("audio")}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                activeScenario === "audio" && customMessages.length === 0
                  ? "bg-slate-800/90 border-emerald-500/60 shadow-lg shadow-emerald-500/15"
                  : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 text-slate-300"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                  1. Lançamento por Áudio
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                    &lt; 2s
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  &ldquo;Gastei R$ 35 no almoço no débito&rdquo; processado via Groq Whisper.
                </div>
              </div>
            </button>

            {/* Scenario 2 Button */}
            <button
              onClick={() => handleSelectScenario("cheque")}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                activeScenario === "cheque" && customMessages.length === 0
                  ? "bg-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-500/15"
                  : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 text-slate-300"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                  2. Alerta Anti-Cheque Especial
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">
                    Blindagem
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Separa saldo real de limite bancário e sugere transferência inteligente.
                </div>
              </div>
            </button>

            {/* Scenario 3 Button */}
            <button
              onClick={() => handleSelectScenario("foto")}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                activeScenario === "foto" && customMessages.length === 0
                  ? "bg-slate-800/90 border-amber-500/60 shadow-lg shadow-amber-500/15"
                  : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 text-slate-300"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                  3. Foto de Comprovante (OCR)
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                    Gemini Flash
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Extração automática de valor, categoria e tributos direto do cupom.
                </div>
              </div>
            </button>

            {/* Interactive Feature highlight badge */}
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-300 space-y-1.5">
              <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Segurança Contábil Marks Systems:
              </div>
              <p className="text-slate-400 leading-relaxed">
                Nenhuma transação é gravada sem sua confirmação explícita no WhatsApp [1 - Confirmar,
                2 - Editar, 3 - Cancelar]. Você tem 100% de controle.
              </p>
            </div>
          </div>

          {/* Phone Frame Simulator (Right Column) */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-[390px] rounded-[38px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl border border-slate-700/60 ring-1 ring-emerald-500/20">
              {/* Phone Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full flex items-center justify-center z-20">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* WhatsApp Interface Screen */}
              <div className="relative rounded-[30px] overflow-hidden bg-[#0b141a] text-slate-200 border border-slate-900 flex flex-col h-[560px]">
                {/* Header WhatsApp */}
                <div className="pt-6 pb-2.5 px-3 bg-[#202c33] flex items-center justify-between border-b border-[#2a3942] z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-emerald-500/50">
                      <Image
                        src="/logo-finova.jpg"
                        alt="Finova AI Bot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-1 leading-tight">
                        Finova AI
                        <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                      </div>
                      <div className="text-[10px] text-emerald-400 font-medium">
                        online • assistente financeiro
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    title="Reiniciar Simulação"
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {/* Messages Body */}
                <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px] bg-[#0b141a]">
                  {/* Timestamp divider */}
                  <div className="text-center my-1">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-[#182229] text-slate-400 shadow-sm">
                      HOJE
                    </span>
                  </div>

                  {currentMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      {/* Audio Message */}
                      {msg.type === "audio" && (
                        <div className="max-w-[85%] bg-[#005c4b] text-white p-2.5 rounded-2xl rounded-tr-none shadow-md">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0">
                              <Play className="w-4 h-4 fill-current ml-0.5" />
                            </div>
                            <div className="flex items-center gap-1 h-6 px-1">
                              <div className="w-1 bg-white/70 rounded-full sound-bar" />
                              <div className="w-1 bg-white/90 rounded-full sound-bar" />
                              <div className="w-1 bg-white/60 rounded-full sound-bar" />
                              <div className="w-1 bg-white/90 rounded-full sound-bar" />
                              <div className="w-1 bg-white/40 rounded-full sound-bar" />
                              <div className="w-1 bg-white/80 rounded-full sound-bar" />
                              <div className="w-1 bg-white/50 rounded-full sound-bar" />
                            </div>
                            <span className="text-[11px] font-mono text-emerald-200">
                              {msg.audioDuration}
                            </span>
                          </div>
                          <div className="mt-1 text-[11px] text-emerald-100 italic bg-black/15 px-2 py-1 rounded">
                            &ldquo;{msg.content}&rdquo;
                          </div>
                          <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-emerald-200">
                            <span>{msg.time}</span>
                            <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                          </div>
                        </div>
                      )}

                      {/* Regular Text Message */}
                      {msg.type === "text" && (
                        <div
                          className={`max-w-[85%] p-2.5 rounded-2xl text-xs leading-relaxed shadow-md ${
                            msg.sender === "user"
                              ? "bg-[#005c4b] text-white rounded-tr-none"
                              : "bg-[#202c33] text-slate-100 rounded-tl-none whitespace-pre-line"
                          }`}
                        >
                          <p>{msg.content}</p>
                          <div
                            className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${
                              msg.sender === "user" ? "text-emerald-200" : "text-slate-400"
                            }`}
                          >
                            <span>{msg.time}</span>
                            {msg.sender === "user" && (
                              <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                            )}
                          </div>
                        </div>
                      )}

                      {/* Photo Message */}
                      {msg.type === "image" && (
                        <div className="max-w-[85%] bg-[#005c4b] text-white p-2 rounded-2xl rounded-tr-none shadow-md">
                          <div className="h-28 w-44 rounded-xl bg-slate-800 border border-emerald-400/30 flex flex-col items-center justify-center p-2 text-center">
                            <Camera className="w-7 h-7 text-emerald-400 mb-1" />
                            <span className="text-[10px] font-medium text-slate-200">
                              Cupom_Fiscal_Drogasil.jpg
                            </span>
                            <span className="text-[9px] text-slate-400">Total: R$ 68,90</span>
                          </div>
                          <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-emerald-200">
                            <span>{msg.time}</span>
                            <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                          </div>
                        </div>
                      )}

                      {/* Confirmation Card by Bot */}
                      {msg.type === "confirmation_card" && (
                        <div className="max-w-[92%] bg-[#202c33] border border-emerald-500/30 rounded-2xl rounded-tl-none p-3 shadow-lg space-y-2 text-xs">
                          <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            {msg.content}
                          </div>

                          {msg.details && (
                            <div className="space-y-1 bg-[#111b21] p-2.5 rounded-xl border border-slate-700/60 font-mono text-[11px]">
                              <div className="flex justify-between">
                                <span className="text-slate-400">Valor:</span>
                                <span className="font-bold text-emerald-400">
                                  {msg.details.valor}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Categoria:</span>
                                <span className="text-white font-medium">
                                  {msg.details.categoria}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Método:</span>
                                <span className="text-cyan-300">{msg.details.metodo}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Conta:</span>
                                <span className="text-slate-200">{msg.details.conta}</span>
                              </div>
                            </div>
                          )}

                          {step === 0 ? (
                            <div className="pt-1 space-y-1.5">
                              <div className="text-[10px] text-slate-300 font-medium">
                                Confirma o registro deste lançamento?
                              </div>
                              <div className="grid grid-cols-3 gap-1.5 pt-1">
                                <button
                                  onClick={handleConfirm}
                                  disabled={isProcessing}
                                  className="py-1.5 px-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-[10px] flex items-center justify-center gap-1 shadow-sm transition-all"
                                >
                                  <CheckCircle2 className="w-3 h-3" />
                                  1 - Sim
                                </button>
                                <button
                                  onClick={handleConfirm}
                                  className="py-1.5 px-2 bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium rounded-lg text-[10px] text-center"
                                >
                                  2 - Editar
                                </button>
                                <button
                                  onClick={handleReset}
                                  className="py-1.5 px-2 bg-slate-800 hover:bg-red-950 text-red-300 font-medium rounded-lg text-[10px] text-center"
                                >
                                  3 - Cancelar
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-[11px] text-emerald-300 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>
                                Salvo com sucesso no Supabase! Dashboard atualizado em tempo real.
                              </span>
                            </div>
                          )}

                          <div className="text-[9px] text-right text-slate-400">{msg.time}</div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Processing indicator */}
                  {isProcessing && (
                    <div className="flex items-center gap-2 bg-[#202c33] text-slate-300 px-3 py-1.5 rounded-full w-fit text-[11px]">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                      <span>Finova AI digitando...</span>
                    </div>
                  )}
                </div>

                {/* WhatsApp Chat Input Bar */}
                <form
                  onSubmit={handleSendCustom}
                  className="p-2 bg-[#202c33] border-t border-[#2a3942] flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Ex: Almoço 35 débito, Uber 28..."
                    className="flex-1 bg-[#2a3942] text-xs text-white placeholder-slate-400 rounded-full px-3.5 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center hover:bg-emerald-400 transition-colors shrink-0"
                    title="Enviar mensagem"
                  >
                    <Send className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
