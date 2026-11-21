"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import type { CheckoutUrls } from "@/types/landing";

interface NavbarProps {
  checkoutUrls: CheckoutUrls;
}

export const Navbar: React.FC<NavbarProps> = ({ checkoutUrls }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Simulador WhatsApp", href: "#simulador" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Calculadora ROI", href: "#calculadora" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090E1A]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Oficial Finova AI */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-emerald-500/30 group-hover:border-emerald-400 transition-colors shadow-md shadow-emerald-950/40">
              <Image
                src="/logo-finova.jpg"
                alt="Finova AI Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Finova <span className="text-emerald-400">AI</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium -mt-1 flex items-center gap-1">
                by Marks Systems
                <ShieldCheck className="w-2.5 h-2.5 text-emerald-400/80" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={checkoutUrls.login}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
            >
              Entrar
            </a>
            <a
              href={checkoutUrls.pro}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Começar Agora</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={checkoutUrls.pro}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400"
            >
              Começar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-3 border-t border-slate-800 bg-slate-900/95 backdrop-blur-2xl rounded-2xl px-4 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/40 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href={checkoutUrls.login}
                className="w-full text-center py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/50 rounded-xl"
              >
                Já sou cliente (Entrar)
              </a>
              <a
                href={checkoutUrls.pro}
                className="w-full text-center py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl shadow-lg shadow-emerald-500/20"
              >
                Assinar Plano Pro (R$ 34,90)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
