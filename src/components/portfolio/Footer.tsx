import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {year} {personalInfo.name} — Crafted with care.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
          Delhi · India
        </p>
      </div>
    </footer>
  );
}
