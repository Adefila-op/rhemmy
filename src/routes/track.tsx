import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Bike } from "@/components/Bike";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import sketchBg from "@/assets/sketch-bg.png";

export const Route = createFileRoute("/track")({
  head: () => ({
    meta: [
      { title: "Track Delivery — Rhemmy Express" },
      { name: "description", content: "Track your Rhemmy Express delivery in real time as your rider moves down the road." },
      { property: "og:title", content: "Track Delivery — Rhemmy Express" },
      { property: "og:description", content: "Live tracking for every Rhemmy Express dispatch." },
    ],
  }),
  component: TrackPage,
});

// Synchronized intro timeline — every phase is scheduled relative to a single
// shared t0 captured via performance.now(), then driven by requestAnimationFrame
// so phase transitions can't drift apart under main-thread load (mobile-safe):
//   t0 + 0.00s  hero frame slides out (0.9s) + road sweeps in (1.1s)
//   t0 + 1.20s  bike ride forward begins  (1.60s) → ends at t0 + 2.80s
//   t0 + 2.00s  tracking panel pops in    (0.80s) → ends at t0 + 2.80s ◀ synced
function TrackPage() {
  const [phase, setPhase] = useState(0);
  const [code, setCode] = useState("");
  const [tracking, setTracking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    let raf = 0;
    const t0 = performance.now() + 50; // small lead-in so the first paint shows phase 0
    // milestones in ms relative to t0
    const milestones: Array<[number, number]> = [
      [0, 1],     // hero out + road sweep
      [1200, 2],  // bike ride starts
      [2000, 3],  // panel pop starts (ends with bike at t0 + 2800)
    ];
    let next = 0;
    const tick = () => {
      const elapsed = performance.now() - t0;
      while (next < milestones.length && elapsed >= milestones[next][0]) {
        setPhase(milestones[next][1]);
        next++;
      }
      if (next < milestones.length) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!tracking) return;
    const id = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 0.6)), 80);
    return () => clearInterval(id);
  }, [tracking]);

  // Debug toggle — press "D" to show alignment overlay
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "d") setDebug((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main>
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, oklch(0.88 0.13 85) 0%, oklch(0.78 0.18 60) 60%, oklch(0.66 0.21 42) 100%)" }}
      >
        <Header />

        {/* Sun */}
        <div className="absolute right-[10%] top-[18%] h-32 w-32 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.98 0.16 95) 0%, oklch(0.92 0.19 102 / 0.6) 60%, transparent 75%)" }} />

        {/* Phase 0/1/2: Hero slides out */}
        {phase < 3 && (
          <div className={`relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-32 md:px-10 md:pt-36 ${phase >= 1 ? "frame-slide-out" : ""}`}>
            <div className="sketch-bg pointer-events-none absolute inset-0" style={{ backgroundImage: `url(${sketchBg})` }} />
            <div className="relative max-w-2xl text-primary-foreground">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent"></p>
              <h1 className="mt-3 font-display text-accent" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 0.95 }}>
                Fast &<br />Reliable<br />Delivery
              </h1>
              <p className="mt-5 max-w-md text-white/90">Door-to-door pickup and intercity dispatch — anywhere across the nation.</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-pill">
                Pickup Delivery →
              </div>
            </div>
          </div>
        )}

        {/* Phase 3: Tracking panel */}
        {phase >= 3 && (
          <div className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-32 md:px-10 md:pt-36">
            <div className="panel-pop max-w-2xl text-primary-foreground">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Live tracking</p>
              <h1 className="mt-3 font-display text-accent" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 0.95 }}>
                Track Your<br />Delivery
              </h1>
              <p className="mt-5 max-w-md text-white/90">Enter your tracking code and watch your Rhemmy rider move down the road in real time.</p>

              <form
                onSubmit={(e) => { e.preventDefault(); if (code.trim()) { setTracking(true); setProgress(0); } }}
                className="mt-7 flex max-w-md flex-wrap items-center gap-3 rounded-full bg-white/15 p-2 backdrop-blur-md"
              >
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="e.g. RHM-2A8F1"
                  className="flex-1 rounded-full bg-transparent px-5 py-3 text-white placeholder-white/60 outline-none"
                />
                <button type="submit" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-pill transition-transform hover:scale-105">
                  Track →
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ROAD scene */}
        <div className="relative -mt-24 h-[260px] w-full overflow-hidden md:-mt-32 md:h-[320px]">
          <div className={`absolute inset-0 ${phase >= 1 ? "road-sweep" : "opacity-0"}`}>
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/30" />
            <div className="absolute inset-x-0 top-0 h-24 opacity-30" style={{
              background: "repeating-linear-gradient(90deg, oklch(0.3 0.05 40) 0 40px, transparent 40px 90px, oklch(0.35 0.05 40) 90px 130px, transparent 130px 200px)",
              maskImage: "linear-gradient(180deg, black 30%, transparent 100%)",
            }} />
            <div className="absolute bottom-0 left-0 right-0 h-[60%]" style={{ background: "linear-gradient(180deg, oklch(0.62 0.21 38) 0%, oklch(0.52 0.2 32) 100%)" }}>
              <div className="absolute inset-x-0 top-0 h-[3px] bg-white/70" />
              <div className="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2 overflow-hidden">
                <div className="road-dash absolute inset-0" style={{
                  backgroundImage: "repeating-linear-gradient(90deg, white 0 60px, transparent 60px 120px)",
                  backgroundSize: "120px 100%",
                }} />
              </div>
              <div className="absolute left-0 right-0 bottom-[18%] h-[4px] overflow-hidden opacity-60">
                <div className="road-dash-slow absolute inset-0" style={{
                  backgroundImage: "repeating-linear-gradient(90deg, white 0 40px, transparent 40px 90px)",
                  backgroundSize: "90px 100%",
                }} />
              </div>

              {/* DEBUG: dashed-line center marker (within road) */}
              {debug && (
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-cyan-400/90 mix-blend-screen" />
              )}
            </div>
          </div>

          {/* Riding bike — mounted as soon as the road appears so it's never hidden mid-transition */}
          {phase >= 1 && (
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 w-[420px] max-w-[80%] -translate-x-1/2 md:w-[520px]">
              <div className={phase >= 2 ? "bike-forward-x" : "opacity-0"}>
                <div className="bike-bob relative">
                  <Bike className="block w-full drop-shadow-[0_25px_30px_rgba(0,0,0,0.45)]" />

                  {/* DEBUG: front-wheel anchor marker.
                      Bike SVG viewBox 420x220, front wheel center = (325,175) → (77.4%, 79.5%) */}
                  {debug && (
                    <>
                      <div
                        className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fuchsia-500 bg-fuchsia-500/40"
                        style={{ left: "77.4%", top: "79.5%" }}
                      />
                      <div
                        className="pointer-events-none absolute left-0 right-0 h-px bg-fuchsia-500/70"
                        style={{ top: "79.5%" }}
                      />
                    </>
                  )}
                </div>
                <div className="dust-loop pointer-events-none absolute -bottom-2 left-[-10%] h-10 w-[120%] rounded-full"
                  style={{ background: "radial-gradient(ellipse at center, oklch(0.92 0.19 102 / 0.4), transparent 70%)", filter: "blur(6px)" }}
                />
              </div>
            </div>
          )}
        </div>

        {/* DEBUG toggle hint */}
        {phase >= 1 && (
          <button
            type="button"
            onClick={() => setDebug((v) => !v)}
            className="absolute right-4 top-20 z-30 rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur"
          >
            {debug ? "Debug: ON" : "Debug (D)"}
          </button>
        )}
      </section>

      {/* Status panel */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          {tracking ? (
            <div className="panel-pop rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Tracking</p>
                  <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">{code.toUpperCase()}</h2>
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                  Rider en route • {Math.round(progress)}%
                </span>
              </div>

              <div className="relative mt-6 h-3 w-full overflow-hidden rounded-full bg-muted">
                <div className="absolute inset-y-0 left-0 rounded-full bg-primary transition-[width] duration-100" style={{ width: `${progress}%` }} />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  { t: "Picked up", done: progress > 5 },
                  { t: "On the road", done: progress > 30 },
                  { t: "Out for delivery", done: progress > 75 },
                ].map((s) => (
                  <div key={s.t} className={`rounded-2xl border p-4 ${s.done ? "border-primary bg-primary/5" : "border-border bg-background"}`}>
                    <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <span className={`h-2 w-2 rounded-full ${s.done ? "bg-primary" : "bg-muted-foreground/40"}`} />
                      {s.t}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : phase >= 3 ? (
            <div className="panel-pop rounded-3xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
              Enter your tracking code above to see your rider on the road.
            </div>
          ) : null}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
