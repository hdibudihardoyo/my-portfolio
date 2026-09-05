import { cn } from "cn"
import {
  Check,
  ChevronRight,
  MoreHorizontal,
  PanelLeft,
  X,
  type LucideIcon,
} from "lucide-react"

type IconName = string

type IconPlaceholderProps = {
  lucide?: IconName
  tabler?: IconName
  hugeicons?: IconName
  phosphor?: IconName
  remixicon?: IconName
  className?: string
}

const iconRegistry: Record<string, LucideIcon> = {
  PanelLeft,
  ChevronRight,
  MoreHorizontal,
  Check,
  X,
}

function toLucideName(name?: IconName) {
  if (!name) return ""
  return name.endsWith("Icon") ? name.slice(0, -4) : name
}

function IconPlaceholder({ lucide, className }: IconPlaceholderProps) {
  const name = toLucideName(lucide)
  const Icon = name ? iconRegistry[name] : undefined

  if (Icon) {
    return <Icon className={cn("size-4", className)} />
  }

  return (
    <svg
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width={18} height={18} x={3} y={3} rx={2} />
    </svg>
  )
}

export { IconPlaceholder }