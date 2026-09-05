import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CategoryFilter } from "@/components/category-filter";
import { StackIcon } from "@/components/stack-icon";
import {
  skillCategories,
  skills,
  stats,
  type SkillCategory,
} from "@/data/portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";

type SkillFilter = SkillCategory | "all";

export function HomePage() {
  const { t } = useTranslation();
  const [skillFilter, setSkillFilter] = useState<SkillFilter>("all");

  const skillCounts: Record<SkillFilter, number> = {
    all: skills.length,
    frontend: skills.filter((s) => s.category === "frontend").length,
    backend: skills.filter((s) => s.category === "backend").length,
    mobile: skills.filter((s) => s.category === "mobile").length,
    database: skills.filter((s) => s.category === "database").length,
    tools: skills.filter((s) => s.category === "tools").length,
  };

  const visibleSkills =
    skillFilter === "all"
      ? skills
      : skills.filter((s) => s.category === skillFilter);

  return (
    <div className="space-y-6">
      <section className="relative border-2 border-foreground bg-accent p-6 shadow-brutal-lg md:p-10">
        <h1 className="font-black uppercase leading-[0.95] tracking-tight text-accent-foreground md:text-6xl">
          {t("hero.hi")} {t("hero.name")} {t("hero.role")}
        </h1>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            to="/projects"
            className="group inline-flex h-11 items-center gap-2 border-2 border-foreground bg-primary px-5 text-sm font-bold text-primary-foreground shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            {t("hero.work")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="mailto:hdibudihardoyo@gmail.com"
            className="inline-flex h-11 items-center gap-2 border-2 border-foreground bg-background px-5 text-sm font-bold text-foreground shadow-brutal transition hover:-translate-y-1 hover:border-accent-foreground hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <Mail className="size-4" />
            {t("hero.contact")}
          </a>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.labelKey}
            className="border-2 border-foreground bg-card p-4 shadow-brutal"
          >
            <p className="font-mono text-3xl font-black leading-none md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </section>

      <Card className="border-2 border-foreground bg-card shadow-brutal">
        <CardHeader className="flex-row items-center justify-between gap-2 border-b-2 border-foreground">
          <div>
            <CardTitle className="text-xl font-black uppercase tracking-tight">
              {t("skills.title")}
            </CardTitle>
            <CardDescription>{t("skills.subtitle")}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <CategoryFilter
            titleKey="skills.filter"
            options={skillCategories}
            selected={skillFilter}
            onSelect={(value) => setSkillFilter(value as SkillFilter)}
            labelKey="skills.cat"
            counts={skillCounts}
          />
          {visibleSkills.length === 0 ? (
            <p className="border-2 border-dashed border-foreground bg-background p-6 text-sm text-muted-foreground">
              {t("skills.empty")}
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {visibleSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 border-2 border-foreground bg-background px-3 py-1.5 shadow-brutal transition hover:-translate-y-0.5 hover:bg-accent"
                >
                  <StackIcon name={skill.name} className="size-4" />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <section className="border-2 border-foreground bg-primary p-6 text-primary-foreground shadow-brutal-lg md:p-10">
        <h2 className="text-2xl font-black uppercase tracking-tight md:text-4xl">
          {t("dash.cta")}
        </h2>
        <p className="mt-2 max-w-xl text-sm font-medium text-primary-foreground/80 md:text-base">
          {t("dash.ctaDesc")}
        </p>
        <a
          href="mailto:hdibudihardoyo@gmail.com"
          className="mt-4 inline-flex h-11 items-center gap-2 border-2 border-foreground bg-background px-5 text-sm font-bold text-foreground shadow-brutal transition hover:-translate-y-1 hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          <Mail className="size-4" />
          {t("hero.contact")}
        </a>
      </section>
    </div>
  );
}
