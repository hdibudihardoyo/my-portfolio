import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { navGroups } from "@/data/portfolio"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/ui/breadcrumb"
import { Separator } from "@/ui/separator"
import { SidebarTrigger } from "@/ui/sidebar"

const pageKeys = new Map<string, string>()
for (const group of navGroups) {
  for (const link of group.links) {
    pageKeys.set(link.url, link.titleKey)
  }
}

export function AppHeader() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const currentKey = pageKeys.get(pathname) ?? pageKeys.get("/")

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b-2 border-foreground bg-background px-3 md:px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5" />
      <Breadcrumb>
        <BreadcrumbList className="flex-nowrap">
          <BreadcrumbItem>
            <BreadcrumbLink
              render={<Link to="/" className="font-bold uppercase tracking-wide" />}
            >
              {t("brand")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {currentKey !== pageKeys.get("/") && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  {currentKey ? t(currentKey) : ""}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-1">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  )
}