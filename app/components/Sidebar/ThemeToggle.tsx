"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted)
    return <div className="h-9 w-24 rounded-full bg-[var(--bg-secondary)]" />;

  const buttons = [
    {
      key: "light",
      label: "Light mode",
      icon: <Sun className="w-3.5 h-3.5" />,
      activeStyle: "bg-[var(--accent)] text-[var(--accent-text)]",
    },
    {
      key: "dark",
      label: "Dark mode",
      icon: <Moon className="w-3.5 h-3.5" />,
      activeStyle: "bg-[var(--accent)] text-[var(--accent-text)]",
    },
    {
      key: "valentine",
      label: "Valentine mode",
      icon: <Heart className="w-3.5 h-3.5" />,
      activeStyle: "bg-[var(--accent)] text-[var(--accent-text)]",
    },
  ];

  return (
    <div className="bg-[var(--bg-secondary)] rounded-full py-1 px-2 flex gap-1 items-center border border-[var(--border)]">
      {buttons.map(({ key, label, icon, activeStyle }) => (
        <div key={key} className="relative group">
          <button
            aria-label={label}
            onClick={() => setTheme(key)}
            className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 ease-out transform cursor-pointer ${
              theme === key
                ? activeStyle
                : "text-[var(--text-secondary)] hover:scale-125"
            }`}
          >
            {icon}
          </button>

          {/* Tooltip */}
          <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-lg text-xs whitespace-nowrap bg-[var(--text-main)] text-[var(--bg-main)] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            {label}
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--text-main)]" />
          </div>
        </div>
      ))}
    </div>
  );
}
