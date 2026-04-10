"use client";

import { ReactNode } from "react";
import SidebarLayout from "./sidebars/SidebarLayout";
import NavbarLayout from "./navbars/NavbarLayout";
import { useLayout } from "./LayoutContext";

export default function MainLayoutClient({ children }: { children: ReactNode }) {
  const { layoutType } = useLayout();

  return layoutType === "sidebar" ? (
    <SidebarLayout>{children}</SidebarLayout>
  ) : (
    <NavbarLayout>{children}</NavbarLayout>
  );
}
