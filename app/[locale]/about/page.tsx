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
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <h1 className="text-3xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      {/* Profile Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[var(--text-main)] flex items-center gap-2">
            <User className="w-5 h-5 text-[var(--accent)]" />
            {t("bio_title")}
          </h2>
          <div className="max-w-2xl prose prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed space-y-4">
            <p>{t("bio_p1")}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 space-y-4">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between group">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <span className="w-3.5 h-3.5">{item.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                </div>
                <span className="text-xs font-semibold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center gap-2.5">
          <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
          <h2 className="text-lg font-bold text-[var(--text-main)] tracking-tight">{t("education_title")}</h2>
        </div>

        <div className="relative pl-6 border-l-2 border-[var(--border)] space-y-8">
          {t.raw("education_items").map((item: any, index: number) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--bg-main)]"></div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest">{item.year}</span>
                <h3 className="text-base font-bold text-[var(--text-main)]">{item.degree}</h3>
                <p className="text-[var(--text-secondary)] text-xs font-medium">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}