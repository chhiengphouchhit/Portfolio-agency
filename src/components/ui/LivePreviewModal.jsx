import React, { useState, useEffect } from "react";
import { X, Send, Smartphone, Monitor, ExternalLink, Check, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { portfolioConfig } from "../../config/portfolio.config";

export const LivePreviewModal = ({ template, onClose }) => {
  const { isKhmer, translate } = useLanguage();
  const [deviceMode, setDeviceMode] = useState("desktop"); // "desktop" | "mobile"

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!template) return null;

  // Map template id to sample demo config
  const telegramOrderLink = `https://t.me/yourusername?text=${encodeURIComponent(
    `សួស្តី! ខ្ញុំចាប់អារម្មណ៍ចង់កុម្ម៉ង់ធ្វើ Portfolio ម៉ូត៖ ${template.title.km} (${template.title.en})`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950 text-white animate-fade-in">
      {/* Top Floating Control Bar */}
      <header className="shrink-0 h-16 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left: Template info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-sm">
            👁️
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">
              {isKhmer ? "កំពុងមើលគំរូពិត៖" : "Live Previewing:"}
            </div>
            <div className="text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-xs">
              {translate(template.title)}
            </div>
          </div>
        </div>

        {/* Center: Device Mode Switcher (Desktop / Mobile) */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-slate-800 border border-slate-700">
          <button
            onClick={() => setDeviceMode("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              deviceMode === "desktop"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setDeviceMode("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              deviceMode === "mobile"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>

        {/* Right: Order via Telegram & Close */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={telegramOrderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 transition-all transform active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isKhmer ? "កុម្ម៉ង់ម៉ូតនេះ" : "Order This Template"}
            </span>
            <span>({template.price})</span>
          </a>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Preview Container */}
      <div className="flex-1 overflow-y-auto bg-slate-900/50 p-2 sm:p-6 flex justify-center items-start">
        <div
          className={`w-full transition-all duration-300 ${
            deviceMode === "mobile"
              ? "max-w-[390px] min-h-[750px] my-4 rounded-[40px] border-[10px] border-slate-800 shadow-2xl overflow-hidden bg-slate-950"
              : "max-w-5xl rounded-2xl border border-slate-800 shadow-2xl bg-slate-950"
          }`}
        >
          {/* Simulated Real Portfolio Inside Frame */}
          <div className="p-6 sm:p-10 space-y-12 text-slate-100 font-sans">
            {/* Template Hero Mockup */}
            <div className="text-center space-y-4 pt-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{translate(template.profession)}</span>
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {template.id === "creative-designer" && "Pich Samnang | Designer"}
                {template.id === "software-developer" && "Dara Sovan | Tech Lead"}
                {template.id === "photographer-filmmaker" && "Vathana Media | Filmmaker"}
                {template.id === "digital-studio-agency" && "Nexus Creative Studio"}
                {!["creative-designer", "software-developer", "photographer-filmmaker", "digital-studio-agency"].includes(template.id) && translate(template.title)}
              </h1>

              <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
                {translate(template.description)}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={telegramOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white shadow-lg"
                >
                  {isKhmer ? "ទាក់ទងធ្វើការងារ" : "Get In Touch"}
                </a>
                <button className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700">
                  {isKhmer ? "ទាញយក CV / Resume" : "Download CV"}
                </button>
              </div>
            </div>

            {/* Template Hero Image Banner */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 aspect-[16/9] sm:aspect-[21/9] bg-slate-900">
              <img
                src={template.image}
                alt={template.title.en}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Template Core Features List */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-slate-900/60">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-brand-400" />
                <span>{isKhmer ? "មុខងារពិសេសក្នុងម៉ូតនេះ (Included Features):" : "Included Features in this Template:"}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {template.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action inside preview */}
            <div className="text-center py-8 border-t border-slate-800/80 space-y-4">
              <h4 className="text-xl font-bold text-white">
                {isKhmer ? "ពេញចិត្តម៉ូតមួយនេះមែនទេ?" : "Love this exact template?"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                {isKhmer
                  ? "ពួកយើងអាចបង្កើតគេហទំព័រនេះជូនអ្នកក្នុងរយៈពេល ២៤ ម៉ោង គ្រាន់តែផ្ញើ CV និងរូបភាពមកពួកយើង!"
                  : "We can deploy this exact portfolio with your custom photos, name, and CV within 24 hours!"}
              </p>
              <a
                href={telegramOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-brand-500 to-emerald-500 hover:from-brand-600 hover:to-emerald-600 text-white shadow-xl shadow-brand-500/25"
              >
                <Send className="w-4 h-4" />
                <span>{isKhmer ? "កុម្ម៉ង់ធ្វើម៉ូតនេះភ្លាមៗតាម Telegram" : "Order This Template Now on Telegram"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
