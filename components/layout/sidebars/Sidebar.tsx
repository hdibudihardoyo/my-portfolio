"use client";

import SidebarProfile from "./SidebarProfile";
import SidebarControls from "./SidebarControls";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="fixed lg:sticky top-0 left-0 bg-[var(--bg-main)]/80 backdrop-blur-3xl w-64 h-screen hidden lg:flex flex-col shrink-0 py-8 overflow-y-auto border-r border-[var(--border)]/50 transition-all duration-500 ease-in-out z-50 shadow-[1px_0_0_0_rgba(var(--border-rgb),0.3),10px_0_40px_-15px_rgba(0,0,0,0.15)] bg-gradient-to-b from-transparent via-[var(--accent)]/[0.02] to-transparent">
      {/* Profile Section */}
      <div>
        <SidebarProfile />
      </div>

      {/* Navigation Section */}
      <div className="flex-1 w-full mb-5">
        <SidebarNav />
      </div>

      {/* Controls Section */}
      <div className="mb-5">
        <SidebarControls />
      </div>

      {/* Footer Section */}
      <div className="mt-auto pt-2 border-t border-[var(--border)]/50 mx-8">
        <SidebarFooter />
      </div>
    </aside>
  );
}