import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import sketchBg from "@/assets/sketch-bg.png";
import courier from "@/assets/courier.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rhemmy Express" },
      { name: "description", content: "Reach Rhemmy Express on WhatsApp, Instagram, or send a pickup request directly from this page." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [km, setKm] = useState(5);
  const [size, setSize] = useState<"small" | "medium" | "large">("small");

  const RATE_PER_KM = 250; // ₦ per km
  const BASE_FEE = 800;
  const sizeMultiplier = { small: 1, medium: 1.35, large: 1.8 }[size];
  const total = Math.round((BASE_FEE + km * RATE_PER_KM) * sizeMultiplier);
  const fmt = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });


  return (
    <main>
      {/* Hero like the brochure: orange + sketch + smiling courier + yellow display heading */}
      <section className="relative overflow-hidden pb-20 pt-28 md:pt-32" style={{ background: "var(--gradient-hero)" }}>
        <Header />
        <div className="sketch-bg pointer-events-none absolute inset-0" style={{ backgroundImage: `url(${sketchBg})` }} />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-8 px-6 pt-10 md:grid-cols-2 md:px-10">
          <div className="text-primary-foreground md:pb-16">
            <h1 className="font-display text-accent" style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)", lineHeight: 0.92 }}>
              Always<br />Ready to<br />Render help
            </h1>
            <p className="mt-6 max-w-md text-base text-white/90 md:text-lg">
              It's a new week and we're always on clock to help with intercity and interstate item deliveries to your doorstep. Send with{" "}
              <span className="font-bold text-accent">Rhemmy Express</span> today!
            </p>
          </div>

          <div className="relative flex h-[420px] items-end justify-center md:h-[560px]">
            <img
              src={courier}
              alt="Smiling Rhemmy Express courier holding a parcel"
              width={1024}
              height={1280}
              className="h-full w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        {/* Contact strip — like the white pill at the bottom of the brochure */}
        <div className="relative z-10 mx-auto mt-6 max-w-6xl px-6 pb-2 md:px-10">
          <div className="grid grid-cols-1 items-center gap-4 rounded-3xl bg-background px-6 py-5 shadow-warm md:grid-cols-4 md:gap-6 md:px-8">
            <div className="flex items-center justify-center">
              <div className="grid h-16 w-16 grid-cols-4 grid-rows-4 gap-[2px] rounded-md bg-foreground p-1.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="rounded-[1px]" style={{ background: Math.random() > 0.45 ? "oklch(0.99 0 0)" : "transparent" }} />
                ))}
              </div>
            </div>
            <a href="https://wa.me/2347048383643" className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">✆</span>
              <span className="font-bold">+234 704 838 3643</span>
            </a>
            <a href="https://instagram.com/Rhemmy_Express" className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">◎</span>
              <span className="font-bold">@Rhemmy_Express</span>
            </a>
            <div className="flex items-center justify-center md:justify-end">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-2xl text-primary-foreground shadow-pill">R</div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE QUOTE */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Live quote</p>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Get a Quote</h2>
            <p className="mt-3 text-muted-foreground">
              Real-time pricing — drag the distance and pick a parcel size to see your fare instantly.
            </p>
          </div>

          <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-warm md:grid-cols-5 md:p-10">
            <div className="md:col-span-3">
              <div className="flex items-end justify-between">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Distance</label>
                <span className="font-display text-2xl text-foreground">{km} km</span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                value={km}
                onChange={(e) => setKm(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--primary)]"
              />
              <div className="mt-1 flex justify-between text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                <span>1 km</span><span>50 km</span><span>100 km</span>
              </div>

              <div className="mt-8">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Parcel size</label>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {(["small", "medium", "large"] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-bold capitalize transition-all ${
                        size === s
                          ? "border-primary bg-primary text-primary-foreground shadow-pill"
                          : "border-border bg-background text-foreground hover:border-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span>Base fee: {fmt.format(BASE_FEE)}</span>
                <span>Rate: {fmt.format(RATE_PER_KM)} / km</span>
                <span>Size factor: ×{sizeMultiplier}</span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-[oklch(0.7_0.21_45)] to-[oklch(0.55_0.2_32)] p-6 text-primary-foreground md:col-span-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Estimated fare</p>
                <div className="mt-2 font-display text-accent" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1 }}>
                  {fmt.format(total)}
                </div>
                <p className="mt-2 text-sm text-white/85">
                  {km} km · {size} parcel — final price confirmed at pickup.
                </p>
              </div>
              <a
                href={`https://wa.me/2347048383643?text=${encodeURIComponent(`Hi Rhemmy, I'd like to book a ${size} pickup for ${km}km. Quote: ${fmt.format(total)}`)}`}
                className="rounded-full bg-accent px-6 py-3 text-center text-sm font-bold text-accent-foreground shadow-pill transition-transform hover:scale-[1.03]"
              >
                Book this delivery →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup form */}

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-5 md:px-10">
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Send us a message</p>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Request a Pickup</h2>
            <p className="mt-4 text-muted-foreground">
              Fill out the form and a Rhemmy rider will reach out to confirm pickup, within minutes.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">●</span> Average response under 5 minutes</li>
              <li className="flex items-center gap-2"><span className="text-primary">●</span> Live tracking once your rider is dispatched</li>
              <li className="flex items-center gap-2"><span className="text-primary">●</span> Pay on pickup or on delivery</li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm md:col-span-3 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Phone number" name="phone" type="tel" />
              <Field label="Pickup address" name="pickup" full />
              <Field label="Drop-off address" name="dropoff" full />
              <div className="md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">What are we delivering?</label>
                <textarea
                  required
                  rows={4}
                  name="details"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Describe the item, size, and any handling notes…"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary py-4 font-bold text-primary-foreground shadow-pill transition-transform hover:scale-[1.01]"
            >
              {sent ? "✓ Request received — we'll call you shortly" : "Pickup Delivery →"}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Field({ label, name, type = "text", full = false }: { label: string; name: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
