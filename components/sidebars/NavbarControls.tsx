"use client";

import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { LayoutGrid } from "lucide-react";
import { useLayout } from "./LayoutContext";

export default function NavbarControls() {
  const { toggleLayout } = useLayout();

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle Independent Container */}
      <div className="flex items-center justify-center">
        <ThemeToggle compact={true} />
      </div>

      {/* Language Toggle Independent Container */}
      <div className="flex items-center justify-center">
        <LanguageToggle compact={true} />
      </div>

      {/* Layout Toggle Button */}
      <button
        onClick={toggleLayout}
        className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] text-[var(--text-secondary)] transition-all flex items-center justify-center shrink-0 group shadow-sm active:scale-95"
        aria-label="Switch to Sidebar Layout"
      >
        <LayoutGrid className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
}
