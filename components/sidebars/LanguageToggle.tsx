"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  { locale: "en", flag: "🇺🇸" },
  { locale: "id", flag: "🇮🇩" },
];

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className="bg-[var(--bg-secondary)] rounded-full p-1 flex w-full gap-3 justify-around items-center border border-[var(--border)]">
      {languages.map(({ locale: lang, flag }) => (
        <button
          key={lang}
          onClick={() => handleSwitch(lang)}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${locale === lang
            ? "bg-[var(--accent)] scale-110"
            : "hover:bg-[var(--bg-main)]/50 opacity-50 hover:opacity-100"
            }`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}