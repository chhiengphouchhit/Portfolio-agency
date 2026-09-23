import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AgencyHero } from "./components/sections/AgencyHero";
import { AnimatedTicker } from "./components/ui/AnimatedTicker";
import { TemplatesCatalogSection } from "./components/sections/TemplatesCatalogSection";
import { ServicePricing } from "./components/sections/ServicePricing";
import { ContactSection } from "./components/sections/ContactSection";
import { FullPortfolioView } from "./components/FullPortfolioView";
import { allTemplatesList } from "./data/allTemplatesData";
import { Toast } from "./components/ui/Toast";

export default function App() {
  const [selectedFullTemplate, setSelectedFullTemplate] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const tmplId = params.get("template");
    if (tmplId) {
      const found = allTemplatesList.find((t) => t.id === tmplId);
      if (found) return found;
    }
    return null;
  });

  const [toast, setToast] = useState({ message: "", type: "success" });

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768;
    if (isTouchDevice) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenFullTemplate = (template) => {
    setSelectedFullTemplate(template);
    window.scrollTo({ top: 0, behavior: "instant" });
    const url = new URL(window.location.href);
    url.searchParams.set("template", template.id);
    window.history.pushState({}, "", url);
  };

  const handleBackToCatalog = () => {
    setSelectedFullTemplate(null);
    window.scrollTo({ top: 0, behavior: "instant" });
    const url = new URL(window.location.href);
    url.searchParams.delete("template");
    window.history.pushState({}, "", url);
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: "", type: "success" });
    }, 4500);
  };

  if (selectedFullTemplate) {
    return (
      <FullPortfolioView
        template={selectedFullTemplate}
        onBack={handleBackToCatalog}
      />
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-brand-500 selection:text-white overflow-hidden">
      {/* Background radial accent glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-brand-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Agency Content */}
      <main className="flex-1">
        <AgencyHero />
        <AnimatedTicker />
        <TemplatesCatalogSection onSelectFullView={handleOpenFullTemplate} />
        <ServicePricing />
        <ContactSection onToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Feedback */}
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: "", type: "success" })}
        />
      )}
    </div>
  );
}
