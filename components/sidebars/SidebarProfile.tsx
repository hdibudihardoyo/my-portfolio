import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SidebarProfile() {
  const t = useTranslations("Status");
  return (
    <div className="flex flex-col items-center gap-4 py-2">
      <div className="relative group p-1 rounded-full border-2 border-[var(--accent)] transition-all duration-300">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--bg-main)]">
          <Image
            src="/avatar.png"
            alt="Hadi Budi Hardoyo"
            width={96}
            height={96}
            priority
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-[var(--bg-main)] rounded-full"></div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-lg text-[var(--text-main)] tracking-tight">
            {t("name")}
          </span>
          <BadgeCheck className="w-5 h-5 shrink-0 text-blue-500" />
        </div>
        
        <button className="mt-3 px-5 py-1.5 bg-[var(--accent)] text-[var(--accent-text)] rounded-full text-xs font-bold hover:opacity-90 transition-all flex items-center gap-2">
          <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
          {t("hire_me")}
        </button>
      </div>
    </div>
  );
}