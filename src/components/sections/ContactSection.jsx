import React, { useState } from "react";
import { Send, Phone, Mail, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";
import { sendContactNotification } from "../../services/contactService";

export const ContactSection = ({ onToast }) => {
  const { labels, translate } = useLanguage();
  const { socials, profile } = portfolioConfig;

  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contactInfo.trim()) return;

    setLoading(true);
    try {
      const result = await sendContactNotification(formData);
      if (result.success) {
        onToast(labels.contact.successMsg, "success");
        setFormData({ name: "", contactInfo: "", message: "" });
      } else {
        onToast(labels.contact.errorMsg, "error");
      }
    } catch (err) {
      onToast(labels.contact.errorMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-2">
            {labels.nav.contact}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {labels.contact.heading}
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {labels.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Direct Reach Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Telegram Direct (Super popular in Cambodia) */}
            {socials.telegram && (
              <a
                href={socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Instant Messaging
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {labels.contact.telegramQuick}
                  </div>
                </div>
              </a>
            )}

            {/* Calendly Booking (Ideal for Global Clients) */}
            {socials.calendly && (
              <a
                href={socials.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Video Consultation
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {labels.contact.calendlyQuick}
                  </div>
                </div>
              </a>
            )}

            {/* Email Contact */}
            {socials.email && (
              <a
                href={`mailto:${socials.email}`}
                className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Direct Email
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {socials.email}
                  </div>
                </div>
              </a>
            )}

            {/* Direct Phone Call */}
            {socials.phone && (
              <a
                href={`tel:${socials.phone}`}
                className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {labels.contact.callNow}
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {socials.phone}
                  </div>
                </div>
              </a>
            )}
          </div>

          {/* Interactive Lead Form (Right 7 Cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  {labels.contact.formName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / សុខា"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white/70 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  {labels.contact.formEmail} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. @telegram_handle or john@example.com"
                  value={formData.contactInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, contactInfo: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white/70 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  {labels.contact.formMessage}
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me a bit about your timeline, budget, or design goals..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white/70 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-brand-500 hover:bg-brand-600 disabled:bg-slate-400 text-white shadow-lg shadow-brand-500/25 transition-all transform active:scale-98"
              >
                {loading ? (
                  <span>{labels.contact.sending}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{labels.contact.submitBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
