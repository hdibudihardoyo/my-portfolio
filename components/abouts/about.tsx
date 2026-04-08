"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-[var(--text-main)]">
        {t("bio_title")}
      </h2>
      <p className="text-[var(--text-muted)] leading-relaxed">{t("bio_p1")}</p>
      <p className="text-[var(--text-muted)] leading-relaxed">{t("bio_p2")}</p>
    </section>
  );
}