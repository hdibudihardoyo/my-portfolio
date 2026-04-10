import { redirect } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export default async function IndexPage() {
  const locale = await getLocale();
  redirect({ href: "/home", locale });
}
