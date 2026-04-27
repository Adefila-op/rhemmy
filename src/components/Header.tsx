import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/track", label: "Track Delivery" },
] as const;

export function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-xl text-accent-foreground shadow-pill">R</div>
          <div className="leading-tight">
            <div className="font-display text-xl text-primary-foreground">RHEMMY</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Express</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-1.5 backdrop-blur-md md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              inactiveProps={{ className: "text-white/90 hover:bg-white/10" }}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-pill transition-transform hover:scale-105 md:inline-flex"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
