import { Link } from "@/i18n/navigation";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { LayoutGrid } from "lucide-react";

export default function SidebarControls() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Row 1: Theme Toggle (Top) */}
      <div className="flex justify-center w-[55px]">
        <ThemeToggle />
      </div>

      {/* Row 2: Language & LayoutGrid (Middle) */}
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="shrink-0">
          <LanguageToggle />
        </div>
        <Link
          href="/project"
          className="p-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] text-[var(--text-secondary)] transition-all flex items-center justify-center shrink-0"
          aria-label="Kreasi"
        >
          <LayoutGrid className="w-4 h-4" />
        </Link>
      </div>

      {/* Row 3: Google Login (Bottom) */}
      <button className="flex items-center justify-center gap-3 py-2.5 px-5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all bg-[var(--bg-secondary)] text-[var(--text-main)] border border-[var(--border)] hover:text-[var(--accent)] group">
        <Image
          src="/google.svg"
          alt="Google"
          width={14}
          height={14}
          className="group-hover:scale-110 transition-transform"
        />
        Google Login
      </button>
    </div>
  );
}
