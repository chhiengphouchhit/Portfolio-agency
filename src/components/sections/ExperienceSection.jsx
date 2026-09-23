import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";

export const ExperienceSection = () => {
  const { labels, translate } = useLanguage();
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-2">
            {labels.experience.heading}
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {labels.experience.subheading}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-10">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-300 dark:border-slate-700 group-hover:border-brand-500 transition-colors"></div>

              {/* Timeline Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 group-hover:border-brand-500/40 transition-all hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {translate(item.role)}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.company}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {translate(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
