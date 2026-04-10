"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type LayoutType = "sidebar" | "navbar";

interface LayoutContextType {
  layoutType: LayoutType;
  toggleLayout: () => void;
  setLayoutType: (type: LayoutType) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [layoutType, setLayoutTypeState] = useState<LayoutType>("sidebar");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLayout = localStorage.getItem("portfolio-layout") as LayoutType;
    if (savedLayout && (savedLayout === "sidebar" || savedLayout === "navbar")) {
      setLayoutTypeState(savedLayout);
    }
    setIsInitialized(true);
  }, []);

  const setLayoutType = (type: LayoutType) => {
    setLayoutTypeState(type);
    localStorage.setItem("portfolio-layout", type);
  };

  const toggleLayout = () => {
    const newLayout = layoutType === "sidebar" ? "navbar" : "sidebar";
    setLayoutType(newLayout);
  };

  // Prevent hydration mismatch by not rendering until initialized
  // or provide a default that matches server rendering
  return (
    <LayoutContext.Provider value={{ layoutType, toggleLayout, setLayoutType }}>
      <div className={isInitialized ? "opacity-100 transition-opacity duration-300" : "opacity-0"}>
        {children}
      </div>
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
