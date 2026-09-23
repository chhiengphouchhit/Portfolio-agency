import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioTemplates } from "../config/templates";
import { portfolioConfig } from "../config/portfolio.config";

const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [templateId, setTemplateId] = useState(() => {
    // 1. Check URL query string e.g. ?template=photographer
    const params = new URLSearchParams(window.location.search);
    const queryTemplate = params.get("template");
    if (queryTemplate && portfolioTemplates[queryTemplate]) {
      return queryTemplate;
    }

    // 2. Check localStorage
    const saved = localStorage.getItem("app_template_id");
    if (saved && portfolioTemplates[saved]) {
      return saved;
    }

    return "designer";
  });

  const selectTemplate = (id) => {
    if (portfolioTemplates[id]) {
      setTemplateId(id);
      localStorage.setItem("app_template_id", id);
      // Update URL query without page reload
      const url = new URL(window.location.href);
      url.searchParams.set("template", id);
      window.history.replaceState({}, "", url);
    }
  };

  const activeTemplate = portfolioTemplates[templateId] || portfolioTemplates.designer;

  return (
    <TemplateContext.Provider
      value={{
        templateId,
        selectTemplate,
        activeTemplate,
        allTemplates: Object.values(portfolioTemplates),
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) throw new Error("useTemplate must be used within TemplateProvider");
  return context;
};
