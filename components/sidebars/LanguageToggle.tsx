"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const languages = [
  { 
    locale: "en", 
    label: "EN", 
    key: "English" 
  },
  { 
    locale: "id", 
    label: "ID", 
    key: "Bahasa Indonesia" 
  },
];

export default function LanguageToggle() {
  const locale = useLocale(); //locale default/aktif
  const router = useRouter(); //dari next-intl i18
  const pathname = usePathname(); //dari next-intl i18n

  const handleSwitch = (newLocale: string) => {
    if (newLocale !== locale) {
      localStorage.setItem("locale", newLocale);
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className="bg-[var(--bg-secondary)] rounded-full py-1 px-2 flex gap-2 items-center border border-[var(--border)]">
      {languages.map(({ locale: lang, label, key }) => (
        <div key={lang} className="relative group">
          <button
            onClick={() => handleSwitch(lang)}
            className={`p-2 rounded-full text-xs font-semibold transition-all duration-200 ease-out transform cursor-pointer ${
              locale === lang
                ? "bg-[var(--accent)] text-[var(--accent-text)]"
                : "text-[var(--text-secondary)] hover:scale-115"
            }`}
          >
            {label}
          </button>

          {/* Tooltip */}
          <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-2 py-1 rounded-lg text-xs whitespace-nowrap bg-[var(--text-main)] text-[var(--bg-main)] opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-150 shadow-md">
            {key}

            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--text-main)]" />
          </div>
        </div>
      ))}
    </div>
  );
}