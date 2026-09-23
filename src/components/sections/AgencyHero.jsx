import React from "react";
import { Sparkles, ArrowDown, Send, ShieldCheck, Zap, Globe, Clock, Rocket, Trophy, Smartphone } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { portfolioConfig } from "../../config/portfolio.config";

export const AgencyHero = () => {
  const { isKhmer } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Animated Aurora Gradient Mesh Background */}
      <div className="aurora-mesh opacity-60 dark:opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-7">
        {/* Floating Interactive Badges (Motion Graphics Elements) */}
        <div className="hidden lg:block">
          {/* Floating Badge 1 - Left */}
          <div className="absolute top-10 left-4 animate-float glass-card px-4 py-2.5 rounded-2xl border border-brand-500/30 flex items-center gap-2.5 shadow-xl shadow-brand-500/5 backdrop-blur-xl">
            <div className="w-8 h-8 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold">
              <Rocket className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Fast Turnaround</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {isKhmer ? "រួចរាល់ក្នុង 24 ម៉ោង 🚀" : "Live in 24 Hours 🚀"}
              </div>
            </div>
          </div>

          {/* Floating Badge 2 - Right */}
          <div className="absolute top-16 right-4 animate-float-slow glass-card px-4 py-2.5 rounded-2xl border border-cyan-500/30 flex items-center gap-2.5 shadow-xl shadow-cyan-500/5 backdrop-blur-xl">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Awwwards Quality</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {isKhmer ? "ឌីហ្សាញបែប Premium ✨" : "Luxury Aesthetics ✨"}
              </div>
            </div>
          </div>
        </div>

        {/* Top Pulsing Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-bold text-brand-600 dark:text-brand-400 border border-brand-500/30 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span>
            {isKhmer
              ? "សេវាកម្មបង្កើត Portfolio Website អាជីព ២៥ ម៉ូតគំរូពិត"
              : "25+ Handcrafted Portfolio Templates for Every Career"}
          </span>
        </div>

        {/* Main Kinetic Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.12]">
          {isKhmer ? (
            <>
              បង្កើត <span className="bg-gradient-to-r from-brand-500 via-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">Portfolio Website</span> បង្ហាញស្នាដៃ និង CV កម្រិតអាជីព
            </>
          ) : (
            <>
              Launch Your High-Impact <span className="bg-gradient-to-r from-brand-500 via-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">Portfolio Website</span> in 24 Hours
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isKhmer
            ? "ជ្រើសរើសម៉ូតខាងក្រោមដែលត្រូវនឹងអាជីពរបស់អ្នក (Designer, Dev, Photographer...) ពួកយើងនឹងរៀបចំ Website ផ្ទាល់ខ្លួនជូនអ្នកក្នុងរយៈពេល ២៤ ម៉ោង មិនបាច់ចេះកូដ!"
            : "Browse our hand-crafted portfolio templates tailored for your exact profession. We customize, code, and deploy your personal site in 24 hours."}
        </p>

        {/* Action Buttons with Shimmer Motion */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#templates-catalog"
            className="shimmer-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-sm bg-gradient-to-r from-brand-500 via-emerald-400 to-brand-500 text-white shadow-2xl shadow-brand-500/30 hover:scale-105 transition-all transform active:scale-95"
          >
            <span>{isKhmer ? "មើលម៉ូត Portfolio ទាំង ២៥ (Explore 25 Templates)" : "Explore 25 Templates"}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {portfolioConfig.socials.telegram && (
            <a
              href={portfolioConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm glass-card text-slate-800 dark:text-slate-200 hover:border-brand-500/50 hover:text-brand-500 hover:scale-105 transition-all transform active:scale-95 shadow-lg"
            >
              <Send className="w-4 h-4 text-brand-500" />
              <span>{isKhmer ? "ជជែកពិគ្រោះតាម Telegram" : "Chat on Telegram"}</span>
            </a>
          )}
        </div>

        {/* Guarantee Highlights */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-500" />
            <span>{isKhmer ? "រួចរាល់ក្នុង 24 ម៉ោង" : "24h Turnaround"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-500" />
            <span>{isKhmer ? "Free Hosting រហូត" : "Free Lifetime Hosting"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>{isKhmer ? "Alert ចូល Telegram" : "Telegram Lead Alerts"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-purple-500" />
            <span>{isKhmer ? "Responsive លើគ្រប់ទូរស័ព្ទ" : "100% Mobile Ready"}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>{isKhmer ? "តម្លៃត្រឹម $25 - $49" : "Affordable ($25-$49)"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
