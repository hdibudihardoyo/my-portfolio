"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  { locale: "en", flag: "🇺🇸" },
  { locale: "id", flag: "🇮🇩" },
];

export default function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className={`bg-[var(--bg-secondary)] rounded-full flex items-center border border-[var(--border)] ${compact ? "p-1 gap-1" : "p-1 w-full gap-1.5"}`}>
      {languages.map(({ locale: lang, flag }) => (
        <button
          key={lang}
          onClick={() => handleSwitch(lang)}
          className={`rounded-full flex items-center justify-center transition-all duration-300 ${compact ? "w-6 h-6 text-xs" : "w-9 h-9 text-lg"} ${locale === lang
            ? "bg-[var(--accent)] scale-110 shadow-sm"
            : "hover:bg-[var(--bg-main)]/50 opacity-50 hover:opacity-100"
            }`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}