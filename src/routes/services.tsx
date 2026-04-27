import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import sketchBg from "@/assets/sketch-bg.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rhemmy Express" },
      { name: "description", content: "Intercity, interstate and same-day door-to-door delivery services from Rhemmy Express." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { t: "Same-Day Pickup", d: "Need it gone today? We dispatch within the hour and deliver the same day across the city.", icon: "🚀" },
  { t: "Intercity Delivery", d: "Reliable city-to-city movement with packaging care and live updates the whole way.", icon: "🛣️" },
  { t: "Interstate Logistics", d: "Coast-to-coast delivery handled with proper documentation and careful handovers.", icon: "🗺️" },
  { t: "Bulk & Business", d: "Custom rates and scheduled runs for stores, vendors and high-volume senders.", icon: "📦" },
  { t: "Fragile Items", d: "Padded transport for electronics, glassware and gifts — handled like our own.", icon: "🛡️" },
  { t: "Documents", d: "Time-sensitive papers, contracts and ID cards — discreet and on-time.", icon: "📄" },
];

function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-24 pt-32 md:pt-36" style={{ background: "var(--gradient-hero)" }}>
        <Header />
        <div className="sketch-bg pointer-events-none absolute inset-0" style={{ backgroundImage: `url(${sketchBg})` }} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">What we do</p>
          <h1 className="mt-3 font-display text-accent" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 0.95 }}>
            Our Services
          </h1>
          <p className="mt-5 max-w-xl text-white/85">From quick city runs to interstate dispatch — Rhemmy Express handles it all with speed and care.</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-warm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-3xl">{s.icon}</div>
              <h3 className="font-display text-2xl text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-5 rounded-3xl bg-foreground px-8 py-14 text-center text-background md:px-14">
          <h2 className="font-display text-3xl text-accent md:text-5xl">Need a custom plan?</h2>
          <p className="max-w-xl text-background/80">Tell us what you ship and how often — we'll build a delivery schedule around your business.</p>
          <Link to="/contact" className="rounded-full bg-accent px-8 py-4 font-bold text-accent-foreground shadow-pill transition-transform hover:scale-105">
            Talk to Us →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
