"use client";

import SidebarProfile from "./SidebarProfile";
import SidebarControls from "./SidebarControls";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="bg-[var(--bg-main)] w-72 h-screen hidden lg:flex flex-col shrink-0 py-6 overflow-y-auto border-r border-[var(--border)] transition-all duration-300 ease-in-out">
      <SidebarProfile />

      <div className="px-8 mt-2 mb-6 flex flex-col gap-3">
        <SidebarControls />
      </div>

      <div className="flex-1 w-full space-y-2">
        <SidebarNav />
      </div>

      <div className="mt-auto px-8 pt-4">
        <SidebarFooter />
      </div>
    </aside>
  );
}