import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Sidebar from "@/components/sidebars/Sidebar";
import MobileHeader from "@/components/sidebars/MobileHeader";

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
        <div className="flex flex-col lg:flex-row h-screen bg-[var(--bg-secondary)] overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
            <MobileHeader />
            <main className="flex-1 overflow-y-auto w-full bg-[var(--bg-main)] text-sm leading-relaxed px-6 md:px-12 lg:px-15 py-10">
              {children}
            </main>
          </div>
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

