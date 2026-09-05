import { Moon, Sun } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      aria-label={isDark ? t("theme.light") : t("theme.dark")}
      title={isDark ? t("theme.light") : t("theme.dark")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-9 items-center justify-center border-2 border-foreground bg-background text-foreground shadow-brutal transition hover:-translate-y-0.5 hover:bg-accent active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
    >
      <Sun className={isDark ? "size-4" : "hidden size-4"} />
      <Moon className={isDark ? "hidden size-4" : "size-4"} />
    </button>
  )
}