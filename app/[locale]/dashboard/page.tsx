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

  if (!mounted) return <div className="p-10 animate-pulse text-[var(--text-muted)] text-xs font-black uppercase tracking-widest">{t("loading")}</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-12">
      {/* Header */}
      <section className="space-y-3 relative">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[80px] -z-10" />
        <div className="space-y-1.5">
          <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight uppercase tracking-widest">{t("title")}</h1>
          <div className="w-16 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]/30"></div>
          <p className="text-[var(--text-secondary)] max-w-2xl text-xs font-medium opacity-80 pt-2 leading-relaxed uppercase tracking-wider">{t("subtitle")}</p>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[var(--bg-secondary)]/40 backdrop-blur-md border border-[var(--border)] p-4 rounded-2xl flex flex-col gap-2 transition-all hover:bg-[var(--bg-secondary)]/60 hover:border-[var(--accent)]/20 group hover:-translate-y-1 duration-500 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] text-[var(--accent)] group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <Activity className="w-3 h-3 text-[var(--accent)] opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[7px] font-black uppercase tracking-widest text-[var(--text-muted)]">{stat.label}</p>
              <p className="text-lg font-black text-[var(--text-main)] tracking-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-8 bg-[var(--bg-secondary)]/40 backdrop-blur-md border border-[var(--border)] p-6 rounded-3xl space-y-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t("realtime_activity")}</h2>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] text-[8px] font-bold text-[var(--text-muted)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>{t("views_legend")}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] text-[8px] font-bold text-[var(--text-muted)]">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                <span>{t("sessions_legend")}</span>
              </div>
            </div>
          </div>

          <div className="h-[200px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 9, fontWeight: 800, fill: "var(--text-muted)" }}
                  dy={10}
                />
                <ReTooltip 
                  contentStyle={{ 
                    backgroundColor: "var(--bg-main)", 
                    borderColor: "var(--border)", 
                    borderRadius: "12px",
                    fontSize: "10px",
                    fontWeight: "700"
                  }} 
                />
                <Bar 
                  dataKey="views" 
                  fill="var(--accent)" 
                  radius={[4, 4, 4, 4]} 
                  barSize={12}
                />
                <Bar 
                  dataKey="sessions" 
                  fill="var(--text-muted)" 
                  fillOpacity={0.2}
                  radius={[4, 4, 4, 4]} 
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#24292e] border border-white/5 p-6 rounded-3xl space-y-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-1000">
              <StackIcon name="github" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">{t("github_title")}</h2>
              <p className="text-zinc-500 text-[8px] font-bold uppercase tracking-wider">{t("github_subtitle")}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-1 space-y-1">
                <p className="text-[18px] font-black text-white tracking-tighter">721</p>
                <p className="text-[7px] font-black uppercase tracking-widest text-zinc-500">{t("commits_year")}</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex-1 space-y-1 text-right">
                <p className="text-[18px] font-black text-green-500 tracking-tighter">+12.5%</p>
                <p className="text-[7px] font-black uppercase tracking-widest text-zinc-500">{t("growth_rate")}</p>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex gap-0.5 justify-between">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    {Array.from({ length: 4 }).map((_, j) => {
                      const rand = Math.random();
                      return (
                        <div
                          key={j}
                          className={`w-2.5 h-2.5 rounded-[1px] transition-all duration-500 hover:scale-150 ${rand > 0.7
                            ? (rand > 0.9 ? 'bg-green-400' : rand > 0.85 ? 'bg-green-500' : 'bg-green-700')
                            : 'bg-zinc-800'
                            }`}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}