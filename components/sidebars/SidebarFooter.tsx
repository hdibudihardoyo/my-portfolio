import { useTranslations } from "next-intl";

export default function SidebarFooter() {
  const t = useTranslations("Footer")
  return (
    <div className="max-w-[250px] mx-auto text-center text-[var(--text-secondary)]">
      <p className="text-xs">{t("copyright")}</p>
      <p className="text-xs">
        {t("right")}
      </p>
    </div>
  );
}
