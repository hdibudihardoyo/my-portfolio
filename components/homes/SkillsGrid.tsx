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
  { name: "Node.js", category: ["all", "main", "backend"], class: "tag-node", iconName: "nodejs" },
  { name: "Express.js", category: ["all", "backend"], class: "tag-node", iconName: "expressjs" },
  { name: "PostgreSQL", category: ["all", "database"], class: "tag-ts", iconName: "postgresql" },
  { name: "MongoDB", category: ["all", "database"], class: "tag-js", iconName: "mongodb" },
  { name: "Git", category: ["all", "tools"], class: "tag-tailwind", iconName: "git" },
  { name: "Docker", category: ["all", "tools"], class: "tag-next", iconName: "docker" },
  { name: "Kotlin", category: ["all", "mobile"], class: "tag-js", iconName: "kotlin" },
  { name: "Android", category: ["all", "mobile"], class: "tag-js", iconName: "android" },
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
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all border ${activeCategory === cat.id
                ? "bg-[var(--accent)] text-[var(--accent-text)] border-[var(--accent)]"
                : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
              }`}
          >
            {t(cat.label)}
            {cat.id === "all" && <span className="ml-1.5 opacity-60">{skills.length}</span>}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-3">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center justify-center p-1.5 rounded-xl transition-all hover:scale-110 duration-300 ${skill.class}`}
            title={skill.name}
          >
            {/* @ts-ignore -- Tech icons monochromatic ones need inversion in dark mode */}
            <StackIcon
              name={skill.iconName}
              className={`w-7 h-7 flex-shrink-0 ${["nextjs2", "github", "prisma", "framer", "expressjs"].includes(skill.iconName) ? (theme === 'dark' ? 'invert' : '') : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
