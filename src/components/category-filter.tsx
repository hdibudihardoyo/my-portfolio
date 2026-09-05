import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"

type CategoryFilterProps = {
  options: readonly string[]
  selected: string
  onSelect: (value: string) => void
  labelKey: string
  titleKey?: string
  counts?: Record<string, number>
}

export function CategoryFilter({
  options,
  selected,
  onSelect,
  labelKey,
  titleKey,
  counts,
}: CategoryFilterProps) {
  const { t } = useTranslation()
  const values = ["all", ...options]

  return (
    <div className="mb-6">
      {titleKey && (
        <p className="mb-2 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">
          {t(titleKey)}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onSelect(value)}
            aria-pressed={selected === value}
            className={cn(
              "inline-flex h-9 items-center gap-1.5 border-2 border-foreground px-4 text-xs font-bold uppercase tracking-wider shadow-brutal transition",
              selected === value
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground",
            )}
          >
            {t(`${labelKey}.${value}`)}
            {typeof counts?.[value] === "number" && (
              <span className="inline-flex h-4 min-w-4 items-center justify-center border-2 border-foreground bg-background px-0.5 font-mono text-[0.6rem] font-bold text-foreground">
                {counts[value]}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}