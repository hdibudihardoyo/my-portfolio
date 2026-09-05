import { Check, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"
import { LANGS } from "@/lib/i18n"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

export function LanguageToggle() {
  const { t, i18n } = useTranslation()
  const current = i18n.resolvedLanguage?.startsWith("en") ? "en" : "id"

  const change = (lng: string) => {
    window.localStorage.setItem("lang", lng)
    void i18n.changeLanguage(lng)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            aria-label={t("lang.label")}
            title={t("lang.label")}
            className="inline-flex h-9 items-center justify-center gap-1.5 border-2 border-foreground bg-background px-2.5 text-foreground shadow-brutal transition hover:-translate-y-0.5 hover:bg-accent active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          />
        }
      >
        <Globe className="size-4" />
        <span className="text-[0.65rem] font-bold tracking-widest">
          {current.toUpperCase()}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-2 border-foreground bg-card p-1 shadow-brutal"
      >
        <DropdownMenuLabel className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">
          {t("lang.label")}
        </DropdownMenuLabel>
        {LANGS.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => change(lang)}
            data-highlighted={current === lang}
            className="rounded-none border-b border-foreground/10 last:border-b-0"
          >
            {current === lang ? (
              <Check className="size-4" />
            ) : (
              <span className="size-4" />
            )}
            {t(`lang.${lang}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}