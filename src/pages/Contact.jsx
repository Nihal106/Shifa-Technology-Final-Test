import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Container from "../components/ui/Container";
import ContactMap from "../components/contact/ContactMap";
import CTASection from "../components/common/CTASection";
import { useTranslation } from "react-i18next";
import { company } from "../config/company";
import SEO from "../components/seo/SEO";

export default function Contact() {
  const { t } = useTranslation("common");

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Shifa Technologies Medicals Co.",
    "description": "Get in touch with Shifa Technologies for medical equipment quotes, spare parts, and hospital solutions in Saudi Arabia.",
    "url": "https://www.shifatechnologies.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": company.name,
      "telephone": company.phone,
      "email": company.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": company.address,
        "addressLocality": "Jeddah",
        "addressCountry": "SA",
      },
    },
  };

  const breadcrumbs = [
    { name: t("nav.home"), item: "/" },
    { name: t("nav.contact"), item: "/contact" },
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Shifa Technologies for medical equipment inquiries, quotes, biomedical spare parts, and healthcare solutions in Jeddah and Saudi Arabia."
        keywords="contact medical supplier, healthcare equipment Saudi Arabia, medical equipment Jeddah, biomedical parts"
        url="/contact"
        breadcrumbs={breadcrumbs}
        schema={contactSchema}
      />
  <ContactHero />

  <section className="bg-slate-50 py-20">
    <Container>
      <div className="grid items-stretch gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Container>
  </section>
    <ContactMap />
     <CTASection
       title={t("cta.title")}
       description={t("cta.description")}
       primaryButtonText={t("cta.contact")}
       primaryButtonLink="/contact"
       secondaryButtonText={t("cta.whatsapp")}
       secondaryButtonLink={`https://wa.me/${company.whatsapp}`}
     />
</>
  );
}