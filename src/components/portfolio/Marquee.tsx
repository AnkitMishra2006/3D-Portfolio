const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Machine Learning",
  "Socket.io",
  "Docker",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section
      aria-label="Tech stack"
      className="border-y border-border bg-background py-6 overflow-hidden"
    >
      <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((label, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-3xl md:text-4xl text-foreground">
              {label}
            </span>
            <span className="text-coral text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
