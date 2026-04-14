"use client";

import { useEffect, useState } from "react";

const sections = ["about", "experience", "projects", "skills", "contact"];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:text-accent transition-colors"
      >
        {open ? (
          // X icon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // Hamburger icon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-down panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0a0a0f] border-b border-slate-200 dark:border-white/10 shadow-xl transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 pt-6 pb-2 flex justify-between items-center">
          <span className="font-bold tracking-tight text-lg">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-700 dark:text-slate-200 hover:text-accent transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="px-6 pb-6 flex flex-col gap-1">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setOpen(false)}
              className="capitalize py-3 px-4 rounded-lg text-lg font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-accent transition-colors"
            >
              {s}
            </a>
          ))}
          <a
            href="/Rami_Metry_CV.pdf"
            download
            onClick={() => setOpen(false)}
            className="mt-2 py-3 px-4 rounded-lg text-lg font-medium text-accent hover:bg-accent/10 transition-colors"
          >
            Download CV
          </a>
        </nav>
      </div>
    </div>
  );
}
