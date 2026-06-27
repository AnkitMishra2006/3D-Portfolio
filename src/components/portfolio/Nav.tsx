import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";
import logo from "@/assets/logo-lr-transparent.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`flex items-center justify-between rounded-full border border-border/60 px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "bg-background/40 backdrop-blur-md"
          }`}
        >
          <a href="#home" className="flex items-center" aria-label="Ankit Mishra — Home">
            <img
              src={logo}
              alt="Ankit Mishra logo"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-secondary"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-sm font-medium hover:bg-coral transition-colors"
          >
            Let's talk
            <span aria-hidden>→</span>
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden mt-3 rounded-3xl bg-background/95 backdrop-blur-xl border border-border p-5 shadow-xl">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base text-foreground/80 hover:text-coral hover:bg-secondary rounded-xl transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-ink text-cream px-5 py-3 text-sm font-medium"
              >
                Let's talk →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
