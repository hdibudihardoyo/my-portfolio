"use client";

import { useState } from "react";

const languages = [
  { code: "US", label: "EN", key: "English" },
  { code: "ID", label: "ID", key: "Bahasa Indonesia" },
];

export default function LanguageToggle() {
  const [active, setActive] = useState("ID");

  return (
    <div className="bg-[var(--bg-secondary)] rounded-full py-1 px-2 flex gap-2 items-center border border-[var(--border)]">
      {languages.map(({ code, label, key }) => (
        <div key={code} className="relative group">
          <button
            onClick={() => setActive(code)}
            className={`p-2 rounded-full text-xs font-semibold transition-all duration-200 ease-out transform cursor-pointer ${
              active === code
                ? "bg-[var(--accent)] text-[var(--accent-text)]"
                : "text-[var(--text-secondary)] hover:scale-125"
            }`}
          >
            {label}
          </button>

          {/* Tooltip */}
          <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-2 py-1 rounded-lg text-xs whitespace-nowrap bg-[var(--text-main)] text-[var(--bg-main)] opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-150 shadow-md">
            {key}

            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--text-main)]" />
          </div>
        </div>
      ))}
    </div>
  );
}
