import PrivacyHero from "../components/privacy/PrivacyHero";
import PrivacyContent from "../components/privacy/PrivacyContent";
import SEO from "../components/seo/SEO";

export default function Privacy() {
  return (
    <>
    <SEO
  title="Privacy Policy"
  description="Read the Privacy Policy of Shifa Technologies."
  keywords="privacy policy"
  url="/privacy"
/>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}