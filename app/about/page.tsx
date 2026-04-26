"use client";

import { useTranslations } from "next-intl";
import { User, Mail, MapPin, Briefcase, GraduationCap, Activity } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("About");
  const s = useTranslations("Status");

  const infoItems = [
    { label: t("info_name"), value: s("name"), icon: <User className="w-4 h-4" /> },
    { label: t("info_role"), value: s("role"), icon: <Briefcase className="w-4 h-4" /> },
    { label: t("info_location"), value: t("info_location_value"), icon: <MapPin className="w-4 h-4" /> },
    { label: t("info_email"), value: s("email"), icon: <Mail className="w-4 h-4" /> },
    { label: t("info_status"), value: t("info_status_value"), icon: <Activity className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-12">
      {/* Header */}
      <section className="space-y-3">
        <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight uppercase tracking-[0.05em]">{t("title")}</h1>
        <div className="w-16 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]/30"></div>
      </section>

      {/* Profile & Info Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
              <User className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-black text-[var(--text-main)] uppercase tracking-wider">
              {t("bio_title")}
            </h2>
          </div>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed text-sm font-medium">
            <p className="moving-border bg-[var(--bg-secondary)]/30 p-5 rounded-2xl border border-[var(--border)]/30 backdrop-blur-sm text-justify">
              {t("bio_p1")}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {infoItems.map((item) => (
              <div key={item.label} className="moving-border group bg-[var(--bg-secondary)]/50 border border-[var(--border)] rounded-xl p-3.5 flex items-center justify-between transition-all duration-500 hover:border-[var(--accent)]/40 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/20 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">{item.label}</span>
                    <span className="text-[11px] font-bold text-[var(--text-main)] truncate max-w-[140px]">{item.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-2.5 pb-2 border-b border-[var(--border)]/30">
          <div className="p-1.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">{t("education_title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.raw("education_items").map((item: any, index: number) => (
            <div key={index} className="moving-border group relative bg-[var(--bg-secondary)]/50 border border-[var(--border)] rounded-2xl p-6 transition-all duration-500 hover:border-[var(--accent)]/30 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[9px] font-black uppercase tracking-widest border border-[var(--accent)]/20">
                  {item.year}
                </span>
                <div className="p-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  <GraduationCap className="w-3.5 h-3.5 text-[var(--accent)]" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors duration-500">
                  {item.degree}
                </h3>
                <div className="text-[var(--text-main)] text-[11px] font-bold uppercase tracking-wider flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                  {item.school}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}