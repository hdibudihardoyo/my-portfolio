"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Zap, Heart, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({ compact = false, variant = "row" }: { compact?: boolean; variant?: "row" | "dropdown" }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = () => setIsOpen(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  if (!mounted)
    return <div className={`${compact ? "h-7 w-8" : "h-9 w-40"} rounded-full bg-[var(--bg-secondary)]`} />;

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

  const activeTheme = buttons.find((b) => b.key === theme) || buttons[1];

  if (variant === "dropdown") {
    return (
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-9 h-9 rounded-full flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 shadow-sm ${isOpen ? "ring-2 ring-[var(--accent)]/20" : ""}`}
        >
          {activeTheme.icon}
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-36 bg-[var(--bg-main)]/90 backdrop-blur-xl border border-[var(--border)] rounded-2xl shadow-2xl p-1.5 animate-in fade-in zoom-in slide-in-from-top-2 duration-200 z-50">
            {buttons.map((b) => (
              <button
                key={b.key}
                onClick={() => {
                  setTheme(b.key);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold transition-all ${theme === b.key
                  ? "bg-[var(--accent)] text-[var(--accent-text)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
                  }`}
              >
                {b.icon}
                <span>{b.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-[var(--bg-secondary)] rounded-full border border-[var(--border)] w-fit mx-auto ${compact ? "px-1.5 py-1" : "px-2 py-1"}`}>
      <div className={`flex items-center ${compact ? "gap-1.5" : "gap-2"}`}>
        {buttons.map(({ key, label, icon }) => (
          <div key={key} className="relative group">
            <button
              aria-label={label}
              onClick={() => setTheme(key)}
              className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out cursor-pointer ${compact ? "w-8.5 h-8.5" : "w-8.5 h-8.5"} ${theme === key
                ? "bg-[var(--accent)] text-[var(--accent-text)] scale-110 shadow-sm"
                : "text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-main)]/50"
                }`}
            >
              <div className={`${compact ? "w-4 h-4" : "w-4 h-4"} flex items-center justify-center`}>
                {icon}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
