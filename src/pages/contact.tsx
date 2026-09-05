import { Mail, Send } from "lucide-react"
import type { FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { profile } from "@/data/portfolio"
import { Button } from "@/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Input } from "@/ui/input"
import { Textarea } from "@/ui/textarea"

export function ContactPage() {
  const { t } = useTranslation()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "")
    const message = String(data.get("message") ?? "")
    const subject = encodeURIComponent(`[Portfolio] Pesan dari ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}`)
    window.location.href = `mailto:halo@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div>
      <PageHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="border-2 border-foreground bg-card shadow-brutal lg:col-span-3">
          <CardHeader className="border-b-2 border-foreground">
            <CardTitle className="flex items-center gap-2 text-lg font-black uppercase tracking-tight">
              <Send className="size-4" />
              {t("contact.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("contact.name")}
                </span>
                <Input
                  name="name"
                  required
                  placeholder="Contoh: Adi"
                  className="h-10 border-2 border-foreground bg-background shadow-brutal focus-visible:bg-accent"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("contact.email")}
                </span>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  className="h-10 border-2 border-foreground bg-background shadow-brutal focus-visible:bg-accent"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("contact.message")}
                </span>
                <Textarea
                  name="message"
                  required
                  placeholder="Halo, saya tertarik untuk…"
                  className="min-h-28 border-2 border-foreground bg-background shadow-brutal focus-visible:bg-accent"
                />
              </label>
              <Button
                type="submit"
                className="h-11 w-full border-2 border-foreground bg-primary font-bold text-primary-foreground shadow-brutal transition hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
                data-icon="inline-end"
              >
                {t("contact.send")}
                <Send className="size-4" />
              </Button>
              <p className="text-xs text-muted-foreground">{t("contact.note")}</p>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <Card className="border-2 border-foreground bg-card shadow-brutal">
            <CardHeader className="border-b-2 border-foreground">
              <CardTitle className="text-lg font-black uppercase tracking-tight">
                {t("contact.social")}
              </CardTitle>
              <CardDescription>{profile.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 p-4">
              {[...profile.socials, { label: "Email", value: "halo@example.com", url: "mailto:halo@example.com" }].map(
                (social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target={social.url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-center justify-between border-2 border-foreground bg-background px-3 py-2.5 shadow-brutal transition hover:-translate-y-0.5 hover:bg-accent"
                  >
                    <span className="text-sm font-bold">{social.label}</span>
                    <Mail className="size-4" />
                  </a>
                ),
              )}
            </CardContent>
          </Card>

          <div className="border-2 border-foreground bg-accent p-5 shadow-brutal">
            <p className="font-black uppercase leading-tight tracking-tight text-accent-foreground">
              {t("hero.role")}
            </p>
            <p className="mt-1 font-mono text-xs text-accent-foreground/80">
              {t("dash.ctaDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}