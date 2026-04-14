"use client";

import { useEffect, useState } from "react";

const roles = [
  "Fintech Architect",
  "Frontend Engineer",
  "Dashboard Builder",
  "Web3 Developer",
  "System Designer",
];

export default function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const current = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, mounted]);

  if (!mounted) {
    return <span>{roles[0]}</span>;
  }

  return (
    <span>
      {roles[roleIndex].slice(0, charIndex)}
      <span className="animate-blink ml-[1px] inline-block w-[2px] h-[1em] align-middle bg-accent" />
    </span>
  );
}
