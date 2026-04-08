"use client";

import { useTranslations } from "next-intl";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip as ReTooltip } from "recharts";
import { Eye, Users, MousePointer2, Globe2, Activity } from "lucide-react";
import StackIcon from "tech-stack-icons";
import { useEffect, useState } from "react";

const chartData = [
  { name: "Oct", sessions: 2000, views: 12000 },
  { name: "Nov", sessions: 1500, views: 6500 },
  { name: "Dec", sessions: 1800, views: 8800 },
  { name: "Jan", sessions: 2200, views: 10500 },
  { name: "Feb", sessions: 2800, views: 14000 },
  { name: "Mar", sessions: 2400, views: 11000 },
];

export default function DashboardPage() {
  const t = useTranslations("Dashboard");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: t("views"), value: "23,342", icon: <Eye className="w-4 h-4" /> },
    { label: t("visitors"), value: "3,722", icon: <Users className="w-4 h-4" /> },
    { label: t("visits"), value: "5,465", icon: <MousePointer2 className="w-4 h-4" /> },
    { label: t("countries"), value: "75", icon: <Globe2 className="w-4 h-4" /> },
    { label: t("events"), value: "2,105", icon: <Activity className="w-4 h-4" /> },
  ];

  if (!mounted) return <div className="p-10 animate-pulse">Loading dashboard...</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl text-base leading-relaxed">{t("subtitle")}</p>
      </div>

      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      {/* GitHub Section */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#24292e] border border-white/10 flex items-center justify-center">
            <div className="w-4 h-4 flex items-center justify-center grayscale invert opacity-70 text-[var(--accent)]">
              <StackIcon name="github" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--text-main)] tracking-tight">{t("github_title")}</h2>
            <p className="text-[var(--text-muted)] text-[10px]">{t("github_subtitle")}</p>
          </div>

        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-3xl p-6 overflow-x-auto transition-all group">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs font-medium text-[var(--text-secondary)]">{t("github_streak")}</p>
            <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-muted)] font-bold uppercase">
              <span>{t("less")}</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-800"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-green-900"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-green-700"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-green-500"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-green-300"></div>
              </div>
              <span>{t("more")}</span>
            </div>
          </div>
          <div className="flex gap-1 min-w-max">
            {Array.from({ length: 52 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, j) => {
                  const rand = Math.random();
                  return (
                    <div
                      key={j}
                      className={`w-2.5 h-2.5 rounded-[2px] transition-all duration-500 group-hover:scale-110 ${rand > 0.8
                        ? (rand > 0.95 ? 'bg-green-300' : rand > 0.9 ? 'bg-green-500' : 'bg-green-700')
                        : 'bg-zinc-800'
                        }`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}