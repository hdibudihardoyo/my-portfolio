import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { achievements } from "@/data/portfolio"

export function AchievementsPage() {
  const { t } = useTranslation()

  return (
    <div>
      <PageHeader
        title={t("achievements.title")}
        subtitle={t("achievements.subtitle")}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => {
          const Icon = achievement.icon
          return (
            <article
              key={achievement.title}
              className="flex items-start gap-4 border-2 border-foreground bg-card p-5 shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              <div className="flex size-12 shrink-0 items-center justify-center border-2 border-foreground bg-accent text-accent-foreground">
                <Icon className="size-6" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
                  {achievement.year}
                </p>
                <h2 className="mt-1 font-bold leading-snug uppercase tracking-tight">
                  {achievement.title}
                </h2>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}