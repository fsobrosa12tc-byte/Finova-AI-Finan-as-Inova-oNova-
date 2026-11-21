export interface CheckoutUrls {
  login: string;
  starter: string;
  pro: string;
  copilot: string;
}

export interface PricingPlan {
  id: "starter" | "pro" | "copilot";
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  ctaText: string;
  features: {
    text: string;
    highlighted?: boolean;
    included: boolean;
  }[];
  checkoutKey: keyof CheckoutUrls;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "Geral" | "WhatsApp" | "Segurança" | "Planos";
}

export interface TestimonialItem {
  name: string;
  role: string;
  age: number;
  avatar: string;
  city: string;
  initials: string;
  quote: string;
  highlight: string;
  rating: number;
  tag: string;
}
