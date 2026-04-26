import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
  let requested = await requestLocale;

  if (!requested) {
    const cookieStore = await cookies();
    requested = cookieStore.get("NEXT_LOCALE")?.value;
  }

  if (!requested) {
    const headerStore = await headers();
    const acceptLang = headerStore.get("accept-language");
    if (acceptLang?.toLowerCase().includes("id")) requested = "id";
    else if (acceptLang?.toLowerCase().includes("en")) requested = "en";
  }

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});