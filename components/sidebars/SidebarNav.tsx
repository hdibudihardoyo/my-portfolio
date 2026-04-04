"use client";

import { usePathname, Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  Home,
  User,
  Monitor,
  Trophy,
  FolderOpen,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function SidebarNav() {
  const pathname = usePathname(); 
  const t = useTranslations("Nav");
  const navItems = [
    { href: "/home", 
      label: t("home"), 
      icon: <Home className="w-4 h-4" /> 
    },
    { href: "/about", 
      label: t("about"), 
      icon: <User className="w-4 h-4" /> 
    },
    {
      href: "/dashboard",
      label: t("dashboard"),
      icon: <Monitor className="w-4 h-4" />,
    },
    {
      href: "/achievement",
      label: t("achievement"),
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      href: "/project",
      label: t("project"),
      icon: <FolderOpen className="w-4 h-4" />,
    },
    {
      href: "/contact",
      label: t("contact"),
      icon: <Phone className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="flex flex-col gap-2 w-full px-6">
      <span className="block w-full h-px bg-[var(--border)] mb-2"></span>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-3 px-5 py-3 rounded-xl text-sm transition-colors ${
              isActive
                ? "bg-[var(--accent)] text-[var(--accent-text)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
            }`}
          >
            <span className="transition-transform duration-200 group-hover:-rotate-12">
              {item.icon}
            </span>
            <span className="flex-1">{item.label}</span>
            {isActive && (
              <ArrowRight className="w-4 h-4 text-[var(--accent-text)]" />
            )}
          </Link>
        );
      })}
      <span className="block w-full h-px bg-[var(--border)] mt-2"></span>
    </nav>
  );
}
