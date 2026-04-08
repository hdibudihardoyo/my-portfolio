"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Zap, Heart, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted)
    return <div className="h-9 w-40 rounded-full bg-[var(--bg-secondary)]" />;

  const buttons = [
    {
      key: "light",
      label: "Light",
      icon: <Sun className="w-4 h-4" />,
    },
    {
      key: "dark",
      label: "Dark",
      icon: <Moon className="w-4 h-4" />,
    },
    {
      key: "valentine",
      label: "Valentine",
      icon: <Heart className="w-4 h-4" />,
    },
  ];

  return (
    <div className="bg-[var(--bg-secondary)] rounded-full px-2 py-1 border border-[var(--border)] w-fit mx-auto">
      <div className="flex items-center gap-2">
        {buttons.map(({ key, label, icon }) => (
          <div key={key} className="relative group">
            <button
              aria-label={label}
              onClick={() => setTheme(key)}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ease-out cursor-pointer ${theme === key
                ? "bg-[var(--accent)] text-[var(--accent-text)] scale-110"
                : "text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-main)]/50"
                }`}
            >
              {icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
