import { createFileRoute, Link } from "@tanstack/react-router";
import { Bike } from "@/components/Bike";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import sketchBg from "@/assets/sketch-bg.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rhemmy Express — Fast & Reliable Door-to-Door Delivery" },
      { name: "description", content: "Same-day pickup and delivery across the nation. Book a Rhemmy Express rider in seconds." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-[100vh] overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Header />

        {/* sketch backdrop */}
        <div
          className="sketch-bg pointer-events-none absolute inset-0"
          style={{ backgroundImage: `url(${sketchBg})` }}
        />

        {/* dust trail behind bike */}
        <div
          className="dust-anim pointer-events-none absolute bottom-[18%] left-0 h-16 w-[55%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at right, oklch(0.92 0.19 102 / 0.35), transparent 70%)",
          }}
        />
        {/* light streak */}
        <div
          className="trail-anim pointer-events-none absolute left-[-10%] right-[10%] top-[58%] h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.92 0.19 102 / 0.9), transparent)",
            filter: "blur(1px)",
          }}
        />

        <div className="relative z-10 mx-auto grid min-h-[100vh] max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-24 pt-32 md:grid-cols-2 md:px-10 md:pt-28">
          {/* Copy */}
          <div className="text-primary-foreground">
            <div className="fade-up inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <h1
              className="headline-in mt-5 font-display text-accent"
              style={{ fontSize: "clamp(3rem, 9vw, 7rem)", lineHeight: 0.9 }}
            >
              Fast &<br />Reliable<br />Delivery
            </h1>
            <p className="fade-up delay-1 mt-6 max-w-md text-base text-white/85 md:text-lg">
              Door-to-door pickup and intercity dispatch — anywhere across the nation. One tap and your parcel is on the move.
            </p>

            <div className="fade-up delay-2 mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-pill transition-transform hover:scale-[1.04]"
              >
                Pickup Delivery
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Our Services
              </Link>
            </div>

            <div className="fade-up delay-3 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
              <span className="flex items-center gap-2"><span className="text-accent">●</span> Same-day dispatch</span>
              <span className="flex items-center gap-2"><span className="text-accent">●</span> Live tracking</span>
              <span className="flex items-center gap-2"><span className="text-accent">●</span> Nationwide reach</span>
            </div>
          </div>

          {/* Bike riding in from left */}
          <div className="relative h-[320px] md:h-[480px]">
            <div className="bike-enter absolute inset-x-0 bottom-8 mx-auto w-[110%] max-w-[640px] md:bottom-16">
              <Bike className="w-full drop-shadow-[0_25px_30px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
        </div>

        {/* ground line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </section>

      {/* FEATURES */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Why Rhemmy</p>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
              Always ready to render help.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Intercity & Interstate", d: "From Lagos to Abuja, Ibadan to Port Harcourt — we cover the routes that matter." },
              { t: "Door-to-Door Pickup", d: "We come to you. No queues, no stress — your parcel collected and delivered." },
              { t: "Real-Time Tracking", d: "Watch every kilometre. Know exactly when your delivery arrives." },
            ].map((f) => (
              <div key={f.t} className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-warm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-2xl text-primary-foreground transition-transform group-hover:rotate-6">
                  ⚡
                </div>
                <h3 className="font-display text-2xl text-foreground">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden py-20" style={{ background: "var(--gradient-hero)" }}>
        <div
          className="sketch-bg pointer-events-none absolute inset-0"
          style={{ backgroundImage: `url(${sketchBg})` }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center text-primary-foreground md:px-10">
          <h2 className="font-display text-4xl text-accent md:text-6xl">Send with Rhemmy Express today!</h2>
          <p className="max-w-xl text-white/85">It's a new week and we're always on clock to help with intercity and interstate item deliveries to your doorstep.</p>
          <Link
            to="/contact"
            className="rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-pill transition-transform hover:scale-105"
          >
            Pickup Delivery →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
