"use client";

import { useEffect, useState } from "react";

const statusList = [
  "Membangun Hal Keren",
  "Terbuka untuk Bekerja",
  "Belajar Hal Baru",
  "Open Source Enthusiast",
  "Siap Berkolaborasi",
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
    <div className="border border-[#4a4a20] rounded-full px-4 py-1.5 flex items-center gap-2 overflow-hidden">
      <span className="w-2 h-2 rounded-full bg-[#d4a017] shrink-0 animate-pulse" />
      <span
        key={index}
        className="text-[#d4a017] text-xs font-medium animate-fade-in whitespace-nowrap"
      >
        {statusList[index]}
      </span>
    </div>
  );
}