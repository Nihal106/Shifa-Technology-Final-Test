import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Container from "../components/ui/Container";
import ContactMap from "../components/contact/ContactMap";
import CTASection from "../components/common/CTASection";
import { useTranslation } from "react-i18next";
import { company } from "../config/company";


export default function Contact() {
  const { t } = useTranslation("common");
  return (
   <>
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