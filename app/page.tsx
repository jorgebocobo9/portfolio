import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <Hero />
        <StatsBar />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
