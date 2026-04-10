"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "../MobileHeader";

export default function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-[var(--bg-secondary)] overflow-hidden transition-all duration-500 lg:flex-row flex-col">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <MobileHeader />
        <main className="flex-1 overflow-y-auto w-full bg-[var(--bg-main)] text-sm leading-relaxed py-10 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
