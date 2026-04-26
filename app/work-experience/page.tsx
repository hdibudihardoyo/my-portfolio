"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ExternalLink,
  Monitor,
  Smartphone,
  LayoutGrid,
  Briefcase,
  Calendar,
  Building2,
  Award,
  Trophy,
  Database,
  Globe,
  Medal,
  BarChart
} from "lucide-react";
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
  "SQLite": "sqlite",
};

const categoryIconMap: Record<string, any> = {
  "cat_ds": <Database className="w-12 h-12" />,
  "cat_web": <Monitor className="w-12 h-12" />,
  "cat_net": <Globe className="w-12 h-12" />,
  "cat_intern": <Briefcase className="w-12 h-12" />,
};

const typeIconMap: Record<string, any> = {
  "cat_ds": <Database className="w-3.5 h-3.5" />,
  "cat_web": <Monitor className="w-3.5 h-3.5" />,
  "cat_net": <Globe className="w-3.5 h-3.5" />,
  "cat_intern": <Briefcase className="w-3.5 h-3.5" />,
};

export default function WorkExperiencePage() {
  const t = useTranslations("Work");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [projectFilter, setProjectFilter] = useState("all");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const experience = t.raw("experience");
  const projects = t.raw("projects");
  const certifications = t.raw("certifications");

  const filteredProjects = projects.filter(
    (p: any) => projectFilter === "all" || p.category === projectFilter
  );

  return (
    <div className="w-full space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-16">
      {/* Header */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight uppercase tracking-widest">{t("title")}</h1>
          <div className="w-16 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_rgba(var(--accent-rgb),0.3)]"></div>
        </div>
        <p className="text-[var(--text-muted)] text-sm max-w-2xl font-medium leading-relaxed opacity-80">
          {t("subtitle")}
        </p>
      </section>

      {/* 1. Work History Timeline */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/10">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">{t("section_experience")}</h2>
        </div>

        <div className="relative border-l-2 border-[var(--border)]/50 ml-6 pl-8 space-y-12">
          {experience.map((exp: any, index: number) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[45px] top-1.5 w-6 h-6 rounded-full bg-[var(--bg-main)] border-4 border-[var(--border)] group-hover:border-[var(--accent)] transition-all duration-500 z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_8px_var(--accent)]" />
              </div>

              <div className="bg-[var(--bg-secondary)]/40 backdrop-blur-sm border border-[var(--border)] rounded-[1.5rem] p-6 hover:border-[var(--accent)]/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[var(--accent)]/5 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors duration-500">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2.5 text-[var(--text-secondary)] font-bold uppercase tracking-widest text-[9px]">
                      <div className="p-1 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] opacity-70">
                        <Building2 className="w-3 h-3 text-[var(--accent)]" />
                      </div>
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-muted)] text-[9px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm group-hover:border-[var(--accent)]/20 transition-all duration-500">
                    <Calendar className="w-3 h-3 text-[var(--accent)]" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed font-medium opacity-90">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Projects Section */}
      <section className="space-y-10 relative">
        {/* Decorative Glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[var(--accent)]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[var(--border)]/30 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/10">
              <Trophy className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">{t("section_projects")}</h2>
          </div>

          {/* Project Filter */}
          <div className="flex items-center gap-1.5 bg-[var(--bg-secondary)]/50 backdrop-blur-md p-1.5 rounded-xl border border-[var(--border)] w-fit lg:scale-95">
            {[
              { id: "all", label: t("filter_all"), icon: <LayoutGrid className="w-3.5 h-3.5" /> },
              { id: "web", label: t("filter_web"), icon: <Monitor className="w-3.5 h-3.5" /> },
              { id: "mobile", label: t("filter_mobile"), icon: <Smartphone className="w-3.5 h-3.5" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setProjectFilter(item.id)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all duration-500 ${projectFilter === item.id
                  ? "bg-[var(--accent)] text-[var(--accent-text)] shadow-lg shadow-[var(--accent)]/10"
                  : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-main)]"
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? filteredProjects.map((p: any) => (
            <div key={p.id} className="group relative bg-[var(--bg-secondary)]/40 backdrop-blur-sm border border-[var(--border)] rounded-[1.5rem] overflow-hidden transition-all duration-700 hover:border-[var(--accent)]/30 hover:-translate-y-1">
              <div className="aspect-[16/10] bg-[var(--bg-main)] relative overflow-hidden flex items-center justify-center">
                {/* Project Image */}
                {p.image && (
                  <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 z-0" />
                )}
                {/* Overlay with stack */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/40 to-transparent z-10 p-5 flex flex-col justify-end gap-3 opacity-100 group-hover:opacity-90 transition-opacity duration-500">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s: string) => {
                      const iconName = iconMap[s];
                      return (
                        <span key={s} className="flex items-center gap-1.5 px-2 py-1 bg-[var(--bg-main)]/90 backdrop-blur-md border border-[var(--border)] rounded-lg text-[8px] font-black uppercase tracking-[0.1em] text-[var(--text-main)]">
                          {/* @ts-ignore */}
                          {iconName ? (
                            <StackIcon name={iconName} className={`w-2.5 h-2.5 flex-shrink-0 ${["nextjs2", "github", "prisma", "framer", "expressjs"].includes(iconName) ? (theme === 'dark' ? 'invert' : '') : ""}`} />
                          ) : s === "Recharts" ? (
                            <BarChart className="w-2.5 h-2.5 text-[var(--accent)]" />
                          ) : null}
                          {s}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {/* Category large icon background (only if no image) */}
                {!p.image && (
                  <div className="text-[var(--accent)] opacity-5 scale-[2] group-hover:scale-[2.5] group-hover:opacity-10 transition-all duration-1000 ease-out z-0">
                    {p.category === 'web' ? <Monitor className="w-20 h-20" /> : <Smartphone className="w-20 h-20" />}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-black text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors duration-500 line-clamp-1 leading-tight uppercase tracking-tight">
                    {p.title}
                  </h3>
                  <div className="flex gap-1.5">
                    {p.github !== "#" && (
                      <a href={p.github} target="_blank" className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] transition-all duration-500 hover:border-[var(--accent)] active:scale-95 group/btn relative z-20">
                        <div className="w-3.5 h-3.5 grayscale group-hover/btn:grayscale-0 transition-all opacity-70 group-hover/btn:opacity-100 flex items-center justify-center">
                          <StackIcon name="github" />
                        </div>
                      </a>
                    )}
                    {p.demo && p.demo !== "#" && (
                      <a href={p.demo} target="_blank" className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] transition-all duration-500 hover:border-[var(--accent)] active:scale-95 group/btn relative z-20">
                        <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover/btn:text-[var(--accent)] transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed line-clamp-2 font-medium opacity-80">
                  {p.description}
                </p>
              </div>
            </div>
          )) : (
            <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center py-20 bg-[var(--bg-secondary)]/20 border border-dashed border-[var(--border)] rounded-[1.5rem]">
              <LayoutGrid className="w-16 h-16 text-[var(--text-muted)] opacity-30 mb-4" />
              <p className="text-[var(--text-secondary)] font-bold uppercase tracking-widest text-xs opacity-70">
                Tidak ada data proyek
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Certifications Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/10">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">{t("section_certs")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications && certifications.length > 0 ? certifications.map((a: any, index: number) => (
            <div key={index} className="group relative bg-[var(--bg-secondary)]/40 backdrop-blur-sm border border-[var(--border)] rounded-[1.5rem] overflow-hidden transition-all duration-700 hover:border-[var(--accent)]/30 hover:-translate-y-1">
              <div className="aspect-[16/8] bg-[var(--bg-main)] relative overflow-hidden flex items-center justify-center">
                {/* Certificate Image */}
                {a.image && (
                  <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent z-10 p-5 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--bg-main)]/90 backdrop-blur-md border border-[var(--border)] rounded-lg text-[8px] font-black uppercase tracking-[0.1em] text-[var(--text-main)]">
                      <div className="text-[var(--accent)] opacity-50">{typeIconMap[a.category] || <Medal className="w-2.5 h-2.5" />}</div>
                      {t(a.category)}
                    </span>
                  </div>
                </div>
                
                {!a.image && (
                  <div className="text-[var(--accent)] opacity-5 scale-[1.5] group-hover:scale-[1.8] group-hover:opacity-10 transition-all duration-1000 z-0">
                    {categoryIconMap[a.category] || <Award className="w-16 h-16" />}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <h3 className="text-base font-black text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors duration-500 line-clamp-2 leading-snug uppercase tracking-tight">
                      {a.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-[8px] font-black uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-[var(--accent)]/40" />
                      {a.issuer}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <a href={a.link} target="_blank" className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] transition-all duration-500 hover:border-[var(--accent)] active:scale-95 group/btn">
                      <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover/btn:text-[var(--accent)] transition-colors" />
                    </a>
                    <span className="text-[9px] font-black text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-lg border border-[var(--accent)]/20">
                      {a.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center py-20 bg-[var(--bg-secondary)]/20 border border-dashed border-[var(--border)] rounded-[1.5rem]">
              <Award className="w-16 h-16 text-[var(--text-muted)] opacity-30 mb-4" />
              <p className="text-[var(--text-secondary)] font-bold uppercase tracking-widest text-xs opacity-70">
                Tidak ada sertifikasi
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
