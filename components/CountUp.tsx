"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  suffix?: string;
  duration?: number; // ms
};

export default function CountUp({ end, suffix = "", duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, started]);

  useEffect(() => {
    if (!started) return;

    const steps = Math.ceil(duration / 30);
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out: fast start, slow end
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(progress * end));

      if (step >= steps) {
        setCount(end);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
