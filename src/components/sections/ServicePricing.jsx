import React from "react";
import { Check, Send, Sparkles, Clock, Globe, Shield } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const ServicePricing = () => {
  const { isKhmer } = useLanguage();

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* How It Works - 3 Easy Steps */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400">
            {isKhmer ? "ដំណើរការងាយៗ ៣ ជំហាន" : "How It Works in 3 Steps"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            {isKhmer ? "របៀបដែលពួកយើងធ្វើការជូនអ្នក" : "Simple, Fast, and Stress-Free"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="glass-card rounded-2xl p-7 text-center border hover:border-brand-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
              {isKhmer ? "ជ្រើសរើសម៉ូត (Choose Template)" : "1. Choose Your Template"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {isKhmer
                ? "មើលកាតាឡុកខាងលើ ហើយជ្រើសរើសម៉ូត Portfolio ដែលស័ក្តិសមនឹងអាជីពរបស់អ្នកបំផុត។"
                : "Browse our live templates and pick the one that represents your personal brand best."}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-7 text-center border hover:border-brand-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
              {isKhmer ? "ផ្ញើព័ត៌មាន (Send Your Content)" : "2. Send Us Your Content"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {isKhmer
                ? "ផ្ញើ CV រូបភាពស្នាដៃ និងបណ្ដាញសង្គមរបស់អ្នកមកពួកយើងតាម Telegram (ចំណាយពេលត្រឹម ៥ នាទី)។"
                : "Send your CV, photos, project links, and socials via Telegram or Google Drive."}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-7 text-center border hover:border-brand-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
              {isKhmer ? "ទទួល Website ក្នុង 24h" : "3. Go Live in 24 Hours"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {isKhmer
                ? "ក្រុមការងារយើងនឹងកូដ រៀបចំ និង Deploy ជា Website ផ្ទាល់ខ្លួនរបស់អ្នក រួចផ្ញើ Link ជូនភ្លាម!"
                : "We code, customize, and deploy your live portfolio online ready to share with employers and clients!"}
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400">
            {isKhmer ? "តម្លៃសេវាកម្មច្បាស់លាស់" : "Transparent Pricing"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            {isKhmer ? "កញ្ចប់តម្លៃសម្រាប់គ្រប់តម្រូវការ" : "Choose Your Package"}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Standard Package $29 Centerpiece */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 border-2 border-brand-500/80 shadow-2xl shadow-brand-500/15 relative flex flex-col justify-between bg-gradient-to-b from-brand-500/[0.05] via-transparent to-brand-500/[0.02]">
            <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-brand-500 to-emerald-500 text-white text-xs font-black shadow-lg">
              ✨ {isKhmer ? "កញ្ចប់ពេញនិយមបំផុត" : "ALL-IN-ONE PACKAGE"}
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
                {isKhmer ? "កញ្ចប់សេវាកម្មពេញលេញ" : "Complete Service Package"}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {isKhmer ? "Portfolio Website ផ្ទាល់ខ្លួនអាជីព" : "Professional Portfolio Website"}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-brand-500">$29</span>
                <span className="text-xs sm:text-sm text-slate-500 font-semibold">{isKhmer ? "/ទូទាត់តែម្តងគត់ (Free Hosting រហូត)" : "one-time (Free Hosting Forever)"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {isKhmer
                  ? "ស័ក្តិសមសម្រាប់អ្នកជំនាញគ្រប់វិស័យ Freelancers និស្សិត និងម្ចាស់អាជីវកម្ម ដែលចង់បានគេហទំព័រផ្ទាល់ខ្លួនបែប High-End។"
                  : "Ideal for creatives, developers, photographers, students, and professionals seeking a standout online presence."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                {[
                  isKhmer ? "ជ្រើសរើសម៉ូត Portfolio ណាមួយក៏បាន" : "Choose Any of 25 Real Templates",
                  isKhmer ? "Free Lifetime Hosting (គ្មានថ្លៃប្រចាំខែ)" : "Free Lifetime Hosting (No monthly fee)",
                  isKhmer ? "Custom Subdomain ឬ GitHub Pages" : "Custom Subdomain & GitHub Pages",
                  isKhmer ? "Responsive ស្អាតលើគ្រប់ទូរស័ព្ទដៃ" : "100% Mobile & Tablet Responsive",
                  isKhmer ? "គាំទ្រ ២ ភាសា (ខ្មែរ + English)" : "Dual Language (Khmer & English)",
                  isKhmer ? "Dark & Light Mode ទំនើប" : "Dark & Light Mode Theme Support",
                  isKhmer ? "ប៊ូតុង Telegram សម្រាប់ភ្ញៀវកុម្ម៉ង់ផ្ទាល់" : "Direct Telegram Contact & Order Button",
                  isKhmer ? "រួចរាល់លឿនក្នុងរយៈពេល ២៤ ម៉ោង" : "Fast Turnaround in 24 Hours",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://t.me/ChhiengPhouChhit?text=${encodeURIComponent("សួស្តី! ខ្ញុំចង់កុម្ម៉ង់ធ្វើ Portfolio Website កញ្ចប់ $29")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-black text-sm bg-gradient-to-r from-brand-500 via-emerald-500 to-brand-500 hover:from-brand-600 hover:to-emerald-600 text-white shadow-xl shadow-brand-500/25 transition-all transform active:scale-95 shimmer-btn"
            >
              <Send className="w-4 h-4" />
              <span>{isKhmer ? "កុម្ម៉ង់កញ្ចប់ $29 ឥឡូវនេះ (Telegram)" : "Order Now via Telegram ($29)"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
