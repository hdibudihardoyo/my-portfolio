import { Briefcase, GraduationCap, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { profile } from "@/data/portfolio"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <div>
      <PageHeader title={t("about.title")} subtitle={t("about.subtitle")} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="border-2 border-foreground bg-card shadow-brutal">
            <CardContent className="space-y-4 text-sm leading-relaxed md:text-base">
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground bg-card shadow-brutal">
            <CardHeader className="flex-row items-center gap-2 border-b-2 border-foreground">
              <GraduationCap className="size-5" />
              <CardTitle className="text-lg font-black uppercase tracking-tight">
                {t("about.education")}
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y-2 divide-foreground p-0">
              {profile.education.map((item) => (
                <div key={item.degree} className="flex items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <p className="font-bold">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.school}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.year}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground bg-card shadow-brutal">
            <CardHeader className="flex-row items-center gap-2 border-b-2 border-foreground">
              <Briefcase className="size-5" />
              <CardTitle className="text-lg font-black uppercase tracking-tight">
                {t("about.experience")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {profile.experience.map((job) => (
                <div key={job.role} className="px-5 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-bold">{job.role}</p>
                    <span className="font-mono text-xs text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-accent">
                    {job.company}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit border-2 border-foreground bg-card shadow-brutal">
          <CardHeader className="border-b-2 border-foreground">
            <CardTitle className="text-lg font-black uppercase tracking-tight">
              {t("about.contact")}
            </CardTitle>
            <CardDescription>{profile.role}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 border-2 border-foreground bg-background p-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:halo@example.com"
                  className="break-all text-sm font-semibold underline decoration-2 underline-offset-2 hover:bg-accent"
                >
                  halo@example.com
                </a>
              </div>
            </div>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-2 border-foreground bg-background p-3 transition hover:-translate-y-0.5 hover:bg-accent"
              >
                <span className="text-sm font-bold">{social.label}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {social.value}
                </span>
              </a>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}