"use client";

import LanguageToggle from "../shared/LanguageToggle";
import ThemeToggle from "../shared/ThemeToggle";
import { LayoutGrid } from "lucide-react";
import { useLayout } from "../LayoutContext";
import Image from "next/image";

export default function SidebarControls() {
  const { toggleLayout } = useLayout();

  return (
    <div className="flex flex-col items-center gap-3 w-full px-4">
      {/* Google Login (Ultra Compact) */}
      <button className="flex items-center justify-center gap-2.5 w-full h-9 rounded-xl bg-[var(--bg-secondary)]/50 backdrop-blur-lg border border-[var(--border)] text-[7px] font-black uppercase tracking-[0.2em] text-[var(--text-main)] hover:border-[var(--accent)]/30 transition-all group relative overflow-hidden shadow-sm">
        <Image src="/google.svg" alt="Google" width={14} height={14} className="group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100" />
        <span>Auth Status</span>
      </button>
      {/* Settings Row (Dropdowns) */}
      <div className="w-full flex items-center justify-between gap-2 p-2 bg-[var(--bg-secondary)]/30 backdrop-blur-md rounded-2xl border border-[var(--border)] shadow-sm">
        <div className="flex-1 flex justify-center">
          <button
            onClick={toggleLayout}
            className="w-9 h-9 rounded-full bg-transparent text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all flex items-center justify-center shrink-0 group active:scale-95"
            aria-label="Switch Layout"
          >
            <LayoutGrid className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
          </button>
        </div>

        <div className="w-px h-6 bg-[var(--border)]/30" />

        <div className="flex-1 flex justify-center">
          <LanguageToggle compact={true} variant="dropdown" />
        </div>

        <div className="w-px h-6 bg-[var(--border)]/30" />
        <div className="flex-1 flex justify-center">
          <ThemeToggle compact={true} variant="dropdown" />
        </div>
      </div>
    </div>
  );
}
