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
  "React": "reactjs",
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
      featured: true,
      demo: "#",
      github: "https://github.com/hdibudihardoyo"
    },
    {
      id: 2,
      title: t("p2_title"),
      category: "web",
      description: t("p2_desc"),
      stack: ["Next.js", "Framer Motion", "Supabase"],
      featured: true,
      demo: "#",
      github: "https://github.com/hdibudihardoyo"
    },
    {
      id: 3,
      title: t("p3_title"),
      category: "web",
      description: t("p3_desc"),
      stack: ["React", "PostgreSQL", "Prisma"],
      featured: false,
      demo: "#",
      github: "https://github.com/hdibudihardoyo"
    },
    {
      id: 4,
      title: t("p4_title"),
      category: "mobile",
      description: t("p4_desc"),
      stack: ["Kotlin", "Socket.io", "SQLite"],
      featured: false,
      demo: "#",
      github: "https://github.com/hdibudihardoyo"
    }
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--text-main)] tracking-tight">{t("title")}</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl text-lg">{t("subtitle")}</p>
      </div>

      <div className="w-full h-px bg-[var(--border)] opacity-30"></div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-x-2 bg-[var(--bg-secondary)] p-1.5 rounded-2xl border border-[var(--border)] w-fit">
        {[
          { id: "all", label: t("all"), icon: <LayoutGrid className="w-4 h-4" /> },
          { id: "web", label: t("web"), icon: <Monitor className="w-4 h-4" /> },
          { id: "mobile", label: t("mobile"), icon: <Smartphone className="w-4 h-4" /> }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              filter === item.id
                ? "bg-[var(--accent)] text-[var(--accent-text)] scale-105"
                : "text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-main)]/50"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((p) => (
          <div key={p.id} className="group relative bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[2.5rem] overflow-hidden transition-all hover:border-[var(--accent)]/50 duration-500">
            <div className="aspect-[16/9] bg-[var(--bg-main)] relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/90 to-transparent z-10 p-8 flex flex-col justify-end">
                 <div className="flex flex-wrap gap-2">
                   {p.stack.map(s => {
                     const iconName = iconMap[s];
                     return (
                       <span key={s} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--bg-main)]/80 backdrop-blur-md border border-[var(--border)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-all hover:scale-105">
                         {/* @ts-ignore */}
                         {iconName && <StackIcon name={iconName} className={`w-3.5 h-3.5 flex-shrink-0 ${["nextjs2", "github", "prisma", "framer", "expressjs"].includes(iconName) ? (theme === 'dark' ? 'invert' : '') : ""}`} />}
                         {s}
                       </span>
                     );
                   })}
                 </div>
               </div>
               <div className="text-[var(--accent)] opacity-10 scale-[3] group-hover:scale-[4] transition-transform duration-700">
                  {p.category === 'web' ? <Monitor className="w-20 h-20" /> : <Smartphone className="w-20 h-20" />}
               </div>
               {p.featured && (
                 <div className="absolute top-6 right-6 px-3 py-1 bg-[var(--accent)] text-[var(--accent-text)] text-[10px] font-black rounded-full uppercase tracking-widest z-20">
                   {t("featured")}
                 </div>
               )}
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" className="p-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group">
                    <div className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 flex items-center justify-center">
                      <StackIcon name="github" />
                    </div>
                  </a>
                  <a href={p.demo} target="_blank" className="p-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] hover:border-[var(--accent)] transition-all">
                    <ExternalLink className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--accent)]" />
                  </a>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}