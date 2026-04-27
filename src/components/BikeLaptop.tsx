// Delivery motorcycle (larger, more detailed view) for desktop displays
// Premium view of Rhemmy Express bike with enhanced details
export function BikeLaptop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="laptopBikeBody" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.95 0.08 40)" />
          <stop offset="0.5" stopColor="oklch(0.75 0.15 30)" />
          <stop offset="1" stopColor="oklch(0.35 0.1 30)" />
        </linearGradient>
        <linearGradient id="laptopBikeOrange" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.65 0.28 40)" />
          <stop offset="1" stopColor="oklch(0.55 0.25 30)" />
        </linearGradient>
        <linearGradient id="laptopSeat" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.95 0.2 35)" />
          <stop offset="1" stopColor="oklch(0.7 0.22 40)" />
        </linearGradient>
        <radialGradient id="laptopWheel" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="oklch(0.25 0.02 50)" />
          <stop offset="0.7" stopColor="oklch(0.12 0.01 50)" />
          <stop offset="1" stopColor="oklch(0.04 0.005 50)" />
        </radialGradient>
      </defs>

      {/* delivery box - larger & more prominent */}
      <g>
        <rect x="140" y="100" width="180" height="140" rx="12" fill="url(#laptopBikeOrange)" stroke="oklch(0.2 0.05 30)" strokeWidth="2.5" />
        <rect x="140" y="100" width="180" height="25" rx="12" fill="url(#laptopBikeBody)" stroke="oklch(0.2 0.05 30)" strokeWidth="2.5" />
        
        {/* RHEMMY text - large */}
        <text x="230" y="155" textAnchor="middle" fontSize="32" fontWeight="900" fill="oklch(0.98 0.01 90)" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="2">
          RHEMMY
        </text>
        <text x="230" y="190" textAnchor="middle" fontSize="12" fontWeight="700" fill="oklch(0.98 0.01 90 / 0.8)" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="4">
          EXPRESS
        </text>
        
        {/* delivery box details */}
        <rect x="160" y="120" width="140" height="3" rx="1.5" fill="oklch(0.3 0.02 50)" opacity="0.5" />
        <rect x="160" y="225" width="140" height="4" rx="2" fill="oklch(0.15 0.03 40)" />
      </g>

      {/* main frame - chassis */}
      <path d="M100 280 L520 280 L540 300 L120 300 Z" fill="url(#laptopBikeBody)" stroke="oklch(0.25 0.02 40)" strokeWidth="2" />
      <line x1="130" y1="300" x2="510" y2="300" stroke="url(#laptopBikeOrange)" strokeWidth="3" />

      {/* handlebar assembly */}
      <path d="M480 280 L510 120 L530 120 L515 280 Z" fill="url(#laptopBikeBody)" stroke="oklch(0.2 0.02 40)" strokeWidth="2" />
      <rect x="460" y="100" width="90" height="18" rx="9" fill="oklch(0.15 0.03 40)" stroke="oklch(0.1 0.02 40)" strokeWidth="2" />
      <circle cx="475" cy="109" r="7" fill="url(#laptopBikeOrange)" stroke="oklch(0.1 0.02 40)" strokeWidth="1.5" />
      <circle cx="515" cy="135" r="10" fill="url(#laptopBikeOrange)" stroke="oklch(0.1 0.02 40)" strokeWidth="2" />
      <circle cx="515" cy="135" r="18" fill="url(#laptopBikeOrange)" opacity="0.15" />

      {/* seat - curved & stylized */}
      <ellipse cx="280" cy="240" rx="55" ry="22" fill="url(#laptopSeat)" stroke="oklch(0.3 0.08 40)" strokeWidth="2.5" />
      <path d="M250 245 Q280 255 310 245" fill="none" stroke="oklch(0.5 0.1 40)" strokeWidth="2" opacity="0.6" />

      {/* fenders */}
      <path d="M460 250 Q490 220 530 250" stroke="oklch(0.3 0.02 40)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M70 250 Q100 220 140 250" stroke="oklch(0.3 0.02 40)" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* front wheel - larger */}
      <g>
        <circle cx="120" cy="300" r="48" fill="url(#laptopWheel)" stroke="oklch(0.08 0.004 50)" strokeWidth="3" />
        <g className="wheel-spin" style={{ transformOrigin: "120px 300px" }}>
          <circle cx="120" cy="300" r="32" fill="none" stroke="oklch(0.5 0.03 50)" strokeWidth="2.5" />
          <circle cx="120" cy="300" r="22" fill="none" stroke="oklch(0.55 0.02 50)" strokeWidth="2" />
          <line x1="120" y1="268" x2="120" y2="332" stroke="oklch(0.6 0.02 50)" strokeWidth="2.5" />
          <line x1="88" y1="300" x2="152" y2="300" stroke="oklch(0.6 0.02 50)" strokeWidth="2.5" />
          <line x1="95" y1="275" x2="145" y2="325" stroke="oklch(0.55 0.02 50)" strokeWidth="2" />
          <line x1="145" y1="275" x2="95" y2="325" stroke="oklch(0.55 0.02 50)" strokeWidth="2" />
          <circle cx="120" cy="300" r="6" fill="url(#laptopBikeOrange)" />
        </g>
      </g>

      {/* rear wheel - larger */}
      <g>
        <circle cx="480" cy="300" r="48" fill="url(#laptopWheel)" stroke="oklch(0.08 0.004 50)" strokeWidth="3" />
        <g className="wheel-spin" style={{ transformOrigin: "480px 300px" }}>
          <circle cx="480" cy="300" r="32" fill="none" stroke="oklch(0.5 0.03 50)" strokeWidth="2.5" />
          <circle cx="480" cy="300" r="22" fill="none" stroke="oklch(0.55 0.02 50)" strokeWidth="2" />
          <line x1="480" y1="268" x2="480" y2="332" stroke="oklch(0.6 0.02 50)" strokeWidth="2.5" />
          <line x1="448" y1="300" x2="512" y2="300" stroke="oklch(0.6 0.02 50)" strokeWidth="2.5" />
          <line x1="455" y1="275" x2="505" y2="325" stroke="oklch(0.55 0.02 50)" strokeWidth="2" />
          <line x1="505" y1="275" x2="455" y2="325" stroke="oklch(0.55 0.02 50)" strokeWidth="2" />
          <circle cx="480" cy="300" r="6" fill="url(#laptopBikeOrange)" />
        </g>
      </g>

      {/* side mirror/detail */}
      <g>
        <circle cx="540" cy="125" r="8" fill="oklch(0.92 0.15 40)" stroke="oklch(0.2 0.02 40)" strokeWidth="1.5" />
        <path d="M545 125 L560 120 L560 130 Z" fill="oklch(0.8 0.1 40)" stroke="oklch(0.2 0.02 40)" strokeWidth="1" />
      </g>
    </svg>
  );
}
