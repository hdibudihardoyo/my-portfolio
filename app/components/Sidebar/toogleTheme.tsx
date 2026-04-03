"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-24 rounded-full bg-[#1c1c1c]" />;

  const buttons = [
    {
      key: "light",
      label: "Switch to light mode",
      icon: <Sun className="w-3.5 h-3.5" />,
      activeStyle: "bg-[#d4a017] text-[#111]",
    },
    {
      key: "dark",
      label: "Switch to dark mode",
      icon: <Moon className="w-3.5 h-3.5" />,
      activeStyle: "bg-[#d4a017] text-[#111]",
    },
    {
      key: "valentine",
      label: "Switch to valentine mode",
      icon: <Heart className="w-3.5 h-3.5" />,
      activeStyle: "bg-[#e75480] text-white",
    },
  ];

  return (
    <div className="bg-[#1c1c1c] rounded-full px-2 py-1 flex gap-1 items-center">
      {buttons.map(({ key, label, icon, activeStyle }) => (
        <button
          key={key}
          aria-label={label}
          onClick={() => setTheme(key)}
          className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${
            theme === key ? activeStyle : "text-[#666] hover:text-white"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
