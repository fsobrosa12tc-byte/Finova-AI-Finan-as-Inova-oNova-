# Finova AI — Landing Page Oficial de Alta Conversão

> **Micro-SaaS de Controle Financeiro Pessoal Inteligente via WhatsApp**  
> Produto proprietário da **Marks Systems**

---

## 🚀 Sobre o Projeto
Esta é a Landing Page oficial do **Finova AI**, projetada especificamente para conversão B2C com copywriting de resposta direta, simulação interativa do WhatsApp em tempo real e integração direta com o fluxo de checkout e cadastro.

### 🛠️ Stack Tecnológico
- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v3 / Glassmorphism Dark Executive Fintech
- **Ícones:** Lucide React
- **Deploy:** Otimizado para Vercel Serverless

---

## ⚡ Como Rodar Localmente

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ⚙️ Configuração Centralizada de Checkout
No topo do arquivo [`src/app/page.tsx`](./src/app/page.tsx), configure os links de redirecionamento:

```typescript
const CHECKOUT_URLS = {
  login: "/login",
  starter: "/cadastro?plan=starter", // Plano R$ 19,90/mês
  pro: "/cadastro?plan=pro",         // Plano R$ 34,90/mês (Mais Popular)
  copilot: "/cadastro?plan=copilot", // Plano R$ 49,90/mês
};
```

---

## 📂 Estrutura de Arquivos

```
App/
├── public/
│   ├── logo-finova.jpg     # Logo oficial da marca (Navbar e Rodapé)
│   └── capa-finova.jpg     # Capa oficial de alta resolução (Hero Section)
├── src/
│   ├── app/
│   │   ├── globals.css     # Paleta Dark Executive, efeitos glow e glassmorphism
│   │   ├── layout.tsx      # Metadados de SEO, OpenGraph e fontes
│   │   └── page.tsx        # Página principal com arquitetura de conversão
│   ├── components/landing/
│   │   ├── TopBar.tsx                 # Barra de anúncio de lançamento
│   │   ├── Navbar.tsx                 # Navegação responsiva com logo oficial
│   │   ├── HeroSection.tsx            # Dobra principal com capa e badges
│   │   ├── WhatsAppSimulator.tsx      # Simulador interativo multi-cenário
│   │   ├── ProblemSolutionSection.tsx # Comparativo dores antigas vs. Finova
│   │   ├── FeaturesSection.tsx        # 6 pilares de tecnologia
│   │   ├── RoiCalculator.tsx          # Calculadora interativa de economia
│   │   ├── PricingSection.tsx         # Matriz de 3 planos (Starter, Pro, Copilot)
│   │   ├── SocialProofSection.tsx     # Casos reais baseados nas personas do PRD
│   │   ├── SecuritySection.tsx        # Pilares de segurança LGPD e RLS
│   │   ├── FaqSection.tsx             # Accordion de perguntas frequentes
│   │   ├── CtaFinalSection.tsx        # Chamada de encerramento com garantia
│   │   └── Footer.tsx                 # Rodapé institucional Marks Systems
│   └── types/
│       └── landing.ts      # Tipagens TypeScript completas
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---
© Marks Systems — Todos os direitos reservados.
