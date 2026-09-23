import React from "react";
import { Code, Palette, Server, Camera, Check } from "lucide-react";
import { useTemplate } from "../../context/TemplateContext";
import { useLanguage } from "../../context/LanguageContext";

export const SkillsSection = () => {
  const { labels, translate } = useLanguage();
  const { activeTemplate } = useTemplate();

  const skills = activeTemplate.skills;

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-brand-500" />;
      case 1:
        return <Palette className="w-5 h-5 text-cyan-500" />;
      case 2:
        return <Camera className="w-5 h-5 text-amber-500" />;
      default:
        return <Server className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-2">
            {labels.skills.heading}
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {labels.skills.subheading}
          </p>
        </div>

        {/* Categories Grid */}
        <div className={`grid grid-cols-1 ${skills.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 transition-all hover:shadow-xl hover:shadow-brand-500/5 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {translate(group.category)}
                </h3>
              </div>

              {/* Items List */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 hover:border-brand-500/50 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                  >
                    <Check className="w-3 h-3 text-brand-500" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
