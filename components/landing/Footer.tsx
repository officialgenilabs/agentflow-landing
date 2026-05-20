import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center font-heading text-lg font-bold tracking-tight text-white group">
            <svg 
              className="w-5 h-5 text-primary mr-2.5 transition-transform duration-500 group-hover:rotate-45" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 12 12 22 2 12" className="stroke-primary" />
              <polygon points="12 7 17 12 12 17 7 12" className="fill-secondary/35 stroke-secondary" />
              <circle cx="12" cy="12" r="1.5" className="fill-primary stroke-none" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
            <span className="tracking-wide">GEN <span className="text-primary font-extrabold">I</span> LABS</span>
          </a>

          <p className="text-sm text-muted text-center">
            {footer.copyright}
          </p>

          <a
            href={`mailto:${footer.email}`}
            className="text-sm text-muted hover:text-primary transition"
          >
            {footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
