"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Home,
  User,
  Briefcase,
  Monitor,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function NavbarNav() {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  const navItems = [
    { href: "/home", label: t("home"), icon: <Home className="w-4 h-4" /> },
    { href: "/about", label: t("about"), icon: <User className="w-4 h-4" /> },
    { href: "/work-experience", label: t("work-experience"), icon: <Briefcase className="w-4 h-4" /> },
    { href: "/dashboard", label: t("dashboard"), icon: <Monitor className="w-4 h-4" /> },
    { href: "/contact", label: t("contact"), icon: <Phone className="w-4 h-4" /> },
    { href: "/talk", label: t("talk"), icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className="flex flex-row items-center gap-1.5 h-full">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-2 px-4 py-3 text-[11px] font-extrabold transition-all duration-300 relative ${isActive
              ? "text-[var(--accent)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-main)]"
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
