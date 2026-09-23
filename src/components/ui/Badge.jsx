import React from "react";

export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
    brand: "bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20",
    accent: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
};
