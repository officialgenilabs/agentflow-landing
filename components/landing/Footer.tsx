import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            GEN{" "}
            <span className="text-purple">I</span>{" "}
            LABS
          </span>

          <p className="text-sm text-muted text-center">
            {footer.copyright}
          </p>

          <a
            href={`mailto:${footer.email}`}
            className="text-sm text-muted hover:text-purple transition"
          >
            {footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
