import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-xl text-accent-foreground">R</div>
            <div>
              <div className="font-display text-xl">RHEMMY</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Express</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-background/70">Fast & reliable door-to-door delivery across the nation.</p>
        </div>
        <div>
          <h4 className="font-display text-lg text-accent">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-background/80">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-accent">Reach Us</h4>
          <ul className="mt-3 space-y-2 text-sm text-background/80">
            <li>WhatsApp: +234 704 838 3643</li>
            <li>Instagram: @Rhemmy_Express</li>
            <li>Email: hello@rhemmyexpress.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-accent">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-background/80">
            <li>Mon – Sat: 8am – 8pm</li>
            <li>Sun: 10am – 4pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Rhemmy Express Logistics. All rights reserved.
      </div>
    </footer>
  );
}
