import { ArrowUpRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { profile } from "@/data/portfolio"

export function LinksPage() {
  const { t } = useTranslation()

  return (
    <div>
      <PageHeader title={t("links.title")} subtitle={t("links.subtitle")} />

      <div className="grid gap-4 md:grid-cols-2">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 border-2 border-foreground bg-card p-5 shadow-brutal transition hover:-translate-y-1 hover:bg-accent hover:shadow-brutal-lg"
          >
            <div className="grid flex-1">
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent-foreground/80">
                {social.label}
              </span>
              <span className="truncate font-mono text-sm font-bold">
                {social.value}
              </span>
            </div>
            <span className="inline-flex size-9 items-center justify-center border-2 border-foreground bg-background shadow-brutal transition-transform group-hover:-translate-y-1">
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}