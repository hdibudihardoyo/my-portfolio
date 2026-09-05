import { NavLink, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { navGroups, profile } from "@/data/portfolio"
import { Avatar, AvatarFallback } from "@/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/ui/sidebar"

export function AppSidebar() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname === url

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              tooltip={t("brand")}
              render={<NavLink to="/" />}
            >
              <div
                data-slot="brand-logo"
                className="flex aspect-square size-8 shrink-0 items-center justify-center border-2 border-foreground bg-accent text-base font-black text-accent-foreground"
              >
                {profile.name.charAt(0)}
              </div>
              <div className="grid flex-1 leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-black uppercase tracking-tight">
                  {t("brand")}
                </span>
                <span className="truncate text-xs text-sidebar-foreground/60">
                  {profile.role}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {navGroups.map((group) => (
            <SidebarGroup key={group.labelKey}>
              <SidebarGroupLabel>{t(group.labelKey)}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.links.map((link) => {
                    const MenuIcon = link.icon
                    return (
                      <SidebarMenuItem key={link.url}>
                        <SidebarMenuButton
                          isActive={isActive(link.url)}
                          tooltip={t(link.titleKey)}
                          render={<NavLink to={link.url} />}
                        >
                          <MenuIcon />
                          <span>{t(link.titleKey)}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              tooltip={t("nav.contact")}
              render={<NavLink to="/contact" />}
            >
              <Avatar className="size-8 shrink-0 border-2 border-foreground">
                <AvatarFallback className="bg-accent text-sm font-black text-accent-foreground">
                  {profile.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">{profile.name}</span>
                <span className="truncate text-xs text-sidebar-foreground/60">
                  {profile.role}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="mt-1 flex items-center gap-1 px-2 group-data-[collapsible=icon]:hidden">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}