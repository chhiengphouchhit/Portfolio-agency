import React from "react";
import { Sparkles, Zap, Shield, Globe, Clock, Smartphone, Heart } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const AnimatedTicker = () => {
  const { isKhmer } = useLanguage();

  const items = [
    { icon: Sparkles, text: isKhmer ? "២៥+ ម៉ូត Portfolio គំរូពិត" : "25+ Real Portfolio Templates", color: "text-amber-400" },
    { icon: Clock, text: isKhmer ? "រួចរាល់ក្នុងរយៈពេល ២៤ ម៉ោង" : "24-Hour Express Delivery", color: "text-brand-400" },
    { icon: Globe, text: isKhmer ? "ភាសាខ្មែរ & English ស្ដង់ដារ" : "Bilingual Khmer & English", color: "text-cyan-400" },
    { icon: Smartphone, text: isKhmer ? "Responsive ស្អាតលើគ្រប់ទូរស័ព្ទ" : "100% Mobile Optimized", color: "text-purple-400" },
    { icon: Zap, text: isKhmer ? "សារ Alert ចូល Telegram ផ្ទាល់" : "Instant Telegram Lead Ping", color: "text-emerald-400" },
    { icon: Shield, text: isKhmer ? "Free Lifetime Hosting រហូត" : "Free Lifetime Fast Hosting", color: "text-blue-400" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-md">
      {/* Left and right fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8fafc] dark:from-[#090d16] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8fafc] dark:from-[#090d16] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee flex items-center">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 px-6 shrink-0">
              <IconComponent className={`w-4 h-4 ${item.color}`} />
              <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                {item.text}
              </span>
              <span className="text-slate-300 dark:text-slate-700 ml-4 font-bold">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
