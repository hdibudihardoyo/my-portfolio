import type { LucideIcon } from "lucide-react";
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
} from "lucide-react";

export type ProjectType = "web" | "mobile" | "other";

export type ProjectCategory = "personal" | "internship" | "freelance";

export type AchievementCategory =
  | "web"
  | "database"
  | "network"
  | "data science"
  | "programming";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "tools";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
  repo?: string;
  type: ProjectType;
  category: ProjectCategory;
};

export type Skill = {
  name: string;
  category: SkillCategory;
};

export type AchievementItem = {
  title: string;
  year: string;
  icon: string;
  image?: string;
  file?: string;
  category: AchievementCategory;
};

export type NavLink = {
  titleKey: string;
  url: string;
  icon: LucideIcon;
};

export type ProfileData = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  grade: string;
  logo?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  logo?: string;
  points: string[];
};

export type GuestbookEntry = {
  author: string;
  message: string;
  date: string;
};

export const navLinks: NavLink[] = [
  { titleKey: "nav.dashboard", url: "/", icon: LayoutDashboard },
  { titleKey: "nav.about", url: "/about", icon: Code2 },
  { titleKey: "nav.projects", url: "/projects", icon: Boxes },
  { titleKey: "nav.achievements", url: "/achievements", icon: Trophy },
  { titleKey: "nav.contact", url: "/contact", icon: Mail },
  { titleKey: "nav.guestbook", url: "/guestbook", icon: Rocket },
];

export const achievementIcons: Record<string, LucideIcon> = {
  trophy: Trophy,
  award: Award,
  graduation: GraduationCap,
  rocket: Rocket,
  command: Command,
  pen: PenTool,
  code: Code2,
};

export const socials = [
  {
    label: "GitHub",
    value: "github.com/hdibudihardoyo",
    url: "https://github.com/hdibudihardoyo",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hdibudihardoyo",
    url: "https://www.linkedin.com/in/hdibudihardoyo",
  },
  {
    label: "Instagram",
    value: "instagram.com/hdibudihardoyo",
    url: "https://www.instagram.com/hdibudihardoyo",
  },
  {
    label: "Email",
    value: "hdibudihardoyo@gmail.com",
    url: "mailto:hdibudihardoyo@gmail.com",
  },
];

export const skillCategories: SkillCategory[] = [
  "frontend",
  "backend",
  "mobile",
  "database",
  "tools",
];

export const skills: Skill[] = [
  { name: "TypeScript", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Next.js", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Shadcn UI", category: "frontend" },
  { name: "NextAuth.js", category: "frontend" },
  { name: "TanStack", category: "frontend" },
  { name: "Axios", category: "frontend" },
  { name: "Zod", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Express.js", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "PostgreSql", category: "database" },
  { name: "MySql", category: "database" },
  { name: "Firebase", category: "database" },
  { name: "Supabase", category: "database" },
  { name: "Docker", category: "tools" },
  { name: "Swagger", category: "tools" },
  { name: "Jira", category: "tools" },
  { name: "Slack", category: "tools" },
  { name: "Npm", category: "tools" },
  { name: "Github", category: "tools" },
  { name: "React Native", category: "mobile" },
  { name: "Flutter", category: "mobile" },
];

export const projectTypes: ProjectType[] = ["web", "mobile", "other"];

export const projectCategories: ProjectCategory[] = [
  "personal",
  "internship",
  "freelance",
];

export const achievementCategories: AchievementCategory[] = [
  "web",
  "database",
  "network",
  "data science",
  "programming",
];
