"use client";

import SidebarProfile from "./SidebarProfile";
import SidebarControls from "./SidebarControls";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="var(--bg-sidebar) w-80 h-screen text-white flex flex-col shrink-0 py-6 px-4 overflow-y-auto gap-6">
      <SidebarProfile />
      <SidebarControls />
      <SidebarNav />
      <SidebarFooter />
    </aside>
  );
}