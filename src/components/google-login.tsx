import { LogOut } from "lucide-react"
import { useTranslation } from "react-i18next"
import { SiGoogle } from "react-icons/si"
import { useAuth, type AuthUser } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/ui/sidebar"

function UserChip({ user }: { user: AuthUser }) {
  const { t } = useTranslation()
  const { signOut } = useAuth()

  return (
    <div className="flex h-8 w-full items-center gap-2 px-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0">
      <Avatar className="size-8 shrink-0 border-2 border-foreground">
        {user.picture ? (
          <AvatarImage src={user.picture} alt={user.name} />
        ) : null}
        <AvatarFallback className="bg-accent text-sm font-black text-accent-foreground">
          {user.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="grid min-w-0 flex-1 leading-tight group-data-[collapsible=icon]:hidden">
        <span className="truncate text-sm font-bold">{user.name}</span>
        <span className="truncate text-xs text-sidebar-foreground/60">
          {user.email}
        </span>
      </div>
      <button
        type="button"
        onClick={signOut}
        aria-label={t("auth.logout")}
        title={t("auth.logout")}
        className="inline-flex size-9 items-center justify-center border-2 border-foreground bg-background text-foreground shadow-brutal transition hover:-translate-y-0.5 hover:bg-accent active:translate-x-0.5 active:translate-y-0.5 active:shadow-none group-data-[collapsible=icon]:hidden"
      >
        <LogOut className="size-4" />
      </button>
    </div>
  )
}

export function GoogleLogin() {
  const { user, signIn } = useAuth()
  const { t } = useTranslation()

  if (user) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <UserChip user={user} />
        </SidebarMenuItem>
      </SidebarMenu>
    )
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={t("auth.login")}
            render={
              <button
                type="button"
                onClick={signIn}
                className="rounded-none border-2 border-foreground bg-background font-black shadow-brutal hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              />
            }
          >
            <SiGoogle className="size-4 shrink-0" />
            <span className="text-xs font-black uppercase tracking-wider group-data-[collapsible=icon]:hidden">
              {t("auth.login")}
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  )
}