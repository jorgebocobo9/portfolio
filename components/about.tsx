export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 border-t border-white/[0.04]">
      <p className="text-[0.7rem] uppercase tracking-[0.12em] text-indigo-400 font-semibold mb-4">
        About Me
      </p>
      <div className="max-w-[640px]">
        <p className="text-[#a3a3a3] text-sm leading-relaxed mb-3">
          I&apos;m a software engineer based in the Philippines, currently finishing my
          CS degree at UP Los Ba&ntilde;os while working full-time as the lead engineer
          at{" "}
          <span className="text-[#e5e5e5]">Mornings in the Lab Live Network</span>,
          where I built and maintain 4 production web apps powering live broadcasts.
        </p>
        <p className="text-[#a3a3a3] text-sm leading-relaxed mb-3">
          I&apos;ve shipped everything from AI career platforms with Stripe billing to
          Netflix-style streaming apps on Google Cloud. I led a team of 2 senior
          engineers and handle the full stack — from system architecture to deployment.
        </p>
        <p className="text-[#a3a3a3] text-sm leading-relaxed">
          I&apos;m currently taking on freelance projects. If you need someone who can
          own your product end-to-end and ship fast,{" "}
          <a
            href="#contact"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            let&apos;s talk
          </a>
          .
        </p>
      </div>
    </section>
  );
}
