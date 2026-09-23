import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { TemplateProvider } from "./context/TemplateContext.jsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <TemplateProvider>
          <App />
        </TemplateProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
