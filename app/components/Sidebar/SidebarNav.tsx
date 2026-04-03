"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Monitor,
  Trophy,
  FolderOpen,
  Phone,
  ArrowRight,
} from "lucide-react";

const navItems = [
  { href: "/pages/home", 
    label: "Beranda", 
    icon: <Home className="w-4 h-4" /> 
  },
  {
    href: "/pages/about",
    label: "Tentang",
    icon: <User className="w-4 h-4" />,
  },
  {
    href: "/pages/dashboard",
    label: "Dashboard",
    icon: <Monitor className="w-4 h-4" />,
  },
  {
    href: "/pages/achievements",
    label: "Pencapaian",
    icon: <Trophy className="w-4 h-4" />,
  },
  {
    href: "/pages/projects",
    label: "Projek",
    icon: <FolderOpen className="w-4 h-4" />,
  },
  {
    href: "/pages/contacts",
    label: "Kontak",
    icon: <Phone className="w-4 h-4" />,
  },
];

export default function SidebarNav() {
  const pathname = usePathname();

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

            <span className="flex-1">
              {item.label}
            </span>
            
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
