"use client";

import { TECH_LIST } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32 text-center overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
        <div className="aurora-blob absolute -top-[200px] -left-[100px] w-[500px] h-[500px] rounded-full bg-[rgba(99,102,241,0.25)] blur-[100px] animate-[aurora-float_10s_ease-in-out_infinite_alternate]" />
        <div className="aurora-blob absolute -top-[100px] -right-[150px] w-[400px] h-[400px] rounded-full bg-[rgba(168,85,247,0.2)] blur-[100px] animate-[aurora-float_10s_ease-in-out_infinite_alternate_-4s]" />
        <div className="aurora-blob absolute -bottom-[150px] left-[35%] w-[350px] h-[350px] rounded-full bg-[rgba(59,130,246,0.15)] blur-[100px] animate-[aurora-float_10s_ease-in-out_infinite_alternate_-7s]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-[-0.05em] leading-none bg-gradient-to-r from-white via-white/80 to-indigo-400 bg-clip-text text-transparent mb-3">
          JG Bocobo
        </h1>
        <p className="text-lg text-[#a3a3a3] mb-1">Lead Software Engineer</p>
        <span className="inline-block px-3 py-1 rounded-full text-[0.65rem] font-medium uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 mb-5">
          Available for freelance
        </span>
        <p className="text-sm text-[#525252] max-w-[500px] mx-auto leading-relaxed mb-7">
          I architect and ship production systems — AI platforms, live streaming
          networks, and SaaS products. I&apos;ve built 5 apps serving real users
          and led a team of senior engineers to do it.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm font-medium shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl border border-white/[0.08] text-sm text-[#a3a3a3] hover:text-white hover:border-white/[0.15] transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Tech marquee */}
        <div className="relative overflow-hidden max-w-[700px] mx-auto [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="marquee-track flex gap-3 w-max animate-[marquee-scroll_35s_linear_infinite] hover:[animation-play-state:paused]">
            {[...TECH_LIST, ...TECH_LIST].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="shrink-0 px-4 py-1.5 rounded-full text-xs font-mono text-[#a3a3a3] bg-white/[0.04] border border-white/[0.06] whitespace-nowrap hover:border-indigo-500/30 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
