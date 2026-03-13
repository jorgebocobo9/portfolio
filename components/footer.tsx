import { SOCIALS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#525252]">
      <span>&copy; 2026 JG Bocobo</span>
      <div className="flex gap-5">
        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#a3a3a3] transition-colors">GitHub</a>
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#a3a3a3] transition-colors">LinkedIn</a>
        <a href={`mailto:${SOCIALS.email}`} className="hover:text-[#a3a3a3] transition-colors">Email</a>
      </div>
    </footer>
  );
}
