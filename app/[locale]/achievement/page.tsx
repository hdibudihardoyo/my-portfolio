"use client";

import { useTranslations } from "next-intl";
import { Award, Trophy, Bookmark, ExternalLink, Medal, LayoutGrid, Cloud, Monitor, Smartphone, Database, Globe, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

const iconMap: Record<string, any> = {
  "Data Science": <Database className="w-12 h-12" />,
  "Web": <Monitor className="w-12 h-12" />,
  "Network": <Globe className="w-12 h-12" />,
  "Internship": <Briefcase className="w-12 h-12" />,
};

const typeIconMap: Record<string, any> = {
  "Data Science": <Database className="w-3.5 h-3.5" />,
  "Web": <Monitor className="w-3.5 h-3.5" />,
  "Network": <Globe className="w-3.5 h-3.5" />,
  "Internship": <Briefcase className="w-3.5 h-3.5" />,
};

const categoryMap: Record<string, string> = {
  "Data Science": "filter_ds",
  "Web": "filter_web",
  "Network": "filter_net",
  "Internship": "filter_intern",
};

export default function AchievementPage() {
  const t = useTranslations("Achievement");
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const achievements = t.raw("items");

  const filteredAchievements = achievements.filter(
    (a: any) => filter === "all" || a.category === filter
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <h1 className="text-3xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 bg-[var(--bg-secondary)] p-2 rounded-2xl border border-[var(--border)] w-fit mx-auto lg:mx-0">
        {[
          { id: "all", label: t("filter_all"), icon: <LayoutGrid className="w-3.5 h-3.5" /> },
          { id: "Data Science", label: t("filter_ds"), icon: <Database className="w-3.5 h-3.5" /> },
          { id: "Web", label: t("filter_web"), icon: <Monitor className="w-3.5 h-3.5" /> },
          { id: "Network", label: t("filter_net"), icon: <Globe className="w-3.5 h-3.5" /> },
          { id: "Internship", label: t("filter_intern"), icon: <Briefcase className="w-3.5 h-3.5" /> }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${filter === item.id
              ? "bg-[var(--accent)] text-[var(--accent-text)] scale-105"
              : "text-[var(--text-secondary)] hover:text-[var(--text-main)]"
              }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((a: any, index: number) => (
          <div key={index} className="group relative bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[1.5rem] overflow-hidden transition-all duration-500">
            {/* Card Header/Icon Area */}
            <div className="aspect-[16/9] bg-[var(--bg-main)] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/90 to-transparent z-10 p-5 flex flex-col justify-end">
                <div className="flex flex-wrap gap-1.5">
                  <span className="flex items-center gap-1 px-1.5 py-1 bg-[var(--bg-main)]/80 backdrop-blur-md border border-[var(--border)] rounded-md text-[8px] font-black uppercase tracking-widest text-[var(--text-main)]">
                    {typeIconMap[a.category] || <Medal className="w-2.5 h-2.5" />}
                    {t(categoryMap[a.category]) || a.category}
                  </span>
                </div>
              </div>
              <div className="text-[var(--accent)] opacity-10 scale-[2] group-hover:scale-[2.5] transition-transform duration-700">
                {iconMap[a.category] || <Award className="w-12 h-12" />}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-2.5">
              <div className="flex items-start justify-between gap-2.5">
                <div className="space-y-0.5 flex-1">
                  <h3 className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors line-clamp-2 leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest">
                    {a.issuer}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <a href={a.link} target="_blank" className="p-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] transition-all hover:border-[var(--accent)] group/btn">
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover/btn:text-[var(--accent)]" />
                  </a>
                  <span className="text-[9px] font-black text-[var(--accent)] bg-[var(--accent)]/10 px-1.5 py-0.5 rounded-md">
                    {a.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}