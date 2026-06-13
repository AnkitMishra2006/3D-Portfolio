import { skills } from "@/data/portfolio";

const order = [
  "Programming",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "Services & Integrations",
  "AI/ML & Data",
  "Core Competencies",
];

export function Skills() {
  const grouped = order
    .map((cat) => ({
      category: cat,
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-sand/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              [ 02 ] Toolkit
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              The stack I
              <br />
              <em className="italic text-coral">reach for.</em>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A curated set of languages, frameworks and tools I use daily — plus a few I'm
            actively leveling up on.
          </p>
        </div>

        <div className="space-y-10">
          {grouped.map((group, idx) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-border last:border-0"
            >
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-3xl">{group.category}</h3>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:border-coral hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    <span
                      className="h-2 w-2 rounded-full transition-transform group-hover:scale-150"
                      style={{ backgroundColor: skill.color }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
