import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import SidebarProfile from "./sidebars/SidebarProfile";
import SidebarNav from "./sidebars/SidebarNav";
import SidebarControls from "./sidebars/SidebarControls";
import SidebarFooter from "./sidebars/SidebarFooter";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const tStatus = useTranslations("Status");

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="lg:hidden w-full h-16 bg-[var(--bg-main)]/80 backdrop-blur-xl border-b border-[var(--border)] px-5 md:px-8 flex items-center justify-between sticky top-0 z-50 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[var(--accent)] flex items-center justify-center text-[var(--accent-text)] text-xs font-black shadow-lg shadow-[var(--accent)]/20 rotate-3">
            {tStatus("name").charAt(0)}
          </div>
          <div className="flex flex-col -space-y-1 mt-0.5">
            <span className="text-xs font-black tracking-tight text-[var(--text-main)] uppercase">{tStatus("name")}</span>
            <span className="text-[8px] font-extrabold text-[var(--text-secondary)] uppercase tracking-[0.2em] opacity-80">Portfolio</span>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-main)] transition-all duration-500 hover:scale-105 active:scale-95 ${isOpen ? "rotate-180" : ""}`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[60] transition-opacity duration-500 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />
      
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-[var(--bg-main)]/95 backdrop-blur-2xl z-[70] border-l border-[var(--border)] overflow-y-auto transition-transform duration-500 ease-out lg:hidden flex flex-col pt-10 pb-8 shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="px-8 mb-8 flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-widest text-[var(--text-secondary)] opacity-50">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="px-8 mb-10">
          <SidebarProfile />
        </div>
        
        <div className="flex-1 animate-in slide-in-from-right duration-700">
          <SidebarNav />
        </div>

        <div className="mb-10 animate-in slide-in-from-right duration-500">
          <SidebarControls />
        </div>

        <div className="mt-auto px-8 py-6 border-t border-[var(--border)]/20 bg-[var(--bg-secondary)]/30">
          <SidebarFooter />
        </div>
      </div>
    </>
  );
}
