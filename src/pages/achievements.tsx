import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FileText } from "lucide-react"
import { CategoryFilter } from "@/components/category-filter"
import { PageHeader } from "@/components/page-header"
import { usePortfolioData } from "@/lib/use-portfolio-data"
import {
  achievementCategories,
  achievementIcons,
  type AchievementCategory,
} from "@/data/portfolio"

type Filter = AchievementCategory | "all"

const pdfUrls = import.meta.glob("/src/assets/pdf/**/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

export function AchievementsPage() {
  const { t } = useTranslation()
  const { achievements } = usePortfolioData()
  const [filter, setFilter] = useState<Filter>("all")

  const visible =
    filter === "all"
      ? achievements
      : achievements.filter((achievement) => achievement.category === filter)

  return (
    <div>
      <PageHeader
        title={t("achievements.title")}
        subtitle={t("achievements.subtitle")}
      />

      <CategoryFilter
        options={achievementCategories}
        selected={filter}
        onSelect={(value) => setFilter(value as Filter)}
        labelKey="achievements.cat"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((achievement) => {
          const Icon = achievementIcons[achievement.icon] ?? achievementIcons.trophy
          const pdfUrl = achievement.file ? pdfUrls[achievement.file] : undefined
          return (
            <article
              key={achievement.title}
              className="group flex flex-col gap-4 border-2 border-foreground bg-card p-5 shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              <div className="flex items-start gap-4">
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
              </div>
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex h-9 items-center justify-center gap-2 border-2 border-foreground bg-primary px-4 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-brutal transition hover:-translate-y-0.5 hover:shadow-brutal-lg"
                >
                  <FileText className="size-4" />
                  {t("achievements.view")}
                </a>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}