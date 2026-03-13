"use client";

import { useRef, useState } from "react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-[#0a0a0a] border border-white/[0.06] rounded-[14px] overflow-hidden transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-indigo-500/30 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(99,102,241,0.1),0_0_0_1px_rgba(99,102,241,0.15)]"
    >
      {/* Spotlight glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
        style={{
          background: `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(99,102,241,0.07), transparent 50%)`,
        }}
      />

      {/* Screenshot area */}
      <div className="relative h-[140px] overflow-hidden">
        <img
          src={project.screenshot}
          alt={project.alt}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        {project.isLive && (
          <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 bg-green-500/10 border border-green-500/15 text-green-400 px-2.5 py-0.5 rounded-full text-[0.65rem] font-medium">
            <span className="live-dot w-[5px] h-[5px] bg-green-400 rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
            Live
          </div>
        )}
        <div className="absolute top-3.5 right-3.5 z-20 text-[0.7rem] text-[#a3a3a3] bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg font-mono">
          {project.domain}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-4 pb-5">
        <h3 className="text-base font-bold tracking-tight mb-1.5">{project.title}</h3>
        <p className="text-[0.78rem] text-[#a3a3a3] leading-relaxed mb-3">{project.description}</p>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.features.map((f) => (
            <span key={f} className="bg-indigo-500/[0.08] border border-indigo-500/[0.12] text-indigo-400 px-2 py-0.5 rounded text-[0.62rem] font-medium">
              {f}
            </span>
          ))}
        </div>

        {/* Tech details */}
        <div className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-2.5 mb-3">
          {project.tech.map((t, i) => (
            <div key={t.label} className={`flex gap-1.5 py-1 text-[0.7rem] ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
              <span className="text-[#525252] min-w-[64px] shrink-0 font-medium">{t.label}</span>
              <span className="text-[#a3a3a3] font-mono text-[0.65rem]">{t.value}</span>
            </div>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[0.75rem] text-indigo-400 font-medium hover:gap-2.5 transition-all"
        >
          Visit {project.domain} <span>→</span>
        </a>
      </div>
    </div>
  );
}
