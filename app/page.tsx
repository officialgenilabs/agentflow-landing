import { headers } from "next/headers";
import { CtaBand } from "@/components/landing/CtaBand";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { InclusionSection } from "@/components/landing/InclusionSection";
import { InstallsSection } from "@/components/landing/InstallsSection";
import { LeadLeakCalculator } from "@/components/landing/LeadLeakCalculator";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ProofSection } from "@/components/landing/ProofSection";
import { ProofStrip } from "@/components/landing/ProofStrip";
import { StickyCtaBar } from "@/components/landing/StickyCtaBar";
import { WhatIsSection } from "@/components/landing/WhatIsSection";
import { WhySection } from "@/components/landing/WhySection";
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
        <ProofStrip />
        <ProblemSection />
        <LeadLeakCalculator currency={currency} />
        <WhatIsSection />
        <InstallsSection />
        <CtaBand />
        <InclusionSection />
        <ProcessSection />
        <WhySection />
        <ProofSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
      <StickyCtaBar />
    </>
  );
}
