"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState, useEffect, useTransition } from "react";
import Cookies from "js-cookie";

const languages = [
  { locale: "en", flag: "🇺🇸", label: "English" },
  { locale: "id", flag: "🇮🇩", label: "Indonesia" },
];

export default function LanguageToggle({ compact = false, variant = "row" }: { compact?: boolean; variant?: "row" | "dropdown" }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = () => setIsOpen(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  const [isPending, startTransition] = useTransition();

  const handleSwitch = (newLocale: string) => {
    if (newLocale !== locale) {
      setIsOpen(false);
      Cookies.set("NEXT_LOCALE", newLocale, { path: "/" });
      startTransition(() => {
        router.refresh();
      });
    }
  };

  const activeLang = languages.find((l) => l.locale === locale) || languages[0];

  if (variant === "dropdown") {
    return (
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-9 h-9 rounded-full flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border)] text-lg hover:border-[var(--accent)] transition-all duration-300 shadow-sm ${isOpen ? "ring-2 ring-[var(--accent)]/20" : ""}`}
        >
          {activeLang.flag}
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-36 bg-[var(--bg-main)]/90 backdrop-blur-xl border border-[var(--border)] rounded-2xl shadow-2xl p-1.5 animate-in fade-in zoom-in slide-in-from-top-2 duration-200 z-50">
            {languages.map((l) => (
              <button
                key={l.locale}
                onClick={() => handleSwitch(l.locale)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold transition-all ${locale === l.locale
                  ? "bg-[var(--accent)] text-[var(--accent-text)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
                  }`}
              >
                <span className="text-base">{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-[var(--bg-secondary)] rounded-full flex items-center border border-[var(--border)] ${compact ? "p-1 gap-1" : "p-1 w-full gap-1.5"}`}>
      {languages.map(({ locale: lang, flag }) => (
        <button
          key={lang}
          onClick={() => handleSwitch(lang)}
          className={`rounded-full flex items-center justify-center transition-all duration-300 ${compact ? "w-8.5 h-8.5 text-base" : "w-9 h-9 text-lg"} ${locale === lang
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
