import { useState } from "react";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CategoryFilter } from "@/components/category-filter";
import { PageHeader } from "@/components/page-header";
import { StackIcon } from "@/components/stack-icon";
import { usePortfolioData } from "@/lib/use-portfolio-data";
import {
  projectCategories,
  projectTypes,
  type ProjectCategory,
  type ProjectType,
} from "@/data/portfolio";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";

type TypeFilter = ProjectType | "all";
type CategoryFilter = ProjectCategory | "all";

const projectImages = import.meta.glob("/src/assets/images/Macbook-*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function ProjectsPage() {
  const { t } = useTranslation();
  const { projects } = usePortfolioData();
  const [type, setType] = useState<TypeFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const visible = projects.filter((p) => {
    const typeMatch = type === "all" || p.type === type;
    const categoryMatch = category === "all" || p.category === category;
    return typeMatch && categoryMatch;
  });

  return (
    <div>
      <PageHeader
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />

      <CategoryFilter
        titleKey="projects.filterType"
        options={projectTypes}
        selected={type}
        onSelect={(value) => setType(value as TypeFilter)}
        labelKey="projects.types"
      />

      <CategoryFilter
        titleKey="projects.filterCategory"
        options={projectCategories}
        selected={category}
        onSelect={(value) => setCategory(value as CategoryFilter)}
        labelKey="projects.cat"
      />

      {visible.length === 0 ? (
        <p className="border-2 border-dashed border-foreground bg-card p-6 text-sm text-muted-foreground">
          {t("projects.empty")}
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col border-2 border-foreground bg-card shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              <div className="flex items-center border-b-2 border-foreground bg-accent px-5 py-3">
                <h2 className="truncate font-black uppercase tracking-tight">
                  {project.title}
                </h2>
              </div>
              <div className="flex flex-1 flex-col p-5">
                {project.image && (
                  <img
                    src={projectImages[project.image] ?? project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={800}
                    className="mb-4 aspect-video w-full border-2 border-foreground bg-background object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                )}
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="inline-flex items-center gap-1 border-2 border-foreground bg-background px-2 py-3 font-mono text-[0.7rem] font-semibold"
                    >
                      <StackIcon name={tag} className="size-3" />
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
  );
}
