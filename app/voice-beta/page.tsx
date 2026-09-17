import type { Metadata } from "next";
import { cookies } from "next/headers";
import {
  isValidFounderPass,
  VOICE_BETA_COOKIE,
} from "@/lib/voice-beta-auth";
import { VoiceBetaExperience } from "./VoiceBetaExperience";
import styles from "./voice-beta.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AgentFlow Voice — Founder Beta | Gen I Labs",
  description: "Founder-controlled AgentFlow Voice receptionist beta.",
  robots: { index: false, follow: false, nocache: true },
};

type VoiceBetaPageProps = {
  searchParams: Promise<{ denied?: string }>;
};

export default async function VoiceBetaPage({ searchParams }: VoiceBetaPageProps) {
  const cookieStore = await cookies();
  const founderPass = cookieStore.get(VOICE_BETA_COOKIE)?.value;

  if (isValidFounderPass(founderPass)) {
    return <VoiceBetaExperience />;
  }

  const { denied } = await searchParams;

  return (
    <main className={styles.gateShell}>
      <section className={styles.gateCard} aria-labelledby="founder-gate-title">
        <div className={styles.eyebrow}>Private operational preview</div>
        <h1 id="founder-gate-title">AgentFlow Voice founder beta</h1>
        <p>
          This live website surface is restricted to the Gen I Labs founder review gate.
          It is not an unrestricted public launch.
        </p>
        <form action="/voice-beta/access" method="post" className={styles.gateForm}>
          <label htmlFor="founderPass">Founder access pass</label>
          <input
            id="founderPass"
            name="founderPass"
            type="password"
            autoComplete="current-password"
            required
            minLength={32}
            maxLength={128}
            aria-describedby={denied ? "access-error" : undefined}
          />
          {denied ? (
            <p id="access-error" className={styles.errorText} role="alert">
              Access denied. Check the founder pass and try again.
            </p>
          ) : null}
          <button type="submit">Enter controlled beta</button>
        </form>
        <p className={styles.gateNote}>
          Access expires after 12 hours. Sessions remain subject to the runtime and token kill switches.
        </p>
      </section>
    </main>
  );
}
