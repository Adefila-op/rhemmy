import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import sketchBg from "@/assets/sketch-bg.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rhemmy Express" },
      { name: "description", content: "Rhemmy Express is a logistics company built for speed, reliability and door-to-door care across the nation." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-20 pt-32 md:pt-36" style={{ background: "var(--gradient-hero)" }}>
        <Header />
        <div className="sketch-bg pointer-events-none absolute inset-0" style={{ backgroundImage: `url(${sketchBg})` }} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Our story</p>
          <h1 className="mt-3 font-display text-accent" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 0.95 }}>
            About Rhemmy Express
          </h1>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="font-display text-4xl text-foreground">Built for the streets, trusted at the door.</h2>
            <p className="mt-5 text-muted-foreground">
              Rhemmy Express is a Nigerian logistics company on a mission to make sending and receiving simple. From neighbourhood pickups to nationwide dispatch, we move with care, speed and a service-first attitude.
            </p>
            <p className="mt-4 text-muted-foreground">
              We started with one rider and a promise — show up, on time, every time. Today we serve hundreds of senders, businesses and families across the country.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "5K+", l: "Deliveries completed" },
              { n: "98%", l: "On-time arrivals" },
              { n: "12", l: "Cities served" },
              { n: "24/7", l: "Customer support" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-warm">
                <div className="font-display text-4xl text-accent md:text-5xl">{s.n}</div>
                <div className="mt-1 text-sm opacity-90">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl px-6 md:px-10">
          <h3 className="font-display text-3xl text-foreground md:text-4xl">What we stand for</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Speed", d: "Every minute matters. We move fast — without skipping the small details." },
              { t: "Care", d: "Your parcel is treated like ours. Padded, tracked, double-checked." },
              { t: "Trust", d: "Real people, real updates, real accountability — from pickup to drop-off." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-7">
                <h4 className="font-display text-2xl text-primary">{v.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl px-6 text-center md:px-10">
          <Link to="/contact" className="inline-flex rounded-full bg-accent px-8 py-4 font-bold text-accent-foreground shadow-pill transition-transform hover:scale-105">
            Pickup Delivery →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
