import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function SidebarControls() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <button className="w-40 flex items-center justify-center gap-3 py-3 px-2 rounded-full text-sm transition-colors bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] transition-all duration-200 ease-out transform cursor-pointer hover:scale-105">
        <Image src="/google.svg" alt="Google" width={18} height={18} />
        Google Login
      </button>
    </div>
  );
}
