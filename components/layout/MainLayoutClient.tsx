"use client";

import { ReactNode } from "react";
import NavbarLayout from "./navbars/NavbarLayout";
import CustomCursor from "./shared/CustomCursor";

export default function MainLayoutClient({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomCursor />
      <NavbarLayout>{children}</NavbarLayout>
    </>
  );
}
