import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import MainLayoutClient from "@/components/layout/MainLayoutClient";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={poppins.variable}>
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            themes={["light", "dark", "valentine"]}
          >
            <MainLayoutClient>
              {children}
            </MainLayoutClient>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
