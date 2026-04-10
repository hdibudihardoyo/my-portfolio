"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import MobileHeader from "../MobileHeader";

export default function NavbarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-[var(--bg-secondary)] overflow-hidden transition-all duration-500">
      {/* Top Navbar Navigation */}
      <Navbar />
      
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
