import React, { useState } from "react";
import { ExternalLink, Github, Eye, Sparkles } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";
import { Badge } from "../ui/Badge";

export const ProjectsSection = ({ onSelectProject }) => {
  const { labels, translate } = useLanguage();
  const { projects } = portfolioConfig;

  // Extract unique categories for filter
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Count items per category
  const getCount = (cat) => {
    if (cat === "All") return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{labels.projects.heading}</span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {labels.projects.subheading}
          </p>
        </div>

        {/* Category Filter Tabs with dynamic item counts */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105"
                  : "glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-transparent"
              }`}
            >
              <span>{cat === "All" ? labels.projects.filterAll : cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat
                    ? "bg-white/20 text-white"
                    : "bg-slate-200/70 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {getCount(cat)}
              </span>
            </button>
          ))}
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/90 hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="brand">{project.category}</Badge>
                  </div>

                  {/* Hover Quick Overlay */}
                  <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="p-3 rounded-full bg-white text-slate-900 hover:scale-110 transition-transform shadow-xl"
                      aria-label="View details"
                      title={labels.projects.viewDetails}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-brand-500 text-white hover:scale-110 transition-transform shadow-xl"
                        aria-label="Live Demo"
                        title={labels.projects.viewDemo}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-slate-800 text-white hover:scale-110 transition-transform shadow-xl"
                        aria-label="Source Code"
                        title={labels.projects.viewCode}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {translate(project.description)}
                  </p>
                </div>
              </div>

              {/* Bottom Tags & Detail CTA */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 px-1 py-0.5">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>{labels.projects.viewDetails}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
