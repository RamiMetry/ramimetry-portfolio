"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  name: string;
  level: number; // 0–100
  delay?: number; // ms
};

export default function SkillBar({ name, level, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-slate-500 dark:text-slate-400 tabular-nums">
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-500 dark:from-violet-400 dark:to-cyan-400"
          style={{
            width: visible ? `${level}%` : "0%",
            transition: `width 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
