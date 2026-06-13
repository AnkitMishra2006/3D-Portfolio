import { personalInfo, projects } from "@/data/portfolio";

const stats = [
  { value: `${projects.length}+`, label: "Projects shipped" },
  { value: "2+", label: "Years of experience" },
  { value: "8.30", label: "GPA · B.Tech CSE" },
  { value: "10+", label: "Production stacks" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              [ 01 ] About
            </p>
            <h2 className="sr-only">About Ankit Kumar Mishra</h2>
            <p aria-hidden="true" className="font-display text-5xl md:text-6xl leading-[0.95]">
              A short
              <br />
              <em className="text-coral not-italic">introduction.</em>
            </p>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
              I'm a Computer Science engineer based in Delhi with a love for building things that
              feel <em className="italic text-coral">obvious</em> to use and{" "}
              <em className="italic">elegant</em> under the hood.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {personalInfo.description} I bridge thoughtful UI craft with solid backend
              engineering — from real-time chat systems and AI tooling to data pipelines and
              browser games. When I'm not shipping, I'm exploring DSA, system design, and the
              latest in machine learning.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-6 md:p-7">
                  <div className="font-display text-4xl md:text-5xl text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
