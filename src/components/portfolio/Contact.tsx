import { personalInfo } from "@/data/portfolio";
import { ContactForm } from "./ContactForm";

const links = [
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: "LinkedIn", value: "/ankitkumarmishra06", href: personalInfo.linkedin },
  { label: "GitHub", value: "@AnkitMishra2006", href: personalInfo.github },
  { label: "LeetCode", value: "/Ankit-Mishra2006", href: personalInfo.leetcode },
];

export function Contact() {
  return (
    <section id="contact" className="relative pt-24 md:pt-32 pb-12">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="relative rounded-[2.5rem] bg-ink text-cream p-10 md:p-16 lg:p-20 overflow-hidden grain">
          {/* big rotating sticker */}
          <div className="absolute top-8 right-8 h-28 w-28 animate-spin-slow hidden md:block">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path id="contact-circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="var(--coral)" />
              <text fontSize="9.5" fill="white" fontFamily="var(--font-mono)" letterSpacing="2">
                <textPath href="#contact-circle">
                  GET · IN · TOUCH · LET'S · BUILD ·
                </textPath>
              </text>
            </svg>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-6">
            [ 05 ] Contact
          </p>

          <h2 className="sr-only">Contact Me - Open to Opportunities</h2>
          <p aria-hidden="true" className="font-display text-[14vw] md:text-[9vw] lg:text-[7rem] leading-[0.9] tracking-tight max-w-5xl">
            Let's make
            <br />
            something <em className="italic text-coral">good.</em>
          </p>

          <p className="mt-6 max-w-xl text-cream/70 text-lg">
            I'm currently open to internships, freelance projects and collaborations. Whether you
            have a brief or just an idea — let's chat.
          </p>

          <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
            <ContactForm />

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
                    Or email directly
                  </div>
                  <div className="mt-1.5 text-cream group-hover:text-coral transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
                <span className="text-cream/60 group-hover:text-coral group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                {links
                  .filter((l) => l.label !== "Email")
                  .map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={`Visit Ankit's ${l.label} profile`}
                      className="bg-ink p-4 md:p-5 hover:bg-white/5 transition-colors group"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-widest text-cream/50">
                        {l.label}
                      </div>
                      <div className="mt-1.5 text-cream group-hover:text-coral transition-colors text-[13px] md:text-sm whitespace-nowrap">
                        {l.value} <span className="opacity-60">↗</span>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
