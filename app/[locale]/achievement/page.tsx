"use client";

import { useTranslations } from "next-intl";
import { Award, Trophy, Bookmark, ExternalLink } from "lucide-react";

export default function AchievementPage() {
  const t = useTranslations("Achievement");

  const achievements = [
    {
      title: "Google Cloud Certified: Associate Cloud Engineer",
      issuer: "Google Cloud",
      year: "2024",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera / Meta",
      year: "2023",
      icon: <Award className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Mobile Development Bootcamp Graduate",
      issuer: "Bangkit Academy",
      year: "2023",
      icon: <Bookmark className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl text-lg">{t("subtitle")}</p>
      </div>

      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      <div className="grid grid-cols-1 gap-6">
        {achievements.map((item, i) => (
          <div key={i} className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-3xl p-8 transition-all hover:border-[var(--accent)]/50">
            <div className="p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors">
              {item.icon}
            </div>
            
            <div className="flex-1 space-y-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">{item.title}</h3>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"></span>
                <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">{item.year}</span>
              </div>
              <p className="text-[var(--text-secondary)] font-medium leading-relaxed">{item.issuer}</p>
            </div>

            <button className="p-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] hover:border-[var(--accent)] transition-all">
              <ExternalLink className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent)]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}