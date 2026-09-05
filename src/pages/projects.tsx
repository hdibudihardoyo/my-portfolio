import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { projects } from "@/data/portfolio"
import { Badge } from "@/ui/badge"
import { Button } from "@/ui/button"

export function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <div>
      <PageHeader title={t("projects.title")} subtitle={t("projects.subtitle")} />

      {projects.length === 0 ? (
        <p className="border-2 border-dashed border-foreground bg-card p-6 text-sm text-muted-foreground">
          {t("projects.empty")}
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col border-2 border-foreground bg-card shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              <div className="flex items-center justify-between gap-2 border-b-2 border-foreground bg-accent px-5 py-3">
                <h2 className="truncate font-black uppercase tracking-tight">
                  {project.title}
                </h2>
                <span className="shrink-0 rounded-none border-2 border-foreground bg-card px-2 py-0.5 font-mono text-xs font-bold">
                  {project.year}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-2 border-foreground bg-background px-2 py-0.5 font-mono text-[0.7rem] font-semibold"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 border-t-2 border-foreground p-3">
                {project.repo && (
<Button
                  variant="outline"
                  size="sm"
                  render={
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="border-2 border-foreground bg-background shadow-brutal hover:bg-accent"
                      />
                    }
                  >
                    <FolderGit2 className="size-3.5" />
                    {t("projects.repo")}
                  </Button>
                )}
                {project.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    render={
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border-2 border-foreground bg-background shadow-brutal hover:bg-accent"
                      />
                    }
                  >
                    <ExternalLink className="size-3.5" />
                    {t("projects.demo")}
                  </Button>
                )}
                {!project.repo && !project.url && (
                  <span className="font-mono text-xs text-muted-foreground">
                    —
                  </span>
                )}
                <span className="ml-auto font-mono text-xs lowercase text-muted-foreground transition-transform group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}