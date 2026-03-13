"use client";

import { useEffect, useState } from "react";
import { SOCIALS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const EXTERNAL_LINKS = [
  { href: SOCIALS.github, label: "GitHub" },
  { href: SOCIALS.linkedin, label: "LinkedIn" },
];

export function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-8 h-[60px] flex items-center justify-between">
        <span className="font-bold text-base tracking-tight">JG Bocobo</span>
        <div className="flex items-center gap-7 text-sm text-[#737373]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-[#e5e5e5] ${
                active === link.href ? "text-[#e5e5e5]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#e5e5e5] hidden sm:inline"
            >
              {link.label} <span className="text-xs">↗</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
