import React from "react";
import { Palette, Code2, Camera, Building2, Sparkles } from "lucide-react";
import { useTemplate } from "../../context/TemplateContext";
import { useLanguage } from "../../context/LanguageContext";

export const TemplateSwitcher = () => {
  const { templateId, selectTemplate, allTemplates } = useTemplate();
  const { translate } = useLanguage();

  const getIcon = (id) => {
    switch (id) {
      case "designer":
        return <Palette className="w-3.5 h-3.5" />;
      case "developer":
        return <Code2 className="w-3.5 h-3.5" />;
      case "photographer":
        return <Camera className="w-3.5 h-3.5" />;
      case "studio":
      default:
        return <Building2 className="w-3.5 h-3.5" />;
    }
  };

  return (
    <aside
      aria-label="Portfolio Template Switcher"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] sm:max-w-fit"
    >
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-card bg-white/95 dark:bg-slate-900/95 shadow-2xl border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <Sparkles className="w-3 h-3 text-brand-500" />
          <span>Template:</span>
        </div>

        {allTemplates.map((tmpl) => {
          const isActive = templateId === tmpl.id;
          return (
            <button
              key={tmpl.id}
              onClick={() => selectTemplate(tmpl.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-102"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              <span className={isActive ? "text-brand-400 dark:text-brand-600" : ""}>
                {getIcon(tmpl.id)}
              </span>
              <span className="whitespace-nowrap">{translate(tmpl.name)}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
