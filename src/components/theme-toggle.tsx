import { Moon, Sun } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label={isDark ? t("theme.light") : t("theme.dark")}
      title={isDark ? t("theme.light") : t("theme.dark")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className={isDark ? "size-4" : "hidden size-4"} />
      <Moon className={isDark ? "hidden size-4" : "size-4"} />
    </Button>
  )
}