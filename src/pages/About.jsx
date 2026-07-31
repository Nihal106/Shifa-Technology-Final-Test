import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import CoreValues from "../components/about/CoreValues";
import IndustriesSection from "../components/about/IndustriesSection";
import MissionVision from "../components/about/MissionVision";
import CTASection from "../components/common/CTASection";

export default function About() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
      <IndustriesSection />
<CTASection
  badge="Let's Work Together"
  title="Looking for Reliable Medical Equipment?"
  description="Our experienced team is ready to help you find the right healthcare solutions for your hospital, clinic, or laboratory."
  primaryButtonText="Contact Us"
  primaryButtonLink="/contact"
  secondaryButtonText="WhatsApp"
  secondaryButtonLink="https://wa.me/966500000000"
/>
    </>
  );
}