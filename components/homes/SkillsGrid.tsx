"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import StackIcon from "tech-stack-icons";

const categories = [
  { id: "all", label: "skills_all" },
  { id: "main", label: "skills_main" },
  { id: "frontend", label: "skills_frontend" },
  { id: "backend", label: "skills_backend" },
  { id: "mobile", label: "skills_mobile" },
  { id: "database", label: "skills_database" },
  { id: "tools", label: "skills_tools" },
];

const skills = [
  { name: "HTML5", category: ["all", "frontend"], class: "tag-html", iconName: "html5" },
  { name: "CSS3", category: ["all", "frontend"], class: "tag-css", iconName: "css3" },
  { name: "JavaScript", category: ["all", "main", "frontend", "backend"], class: "tag-js", iconName: "js" },
  { name: "TypeScript", category: ["all", "main", "frontend", "backend"], class: "tag-ts", iconName: "typescript" },
  { name: "React.js", category: ["all", "main", "frontend"], class: "tag-react", iconName: "react" },
  { name: "Next.js", category: ["all", "main", "frontend"], class: "tag-next", iconName: "nextjs2" },
  { name: "Tailwind", category: ["all", "frontend"], class: "tag-tailwind", iconName: "tailwindcss" },
  { name: "Bootstrap", category: ["all", "frontend"], class: "tag-css", iconName: "bootstrap5" },
  { name: "Node.js", category: ["all", "main", "backend"], class: "tag-node", iconName: "nodejs" },
  { name: "Express.js", category: ["all", "backend"], class: "tag-node", iconName: "expressjs" },
  { name: "PHP", category: ["all", "backend"], class: "tag-html", iconName: "php" },
  { name: "Laravel", category: ["all", "backend"], class: "tag-html", iconName: "laravel" },
  { name: "PostgreSQL", category: ["all", "database"], class: "tag-ts", iconName: "postgresql" },
  { name: "MongoDB", category: ["all", "database"], class: "tag-js", iconName: "mongodb" },
  { name: "Firebase", category: ["all", "database"], class: "tag-html", iconName: "firebase" },
  { name: "Git", category: ["all", "tools"], class: "tag-tailwind", iconName: "git" },
  { name: "GitHub", category: ["all", "tools"], class: "tag-next", iconName: "github" },
  { name: "Docker", category: ["all", "tools"], class: "tag-next", iconName: "docker" },
  { name: "Slack", category: ["all", "tools"], class: "tag-css", iconName: "slack" },
  { name: "Figma", category: ["all", "tools"], class: "tag-html", iconName: "figma" },
];

export default function SkillsGrid() {
  const t = useTranslations("Home");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => setMounted(true), []);

  const filteredSkills = skills.filter((skill) =>
    skill.category.includes(activeCategory)
  );

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      {/* Skills Grid - Unified */}
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`group relative flex items-center justify-center p-2.5 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border)] transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[var(--accent)]/15 hover:border-[var(--accent)]/40 cursor-default`}
            title={skill.name}
          >
            {/* Hover Tooltip/Label */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[var(--bg-main)] border border-[var(--border)] rounded-lg text-[7px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl z-10">
              {skill.name}
            </div>

            {/* @ts-ignore -- Tech icons monochromatic ones need inversion in dark mode */}
            <StackIcon
              name={skill.iconName}
              className={`w-7 h-7 flex-shrink-0 transition-all duration-500 grayscale group-hover:grayscale-0 ${["nextjs2", "github", "prisma", "framer", "expressjs"].includes(skill.iconName) ? (theme === 'dark' ? 'invert' : '') : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
