import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function SidebarProfile() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-24 h-24 rounded-full border-2 border-[#333] overflow-hidden">
        <Image
          src="/avatar.png"
          alt="Hadi Budi Hardoyo"
          width={85}
          height={85}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center gap-1">
        <span className="font-medium text-base text-white">
          Hadi Budi Hardoyo
        </span>
        <BadgeCheck className="w-5 h-5 text-[#1d9bf0] shrink-0" />
      </div>
      <StatusBadge />
    </div>
  );
}
