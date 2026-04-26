"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function Typewriter({ text, speed = 50, delay = 0, className = "" }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      let currentText = "";
      let index = 0;
      
      const type = () => {
        if (index < text.length) {
          currentText += text[index];
          setDisplayedText(currentText);
          index++;
          timeout = setTimeout(type, speed);
        } else {
          setIsDone(true);
        }
      };
      
      type();
    };

    const initialDelay = setTimeout(startTyping, delay);
    
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return (
    <span className={`${className} ${!isDone ? "typing-cursor" : ""}`}>
      {displayedText}
    </span>
  );
}
