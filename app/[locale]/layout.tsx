import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Sidebar from "@/components/sidebars/Sidebar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={true}
        themes={["light", "dark", "valentine"]}
      >
        <div className="flex h-screen bg-[var(--bg-secondary)]">
          <div className="border-r border-[var(--border)] shrink-0">
            <Sidebar />
          </div>
          <main className="flex-1 overflow-y-auto p-6 bg-[var(--bg-main)]">{children}</main>
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

