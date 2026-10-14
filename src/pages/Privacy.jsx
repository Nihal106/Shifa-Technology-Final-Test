import PrivacyHero from "../components/privacy/PrivacyHero";
import PrivacyContent from "../components/privacy/PrivacyContent";
import SEO from "../components/seo/SEO";

export default function Privacy() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy" },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy of Shifa Technologies Medicals Co."
        keywords="privacy policy, shifa technologies privacy"
        url="/privacy"
        breadcrumbs={breadcrumbs}
      />
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}