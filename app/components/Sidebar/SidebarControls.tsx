import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./toogleTheme";

export default function SidebarControls() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#666] hover:text-white hover:bg-[#1c1c1c] border border-[#d4a017] transition-colors w-full">
        <Image src="/google.svg" alt="Google" width={16} height={16} />
        Google Login
      </button>
    </div>
  );
}
