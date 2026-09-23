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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Package */}
          <div className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {isKhmer ? "កញ្ចប់សន្សំសំចៃ" : "Standard Package"}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isKhmer ? "Portfolio ផ្ទាល់ខ្លួន Standard" : "Personal Portfolio"}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">$29</span>
                <span className="text-xs text-slate-500 font-medium">{isKhmer ? "/ទូទាត់តែម្តង" : "one-time"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                {isKhmer ? "ស័ក្តិសមសម្រាប់សិស្ស និស្សិត និងអ្នកចង់បានគេហទំព័រផ្ទាល់ខ្លួនដំបូង" : "Ideal for students, fresh graduates, and creators starting out."}
              </p>

              <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                {[
                  "ជ្រើសរើសម៉ូត Portfolio ណាមួយក៏បាន",
                  "Free Hosting ជារៀងរហូត (មិនបង់ប្រចាំខែ)",
                  "Link ផ្ទាល់ខ្លួន (name.vercel.app)",
                  "គាំទ្រ ២ ភាសា (ខ្មែរ + អង់គ្លេស)",
                  "Dark / Light Mode ទំនើប",
                  "រួចរាល់ក្នុងរយៈពេល ២៤ ម៉ោង",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://t.me/yourusername?text=${encodeURIComponent("សួស្តី! ខ្ញុំចង់កុម្ម៉ង់កញ្ចប់ Portfolio Standard $29")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm glass-card text-slate-900 dark:text-white hover:border-brand-500 hover:text-brand-500 transition-all transform active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{isKhmer ? "កុម្ម៉ង់កញ្ចប់ $29 ឥឡូវនេះ" : "Order Standard ($29)"}</span>
            </a>
          </div>

          {/* Pro Package */}
          <div className="glass-card rounded-3xl p-8 border-2 border-brand-500 shadow-2xl shadow-brand-500/10 relative flex flex-col justify-between bg-gradient-to-b from-brand-500/[0.04] to-transparent">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-brand-500 text-white text-xs font-extrabold shadow-md">
              👑 {isKhmer ? "ពេញនិយមបំផុត" : "MOST POPULAR"}
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">
                {isKhmer ? "កញ្ចប់អាជីពពេញលេញ" : "Pro VIP Package"}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isKhmer ? "Portfolio Pro + Domain + Telegram" : "Pro Portfolio + Domain"}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-brand-500">$59</span>
                <span className="text-xs text-slate-500 font-medium">{isKhmer ? "/ទូទាត់តែម្តង" : "one-time"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                {isKhmer ? "ស័ក្តិសមសម្រាប់អ្នកជំនាញ Freelancers និងម្ចាស់អាជីវកម្ម" : "Best for senior professionals, agency owners, and top freelancers."}
              </p>

              <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                {[
                  "គ្រប់មុខងារទាំងអស់ក្នុងកញ្ចប់ Standard",
                  "ថែម Custom Domain ផ្ទាល់ខ្លួន (.com / .me រយៈពេល ១ ឆ្នាំ)",
                  "Contact Form បាញ់សារ Alert ចូល Telegram ភ្លាមៗ",
                  "កក់ម៉ោងជជែកផ្ទាល់តាម Calendly",
                  "រៀបចំ SEO ស្វែងរកឈ្មោះឃើញលើ Google",
                  "កែប្រែព័ត៌មានដោយសេរីចំនួន ៣ ដង",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://t.me/yourusername?text=${encodeURIComponent("សួស្តី! ខ្ញុំចង់កុម្ម៉ង់កញ្ចប់ Portfolio Pro $59 ជាមួយ Custom Domain និង Telegram Alert")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm bg-brand-500 hover:bg-brand-600 text-white shadow-xl shadow-brand-500/25 transition-all transform active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{isKhmer ? "កុម្ម៉ង់កញ្ចប់ Pro ($59) ឥឡូវនេះ" : "Order Pro VIP ($59)"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
