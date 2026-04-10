"use client";

import LanguageToggle from "../shared/LanguageToggle";
import ThemeToggle from "../shared/ThemeToggle";
import { LayoutGrid } from "lucide-react";
import { useLayout } from "../LayoutContext";

export default function NavbarControls() {
  const { toggleLayout } = useLayout();

  return (
    <div className="flex items-center gap-3">
      {/* Theme Toggle Independent Container */}
      <div className="flex items-center justify-center">
        <ThemeToggle variant="dropdown" compact={true} />
      </div>

      {/* Language Toggle Independent Container */}
      <div className="flex items-center justify-center">
        <LanguageToggle variant="dropdown" compact={true} />
      </div>

      {/* Layout Toggle Button */}
      <button
        onClick={toggleLayout}
        className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] text-[var(--text-secondary)] transition-all flex items-center justify-center shrink-0 group shadow-sm active:scale-95"
        aria-label="Switch to Sidebar Layout"
      >
        <LayoutGrid className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
}
