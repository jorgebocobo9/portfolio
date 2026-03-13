"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="mb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.12em] text-indigo-400 font-semibold mb-2">Featured Work</p>
        <h2 className="text-3xl font-bold tracking-tight">Projects I&apos;ve Shipped</h2>
        <p className="text-[#525252] text-sm mt-2 max-w-[500px]">
          Production applications handling real users, live broadcasts, and AI-powered features.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-4"
      >
        {/* Hero project — Interconnect */}
        <motion.div variants={itemVariants}>
          <ProjectCard project={PROJECTS[0]} featured />
        </motion.div>

        {/* 2x2 grid for remaining projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.slice(1).map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
