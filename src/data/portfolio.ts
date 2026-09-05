import type { LucideIcon } from "lucide-react"
import {
  Award,
  Boxes,
  Code2,
  Command,
  GraduationCap,
  LayoutDashboard,
  Mail,
  PenTool,
  Rocket,
  Trophy,
} from "lucide-react"

export type Project = {
  title: string
  description: string
  tags: string[]
  url?: string
  repo?: string
  year: string
}

export type Skill = {
  name: string
  level: number
}

export type Achievement = {
  title: string
  year: string
  icon: LucideIcon
}

export type NavGroup = {
  labelKey: string
  links: { titleKey: string; url: string; icon: LucideIcon }[]
}

export const navGroups: NavGroup[] = [
  {
    labelKey: "nav.main",
    links: [
      { titleKey: "nav.dashboard", url: "/", icon: LayoutDashboard },
      { titleKey: "nav.about", url: "/about", icon: Code2 },
    ],
  },
  {
    labelKey: "nav.karya",
    links: [
      { titleKey: "nav.projects", url: "/projects", icon: Boxes },
      { titleKey: "nav.achievements", url: "/achievements", icon: Trophy },
      { titleKey: "nav.creations", url: "/creations", icon: PenTool },
    ],
  },
  {
    labelKey: "nav.lainnya",
    links: [
      { titleKey: "nav.contact", url: "/contact", icon: Mail },
      { titleKey: "nav.links", url: "/links", icon: Command },
      { titleKey: "nav.guestbook", url: "/guestbook", icon: Rocket },
    ],
  },
]

export const profile = {
  name: "Nama Kamu",
  role: "Full-Stack Developer",
  tagline: "Membangun web cepat & bisa diandalkan dengan gaya berani.",
  bio: "Halo! Saya seorang pengembang yang suka membuat antarmuka tajam, cepat, dan menyenangkan — plus sedikit sentuhan main-main di sisi backend.",
  stats: [
    { labelKey: "stats.projects", value: "12+" },
    { labelKey: "stats.years", value: "3+" },
    { labelKey: "stats.tech", value: "8" },
    { labelKey: "stats.oss", value: "40+" },
  ],
  education: [
    {
      degree: "S1 Informatika",
      school: "Universitas Contoh",
      year: "2019 - 2023",
    },
  ],
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Studio Contoh",
      period: "2023 - Sekarang",
      points: [
        "Membangun aplikasi web interior dengan React, TypeScript, dan Tailwind.",
        "Turut merancang arsitektur API dan pipeline CI yang ringkas.",
      ],
    },
  ],
  socials: [
    { label: "GitHub", value: "github.com/username", url: "https://github.com/" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/username",
      url: "https://www.linkedin.com/",
    },
    { label: "Email", value: "halo@example.com", url: "mailto:halo@example.com" },
  ],
}

export const skills: Skill[] = [
  { name: "TypeScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "PostgreSQL", level: 70 },
  { name: "Docker", level: 65 },
]

export const projects: Project[] = [
  {
    title: "Aplikasi Kasir Brutal",
    description:
      "Panel kasir real-time dengan mode offline, sinkron cloud, dan UI beraksen tajam.",
    tags: ["React", "TypeScript", "Tailwind", "WebSocket"],
    url: "https://example.com",
    repo: "https://github.com/",
    year: "2024",
  },
  {
    title: "Landing Kit",
    description:
      "Kumpulan blok halaman beranimasi ringan, siap di-snapshot ulang untuk kampanye.",
    tags: ["Vite", "Framer Motion", "MDX"],
    url: "https://example.com",
    repo: "https://github.com/",
    year: "2023",
  },
  {
    title: "CLI Auto-Jurnal",
    description:
      "CLI untuk mengotomatiskan catatan kerja harian dan tag waktu dari git log.",
    tags: ["Node.js", "Commander", "SQLite"],
    repo: "https://github.com/",
    year: "2023",
  },
]

export const achievements: Achievement[] = [
  {
    title: "Pemenang Hackathon Nasional",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "Juara Lomba Desain UI",
    year: "2023",
    icon: Award,
  },
  {
    title: "Top Contributor GitHub",
    year: "2023",
    icon: GraduationCap,
  },
]

export const creations = [
  {
    title: "Tool Generator",
    description: "Alat kecil untuk membuat data uji dan placeholder.",
    url: "https://github.com/",
  },
]

export const guestbookMessages = [
  {
    author: "Nadia",
    message: "Suka banget sama estetik brutalism-nya. Keren!",
    date: "2026-08-20",
  },
  {
    author: "Rizky",
    message: "Terima kasih sudah berbagi. Menginspirasi.",
    date: "2026-07-11",
  },
]