"use client";

import { useEffect, useState } from "react";

const sections = ["about", "experience", "projects", "skills", "contact"];

export default function ActiveNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden sm:flex gap-6 text-sm text-slate-600 dark:text-slate-400">
      {sections.map((s) => (
        <a
          key={s}
          href={`#${s}`}
          className={`capitalize transition-colors relative py-1 ${
            active === s
              ? "text-accent"
              : "hover:text-accent"
          }`}
        >
          {s}
          {active === s && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
          )}
        </a>
      ))}
    </div>
  );
}
