import NotFoundContent from "../components/not-found/NotFoundContent";
import SEO from "../components/seo/SEO";

export default function NotFound() {
  return (
    <>
      <NotFoundContent />
      <SEO
        title="Page Not Found"
        description="The requested page could not be found."
        url="/404"
        noindex={true}
      />
    </>
  );
}