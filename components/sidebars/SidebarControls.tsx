import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { LayoutGrid } from "lucide-react";

export default function SidebarControls() {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* Row 1: Theme Toggle */}
      <div className="w-full">
        <ThemeToggle />
      </div>

      {/* Row 2: Language & Kreasi */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1">
          <LanguageToggle />
        </div>
        <button 
          className="p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] hover:border-[var(--accent)] text-[var(--text-secondary)] transition-all shrink-0" 
          aria-label="Kreasi"
        >
          <LayoutGrid className="w-4 h-4" />
        </button>
      </div>

      {/* Row 3: Google Login */}
      <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all bg-[var(--bg-secondary)] text-[var(--text-main)] border border-[var(--border)] hover:border-[var(--accent)] group">
        <Image 
          src="/google.svg" 
          alt="Google" 
          width={16} 
          height={16} 
          className="group-hover:scale-110 transition-transform"
        />
        Google Login
      </button>
    </div>
  );
}
