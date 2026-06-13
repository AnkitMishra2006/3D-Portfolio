import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Project = {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  tech: string[];
  features?: string[];
  color: string;
  gradient?: string;
  demoUrl: string;
  githubUrl: string;
  image?: string;
  status: string;
};

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  const initials = project.name
    .split(/\s|-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-4xl w-[95vw] max-h-[90vh] overflow-hidden p-0 gap-0 border-white/10 bg-ink text-cream rounded-3xl"
      >
        <DialogTitle className="sr-only">{project.name}</DialogTitle>
        <DialogDescription className="sr-only">{project.description}</DialogDescription>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero header */}
          <div
            className="relative h-56 md:h-72 w-full overflow-hidden"
            style={{
              background: `radial-gradient(120% 80% at 20% 10%, ${project.color}55, transparent 60%), linear-gradient(135deg, #1a1a1a, #0a0a0a)`,
            }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display text-[12rem] leading-none select-none"
                  style={{ color: project.color, opacity: 0.85 }}
                >
                  {initials}
                </span>
              </div>
            )}

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Status chip */}
            <div className="absolute top-5 left-5 z-10">
              <span
                className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-sm ${
                  project.status === "Completed"
                    ? "border-cream/30 text-cream/80 bg-black/30"
                    : "border-coral/60 text-coral bg-black/30"
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent pointer-events-none" />
          </div>

          {/* Body */}
          <div className="px-6 md:px-10 pb-10 -mt-6 relative">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral mb-2">
                  Project · #{String(project.id).padStart(2, "0")}
                </p>
                <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
                  {project.name}
                </h2>
              </div>
              <div className="flex gap-2 pt-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-coral text-white px-5 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform"
                >
                  Live demo ↗
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-sm font-medium hover:border-cream hover:bg-white/5 transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                  Source
                </a>
              </div>
            </div>

            {/* Overview */}
            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50 mb-3">
                [ Overview ]
              </p>
              <p className="text-cream/80 text-base md:text-lg leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mt-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50 mb-4">
                  [ Key features ]
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-cream/75 text-sm leading-relaxed"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/50 mb-4">
                [ Tech stack ]
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cream/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
