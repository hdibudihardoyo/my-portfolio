"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink, Monitor, Smartphone, LayoutGrid } from "lucide-react";
import StackIcon from "tech-stack-icons";

const iconMap: Record<string, string> = {
  "Next.js": "nextjs2",
  "TypeScript": "typescript",
  "TailwindCSS": "tailwindcss",
  "Framer Motion": "framer",
  "Supabase": "supabase",
  "React": "react",
  "PostgreSQL": "postgresql",
  "Prisma": "prisma",
  "Kotlin": "kotlin",
  "Socket.io": "socketio",
  "SQLite": "sqlite",
};

export default function ProjectPage() {
  const t = useTranslations("Project");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const projects = [
    {
      id: 1,
      title: t("p1_title"),
      category: "web",
      description: t("p1_desc"),
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Recharts"],
      demo: "#",
      github: "https://github.com/hdibudihardoyo"
    },
    {
      id: 2,
      title: t("p2_title"),
      category: "web",
      description: t("p2_desc"),
      stack: ["Next.js", "Framer Motion", "Supabase"],
      demo: "#",
      github: "https://github.com/hdibudihardoyo"
    },
    {
      id: 3,
      title: t("p3_title"),
      category: "web",
      description: t("p3_desc"),
      stack: ["React", "PostgreSQL", "Prisma"],
      demo: "#",
      github: "https://github.com/hdibudihardoyo"
    },
    {
      id: 4,
      title: t("p4_title"),
      category: "mobile",
      description: t("p4_desc"),
      stack: ["Kotlin", "Socket.io", "SQLite"],
      demo: "#",
      github: "https://github.com/hdibudihardoyo"
    }
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <h1 className="text-3xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 bg-[var(--bg-secondary)] p-2 rounded-2xl border border-[var(--border)] w-fit mx-auto lg:mx-0">
        {[
          { id: "all", label: t("all"), icon: <LayoutGrid className="w-3.5 h-3.5" /> },
          { id: "web", label: t("web"), icon: <Monitor className="w-3.5 h-3.5" /> },
          { id: "mobile", label: t("mobile"), icon: <Smartphone className="w-3.5 h-3.5" /> }
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <div key={p.id} className="group relative bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[1.5rem] overflow-hidden transition-all duration-500">
            <div className="aspect-[16/9] bg-[var(--bg-main)] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/90 to-transparent z-10 p-5 flex flex-col justify-end">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(s => {
                    const iconName = iconMap[s];
                    return (
                      <span key={s} className="flex items-center gap-1 px-1.5 py-1 bg-[var(--bg-main)]/80 backdrop-blur-md border border-[var(--border)] rounded-md text-[8px] font-black uppercase tracking-widest text-[var(--text-main)] transition-all hover:scale-105">
                        {/* @ts-ignore */}
                        {iconName && <StackIcon name={iconName} className={`w-2.5 h-2.5 flex-shrink-0 ${["nextjs2", "github", "prisma", "framer", "expressjs"].includes(iconName) ? (theme === 'dark' ? 'invert' : '') : ""}`} />}
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="text-[var(--accent)] opacity-10 scale-[2] group-hover:scale-[2.5] transition-transform duration-700">
                {p.category === 'web' ? <Monitor className="w-12 h-12" /> : <Smartphone className="w-12 h-12" />}
              </div>
            </div>

            <div className="p-5 space-y-2.5">
              <div className="flex items-start justify-between gap-2.5">
                <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                  {p.title}
                </h3>
                <div className="flex gap-1.5">
                  <a href={p.github} target="_blank" className="p-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] transition-all group">
                    <div className="w-3.5 h-3.5 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 flex items-center justify-center">
                      <StackIcon name="github" />
                    </div>
                  </a>
                  <a href={p.demo} target="_blank" className="p-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] transition-all">
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                  </a>
                </div>
              </div>
              <p className="text-[var(--text-muted)] text-[11px] leading-relaxed line-clamp-3">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}