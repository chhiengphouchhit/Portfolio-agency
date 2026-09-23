import React, { useState } from "react";
import {
  ArrowLeft,
  Send,
  Sparkles,
  Download,
  Check,
  Camera,
  Terminal as TerminalIcon,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  Monitor,
  Smartphone,
  Star,
  Zap,
  Award,
  ExternalLink,
  Github,
  Eye,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ThemeToggle } from "./layout/ThemeToggle";
import { LanguageToggle } from "./layout/LanguageToggle";
import { Badge } from "./ui/Badge";
import { portfolioConfig } from "../config/portfolio.config";

export const FullPortfolioView = ({ template, onBack }) => {
  const { isKhmer, translate } = useLanguage();
  const [deviceMode, setDeviceMode] = useState("desktop"); // "desktop" | "mobile"
  const [selectedDemoProject, setSelectedDemoProject] = useState(null);

  const telegramOrderLink = `https://t.me/yourusername?text=${encodeURIComponent(
    `សួស្តី! ខ្ញុំបានមើលគំរូពិតហើយ ខ្ញុំចង់កុម្ម៉ង់ធ្វើ Portfolio ម៉ូត៖ ${template.title.km} (${template.price})`
  )}`;

  const { profile, skills, equipment, terminal, heroStyle } = template;

  const renderHeroVisual = () => {
    switch (heroStyle) {
      case "terminal":
        return (
          <div className="relative group w-full max-w-lg">
            {/* Ambient terminal glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-[#0c101c] font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between px-4 py-3 bg-[#131929] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm shadow-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/50"></div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
                  <TerminalIcon className="w-3.5 h-3.5 text-brand-400" />
                  <span>{terminal?.user || "dev@terminal"}</span>
                </div>
                <div className="w-8"></div>
              </div>

              <div className="p-5 sm:p-6 space-y-3.5 text-slate-300">
                <div className="text-slate-500 text-xs italic">
                  # Interactive Production Shell v2.4 (Ready to deploy)
                </div>
                {terminal?.commands?.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-brand-400">
                      <span className="text-cyan-400 font-bold">➜</span>
                      <span className="text-slate-400">{terminal.path}</span>
                      <span className="font-bold text-slate-100">{item.cmd}</span>
                    </div>
                    <div className="pl-6 text-slate-300 text-xs sm:text-sm bg-slate-900/60 p-2 rounded-lg border border-slate-800/80">
                      {item.output}
                    </div>
                  </div>
                )) || (
                  <div className="text-brand-400">➜ ready to execute production code 🚀</div>
                )}
                <div className="flex items-center gap-2 text-brand-400 pt-1">
                  <span className="text-cyan-400 font-bold">➜</span>
                  <span className="text-slate-400">{terminal?.path || "~/portfolio"}</span>
                  <span className="inline-block w-2.5 h-4 bg-brand-400 animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Floating Terminal Badge */}
            <div className="absolute -bottom-4 -left-4 animate-float glass-card px-3.5 py-1.5 rounded-xl border border-emerald-500/30 flex items-center gap-2 shadow-lg text-xs font-bold text-emerald-400">
              <Zap className="w-3.5 h-3.5" />
              <span>0ms Latency</span>
            </div>
          </div>
        );

      case "photo":
        return (
          <div className="relative group">
            {/* Glowing Aura Ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 opacity-40 group-hover:opacity-80 blur-2xl transition duration-700 animate-pulse-slow"></div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/90 dark:border-slate-800 shadow-2xl bg-gradient-to-tr from-brand-500/20 to-purple-500/20 flex items-center justify-center">
              <img
                src={profile.photoUrl}
                alt={translate(profile.name)}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-slate-900">
                <div className="w-20 h-20 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 font-black text-2xl">
                  {profile.name.en?.charAt(0) || "P"}
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Rating */}
            <div className="absolute top-2 -left-4 animate-float glass-card px-3.5 py-2 rounded-2xl border border-amber-500/30 flex items-center gap-2 shadow-xl backdrop-blur-xl">
              <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Rating</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">5.0 Star Pro</div>
              </div>
            </div>

            {/* Floating Badge 2: Verified Talent */}
            <div className="absolute bottom-4 -right-4 animate-float-slow glass-card px-3.5 py-2 rounded-2xl border border-brand-500/30 flex items-center gap-2 shadow-xl backdrop-blur-xl">
              <div className="w-6 h-6 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Verified</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Top Creator</div>
              </div>
            </div>
          </div>
        );

      case "logo":
        return (
          <div className="relative group flex items-center justify-center">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-40 group-hover:opacity-80 blur-2xl transition duration-700 animate-pulse-slow"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-card p-8 flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-2xl animate-float">
              <img
                src={profile.logoUrl || "/images/logo.svg"}
                alt="Logo"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>
            {/* Floating Agency Badge */}
            <div className="absolute -bottom-4 right-2 animate-float-slow glass-card px-4 py-2 rounded-2xl border border-blue-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Cycle Studio</span>
            </div>
          </div>
        );

      case "avatar":
      default:
        return (
          <div className="relative group">
            {/* Kinetic Glow Mesh */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-brand-500 via-emerald-400 to-cyan-500 opacity-35 group-hover:opacity-70 blur-3xl transition duration-700 animate-pulse-slow"></div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-200/90 dark:border-slate-800/90 shadow-2xl glass-card flex items-center justify-center animate-float">
              <img
                src={profile.avatarUrl || "/images/avatar.svg"}
                alt={translate(profile.name)}
                className="w-full h-full object-contain p-3 filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Creative Badge */}
            <div className="absolute top-4 -left-4 animate-float glass-card px-3.5 py-2 rounded-2xl border border-brand-500/30 flex items-center gap-2 shadow-xl backdrop-blur-xl">
              <div className="w-6 h-6 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Design</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Pixel-Perfect</div>
              </div>
            </div>

            {/* Floating Speed Badge */}
            <div className="absolute -bottom-2 right-2 animate-float-slow glass-card px-3.5 py-2 rounded-2xl border border-cyan-500/30 flex items-center gap-2 shadow-xl backdrop-blur-xl">
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Performance</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">100/100 Speed</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-sans pb-32 animate-fade-in relative overflow-x-hidden selection:bg-brand-500 selection:text-white">
      {/* Background Aurora Mesh (Motion Graphic Atmosphere) */}
      <div className="aurora-mesh opacity-50 dark:opacity-30 pointer-events-none"></div>

      {/* Top Floating Template Viewer Bar */}
      <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 py-3.5 shadow-xl flex items-center justify-between gap-4 backdrop-blur-2xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-200/80 dark:bg-slate-800/90 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white text-slate-800 dark:text-white transition-all transform active:scale-95 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isKhmer ? "ត្រឡប់ទៅមើលម៉ូតទាំង ២៥" : "Back to All Templates"}</span>
        </button>

        {/* Center: Device Mode Switcher (Desktop vs Mobile Frame) */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700">
          <button
            onClick={() => setDeviceMode("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              deviceMode === "desktop"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setDeviceMode("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              deviceMode === "mobile"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Frame</span>
          </button>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={telegramOrderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-brand-500 via-emerald-400 to-brand-500 text-white shadow-xl shadow-brand-500/25 transition-all transform active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isKhmer ? "កុម្ម៉ង់ម៉ូតនេះ" : "Order Template"}</span>
            <span>({template.price})</span>
          </a>
        </div>
      </header>

      {/* Main Container (Supports Responsive Desktop or Phone Screen Simulator) */}
      <div className={`mx-auto transition-all duration-500 ${
        deviceMode === "mobile"
          ? "max-w-[420px] my-8 rounded-[48px] border-[12px] border-slate-900 shadow-2xl shadow-black/40 overflow-hidden bg-[#f8fafc] dark:bg-[#090d16]"
          : "w-full"
      }`}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* HERO SECTION */}
          <section className="pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center lg:text-left space-y-6">
                {/* Live Pulse Status Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-bold text-slate-800 dark:text-slate-200 border border-brand-500/30 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                  </span>
                  <span>{translate(profile.status)}</span>
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-black tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1.5 flex items-center justify-center lg:justify-start gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isKhmer ? "សួស្តី! ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ" : "HELLO, I'M"}</span>
                  </p>
                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                    {translate(profile.name)}
                  </h1>
                  <p className="mt-2.5 text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                    {translate(profile.title)}
                  </p>
                </div>

                <p className="max-w-xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mx-auto lg:mx-0 font-medium">
                  {translate(profile.bio)}
                </p>

                {/* Primary Call to Actions */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <a
                    href="#contact-section"
                    className="shimmer-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm bg-gradient-to-r from-brand-500 via-emerald-400 to-brand-500 text-white shadow-xl shadow-brand-500/30 hover:scale-105 transition-all transform active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isKhmer ? "ទាក់ទងមកខ្ញុំ" : "Get In Touch"}</span>
                  </a>
                  <a
                    href="#projects-preview"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm glass-card text-slate-800 dark:text-white hover:border-brand-500 hover:text-brand-500 hover:scale-105 transition-all transform active:scale-95"
                  >
                    <span>{isKhmer ? "មើលស្នាដៃគំរូ" : "Explore Work"}</span>
                  </a>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-500 pt-2 flex items-center justify-center lg:justify-start gap-1.5 font-medium">
                  <span>📍</span>
                  <span>{translate(profile.location)}</span>
                </p>
              </div>

              {/* Hero Visual Motion Container */}
              <div className="flex-1 flex justify-center items-center">
                {renderHeroVisual()}
              </div>
            </div>
          </section>

          {/* KINETIC SKILLS MARQUEE RIBBON */}
          <div className="py-4 my-6 overflow-hidden rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80">
            <div className="animate-marquee flex items-center gap-6">
              {[1, 2].map((loop) => (
                <React.Fragment key={loop}>
                  {skills.flatMap((s) => s.items).map((skillName, idx) => (
                    <div key={idx} className="flex items-center gap-2 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                        {skillName}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 shrink-0">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs sm:text-sm font-black text-cyan-400 uppercase tracking-widest">
                      {template.styleName}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* STATS COUNTERS */}
          <section className="py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "4+", label: isKhmer ? "ឆ្នាំបទពិសោធន៍" : "Years Experience" },
                { value: "50+", label: isKhmer ? "គម្រោងសម្រេច" : "Projects Completed" },
                { value: "99%", label: isKhmer ? "ការពេញចិត្តពីភ្ញៀវ" : "Satisfaction Rate" },
                { value: "< 24h", label: isKhmer ? "ឆ្លើយតបរហ័ស" : "Fast Turnaround" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-3xl text-center border hover:border-brand-500/50 hover:scale-105 transition-all group shadow-sm"
                >
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EQUIPMENT GEAR (IF PHOTOGRAPHER/VIDEO) */}
          {equipment && equipment.length > 0 && (
            <section className="py-16 border-t border-slate-200 dark:border-slate-800/80">
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs font-bold tracking-widest uppercase text-amber-500 dark:text-amber-400">
                  {isKhmer ? "សម្ភារៈបម្រើការងារអាជីព" : "Equipment & Gear"}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
                  {isKhmer ? "ម៉ាស៊ីនកាមេរ៉ា & Lens ប្រើប្រាស់" : "Camera & Production Systems"}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {equipment.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:scale-105 transition-all flex items-start gap-4 shadow-sm"
                  >
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-500 shrink-0">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">{item.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS DETAIL SECTION */}
          <section className="py-16 border-t border-slate-200 dark:border-slate-800/80">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {isKhmer ? "ជំនាញ និងបច្ចេកវិទ្យា" : "Skills & Capabilities"}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((group, idx) => (
                <div key={idx} className="glass-card rounded-3xl p-7 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 transition-all">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-500" />
                    <span>{translate(group.category)}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500/50 hover:text-brand-500 transition-colors"
                      >
                        <Check className="w-3.5 h-3.5 text-brand-500" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SHOWCASE OF PROJECTS IN THIS STYLE */}
          <section id="projects-preview" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400">
                {isKhmer ? "ស្នាដៃដែលបានបញ្ចប់" : "Selected Works"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
                {isKhmer ? "ស្នាដៃគំរូក្នុងម៉ូតនេះ" : "Featured Case Studies"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                { title: "Brand Identity & Packaging", tag: "Creative", img: template.image },
                { title: "Mobile & Web Experience", tag: "Digital", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
                { title: "Commercial Editorial Production", tag: "Media", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 group hover:border-brand-500/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                        <Sparkles className="w-8 h-8 opacity-40 text-brand-400" />
                      </div>
                      <img
                        src={proj.img}
                        alt="Work sample"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="brand">{proj.tag}</Badge>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                        <button
                          onClick={() => setSelectedDemoProject(proj)}
                          className="p-3 rounded-full bg-white text-slate-900 hover:scale-110 transition-transform shadow-xl"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1.5 group-hover:text-brand-500 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {isKhmer
                          ? "ការរចនា និងរៀបចំកូដកម្រិតស្ដង់ដារអន្តរជាតិ មានភាពទាក់ទាញ និងល្បឿនលឿន។"
                          : "High impact visual storytelling with responsive performance across all platforms."}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400">
                    <span>{isKhmer ? "មើល Case Study" : "View Case Study"}</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact-section" className="py-20 border-t border-slate-200 dark:border-slate-800/80 text-center space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-black tracking-widest uppercase">
              <Send className="w-3.5 h-3.5" />
              <span>{isKhmer ? "ទំនាក់ទំនងធ្វើការងារ" : "Get In Touch"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
              {isKhmer ? "តោះចាប់ផ្ដើមគម្រោងជាមួយគ្នា" : "Let's Build Something Great"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              {isKhmer
                ? "ផ្ញើសារមកខ្ញុំតាម Telegram ឬ Email ដើម្បីពិភាក្សាពីការងារ និងទទួលតម្លៃពិសេស!"
                : "Reach out directly via Telegram or Email to discuss your timeline, scope, and vision."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href={telegramOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-sm bg-gradient-to-r from-brand-500 via-emerald-400 to-brand-500 text-white shadow-2xl shadow-brand-500/30 hover:scale-105 transition-all transform active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>{isKhmer ? "ជជែកតាម Telegram ផ្ទាល់" : "Direct Telegram Chat"}</span>
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Floating Bottom Bar: Order This Exact Template */}
      <aside
        aria-label="Order Template Action"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] w-full sm:w-auto"
      >
        <div className="glass-card bg-slate-950/95 text-white p-3 sm:px-6 sm:py-3.5 rounded-3xl shadow-2xl border border-slate-800 flex items-center justify-between sm:gap-8 backdrop-blur-2xl">
          <div className="hidden sm:block">
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              {isKhmer ? "ពេញចិត្តម៉ូតមួយនេះមែនទេ?" : "Love this exact template?"}
            </div>
            <div className="text-sm font-black text-white flex items-center gap-2">
              <span>{translate(template.title)}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-brand-500 text-white">{template.price}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-slate-300 transition-all active:scale-95"
            >
              {isKhmer ? "← រើសម៉ូតផ្សេង" : "← Catalog"}
            </button>
            <a
              href={telegramOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none shimmer-btn inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-brand-500 via-emerald-400 to-brand-500 text-white shadow-xl shadow-brand-500/25 transition-all transform active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{isKhmer ? "កុម្ម៉ង់ធ្វើម៉ូតនេះ" : "Order This Template"}</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};
