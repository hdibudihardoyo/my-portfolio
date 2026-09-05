import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppHeader } from "@/components/layout/app-header"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
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
const CreationsPage = lazy(() =>
  import("@/pages/creations").then((m) => ({ default: m.CreationsPage })),
)
const DashboardPage = lazy(() =>
  import("@/pages/dashboard").then((m) => ({ default: m.DashboardPage })),
)
const GuestbookPage = lazy(() =>
  import("@/pages/guestbook").then((m) => ({ default: m.GuestbookPage })),
)
const LinksPage = lazy(() =>
  import("@/pages/links").then((m) => ({ default: m.LinksPage })),
)
const ProjectsPage = lazy(() =>
  import("@/pages/projects").then((m) => ({ default: m.ProjectsPage })),
)

function NotFoundPage() {
  return (
    <div className="border-2 border-foreground bg-card p-8 shadow-brutal">
      <p className="font-mono text-5xl font-black">404</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Halaman tidak ditemukan.
      </p>
    </div>
  )
}

function PageFallback() {
  return (
    <div className="border-2 border-dashed border-foreground bg-card p-8 shadow-brutal">
      <p className="animate-pulse font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
        memuat…
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
              <Route path="/" element={<DashboardPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/creations" element={<CreationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/links" element={<LinksPage />} />
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
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </ThemeProvider>
  )
}