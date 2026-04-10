"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/sidebars/Sidebar";
import MobileHeader from "@/components/sidebars/MobileHeader";
import Navbar from "@/components/sidebars/Navbar";
import { useLayout } from "@/components/sidebars/LayoutContext";

export default function MainLayoutClient({ children }: { children: ReactNode }) {
  const { layoutType } = useLayout();

  return (
    <div className={`flex h-screen bg-[var(--bg-secondary)] overflow-hidden transition-all duration-500 ${layoutType === "sidebar" ? "lg:flex-row flex-col" : "flex-col"}`}>
      {/* Sidebar/Navbar Selection */}
      {layoutType === "sidebar" ? <Sidebar /> : <Navbar />}
      
      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <MobileHeader />
        <main className={`flex-1 overflow-y-auto w-full bg-[var(--bg-main)] text-sm leading-relaxed py-10 transition-all duration-300 ${layoutType === "navbar" ? "lg:pt-10" : "lg:pt-10"}`}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
