"use client";

import { useTranslations } from "next-intl";
import NavbarNav from "./NavbarNav";
import NavbarControls from "./NavbarControls";
import Link from "next/link";

export default function Navbar() {
  const tStatus = useTranslations("Status");

  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-[var(--bg-main)]/80 backdrop-blur-xl border-b border-[var(--border)] hidden lg:flex items-center transition-all duration-300">
      <div className="w-full px-6 md:px-12 lg:px-8 flex justify-between items-center gap-8">
        {/* Left: Branding */}
        <div className="flex items-center min-w-0">
          <Link href="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-[var(--border)] shadow-sm transition-transform duration-300 shrink-0">
              <img src="/avatar.png" alt="Avatar" className="object-cover object-top w-full h-full" />
            </div>
            <div className="flex flex-col -space-y-1 truncate mt-0.5">
              <span className="text-[12px] font-black tracking-tight text-[var(--text-main)] uppercase whitespace-nowrap">{tStatus("name")}</span>
              <span className="text-[8.5px] font-extrabold text-[var(--text-secondary)] uppercase tracking-[0.2em] opacity-80">Portfolio</span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="flex-1 flex justify-center min-w-0">
          <NavbarNav />
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-4 shrink-0">
          <NavbarControls />
        </div>
      </div>
    </header>
  );
}
