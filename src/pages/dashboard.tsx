import { ArrowRight, FolderGit2, Mail, Sparkles } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { profile, projects, skills } from "@/data/portfolio"
import { Button } from "@/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"

export function DashboardPage() {
  const { t } = useTranslation()
  const recent = projects.slice(0, 3)

  return (
    <div className="space-y-6">
      <section className="relative border-2 border-foreground bg-accent p-6 shadow-brutal-lg md:p-10">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground">
          {t("hero.kicker")}
        </p>
        <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-accent-foreground md:text-6xl">
          {t("hero.hi")}{" "}
          <span className="border-b-4 border-accent-foreground">
            {t("hero.name")}
          </span>
          <br />
          {t("hero.role")}
        </h1>
        <p className="mt-5 max-w-2xl text-sm font-semibold text-accent-foreground/90 md:text-base">
          {t("hero.highlight")} {t("hero.desc")}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="group inline-flex h-11 items-center gap-2 border-2 border-foreground bg-primary px-5 text-sm font-bold text-primary-foreground shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            {t("hero.work")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center gap-2 border-2 border-foreground bg-background px-5 text-sm font-bold text-foreground shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <Mail className="size-4" />
            {t("hero.contact")}
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {profile.stats.map((stat) => (
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
          <Sparkles className="size-5 shrink-0" />
        </CardHeader>
        <CardContent className="space-y-3 pt-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-sm font-bold">{skill.name}</span>
                <span className="font-mono text-xs font-bold text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-5 w-full border-2 border-foreground bg-background">
                <div
                  className="flex h-full items-center justify-end px-1.5 bg-accent"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="font-mono text-[0.6rem] font-black leading-none text-accent-foreground">
                    █
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2 border-foreground bg-card shadow-brutal">
        <CardHeader className="flex-row items-center justify-between gap-2 border-b-2 border-foreground">
          <div>
            <CardTitle className="text-xl font-black uppercase tracking-tight">
              {t("recent.title")}
            </CardTitle>
            <CardDescription>{t("recent.viewAll")}</CardDescription>
          </div>
          <Link
            to="/projects"
            className="inline-flex h-8 items-center gap-1.5 border-2 border-foreground bg-accent px-3 text-xs font-bold text-accent-foreground shadow-brutal transition hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            {t("nav.projects")}
            <ArrowRight className="size-3.5" />
          </Link>
        </CardHeader>
        <CardContent className="divide-y-2 divide-foreground p-0">
          {recent.map((project) => (
            <Link
              key={project.title}
              to="/projects"
              className="group flex items-center gap-3 px-5 py-4 transition-colors hover:bg-muted"
            >
              <FolderGit2 className="size-5 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{project.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {project.tags.join(" · ")}
                </p>
              </div>
              <span className="hidden font-mono text-xs text-muted-foreground sm:block">
                {project.year}
              </span>
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </CardContent>
      </Card>

      <section className="border-2 border-foreground bg-primary p-6 text-primary-foreground shadow-brutal-lg md:p-10">
        <h2 className="text-2xl font-black uppercase tracking-tight md:text-4xl">
          {t("dash.cta")}
        </h2>
        <p className="mt-2 max-w-xl text-sm font-medium text-primary-foreground/80 md:text-base">
          {t("dash.ctaDesc")}
        </p>
<Button
          size="lg"
          render={
            <a
              href="mailto:halo@example.com"
              className="h-11 border-2 border-foreground bg-background px-5 text-sm font-bold text-foreground shadow-brutal hover:bg-muted"
            />
          }
          className="mt-6"
          data-icon="inline-end"
        >
          {t("hero.contact")}
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}