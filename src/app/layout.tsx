import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://finova.marks.systems"),
  title: "Finova AI — Controle Financeiro Pessoal Inteligente via WhatsApp | Marks Systems",
  description:
    "Organize suas finanças no piloto automático via WhatsApp. Registre despesas por áudio em 5 segundos, separe o saldo real do cheque especial e tenha um painel analítico executivo de alta resolução.",
  keywords: [
    "Finova AI",
    "controle financeiro WhatsApp",
    "inteligência artificial finanças",
    "Marks Systems",
    "gestão de despesas por áudio",
    "cheque especial alerta",
    "educação financeira pessoal",
    "dashboard financeiro",
  ],
  authors: [{ name: "Marks Systems" }],
  creator: "Marks Systems",
  openGraph: {
    title: "Finova AI — Finanças Inteligentes no seu WhatsApp",
    description:
      "Envie um áudio de 5 segundos no WhatsApp e mantenha todas as suas contas, limites e cartões sob controle absoluto. Sem planilhas manuais.",
    url: "https://finova.marks.systems",
    siteName: "Finova AI",
    images: [
      {
        url: "/capa-finova.jpg",
        width: 1200,
        height: 630,
        alt: "Finova AI Plataforma de Controle Financeiro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/logo-finova.jpg",
    apple: "/logo-finova.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-[#090E1A] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
