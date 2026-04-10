"use client";

import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Home,
  User,
  Trophy,
  FolderOpen,
  Monitor,
  Phone,
} from "lucide-react";

export default function NavbarNav() {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  const navItems = [
    { href: "/home", label: t("home"), icon: <Home className="w-4 h-4" /> },
    { href: "/about", label: t("about"), icon: <User className="w-4 h-4" /> },
    { href: "/achievement", label: t("achievement"), icon: <Trophy className="w-4 h-4" /> },
    { href: "/project", label: t("project"), icon: <FolderOpen className="w-4 h-4" /> },
    { href: "/dashboard", label: t("dashboard"), icon: <Monitor className="w-4 h-4" /> },
    { href: "/contact", label: t("contact"), icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav className="flex flex-row items-center gap-1.5 h-full">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-1 px-2 py-1.5 rounded-full text-[9px] font-extrabold transition-all duration-300 relative ${isActive
              ? "bg-[var(--accent)] text-[var(--accent-text)] shadow-sm"
              : "text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-secondary)]/50"
              }`}
          >
            <span className={`transition-transform duration-300 ${isActive ? "" : "group-hover:scale-110 shrink-0"}`}>
              {item.icon}
            </span>
            <span className="whitespace-nowrap uppercase tracking-widest">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
