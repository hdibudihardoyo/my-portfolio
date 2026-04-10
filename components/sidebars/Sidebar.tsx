"use client";

import SidebarProfile from "./SidebarProfile";
import SidebarControls from "./SidebarControls";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="bg-[var(--bg-main)] w-72 h-screen hidden lg:flex flex-col shrink-0 py-8 overflow-y-auto border-r border-[var(--border)] transition-all duration-300 ease-in-out">
      {/* Profile Section */}
      <div className="mb-8">
        <SidebarProfile />
      </div>

      {/* Controls Section */}
      <div className="mb-8">
        <SidebarControls />
      </div>

      {/* Navigation Section */}
      <div className="flex-1 w-full">
        <SidebarNav />
      </div>

      {/* Footer Section */}
      <div className="mt-auto pt-6 border-t border-[var(--border)]/50 mx-8">
        <SidebarFooter />
      </div>
    </aside>
  );
}