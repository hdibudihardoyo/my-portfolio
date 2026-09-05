import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: string
  subtitle?: string
  className?: string
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <header className={cn("mb-6 border-b-2 border-foreground pb-4", className)}>
      <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}
    </header>
  )
}