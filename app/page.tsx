import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { BetaOffer } from "@/components/landing/BetaOffer";
import { StandardPricing } from "@/components/landing/StandardPricing";
import { AboutSection } from "@/components/landing/AboutSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <BeforeAfter />
        <BetaOffer />
        <StandardPricing />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
