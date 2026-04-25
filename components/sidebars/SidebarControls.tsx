"use client";

import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { LayoutGrid } from "lucide-react";
import { useLayout } from "./LayoutContext";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SidebarControls() {
  const { toggleLayout } = useLayout();
  const t = useTranslations("Nav");

  return (
    <div className="flex flex-col items-center gap-5 w-full px-8">
      {/* Group 1: Theme & Language/Layout */}
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Theme Toggle (Top) */}
        <div className="w-full flex justify-center">
          <ThemeToggle compact={false} />
        </div>

        {/* Row 2: Language & Layout Toggle */}
        <div className="flex items-center justify-center gap-3 w-full px-1">
          <div className="flex-1 flex justify-center">
            <LanguageToggle compact={false} />
          </div>
          <button
            onClick={toggleLayout}
            className="w-11 h-11 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] text-[var(--text-secondary)] transition-all flex items-center justify-center shrink-0 group shadow-sm active:scale-95"
            aria-label="Switch to Navbar Layout"
          >
            <LayoutGrid className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Google Login (Bottom) */}
      <button className="flex items-center justify-center gap-3 w-full h-11 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[10px] font-black uppercase tracking-widest text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] hover:border-[var(--accent)] transition-all group overflow-hidden relative shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        <Image src="/google.svg" alt="Google" width={16} height={16} className="group-hover:grayscale invert brightness-200 transition-all duration-300 relative z-10" />
        <span className="relative z-10">{t("google_login")}</span>
      </button>
    </div>
  );
}
