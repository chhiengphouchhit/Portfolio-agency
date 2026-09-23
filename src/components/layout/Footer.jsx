import React from "react";
import { ArrowUp, Github, Linkedin, Send, Facebook, Twitter } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";

export const Footer = () => {
  const { labels, translate } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/40 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Market status */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-bold text-slate-900 dark:text-white text-base">
            {translate(portfolioConfig.profile.name)}
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {labels.footer.rights}
          </p>
          <div className="inline-flex items-center gap-2 mt-2 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-[11px] font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
            <span>🇰🇭 Cambodia</span>
            <span>•</span>
            <span>🌐 Worldwide Delivery</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {portfolioConfig.socials.telegram && (
            <a
              href={portfolioConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
          )}
          {portfolioConfig.socials.github && (
            <a
              href={portfolioConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {portfolioConfig.socials.linkedin && (
            <a
              href={portfolioConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {portfolioConfig.socials.facebook && (
            <a
              href={portfolioConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
