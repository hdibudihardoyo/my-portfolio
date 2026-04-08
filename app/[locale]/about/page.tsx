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
    <div className="max-w-4xl mx-auto space-y-12 py-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl text-lg">{t("subtitle")}</p>
      </div>

      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      {/* Profile Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-2">
            <User className="w-6 h-6 text-[var(--accent)]" />
            {t("bio_title")}
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed space-y-4">
            <p>{t("bio_p1")}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-3xl p-8 space-y-6">
             {infoItems.map((item) => (
               <div key={item.label} className="flex items-center justify-between group">
                 <div className="flex items-center gap-3 text-[var(--text-muted)]">
                   {item.icon}
                   <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                 </div>
                 <span className="text-sm font-semibold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">{item.value}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8 pt-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-7 h-7 text-[var(--accent)]" />
          <h2 className="text-2xl font-bold text-[var(--text-main)] tracking-tight">{t("education_title")}</h2>
        </div>

        <div className="relative pl-8 border-l-2 border-[var(--border)] space-y-10">
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-main)]"></div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest">{t("education_year")}</span>
              <h3 className="text-xl font-bold text-[var(--text-main)]">{t("education_degree")}</h3>
              <p className="text-[var(--text-secondary)] font-medium">{t("education_school")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}