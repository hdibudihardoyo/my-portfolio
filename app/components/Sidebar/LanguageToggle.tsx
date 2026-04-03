"use client";

import { useState } from "react";

const languages = [
  { code: "US", label: "EN" },
  { code: "ID", label: "ID" },
];

export default function LanguageToggle() {
  const [active, setActive] = useState("ID");

  return (
    <div className="bg-[#1c1c1c] rounded-full px-2 py-1 flex gap-1 items-center">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setActive(lang.code)}
          className={`px-2.5 py-1 rounded-full text-xs transition-all duration-200 ${
            active === lang.code
              ? "bg-[#d4a017] text-[#111] font-semibold"
              : "text-[#666] hover:text-white"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}