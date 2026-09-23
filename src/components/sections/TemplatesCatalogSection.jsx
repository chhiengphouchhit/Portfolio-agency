import React, { useState } from "react";
import { Eye, Send, Check, Sparkles, ExternalLink } from "lucide-react";
import { templateCategories, allTemplatesList } from "../../data/allTemplatesData";
import { useLanguage } from "../../context/LanguageContext";
import { TemplateThumbnail } from "../ui/TemplateThumbnail";

export const TemplatesCatalogSection = ({ onSelectFullView }) => {
  const { isKhmer, translate } = useLanguage();
  const [activeCat, setActiveCat] = useState("creative");

  const currentCategoryTemplates = allTemplatesList.filter(
    (t) => t.categoryId === activeCat
  );

  return (
    <section id="templates-catalog" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKhmer ? "កាតាឡុក ២៥ ម៉ូត Portfolio តាមអាជីព" : "25 Real Portfolio Templates By Career"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isKhmer
              ? "៥ ក្រុមអាជីពធំៗ (១ ក្រុមមាន ៥ ម៉ូតគំរូពិត)"
              : "5 Career Categories (5 Real Templates Each)"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {isKhmer
              ? "ចុចលើប៊ូតុង «បើកមើល Website ពេញលេញ» ដើម្បីមើល Style របស់ Portfolio នីមួយៗពេលចេញមកជាក់ស្ដែងក្នុងនេះផ្ទាល់!"
              : "Click 'Open Full Website' to experience the real rendered portfolio style right inside here!"}
          </p>
        </div>

        {/* Category Tabs (5 Main Categories) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {templateCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all transform active:scale-95 ${
                activeCat === cat.id
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl scale-105"
                  : "glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-brand-500/40"
              }`}
            >
              <span>{translate(cat.name)}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  activeCat === cat.id
                    ? "bg-brand-500 text-white font-black"
                    : "bg-slate-200/80 dark:bg-slate-800 text-slate-500 font-bold"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* 5 Templates Grid for the Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategoryTemplates.map((template) => {
            const telegramOrderUrl = `https://t.me/ChhiengPhouChhit?text=${encodeURIComponent(
              `សួស្តី! ខ្ញុំចាប់អារម្មណ៍ចង់កុម្ម៉ង់ធ្វើ Portfolio ម៉ូត៖ ${template.title.km} (${template.price})`
            )}`;

            return (
              <div
                key={template.id}
                className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 group flex flex-col justify-between"
              >
                <div>
                  {/* Modern Browser Frame & Rich UI Mockup Thumbnail */}
                  <TemplateThumbnail
                    template={template}
                    isKhmer={isKhmer}
                    onPreviewClick={() => onSelectFullView(template)}
                  />

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                      {translate(template.profession)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                      {translate(template.title)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {translate(template.profile.bio)}
                    </p>

                    {/* Quick Skills / Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      {template.skills[0]?.items.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons: View Full Real Website + Order */}
                <div className="p-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    onClick={() => onSelectFullView(template)}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-brand-500 dark:hover:bg-brand-500 dark:hover:text-white transition-all transform active:scale-95 shadow-md"
                  >
                    <Eye className="w-4 h-4 text-brand-400" />
                    <span>{isKhmer ? "មើល Website ពេញលេញ" : "Open Full Website"}</span>
                  </button>

                  <a
                    href={telegramOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-brand-500 hover:bg-brand-600 text-white shadow-md shadow-brand-500/20 transition-all transform active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isKhmer ? "កុម្ម៉ង់" : "Order"}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
