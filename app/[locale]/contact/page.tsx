"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, Send, Phone } from "lucide-react";

const getContactMethods = (t: any) => [
  {
    icon: <Mail className="w-4 h-4 text-[var(--accent)]" />,
    label: t("method_email"),
    value: "hdibudihardoyo@email.com",
    link: "mailto:hadibudihardoyo@email.com"
  },
  {
    icon: <Phone className="w-4 h-4 text-[var(--accent)]" />,
    label: t("method_whatsapp"),
    value: "+62 882 0017 71113",
    link: "https://wa.me/62882001771113"
  },
  {
    icon: <MapPin className="w-4 h-4 text-[var(--accent)]" />,
    label: t("method_location"),
    value: t("info_location_value", { ns: "About" }),
    link: null
  }
];

export default function ContactPage() {
  const t = useTranslations("Contact");
  const methods = getContactMethods(t);

  const socials = [
    { label: "Github", icon: <GithubIcon className="w-3.5 h-3.5" />, color: "hover:bg-zinc-800" },
    { label: "LinkedIn", icon: <LinkedinIcon className="w-3.5 h-3.5" />, color: "hover:bg-blue-600" },
    { label: "Twitter", icon: <TwitterIcon className="w-3.5 h-3.5" />, color: "hover:bg-sky-500" },
    { label: "Instagram", icon: <InstagramIcon className="w-3.5 h-3.5" />, color: "hover:bg-pink-600" }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-12">
      {/* Header */}
      <section className="space-y-3 relative">
        {/* Backdrop Glow */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[80px] -z-10" />

        <div className="space-y-1.5">
          <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight uppercase tracking-widest">{t("title")}</h1>
          <div className="w-16 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]/30"></div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        {/* Contact Form */}
        <div className="lg:col-span-7 space-y-5">
          <form className="space-y-4 bg-[var(--bg-secondary)]/40 backdrop-blur-md border border-[var(--border)] p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="space-y-1.5">
                <label className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1">
                  {t("name_label")}
                </label>
                <input
                  type="text"
                  placeholder={t("name_placeholder")}
                  className="w-full px-4 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)]/50 transition-all duration-300 placeholder:text-[var(--text-muted)]/40"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1">
                  {t("email_label")}
                </label>
                <input
                  type="email"
                  placeholder={t("email_placeholder")}
                  className="w-full px-4 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)]/50 transition-all duration-300 placeholder:text-[var(--text-muted)]/40"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1">
                {t("message_label")}
              </label>
              <textarea
                rows={3}
                placeholder={t("message_placeholder")}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)]/50 transition-all duration-300 placeholder:text-[var(--text-muted)]/40 resize-none"
              ></textarea>
            </div>

            <button className="group w-full flex items-center justify-center gap-3 h-10 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/90 text-[var(--accent-text)] rounded-xl font-black uppercase tracking-widest text-[9px] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-[var(--accent)]/15">
              {t("send_button")}
              <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3.5">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1 opacity-60">{t("direct_contact")}</h2>
            <div className="space-y-2">
              {methods.map((method, i) => (
                <div key={i} className="flex items-center gap-3.5 p-3 rounded-2xl bg-[var(--bg-secondary)]/30 border border-[var(--border)] transition-all group hover:bg-[var(--bg-secondary)]/50 hover:border-[var(--accent)]/20 shadow-sm">
                  <div className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] group-hover:border-[var(--accent)]/30 transition-colors">
                    <span className="w-4 h-4 block">{method.icon}</span>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[7px] font-black uppercase tracking-widest text-[var(--text-muted)]">{method.label}</p>
                    {method.link ? (
                      <a href={method.link} className="text-[11px] font-bold text-[var(--text-main)] hover:text-[var(--accent)] transition-all truncate block overflow-hidden max-w-[180px]">
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-[11px] font-bold text-[var(--text-main)]">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1 opacity-60">{t("social_networks")}</h2>
            <div className="grid grid-cols-2 gap-2.5">
              {socials.map((social, i) => (
                <button key={i} className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-secondary)]/30 border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-all hover:border-[var(--accent)]/20 shadow-sm group ${social.color}`}>
                  {social.icon}
                  <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:block">{social.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GithubIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}