import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function SidebarProfile() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-24 h-24 rounded-full border border-[var(--border)] overflow-hidden">
        <Image
          src="/avatar.png"
          alt="Hadi Budi Hardoyo"
          width={96}
          height={96}
          priority
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-1">
        <span className="font-medium text-base text-[var(--text-main)]">
          Hadi Budi Hardoyo
        </span>
        <BadgeCheck className="w-5 h-5 shrink-0 text-[var(--accent)]" />
      </div>
      <StatusBadge />
    </div>
  );
}