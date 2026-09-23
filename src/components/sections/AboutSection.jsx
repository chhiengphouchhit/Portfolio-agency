import React from "react";
import { Download, CheckCircle2, Sparkles } from "lucide-react";
import { useTemplate } from "../../context/TemplateContext";
import { useLanguage } from "../../context/LanguageContext";

export const AboutSection = () => {
  const { labels, translate } = useLanguage();
  const { activeTemplate } = useTemplate();

  const profile = activeTemplate.profile;
  const stats = activeTemplate.stats;

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-2">
            {labels.about.heading}
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {labels.about.subheading}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl text-center border hover:border-brand-500/40 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                {translate(stat.label)}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Highlights */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-500" />
              <span>{translate(profile.tagline)}</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {translate(profile.bio)}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                <span>Pixel-Perfect Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                <span>Clean &amp; Scalable Execution</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                <span>Direct 1-on-1 Communication</span>
              </div>
            </div>
          </div>

          {/* Download CV CTA */}
          <div className="shrink-0 w-full md:w-auto text-center">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-4 rounded-2xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 shadow-xl transition-all transform active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{labels.hero.downloadCv}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
