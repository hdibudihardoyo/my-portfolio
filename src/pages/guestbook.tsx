import { MessageSquarePlus, Send, User } from "lucide-react"
import type { FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { SiGoogle } from "react-icons/si"
import { PageHeader } from "@/components/page-header"
import { useAuth } from "@/lib/auth"
import { usePortfolioData } from "@/lib/use-portfolio-data"
import { Button } from "@/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Textarea } from "@/ui/textarea"

export function GuestbookPage() {
  const { t } = useTranslation()
  const { guestbook } = usePortfolioData()
  const { user, signIn } = useAuth()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!user) return
    const data = new FormData(event.currentTarget)
    const message = String(data.get("message") ?? "")
    const subject = encodeURIComponent(t("guestbook.subject", { name: user.name }))
    const body = encodeURIComponent(`${message}\n\n— ${user.name} (${user.email})`)
    window.location.href = `mailto:halo@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div>
      <PageHeader title={t("guestbook.title")} subtitle={t("guestbook.subtitle")} />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="border-2 border-foreground bg-card shadow-brutal lg:col-span-2">
          <CardHeader className="border-b-2 border-foreground">
            <CardTitle className="flex items-center gap-2 text-lg font-black uppercase tracking-tight">
              <MessageSquarePlus className="size-4" />
              {t("guestbook.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="flex items-center gap-2 border-2 border-foreground bg-background p-2 shadow-brutal">
                  {user.picture ? (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="size-8 border-2 border-foreground object-cover"
                    />
                  ) : (
                    <span className="flex size-8 items-center justify-center border-2 border-foreground bg-accent text-sm font-black text-accent-foreground">
                      {user.name.charAt(0)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{user.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t("guestbook.message")}
                  </span>
                  <Textarea
                    name="message"
                    required
                    placeholder={t("guestbook.placeholderMessage")}
                    className="min-h-24 border-2 border-foreground bg-background shadow-brutal focus-visible:bg-accent"
                  />
                </label>
                <Button
                  type="submit"
                  className="h-10 w-full border-2 border-foreground bg-primary font-bold text-primary-foreground shadow-brutal transition hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
                  data-icon="inline-end"
                >
                  {t("guestbook.send")}
                  <Send className="size-4" />
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-start gap-4 border-2 border-dashed border-foreground bg-background p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("guestbook.loginNote")}
                </p>
                <Button
                  variant="outline"
                  render={
                    <button
                      type="button"
                      onClick={signIn}
                      className="inline-flex h-10 w-full items-center justify-center gap-2 border-2 border-foreground bg-background px-4 text-xs font-bold uppercase tracking-wider text-foreground shadow-brutal transition hover:-translate-y-0.5 hover:bg-accent active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    />
                  }
                >
                  <SiGoogle className="size-4" />
                  {t("auth.login")}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="lg:col-span-3">
          <h2 className="mb-3 font-black uppercase tracking-tight">
            {t("guestbook.entries")}
          </h2>
          <div className="space-y-4">
            {guestbook.map((entry) => (
              <article
                key={`${entry.author}-${entry.date}`}
                className="flex gap-4 border-2 border-foreground bg-card p-4 shadow-brutal"
              >
                <div className="flex size-10 shrink-0 items-center justify-center border-2 border-foreground bg-accent font-black text-accent-foreground">
                  {entry.author.charAt(0)}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="flex items-center gap-1.5 font-bold">
                      <User className="size-3.5" />
                      {entry.author}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {entry.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed">{entry.message}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}