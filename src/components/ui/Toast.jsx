import React from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export const Toast = ({ message, type = "success", onClose }) => {
  if (!message) return null;

  const isSuccess = type === "success";

  return (
    <div
      role="alert"
      className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-bounce-in flex items-start gap-3 p-4 rounded-xl shadow-2xl glass-card border bg-white/90 dark:bg-slate-900/90"
    >
      {isSuccess ? (
        <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
      )}
      <div className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-100">
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        aria-label="Close alert"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
