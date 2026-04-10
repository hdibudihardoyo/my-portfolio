import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SidebarProfile() {
  const t = useTranslations("Status");
  return (
    <div className="flex flex-col items-center gap-4 py-2">
      <div className="relative group p-1 rounded-full border-2 border-[var(--accent)] transition-all duration-300">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[var(--bg-main)]">
          <Image
            src="/avatar.png"
            alt="Hadi Budi Hardoyo"
            width={80}
            height={80}
            priority
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[var(--bg-main)] rounded-full"></div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="font-extrabold text-lg text-[var(--text-main)] tracking-tight uppercase">
          {t("name")}
        </span>
      </div>

      <button className="mt-3 px-6 py-2 bg-[var(--accent)] text-[var(--accent-text)] rounded-full text-[10px] font-black uppercase tracking-[0.15em] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 shadow-lg shadow-[var(--accent)]/20 group">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></span>
        {t("hire_me")}
      </button>
    </div>
  );
}