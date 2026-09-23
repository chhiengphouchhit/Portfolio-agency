import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const LanguageToggle = ({ className = "" }) => {
  const { lang, toggleLanguage, showLangToggle } = useLanguage();

  if (!showLangToggle) return null;

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-brand-500/40 hover:text-brand-500 transition-all ${className}`}
      aria-label="Toggle language"
      title="Switch between Khmer and English"
    >
      <span className="text-base leading-none">
        {lang === "km" ? "🇰🇭" : "🇬🇧"}
      </span>
      <span>{lang === "km" ? "ខ្មែរ" : "ENG"}</span>
    </button>
  );
};
