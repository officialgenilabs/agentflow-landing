import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LiveShowcase } from "@/components/landing/LiveShowcase";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { GovernanceSection } from "@/components/landing/GovernanceSection";
import { RealEstateFirst } from "@/components/landing/RealEstateFirst";
import { PilotSection } from "@/components/landing/PilotSection";
import { FutureVision } from "@/components/landing/FutureVision";
import { BetaOffer } from "@/components/landing/BetaOffer";
import { StandardPricing } from "@/components/landing/StandardPricing";
import { AboutSection } from "@/components/landing/AboutSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] overflow-hidden">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: The Real Pain */}
        <ProblemSection />

        {/* Section 3: The Operational Layer */}
        <HowItWorks />

        {/* Section 4: Live Workflow Showcase */}
        <LiveShowcase />

        {/* Comparison: Before / After */}
        <BeforeAfter />

        {/* Section 5: Governance & Human Supervision */}
        <GovernanceSection />

        {/* Section 6: Why Real Estate First */}
        <RealEstateFirst />

        {/* Section 7: Controlled 30-Day Pilot */}
        <PilotSection />

        {/* Section 8: Future Vision */}
        <FutureVision />

        {/* Section 9: Beta Offer & Final Call to Action */}
        <BetaOffer />

        {/* Pricing reference post-pilot */}
        <StandardPricing />

        {/* General context */}
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
