import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <Hero />
        <StatsBar />
        {/* Projects section — Task 8 */}
        <section id="projects" className="py-16 sm:py-24 border-t border-white/[0.04]">
          <p className="text-[#525252] text-sm">Projects coming in next task...</p>
        </section>
        {/* Contact section — Task 9 */}
        <section id="contact" className="py-16 sm:py-24 border-t border-white/[0.04]">
          <p className="text-[#525252] text-sm">Contact form coming in next task...</p>
        </section>
        <Footer />
      </main>
    </>
  );
}
