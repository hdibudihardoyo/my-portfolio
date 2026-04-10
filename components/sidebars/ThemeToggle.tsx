"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Zap, Heart, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted)
    return <div className={`${compact ? "h-7 w-24" : "h-9 w-40"} rounded-full bg-[var(--bg-secondary)]`} />;

  const buttons = [
    {
      key: "light",
      label: "Light",
      icon: <Sun className={`${compact ? "w-3 h-3" : "w-4 h-4"}`} />,
    },
    {
      key: "dark",
      label: "Dark",
      icon: <Moon className={`${compact ? "w-3 h-3" : "w-4 h-4"}`} />,
    },
    {
      key: "valentine",
      label: "Valentine",
      icon: <Heart className={`${compact ? "w-3 h-3" : "w-4 h-4"}`} />,
    },
  ];

  return (
    <div className={`bg-[var(--bg-secondary)] rounded-full border border-[var(--border)] w-fit mx-auto ${compact ? "px-1.5 py-1" : "px-2 py-1"}`}>
      <div className={`flex items-center ${compact ? "gap-1.5" : "gap-2"}`}>
        {buttons.map(({ key, label, icon }) => (
          <div key={key} className="relative group">
            <button
              aria-label={label}
              onClick={() => setTheme(key)}
              className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out cursor-pointer ${compact ? "w-6 h-6" : "w-8 h-8"} ${theme === key
                ? "bg-[var(--accent)] text-[var(--accent-text)] scale-110 shadow-sm"
                : "text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-main)]/50"
                }`}
            >
              <div className={`${compact ? "w-3.5 h-3.5" : "w-4 h-4"} flex items-center justify-center`}>
                {icon}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
