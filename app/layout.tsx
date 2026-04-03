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
          <div className="flex h-screen ">
            <Sidebar />
            <main className="flex-1 p-6 lg:p-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
