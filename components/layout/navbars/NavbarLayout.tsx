"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import MobileHeader from "../MobileHeader";

export default function NavbarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-secondary)] transition-all duration-500 overflow-x-hidden">
      {/* Top Navbar Navigation */}
      <Navbar />
      
      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <MobileHeader />
        <main className="flex-1 w-full bg-[var(--bg-main)] text-sm leading-relaxed py-10 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
