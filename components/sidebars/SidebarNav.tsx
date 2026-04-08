"use client";

import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Home,
  User,
  LayoutGrid,
  Trophy,
  FolderOpen,
  Monitor,
  BookOpen,
  Wrench,
  Phone,
  Link as LinkIcon,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

export default function SidebarNav() {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  const navItems = [
    { href: "/home", label: t("home"), icon: <Home className="w-4 h-4" /> },
    { href: "/about", label: t("about"), icon: <User className="w-4 h-4" /> },
    { href: "/creation", label: t("creation"), icon: <LayoutGrid className="w-4 h-4" /> },
    { href: "/achievement", label: t("achievement"), icon: <Trophy className="w-4 h-4" /> },
    { href: "/project", label: t("project"), icon: <FolderOpen className="w-4 h-4" /> },
    { href: "/dashboard", label: t("dashboard"), icon: <Monitor className="w-4 h-4" /> },
    { href: "/contact", label: t("contact"), icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav className="flex flex-col gap-1 w-full px-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group h-10 flex items-center gap-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
              ? "bg-[var(--accent)] text-[var(--accent-text)] translate-x-1"
              : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
              }`}
          >
            <span className={`transition-transform duration-300 ${isActive ? "" : "group-hover:scale-110"}`}>
              {item.icon}
            </span>
            <span className="flex-1 truncate">{item.label}</span>
            {isActive && (
              <ArrowRight className="w-4 h-4 animate-in slide-in-from-left-2 duration-300" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
