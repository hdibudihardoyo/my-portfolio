import { ArrowUpRight, Wrench } from "lucide-react"
import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { creations } from "@/data/portfolio"
import { Badge } from "@/ui/badge"

export function CreationsPage() {
  const { t } = useTranslation()

  return (
    <div>
      <PageHeader title={t("creations.title")} subtitle={t("creations.subtitle")} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {creations.map((creation) => (
          <a
            key={creation.title}
            href={creation.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col border-2 border-foreground bg-card p-5 shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg"
          >
            <div className="flex items-center gap-2">
              <Wrench className="size-4" />
              <Badge className="border-2 border-foreground bg-accent font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent-foreground">
                tool
              </Badge>
            </div>
            <h2 className="mt-3 font-black uppercase tracking-tight">
              {creation.title}
            </h2>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">
              {creation.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-widest">
              {t("creations.open")}
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}