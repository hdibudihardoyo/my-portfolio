"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import SidebarProfile from "./SidebarProfile";
import SidebarNav from "./SidebarNav";
import SidebarControls from "./SidebarControls";
import SidebarFooter from "./SidebarFooter";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const tStatus = useTranslations("Status");

  return (
    <div className="lg:hidden w-full h-16 bg-[var(--bg-main)] border-b border-[var(--border)] px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs uppercase">
          {tStatus("name").charAt(0)}
        </div>
        <span className="text-sm font-bold text-[var(--text-main)]">{tStatus("name")}</span>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-main)]"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-[var(--bg-main)] z-50 border-l border-[var(--border)] overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col py-8">
            <div className="px-6 mb-6">
              <SidebarProfile />
            </div>
            
            <div className="mb-8">
              <SidebarControls />
            </div>

            <div className="flex-1">
              <SidebarNav />
            </div>

            <div className="mt-auto px-6 py-4">
              <SidebarFooter />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
