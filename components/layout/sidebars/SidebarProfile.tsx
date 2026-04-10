import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SidebarProfile() {
  const t = useTranslations("Status");
  return (
    <div className="px-4 mb-8 group/profile text-center">
      <div className="bg-[var(--bg-secondary)]/50 backdrop-blur-md rounded-2xl border border-[var(--border)] p-4 flex flex-col items-center gap-4 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--accent)]/10 hover:border-[var(--accent)]/30 group-hover/profile:-translate-y-1 relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-[var(--accent)]/5 rounded-full blur-2xl -z-10" />

        <div className="relative p-1 rounded-full border-2 border-[var(--accent)]/30 group-hover/profile:border-[var(--accent)] transition-all duration-500 shadow-sm">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--bg-main)] shadow-inner">
            <Image
              src="/avatar.png"
              alt={t("name")}
              width={64}
              height={64}
              priority
              className="object-cover group-hover/profile:scale-110 transition-transform duration-700"
            />
          </div>
          {/* Live Status Orb */}
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[var(--bg-main)] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1.5">
            <span className="font-black text-base text-[var(--text-main)] tracking-tight uppercase tracking-[0.05em]">
              {t("name")}
            </span>
          </div>
          <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[var(--text-muted)] opacity-60">{t("role")}</p>
        </div>

        <button className="w-full py-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 text-[var(--accent-text)] rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[var(--accent)]/20 group/btn relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
          <span className="w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></span>
          {t("hire_me")}
        </button>
      </div>
    </div>
  );
}
