import React from "react";
import { ArrowDown, Download, Send, Calendar, Terminal as TerminalIcon } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useTemplate } from "../../context/TemplateContext";
import { useLanguage } from "../../context/LanguageContext";

export const HeroSection = () => {
  const { labels, translate } = useLanguage();
  const { activeTemplate } = useTemplate();
  const { socials } = portfolioConfig;

  const profile = activeTemplate.profile;
  const heroStyle = activeTemplate.heroStyle;
  const terminal = activeTemplate.terminal || portfolioConfig.terminal;

  // Render the visual element according to selected template heroStyle
  const renderVisual = () => {
    switch (heroStyle) {
      case "logo":
        return (
          <div className="relative group flex items-center justify-center">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-40 group-hover:opacity-75 blur-xl transition duration-500"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-card p-6 flex items-center justify-center border border-slate-200 dark:border-slate-800">
              <img
                src={profile.logoUrl}
                alt="Studio Logo"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>
          </div>
        );

      case "terminal":
        return (
          <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#0c101c] font-mono text-xs sm:text-sm">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131929] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>{terminal.user}</span>
              </div>
              <div className="w-8"></div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-3.5 text-slate-300">
              <div className="text-slate-500">
                # Type commands to inspect developer capabilities
              </div>
              {terminal.commands.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-400">
                    <span className="text-cyan-400">➜</span>
                    <span className="text-slate-400">{terminal.path}</span>
                    <span className="font-semibold text-slate-200">{item.cmd}</span>
                  </div>
                  <div className="pl-6 text-slate-400 text-xs sm:text-sm">
                    {item.output}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 text-brand-400 pt-1">
                <span className="text-cyan-400">➜</span>
                <span className="text-slate-400">{terminal.path}</span>
                <span className="inline-block w-2.5 h-4 bg-brand-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        );

      case "photo":
        return (
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 opacity-40 group-hover:opacity-75 blur-xl transition duration-500"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <img
                src={profile.photoUrl}
                alt={translate(profile.name)}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );

      case "avatar":
      default:
        return (
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand-500 via-emerald-400 to-cyan-500 opacity-30 group-hover:opacity-60 blur-2xl transition duration-700"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-200/80 dark:border-slate-800/80 shadow-2xl glass-card flex items-center justify-center animate-float">
              <img
                src={profile.avatarUrl}
                alt={translate(profile.name)}
                className="w-full h-full object-contain p-2 filter drop-shadow-xl"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden glow-effect">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Column: Text & CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
              </span>
              <span>{translate(profile.status)}</span>
            </div>

            {/* Greeting & Name */}
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1">
                {labels.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {translate(profile.name)}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-brand-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                {translate(profile.title)}
              </p>
            </div>

            {/* Bio */}
            <p className="max-w-xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mx-auto lg:mx-0">
              {translate(profile.bio)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 transition-all transform active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>{labels.hero.ctaContact}</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm glass-card text-slate-800 dark:text-slate-200 hover:border-brand-500/40 hover:text-brand-500 transition-all transform active:scale-95"
              >
                <span>{labels.hero.ctaWork}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {socials.calendly && (
                <a
                  href={socials.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all transform active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{labels.hero.bookCall}</span>
                </a>
              )}
            </div>

            {/* Location */}
            <p className="text-xs text-slate-400 dark:text-slate-500 pt-2 flex items-center justify-center lg:justify-start gap-1.5">
              <span>📍</span>
              <span>{translate(profile.location)}</span>
            </p>
          </div>

          {/* Right Column: Visual */}
          <div className="flex-1 flex justify-center items-center">
            {renderVisual()}
          </div>
        </div>
      </div>
    </section>
  );
};
