import Image from "next/image";
import { footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
            <Image
              src="/brand/agentflow-logo.png"
              alt="AgentFlow"
              width={56}
              height={56}
              className="h-11 w-11 rounded-xl object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              AgentFlow by Gen I Labs
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Premium systems for real estate agents and small teams.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
