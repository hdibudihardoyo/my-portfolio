"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const blobRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        cursorRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        if (!isVisible) setIsVisible(true);
      }
    };

    const handleTouchEnd = () => {
    };

    let animationFrameId: number;
    const updatePosition = () => {
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${cursorRef.current.x - 200}px, ${cursorRef.current.y - 200}px)`;
        blobRef.current.style.opacity = isVisible ? "0.2" : "0";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${cursorRef.current.x - 20}px, ${cursorRef.current.y - 20}px)`;
        ringRef.current.style.opacity = isVisible ? "1" : "0";
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={blobRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[-1] blur-[100px] transition-[colors,opacity] duration-500 opacity-0"
        style={{
          background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
          willChange: "transform, opacity",
        }}
      />

      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] flex items-center justify-center bg-[var(--accent)]/10 opacity-0 transition-opacity duration-300"
        style={{
          willChange: "transform, opacity",
          mixBlendMode: "screen"
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />
      </div>
    </>
  );
}
