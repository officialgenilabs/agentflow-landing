import { headers } from "next/headers";
import { ExampleWorkspaceSection } from "@/components/landing/ExampleWorkspaceSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { InclusionSection } from "@/components/landing/InclusionSection";
import { InstallsSection } from "@/components/landing/InstallsSection";
import { LeadLeakCalculator } from "@/components/landing/LeadLeakCalculator";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { StickyCtaBar } from "@/components/landing/StickyCtaBar";
import { getCurrencyConfig } from "@/lib/currency";

export default async function Home() {
  const requestHeaders = await headers();
  const country =
    requestHeaders.get("x-vercel-ip-country") ??
    requestHeaders.get("x-country") ??
    "US";
  const currency = getCurrencyConfig(country);

  return (
    <>
      <main>
        <HeroSection />
        <ProblemSection />
        <InstallsSection />
        <ExampleWorkspaceSection />
        <InclusionSection />
        <ProcessSection />
        <LeadLeakCalculator currency={currency} />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
      <StickyCtaBar />
    </>
  );
}
