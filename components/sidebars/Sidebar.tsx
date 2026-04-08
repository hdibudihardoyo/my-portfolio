"use client";

import SidebarProfile from "./SidebarProfile";
import SidebarControls from "./SidebarControls";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

import { LayoutGrid } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-[var(--bg-main)] w-72 h-screen flex flex-col shrink-0 py-6 overflow-y-auto border-r border-[var(--border)] transition-all duration-300 ease-in-out">
      <SidebarProfile />
      
      <div className="px-8 mt-2 mb-6 flex flex-col gap-3">
        <div className="w-full">
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-4 w-full">
          <LanguageToggle />
          <button className="flex-1 max-w-[4rem] flex justify-center py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] hover:border-[var(--accent)] text-[var(--text-secondary)] transition-all shrink-0" aria-label="Kreasi">
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 w-full space-y-2">
        <SidebarNav />
      </div>

      <div className="mt-auto px-8 pt-4">
        <SidebarFooter />
      </div>
    </aside>
  );
}