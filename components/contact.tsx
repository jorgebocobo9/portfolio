"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactResult } from "@/app/actions/contact";
import { SOCIALS } from "@/lib/constants";

export function Contact() {
  const [state, formAction, isPending] = useActionState<ContactResult | null, FormData>(
    sendContactEmail,
    null
  );

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="text-center mb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.12em] text-indigo-400 font-semibold mb-2">Get in Touch</p>
        <h2 className="text-3xl font-bold tracking-tight">Let&apos;s build something together.</h2>
        <p className="text-[#525252] text-sm mt-2">
          Have a project in mind? Tell me about it — I typically respond within 24 hours.
        </p>
      </div>

      <div className="max-w-[600px] mx-auto bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.03)_0%,transparent_50%)] pointer-events-none" />

        {state?.success ? (
          <div className="relative text-center py-8">
            <p className="text-lg font-semibold mb-2">Message sent!</p>
            <p className="text-[#a3a3a3] text-sm">I&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form action={formAction} className="relative">
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                disabled={isPending}
                className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#e5e5e5] placeholder:text-[#525252] outline-none focus:border-indigo-500/40 focus:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all disabled:opacity-50"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                disabled={isPending}
                className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#e5e5e5] placeholder:text-[#525252] outline-none focus:border-indigo-500/40 focus:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all disabled:opacity-50"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder="Tell me about your project..."
              disabled={isPending}
              rows={4}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#e5e5e5] placeholder:text-[#525252] outline-none resize-none focus:border-indigo-500/40 focus:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all mb-4 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white py-3 rounded-xl text-sm font-medium shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {isPending ? "Sending..." : "Send Message →"}
            </button>
            {state && !state.success && (
              <p className="text-red-400 text-xs mt-3 text-center">
                {state.error}{" "}
                <a href={`mailto:${SOCIALS.email}`} className="underline">
                  {SOCIALS.email}
                </a>
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
