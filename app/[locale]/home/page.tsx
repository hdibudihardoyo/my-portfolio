"use client";

import { useTranslations } from "next-intl";
import { Code2, MapPin } from "lucide-react";
import SkillsGrid from "@/components/homes/SkillsGrid";

export default function HomePage() {
  const t = useTranslations("Home");
  const s = useTranslations("Status");

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] tracking-tight">
            {t("greeting")} <span className="text-[var(--text-main)]">{t("name")}</span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--text-secondary)] text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"></span>
              <MapPin className="w-4 h-4" />
              <span>{s("location")}</span>
              <span className="text-lg">🇮🇩</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"></span>
              <span>{s("onsite")}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-3xl">
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {t("bio")}
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {t("bio_focus")}
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-[var(--border)] opacity-50"></div>

      {/* Skills Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[var(--text-main)]">
            <Code2 className="w-5 h-5 text-[var(--accent)]" />
            <h2 className="text-2xl font-bold tracking-tight">{t("skills_title")}</h2>
          </div>
          <p className="text-[var(--text-secondary)]">{t("skills_subtitle")}</p>
        </div>

        <SkillsGrid />
      </section>
    </div>
  );
}