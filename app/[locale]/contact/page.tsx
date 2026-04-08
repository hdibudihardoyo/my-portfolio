"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, Send, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("Contact");

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5 text-red-500" />,
      label: "Email",
      value: "hadibudihardoyo@email.com",
      link: "mailto:hadibudihardoyo@email.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-green-500" />,
      label: "WhatsApp",
      value: "+62 812 3456 7890",
      link: "https://wa.me/6281234567890"
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-500" />,
      label: "Location",
      value: "Cirebon, Indonesia",
      link: null
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 py-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl text-lg">{t("subtitle")}</p>
      </div>

      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 space-y-8">
          <form className="space-y-6 bg-[var(--bg-secondary)] border border-[var(--border)] p-8 md:p-10 rounded-[2.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300 placeholder:text-[var(--text-muted)]/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300 placeholder:text-[var(--text-muted)]/50"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300 placeholder:text-[var(--text-muted)]/50 resize-none"
              ></textarea>
            </div>

            <button className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent)] text-[var(--accent-text)] rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all">
              {t("send_button")}
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[var(--text-main)] ml-1">Direct Contact</h2>
            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all group">
                  <div className="p-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] group-hover:border-[var(--accent)]/50 transition-colors">
                    {method.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">{method.label}</p>
                    {method.link ? (
                      <a href={method.link} className="text-sm font-bold text-[var(--text-main)] hover:text-[var(--accent)] transition-all">
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-[var(--text-main)]">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[var(--text-main)] ml-1">Social Networks</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Globe />, color: "hover:bg-zinc-800" },
                { icon: <Globe />, color: "hover:bg-blue-600" },
                { icon: <Globe />, color: "hover:bg-sky-500" },
                { icon: <Globe />, color: "hover:bg-pink-600" }
              ].map((social, i) => (
                <button key={i} className={`w-14 h-14 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white transition-all hover:scale-110 hover:-rotate-6 hover:border-transparent ${social.color}`}>
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}