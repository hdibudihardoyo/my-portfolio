"use client";

import { useTranslations } from "next-intl";

export default function TalkPage() {
  const t = useTranslations("Talk");

  return (
    <div className="max-w-5xl mx-auto min-h-[60vh] flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 px-6">
      <div className="text-center space-y-6">
        <div className="space-y-3">
          {/* <h1 className="text-3xl md:text-5xl font-black text-[var(--text-main)] uppercase tracking-widest">
            {t("title")}
          </h1>
          <div className="w-24 h-2 bg-[var(--accent)] rounded-full mx-auto shadow-[0_0_15px_var(--accent)]/30"></div> */}
        </div>


        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/5 border border-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-black uppercase tracking-widest animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          {t("maintenance")}
        </div>

      </div>
    </div>
  );
}
