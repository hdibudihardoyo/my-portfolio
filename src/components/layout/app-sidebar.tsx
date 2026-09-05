import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GoogleLogin } from "@/components/google-login";
import { navLinks } from "@/data/portfolio";
import { usePortfolioData } from "@/lib/use-portfolio-data";
import pasphoto from "@/assets/images/pasphoto.webp";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/ui/sidebar";

export function AppSidebar() {
  const { t } = useTranslation();
  const { profile } = usePortfolioData();
  const { pathname } = useLocation();

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname === url;

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
                className="flex aspect-square size-8 shrink-0 items-center justify-center overflow-hidden border-2 border-foreground bg-accent"
              >
                <img
                  src={pasphoto}
                  alt={profile.name}
                  decoding="async"
                  width={160}
                  height={151}
                  className="size-full object-cover"
                />
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

      <SidebarContent className="p-2">
        <SidebarMenu className="gap-2">
          {navLinks.map((link) => {
            const MenuIcon = link.icon;
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
            );
          })}
        </SidebarMenu>

        <div className="m-2 h-[2px] bg-foreground/20" />
        <GoogleLogin />
      </SidebarContent>

      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <p className="px-1 font-mono text-[0.62rem] leading-relaxed text-sidebar-foreground/70">
          <span className="block font-black tracking-widest text-sidebar-foreground">
            {t("footer.heading")} {new Date().getFullYear()}
          </span>
          <span>{t("footer.rights", { name: profile.name })}</span>
        </p>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
