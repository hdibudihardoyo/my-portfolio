import { Briefcase, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/page-header";
import { usePortfolioData } from "@/lib/use-portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

const logoImages = import.meta.glob("/src/assets/images/logos/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function AboutPage() {
  const { t } = useTranslation();
  const { education, experience } = usePortfolioData();

  return (
    <div>
      <PageHeader title={t("about.title")} subtitle={t("about.subtitle")} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-3">
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
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="flex items-center justify-between gap-3 px-5 py-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    {item.logo && (
                      <img
                        src={logoImages[item.logo] ?? item.logo}
                        alt={item.school}
                        loading="lazy"
                        decoding="async"
                        width={44}
                        height={44}
                        className="size-11 shrink-0 border-2 border-foreground bg-background object-contain p-1"
                      />
                    )}
                    <div>
                      <p className="font-bold">{item.degree}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.school}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.grade}
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
              {experience.map((job) => (
                <div key={job.role} className="px-5 py-4">
                  <div className="mt-1 flex items-center gap-2">
                    {job.logo && (
                      <img
                        src={logoImages[job.logo] ?? job.logo}
                        alt={job.company}
                        loading="lazy"
                        decoding="async"
                        width={40}
                        height={40}
                        className="size-10 shrink-0 border-2 border-foreground bg-background object-contain p-1"
                      />
                    )}
                    <div>
                      <p className="font-bold">{job.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {job.company}
                      </p>
                    </div>
                    <span className="ml-auto font-mono text-xs text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
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
      </div>
    </div>
  );
}