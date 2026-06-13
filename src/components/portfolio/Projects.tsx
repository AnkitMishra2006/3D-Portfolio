import { useRef, useState, useEffect } from "react";
import { projects } from "@/data/portfolio";
import { ProjectDialog } from "./ProjectDialog";

type ProjectType = (typeof projects)[number];

// Decorative project preview with brand color + initial — keeps the section
// visually rich without external images. If a `videoUrl` is provided the
// preview becomes a hover-to-play video with the decorative frame as poster.
function ProjectMock({
  name,
  color,
  image,
}: {
  name: string;
  color: string;
  gradient: string;
  image?: string;
}) {
  const initials = name
    .split(/\s|-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
      suppressHydrationWarning
      style={{
        background: `radial-gradient(120% 80% at 20% 10%, ${color}33, transparent 60%), linear-gradient(135deg, #1a1a1a, #0a0a0a)`,
      }}
    >
      {mounted && (
        <>
          {/* Faux browser chrome */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-1.5 px-4 py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <div className="ml-3 flex-1 h-5 rounded-full bg-white/10" />
          </div>

          {/* Project Image or Initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover pt-11"
              />
            ) : (
              <div className="pt-8 flex items-center justify-center w-full h-full">
                <span
                  className="font-display text-[10rem] leading-none select-none"
                  style={{ color, opacity: 0.85 }}
                >
                  {initials}
                </span>
              </div>
            )}
          </div>

          {/* Decorative dots */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
            <div className="space-y-1.5">
              <div className="h-1.5 w-16 rounded-full bg-white/30" />
              <div className="h-1.5 w-24 rounded-full bg-white/15" />
            </div>
            <div
              className="h-12 w-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white/70 text-xl"
              style={{ background: `${color}66` }}
            >
              ↗
            </div>
          </div>

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </>
      )}
    </div>
  );
}

export function Projects() {
  // Show top 6 featured projects; mention more below
  const featured = projects.slice(0, 6);
  const [selected, setSelected] = useState<ProjectType | null>(null);
  const [open, setOpen] = useState(false);

  const openProject = (p: ProjectType) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <section id="projects" className="relative bg-ink text-cream py-24 md:py-32 overflow-hidden grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              [ 03 ] Selected work
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Things I've
              <br />
              <em className="italic text-coral">built.</em>
            </h2>
          </div>
          <p className="max-w-sm text-cream/60 text-base">
            A handful of projects spanning full-stack web apps, AI tools, real-time systems and
            browser games. Code is on GitHub — demos are live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((p, idx) => (
            <article
              key={p.id}
              onClick={() => openProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openProject(p);
                }
              }}
              className="group flex flex-col gap-5 p-6 md:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-coral/60 hover:bg-white/[0.05] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral/60"
            >
              <ProjectMock
                name={p.name}
                color={p.color}
                gradient={p.gradient}
                image={(p as any).image}
              />

              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-cream/50 tabular-nums">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                          p.status === "Completed"
                            ? "border-cream/20 text-cream/60"
                            : "border-coral/40 text-coral"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-cream">{p.name}</h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Live demo of ${p.name}`}
                      className="h-10 w-10 rounded-full bg-coral text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      ↗
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Source code of ${p.name}`}
                      className="h-10 w-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream hover:bg-white/5 transition-all"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="text-cream/70 text-sm md:text-base leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cream/70"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 6 && (
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-full text-cream/50">
                      +{p.tech.length - 6}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <p className="text-cream/70 text-center md:text-left">
            <span className="font-display text-2xl text-cream">{projects.length - featured.length}+</span> more
            projects on GitHub — chat apps, summarizer extensions, animation playgrounds and more.
          </p>
          <a
            href="https://github.com/AnkitMishra2006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-6 py-3 text-sm font-medium hover:bg-coral hover:text-white transition-colors"
          >
            View all on GitHub →
          </a>
        </div>
      </div>

      <ProjectDialog project={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
}
