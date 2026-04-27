import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Package, MapPin, ArrowRight, ChevronUp, Box, Home, Map, User } from "lucide-react";
import { Bike } from "@/components/Bike";
import { BikeLaptop } from "@/components/BikeLaptop";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Rhemmy Express — Mobile Dashboard" },
      {
        name: "description",
        content:
          "Mobile dashboard for Rhemmy Express. Book a rider in seconds and track your package live.",
      },
      { property: "og:title", content: "Rhemmy Express — Dashboard" },
      {
        property: "og:description",
        content: "Same-day dispatch, live tracking, nationwide reach.",
      },
    ],
  }),
  component: Dashboard,
});

const WHATSAPP_NUMBER = "2348165232700";

function Dashboard() {
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
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Mobile View - Phone Frame */}
      <div className="min-h-screen w-full bg-neutral-100 flex items-center justify-center p-0 sm:p-6 font-sans sm:hidden">
        <div className="relative w-full h-screen sm:h-[860px] sm:rounded-[3rem] overflow-hidden bg-orange-500 shadow-2xl sm:border-[10px] sm:border-gray-900">
          {/* Status bar */}
          <div className="relative z-30 flex items-center justify-between px-7 pt-5 pb-2 text-gray-900 font-semibold text-sm">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-1 w-0.5 bg-gray-900" />
                ))}
              </div>
              <div className="w-4 h-2.5 border border-gray-900 rounded-sm flex items-center px-0.5">
                <div className="w-full h-1.5 bg-gray-900 rounded-xs" />
              </div>
              <div className="w-6 h-3 border border-gray-900 rounded-sm flex items-end px-0.5">
                <div className="w-full h-2 bg-gray-900" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="relative z-30 flex items-start justify-between px-7 pt-3">
            <div className="text-2xl font-bold text-gray-900">R Express</div>
            <button
              aria-label="Notifications"
              className="h-11 w-11 rounded-full bg-white/95 grid place-items-center shadow-md hover:scale-105 transition-transform"
            >
              <Bell className="h-5 w-5 text-gray-900" strokeWidth={2.2} />
            </button>
          </div>

          {/* Hero Section with Mobile Bike */}
          <div className="relative z-10 h-96 flex flex-col items-center justify-center px-4">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-xs"
            >
              <Bike className="w-full h-auto drop-shadow-lg" />
            </motion.div>
          </div>

          {/* Drag-up gesture hint */}
          <AnimatePresence>
            {!expanded && (
              <motion.button
                key="hint"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={() => setExpanded(true)}
                className="absolute z-20 left-1/2 -translate-x-1/2 bottom-[20%] flex flex-col items-center gap-1"
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
            {/* Drag handle */}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="w-full pt-3 pb-2 grid place-items-center shrink-0"
              aria-label="Toggle booking sheet"
            >
              <span className="block h-1.5 w-12 rounded-full bg-gray-300" />
            </button>

            <div className="px-6 pb-7 overflow-y-auto">
              <button
                onClick={() => setExpanded(true)}
                className="w-full flex items-start justify-between gap-3 text-left"
                aria-label="Book a Pickup"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                    Book a Pickup
                  </h2>
                  <p className="mt-1.5 text-sm text-gray-500 max-w-[14rem]">
                    Schedule a pickup and leave the rest to us.
                  </p>
                </div>
                <div className="relative shrink-0">
                  <div className="h-16 w-16 rounded-2xl bg-orange-100 grid place-items-center">
                    <Package className="h-7 w-7 text-orange-600" strokeWidth={2.2} />
                  </div>
                  <MapPin className="absolute -top-1 -right-1 h-5 w-5 fill-gray-900 text-gray-900" />
                </div>
              </button>

              {/* Tagline pill */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-yellow-100 px-4 py-3">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gray-900 grid place-items-center">
                  <Box className="h-5 w-5 text-yellow-400" strokeWidth={2.4} />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-gray-900">
                    Fast. Reliable. Hassle-free.
                  </p>
                  <p className="text-xs text-gray-700">
                    We'll pickup your package and deliver it safely.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {/* Location inputs */}
                <div className="space-y-3">
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
                </div>

                {/* Size selector */}
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

                {/* Confirm button */}
                <button
                  onClick={handleConfirm}
                  className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Book Pickup
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop View - Full Page */}
      <div className="hidden sm:flex min-h-screen w-full bg-gradient-to-br from-orange-50 to-orange-100 flex-col items-center justify-center p-8 font-sans">
        <div className="w-full max-w-6xl grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Large Bike */}
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full"
            >
              <BikeLaptop className="w-full h-auto drop-shadow-2xl" />
            </motion.div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-3">
                Book a Pickup
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Fast. Reliable. Hassle-free delivery at your fingertips.
              </p>
            </div>

            <div className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
              {/* Location inputs */}
              <div>
                <label className="text-sm font-semibold text-gray-700 uppercase">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Where are we picking up?"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 uppercase">Drop-off Location</label>
                <input
                  type="text"
                  placeholder="Where should we drop it?"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Size selector */}
              <div>
                <label className="text-sm font-semibold text-gray-700 uppercase">Package Size</label>
                <div className="flex gap-3 mt-2">
                  {(["Small", "Medium", "Large"] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                        size === s
                          ? "bg-orange-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConfirm}
                className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-3 text-lg shadow-lg"
              >
                Book Pickup Now
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
