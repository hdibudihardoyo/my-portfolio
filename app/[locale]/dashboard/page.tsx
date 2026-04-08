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
    <div className="max-w-5xl mx-auto space-y-12 py-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl text-lg">{t("subtitle")}</p>
      </div>

      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      {/* Umami Stats Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <Activity className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">
              {t("umami_title")}
            </h2>
            <p className="text-[var(--text-muted)]">{t("umami_subtitle")}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-5 space-y-3 hover:border-[var(--accent)]/50 transition-all group cursor-default">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider group-hover:text-[var(--text-main)] transition-colors">
                  {stat.label}
                </p>
                <span className="text-[var(--text-muted)] opacity-50">{stat.icon}</span>
              </div>
              <p className="text-2xl font-black text-[var(--accent)] tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[2.5rem] p-8 space-y-8 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">{t("trends")}</h3>
              <p className="text-sm text-[var(--text-muted)]">Historical traffic data overview</p>
            </div>
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--accent)]/30"></div>
                <span className="text-[var(--text-secondary)]">{t("sessions")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--accent)]"></div>
                <span className="text-[var(--text-secondary)]">{t("page_views")}</span>
              </div>
            </div>
          </div>

          <div className="h-80 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  stroke="var(--text-muted)" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  dy={10}
                />
                <ReTooltip 
                  cursor={{ fill: 'var(--bg-main)', opacity: 0.1 }}
                  contentStyle={{ 
                    backgroundColor: 'var(--bg-card)', 
                    borderColor: 'var(--border)', 
                    borderRadius: '16px' 
                  }}
                  itemStyle={{ color: 'var(--text-main)', fontSize: '12px', fontWeight: 'bold' }}
                />
                <Bar dataKey="sessions" fill="var(--accent)" opacity={0.2} radius={[6, 6, 0, 0]} barSize={40} />
                <Bar dataKey="views" fill="var(--accent)" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="space-y-8 pt-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#24292e] border border-white/10 flex items-center justify-center">
            <div className="w-5 h-5 flex items-center justify-center grayscale invert opacity-70">
              <StackIcon name="github" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-main)] tracking-tight">{t("github_title")}</h2>
            <p className="text-[var(--text-muted)]">{t("github_subtitle")}</p>
          </div>
        </div>
        
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-3xl p-8 overflow-x-auto transition-all hover:border-[var(--accent)]/30 group">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm font-medium text-[var(--text-secondary)]">{t("github_streak")}</p>
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-bold uppercase">
              <span>{t("less")}</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-zinc-800"></div>
                <div className="w-3 h-3 rounded-sm bg-green-900"></div>
                <div className="w-3 h-3 rounded-sm bg-green-700"></div>
                <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                <div className="w-3 h-3 rounded-sm bg-green-300"></div>
              </div>
              <span>{t("more")}</span>
            </div>
          </div>
          <div className="flex gap-1.5 min-w-max">
            {Array.from({ length: 52 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                {Array.from({ length: 7 }).map((_, j) => {
                  const rand = Math.random();
                  return (
                    <div 
                      key={j} 
                      className={`w-3 h-3 rounded-[2px] transition-all duration-500 group-hover:scale-110 ${
                        rand > 0.8 
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