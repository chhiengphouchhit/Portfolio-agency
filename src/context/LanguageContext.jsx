import React, { createContext, useContext, useEffect, useState } from "react";
import { portfolioConfig } from "../config/portfolio.config";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    // If global market only, force English
    if (portfolioConfig.market === "global") return "en";
    
    // Otherwise check saved language or default to Khmer if local
    const saved = localStorage.getItem("app_lang");
    if (saved && (saved === "en" || saved === "km")) return saved;
    return portfolioConfig.market === "local" ? "km" : "km";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "km" ? "en" : "km"));
  };

  // Helper to extract bilingual string e.g. { en: "Hello", km: "សួស្តី" }
  const translate = (textObj) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[lang] || textObj.en || "";
  };

  const labels = portfolioConfig.labels[lang] || portfolioConfig.labels.en;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        translate,
        labels,
        isKhmer: lang === "km",
        showLangToggle: portfolioConfig.market !== "global",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
