import portrait from "@/assets/portrait.png";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Display headline */}
          <div className="lg:col-span-8 -mt-2 md:-mt-4 lg:-mt-6">
            <h1 className="sr-only">Ankit Kumar Mishra - Full Stack Software Engineer & Web Developer</h1>
            <p aria-hidden="true" className="font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] xl:text-[9rem] leading-[0.92] tracking-tight text-foreground">
              Building <em className="text-coral not-italic">digital</em>
              <br />
              experiences <span className="italic font-display">that</span>
              <br />
              actually <em className="italic text-coral">ship.</em>
            </p>
          </div>

          {/* Right column: portrait + intro */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <div className="relative">
              {/* Spinning badge */}
              <div className="absolute -top-6 -left-6 z-10 h-24 w-24 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="var(--ink)" />
                  <text fontSize="9.5" fill="var(--cream)" fontFamily="var(--font-mono)" letterSpacing="2">
                    <textPath href="#circle">
                      FULL · STACK · DEV · ML · ENGINEER ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-coral" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
              </div>

              <div className="relative rounded-[2rem] bg-gradient-to-br from-coral-soft to-sand p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                <div className="rounded-[1.7rem] bg-ink/95 overflow-hidden">
                  <img
                    src={portrait}
                    alt="Portrait of Ankit Mishra, full stack web developer and software engineer"
                    className="w-full max-w-[280px] block"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    width={433}
                    height={577}
                  />
                </div>
                {/* Sticker tag */}
                <div className="absolute -bottom-4 -right-4 rounded-full bg-coral text-white px-4 py-2 text-xs font-mono uppercase tracking-widest rotate-6 shadow-lg">
                  Hello there ✦
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Hi, I'm <span className="text-foreground font-medium">{personalInfo.shortName}</span> — a
              full-stack web developer and software engineer with 2+ years shipping production web
              apps, REST APIs and microservices with React, Next.js, Node.js and Flask.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium hover:bg-coral transition-colors group"
              >
                See selected work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
