import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bike } from "@/components/Bike";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Bell, Package, MapPin, ArrowRight, ChevronUp, Box } from "lucide-react";
import sketchBg from "@/assets/sketch-bg.png";
import riderHero from "@/assets/rider-hero.png";

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
  const [expanded, setExpanded] = useState(false);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [size, setSize] = useState<"Small" | "Medium" | "Large">("Medium");

  const handleConfirm = () => {
    const message = [
      "🛵 *New Rhemmy Express Pickup Request*",
      "",
      `📍 *Pickup:* ${pickup || "(not provided)"}`,
      `🎯 *Drop-off:* ${dropoff || "(not provided)"}`,
      `📦 *Package Size:* ${size}`,
    ].join("\n");
    const url = `https://wa.me/2348165232700?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* MOBILE VIEW - Rhemmy Dash Shell (small screens < 768px) */}
      <div className="md:hidden min-h-screen w-full bg-neutral-100 flex items-center justify-center p-0 md:p-6 font-sans">
        {/* Phone frame */}
        <div className="relative w-full h-screen bg-orange-500 shadow-2xl border-gray-900 overflow-hidden">
          {/* Header */}
          <div className="relative z-30 flex items-start justify-between px-7 pt-3">
            <Link to="/" className="flex items-center gap-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-display text-lg font-bold text-gray-900 shadow-md">R</div>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold text-gray-900">RHEMMY</div>
                <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-800">Express</div>
              </div>
            </Link>
            <button
              aria-label="Notifications"
              className="h-11 w-11 rounded-full bg-white/95 grid place-items-center shadow-md hover:scale-105 transition-transform"
            >
              <Bell className="h-5 w-5 text-gray-900" strokeWidth={2.2} />
            </button>
          </div>

          {/* Hero rider section */}
          <motion.div
            initial={false}
            animate={
              expanded
                ? { y: -140, scale: 0.55, filter: "blur(1.5px)", opacity: 0.85 }
                : { y: 0, scale: 1, filter: "blur(0px)", opacity: 1 }
            }
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="absolute z-20 left-1/2 -translate-x-1/2 top-[18%] w-[88%] pointer-events-none"
          >
            <motion.div
              animate={
                expanded
                  ? { y: [0, -6, 0, -4, 0], rotate: [0, -1.5, 0, 1.5, 0] }
                  : { y: [0, -3, 0], rotate: 0 }
              }
              transition={{
                duration: expanded ? 0.6 : 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={riderHero}
                alt="Rhemmy delivery rider"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Drag-up gesture hint */}
          <AnimatePresence>
            {!expanded && (
              <motion.button
                key="hint"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={() => setExpanded(true)}
                className="absolute z-20 left-1/2 -translate-x-1/2 bottom-[44%] flex flex-col items-center gap-1"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-10 w-10 rounded-full bg-gray-900/90 grid place-items-center shadow-lg"
                >
                  <ChevronUp className="h-5 w-5 text-yellow-400" strokeWidth={3} />
                </motion.div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-900/70 font-bold">
                  Tap to book
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Bottom Sheet */}
          <motion.div
            initial={false}
            animate={{ y: expanded ? 0 : "calc(100% - 180px)" }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="absolute z-40 left-0 right-0 bottom-0 top-[42%] bg-white rounded-t-[2.25rem] shadow-xl flex flex-col"
          >
            <button
              onClick={() => setExpanded((v) => !v)}
              className="w-full pt-3 pb-2 grid place-items-center shrink-0"
              aria-label="Toggle booking sheet"
            >
              <span className="block h-1.5 w-12 rounded-full bg-gray-300" />
            </button>

            <div className="px-6 pb-7 overflow-y-auto">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                Book a Pickup
              </h2>
              <p className="mt-1.5 text-sm text-gray-500">
                Schedule a pickup and leave the rest to us.
              </p>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-yellow-100 px-4 py-3">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gray-900 grid place-items-center">
                  <Box className="h-5 w-5 text-yellow-400" strokeWidth={2.4} />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-gray-900">Fast. Reliable. Hassle-free.</p>
                  <p className="text-xs text-gray-700">We'll pickup your package and deliver it safely.</p>
                </div>
              </div>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase">Pickup Location</label>
                      <input
                        type="text"
                        placeholder="Where are we picking up?"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase">Drop-off Location</label>
                      <input
                        type="text"
                        placeholder="Where should we drop it?"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase">Package Size</label>
                      <div className="flex gap-2 mt-2">
                        {(["Small", "Medium", "Large"] as const).map((s) => (
                          <button
                            key={s}
                            onClick={() => setSize(s)}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                              size === s
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={handleConfirm}
                      className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Book Pickup
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP VIEW - Rhemmy Ride Hub Landing (large screens >= 768px) */}
      <main className="hidden md:block">
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
    </>
  );
}
