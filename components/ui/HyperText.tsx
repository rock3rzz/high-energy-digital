import React, { useEffect, useRef, useState } from "react";

interface HyperTextProps {
  text: string;
  duration?: number;
  className?: string;
  animateOnHover?: boolean;
  delay?: number;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*!<>[]{}".split("");

export const HyperText: React.FC<HyperTextProps> = ({
  text,
  duration = 800,
  className = "",
  animateOnHover = true,
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [trigger, setTrigger] = useState(false);
  const iterations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    iterations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      triggerAnimation();
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!trigger) return;

    const interval = setInterval(() => {
      if (iterations.current < text.length) {
        setDisplayText((t) =>
          t
            .split("")
            .map((l, i) => {
              if (l === " ") return l;
              if (i < iterations.current) {
                return text[i];
              }
              return alphabets[Math.floor(Math.random() * alphabets.length)];
            })
            .join("")
        );
        iterations.current = iterations.current + 0.1;
      } else {
        setDisplayText(text);
        clearInterval(interval);
        setTrigger(false);
      }
    }, duration / (text.length * 10));

    return () => clearInterval(interval);
  }, [text, duration, trigger]);

  return (
    <span
      className={`inline-block ${className}`}
      onMouseEnter={animateOnHover ? triggerAnimation : undefined}
    >
      {displayText}
    </span>
  );
};