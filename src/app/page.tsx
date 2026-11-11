import { LandingBoot } from "@/components/landing-boot";
import { SiteHeader } from "@/components/site-header";
import {
  AboutSection,
  ComparisonSection,
  CtaSection,
  FooterSection,
  HeroSection,
  HowItWorksSection,
  PredictionSection,
} from "@/components/sections";

export default function Home() {
  return (
    <LandingBoot>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PredictionSection />
        <HowItWorksSection />
        <ComparisonSection />
        <CtaSection />
        <FooterSection />
      </main>
    </LandingBoot>
  );
}
