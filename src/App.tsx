import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { AppHeader } from "@/components/layout/app-header"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth"
import { SidebarInset, SidebarProvider } from "@/ui/sidebar"

const AboutPage = lazy(() =>
  import("@/pages/about").then((m) => ({ default: m.AboutPage })),
)
const AchievementsPage = lazy(() =>
  import("@/pages/achievements").then((m) => ({ default: m.AchievementsPage })),
)
const ContactPage = lazy(() =>
  import("@/pages/contact").then((m) => ({ default: m.ContactPage })),
)
const HomePage = lazy(() =>
  import("@/pages/home").then((m) => ({ default: m.HomePage })),
)
const GuestbookPage = lazy(() =>
  import("@/pages/guestbook").then((m) => ({ default: m.GuestbookPage })),
)
const ProjectsPage = lazy(() =>
  import("@/pages/projects").then((m) => ({ default: m.ProjectsPage })),
)

function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <div className="border-2 border-foreground bg-card p-8 shadow-brutal">
      <p className="font-mono text-5xl font-black">404</p>
      <p className="mt-2 text-sm text-muted-foreground">{t("common.notFound")}</p>
    </div>
  )
}

function PageFallback() {
  const { t } = useTranslation()
  return (
    <div className="border-2 border-dashed border-foreground bg-card p-8 shadow-brutal">
      <p className="animate-pulse font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
        {t("common.loading")}
      </p>
    </div>
  )
}

function Shell() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-4 md:p-6">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/guestbook" element={<GuestbookPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Shell />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}