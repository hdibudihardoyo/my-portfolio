import { ThemeProvider } from "next-themes";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark", "valentine"]}
        >
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 bg-white dark:bg-[#0f0f0f] valentine:bg-[#fff0f5]">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
