import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Container from "../components/ui/Container";
import ContactMap from "../components/contact/ContactMap";
import CTASection from "../components/common/CTASection";

export default function Contact() {
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