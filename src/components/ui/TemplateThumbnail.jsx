import React from "react";
import {
  Code,
  Terminal,
  Smartphone,
  Sparkles,
  Camera,
  Layers,
  Cpu,
  Palette,
  Briefcase,
  Play,
  Activity,
  Award,
  Video,
  Eye,
  Globe,
  Lock,
  Compass,
  Zap,
  TrendingUp,
  Shield,
  Home,
  Heart,
  Grid,
  FileText,
  Share2,
  BookOpen,
  GraduationCap,
} from "lucide-react";

/**
 * World-Class Interactive Website Mockup Thumbnail
 * Renders an instant, ultra-crisp, reliable visual mockup for all 25 templates.
 * 100% immune to slow CDNs, image timeouts, or broken image icons!
 */
export const TemplateThumbnail = ({ template, isKhmer, onPreviewClick }) => {
  const { id, styleName, price, themeColor } = template;

  // Render specific rich visual preview based on template ID
  const renderVisualMockup = () => {
    switch (id) {
      // ==========================================
      // 1. DESIGN & CREATIVE
      // ==========================================
      case "graphic-designer-pich":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            {/* Glowing neon orb background */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-rose-500/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-amber-500/25 rounded-full blur-2xl" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                Pich Samnang
              </span>
              <span className="flex items-center gap-1 text-[9px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                4K HDR Showreel
              </span>
            </div>

            <div className="relative z-10 my-auto text-center space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Visual Storyteller</span>
              </div>
              <h4 className="text-sm font-black text-white tracking-tight drop-shadow">
                Graphic & Cinema Reels
              </h4>
            </div>

            <div className="relative z-10 flex items-center justify-between gap-1 pt-2 border-t border-white/10">
              <div className="flex gap-1">
                <span className="text-[9px] bg-rose-500/20 text-rose-300 font-semibold px-1.5 py-0.5 rounded border border-rose-500/30">Ps</span>
                <span className="text-[9px] bg-amber-500/20 text-amber-300 font-semibold px-1.5 py-0.5 rounded border border-amber-500/30">Ai</span>
                <span className="text-[9px] bg-purple-500/20 text-purple-300 font-semibold px-1.5 py-0.5 rounded border border-purple-500/30">Pr</span>
              </div>
              <span className="text-[9px] font-bold text-slate-300">2026 Edition</span>
            </div>
          </div>
        );

      case "uiux-product-designer":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />

            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/15 px-2 py-0.5 rounded border border-cyan-500/30">
                Figma Design System
              </span>
              <span className="text-[9px] text-slate-400 font-mono">Mobile First</span>
            </div>

            {/* Mobile App UI Cards Simulation */}
            <div className="relative z-10 my-auto grid grid-cols-2 gap-2 max-w-[200px] mx-auto w-full">
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/15 shadow-lg">
                <div className="w-5 h-5 rounded-lg bg-cyan-500/30 flex items-center justify-center mb-1 text-cyan-300 text-[10px] font-bold">
                  UI
                </div>
                <div className="h-1.5 w-12 bg-white/40 rounded-full mb-1" />
                <div className="h-1 w-8 bg-white/20 rounded-full" />
              </div>
              <div className="bg-cyan-500/20 backdrop-blur-md p-2 rounded-xl border border-cyan-500/30 shadow-lg">
                <div className="w-5 h-5 rounded-lg bg-cyan-400 flex items-center justify-center mb-1 text-slate-950 text-[10px] font-black">
                  UX
                </div>
                <div className="h-1.5 w-10 bg-cyan-200/60 rounded-full mb-1" />
                <div className="h-1 w-6 bg-cyan-200/30 rounded-full" />
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-white/10">
              <span>Prototype Flow 3.0</span>
              <span className="text-cyan-400 font-semibold">120+ Components</span>
            </div>
          </div>
        );

      case "3d-motion-artist":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-black tracking-wider text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                OCTANE & BLENDER
              </span>
              <span className="text-[9px] text-slate-400 font-mono">60 FPS CGI</span>
            </div>

            {/* 3D Wireframe / Particle Motif */}
            <div className="relative z-10 my-auto text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 shadow-xl shadow-purple-500/20 transform rotate-12 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Layers className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <p className="text-xs font-bold text-white mt-2">CGI & Spatial Motion</p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-white/10">
              <span className="text-purple-300">Physics Simulation</span>
              <span>Ray-tracing ON</span>
            </div>
          </div>
        );

      case "fashion-brand-stylist":
        return (
          <div className="w-full h-full bg-gradient-to-br from-stone-900 via-amber-950/40 to-stone-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-600/20 rounded-full blur-xl" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-serif tracking-widest text-amber-300 uppercase">
                Haute Couture
              </span>
              <span className="text-[9px] text-stone-400">Editorial 2026</span>
            </div>

            <div className="relative z-10 my-auto text-center space-y-1">
              <div className="text-[10px] tracking-widest text-amber-400 font-semibold uppercase">
                Art Direction & Styling
              </div>
              <h4 className="text-base font-serif font-bold text-white tracking-wide">
                Maison de Style
              </h4>
              <div className="h-0.5 w-8 bg-amber-500/60 mx-auto" />
            </div>

            <div className="relative z-10 flex items-center justify-between text-[9px] text-stone-400 pt-2 border-t border-stone-800">
              <span>Lookbook Gallery</span>
              <span className="text-amber-300 font-serif">Vogue / Elle Series</span>
            </div>
          </div>
        );

      case "illustrator-comic-artist":
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
                PROCREATE & MANGA
              </span>
              <span className="text-[9px] text-slate-400">Character Concept</span>
            </div>

            {/* Comic art frame panels */}
            <div className="relative z-10 my-auto grid grid-cols-3 gap-1.5 max-w-[200px] mx-auto w-full">
              <div className="h-14 rounded-lg bg-indigo-900/40 border border-indigo-500/40 p-1 flex items-center justify-center">
                <Palette className="w-4 h-4 text-indigo-300" />
              </div>
              <div className="h-14 rounded-lg bg-purple-900/40 border border-purple-500/40 p-1 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-300" />
              </div>
              <div className="h-14 rounded-lg bg-pink-900/40 border border-pink-500/40 p-1 flex items-center justify-center">
                <Layers className="w-4 h-4 text-pink-300" />
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-white/10">
              <span>Digital Brush Assets</span>
              <span className="text-indigo-400 font-semibold">Commissions Open</span>
            </div>
          </div>
        );

      // ==========================================
      // 2. DEVELOPERS & TECH
      // ==========================================
      case "fullstack-terminal-dev":
        return (
          <div className="w-full h-full bg-slate-950 p-3.5 flex flex-col justify-between relative overflow-hidden font-mono select-none">
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-900/50">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-400">dara@dev-box: ~/app</span>
              </div>
              <span className="text-[9px] text-emerald-500/80">bash 5.2</span>
            </div>

            {/* Terminal Live Output */}
            <div className="my-auto space-y-1 text-[10px] text-left">
              <p className="text-slate-400">$ node server.js --cluster</p>
              <p className="text-emerald-400 font-bold">✓ Connected to PostgreSQL (2ms)</p>
              <p className="text-cyan-400">✓ Redis Cache Worker: READY</p>
              <p className="text-emerald-300 flex items-center gap-1">
                <span>⚡ GraphQL API running on :4000</span>
                <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse" />
              </p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1.5 border-t border-slate-900">
              <span className="text-emerald-400">STATUS: 200 OK</span>
              <span>Uptime: 99.99%</span>
            </div>
          </div>
        );

      case "minimalist-frontend-dev":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-black p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-cyan-400 tracking-wider">
                REACT 19 // NEXT.JS
              </span>
              <span className="text-[9px] text-slate-400">Minimalist UI</span>
            </div>

            <div className="my-auto text-center space-y-2">
              <div className="inline-block font-mono text-xs text-white bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
                &lt;CleanArchitecture /&gt;
              </div>
              <div className="flex justify-center gap-2">
                <span className="text-[9px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                  TypeScript
                </span>
                <span className="text-[9px] font-mono bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
                  Tailwind
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-500 pt-2 border-t border-slate-800">
              <span>Lighthouse Score: 100</span>
              <span className="text-cyan-400">0.2s FCP</span>
            </div>
          </div>
        );

      case "mobile-app-developer":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-sky-400 bg-sky-500/20 px-2 py-0.5 rounded border border-sky-500/30">
                FLUTTER & SWIFT
              </span>
              <span className="text-[9px] text-slate-400">iOS & Android</span>
            </div>

            {/* Mobile Device Mockup outline */}
            <div className="my-auto flex items-center justify-center gap-2">
              <div className="w-16 h-20 rounded-xl bg-slate-900 border-2 border-sky-500/50 p-1 flex flex-col justify-between shadow-lg shadow-sky-500/10">
                <div className="w-4 h-1 bg-slate-700 rounded-full mx-auto" />
                <div className="space-y-1">
                  <div className="h-1 w-8 bg-sky-400/80 rounded" />
                  <div className="h-1 w-6 bg-slate-600 rounded" />
                </div>
                <div className="w-3 h-3 rounded-full bg-sky-500/30 mx-auto flex items-center justify-center">
                  <Smartphone className="w-2 h-2 text-sky-300" />
                </div>
              </div>
              <div className="text-left space-y-1">
                <div className="text-[11px] font-bold text-white">Native Performance</div>
                <div className="text-[9px] text-sky-300">120Hz Animations</div>
                <div className="text-[9px] text-slate-400">Offline SQLite Sync</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>App Store Ready</span>
              <span className="text-sky-400">Play Store Verified</span>
            </div>
          </div>
        );

      case "ai-data-scientist":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-violet-400 bg-violet-500/20 px-2 py-0.5 rounded border border-violet-500/30">
                PYTORCH & LLMs
              </span>
              <span className="text-[9px] text-slate-400">MLOps Pipeline</span>
            </div>

            {/* Neural Net Nodes Visualization */}
            <div className="my-auto flex items-center justify-around max-w-[200px] mx-auto w-full">
              <div className="space-y-2">
                <div className="w-3 h-3 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
                <div className="w-3 h-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
              </div>
              <div className="space-y-3">
                <div className="w-4 h-4 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500/50 flex items-center justify-center">
                  <Cpu className="w-2.5 h-2.5 text-white" />
                </div>
                <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 flex items-center justify-center">
                  <Activity className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span className="text-violet-300">Accuracy: 98.4%</span>
              <span>CUDA Latency: 12ms</span>
            </div>
          </div>
        );

      case "devops-cloud-engineer":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-teal-400 bg-teal-500/20 px-2 py-0.5 rounded border border-teal-500/30">
                KUBERNETES & AWS
              </span>
              <span className="text-[9px] text-slate-400">Terraform IaC</span>
            </div>

            {/* Microservices topology cards */}
            <div className="my-auto grid grid-cols-3 gap-1.5 text-center">
              <div className="bg-slate-900/90 border border-teal-500/30 p-1.5 rounded-lg">
                <div className="text-[10px] font-bold text-teal-300">K8s</div>
                <div className="text-[8px] text-slate-400">16 Pods</div>
              </div>
              <div className="bg-slate-900/90 border border-teal-500/30 p-1.5 rounded-lg">
                <div className="text-[10px] font-bold text-emerald-300">CI/CD</div>
                <div className="text-[8px] text-slate-400">Passed</div>
              </div>
              <div className="bg-slate-900/90 border border-teal-500/30 p-1.5 rounded-lg">
                <div className="text-[10px] font-bold text-cyan-300">SLA</div>
                <div className="text-[8px] text-slate-400">99.99%</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Auto-scaling Active</span>
              <span className="text-teal-300 font-mono">Zero Downtime</span>
            </div>
          </div>
        );

      // ==========================================
      // 3. PHOTO & VIDEO
      // ==========================================
      case "wedding-cinematic-photo":
        return (
          <div className="w-full h-full bg-gradient-to-br from-stone-900 via-rose-950/40 to-stone-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-serif tracking-widest text-rose-300">
                CINEMATIC WEDDINGS
              </span>
              <span className="text-[9px] text-stone-400">Sony Alpha GM</span>
            </div>

            {/* Viewfinder focus brackets */}
            <div className="my-auto relative text-center py-2">
              <div className="w-16 h-12 border border-rose-400/40 rounded mx-auto relative flex items-center justify-center">
                <div className="w-2 h-2 border-t-2 border-l-2 border-rose-400 absolute top-0 left-0" />
                <div className="w-2 h-2 border-t-2 border-r-2 border-rose-400 absolute top-0 right-0" />
                <div className="w-2 h-2 border-b-2 border-l-2 border-rose-400 absolute bottom-0 left-0" />
                <div className="w-2 h-2 border-b-2 border-r-2 border-rose-400 absolute bottom-0 right-0" />
                <Camera className="w-4 h-4 text-rose-300" />
              </div>
              <p className="text-[10px] font-serif text-white mt-1.5">f/1.2 • 1/500s • ISO 100</p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-stone-400 pt-2 border-t border-stone-800">
              <span>4K Documentary Story</span>
              <span className="text-rose-300 font-serif">500+ Couples</span>
            </div>
          </div>
        );

      case "studio-commercial-product":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-neutral-900 to-black p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-neutral-300 bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
                STUDIO 855 // PRODUCT
              </span>
              <span className="text-[9px] text-neutral-400">Profoto Lighting</span>
            </div>

            <div className="my-auto text-center space-y-1.5">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-700 flex items-center justify-center shadow-2xl">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-xs font-bold text-white tracking-wide">Macro & Commercial 8K</p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-neutral-400 pt-2 border-t border-neutral-800">
              <span>Color Accurate Pro</span>
              <span className="text-white">Medium Format</span>
            </div>
          </div>
        );

      case "drone-aerial-filmmaker":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-sky-950/60 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden font-mono select-none">
            {/* Drone HUD overlay */}
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-rose-400 flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                REC [4K 60P]
              </span>
              <span className="text-sky-300">BAT: 94%</span>
            </div>

            <div className="my-auto text-center space-y-1">
              <div className="inline-block text-[11px] font-bold text-white bg-slate-900/80 px-3 py-1 rounded border border-sky-500/40">
                ALT: 120M • SPD: 45KM/H
              </div>
              <p className="text-[10px] text-sky-400 font-sans font-bold">
                FPV Cinematics & Landscapes
              </p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1.5 border-t border-slate-800">
              <span>Gimbal: -45°</span>
              <span className="text-sky-400">DJI Inspire 3</span>
            </div>
          </div>
        );

      case "street-documentary-photo":
        return (
          <div className="w-full h-full bg-black p-4 flex flex-col justify-between relative overflow-hidden select-none border-x-4 border-dashed border-stone-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-stone-300">
                LEICA M11 // 35MM
              </span>
              <span className="text-[9px] text-stone-500 font-mono">FRAME #24</span>
            </div>

            <div className="my-auto text-center space-y-1">
              <p className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                Raw Human Stories
              </p>
              <p className="text-[10px] text-stone-400 italic">"The Decisive Moment"</p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-stone-500 font-mono pt-2 border-t border-stone-900">
              <span>TRI-X 400</span>
              <span className="text-stone-300">B&W Documentary</span>
            </div>
          </div>
        );

      case "music-video-director":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                ANAMORPHIC 2.39:1
              </span>
              <span className="text-[9px] text-slate-400 font-mono">01:24:50:18</span>
            </div>

            {/* Audio Waveform simulation */}
            <div className="my-auto text-center space-y-2">
              <div className="flex items-end justify-center gap-1 h-8">
                {[40, 75, 100, 60, 90, 45, 80, 100, 70, 50, 85, 30].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 rounded-full bg-gradient-to-t from-purple-500 to-pink-500"
                  />
                ))}
              </div>
              <p className="text-xs font-bold text-white">Music Videos & Commercials</p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>ARRI Alexa Mini LF</span>
              <span className="text-pink-400 font-semibold">10M+ Total Views</span>
            </div>
          </div>
        );

      // ==========================================
      // 4. BUSINESS & PRO
      // ==========================================
      case "executive-consultant":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                STRATEGY & M&A
              </span>
              <span className="text-[9px] text-slate-400">Boardroom Advisory</span>
            </div>

            <div className="my-auto text-center space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+340% Enterprise ROI</span>
              </div>
              <h4 className="text-sm font-bold text-white">Corporate Leadership</h4>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Fortune 500 Trusted</span>
              <span className="text-blue-300 font-semibold">15+ Yrs Track Record</span>
            </div>
          </div>
        );

      case "corporate-lawyer":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-serif tracking-wider text-amber-300">
                LEGAL COUNSEL
              </span>
              <span className="text-[9px] text-slate-400">Bar Association</span>
            </div>

            <div className="my-auto text-center space-y-1.5">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="text-xs font-serif font-bold text-white tracking-wide">
                Commercial Law & Arbitration
              </h4>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Contract Negotiation</span>
              <span className="text-amber-300 font-serif">100% Confidential</span>
            </div>
          </div>
        );

      case "luxury-real-estate":
        return (
          <div className="w-full h-full bg-gradient-to-br from-stone-900 via-slate-900 to-black p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                PRIME PROPERTIES
              </span>
              <span className="text-[9px] text-stone-400">Borey & Penthouses</span>
            </div>

            <div className="my-auto text-center space-y-1">
              <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-tr from-amber-500/30 to-rose-500/30 border border-amber-500/30 flex items-center justify-center">
                <Home className="w-5 h-5 text-amber-300" />
              </div>
              <h4 className="text-xs font-bold text-white">Luxury Estates Catalog</h4>
              <p className="text-[10px] text-amber-400 font-black">$500K - $10M+</p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-stone-400 pt-2 border-t border-stone-800">
              <span>VIP Buyer Access</span>
              <span className="text-white">Phnom Penh & Siem Reap</span>
            </div>
          </div>
        );

      case "fitness-athletic-coach":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-lime-950/40 to-black p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black tracking-widest text-lime-400 uppercase">
                ELITE ATHLETICS
              </span>
              <span className="text-[9px] text-lime-400/80 font-mono">145 BPM</span>
            </div>

            <div className="my-auto text-center space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-lime-300 bg-lime-500/20 px-3 py-1 rounded-full border border-lime-500/40">
                <Zap className="w-3.5 h-3.5 text-lime-400" />
                <span>Custom Body Transformation</span>
              </div>
              <h4 className="text-xs font-black text-white uppercase tracking-tight">
                Strength • Nutrition • HIIT
              </h4>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Online 1-on-1 Coaching</span>
              <span className="text-lime-400 font-bold">500+ Clients</span>
            </div>
          </div>
        );

      case "medical-doctor":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-teal-950/40 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded border border-teal-500/30">
                CLINICAL SPECIALIST
              </span>
              <span className="text-[9px] text-slate-400">Board Certified</span>
            </div>

            <div className="my-auto text-center space-y-1.5">
              <div className="w-10 h-10 mx-auto rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Heart className="w-5 h-5 text-teal-300" />
              </div>
              <h4 className="text-xs font-bold text-white">Dental & Aesthetic Surgery</h4>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Modern Care Facility</span>
              <span className="text-teal-300 font-semibold">Online Booking</span>
            </div>
          </div>
        );

      // ==========================================
      // 5. MINIMAL & BENTO CV
      // ==========================================
      case "bento-grid-os":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 p-3.5 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
                BENTO.ME GRID OS
              </span>
              <span className="text-[9px] text-slate-400">Interactive Tiles</span>
            </div>

            {/* Bento Grid mini mockup */}
            <div className="my-auto grid grid-cols-3 gap-1.5">
              <div className="col-span-2 bg-indigo-950/60 border border-indigo-500/30 p-2 rounded-xl flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/30 flex items-center justify-center text-[10px] font-bold text-indigo-300">
                  <Grid className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white">Alex Chen</div>
                  <div className="text-[8px] text-indigo-300">Creator & Tech</div>
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-2 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-[11px] font-black text-amber-400">12+</div>
                <div className="text-[8px] text-slate-400">Projects</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1.5 border-t border-slate-800">
              <span>Bio Link Ecosystem</span>
              <span className="text-indigo-400 font-semibold">Micro-Widgets</span>
            </div>
          </div>
        );

      case "notion-minimal-cv":
        return (
          <div className="w-full h-full bg-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-slate-200 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                NOTION STYLE CV
              </span>
              <span className="text-[9px] text-slate-400 font-mono">Monochrome</span>
            </div>

            {/* Notion callout box simulation */}
            <div className="my-auto bg-slate-800/90 border border-slate-700/80 p-2.5 rounded-xl text-left space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300 text-[10px] font-semibold">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Product Manager & Architect</span>
              </div>
              <div className="h-1 w-24 bg-slate-600 rounded" />
              <div className="h-1 w-16 bg-slate-700 rounded" />
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-2 border-t border-slate-800">
              <span>PDF Export Ready</span>
              <span className="text-white">Clean & Distraction-Free</span>
            </div>
          </div>
        );

      case "creator-media-kit":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-rose-950/40 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30">
                MEDIA KIT & SPONSORS
              </span>
              <span className="text-[9px] text-slate-400">TikTok & IG</span>
            </div>

            <div className="my-auto text-center space-y-1.5">
              <div className="inline-flex items-center gap-1 text-xs font-black text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/30">
                <Share2 className="w-3.5 h-3.5" />
                <span>1.2M+ Reach • 8.4% ER</span>
              </div>
              <h4 className="text-xs font-bold text-white">Brand Collabs & Rate Card</h4>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Audience Demographics</span>
              <span className="text-rose-400 font-semibold">Booking Open</span>
            </div>
          </div>
        );

      case "academic-scholar-cv":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-serif tracking-wider text-blue-300">
                RESEARCH SCHOLAR
              </span>
              <span className="text-[9px] text-slate-400 font-mono">h-index: 24</span>
            </div>

            <div className="my-auto text-center space-y-1.5">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-300" />
              </div>
              <h4 className="text-xs font-serif font-bold text-white tracking-wide">
                Peer-Reviewed Publications
              </h4>
              <p className="text-[9px] text-slate-400 font-mono">1,450+ Citations</p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>DOI Indexed</span>
              <span className="text-blue-300">Curriculum Vitae</span>
            </div>
          </div>
        );

      case "fresh-graduate-resume":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                ENTRY-LEVEL RESUME
              </span>
              <span className="text-[9px] text-slate-400">Class of 2026</span>
            </div>

            <div className="my-auto text-center space-y-1.5">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-emerald-300" />
              </div>
              <h4 className="text-xs font-bold text-white">CS Honors Graduate</h4>
              <p className="text-[9px] text-emerald-400 font-semibold">GPA 3.85 • Top 5%</p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Junior Developer Ready</span>
              <span className="text-emerald-300 font-semibold">Available Now</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-brand-400">{template.profession.en}</span>
              <span className="text-[9px] text-slate-400">Interactive</span>
            </div>
            <div className="my-auto text-center">
              <h4 className="text-xs font-bold text-white">{template.title.en}</h4>
            </div>
            <div className="text-[9px] text-slate-400 pt-2 border-t border-slate-800">
              <span>FolioCraft Template</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="group/thumb relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-slate-950 border-b border-slate-200/40 dark:border-slate-800/80 shadow-inner flex flex-col">
      {/* 1. Mac-style Browser Header */}
      <div className="h-7 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-3 flex items-center justify-between flex-shrink-0 z-20">
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-sm" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-sm" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-sm" />
        </div>

        {/* Faux URL pill */}
        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400 max-w-[170px] truncate">
          <Lock className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
          <span className="truncate">foliocraft.site/{id}</span>
        </div>

        {/* Online / Demo indicator */}
        <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="hidden sm:inline">LIVE</span>
        </div>
      </div>

      {/* 2. Visual Mockup Canvas */}
      <div className="relative flex-1 w-full overflow-hidden transition-transform duration-500 group-hover/thumb:scale-105">
        {renderVisualMockup()}

        {/* Floating Style Badge */}
        <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/90 backdrop-blur-md text-brand-300 border border-slate-700/80 shadow-lg">
            {styleName}
          </span>
        </div>

        {/* Price Pill */}
        <div className="absolute bottom-2.5 right-2.5 z-20 pointer-events-none">
          <span className="px-2.5 py-1 rounded-xl text-xs font-black bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-xl shadow-brand-500/20 border border-brand-400/30">
            {price}
          </span>
        </div>

        {/* 3. Hover Overlay with Centered Action */}
        <div
          onClick={onPreviewClick}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer z-30 p-4"
        >
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-white text-slate-950 shadow-2xl shadow-white/20 transform scale-90 group-hover/thumb:scale-100 transition-transform duration-300"
          >
            <Eye className="w-4 h-4 text-brand-600" />
            <span>{isKhmer ? "ចុចបើកមើលគំរូពិត" : "Click for Live Preview"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
