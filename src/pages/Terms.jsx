import TermsHero from "../components/terms/TermsHero";
import TermsContent from "../components/terms/TermsContent";
import SEO from "../components/seo/SEO";
export default function Terms() {
  return (
    <>
    <SEO
  title="Terms & Conditions"
  description="Read the Terms & Conditions of Shifa Technologies."
  keywords="terms and conditions"
  url="/terms"
/>
      <TermsHero />
      <TermsContent />
    </>
  );
}