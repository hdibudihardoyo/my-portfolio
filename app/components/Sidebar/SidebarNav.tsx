"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  Home,
  User,
  FileText,
  Monitor,
  FolderOpen,
} from "lucide-react";

const navItems = [
  { href: "/pages/home", label: "Beranda", icon: <Home className="w-4 h-4" /> },
  {
    href: "/pages/about",
    label: "Tentang",
    icon: <User className="w-4 h-4" />,
  },
  {
    href: "/pages/project",
    label: "Kreasi",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    href: "/pages/dashboard",
    label: "Pencapaian",
    icon: <Monitor className="w-4 h-4" />,
  },
  {
    href: "/pages/contact",
    label: "Proyek",
    icon: <FolderOpen className="w-4 h-4" />,
  },
  {
    href: "/pages/contact",
    label: "Proyek",
    icon: <FolderOpen className="w-4 h-4" />,
  },
  {
    href: "/pages/contact",
    label: "Proyek",
    icon: <FolderOpen className="w-4 h-4" />,
  },
  {
    href: "/pages/contact",
    label: "Proyek",
    icon: <FolderOpen className="w-4 h-4" />,
  },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 w-full px-5">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
              isActive
                ? "bg-[#1c1c1c] text-white"
                : "text-[#666] hover:text-white hover:bg-[#1c1c1c]"
            }`}
          >
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {isActive && <ChevronRight className="w-4 h-4 text-[#666]" />}
          </Link>
        );
      })}
    </nav>
  );
}
