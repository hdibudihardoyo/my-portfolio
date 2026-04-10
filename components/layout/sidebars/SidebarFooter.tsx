"use client";

import { useTranslations } from "next-intl";

export default function SidebarFooter() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <div className="pb-8 px-4 text-[var(--text-muted)] opacity-60 hover:opacity-100 transition-opacity duration-300">
      <div className="space-y-1">
        <p className="text-[10px] font-black uppercase tracking-[0.2em]">
          {t("copyright")} © {currentYear}
        </p>
        <p className="text-[10px] font-medium leading-tight tracking-tight">
          {t("right")}
        </p>
      </div>
    </div>
  );
}
