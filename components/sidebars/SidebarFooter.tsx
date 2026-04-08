"use client";

import { useTranslations } from "next-intl";

export default function SidebarFooter() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="pb-8 px-4 text-[var(--text-muted)] opacity-60 hover:opacity-100 transition-opacity duration-300">
      <div className="w-full h-px bg-[var(--border)] mb-6"></div>
      <div className="space-y-1">
        <p className="text-[10px] font-black uppercase tracking-[0.2em]">
          COPYRIGHT © {currentYear}
        </p>
        <p className="text-[10px] font-medium leading-tight tracking-tight">
          Hadi Budi Hardoyo. <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
