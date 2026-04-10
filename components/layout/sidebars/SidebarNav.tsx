"use client";

import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Home,
  User,
  Briefcase,
  Monitor,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function SidebarNav() {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  const navItems = [
    { href: "/home", label: t("home"), icon: <Home className="w-4 h-4" /> },
    { href: "/about", label: t("about"), icon: <User className="w-4 h-4" /> },
    { href: "/work-experience", label: t("work-experience"), icon: <Briefcase className="w-4 h-4" /> },
    { href: "/dashboard", label: t("dashboard"), icon: <Monitor className="w-4 h-4" /> },
    { href: "/contact", label: t("contact"), icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav className="flex flex-col px-4 gap-1 w-full">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group h-11 flex items-center gap-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-500 relative overflow-hidden ${isActive
              ? "bg-[var(--accent)]/10 text-[var(--accent)] shadow-[0_0_15px_rgba(var(--accent-rgb),0.03)]"
              : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]/50 hover:text-[var(--text-main)]"
              }`}
          >
            {/* Active Indicator Bar (Compact) */}
            {isActive && (
              <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[var(--accent)] rounded-r-sm shadow-[1px_0_8px_var(--accent)] animate-in slide-in-from-left duration-500" />
            )}
            
            <div className={`transition-all duration-500 ${isActive ? "scale-105" : "group-hover:scale-105 group-hover:rotate-6 text-[var(--text-muted)] group-hover:text-[var(--accent)] opacity-70 group-hover:opacity-100"}`}>
              <div className="w-4.5 h-4.5 flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            
            <span className={`flex-1 truncate uppercase tracking-[0.18em] text-[8.5px] font-black transition-all duration-500 ${isActive ? "translate-x-0.5" : "group-hover:translate-x-0.5"}`}>
              {item.label}
            </span>

            {isActive ? (
              <div className="relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              </div>
            ) : (
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-all duration-500 -translate-x-1.5 group-hover:translate-x-0" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
