"use client";

import LanguageToggle from "../shared/LanguageToggle";
import ThemeToggle from "../shared/ThemeToggle";

export default function NavbarControls() {
  return (
    <div className="flex items-center gap-3">
      {/* Theme Toggle Independent Container */}
      <div className="flex items-center justify-center">
        <ThemeToggle variant="dropdown" compact={true} />
      </div>

      {/* Language Toggle Independent Container */}
      <div className="flex items-center justify-center">
        <LanguageToggle variant="dropdown" compact={true} />
      </div>
    </div>
  );
}
