"use client";

import { useTranslations } from "next-intl";

export default function TalkPage() {
  const t = useTranslations("Nav");

  return (
    <div className="max-w-5xl mx-auto min-h-[60vh] flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <div className="text-center space-y-4">
        {/* <h1 className="text-3xl font-black text-[var(--text-main)] uppercase tracking-widest">
          {t("talk")}
        </h1>
        <div className="w-20 h-1.5 bg-[var(--accent)] rounded-full mx-auto shadow-[0_0_15px_var(--accent)]/30"></div> */}
        <p className="text-[var(--text-secondary)] text-sm font-black uppercase opacity-80 pt-4">
          Halaman ini masih dalam perbaikan
        </p>
      </div>
    </div>
  );
}
