import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function SidebarControls() {
  return (
    <div className="flex flex-col items-center w-full gap-3">
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <button className="w-55 flex items-center justify-center gap-3 p-3 rounded-full text-sm transition-colors bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] transition-all duration-200 ease-out transform cursor-pointer hover:scale-105">
        <Image src="/google.svg" alt="Google" width={16} height={16} />
        Google Login
      </button>
    </div>
  );
}
