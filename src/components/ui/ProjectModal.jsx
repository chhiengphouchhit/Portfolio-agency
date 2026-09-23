import React, { useEffect } from "react";
import { X, ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "./Badge";
import { useLanguage } from "../../context/LanguageContext";

export const ProjectModal = ({ project, onClose }) => {
  const { translate, labels } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 sm:p-8 bg-white/95 dark:bg-slate-900/95 shadow-2xl border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Thumbnail */}
        <div className="relative rounded-xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800 aspect-video flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="brand">{project.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {translate(project.description)}
        </p>

        {/* Tech Badges */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 transition-all transform active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              {labels.projects.viewDemo}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all transform active:scale-95"
            >
              <Github className="w-4 h-4" />
              {labels.projects.viewCode}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
