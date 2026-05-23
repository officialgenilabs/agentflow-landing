import { footer } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center font-heading text-lg font-bold tracking-tight text-white group">
            <Logo 
              size={20}
              className="mr-2 transition-transform duration-500 group-hover:scale-105" 
            />
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
