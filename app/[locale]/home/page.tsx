"use client";

import { useTranslations } from "next-intl";
import { Code2, MapPin } from "lucide-react";
import SkillsGrid from "@/components/homes/SkillsGrid";

export default function HomePage() {
  const t = useTranslations("Home");
  const s = useTranslations("Status");

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Hero Section */}
      <section className="space-y-2">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] tracking-tight">
            {t("greeting")} <span className="text-[var(--text-main)]">{t("name")}</span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--text-secondary)] text-sm font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{s("location")}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {t("bio")}
          </p>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {t("bio_focus")}
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-[var(--border)] opacity-50"></div>

      {/* Skills Section */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[var(--text-main)]">
            <Code2 className="w-4 h-4 text-[var(--accent)]" />
            <h2 className="text-xl font-bold tracking-tight">{t("skills_title")}</h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm max-w-2xl">{t("skills_subtitle")}</p>
        </div>

        <SkillsGrid />
      </section>
    </div>
  );
}