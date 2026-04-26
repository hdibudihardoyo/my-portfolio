"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const blobRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    let animationFrameId: number;
    const updatePosition = () => {
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${cursorRef.current.x - 200}px, ${cursorRef.current.y - 200}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${cursorRef.current.x - 20}px, ${cursorRef.current.y - 20}px)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[-1] opacity-20 blur-[100px] transition-colors duration-500"
        style={{
          background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
          willChange: "transform",
        }}
      />

      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] flex items-center justify-center bg-[var(--accent)]/10"
        style={{
          willChange: "transform",
          mixBlendMode: "screen"
        }}
      >

        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />
      </div>
    </>
  );
}
