import React from "react";
import { Camera, Aperture, Focus, Video, Sparkles } from "lucide-react";
import { useTemplate } from "../../context/TemplateContext";
import { useLanguage } from "../../context/LanguageContext";

export const EquipmentSection = () => {
  const { activeTemplate } = useTemplate();
  const { isKhmer } = useLanguage();

  if (!activeTemplate.equipment || activeTemplate.equipment.length === 0) {
    return null;
  }

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Camera":
        return <Camera className="w-5 h-5 text-amber-500" />;
      case "Aperture":
        return <Aperture className="w-5 h-5 text-rose-500" />;
      case "Focus":
        return <Focus className="w-5 h-5 text-cyan-500" />;
      case "Video":
        return <Video className="w-5 h-5 text-purple-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-500" />;
    }
  };

  return (
    <section className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400">
            {isKhmer ? "ឧបករណ៍ និងប្រព័ន្ធកាមេរ៉ា" : "Camera & Production Systems"}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            {isKhmer ? "សម្ភារៈបម្រើការងារអាជីព (Production Gear)" : "Professional Equipment & Gear"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeTemplate.equipment.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
