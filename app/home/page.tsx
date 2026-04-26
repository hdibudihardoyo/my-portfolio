"use client";

import { useTranslations } from "next-intl";
import { Code2, MapPin } from "lucide-react";
import SkillsGrid from "@/components/homes/SkillsGrid";
import Typewriter from "@/components/shared/Typewriter";

export default function HomePage() {
  const t = useTranslations("Home");
  const s = useTranslations("Status");

  return (
    <div className="max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Hero Section */}
      <section className="relative pt-6 pb-2">
        {/* Backdrop Glow */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[80px] -z-10" />
        <div className="absolute top-20 -right-20 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-[100px] -z-10" />

        <div className="space-y-8 group/hero">
          <div className="space-y-3">
            <h1 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent)]/80 to-[var(--text-main)] transition-all duration-700 min-h-[1.5em]">
              <Typewriter text={t("name")} speed={100} />
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[var(--text-secondary)] text-[9px] font-black uppercase tracking-[0.2em] pt-2">
              <div className="flex items-center gap-2.5 group/item cursor-default">
                <div className="p-1.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] transition-all group-hover/item:bg-[var(--accent)] group-hover/item:text-[var(--accent-text)]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="opacity-60 group-hover/item:opacity-100 transition-opacity">{s("location")}</span>
              </div>
              <div className="flex items-center gap-2.5 group/item cursor-default">
                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-30" />
                </div>
                <span className="opacity-60 group-hover/item:opacity-100 transition-opacity">{s("status_available") || "Available for new projects"}</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl space-y-4 pt-2 border-l-2 border-[var(--accent)]/10 pl-8 text-sm md:text-base">
            <p className="text-[var(--text-main)] leading-relaxed font-bold tracking-tight text-justify">
              {t("bio")}
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed font-medium opacity-80 text-justify">
              {t("bio_focus")}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[var(--border)]/30">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] shadow-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-black tracking-tight text-[var(--text-main)] uppercase">{t("skills_title")}</h2>
            </div>
            <p className="text-[var(--text-muted)] text-[11px] max-w-xl font-medium tracking-wide uppercase opacity-70">{t("skills_subtitle")}</p>
          </div>
        </div>

        <SkillsGrid />
      </section>
    </div>
  );
}