import TermsHero from "../components/terms/TermsHero";
import TermsContent from "../components/terms/TermsContent";
import SEO from "../components/seo/SEO";
export default function Terms() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Terms & Conditions", item: "/terms" },
  ];

  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read the Terms & Conditions of Shifa Technologies Medicals Co."
        keywords="terms and conditions, shifa technologies terms"
        url="/terms"
        breadcrumbs={breadcrumbs}
      />
      <TermsHero />
      <TermsContent />
    </>
  );
}