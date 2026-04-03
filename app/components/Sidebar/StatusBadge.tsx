"use client";

import { useEffect, useState } from "react";

const statusList = [
  "Membangun Hal Keren",
  "Terbuka untuk Bekerja",
  "Belajar Hal Baru",
  "Bersemangat untuk Berkolaborasi",
  "Mencari Tantangan Baru",
];

export default function StatusBadge() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % statusList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-[var(--border)] rounded-full px-4 py-2 flex items-center gap-2 overflow-hidden">
      <span className="w-3 h-3 rounded-full bg-[var(--accent)] shrink-0 animate-pulse" />
      <span
        key={index}
        className="text-[var(--accent)] text-xs font-medium animate-fade-in whitespace-nowrap"
      >
        {statusList[index]}
      </span>
    </div>
  );
}