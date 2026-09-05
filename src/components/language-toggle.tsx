import { Check, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"
import { LANGS } from "@/lib/i18n"
import { Button } from "@/ui/button"
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
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={t("lang.label")}
            title={t("lang.label")}
            data-icon="inline-end"
          />
        }
      >
        <Globe className="size-4" />
        <span className="text-[0.65rem] font-bold tracking-widest">
          {current.toUpperCase()}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("lang.label")}</DropdownMenuLabel>
        {LANGS.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => change(lang)}
            data-highlighted={current === lang}
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