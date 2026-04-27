// Delivery bike (scooter-style) SVG with spinning wheels.
// Sourced from the user-supplied template, restyled for Rhemmy Express (orange + yellow).
export function Bike({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="bikeBody" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.98 0.01 80)" />
          <stop offset="0.55" stopColor="oklch(0.86 0.02 80)" />
          <stop offset="1" stopColor="oklch(0.45 0.03 50)" />
        </linearGradient>
        <linearGradient id="bikeAccent" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.92 0.19 102)" />
          <stop offset="1" stopColor="oklch(0.85 0.2 90)" />
        </linearGradient>
        <radialGradient id="bikeWheel" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="oklch(0.3 0.01 50)" />
          <stop offset="0.7" stopColor="oklch(0.14 0.005 50)" />
          <stop offset="1" stopColor="oklch(0.06 0.003 50)" />
        </radialGradient>
      </defs>

      {/* delivery box on rear */}
      <g>
        <rect x="108" y="92" width="110" height="70" rx="6" fill="oklch(0.66 0.21 42)" stroke="oklch(0.3 0.05 40)" strokeWidth="1.5" />
        <rect x="108" y="92" width="110" height="14" rx="6" fill="url(#bikeAccent)" />
        <text x="163" y="135" textAnchor="middle" fontSize="15" fontWeight="900" fill="oklch(0.99 0.01 90)" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.5">RHEMMY</text>
        <text x="163" y="150" textAnchor="middle" fontSize="7" fontWeight="700" fill="oklch(0.99 0.01 90 / 0.85)" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="3">EXPRESS</text>
        <rect x="120" y="160" width="86" height="4" rx="2" fill="oklch(0.2 0.02 40)" />
      </g>

      {/* deck */}
      <path d="M70 160 L320 160 L340 172 L90 172 Z" fill="url(#bikeBody)" stroke="oklch(0.3 0.02 50)" strokeWidth="1" />
      <rect x="95" y="167" width="230" height="2" fill="url(#bikeAccent)" />

      {/* stem + handlebar */}
      <path d="M300 160 L315 60 L328 60 L316 160 Z" fill="url(#bikeBody)" />
      <rect x="285" y="52" width="58" height="10" rx="5" fill="oklch(0.22 0.02 40)" />
      <circle cx="290" cy="57" r="4" fill="url(#bikeAccent)" />
      <circle cx="320" cy="75" r="6" fill="url(#bikeAccent)" />
      <circle cx="320" cy="75" r="12" fill="oklch(0.92 0.19 102 / 0.25)" />

      {/* fenders */}
      <path d="M305 150 Q325 135 345 150" stroke="oklch(0.4 0.02 50)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 150 Q80 135 100 150" stroke="oklch(0.4 0.02 50)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* wheels */}
      <g>
        <circle cx="80" cy="175" r="28" fill="url(#bikeWheel)" stroke="oklch(0.1 0.005 50)" strokeWidth="2" />
        <g className="wheel-spin" style={{ transformOrigin: "80px 175px" }}>
          <circle cx="80" cy="175" r="18" fill="none" stroke="oklch(0.55 0.02 50)" strokeWidth="1.5" />
          <line x1="80" y1="157" x2="80" y2="193" stroke="oklch(0.6 0.02 50)" strokeWidth="1.5" />
          <line x1="62" y1="175" x2="98" y2="175" stroke="oklch(0.6 0.02 50)" strokeWidth="1.5" />
          <line x1="67" y1="162" x2="93" y2="188" stroke="oklch(0.5 0.02 50)" strokeWidth="1" />
          <line x1="93" y1="162" x2="67" y2="188" stroke="oklch(0.5 0.02 50)" strokeWidth="1" />
          <circle cx="80" cy="175" r="4" fill="oklch(0.92 0.19 102)" />
        </g>
      </g>
      <g>
        <circle cx="325" cy="175" r="28" fill="url(#bikeWheel)" stroke="oklch(0.1 0.005 50)" strokeWidth="2" />
        <g className="wheel-spin" style={{ transformOrigin: "325px 175px" }}>
          <circle cx="325" cy="175" r="18" fill="none" stroke="oklch(0.55 0.02 50)" strokeWidth="1.5" />
          <line x1="325" y1="157" x2="325" y2="193" stroke="oklch(0.6 0.02 50)" strokeWidth="1.5" />
          <line x1="307" y1="175" x2="343" y2="175" stroke="oklch(0.6 0.02 50)" strokeWidth="1.5" />
          <line x1="312" y1="162" x2="338" y2="188" stroke="oklch(0.5 0.02 50)" strokeWidth="1" />
          <line x1="338" y1="162" x2="312" y2="188" stroke="oklch(0.5 0.02 50)" strokeWidth="1" />
          <circle cx="325" cy="175" r="4" fill="oklch(0.92 0.19 102)" />
        </g>
      </g>
    </svg>
  );
}
