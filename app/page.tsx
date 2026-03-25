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

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProofStrip />
        <ProblemSection />
        <LeadLeakCalculator />
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
