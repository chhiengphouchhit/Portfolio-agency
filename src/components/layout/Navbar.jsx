import React, { useState, useEffect } from "react";
import { Menu, X, Send, Sparkles } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isKhmer } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#templates-catalog", label: isKhmer ? "ម៉ូត Portfolio" : "Templates" },
    { href: "#pricing", label: isKhmer ? "តម្លៃសេវាកម្ម" : "Pricing" },
    { href: "#contact", label: isKhmer ? "ទំនាក់ទំនង" : "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 border-b border-slate-200/60 dark:border-slate-800/60 shadow-lg shadow-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            FC
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight leading-none group-hover:text-brand-500 transition-colors">
              FolioCraft
            </span>
            <span className="text-[10px] text-brand-600 dark:text-brand-400 font-bold tracking-wider uppercase mt-1">
              {isKhmer ? "សេវាកម្ម Portfolio" : "Portfolio Agency"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 px-4 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          <LanguageToggle />
          <ThemeToggle />

          {portfolioConfig.socials.telegram && (
            <a
              href={portfolioConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white shadow-md shadow-brand-500/20 transition-all transform active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isKhmer ? "កុម្ម៉ង់តាម Telegram" : "Order on Telegram"}</span>
            </a>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-brand-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden glass-card mx-4 mt-3 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xl animate-fade-in bg-white/95 dark:bg-slate-900/95">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {portfolioConfig.socials.telegram && (
              <a
                href={portfolioConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-brand-500 text-white shadow-md shadow-brand-500/20"
              >
                <Send className="w-4 h-4" />
                <span>{isKhmer ? "កុម្ម៉ង់តាម Telegram ផ្ទាល់" : "Order on Telegram"}</span>
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
