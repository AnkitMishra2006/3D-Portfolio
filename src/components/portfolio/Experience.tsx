import { experiences } from "@/data/portfolio";

const typeIcon: Record<string, string> = {
  education: "🎓",
  organization: "✦",
  work: "◆",
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              [ 04 ] Journey
            </p>
            <h2 className="sr-only">Professional Experience and Education</h2>
            <p aria-hidden="true" className="font-display text-5xl md:text-7xl leading-[0.95]">
              Where I've
              <br />
              <em className="italic text-coral">grown.</em>
            </p>
          </div>
          <p className="max-w-md text-muted-foreground">
            A timeline of education, communities and roles that shaped how I build today.
          </p>
        </div>

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute left-[15px] md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ${
                    left ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Dot */}
                  <span className="absolute left-[7px] md:left-1/2 top-2 h-4 w-4 rounded-full bg-coral ring-4 ring-background md:-translate-x-1/2 z-10" />

                  <div className={`pl-10 md:pl-0 ${left ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <p className="font-mono text-xs uppercase tracking-widest text-coral">
                      {exp.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      <span className="text-foreground font-medium">{exp.company}</span>
                      <span className="mx-2">·</span>
                      <span className="font-mono text-xs uppercase tracking-widest">
                        {typeIcon[exp.type]} {exp.type}
                      </span>
                    </p>
                  </div>

                  <div className={`pl-10 md:pl-0 ${left ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      <div className={`mt-4 flex flex-wrap gap-1.5 ${left ? "md:justify-start" : "md:justify-end"}`}>
                        {exp.skills.slice(0, 5).map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
